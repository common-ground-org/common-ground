import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";
import { ethers } from "ethers";

/**
 * Deploys a contract named "CommonGroundManager" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployCommonGroundManager: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("CommonGroundManager", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const CommonGroundManager = await hre.ethers.getContract<Contract>("CommonGroundManager", deployer);

  console.log("👋 CommonGroundManager deployed successfully", CommonGroundManager.target);

  await deploy("Project", {
    from: deployer,
    args: [
      CommonGroundManager.target, // managerContractAddress
      "Default Governance Rights", // governanceRights
      "Default Usage Rights", // usageRights
      "Project Description", // projectDescription
      ethers.encodeBytes32String("Project Name"), // projectName (as bytes32)
      ethers.parseEther("1000"), // targetFundingAmount (e.g., 1000 tokens)
      ethers.parseEther("10"), // minContributeAmount (e.g., 10 tokens)
      "0xEd341189327CABCD25813dbCB432eb869130aEfe", // token address (replace with actual ERC20 token address)
      Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60, // fundingDDL (30 days from now)
      ["Milestone 1", "Milestone 2"], // milestoneDescriptions
      [50, 50], // releasePercentages (must sum to 100)
      [
        Math.floor(Date.now() / 1000) + 60 * 24 * 60 * 60, // deadline for milestone 1 (60 days)
        Math.floor(Date.now() / 1000) + 90 * 24 * 60 * 60, // deadline for milestone 2 (90 days)
      ],
    ],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract
  const Project = await hre.ethers.getContract<Contract>("Project", deployer);
  console.log("👋 Project deployed successfully", Project.target);
};

export default deployCommonGroundManager;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags CommonGroundManager
deployCommonGroundManager.tags = ["CommonGroundManager"];
