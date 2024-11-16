import { useChainId } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";

export const useContractConfig = () => {
  const chainId = useChainId();

  // get the contract config of the current chain, if not exist, use 31337 as default
  const currentChainConfig = deployedContracts[chainId as keyof typeof deployedContracts] ?? deployedContracts[31337];

  return {
    address: currentChainConfig.CommonGroundManager.address,
    abi: currentChainConfig.CommonGroundManager.abi,
  } as const;
};
