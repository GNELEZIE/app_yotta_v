import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/DuVzzIkoegUhma9I3-dbBHuwsYXKdRkn", // URL RPC de Sepolia
      accounts: ["21ed22166d64bd84400ccd52be685a7775b72ecfc1371b4e5e21c760e07e37c1"], // Votre clé privée
    },
  },
};

export default config;
