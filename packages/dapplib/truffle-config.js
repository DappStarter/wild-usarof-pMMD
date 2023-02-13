require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot fire radar situate under coral light army gate'; 
let testAccounts = [
"0xc94a9d4299984588ee81fcabb8ca6a88bd3139f34e944f55a5098d19f3031358",
"0xc6f4c8b32e016899f71cacb94d66f960b6e96fc1c011ef57eae4849339ee3544",
"0x64dca2ff16f0c844d5c34d2c11d2474d8e760085efcca97d990f1e63490e3c88",
"0x9c57cc4835a17104f287d75409bd42ad578053175bd9cd0c22aef28c4876d7d8",
"0xfcbd950066125250999dbe2ac54af66a8703b24687c4232a0be8182a0338c797",
"0x1d876d52a09a5baa1ad3acdfdad8b477bee6627abf4bb08d97ea73668da134ca",
"0xd4f7f6b5e378fcddc068c2ba0c7c0fdbb7a22f3da9d5c5481d71b6e6d5d5567b",
"0x150c384d91cdadd4f6b80ffae2d2bc1d098fa56595ec7c03f2e8e206b1c434a5",
"0xb3fd4021502743b3776051ee77569871c8b7d9ebd51b2f4a5c51407e23686318",
"0x6c813767ea01b70e53961f59848daa20752011c3bbea6ac9bbd7c6c2163877dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

