require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
//const { vars } = require("hardhat/config");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and add its key to the configuration variables
//const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");

// Add your Sepolia account private key to the configuration variables
// using hardhat npx vars set <variable>
// Beware: NEVER put real Ether into testing accounts
//const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.URL_PROVIDER_SEP,
      accounts: [process.env.PRIVATE_KEY_1]
    },
    arbitrum: {
      url: process.env.URL_PROVIDER_ARB,
      accounts: [process.env.PRIVATE_KEY_1]
    }
  }
};
