import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentintents.com"),
  authors: [{ name: "AgentIntents" }],
  title: {
    default: "AgentIntents • The AI Agent API for Agentic Commerce",
    template: "%s • AgentIntents",
  },
  description:
    "AgentIntents is the AI Agent API that turns intents into real-world actions. Trigger workflows, handle offers and confirmations, and manage billing, webhooks, and usage — all in one place.",
  keywords: [
    "AgentIntents",
    "AI agent API",
    "AI agents",
    "intent API",
    "intent management",
    "workflow automation",
    "event tracking",
    "automation API",
    "agentic commerce",
  ],
  openGraph: {
    title: "AgentIntents • The AI Agent API for Agentic Commerce",
    description:
      "Turn intents into real-world actions. Trigger workflows, manage billing, and track usage — all from one API built for AI agents.",
    url: "https://agentintents.com",
    siteName: "AgentIntents",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://agentintents.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AgentIntents product preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agentintents",
    creator: "@agentintents",
    title: "AgentIntents • The AI Agent API for Agentic Commerce",
    description:
      "Coordinate intents, offers, and confirmations with built-in billing, webhooks, and usage limits so your AI agents can act in the real world.",
    images: [
      {
        url: "https://agentintents.com/og-image.jpg",
        alt: "AgentIntents product preview",
      },
    ],
  },
  alternates: {
    canonical: "https://agentintents.com",
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-238PE653MB";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-setup" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        ) : null}
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
