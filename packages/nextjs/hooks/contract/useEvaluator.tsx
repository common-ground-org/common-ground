import { useContractConfig } from "./contractConfig";
import { AddEvaluatorArgs } from "./type";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

// inspect if the address is an evaluator
export const useIsEvaluator = (evaluator: `0x${string}`) => {
  const contractConfig = useContractConfig();
  const { data, error, isLoading } = useReadContract({
    ...contractConfig,
    functionName: "isEvaluator",
    args: [evaluator],
    query: {
      enabled: Boolean(evaluator),
    },
  }) as { data: boolean | undefined; error: any; isLoading: boolean };

  return {
    data,
    error,
    isLoading,
  };
};

// add an evaluator
export const useAddEvaluator = () => {
  const contractConfig = useContractConfig();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const write = ({ evaluator }: AddEvaluatorArgs) => {
    writeContract({
      ...contractConfig,
      functionName: "addEvaluator",
      args: [evaluator],
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
