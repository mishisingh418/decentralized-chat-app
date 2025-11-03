const crypto = require('crypto');

// cryptoutils.js

// AES Encryption
function encryptAES(message, key) {
    // TODO: Implement AES encryption
}

// AES Decryption
function decryptAES(encryptedMessage, key) {
    // TODO: Implement AES decryption
}

// SHA-256 Hashing
function hashSHA256(message) {
    // TODO: Implement SHA-256 hashing
}

// Export functions for use in other files
module.exports = {
    encryptAES,
    decryptAES,
    hashSHA256
};
/*
TEST DATA:

AES Key (16 bytes): "1234567890123456"
Sample message: "Hello World"

SHA-256 message: "Hello World"

These will be used to verify your functions when implementing.
*/
