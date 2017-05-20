/*
 * @copyright Copyright (c) Sematext Group, Inc. - All Rights Reserved
 *
 * @licence Sematext Agent for OS Metrics is free-to-use, proprietary software.
 * THIS IS PROPRIETARY SOURCE CODE OF Sematext Group, Inc. (Sematext)
 * This source code may not be copied, reverse engineered, or altered for any purpose.
 * This source code is to be used exclusively by users and customers of Sematext.
 * Please see the full license (found in LICENSE in this distribution) for details on its license and the licenses of its dependencies.
 */
'use strict'
var util = require('util')
var SpmAgent = require('spm-agent')
var Agent = SpmAgent.Agent
var config = SpmAgent.Config
var logger = SpmAgent.Logger
var os = require('os')
var cluster = require('cluster')
var linux = require('./linuxMetrics.js')
var lastValues = {}

function formatArray (a) {
  if (a instanceof Array) {
    if (a.length === 0) {
      return ''
    } else {
      return a.join('\t')
    }
  } else {
    return a + ''
  }
}
function calcDiff (name, value) {
  var diff = 0
  if (!lastValues[name]) {
    lastValues[name] = Number(value)
  }
  diff = value - lastValues[name]
  lastValues[name] = value
  return diff
}
/**
 * This module generates Linux-OS Metrics. Names are compatible with collectd. SpmSender uses collectd format for OS Metrics
 * @returns {Agent}
 */
module.exports = function () {
  var cpuLastValues = {}
  var linuxAgent = new Agent({
    // osnet    1457010656149    lo    0    0
    _formatLine: function (metric) {
      var now = (new Date().getTime()).toFixed(0)
      var line = null
      if (metric.sct === 'OS' && /collectd/.test(metric.name)) {
        line = this.collectdFormatLine(metric)
      } else {
        if (metric.sct === 'OS') {
          // new OS metric format
          if (metric.filters instanceof Array) {
            line = util.format('%d\t%s\t%d\t%s\t%s', now, metric.name, metric.ts, formatArray(metric.filters), formatArray(metric.value))
          } else {
            line = util.format('%d\t%s\t%d\t%s', now, metric.name, metric.ts, formatArray(metric.value))
          }
          logger.log(line)
        } else {
          line = util.format('%d\t%s\t%d\t%s\t%s', now, (metric.type || this.defaultType) + '-' + metric.name, metric.ts, formatArray(metric.filters), formatArray(metric.value))
          logger.log(line)
        }
      }
      return line
    },
    start: function (agent) {
      this.isLinux = (os.platform() === 'linux')
      this.formatLine = this._formatLine.bind(agent)
      this.agent = agent
      if (cluster.isMaster || process.env.NODE_APP_INSTANCE === 0 || process.env.SPM_MASTER_MODE === 1) {
        var timerId = setInterval(function () {
          var time = Date.now()
          var load = os.loadavg()
          var loadAvg1min = 0
          if (load && load.length > 0) {
            loadAvg1min = load[0]
          }
          agent.addMetrics({ts: time, type: 'os', name: 'oslo', filters: '', value: [loadAvg1min], sct: 'OS'})
          if (this.isLinux) {
            cpuLastValues['cpu'] = {idle: 0, user: 0, system: 0, irq: 0, nice: 0, iowait: 0, softirq: 0, steal: 0, total: 0}

            linux.cpuStats(function (cpu) {
              if (!cpu || !cpu.cpu) {
                return
              }
              var cpuProperties = ['user', 'nice', 'irq', 'system', 'idle', 'iowait', 'softirq', 'steal']

              var key = 'cpu'
              cpuProperties.forEach(function (property) {
                cpuLastValues[key][property] = calcDiff(key + property, Number(cpu[key][property]))
                cpuLastValues[key]['total'] = Number(cpuLastValues[key]['total']) + Number(cpuLastValues[key][property])
              })
              var cpuTotal = cpuLastValues[key]['total']
              var oscpu = {
                ts: time,
                type: 'os',
                name: 'oscpu',
                filters: '',
                value: [
                  (cpuLastValues[key].user / cpuTotal) * 100,
                  (cpuLastValues[key].nice / cpuTotal) * 100,
                  (cpuLastValues[key].system / cpuTotal) * 100,
                  (cpuLastValues[key].idle / cpuTotal) * 100,
                  (cpuLastValues[key].iowait / cpuTotal) * 100,
                  (cpuLastValues[key].irq / cpuTotal) * 100,
                  (cpuLastValues[key].softirq / cpuTotal) * 100,
                  (cpuLastValues[key].steal / cpuTotal) * 100
                ],
                sct: 'OS'
              }
              if (!/null/.test(JSON.stringify(oscpu))) {
                agent.addMetrics(oscpu)
              }
            })

            linux.networkStats(function (data) {
              if (data) {
                data.forEach(function (netStat) {
                  if (netStat.bytes && netStat.Interface) {
                    agent.addMetrics({ ts: time, name: 'osnet', filters: [netStat.Interface || 'unknown'],
                      value: [calcDiff(netStat.Interface + 'tx', Number(netStat.bytes.Transmit)),
                        calcDiff(netStat.Interface + 'rx', Number(netStat.bytes.Receive))],
                      sct: 'OS'
                    })
                  }
                })
              }
            })

            linux.df(function dfMetrics (err, data) {
              if (err) {
                return logger.error('Error in df() for disk-usage metrics:' + err)
              }
              if (data && data.length > 0) {
                data.forEach(function (disk) {
                  if (/\/dev\/.+/i.test(disk.filesystem)) {
                    var dev = disk.filesystem.split('/')[2]
                    agent.addMetrics({ ts: time, name: 'osdf', filters: [dev],
                      value: [disk.available * 1024, disk.used * 1024],
                      sct: 'OS'
                    })
                  }
                })
              }
            })

            linux.vmstat(function (err, vmstat) {
              SpmAgent.Logger.debug('vmstat ', vmstat)
              if (err) {
                SpmAgent.Logger.error('error calling vmstat ' + err)
                return
              }
              linux.vmstatS(function (err, vmstats) {
                if (err) {
                  SpmAgent.Logger.error('error calling vmstat ' + err)
                  return
                }
                var checkMemTotal = vmstats.memory.used + vmstats.memory.free + vmstats.memory.buffer + vmstats.memory.cache
                if (checkMemTotal <= vmstats.memory.total) {
                  // should be equal on CentoOS 7.2
                  agent.addMetrics({
                    ts: time,
                    type: 'os',
                    name: 'osmem',
                    filters: '',
                    value: [
                      vmstats.memory.used * 1024,
                      vmstats.memory.free * 1024,
                      vmstats.memory.cache * 1024,
                      vmstats.memory.buffer * 1024,
                      vmstat.swapd * 1024,
                      vmstat.si,
                      vmstat.so],
                    sct: 'OS'
                  })
                } else {
                  agent.addMetrics({
                    ts: time,
                    type: 'os',
                    name: 'osmem',
                    filters: '',
                    value: [
                      (vmstats.memory.used - (vmstats.memory.buffer + vmstats.memory.cache)) * 1024,
                      vmstats.memory.free * 1024,
                      vmstats.memory.cache * 1024,
                      vmstats.memory.buffer * 1024,
                      vmstat.swapd * 1024,
                      vmstat.si,
                      vmstat.so],
                    sct: 'OS'
                  })
                }

                if (vmstats.disks) {
                  try {
                    vmstats.disks.forEach(function (disk) {
                      agent.addMetrics({
                        ts: time,
                        type: 'os',
                        name: 'osdio',
                        filters: [disk.device],
                        value: [
                          (calcDiff(disk.device + 'sectors_read', disk.sectors_read) * 512),
                          (calcDiff(disk.device + 'sectors_written', disk.sectors_written) * 512)],
                        sct: 'OS'
                      })
                    })
                  } catch (diskInfoErr) {
                    console.log(diskInfoErr)
                  }
                }
              })
            })
          }
        }.bind(this), config.collectionInterval || 30000)
        if (timerId.unref) {
          timerId.unref()
        }
      }
    }
  }
  )
  return linuxAgent
}
