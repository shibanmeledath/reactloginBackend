const crypto = require('crypto');

const generateSecureKey = () => {
  return crypto.randomBytes(32).toString('base64');
};

console.log(generateSecureKey());
