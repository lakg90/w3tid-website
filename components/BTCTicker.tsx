'use client';

import { useState, useEffect } from 'react';

interface BTCData {
  price: number | null;
  change24h: number | null;
  loading: boolean;
}

export default function BTCTicker() {
  const [data, setData] = useState<BTCData>({ price: null, change24h: null, loading: true });
  const [open, setOpen] = useState(true);

  const fetchPrice = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true',
        { next: { revalidate: 60 } }
      );
      const json = await res.json();
      setData({
        price: json.bitcoin.usd,
        change24h: json.bitcoin.usd_24h_change,
        loading: false,
      });
    } catch {
      setData(d => ({ ...d, loading: false }));
    }
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const isPos = (data.change24h ?? 0) >= 0;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-ink text-white px-3 py-2 text-xs font-sans font-medium shadow-lg hover:bg-ink/90 transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        BTC Live
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-ink text-white shadow-xl" style={{ minWidth: 180 }}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-white/50">BTC / USD</span>
        </div>
        <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white/70 text-xs ml-3">✕</button>
      </div>
      <div className="px-4 py-3">
        {data.loading ? (
          <p className="text-sm font-sans text-white/40">Loading…</p>
        ) : data.price ? (
          <>
            <p className="font-sans font-semibold text-xl text-white leading-none mb-1">
              ${data.price.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
            {data.change24h !== null && (
              <p className={`text-xs font-sans font-medium ${isPos ? 'text-gold' : 'text-red-400'}`}>
                {isPos ? '▲' : '▼'} {Math.abs(data.change24h).toFixed(2)}% (24h)
              </p>
            )}
          </>
        ) : (
          <p className="text-xs font-sans text-white/40">Unavailable</p>
        )}
      </div>
    </div>
  );
}
