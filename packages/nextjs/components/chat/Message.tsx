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
      <div className="p-4 rounded-lg max-w-[85%] bg-gray-100">
        <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
        {message.toolInvocations?.map((toolInvocation: ToolInvocation) => {
          const toolCallId = toolInvocation.toolCallId;
          const addResult = (result: string) => chat.addToolResult({ toolCallId, result });

          // render confirmation tool (client-side tool with user interaction)
          if (toolInvocation.toolName === "askForConfirmation") {
            return (
              <div key={toolCallId}>
                {toolInvocation.args.message}
                <div>
                  {"result" in toolInvocation ? (
                    <b>{toolInvocation.result}</b>
                  ) : (
                    <>
                      <button onClick={() => addResult("Yes")}>Yes</button>
                      <button onClick={() => addResult("No")}>No</button>
                    </>
                  )}
                </div>
              </div>
            );
          }

          if (toolInvocation.toolName === "getProjectDetail") {
            return <div key={toolCallId}>{"searching for " + toolInvocation.args.project_id}</div>;
          }

          if (toolInvocation.toolName === "donateProject") {
            return (
              <div key={toolCallId}>
                {"donating to " + toolInvocation.args.project_id}
                <>
                  <button onClick={() => console.log("donate " + toolInvocation.args.project_id)}>Donate</button>
                </>
              </div>
            );
          }

          if (toolInvocation.toolName === "findTrending") {
            return (
              <div key={toolCallId}>
                {"result" in toolInvocation ? JSON.stringify(toolInvocation.result) : "trending not found"}
              </div>
            );
          }

          if (toolInvocation.toolName === "showProfile") {
            return (
              <div key={toolCallId}>
                <button>see my profile</button>
              </div>
            );
          }

          // other tools:
          return "result" in toolInvocation ? (
            <div key={toolCallId}>
              Tool call {`${toolInvocation.toolName}: `}
              {toolInvocation.result}
            </div>
          ) : (
            <div key={toolCallId}>Calling {toolInvocation.toolName}...</div>
          );
        })}
        <br />
      </div>
    </div>
  );
}
