import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const openai = createOpenAI({
  compatibility: "compatible",
  baseURL: process.env.NEXT_PUBLIC_REDPILL_BASE_URL,
  apiKey: process.env.NEXT_PUBLIC_REDPILL_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("meta-llama/llama-3.2-90b-vision-instruct"),
    system: "You are a helpful assistant.",
    messages,
  });

  return result.toDataStreamResponse();
}
