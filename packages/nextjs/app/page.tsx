"use client";

import { useEffect } from "react";
import { useChat } from "ai/react";
import Banner from "~~/components/chat/Banner";
import ChatInput from "~~/components/chat/ChatInput";
import MessageArea from "~~/components/chat/MessageArea";
import PictureCard from "~~/components/chat/PictureCard";
import type { ChatResult } from "~~/types/chat";

function ChatInitState({ chat }: { chat: ChatResult }) {
  return (
    <div className="flex grow items-center flex-col mt-36">
      <Banner />
      <div className="h-6"></div>
      <ChatInput chat={chat} />
      <div className="mt-12 mb-6 text-base font-semibold">
        <p>I wanna...</p>
      </div>
      <div className="flex flex-wrap gap-8">
        <PictureCard title="Get Funding" imageUrl="/get-funding-ui.svg" />
        <PictureCard title="Donate" imageUrl="/donate-ui.svg" />
        <PictureCard title="Offer Skills" imageUrl="/offer-skills-ui.svg" />
      </div>
    </div>
  );
}

function ChatMessageState({ chat }: { chat: ChatResult }) {
  useEffect(() => {
    const container = document.getElementById("messages-container");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chat.messages]);

  return (
    <>
      <div id="messages-container" className="grow overflow-y-scroll">
        <MessageArea chat={chat} />
      </div>
      <ChatInput chat={chat} />
    </>
  );
}

export default function Home() {
  const chat: ChatResult = useChat({});

  useEffect(() => {
    console.log("isLoading", chat.isLoading);
  }, [chat.isLoading]);

  return <>{chat.messages.length === 0 ? <ChatInitState chat={chat} /> : <ChatMessageState chat={chat} />}</>;
}
