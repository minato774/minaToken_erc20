const minaToken = artifacts.require('./minaToken.sol')

module.exports = function(deployer) {
  deployer.deploy(minaToken)
}
