require('dotenv').config()
const { TruffleProvider } = require('@harmony-js/core')
const url ='http://localhost:9500';
//one18t4yj4fuutj83uwqckkvxp9gfa0568uc48ggj7
//one18t4yj4fuutj83uwqckkvxp9gfa0568uc48ggj7
//0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
const account_1_mnemonic = 'food response winner warfare indicate visual hundred toilet jealous okay relief tornado';
//01F903CE0C960FF3A9E68E80FF5FFC344358D80CE1C221C3F9711AF07F83A3BD
const account_1_private_key = '01F903CE0C960FF3A9E68E80FF5FFC344358D80CE1C221C3F9711AF07F83A3BD';
//one18t4yj4fuutj83uwqckkvxp9gfa0568uc48ggj7
const mainnet_private_key = '01F903CE0C960FF3A9E68E80FF5FFC344358D80CE1C221C3F9711AF07F83A3BD';
const testnet_url = 'https://api.s0.b.hmny.io'
const testnet_0_url = 'https://api.s0.b.hmny.io'
const testnet_1_url = 'https://api.s1.b.hmny.io'
const mainnet_0_url = 'https://api.s0.t.hmny.io'
gasLimit = 6721900
gasPrice = 1000000000

module.exports = {


  networks: {
    development: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
            url,
            { memonic: account_1_mnemonic },
            { shardID: 0, chainId: 2 },
            { gasLimit: gasLimit, gasPrice: gasPrice},
        );
        const newAcc = truffleProvider.addByPrivateKey(account_1_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
    },
    testnet: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
            testnet_url,
            { memonic: account_1_mnemonic },
            { shardID: 0, chainId: 2 },
            { gasLimit: gasLimit, gasPrice: gasPrice},
        );
        const newAcc = truffleProvider.addByPrivateKey(account_1_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
    },
    testnet0: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
            testnet_0_url,
            { memonic: account_1_mnemonic },
            { shardID: 0, chainId: 2 },
            { gasLimit: gasLimit, gasPrice: gasPrice },
        );
        const newAcc = truffleProvider.addByPrivateKey(account_1_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
    },
    testnet1: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
            testnet_1_url,
            { memonic: account_1_mnemonic },
            { shardID: 1, chainId: 2 },
            { gasLimit: gasLimit, gasPrice: gasPrice },
        );
        const newAcc = truffleProvider.addByPrivateKey(account_1_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
    },
    mainnet0: {
      network_id: '1', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
            mainnet_0_url,
            { memonic: account_1_mnemonic },
            { shardID: 0, chainId: 1 },
            { gasLimit: gasLimit, gasPrice: gasPrice },
        );
        const newAcc = truffleProvider.addByPrivateKey(mainnet_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
    }
  }
}
