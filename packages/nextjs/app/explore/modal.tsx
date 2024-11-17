"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ethers } from "ethers";
import { useCreateProject } from "~~/hooks/contracts/manager";
import { ProjectCreate } from "~~/types/schemas/contracts/project";

export function ProjectModal() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [projectName, setProjectName] = useState("My Project");
  const [description, setDescription] = useState("A decentralized project");
  const [coverImage, setCoverImage] = useState("https://example.com/default-image.jpg");
  const [targetAmount, setTargetAmount] = useState("1.0");
  const [duration, setDuration] = useState("30");
  const [governanceRights, setGovernanceRights] = useState("Voting rights for token holders");
  const [usageRights, setUsageRights] = useState("Access to platform features");
  const [minContributeAmount, setMinContributeAmount] = useState("0.1");
  const [token, setToken] = useState("0x0000000000000000000000000000000000000000");
  const [milestoneDescriptions, setMilestoneDescriptions] = useState("Phase 1, Phase 2, Phase 3");
  const [fundingAmounts, setFundingAmounts] = useState("30, 30, 40");
  const [deadlines, setDeadlines] = useState("2024-12-31, 2025-06-30, 2025-12-31");

  const { createProject } = useCreateProject();

  async function submit() {
    // 复用原有的提交逻辑
    const targetAmountBigInt = ethers.parseEther(targetAmount);
    const minContributeAmountBigInt = ethers.parseEther(minContributeAmount);

    const milestoneDescriptionsArray = milestoneDescriptions.split(",").map(s => s.trim());
    const fundingAmountsArray = fundingAmounts.split(",").map(s => BigInt(s.trim()));
    const deadlinesArray = deadlines.split(",").map(s => BigInt(new Date(s.trim()).getTime() / 1000));

    const createInfo: ProjectCreate = {
      governanceRights,
      usageRights,
      projectDescription: description,
      projectName,
      targetFundingAmount: targetAmountBigInt,
      minContributeAmount: minContributeAmountBigInt,
      token: token as `0x${string}`,
      fundingDDL: deadlinesArray[deadlinesArray.length - 1],
      milestoneDescriptions: milestoneDescriptionsArray,
      fundingAmounts: fundingAmountsArray,
      deadlines: deadlinesArray,
    };

    setFormState("loading");

    try {
      await createProject(createInfo);
      setFormState("success");
    } catch (error) {
      console.error(error);
    } finally {
      setFormState("idle");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[728px]">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>Fill in the project details below.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-4">
            <div className="grid items-center gap-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" value={projectName} onChange={e => setProjectName(e.target.value)} required />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="description">Project Description</Label>
              <Input id="description" value={description} onChange={e => setDescription(e.target.value)} required />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="governanceRights">Governance Rights</Label>
              <Input
                id="governanceRights"
                value={governanceRights}
                onChange={e => setGovernanceRights(e.target.value)}
                required
              />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="usageRights">Usage Rights</Label>
              <Input id="usageRights" value={usageRights} onChange={e => setUsageRights(e.target.value)} required />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="targetAmount">Target Funding Amount</Label>
              <Input
                type="number"
                id="targetAmount"
                value={targetAmount}
                onChange={e => setTargetAmount(e.target.value)}
                required
              />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="minContributeAmount">Minimum Contribution Amount</Label>
              <Input
                type="number"
                id="minContributeAmount"
                value={minContributeAmount}
                onChange={e => setMinContributeAmount(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid items-center gap-2">
              <Label htmlFor="token">Token Address</Label>
              <Input id="token" value={token} onChange={e => setToken(e.target.value)} required />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="milestoneDescriptions">Milestone Descriptions</Label>
              <Input
                id="milestoneDescriptions"
                value={milestoneDescriptions}
                onChange={e => setMilestoneDescriptions(e.target.value)}
                required
              />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="fundingAmounts">Funding Amounts</Label>
              <Input
                id="fundingAmounts"
                value={fundingAmounts}
                onChange={e => setFundingAmounts(e.target.value)}
                required
              />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="deadlines">Deadlines</Label>
              <Input id="deadlines" value={deadlines} onChange={e => setDeadlines(e.target.value)} required />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="coverImage">Cover Image URL</Label>
              <Input id="coverImage" value={coverImage} onChange={e => setCoverImage(e.target.value)} required />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="duration">Project Duration (days)</Label>
              <Input
                type="number"
                id="duration"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={submit} disabled={formState === "loading"} className="w-full">
            {formState === "loading" ? "Creating..." : "Create Project"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
