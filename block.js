class Block{
    constructor(blockData){
        const{timestamp, lastHash, hash, data} = blockData;
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;

    }
}
const block1 = new Block({
    timestamp: "05-03-2020",
     lastHash: "foo-lastHash",
      hash: "foo-hash",
       data: "foo-data"} );
console.log(block1);