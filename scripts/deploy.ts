const hre = require("hardhat");

async function main() {
    const Yotta = await hre.ethers.getContractFactory("Yotta");
    const yotta = await Yotta.deploy();

    await yotta.waitForDeployment();

    console.log(
        `Contract Address :  ${yotta.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});