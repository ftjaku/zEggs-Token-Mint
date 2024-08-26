const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// Define your variables by calling from your vars config
const SEPOLIA_ADDRESS_1 = vars.get("SEPOLIA_ADDRESS_1")

module.exports = buildModule("zeggsModule", (m) => {
    const ZeggsContract = m.contract("Zeggs", [SEPOLIA_ADDRESS_1]);
  
    return { ZeggsContract };
  });