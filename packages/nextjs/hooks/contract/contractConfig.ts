import { useChainId } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";

export const useContractConfig = () => {
  const chainId = useChainId();

  // 获取当前链的合约配置，如果不存在则默认使用 31337
  const currentChainConfig = deployedContracts[chainId as keyof typeof deployedContracts] ?? deployedContracts[31337];

  return {
    address: currentChainConfig.CommonGroundManager.address,
    abi: currentChainConfig.CommonGroundManager.abi,
  } as const;
};
