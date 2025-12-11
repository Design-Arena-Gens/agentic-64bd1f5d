"use client";

import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "BTC Halving Playbook: 5 On-Chain Signals I’m Watching",
    kicker: "Market Strategy",
    body: `Bitcoin's fourth halving is in the books, but the real opportunity lies in spotting momentum early. I break down 5 on-chain metrics—miner reserves, stablecoin inflows, whale accumulation, derivatives funding, and exchange outflows—that are flashing green. Each one comes with actionable levels I’m targeting this month. Let me know which metric you trust most right now.👇`
  },
  {
    id: 2,
    title: "Altcoin Season Checklist: 7 Catalysts You Can’t Ignore",
    kicker: "Alts Radar",
    body: `Before you ape into the next hot narrative, run through this checklist. I’m tracking token unlock schedules, VC vesting cliffs, ecosystem grant programs, L2 traction, RWAs, AI partnerships, and gaming crossovers. Projects with 5/7 catalysts are outperforming. Drop your top watchlist ticker and I'll take a look on-chain.`
  },
  {
    id: 3,
    title: "From $10K to $100K: My Risk-Managed Futures Grid",
    kicker: "Trading Journal",
    body: `Copy trading without a plan is gambling. Here's the exact futures grid I’m running on BTC/ETH/OP this quarter. It includes position sizing rules, stop structures, and a volatility-adjusted rebalancing trigger. I’ve attached screenshots of the automation logic—tap ❤️ if you want me to release the template.`
  },
  {
    id: 4,
    title: "Solana vs. Base vs. Blast: Which L2 Deserves Your Liquidity?",
    kicker: "Chain Wars",
    body: `Everyone’s chasing points, but which chain pays you twice—airdrops + real yield? I compare TVL stickiness, fee rebates, native user growth, and retention after incentives. Spoiler: one chain is quietly onboarding TradFi users via RWAs. Vote in the poll and I’ll publish the detailed spreadsheet.`
  },
  {
    id: 5,
    title: "Binance Earn Deep Dive: Best Auto-Invest Pairings for Q3",
    kicker: "Yield Desk",
    body: `Staking APYs are compressing, so I’m pairing auto-invest with tactical range-bound options. This guide covers the 3 pairings giving me >18% APY with capped downside, plus the exact triggers I use for auto-selling. If you want the Google Sheet tracker, comment “TRACKER” below.`
  },
  {
    id: 6,
    title: "Regulation Radar: 4 Policy Moves That Could Pump Crypto Overnight",
    kicker: "Macro Watch",
    body: `Compliance isn't boring when it moves markets. I'm tracking MiCA stablecoin rollout, Hong Kong ETF inflows, Brazil’s CBDC pilots, and the US House Crypto FIT vote. Two of these have hard dates this month. I break down the potential inflow impact on BTC, ETH, and BNB. Which jurisdiction do you think surprises us first?`
  },
  {
    id: 7,
    title: "Hidden Gems: 3 Low-Cap DeFi Protocols Printing Real Fees",
    kicker: "Alpha Drop",
    body: `Forget hype. These three protocols are already cash-flow positive with treasury transparency. I’ve included dashboard snapshots, FDV vs. revenue comparisons, and catalysts for re-rating. None have hit Binance… yet. Smash that share button if you want a deep dive on #2.`
  },
  {
    id: 8,
    title: "Web3 Careers: How I Built a $25K/Month Advisory Business",
    kicker: "Creator Lab",
    body: `Bear markets made me diversify. I walk through how I package market intelligence for exchanges, funds, and token teams—pricing, deliverables, and client acquisition tips. Plus 3 pitch templates you can steal today. Tag someone building their crypto brand.`
  },
  {
    id: 9,
    title: "BNB Chain Power Plays: Projects With Real User Moats",
    kicker: "Ecosystem Spotlight",
    body: `BNB Chain is entering its flywheel phase. I showcase five dApps with >50% month-over-month retention, their tokenomics upgrades, and why liquidity incentives are finally sustainable. Which one should we host an AMA with next week?`
  },
  {
    id: 10,
    title: "Weekly Game Plan: My Portfolio Rebalance + Airdrop Farming Map",
    kicker: "Sunday Close",
    body: `Every Sunday I rebalance and farm. Here’s the playbook: cash rotation targets, LST/LRT adjustments, NFT mints, and point programs across zkSync, Scroll, and LayerZero. Use it as a template for your own planning. Want the Notion board? Comment “NOTION”.`
  }
];

type CopyState = {
  [key: number]: "idle" | "copied" | "error";
};

export default function Page() {
  const [copyState, setCopyState] = useState<CopyState>({});

  const handleCopy = async (id: number, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyState((prev) => ({ ...prev, [id]: "copied" }));
      setTimeout(() => {
        setCopyState((prev) => ({ ...prev, [id]: "idle" }));
      }, 2400);
    } catch (error) {
      setCopyState((prev) => ({ ...prev, [id]: "error" }));
      setTimeout(() => {
        setCopyState((prev) => ({ ...prev, [id]: "idle" }));
      }, 2400);
    }
  };

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Binance Square Creator | 10 Years of Engagement</p>
        <h1>Top 10 Posts Built to Spark Conversation</h1>
        <p className="lead">
          Fresh hooks, actionable insights, and clear calls to engage—ready for you to post
          this week.
        </p>
      </header>
      <section className="grid">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <p className="kicker">{post.kicker}</p>
            <h2>{post.title}</h2>
            <p className="body">{post.body}</p>
            <button
              className={`cta ${copyState[post.id] === "copied" ? "cta-success" : ""} ${
                copyState[post.id] === "error" ? "cta-error" : ""
              }`}
              type="button"
              onClick={() => handleCopy(post.id, `${post.title}\n\n${post.body}`)}
            >
              {copyState[post.id] === "copied"
                ? "Copied!"
                : copyState[post.id] === "error"
                ? "Try Again"
                : "Copy Post"}
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
