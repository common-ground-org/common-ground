"use client";

import { useState } from "react";
import { LightBoard, PatternCell } from "../../components/ui/lightboard";
import { ProjectForm } from "./form";
import { MinimalCard, MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from "@/components/ui/minimal-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Explore() {
  const [controlledDrawState, setControlledDrawState] = useState<PatternCell>("2");
  const [controlledHoverState, setControlledHoverState] = useState(false);

  const cycleDrawState = () => {
    setControlledDrawState(prev => {
      switch (prev) {
        case "0":
          return "1";
        case "1":
          return "2";
        case "2":
          return "3";
        case "3":
          return "0";
        default:
          return "0";
      }
    });
  };

  const cards = [
    {
      title: "Sick title",
      description: "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description: "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description: "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description: "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description: "How to design with gestures and motion that feel intuitive and natural.",
    },
  ];

  return (
    <div className="space-y-2 lg:space-y-4 p-2 lg:p-8">
      <div className="w-full bg-black p-4">
        <LightBoard
          rows={15}
          lightSize={4}
          gap={2}
          text="P r o j e c t s"
          font="default"
          updateInterval={10}
          colors={{
            background: "#001a00",
            textDim: "#006600",
            drawLine: "#00b300",
            textBright: "#00ff00",
          }}
        />
      </div>

      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <div className="w-full max-w-4xl">
        <ProjectForm />
        <div className="p-2">
          <h3 className="text-xl font-semibold">MinimalCard</h3>
        </div>
        <div className="min-h-[500px] p-4  flex flex-col justify-center border border-dashed rounded-lg space-y-4">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map(card => (
              <MinimalCard key={card.title}>
                <MinimalCardImage src="/basic-img.png" alt="basic-img" />
                <MinimalCardTitle>{card.title}</MinimalCardTitle>
                <MinimalCardDescription>{card.description}</MinimalCardDescription>
              </MinimalCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
