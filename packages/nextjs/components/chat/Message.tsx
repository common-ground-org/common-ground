import "../../styles/message.css";
import { Message } from "ai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessageProps {
  message: Message;
  isLoading: boolean;
}

export default function MessageComponent({ message, isLoading }: MessageProps) {
  if (message.content.length === 0 && isLoading)
    return (
      <div className="flex flex-col items-start my-2">
        <div>
          <p className="text-sm font-thin text-gray-500">Common Ground Agent</p>
        </div>
        <div className="p-4 rounded-lg max-w-[85%] bg-gray-100">
          <div className="flex space-x-2">
            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
        </div>
      </div>
    );

  if (message.role === "user") {
    return (
      <div className="flex flex-col items-end my-2">
        <div>
          <p className="text-sm font-thin text-gray-500">You</p>
        </div>
        <div className="p-4 rounded-lg max-w-[85%] ml-auto bg-blue-100">
          <p className="text-right">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start my-2">
      <div>
        <p className="text-sm font-thin text-gray-500">Common Ground Agent</p>
      </div>
      <div className="chat-box p-4 rounded-lg max-w-[85%] bg-gray-100">
        <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
      </div>
    </div>
  );
}
