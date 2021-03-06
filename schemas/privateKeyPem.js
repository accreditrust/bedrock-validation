/*
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');

var schema = {
  required: true,
  title: 'Private Key PEM',
  description: 'A cryptographic Private Key in PEM format.',
  type: 'string',
  pattern: '^\\s*-----BEGIN RSA PRIVATE KEY-----[a-zA-Z0-9/+=\\s]*-----END RSA PRIVATE KEY-----\\s*$',
  errors: {
    invalid: 'The private key is not formatted correctly.',
    missing: 'The private key is missing.'
  }
};

module.exports = function(extend) {
  if(extend) {
    return bedrock.util.extend(true, bedrock.util.clone(schema), extend);
  }
  return schema;
};
