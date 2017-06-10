// const accountSid = 'AC045777d4b85c130ee4a91c41ad1d4ee1';
const accountSid = process.env['ACCOUNT_SID'];
const authToken = process.env['ACCOUNT_TOKEN'];
// const authToken = '1c935d52d0503c3fa9f8415c63df23ff';
const client = require('twilio')(accountSid, authToken);

'use strict';

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
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
