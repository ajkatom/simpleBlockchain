import  Block from './block';

export default class BlockChain {
  constructor(){
    this.blockChain = [this.firstBlock()]
  }
  firstBlock (){
    return new Block("First block","0")
  }
}
