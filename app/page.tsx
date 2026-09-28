"use client";

import { useState } from "react";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

const COMMANDS: Record<PackageManager, { install: string; dev: string; full: string }> = {
  npm: {
    install: "npm install",
    dev: "npm run dev",
    full: "git clone https://github.com/Xiasts/nextjs-boilerplate.git\ncd nextjs-boilerplate\nnpm install\nnpm run dev",
  },
  pnpm: {
    install: "pnpm install",
    dev: "pnpm dev",
    full: "git clone https://github.com/Xiasts/nextjs-boilerplate.git\ncd nextjs-boilerplate\npnpm install\npnpm dev",
  },
  yarn: {
    install: "yarn",
    dev: "yarn dev",
    full: "git clone https://github.com/Xiasts/nextjs-boilerplate.git\ncd nextjs-boilerplate\nyarn\nyarn dev",
  },
  bun: {
    install: "bun install",
    dev: "bun dev",
    full: "git clone https://github.com/Xiasts/nextjs-boilerplate.git\ncd nextjs-boilerplate\nbun install\nbun dev",
  },
};

const TECH_STACK = [
  {
    name: "Next.js 16",
    version: "v16.2.4",
    role: "Core Framework",
    description: "Built on App Router and Turbopack by default, enabling high-performance compilation and React Server Components.",
    link: "https://nextjs.org",
  },
  {
    name: "React 19",
    version: "v19.2.4",
    role: "UI Library",
    description: "Features the latest React architecture with built-in Server Actions, modern hooks, and transition optimizations.",
    link: "https://react.dev",
  },
  {
    name: "TypeScript 5",
    version: "v5.9.3",
    role: "Type System",
    description: "Strict end-to-end type safety with automated Next.js route typegen for robust development confidence.",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Tailwind CSS v4",
    version: "v4.x",
    role: "Styling Engine",
    description: "High-performance CSS-first framework utilizing modern CSS variables and inline theme configuration.",
    link: "https://tailwindcss.com",
  },
  {
    name: "Geist Typography",
    version: "next/font",
    role: "Design System",
    description: "Vercel's precision typeface family, serving Geist Sans for interface layout and Geist Mono for code blocks.",
    link: "https://vercel.com/font",
  },
  {
    name: "ESLint 9",
    version: "v9.x",
    role: "Code Quality",
    description: "Modern Flat Config with eslint-config-next for automated static analysis and best-practice enforcement.",
    link: "https://eslint.org",
  },
];

export default function Home() {
  const [activePm, setActivePm] = useState<PackageManager>("npm");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey((prev) => (prev === key ? null : prev));
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-[#171717] overflow-x-hidden flex flex-col font-sans selection:bg-[#0070f3] selection:text-white">
      {/* 1. Top Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-[#ebebeb] bg-[#fafafa]/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <a
              href="#overview"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#171717] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded-md px-1 py-0.5"
              aria-label="Next.js Boilerplate home"
            >
              <svg
                className="h-4 w-4 fill-current text-[#171717] shrink-0"
                viewBox="0 0 1155 1000"
                aria-hidden="true"
              >
                <path d="m577.3 0 577.4 1000H0z" />
              </svg>
              <span className="truncate">nextjs-boilerplate</span>
            </a>
            <span className="hidden sm:inline-block rounded-md border border-[#ebebeb] bg-white px-1.5 py-0.5 font-mono text-[11px] text-[#4d4d4d]">
              v0.1.0
            </span>
          </div>

          <nav className="flex items-center gap-3 sm:gap-6 text-sm" aria-label="Main Navigation">
            <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm">
              <a
                href="#overview"
                className="hidden sm:inline-block text-[#4d4d4d] hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded-md px-1 py-0.5"
              >
                Overview
              </a>
              <a
                href="#quickstart"
                className="text-[#4d4d4d] hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded-md px-1 py-0.5"
              >
                Quickstart
              </a>
              <a
                href="#stack"
                className="text-[#4d4d4d] hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded-md px-1 py-0.5"
              >
                Tech Stack
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Xiasts/nextjs-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#ebebeb] bg-white px-2.5 sm:px-3 py-1.5 text-xs font-medium text-[#171717] shadow-sm transition-colors hover:bg-[#f5f5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3]"
                aria-label="View Xiasts/nextjs-boilerplate on GitHub"
              >
                <svg
                  className="h-3.5 w-3.5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3]"
              >
                Deploy
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. Hero Section with soft mesh gradient background */}
        <section
          id="overview"
          className="relative isolate pt-14 pb-18 sm:pt-24 sm:pb-28 text-center"
        >
          {/* Subtle multi-color mesh gradient (blue, cyan, purple, pink, amber) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-16 bottom-0 -z-10 flex justify-center overflow-hidden"
          >
            <div
              className="h-[520px] w-full max-w-4xl opacity-55 blur-[64px] sm:blur-[84px] transform-gpu"
              style={{
                background:
                  "radial-gradient(ellipse 55% 50% at 18% 22%, rgba(0, 112, 243, 0.35) 0%, transparent 65%), " +
                  "radial-gradient(ellipse 50% 45% at 82% 20%, rgba(121, 40, 202, 0.30) 0%, transparent 65%), " +
                  "radial-gradient(ellipse 55% 50% at 50% 55%, rgba(0, 223, 216, 0.30) 0%, transparent 60%), " +
                  "radial-gradient(ellipse 45% 40% at 85% 75%, rgba(255, 0, 128, 0.22) 0%, transparent 65%), " +
                  "radial-gradient(ellipse 45% 45% at 15% 78%, rgba(245, 166, 35, 0.26) 0%, transparent 65%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col items-center">
            {/* Small monospace tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] bg-white/90 px-3.5 py-1 text-xs font-mono tracking-wider text-[#4d4d4d] shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" aria-hidden="true" />
              <span>NEXT.JS APP ROUTER STARTER</span>
            </div>

            {/* Main title: 600 weight, tight tracking, sentence case, near black, no gradient text */}
            <h1 className="mt-6 max-w-3xl text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#171717] leading-[1.14]">
              A clean starting point for your next app.
            </h1>

            {/* Brief description */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-[#4d4d4d] leading-relaxed">
              A streamlined, modern Next.js boilerplate engineered for production. Powered by App Router,
              React 19, TypeScript, and Tailwind CSS v4 with zero extraneous abstractions.
            </p>

            {/* Actual versions from repository package.json */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <div className="inline-flex items-center gap-1.5 rounded-md border border-[#ebebeb] bg-white px-2.5 py-1 text-[#4d4d4d] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="font-semibold text-[#171717]">Next.js</span>
                <span>v16.2.4</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-md border border-[#ebebeb] bg-white px-2.5 py-1 text-[#4d4d4d] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="font-semibold text-[#171717]">React</span>
                <span>v19.2.4</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-md border border-[#ebebeb] bg-white px-2.5 py-1 text-[#4d4d4d] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="font-semibold text-[#171717]">TypeScript</span>
                <span>v5.9.3</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href="#quickstart"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#171717] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3]"
              >
                <span>Get started</span>
                <span className="ml-1.5" aria-hidden="true">→</span>
              </a>

              <a
                href="https://github.com/Xiasts/nextjs-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#ebebeb] bg-white px-6 py-2.5 text-sm font-medium text-[#171717] shadow-sm transition-colors hover:bg-[#f5f5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3]"
              >
                <svg
                  className="h-4 w-4 fill-current text-[#171717] shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3. Dark Terminal-Style Code Display Area */}
        <section
          id="quickstart"
          className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 scroll-mt-14 w-full"
        >
          <div className="mb-6 flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4d4d4d]">
              QUICKSTART
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717]">
              Run locally in seconds.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4d4d4d] max-w-2xl">
              Clone the repository, install dependencies, and launch your Turbopack development server.
            </p>
          </div>

          {/* Terminal Window Card */}
          <div className="w-full overflow-hidden rounded-xl border border-[#262626] bg-[#0c0c0c] text-[#ededed] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.12)]">
            {/* Terminal Header Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#222222] bg-[#141414] px-4 py-2.5 gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
                </div>
                <span className="ml-2 font-mono text-xs text-[#888888] select-none">
                  bash — nextjs-boilerplate
                </span>
              </div>

              {/* Package Manager Selector Tabs */}
              <div className="flex items-center gap-1 bg-[#1a1a1a] p-0.5 rounded-lg border border-[#2a2a2a]" role="tablist">
                {(["npm", "pnpm", "yarn", "bun"] as PackageManager[]).map((pm) => {
                  const isActive = activePm === pm;
                  return (
                    <button
                      key={pm}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActivePm(pm)}
                      className={`rounded-md px-2.5 py-1 text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] ${
                        isActive
                          ? "bg-[#2e2e2e] text-white font-medium"
                          : "text-[#888888] hover:text-[#ededed]"
                      }`}
                    >
                      {pm}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              {/* Step 1: Clone */}
              <div className="group flex items-start justify-between gap-3 py-1.5">
                <div className="flex items-start gap-2.5 min-w-0 flex-1">
                  <span className="text-[#666666] select-none shrink-0">$</span>
                  <span className="text-[#ededed] break-all sm:break-normal">
                    git clone https://github.com/Xiasts/nextjs-boilerplate.git
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      "git clone https://github.com/Xiasts/nextjs-boilerplate.git",
                      "clone"
                    )
                  }
                  className="shrink-0 text-xs text-[#888888] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] rounded px-1.5 py-0.5"
                  aria-label="Copy clone command"
                >
                  {copiedKey === "clone" ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Step 2: Navigate */}
              <div className="group flex items-start justify-between gap-3 py-1.5">
                <div className="flex items-start gap-2.5 min-w-0 flex-1">
                  <span className="text-[#666666] select-none shrink-0">$</span>
                  <span className="text-[#ededed] break-all sm:break-normal">cd nextjs-boilerplate</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("cd nextjs-boilerplate", "cd")}
                  className="shrink-0 text-xs text-[#888888] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] rounded px-1.5 py-0.5"
                  aria-label="Copy cd command"
                >
                  {copiedKey === "cd" ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Step 3: Install */}
              <div className="group flex items-start justify-between gap-3 py-1.5">
                <div className="flex items-start gap-2.5 min-w-0 flex-1">
                  <span className="text-[#666666] select-none shrink-0">$</span>
                  <span className="text-[#ededed] break-all sm:break-normal">{COMMANDS[activePm].install}</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(COMMANDS[activePm].install, "install")
                  }
                  className="shrink-0 text-xs text-[#888888] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] rounded px-1.5 py-0.5"
                  aria-label="Copy install command"
                >
                  {copiedKey === "install" ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Step 4: Dev */}
              <div className="group flex items-start justify-between gap-3 py-1.5">
                <div className="flex items-start gap-2.5 min-w-0 flex-1">
                  <span className="text-[#666666] select-none shrink-0">$</span>
                  <span className="text-[#ededed] font-medium break-all sm:break-normal">{COMMANDS[activePm].dev}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(COMMANDS[activePm].dev, "dev")}
                  className="shrink-0 text-xs text-[#888888] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] rounded px-1.5 py-0.5"
                  aria-label="Copy dev command"
                >
                  {copiedKey === "dev" ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Server Ready Output Simulation */}
              <div className="mt-4 pt-4 border-t border-[#1f1f1f] text-xs text-[#888888] space-y-1 select-none">
                <p className="text-[#27c93f]">✓ Compiled successfully in 650ms</p>
                <p>▲ Next.js 16.2.4 (Turbopack)</p>
                <p>- Local:   http://localhost:3000</p>
                <p>- Network: http://192.168.1.100:3000</p>
              </div>
            </div>

            {/* Terminal Footer Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-[#1f1f1f] bg-[#141414] px-4 py-2.5 text-xs gap-2">
              <span className="text-[#666666] font-mono text-[11px] sm:text-xs">
                Turbopack is active by default in Next.js 16
              </span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(COMMANDS[activePm].full, "all")
                }
                className="inline-flex items-center gap-1.5 font-mono text-[#ededed] hover:text-[#0070f3] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] rounded px-2 py-1 bg-[#222222] hover:bg-[#2a2a2a] w-full sm:w-auto justify-center"
              >
                {copiedKey === "all" ? (
                  <>
                    <svg className="h-3.5 w-3.5 text-[#27c93f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All commands copied</span>
                  </>
                ) : (
                  <>
                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy all commands</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* 4. Tech Stack Area (only what the repo actually uses) */}
        <section
          id="stack"
          className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 scroll-mt-14 w-full"
        >
          <div className="mb-8 flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4d4d4d]">
              TECH STACK
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717]">
              Built with modern, production-tested tools.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4d4d4d] max-w-2xl">
              Zero bloat. Every package is strictly defined in package.json and verified against Next.js 16 standards.
            </p>
          </div>

          {/* Cards Grid: White bg, thin border, subtle layered shadow, 8-12px rounded */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TECH_STACK.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col justify-between rounded-xl border border-[#ebebeb] bg-white p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.02)] transition-all hover:border-[#d4d4d4] hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_20px_rgba(0,0,0,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-medium text-[#4d4d4d] uppercase tracking-wider">
                      {item.role}
                    </span>
                    <span className="rounded border border-[#ebebeb] bg-[#fafafa] px-2 py-0.5 font-mono text-[11px] text-[#171717]">
                      {item.version}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold tracking-tight text-[#171717]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#4d4d4d] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#f0f0f0]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#0070f3] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded"
                  >
                    <span>Official documentation</span>
                    <svg
                      className="h-3 w-3 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 5. Minimal Footer */}
      <footer className="border-t border-[#ebebeb] bg-white py-12 px-4 sm:px-6 w-full">
        <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#4d4d4d]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-semibold text-[#171717]">nextjs-boilerplate</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>A clean starting point for Next.js 16 projects.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="https://github.com/Xiasts/nextjs-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded px-1"
            >
              GitHub
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded px-1"
            >
              Next.js Docs
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded px-1"
            >
              React 19
            </a>
            <a
              href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0070f3] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] rounded px-1"
            >
              Deploy to Vercel
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
