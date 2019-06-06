'use strict';

const config = require('../config');
const path = require('path');
const fs = require('fs');
const archiver = require('archiver');
const pkg = config.base.appName;

const output = fs.createWriteStream('./' + pkg + '.zip');

const archive = archiver('zip');

// 'close' event is fired only when a file descriptor is involved
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    // throw error
    throw err;
  }
});

// good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

archive.glob('dist/**/*');

archive.finalize();
