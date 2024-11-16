import { useContractConfig } from "./contractConfig";
import { CreateProjectArgs } from "./type";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

// 读取项目信息
export const useCommonGroundInfo = () => {
  const contractConfig = useContractConfig();
  const { data, error, isLoading } = useReadContract({
    ...contractConfig,
    functionName: "CommonGroundInfo",
  }) as {
    data: [bigint, bigint] | undefined;
    error: any;
    isLoading: boolean;
  };

  return {
    data,
    error,
    isLoading,
  };
};

// 创建项目
export const useCreateProject = () => {
  const contractConfig = useContractConfig();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const write = ({
    governanceRights,
    usageRights,
    projectDescription,
    projectName,
    targetFundingAmount,
    minContributeAmount,
    token,
    milestoneDescriptions,
    fundingAmounts,
    deadlines,
  }: CreateProjectArgs) => {
    writeContract({
      ...contractConfig,
      functionName: "createProject",
      args: [
        governanceRights,
        usageRights,
        projectDescription,
        projectName,
        targetFundingAmount,
        minContributeAmount,
        token,
        deadlines[deadlines.length - 1],
        milestoneDescriptions,
        fundingAmounts,
        deadlines,
      ],
    });
  };

  return {
    write,
    hash,
    error,
    isPending,
    isConfirming,
    isConfirmed,
  };
};
