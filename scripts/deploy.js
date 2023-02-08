const { ethers, upgrades } = require("hardhat");

async function main() {
  const Create = await ethers.getContractFactory("Create");
  const create = await upgrades.deployProxy(Create, [42]);
  await create.deployed();

  console.log("Lock with 1 ETH deployed to:", create.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});