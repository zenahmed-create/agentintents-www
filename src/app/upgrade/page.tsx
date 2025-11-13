import type { Metadata } from "next";

import { UpgradeClient } from "./UpgradeClient";

export const metadata: Metadata = {
  title: "Upgrade",
  description: "Upgrade to the AgentIntents Developer plan for 50,000 intents per month and production-ready support.",
  alternates: {
    canonical: "https://agentintents.com/upgrade",
  },
};

export default function UpgradePage() {
  return <UpgradeClient />;
}