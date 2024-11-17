import { MinimalCard, MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from "@/components/ui/minimal-card";
import { useProjectInfo } from "~~/hooks/contracts/project";

export function ProjectCard({ address }: { address: `0x${string}` }) {
  const { projectInfo: card } = useProjectInfo(address);
  return (
    <MinimalCard key={card?.projectName}>
      <MinimalCardImage src="/basic-img.png" alt="basic-img" />
      <MinimalCardTitle>{card?.projectName}</MinimalCardTitle>
      <MinimalCardDescription>{card?.projectDescription}</MinimalCardDescription>
    </MinimalCard>
  );
}
