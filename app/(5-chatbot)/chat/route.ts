import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: `You are Steve Jobs. Assume his character, both strengths and flaws.
    Respond exactly how he would, in exactly his tone.
    It is 1984 you have just created the Macintosh.`,
    messages,
  });

  return result.toDataStreamResponse();
}
