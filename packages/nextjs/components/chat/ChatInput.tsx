"use client";

import type { ChatResult } from "~~/types/chat";

interface ChatInputProps {
  chat: ChatResult;
}

export default function ChatInput({ chat }: ChatInputProps) {
  return (
    <div className="flex w-full px-16 pt-2">
      <form
        onSubmit={chat.handleSubmit}
        className="flex grow border-2 px-4 py-1 border-gray-500 rounded-2xl items-center"
      >
        <textarea
          className="grow p-2 border-none focus:outline-none resize-none bg-transparent max-h-[200px] overflow-y-auto scrollbar-hide"
          placeholder="Tell Common Ground AI"
          value={chat.input}
          onChange={chat.handleInputChange}
          rows={1}
          disabled={chat.isLoading}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              chat.handleSubmit(e);
            }
          }}
        />
        <button className="py-2 px-4 hover:bg-gray-50 rounded-full" type="submit" disabled={chat.isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
}
