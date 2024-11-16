/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    CommonGroundManager: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "CommonGroundInfo",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "evaluator",
              type: "address",
            },
          ],
          name: "addEvaluator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "project",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "stage",
              type: "uint256",
            },
          ],
          name: "createMilestoneApplication",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "governanceRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "usageRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "projectDescription",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "projectName",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "targetFundingAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minContributeAmount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "fundingDDL",
              type: "uint256",
            },
            {
              internalType: "string[]",
              name: "milestoneDescriptions",
              type: "string[]",
            },
            {
              internalType: "uint256[]",
              name: "fundingAmounts",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "deadlines",
              type: "uint256[]",
            },
          ],
          name: "createProject",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "project",
              type: "address",
            },
          ],
          name: "getMilestoneApplication",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "project",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "stage",
                  type: "uint256",
                },
                {
                  internalType: "enum CommonGroundManager.ApplicationStatus",
                  name: "status",
                  type: "uint8",
                },
              ],
              internalType: "struct CommonGroundManager.MilestoneApplication",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getProjectList",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "evaluator",
              type: "address",
            },
          ],
          name: "isEvaluator",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
    },
    Project: {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "managerContractAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "governanceRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "usageRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "projectDescription",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "projectName",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "targetFundingAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minContributeAmount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "fundingDDL",
              type: "uint256",
            },
            {
              internalType: "string[]",
              name: "milestoneDescriptions",
              type: "string[]",
            },
            {
              internalType: "uint256[]",
              name: "releasePercentages",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "deadlines",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "target",
              type: "address",
            },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "AddressInsufficientBalance",
          type: "error",
        },
        {
          inputs: [],
          name: "FailedInnerCall",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
          ],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "proofUrl",
              type: "string",
            },
          ],
          name: "applyForMilestone",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "contribute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "projectInfo",
          outputs: [
            {
              internalType: "string",
              name: "governanceRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "usageRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "projectDescription",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "projectName",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "targetFundingAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minContributeAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "currentFundingAmount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "status",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "currentMilestoneIndex",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "currentMilestoneStatus",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "confirm",
              type: "bool",
            },
          ],
          name: "reviewMilestoneApplication",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "enum Project.MilestoneStatus",
              name: "status",
              type: "uint8",
            },
          ],
          name: "showMilestoneStatus",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "enum Project.ProjectStatus",
              name: "status",
              type: "uint8",
            },
          ],
          name: "showProjectStatus",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
    },
  },
  80002: {
    CommonGroundManager: {
      address: "0xB5b854CE3f20368Ccb76946ED474555233871D83",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "CommonGroundInfo",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "evaluator",
              type: "address",
            },
          ],
          name: "addEvaluator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "project",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "stage",
              type: "uint256",
            },
          ],
          name: "createMilestoneApplication",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "governanceRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "usageRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "projectDescription",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "projectName",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "targetFundingAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minContributeAmount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "fundingDDL",
              type: "uint256",
            },
            {
              internalType: "string[]",
              name: "milestoneDescriptions",
              type: "string[]",
            },
            {
              internalType: "uint256[]",
              name: "fundingAmounts",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "deadlines",
              type: "uint256[]",
            },
          ],
          name: "createProject",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "project",
              type: "address",
            },
          ],
          name: "getMilestoneApplication",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "project",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "stage",
                  type: "uint256",
                },
                {
                  internalType: "enum CommonGroundManager.ApplicationStatus",
                  name: "status",
                  type: "uint8",
                },
              ],
              internalType: "struct CommonGroundManager.MilestoneApplication",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getProjectList",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "evaluator",
              type: "address",
            },
          ],
          name: "isEvaluator",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
    },
    Project: {
      address: "0x68a5EeAE4d2885Ca52EE8A1E702e21662EdCd2c9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "managerContractAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "governanceRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "usageRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "projectDescription",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "projectName",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "targetFundingAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minContributeAmount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "fundingDDL",
              type: "uint256",
            },
            {
              internalType: "string[]",
              name: "milestoneDescriptions",
              type: "string[]",
            },
            {
              internalType: "uint256[]",
              name: "releasePercentages",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "deadlines",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "target",
              type: "address",
            },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "AddressInsufficientBalance",
          type: "error",
        },
        {
          inputs: [],
          name: "FailedInnerCall",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
          ],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "proofUrl",
              type: "string",
            },
          ],
          name: "applyForMilestone",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "contribute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "projectInfo",
          outputs: [
            {
              internalType: "string",
              name: "governanceRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "usageRights",
              type: "string",
            },
            {
              internalType: "string",
              name: "projectDescription",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "projectName",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "targetFundingAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minContributeAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "currentFundingAmount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "status",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "currentMilestoneIndex",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "currentMilestoneStatus",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "confirm",
              type: "bool",
            },
          ],
          name: "reviewMilestoneApplication",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "enum Project.MilestoneStatus",
              name: "status",
              type: "uint8",
            },
          ],
          name: "showMilestoneStatus",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "enum Project.ProjectStatus",
              name: "status",
              type: "uint8",
            },
          ],
          name: "showProjectStatus",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
