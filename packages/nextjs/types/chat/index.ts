import { UseChatHelpers } from "ai/react";

export type ChatResult = UseChatHelpers & {
  experimental_addToolResult: ({ toolCallId, result }: { toolCallId: string; result: any }) => void;
  addToolResult: ({ toolCallId, result }: { toolCallId: string; result: any }) => void;
};
