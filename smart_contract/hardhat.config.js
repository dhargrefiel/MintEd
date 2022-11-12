// https://eth-goerli.g.alchemy.com/v2/R9jzuCNPNEadHBinfJpfKnGyIaFgU0ce

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/R9jzuCNPNEadHBinfJpfKnGyIaFgU0ce',
      accounts: [ '3cf159c2bf54298b9e4d7fba2cc45e8b1efa273afebb9626397275c746c254ec' ]
    }
  }
}