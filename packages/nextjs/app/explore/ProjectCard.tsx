import { MinimalCard, MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from "@/components/ui/minimal-card";
import { useProjectInfo } from "~~/hooks/contracts/project";

export function ProjectCard({ address }: { address: `0x${string}` }) {
  const { projectInfo: card } = useProjectInfo(address);
  const getRandomPastelGradient = () => {
    // 生成柔和的浅色
    const getRandomPastel = () => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 70%, 85%)`;
    };

    const color1 = getRandomPastel();
    const color2 = getRandomPastel();
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };
  return (
    <MinimalCard key={card?.projectName}>
      <div
        className="w-full h-48 rounded-t-lg"
        style={{
          background: getRandomPastelGradient(),
        }}
      />
      <MinimalCardTitle>{card?.projectName}</MinimalCardTitle>
      <MinimalCardDescription>{card?.projectDescription}</MinimalCardDescription>
    </MinimalCard>
  );
}
