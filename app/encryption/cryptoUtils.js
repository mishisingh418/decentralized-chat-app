const crypto = require('crypto');

// cryptoutils.js

// AES Encryption
function encryptAES(message, key) {
    /*
    message: string to encrypt
    key: 16-byte string (AES-128) or 32-byte string (AES-256)
    returns: Base64 encoded encrypted message
    */
    
    const iv = crypto.randomBytes(16); // Initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    
    let encrypted = cipher.update(message, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    
    // Return iv + encrypted message, both encoded in Base64 for storage
    const ivBase64 = iv.toString('base64');
    return ivBase64 + ':' + encrypted;
}


// AES Decryption
function decryptAES(encryptedMessage, key) {
    /*
    encryptedMessage: string in format iv:encrypted (Base64)
    key: same key used for encryption
    returns: decrypted message as string
    */
    
    const parts = encryptedMessage.split(':');
    const iv = Buffer.from(parts[0], 'base64');
    const encryptedText = parts[1];
    
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
}


// SHA-256 Hashing
function hashSHA256(message) {
    /*
    message: string to hash
    returns: hex string
    */
    
    return crypto.createHash('sha256').update(message).digest('hex');
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
