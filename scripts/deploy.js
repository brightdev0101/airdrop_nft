async function main() {
  const BoredApeTestnetNFT = await hre.ethers.getContractFactory("BoredApeTestnet");
  const nft = await BoredApeTestnetNFT.deploy();

  await nft.deployed();

  console.log("BoredApeTestnet deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
