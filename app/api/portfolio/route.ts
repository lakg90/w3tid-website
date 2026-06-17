import { NextResponse } from "next/server";
import { HOLDINGS, INCEPTION } from "@/lib/portfolio";

export const revalidate = 60;

export type PortfolioAsset = {
  symbol: string; name: string; category: string; color: string;
  units: number; avgBuy: number;
  price: number | null; change24h: number | null;
  value: number | null; costBasis: number;
  gainLoss: number | null; returnPct: number | null;
  weight: number | null;
};

export type PortfolioData = {
  assets: PortfolioAsset[];
  total_value: number | null;
  total_cost: number;
  deployed_value: number | null;
  deployed_cost: number;
  total_return_pct: number | null;
  invested_return_pct: number | null;
  cash_weight: number | null;
  day_change_value: number | null;   // 24h $ change of the deployed book
  fund_index: number | null;          // indexed to 100 at inception
  btc_index: number | null;
  btc_price: number | null;
  updated_at: string;
};

export async function GET() {
  const ids = HOLDINGS.map((h) => h.coingeckoId).filter((x): x is string => !!x);
  let prices: Record<string, { usd: number; usd_24h_change: number }> = {};
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(",")}&vs_currencies=usd&include_24hr_change=true`,
      { next: { revalidate: 60 } }
    );
    if (res.ok) prices = await res.json();
  } catch { /* fall through with empty prices */ }

  const assets: PortfolioAsset[] = HOLDINGS.map((h) => {
    const px = h.coingeckoId ? prices[h.coingeckoId]?.usd ?? null : 1;
    const chg = h.coingeckoId ? prices[h.coingeckoId]?.usd_24h_change ?? null : 0;
    const costBasis = h.units * h.avgBuy;
    const value = px != null ? h.units * px : null;
    const gainLoss = value != null ? value - costBasis : null;
    const returnPct = px != null && h.avgBuy > 0 ? (px / h.avgBuy - 1) * 100 : null;
    return {
      symbol: h.symbol, name: h.name, category: h.category, color: h.color,
      units: h.units, avgBuy: h.avgBuy,
      price: px, change24h: chg,
      value, costBasis, gainLoss, returnPct, weight: null,
    };
  });

  const total_value = assets.every((a) => a.value != null)
    ? assets.reduce((s, a) => s + (a.value ?? 0), 0) : null;
  const total_cost = assets.reduce((s, a) => s + a.costBasis, 0);

  const deployed = assets.filter((a) => a.category !== "Reserve");
  const deployed_value = deployed.every((a) => a.value != null)
    ? deployed.reduce((s, a) => s + (a.value ?? 0), 0) : null;
  const deployed_cost = deployed.reduce((s, a) => s + a.costBasis, 0);

  // weights
  if (total_value && total_value > 0) {
    for (const a of assets) a.weight = a.value != null ? (a.value / total_value) * 100 : null;
  }

  const cashAsset = assets.find((a) => a.category === "Reserve");
  const day_change_value = deployed.every((a) => a.value != null && a.change24h != null)
    ? deployed.reduce((s, a) => s + (a.value ?? 0) * (a.change24h ?? 0) / 100, 0) : null;

  const btc = assets.find((a) => a.symbol === "BTC");

  const data: PortfolioData = {
    assets,
    total_value,
    total_cost,
    deployed_value,
    deployed_cost,
    total_return_pct:    total_value != null && total_cost > 0 ? (total_value / total_cost - 1) * 100 : null,
    invested_return_pct: deployed_value != null && deployed_cost > 0 ? (deployed_value / deployed_cost - 1) * 100 : null,
    cash_weight:         cashAsset?.weight ?? null,
    day_change_value,
    fund_index:          total_value != null && total_cost > 0 ? (total_value / total_cost) * 100 : null,
    btc_index:           btc?.price != null ? (btc.price / INCEPTION.btcPrice) * 100 : null,
    btc_price:           btc?.price ?? null,
    updated_at:          new Date().toISOString(),
  };

  return NextResponse.json(data);
}
