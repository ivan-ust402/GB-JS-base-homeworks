'use strict';

function Message(text) {
    this.text = text;
    this.encrypted = "";
} 

Message.prototype.encrypt = function() {
    let symbolsAsNumbers = [];
    for (let i = 0; i < this.text.length; i++) {
        // charCodeAt https://mzl.la/2KExdCr
        // push https://mzl.la/3oba48D
        symbolsAsNumbers.push(this.text.charCodeAt(i));
    }
    this.encrypted = symbolsAsNumbers.join(" ");
};

Message.prototype.decrypt = function() {
    let encryptedStringAsArray = this.encrypted.split(" ");
    let decryptedString = String.fromCharCode(...encryptedStringAsArray);
    return decryptedString;
};

// let message = new Message("hello world");
// message.encrypt();
// console.log(message.encrypted);
// console.log(message.decrypt());

function HashMessage(text, hash) {
    Message.call(this, text);
    this.hash = hash;
}

HashMessage.prototype = Object.create(Message.prototype);
HashMessage.prototype.constructor = HashMessage;

HashMessage.prototype.hashEncrypt = function () {
    this.encrypted = window.btoa(this.text + "|" + this.hash);
}

HashMessage.prototype.hashDecrypt = function () {
    let fullDecryptedString = window.atob(this.encrypted);
    let positionOfSeparator = fullDecryptedString.indexOf("|");
    return fullDecryptedString.slice(0, positionOfSeparator);
}

let hashMessage1 = new HashMessage("lorem ipsum", "adsf!@#_(*+-&ktyusqewad");
hashMessage1.hashEncrypt();
console.log(hashMessage1.encrypted);
console.log(hashMessage1.hashDecrypt());