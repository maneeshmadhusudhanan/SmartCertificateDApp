/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox")
require('dotenv').config();
module.exports = {
  defaultNetwork:"alchemy",
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545/"
    },
    alchemy:{
      url:"https://eth-sepolia.g.alchemy.com/v2/Einy5guvEmXOlxX6hPT2jvdI516gyAiF",
      accounts: [process.env.PRIVATE_KEY]

    }
  },
  solidity: "0.8.26",
};
