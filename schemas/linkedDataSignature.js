/*
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');

var w3cDateTime = require('./w3cDateTime');
var identifier = require('./identifier');

var schema = {
  required: true,
  title: 'Linked Data Signature',
  description: 'A Linked Data digital signature.',
  type: 'object',
  properties: {
    id: identifier({required: false}),
    type: {
      title: 'Linked Data Signature Type',
      required: true,
      type: 'string',
      enum: ['LinkedDataSignature2015', 'LinkedDataSignature2016']
    },
    creator: identifier(),
    created: w3cDateTime(),
    signatureValue: {
      title: 'Digital Signature Value',
      description: 'The Base64 encoding of the result of the signature algorithm.',
      required: true,
      type: 'string'
    }
  },
  additionalProperties: false
};

module.exports = function(extend) {
  if(extend) {
    return bedrock.util.extend(true, bedrock.util.clone(schema), extend);
  }
  return schema;
};
