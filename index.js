import BlockChain from './blockChain';
import Block from './block';

let chain = new BlockChain();

chain.addBlock(
  new Block({
    vendor: 'x-corp',
    customer: 'x-retailer',
    quantity: '200',
  })
);
chain.addBlock(
  new Block({
    vendor: 'y-corp',
    customer: 'y-retailer',
    quantity: '600',
  })
);

console.log(chain.showChainInArray(), chain.validityTest());
