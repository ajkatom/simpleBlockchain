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

  
}
