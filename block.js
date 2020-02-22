import SHA256 from 'crypto-js/sha256';
import uuidv4 from 'uuid/v4';

export default class Block {
  constructor(data, previousHash = '') {
    this.index = uuidv4();
    this.timestamp = Date.now().toString();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.generateHash();
  }
  generateHash() {
    return SHA256(
      this.index + this.timestamp + this.previousHash + JSON.stringify(this.data).toString()
    );
  }
}
