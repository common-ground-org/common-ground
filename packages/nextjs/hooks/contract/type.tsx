import { BaseError } from "wagmi";

// the common write contract result type
export interface WriteContractResult<TArgs = any> {
  // the function to execute the write contract
  write: (args: TArgs) => void;
  // the transaction hash
  hash: `0x${string}` | undefined;
  // the error information
  error: BaseError | null;
  // the transaction status
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
}

// the common read contract result type
export interface ReadContractResult<TData = any> {
  // the returned data
  data: TData | undefined;
  // the error information
  error: BaseError | null;
  // the loading status
  isLoading: boolean;
  // refresh the data
  refetch: () => Promise<void>;
}

// the ownership related type
export interface TransferOwnershipArgs {
  newOwner: `0x${string}`;
}

// the evaluator related type
export interface AddEvaluatorArgs {
  evaluator: `0x${string}`;
}

// the project related type
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
