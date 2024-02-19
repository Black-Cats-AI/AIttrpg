'use client';

import { ChatWindow } from '@/components/ChatWindow';

export const runtime = 'edge';

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1>HELLO</h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/ai"
      emoji="🏴‍☠️"
      titleText="Patchy the Chatty Pirate"
      placeholder="I'm an LLM pretending to be a pirate! Ask me about the pirate life!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
