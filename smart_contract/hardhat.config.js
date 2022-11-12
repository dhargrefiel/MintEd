//https://eth-goerli.g.alchemy.com/v2/p0aAoGsheSajhkONCb8UpNBsx-YK5Rgd
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "p0aAoGsheSajhkONCb8UpNBsx-YK5Rgd";
const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [ '36d13b818611135efea5f93169ce0123a20106a8ff4c9998773070404d584725']
    }
  }
};
