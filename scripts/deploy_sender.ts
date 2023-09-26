import { ethers, network } from "hardhat";
import config from "./config";

async function main() {
  console.log("Network name: ", network.name);
  const Sender = await ethers.getContractFactory("Sender");
  // @ts-ignore
  const routerAddress = config.chains[network.name].router;
  // @ts-ignore
  const linkTokenAddress = config.chains[network.name].linkToken;
  const sender = await Sender.deploy(routerAddress, linkTokenAddress);

  console.log(`Sender contract deployed at: ${sender.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
