import Block from './block';

export default class BlockChain {
  constructor() {
    this.blockChain = [this.firstBlock()];
    this.difficulty = 4;
  }

  firstBlock() {
    return new Block('First block', '0');
  }

  getChainHeadBlock() {
    return this.blockChain[this.blockChain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getChainHeadBlock().hash;
    newBlock.proofOfWork(this.difficulty);
    this.blockChain.push(newBlock);
  }

  validityTest() {
    for (let i = 1; i < this.blockChain.length; i++) {
      let currentBlock = this.blockChain[i];

      let previousBlock = this.blockChain[i - 1];

      if (currentBlock.hash != currentBlock.generateHash()) return false;

      if (currentBlock.previousHash != previousBlock.hash) return false;
    }
    return true;
  }
}
