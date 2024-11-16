import MessageComponent from "./Message";
import type { ChatResult } from "~~/types/chat";

interface MessageAreaProps {
  chat: ChatResult;
}

export default function MessageArea({ chat }: MessageAreaProps) {
  return (
    <div className="w-full px-4">
      {chat.messages.map((message, index) => (
        <MessageComponent isLoading={chat.isLoading} key={index} message={message} chat={chat} />
      ))}
    </div>
  );
}
