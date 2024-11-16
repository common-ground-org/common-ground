import { BaseError } from "wagmi";

// 通用的写入合约返回类型
export interface WriteContractResult<TArgs = any> {
  // 执行写入的函数
  write: (args: TArgs) => void;
  // 交易哈希
  hash: `0x${string}` | undefined;
  // 错误信息
  error: BaseError | null;
  // 交易状态
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
}

// 通用的读取合约返回类型
export interface ReadContractResult<TData = any> {
  // 返回数据
  data: TData | undefined;
  // 错误信息
  error: BaseError | null;
  // 加载状态
  isLoading: boolean;
  // 刷新数据
  refetch: () => Promise<void>;
}

// 所有权相关类型
export interface TransferOwnershipArgs {
  newOwner: `0x${string}`;
}

// 评估者相关类型
export interface AddEvaluatorArgs {
  evaluator: `0x${string}`;
}

// 项目相关类型
export interface CreateProjectArgs {
  governanceRights: string;
  usageRights: string;
  projectDescription: string;
  projectName: string;
  targetFundingAmount: bigint;
  minContributeAmount: bigint;
  token: `0x${string}`;
  milestoneDescriptions: string[];
  fundingAmounts: bigint[];
  deadlines: bigint[];
}
