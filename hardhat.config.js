require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/bCGcqVqpDmrWH09YqxzJ_qjttf-rPODE",
      accounts:[process.env.WALLET_ADDRESS]
    },
    mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/Pi1IEYUJgHkmS0rDlQ8MfNz48PG4baDT",
      accounts:[process.env.WALLET_ADDRESS]
    }
  }
};
