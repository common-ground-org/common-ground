import { useContractConfig } from "./contractConfig";
import { TransferOwnershipArgs } from "./type";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

// read the owner
export const useOwner = () => {
  const contractConfig = useContractConfig();
  const { data, error, isLoading } = useReadContract({
    ...contractConfig,
    functionName: "owner",
  }) as { data: `0x${string}` | undefined; error: any; isLoading: boolean };

  return {
    data,
    error,
    isLoading,
  };
};

// transfer the ownership
export const useTransferOwnership = () => {
  const contractConfig = useContractConfig();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const write = ({ newOwner }: TransferOwnershipArgs) => {
    writeContract({
      ...contractConfig,
      functionName: "transferOwnership",
      args: [newOwner],
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

// renounce the ownership
export const useRenounceOwnership = () => {
  const contractConfig = useContractConfig();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const write = () => {
    writeContract({
      ...contractConfig,
      functionName: "renounceOwnership",
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
