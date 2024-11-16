import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line
import { CommonGroundManager } from "../typechain-types";

describe("CommonGroundManager", function () {
  // We define a fixture to reuse the same setup in every test.

  let CommonGroundManager: CommonGroundManager;
  before(async () => {
    // const [owner] = await ethers.getSigners();
    const CommonGroundManagerFactory = await ethers.getContractFactory("CommonGroundManager");
    CommonGroundManager = (await CommonGroundManagerFactory.deploy()) as CommonGroundManager;
    await CommonGroundManager.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should have the right message on deploy", async function () {
      // expect(await CommonGroundManager.greeting()).to.equal("Building Unstoppable Apps!!!");
    });

    it("Should allow setting a new message", async function () {
      // const newGreeting = "Learn Scaffold-ETH 2! :)";

      // await CommonGroundManager.setGreeting(newGreeting);
      // expect(await CommonGroundManager.greeting()).to.equal(newGreeting);
    });
  });
});
