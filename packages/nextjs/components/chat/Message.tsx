import { ContributeForm } from "../forms/contribute";
import { Button } from "../ui/button";
import { Message } from "ai";
import { ToolInvocation } from "ai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ChatResult } from "~~/types/chat";

interface MessageProps {
  message: Message;
  isLoading: boolean;
  chat: ChatResult;
}

export default function MessageComponent({ message, isLoading, chat }: MessageProps) {
  if (message.content.length === 0 && isLoading && !message.toolInvocations)
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
      {!message.toolInvocations && (
        <div className="p-4 rounded-lg max-w-[85%] bg-gray-100">
          <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
        </div>
      )}
      {message.toolInvocations &&
        message.toolInvocations.map((toolInvocation: ToolInvocation) => {
          console.log("tool invocation", toolInvocation.toolName);
          const toolCallId = toolInvocation.toolCallId;
          const addResult = (result: string) => chat.addToolResult({ toolCallId, result });

          console.log(1);
          // render confirmation tool (client-side tool with user interaction)
          if (toolInvocation.toolName == "askForConfirmation") {
            console.log("tool invocation", toolInvocation);
            return (
              <div key={toolCallId} className="w-24 h-16 bg-gray-100 rounded-lg">
                {toolInvocation.args.message}
                <div>
                  {"result" in toolInvocation ? (
                    <b>{toolInvocation.result}</b>
                  ) : (
                    <div className="flex flex-row gap-2">
                      <Button onClick={() => addResult("Yes")}>Yes</Button>
                      <Button onClick={() => addResult("No")}>No</Button>
                    </div>
                  )}
                </div>
              </div>
            );
          }

          console.log(2);
          if (toolInvocation.toolName == "getProjectDetail") {
            return <div key={toolCallId}>Searching for project details...</div>;
          }

          console.log(3);
          if (toolInvocation.toolName == "donateProject") {
            return (
              <div key={toolCallId} className="flex flex-col items-center my-2 bg-gray-100 rounded-lg">
                <p className="pb-2">Donating to project</p>
                <ContributeForm address={"0xeDc6c016aBD2b01e15633866d559716D01FcA4e2"} />
              </div>
            );
          }

          console.log(4);
          if (toolInvocation.toolName == "showProfile") {
            return (
              <div key={toolCallId}>
                <Button>see my profile</Button>
              </div>
            );
          }
        })}
    </div>
  );
}
