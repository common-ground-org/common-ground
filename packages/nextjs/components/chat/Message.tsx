import Image from "next/image";
import { Message } from "ai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessageProps {
  message: Message;
  isLoading: boolean;
}

export default function MessageComponent({ message, isLoading }: MessageProps) {
  const isUser = message.role === "user";

  if (message.content.length === 0 && isLoading) {
    return (
      <div className="flex gap-3 my-4 px-4">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image src="/ai-avatar.svg" alt="Bot" width={40} height={40} className="object-cover" />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-sm font-thin text-gray-500">Common Ground Agent</p>
          <div className="p-4 rounded-lg bg-gray-100 w-fit mt-1">
            <div className="flex space-x-2">
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex gap-3 my-4 px-4 ${isUser ? "flex-row-reverse" : ""}`}>
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={isUser ? "/user-avatar.svg" : "/ai-avatar.svg"}
          alt={isUser ? "User" : "Bot"}
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
      <div className={`flex flex-col flex-1 ${isUser ? "items-end" : ""}`}>
        <p className="text-sm font-thin text-gray-500">{isUser ? "You" : "Common Ground Agent"}</p>
        <div className={`p-4 rounded-lg mt-1 max-w-[85%] ${isUser ? "bg-primary/10" : "bg-secondary/10"}`}>
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <Markdown
              remarkPlugins={[remarkGfm]}
              className="prose prose-sm max-w-none prose-pre:bg-secondary/5 prose-pre:border prose-pre:border-secondary/20"
            >
              {message.content}
            </Markdown>
          )}
        </div>
      </div>
    </div>
  );
}
