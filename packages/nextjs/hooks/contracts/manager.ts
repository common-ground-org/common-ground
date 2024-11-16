import { useScaffoldReadContract, useScaffoldWriteContract } from "../scaffold-eth";
import { ProjectCreate } from "~~/types/schemas/contracts/project";

const CONTRACT_NAME = "CommonGroundManager";

export const useCreateProject = () => {
  const { writeContractAsync } = useScaffoldWriteContract(CONTRACT_NAME);

  const createProject = async (createInfo: ProjectCreate) => {
    await writeContractAsync({
      functionName: "createProject",
      args: [
        createInfo.governanceRights,
        createInfo.usageRights,
        createInfo.projectDescription,
        createInfo.projectName,
        createInfo.targetFundingAmount,
        createInfo.minContributeAmount,
        createInfo.token,
        createInfo.fundingDDL,
        createInfo.milestoneDescriptions,
        createInfo.fundingAmounts,
        createInfo.deadlines,
      ],
    });
  };

  return { createProject };
};

export const useProjectAddresses = () => {
  const { data } = useScaffoldReadContract({
    contractName: CONTRACT_NAME,
    functionName: "getProjectAddresses",
  });

  const addresses = data?.map(address => address as `0x${string}`);

  return addresses;
};
