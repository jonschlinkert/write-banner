/*!
 * write-banner <https://github.com/jonschlinkert/write-banner>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var write = require('write');
var strip = require('strip-banner');
var banner = require('add-banner');

var resolve = function(filepath) {
  return path.resolve(process.cwd(), filepath);
};

function read(filepath) {
  return fs.readFileSync(resolve(filepath), 'utf8');
}

module.exports = function writeBanner(src, dest, options) {
  if (typeof dest === 'object') {
    options = dest;
    dest = src;
  }
  if (!dest) {
    options = {};
    dest = src;
  }
  var str = strip(read(src));
  write.sync(dest, banner(options) + str);
};