var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.ROPSTEN_MNEMONIC;
var accessToken = process.env.INFURA_ACCESS_TOKEN;

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
  networks: {
    private: {
        host: "localhost",
        port: 7545,
        network_id: "*",
        gas: 4721975,
        gasPrice: 20000000000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/" + accessToken
        );
      },
      network_id: 3,
      gas: 4721975,
      gasPrice: 20000000000
    }
  }
};
