'use strict';

var yaml = require('js-yaml');
var rc = require('rc');
var ini = require('ini');
var stripJsonComments = require('strip-json-comments');

function parser (content, file) {
  if ((file && /\.json$/i.test(file)) || /^\s*\{/.test(content)) {
    return JSON.parse(stripJsonComments(content));
  }

  var config = yaml.load(content);

  if (typeof config === 'object') {
    return config;
  }

  return ini.parse(content);
}

function rcYaml (name, defaults, argv, parse) {
  return rc(name, defaults, argv, parse || parser);
}

rcYaml.parser = parser;

module.exports = rcYaml;
