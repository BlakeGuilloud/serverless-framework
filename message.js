'use strict';

const accountSid = process.env['ACCOUNT_SID'];
const authToken = process.env['ACCOUNT_TOKEN'];
const client = require('twilio')(accountSid, authToken);

module.exports.send = (event, context, callback) => {
  const body = {
    body: 'hello',
    to: '+18438126962',
    from: process.env['FROM_NUMBER'],
  };

  if (event.mediaUrl) {
    body.mediaUrl = 'https://s3-us-west-2.amazonaws.com/blake-images/asd%2B18438126962.jpeg';
  }

  return client.messages.create(body)
    .then(message => callback(null, message));
};
