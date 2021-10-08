const SmartContract = artifacts.require("FoxGangNFT");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
