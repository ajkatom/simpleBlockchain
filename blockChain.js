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

  // getChainTailBlock() {
  //   return this.blockChain[this.blockChain.length - 1];
  // }

  addBlock(newBlock) {
    this.tail.next = newBlock;
    newBlock.previousHash = this.tail.hash;
    newBlock.proofOfWork(this.difficulty);
    newBlock.previous = this.tail;
    this.tail = newBlock;
    // newBlock.previousHash = this.getChainTailBlock().hash;
    //newBlock.proofOfWork(this.difficulty);
    // this.blockChain.push(newBlock);
  }

  validityTest() {
    // for (let i = 1; i < this.blockChain.length; i++) {
    let currentBlock = this.head.next;
    let previousBlock = this.head;
    while (currentBlock) {
      // let currentBlock = this.blockChain[i];

      // let previousBlock = this.blockChain[i - 1];

      if (currentBlock.hash != currentBlock.generateHash()) return false;

      if (currentBlock.previousHash != previousBlock.hash) return false;
      previousBlock = currentBlock;
      currentBlock = currentBlock.next;
    }
    return true;
  }
}
