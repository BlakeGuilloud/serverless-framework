'use strict';

const cat = require('./cat');

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: {
      message: `Hello ${cat.cat}`,
      input: event,
    },
  };

  callback(null, response);
};
