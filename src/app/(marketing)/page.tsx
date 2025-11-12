import HowItWorks from "./components/HowItWorks";
import { HeroSection } from "./components/HeroSection";
import LiveDemo from "./components/LiveDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <HeroSection />
      <HowItWorks />
      <LiveDemo />
    </main>
  );
}