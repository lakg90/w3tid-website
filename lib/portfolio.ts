// ── Fund holdings (positions) ─────────────────────────────────────────────────
// Source of truth for what the fund holds. Extracted from the W3T Portfolio
// spreadsheet. Update these when positions change (buy/sell); live prices and all
// derived metrics are computed by /api/portfolio from these figures.

export type Holding = {
  symbol:      string;
  name:        string;
  category:    "Blue Chip Crypto" | "Mid Cap" | "Commodity" | "Reserve";
  coingeckoId: string | null; // null = cash / stablecoin (price = $1)
  units:       number;
  avgBuy:      number;        // average purchase price (USD)
  color:       string;
};

export const HOLDINGS: Holding[] = [
  { symbol: "BTC",  name: "Bitcoin",    category: "Blue Chip Crypto", coingeckoId: "bitcoin",  units: 0.07205,  avgBuy: 73420.72, color: "#D4A017" },
  { symbol: "ETH",  name: "Ethereum",   category: "Blue Chip Crypto", coingeckoId: "ethereum", units: 0.1361,   avgBuy: 2350.55,  color: "#8A847C" },
  { symbol: "XMR",  name: "Monero",     category: "Mid Cap",          coingeckoId: "monero",   units: 0.255,    avgBuy: 349.02,   color: "#4A4540" },
  { symbol: "PAXG", name: "PAX Gold",   category: "Commodity",        coingeckoId: "pax-gold", units: 0.32838,  avgBuy: 4567.88,  color: "#A07810" },
  { symbol: "CASH", name: "Cash (USDT)", category: "Reserve",         coingeckoId: null,        units: 5301.09,  avgBuy: 1,        color: "#C8C0B0" },
];

// Inception benchmark (from sheet) for indexed comparisons.
export const INCEPTION = { date: "Nov 2025", btcPrice: 109574 };
