"use client";

import { useState } from "react";
import {
  PopoverForm,
  PopoverFormButton,
  PopoverFormCutOutLeftIcon,
  PopoverFormCutOutRightIcon,
  PopoverFormSeparator,
  PopoverFormSuccess,
} from "@/components/ui/popover-form";
import { useCreateProject } from "@/hooks/contract/useProject";
import { ethers } from "ethers";

type FormState = "idle" | "loading" | "success";

export function ProjectForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("My Project");
  const [category, setCategory] = useState("DeFi");
  const [description, setDescription] = useState("A decentralized project");
  const [coverImage, setCoverImage] = useState("https://example.com/default-image.jpg");
  const [targetAmount, setTargetAmount] = useState("1.0");
  const [duration, setDuration] = useState("30");
  const [story, setStory] = useState("Project story and details");
  const [governanceRights, setGovernanceRights] = useState("Voting rights for token holders");
  const [usageRights, setUsageRights] = useState("Access to platform features");
  const [minContributeAmount, setMinContributeAmount] = useState("0.1");
  const [token, setToken] = useState("0x0000000000000000000000000000000000000000");
  const [milestoneDescriptions, setMilestoneDescriptions] = useState("Phase 1, Phase 2, Phase 3");
  const [fundingAmounts, setFundingAmounts] = useState("0.3, 0.3, 0.4");
  const [deadlines, setDeadlines] = useState("2024-12-31, 2025-06-30, 2025-12-31");

  const { write: createProject, isPending, isConfirming, isConfirmed } = useCreateProject();

  function submit() {
    const projectNameBytes32 = ethers.encodeBytes32String(projectName.slice(0, 31));
    const targetAmountBigInt = ethers.parseEther(targetAmount);
    const minContributeAmountBigInt = ethers.parseEther(minContributeAmount);

    const milestoneDescriptionsArray = milestoneDescriptions.split(",").map(s => s.trim());
    const fundingAmountsArray = fundingAmounts.split(",").map(s => ethers.parseEther(s.trim()));
    const deadlinesArray = deadlines.split(",").map(s => BigInt(new Date(s.trim()).getTime() / 1000));

    if (
      milestoneDescriptionsArray.length !== fundingAmountsArray.length ||
      fundingAmountsArray.length !== deadlinesArray.length
    ) {
      console.error("Milestone arrays must have the same length");
      return;
    }

    createProject({
      governanceRights,
      usageRights,
      projectDescription: description,
      projectName: projectNameBytes32,
      targetFundingAmount: targetAmountBigInt,
      minContributeAmount: minContributeAmountBigInt,
      token,
      milestoneDescriptions: milestoneDescriptionsArray,
      fundingAmounts: fundingAmountsArray,
      deadlines: deadlinesArray,
    });

    setFormState("loading");

    setTimeout(() => {
      setFormState("success");
    }, 1500);

    setTimeout(() => {
      setOpen(false);
      setFormState("idle");
      setProjectName("");
      setCategory("");
      setDescription("");
      setCoverImage("");
      setTargetAmount("");
      setDuration("");
      setStory("");
      setGovernanceRights("");
      setUsageRights("");
      setMinContributeAmount("");
      setToken("");
      setMilestoneDescriptions("");
      setFundingAmounts("");
      setDeadlines("");
    }, 3300);
  }

  return (
    <PopoverForm
      title="Create Project"
      open={open}
      setOpen={setOpen}
      width="728px"
      height="auto"
      showCloseButton={formState !== "success"}
      showSuccess={formState === "success"}
      openChild={
        <form
          onSubmit={e => {
            e.preventDefault();
            if (
              !projectName ||
              !category ||
              !description ||
              !coverImage ||
              !targetAmount ||
              !duration ||
              !story ||
              !governanceRights ||
              !usageRights ||
              !minContributeAmount ||
              !token ||
              !milestoneDescriptions ||
              !fundingAmounts ||
              !deadlines
            )
              return;
            submit();
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4 px-4 pt-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-muted-foreground mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-muted-foreground mb-1">
                  Project Description
                </label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="governanceRights" className="block text-sm font-medium text-muted-foreground mb-1">
                  Governance Rights
                </label>
                <input
                  type="text"
                  id="governanceRights"
                  value={governanceRights}
                  onChange={e => setGovernanceRights(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="usageRights" className="block text-sm font-medium text-muted-foreground mb-1">
                  Usage Rights
                </label>
                <input
                  type="text"
                  id="usageRights"
                  value={usageRights}
                  onChange={e => setUsageRights(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="targetAmount" className="block text-sm font-medium text-muted-foreground mb-1">
                  Target Funding Amount
                </label>
                <input
                  type="number"
                  id="targetAmount"
                  value={targetAmount}
                  onChange={e => setTargetAmount(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="minContributeAmount" className="block text-sm font-medium text-muted-foreground mb-1">
                  Minimum Contribution Amount
                </label>
                <input
                  type="number"
                  id="minContributeAmount"
                  value={minContributeAmount}
                  onChange={e => setMinContributeAmount(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="token" className="block text-sm font-medium text-muted-foreground mb-1">
                  Token Address
                </label>
                <input
                  type="text"
                  id="token"
                  value={token}
                  onChange={e => setToken(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="milestoneDescriptions" className="block text-sm font-medium text-muted-foreground mb-1">
                  Milestone Descriptions
                </label>
                <input
                  type="text"
                  id="milestoneDescriptions"
                  value={milestoneDescriptions}
                  onChange={e => setMilestoneDescriptions(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="fundingAmounts" className="block text-sm font-medium text-muted-foreground mb-1">
                  Funding Amounts
                </label>
                <input
                  type="text"
                  id="fundingAmounts"
                  value={fundingAmounts}
                  onChange={e => setFundingAmounts(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="deadlines" className="block text-sm font-medium text-muted-foreground mb-1">
                  Deadlines
                </label>
                <input
                  type="text"
                  id="deadlines"
                  value={deadlines}
                  onChange={e => setDeadlines(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="coverImage" className="block text-sm font-medium text-muted-foreground mb-1">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  id="coverImage"
                  value={coverImage}
                  onChange={e => setCoverImage(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-muted-foreground mb-1">
                  Project Duration (days)
                </label>
                <input
                  type="number"
                  id="duration"
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                  required
                />
              </div>
            </div>
          </div>
          <div className="relative flex h-12 items-center px-[10px]">
            <PopoverFormSeparator />
            <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-1/2">
              <PopoverFormCutOutLeftIcon />
            </div>
            <div className="absolute right-0 top-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
              <PopoverFormCutOutRightIcon />
            </div>
            <PopoverFormButton loading={formState === "loading"} text="Submit" />
          </div>
        </form>
      }
      successChild={
        <PopoverFormSuccess title="Project Created" description="Your project has been successfully created!" />
      }
    />
  );
}
