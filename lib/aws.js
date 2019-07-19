'use strict';

const AWS = require('aws-sdk');

AWS.config.apiVersions = {
  s3: '2006-03-01',
};

module.exports = {
  s3: new AWS.S3()
}
