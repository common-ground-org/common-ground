import MessageComponent from "./Message";
import type { ChatResult } from "~~/types/chat";

interface MessageAreaProps {
  chat: ChatResult;
}

export default function MessageArea({ chat }: MessageAreaProps) {
  return (
    <div className="w-full px-4 space-y-4">
      {chat.messages.map((message, index) => (
        <MessageComponent
          isLoading={chat.isLoading && index === chat.messages.length - 1}
          key={index}
          message={message}
        />
      ))}
    </div>
  );
}
