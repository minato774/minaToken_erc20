const Mintable = artifacts.require('./minaMintable.sol')

module.exports = function(deployer) {
    deployer.deploy(Mintable)
}
