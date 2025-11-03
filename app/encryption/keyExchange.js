const crypto = require('crypto');

// Generate RSA Key Pair
function generateRSAKeys() {
    /*
    returns: { publicKey, privateKey }
    */
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,  // 2048-bit key
        publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs1', format: 'pem' }
    });
    return { publicKey, privateKey };
}

// RSA Encryption
function encryptRSA(message, publicKey) {
    /*
    message: string
    publicKey: PEM format
    returns: Base64 encrypted string
    */
    const buffer = Buffer.from(message, 'utf8');
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString('base64');
}

// RSA Decryption
function decryptRSA(encryptedMessage, privateKey) {
    /*
    encryptedMessage: Base64 string
    privateKey: PEM format
    returns: decrypted message as string
    */
    const buffer = Buffer.from(encryptedMessage, 'base64');
    const decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString('utf8');
}

// Export functions
module.exports = { generateRSAKeys, encryptRSA, decryptRSA };
