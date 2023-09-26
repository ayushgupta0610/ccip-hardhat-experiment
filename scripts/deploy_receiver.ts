import { ethers, network } from "hardhat";
import config from "./config";

async function main() {
  console.log("Network name: ", network.name);
  const Receiver = await ethers.getContractFactory("Receiver");
  // @ts-ignore
  const routerAddress = config.chains[network.name].router;
  console.log("routerAddress: ", routerAddress);

  const receiver = await Receiver.deploy(routerAddress);

  console.log(`Receiver contract deployed at: ${receiver.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
