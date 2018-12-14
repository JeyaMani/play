const crypto = require('crypto');
const OAuth = require('oauth-1.0a');

const oauth = OAuth({
  consumer: { key: '<your consumer key>', secret: '<your consumer secret>'},
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

//OAuth request data
oauth.authorize(request, token);
//header key-value pair
oauth.toHeader(oauth_data);

//Node.js
const crypto = require('crypto');

function hash_function_sha1(base_string, key) {
  return crypto.createHmac('sha1', key).update(base_string).digest('base64');
}

const oauth = OAuth({
  consumer: { key: '<your consumer key>', secret: '<your consumer secret>' },
  signature_method: 'HMAC-SHA1',
  hash_function: hash_function_sha1
});