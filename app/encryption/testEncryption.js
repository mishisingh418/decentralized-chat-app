const { encryptAES, decryptAES, hashSHA256 } = require('./cryptoutils');

const key = '12345678901234567890123456789012'; // 32 bytes for AES-256
const message = "Hello World";

const encrypted = encryptAES(message, key);
console.log("Encrypted:", encrypted);

const decrypted = decryptAES(encrypted, key);
console.log("Decrypted:", decrypted);

const hashed = hashSHA256(message);
console.log("SHA-256 Hash:", hashed);


const { generateRSAKeys, encryptRSA, decryptRSA } = require('./keyExchange');

const { publicKey, privateKey } = generateRSAKeys();
const rsaMessage = "Hello RSA!";

const rsaEncrypted = encryptRSA(rsaMessage, publicKey);
console.log("RSA Encrypted:", rsaEncrypted);

const rsaDecrypted = decryptRSA(rsaEncrypted, privateKey);
console.log("RSA Decrypted:", rsaDecrypted);
