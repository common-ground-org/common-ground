import { useChainId, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { ProjectInfo } from "~~/types/schemas/contracts/project";

const useConfig = (address: `0x${string}`) => {
  const chainId = useChainId();
  const currentChainConfig = deployedContracts[chainId as keyof typeof deployedContracts] ?? deployedContracts[31337];

  return {
    address,
    abi: currentChainConfig.Project.abi,
  } as const;
};

export const useProjectInfo = (address: `0x${string}`) => {
  const config = useConfig(address);
  const { data, error, isLoading } = useReadContract({
    ...config,
    functionName: "projectInfo",
  });

  const projectInfo: ProjectInfo | null = data
    ? {
        governanceRights: data[0],
        usageRights: data[1],
        projectDescription: data[2],
        projectName: data[3],
        targetFundingAmount: data[4],
        minContributeAmount: data[5],
        currentFundingAmount: data[6],
        status: data[7],
        currentMilestoneIndex: data[8],
        currentMilestoneStatus: data[9],
      }
    : null;

  return { projectInfo, error, isLoading };
};

export const useContribute = (address: `0x${string}`) => {
  const config = useConfig(address);
  const { data: hash, isPending, error, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return {
    contribute: (amount: bigint) =>
      writeContract({
        ...config,
        functionName: "contribute",
        value: amount,
        args: [amount],
      }),
    isPending,
    isConfirmed,
    isConfirming,
    error,
  };
};
