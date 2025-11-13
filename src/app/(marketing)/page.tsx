import type { Metadata } from "next";

import HowItWorks from "./components/HowItWorks";
import { HeroSection } from "./components/HeroSection";
import LiveDemo from "./components/LiveDemo";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Launch production-ready agent workflows with intents, offers, confirmations, billing, and webhooks handled for you.",
  alternates: {
    canonical: "https://agentintents.com/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <HeroSection />
      <HowItWorks />
      <LiveDemo />
    </main>
  );
}