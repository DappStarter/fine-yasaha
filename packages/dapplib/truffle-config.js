require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off foot noodle rifle mad around coral light army gauge'; 
let testAccounts = [
"0x6dcedb88f4eb7c4147a10afb4d03a4e6cc5ec8ef6242b2327e779a4e5100b7a8",
"0x0b183aa143a2092dd687de20a78ee6773d61be313c48f7ac42e8c91fb682a86e",
"0xcf5cfd948f164f3fed4b1325453cfc157b0d7f770438b750aa5fbb1ce8a0d757",
"0x8dab70265ff9a031a85e06ee5301d1c3a3fbc295cf4cd3946984d68931832f21",
"0xc805cbbba23eae7921851bc98ddeac526ac67ddf0e412b94813d9f803ddbec3c",
"0x69e84f4762d9ecc8476fb0392d46e940573bca979be84c44d9cc871418a42e10",
"0x009d3cccb26bb2c6a5db3ebba5dff07b55a49969df6756194af2abc97178ef1d",
"0xdf3ba2466d55aa0cbc3ff7b3d136f31d06c8fc1753710dfb0fbb4e3e85e78d47",
"0xadd4663afab73772bc05a6a4aa10bfa7b02d50894b86d955dce8ce8501b27c59",
"0x1bb43ae4a9b60ae3d1485dcd8fbd48a3c71fcca3c2ef7b5cd8d89b9094130175"
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
            version: '^0.5.11'
        }
    }
};
