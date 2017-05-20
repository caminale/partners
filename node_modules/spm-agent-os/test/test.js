/*
 * Copyright (c) Sematext Group, Inc.
 * All Rights Reserved
 *
 * SPM for NodeJS is free-to-use, proprietary software.
 * THIS IS PROPRIETARY SOURCE CODE OF Sematext Group, Inc. (Sematext)
 * This source code may not be copied, reverse engineered, or altered for any purpose.
 * This source code is to be used exclusively by users and customers of Sematext.
 * Please see the full license (found in LICENSE in this distribution) for details on its license and the licenses of its dependencies.
 */
/* global describe, it */
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
var config = require('spm-agent').Config
var port = (process.env.NJS_TEST_PORT || 8095)
var receiverUrl = 'http://localhost:' + port
config.rcFlat.spmSenderBulkInsertUrl = receiverUrl
var http = require('http')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('{"code":"200"}\n')
}).listen(port, '127.0.0.1')

describe('SPM OS Metrics tests', function () {
  it('OS Agent sends metrics', function (done) {
    try {
      this.timeout(10000)
      config.transmitInterval = 1000
      config.collectionInterval = 500
      config.retransmitInterval = 1000
      config.recoverInterval = 1000
      config.maxDataPoints = 1
      var OsAgent = require('../index.js')
      var agent = new OsAgent()
      agent.start()
      var checkMetric = function () {
        agent.removeListener('metric', checkMetric)
        agent.stop()
        done()
      }
      agent.once('metric', checkMetric)
    } catch (err) {
      done(err)
    }
  })

  it('FAIL EXPECTED - Wait to fail with wrong SPM-Receiver URL', function (done) {
    this.timeout(30000)
    config.transmitInterval = 1000
    config.collectionInterval = 500
    config.retransmitInterval = 1000
    config.recoverInterval = 1000
    config.maxDataPoints = 1
    config.logger.console = false
    config.logger.level = 'debug'
    var SpmAgent = require('spm-agent')
    var ElAgent = require('../index.js')
    var elagent = new ElAgent()
    var agent = new SpmAgent('https://NOTREACHABLE')
    agent.createAgent(elagent)
    var checkMetric = function (stats) {
      if (stats.error > 0) {
        agent.stop()
        done()
      } else if (stats.send > 0) {
        done('how could it send when URL is not correct? - pls. check config settings')
      }
    }
    agent.once('stats', checkMetric)
  })
  it('SUCCESS EXPECTED - Wait for successful transmission to correct SPM-Receiver URL', function (done) {
    this.timeout(30000)
    var SpmAgent = require('spm-agent')
    var agent = new SpmAgent(receiverUrl)
    var ElAgent = require('../index.js')
    var elagent = new ElAgent()
    agent.createAgent(elagent)
    function checkMetrics (stats) {
      // console.log (stats)
      if (stats.send > 0) {
        agent.stop()
        done()
      } else if (stats.error > 0) {
        agent.removeListener('stats', checkMetrics)
        done('send errors in SPM')
        agent.stop()
      } else {
        // if old metricsdb is in local dir we might get retransmit as first event
        // so we need to register again
        // console.log (stats)
        agent.once('stats', checkMetrics)
      }
    }
    agent.once('stats', checkMetrics)
  })
  it('RETRANSMIT EXPECTED - 1st wrong SPM-Receiver URL, then correct URL, wait for retransmit', function (done) {
    this.timeout(70000)
    config.collectionInterval = 500
    config.retransmitInterval = 1000
    config.recoverInterval = 1000
    config.transmitInterval = 500
    config.maxDataPoints = 1
    config.logger.console = false
    // config.logger.level = 'debug'
    var SpmAgent = require('spm-agent')
    var agent = new SpmAgent('https://NOT_REACHABLE')
    var OsAgent = require('../index.js')
    var oagent = new OsAgent()
    agent.createAgent(oagent)
    setTimeout(function () {
      agent.setUrl(receiverUrl)
    }, 10000)
    var eventReceived = false
    agent.on('stats', function (stats) {
      console.log(stats)
      if (stats.retransmit > 0) {
        if (eventReceived) {
          return
        } else {
          eventReceived = true
        }
        done()
      }
    })

  })

})
