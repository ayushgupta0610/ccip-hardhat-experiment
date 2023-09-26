import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as walletUtils from './walletUtils.ts';
import * as dotenv from "dotenv";
dotenv.config();


const config: HardhatUserConfig =  {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      // @ts-ignore
      accounts: process.env.PRIVATE_KEY1 !== undefined ? [process.env.PRIVATE_KEY1] : walletUtils.createPrivateKeyList(),
    },
    sepolia: {
      url: process.env.SEPOLIA_URL ? process.env.SEPOLIA_URL : `https://rpc2.sepolia.org`,
      // @ts-ignore
      accounts: process.env.PRIVATE_KEY1 !== undefined ? [process.env.PRIVATE_KEY1] : walletUtils.createPrivateKeyList(),
    },
  },
  etherscan: {
    apiKey: `${process.env.POLYGONSCAN_API_KEY}`,
  },
  solidity: {
    compilers: [
      {
        version: '0.8.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
            details: { yul: false },
          },
        },
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
            details: { yul: false },
          },
        },
      },
    ],
  },
};


export default config;
