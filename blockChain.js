import Block from './block';

export default class BlockChain {
  constructor() {
    this.difficulty = 4;
    this.tail = this.firstBlock();
    this.head = this.tail;
  }

  firstBlock() {
    return new Block('First block', '0');
  }

  addBlock(newBlock) {
    this.tail.next = newBlock;
    newBlock.previousHash = this.tail.hash;
    newBlock.proofOfWork(this.difficulty);
    newBlock.previous = this.tail;
    this.tail = newBlock;
  }

  validityTest() {
    let currentBlock = this.head.next;
    let previousBlock = this.head;
    while (currentBlock) {
      if (currentBlock.hash != currentBlock.generateHash()) return false;
      if (currentBlock.previousHash != previousBlock.hash) return false;
      previousBlock = currentBlock;
      currentBlock = currentBlock.next;
    }
    return true;
  }
  showChainInArray() {
    let currentBlock = this.head;
    let chainArray = [];
    while (currentBlock) {
      chainArray.push({
        index: currentBlock.index,
        timestamp: currentBlock.timestamp,
        data: currentBlock.data,
        previousHash: currentBlock.previousHash,
        hash: currentBlock.hash,
      });
      currentBlock = currentBlock.next;
    }
    return chainArray;
  }
}
