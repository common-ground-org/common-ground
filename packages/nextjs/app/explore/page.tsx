"use client";

import { ProjectCard } from "./ProjectCard";
import { ProjectForm } from "./form";
import BoxReveal from "~~/components/ui/box-reveal";
import { useProjectAddresses } from "~~/hooks/contracts/manager";

export function Explore() {
  const projectAddresseList = useProjectAddresses();

  return (
    <div className="space-y-2 lg:space-y-4 p-2 lg:p-8">
      <div className="flex items-center justify-between">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[4.0rem] font-semibold">
            Projects<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
        <ProjectForm />
      </div>

      <div className="w-full max-w-4xl">
        <div className="min-h-[500px] p-4  flex flex-col justify-center border border-dashed rounded-lg space-y-4">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectAddresseList?.map(address => <ProjectCard address={address} key={address} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
