/*
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var tools = require('bedrock').tools;

var schema = {
  required: true,
  title: 'Description',
  description: 'A description.',
  type: 'string',
  minLength: 0,
  maxLength: 5000,
  errors: {
    invalid: 'The description contains invalid characters or is more than ' +
      '5000 characters in length.',
    missing: 'Please enter a description.'
  }
};

module.exports = function(extend) {
  if(extend) {
    return tools.extend(true, tools.clone(schema), extend);
  }
  return schema;
};
