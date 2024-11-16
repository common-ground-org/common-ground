export interface ProjectCreate {
  governanceRights: string;
  usageRights: string;
  projectDescription: string;
  projectName: string;
  targetFundingAmount: bigint;
  minContributeAmount: bigint;
  token: `0x${string}`;
  fundingDDL: bigint;
  milestoneDescriptions: string[];
  fundingAmounts: bigint[];
  deadlines: bigint[];
}

export interface ProjectInfo {
  governanceRights: string;
  usageRights: string;
  projectDescription: string;
  projectName: string;
  targetFundingAmount: bigint;
  minContributeAmount: bigint;
  currentFundingAmount: bigint;
  status: string;
  currentMilestoneIndex: bigint;
  currentMilestoneStatus: string;
}
