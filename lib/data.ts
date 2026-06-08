// ── Portfolio chart data ──────────────────────────────────────────────────────
export const portfolioData = [
  { date: "15 Dec '25", invested: 0.00,   total: 0.00  },
  { date: "1 Jan",      invested: -12.20, total: -0.61 },
  { date: "15 Jan",     invested: -8.15,  total: -0.82 },
  { date: "18 Jan",     invested: -3.80,  total: -0.38 },
  { date: "19 Jan",     invested: -6.40,  total: -0.64 },
  { date: "20 Jan",     invested: -9.50,  total: -0.85 },
  { date: "30 Jan",     invested: -7.67,  total: -1.35 },
  { date: "3 Feb",      invested: -11.95, total: -2.68 },
  { date: "8 Feb",      invested: -8.60,  total: -3.45 },
  { date: "10 Feb",     invested: -11.63, total: -4.61 },
  { date: "15 Feb",     invested: -10.56, total: -4.10 },
  { date: "28 Feb",     invested: -11.41, total: -4.00 },
  { date: "4 Mar",      invested: -4.30,  total: -1.16 },
  { date: "9 Mar",      invested: -11.06, total: -4.34 },
  { date: "20 Mar",     invested: -10.80, total: -4.20 },
  { date: "30 Mar",     invested: -13.50, total: -5.80 },
  { date: "10 Apr",     invested: -7.09,  total: -3.06 },
  { date: "15 Apr",     invested: -4.09,  total: -1.46 },
  { date: "30 Apr",     invested: -2.42,  total: -1.05 },
  { date: "10 May",     invested: 3.84,   total: 1.53  },
  { date: "15 May",     invested: 1.84,   total: 0.80  },
  { date: "26 May",     invested: -1.71,  total: -3.96 },
  { date: "8 Jun",      invested: -15.54, total: -7.74 },
];

// ── Indexed-to-100: Fund vs BTC ───────────────────────────────────────────────
// BTC prices at month-end from Nov 2025 inception ($109,574) → Jun 2026 (~$63,000)
export const indexedData = [
  { period: 'Nov',  fund: 100.00, btc: 100.00 },
  { period: 'Dec',  fund: 98.65,  btc: 79.87  },
  { period: 'Jan',  fund: 95.39,  btc: 71.84  },
  { period: 'Feb',  fund: 96.00,  btc: 61.15  },
  { period: 'Mar',  fund: 95.80,  btc: 62.27  },
  { period: 'Apr',  fund: 98.95,  btc: 69.62  },
  { period: 'May',  fund: 101.53, btc: 67.17  },
  { period: 'Jun*', fund: 92.26,  btc: 57.49  },
];

// ── Swing trade ───────────────────────────────────────────────────────────────
export const swingTrade = {
  asset: 'BTC',
  direction: 'SHORT',
  leverage: '3×',
  capital: 500,
  entry: 77500,
  exit: 63000,
  entryDate: '25 May 2026',
  exitDate: 'Jun 2026 (capitulation)',
  priceMove: -18.71,
  leveragedReturn: 56.1,
  pnl: 280,
  thesis: 'Summer lull hypothesis — historical BTC pattern of Q2/Q3 seasonal drawdown after Q1 peak. MVRV-Z Score elevated, BTC Dominance diverging from price action, and CME futures showing crowded long positioning. Thesis: price would retrace to the $60–65K range before the anticipated Q4 uptrend resumes.',
};

// ── Holdings ──────────────────────────────────────────────────────────────────
export const holdings = [
  { asset: 'BTC',        category: 'Blue Chip',  invested: 4790, avgBuy: '$74,739', nav: 4029, ret: -15.9, retPos: false },
  { asset: 'ETH',        category: 'Blue Chip',  invested: 320,  avgBuy: '$2,351',  nav: 228,  ret: -28.9, retPos: false },
  { asset: 'XMR',        category: 'Mid Cap',    invested: 89,   avgBuy: '$349',    nav: 80,   ret: -10.2, retPos: false },
  { asset: 'PAXG (Gold)',category: 'Commodity',  invested: 1000, avgBuy: '$4,797',  nav: 900,  ret: -10.0, retPos: false },
  { asset: 'Cash (USDT)',category: 'Reserve',    invested: 6301, avgBuy: '—',       nav: 6301, ret: 0,     retPos: null  },
];

export const allocationData = [
  { name: 'Cash',  value: 50.4, color: '#C8C0B0' },
  { name: 'BTC',   value: 34.9, color: '#D4A017' },
  { name: 'PAXG',  value: 7.8,  color: '#A07810' },
  { name: 'ETH',   value: 2.0,  color: '#8A847C' },
  { name: 'XMR',   value: 0.7,  color: '#4A4540' },
];

// ── Monthly returns bar chart data ────────────────────────────────────────────
export const monthlyReturnsBar = [
  { period: 'Nov', fund: 5.1,   btc: -17.5 },
  { period: 'Dec', fund: -0.0,  btc: -3.2  },
  { period: 'Jan', fund: -0.6,  btc: -10.0 },
  { period: 'Feb', fund: 2.7,   btc: -14.9 },
  { period: 'Mar', fund: 0.9,   btc: 1.8   },
  { period: 'Apr', fund: 4.4,   btc: 11.8  },
  { period: 'May', fund: -0.5,  btc: -3.5  },
];

// ── Fund reports ──────────────────────────────────────────────────────────────
export const fundReports = [
  {
    id: 5,
    title: 'Fund Report #5',
    date: 'May 2026',
    headline: 'Portfolio recovers briefly to +1.53% total before May drawdown. Cash discipline vindicated through volatile April/May.',
    pdf: '/reports/report-may-2026.pdf',
    stats: [{ label: 'Total Return', value: '−7.74%' }, { label: 'Cash', value: '50.4%' }, { label: 'BTC Target', value: '$54–63k' }],
  },
  {
    id: 4,
    title: 'Fund Report #4',
    date: 'April 2026',
    headline: 'Cash-heavy at 57%. Awaiting summer lull. HYPE flagged as high-conviction future accumulation target.',
    pdf: '/reports/report-apr-2026.pdf',
    stats: [{ label: 'Cash Position', value: '57%' }, { label: 'Total Return', value: '−5.80%' }, { label: 'Next Target', value: 'HYPE' }],
  },
  {
    id: 3,
    title: 'Fund Report #3',
    date: 'March 2026',
    headline: 'Rotated ALT holdings to XMR. No new deployments. Expecting drawdown into April/May.',
    pdf: '/reports/report-mar-2026.pdf',
    stats: [{ label: 'New Position', value: 'XMR' }, { label: 'Total Return', value: '−4.34%' }, { label: 'Outlook', value: 'Bearish' }],
  },
  {
    id: 2,
    title: 'Fund Report #2',
    date: 'February 2026',
    headline: 'Deployed 30% additional capital post-crash. BTC, ETH and Gold acquisitions.',
    pdf: '/reports/report-feb-2026.pdf',
    stats: [{ label: 'Capital Deployed', value: '30%' }, { label: 'New Assets', value: 'BTC · ETH · PAXG' }, { label: 'Total Return', value: '−4.61%' }],
  },
  {
    id: 1,
    title: 'Fund Report #1',
    date: 'January 2026',
    headline: 'First fund report. Repositioning from altcoins to BTC-heavy allocation. Target: 75% BTC / 10% ETH / 15% Gold.',
    pdf: '/reports/report-jan-2026.pdf',
    stats: [{ label: 'Target BTC', value: '75%' }, { label: 'Target ETH', value: '10%' }, { label: 'Target Gold', value: '15%' }],
  },
];

// ── Education sessions ────────────────────────────────────────────────────────
export const sessions = [
  {
    number: 1,
    title: 'Introduction to Blockchain & Traditional Finance',
    date: 'Session 1',
    topics: ['History of money', 'Ledgers and the traditional financial system', 'Introduction to Bitcoin', 'What problem does blockchain solve?'],
    context: 'We start every cohort by asking: what is money? Understanding the failures of the traditional financial system is the prerequisite to understanding why blockchain matters.',
    pdf: '/course/session-1.pdf',
  },
  {
    number: 2,
    title: 'Cryptography & Technical Fundamentals',
    date: 'Session 2',
    topics: ['Hash functions (SHA-256)', 'Asymmetric cryptography', 'Digital signatures', 'Consensus mechanisms (PoW vs PoS)', 'UTXO model and how transactions work'],
    context: 'The technical backbone. Most people talk about Bitcoin without understanding the cryptographic guarantees that make it trustless.',
    pdf: '/course/session-2.pdf',
  },
  {
    number: 3,
    title: 'Technical Challenges, Policy & Use Cases',
    date: 'Session 3',
    topics: ['The Scalability Trilemma', "Ethereum's transition to Proof of Stake", 'Privacy, interoperability and governance', 'Commodity vs Security classification', 'Smart contracts, DeFi, NFTs'],
    context: 'Blockchain is not a solution looking for a problem. We map specific use cases to specific technical capabilities — and are honest about where the technology currently falls short.',
    pdf: '/course/session-3.pdf',
  },
  {
    number: 4,
    title: 'Cryptocurrencies, Tokenomics & Fundamental Analysis',
    date: 'Session 4',
    topics: ['Tokenomics frameworks — supply schedules, inflation vs deflation models, staking, burning, vesting', 'Connecting tokenomics to investment potential', 'Oracle networks, L1s, functional coins', 'Fundamental analysis methodology'],
    context: 'Not all tokens are equal. Understanding the economic design of a protocol is the single most important skill for separating genuine value from speculation.',
    pdf: '/course/session-4.pdf',
    note: 'Draft — being updated',
  },
  {
    number: 5,
    title: 'Market History & Market Cycle Theory',
    date: 'Session 5',
    topics: ['Full crypto market history', 'The 4-year Bitcoin halving cycle', 'Cycle stages', 'Market cycle indicators: MVRV-Z Score, BTC Dominance, Puell Multiple, Log Regression Band, Pi Indicator'],
    context: "History doesn't repeat, but it rhymes. Understanding where we are in the cycle is the foundation of our fund's allocation strategy.",
    pdf: '/course/session-5.pdf',
  },
  {
    number: 6,
    title: 'Modern Portfolio Theory & Portfolio Construction',
    date: 'Session 6',
    topics: ['MPT overview', 'Efficient frontier', 'Sharpe ratio, Sortino ratio', 'Correlation matrices in crypto', 'Building a crypto portfolio using MPT principles', 'Dynamic Sharpe-maximising optimiser'],
    context: 'The same mathematical framework used by institutional asset managers, applied to digital assets. This session is where theory meets our live fund.',
    pdf: '/course/session-6.pdf',
  },
  {
    number: 7,
    title: 'Macro-Economic Analysis',
    date: 'Session 7',
    topics: ['Key macro indicators (CPI, unemployment, Fed funds rate)', 'Global liquidity as the primary fuel for risk assets', 'M2 money supply', 'DXY', 'Yield curve', 'CME FedWatch', 'Geopolitics and second-order effects'],
    context: 'Bitcoin does not exist in a vacuum. Every fund report we publish begins with macro. This session is why.',
    pdf: '/course/session-7.pdf',
  },
  {
    number: 8,
    title: 'Technical Analysis, Trading Patterns & Execution',
    date: 'Session 8',
    topics: ['Foundations of TA — support/resistance, moving averages, RSI, MACD, volume', 'Chart patterns', 'Open interest and funding rate interpretation', 'Trade setups and entry/exit execution', 'Trading psychology'],
    context: 'The final session brings everything together into a live market context. By the end, members can read a chart, size a position, and execute with a defined framework.',
    pdf: '/course/session-8.pdf',
  },
];

// ── Events ────────────────────────────────────────────────────────────────────
export const upcomingEvents = [
  {
    name: 'Benjamin Cowen',
    org: 'Into The Cryptoverse',
    role: 'Founder & Lead Analyst',
    bio: "Benjamin Cowen is one of the most respected independent macro analysts in crypto — known for his data-driven, cycle-based approach to Bitcoin. His work on the MVRV-Z Score, log regression bands, and market cycle timing directly informs W3TID's investment framework. We sat down with Benjamin to discuss cycle positioning, the summer lull thesis, and what the data says about the road ahead.",
    date: 'Recent Meeting',
    logo: '/logos/ITC.jpg',
    photo: '/events/ben-cowen.png',
    featured: true,
  },
  {
    name: 'Martin Bentzen',
    org: 'Klein Group',
    role: 'Web3 Venture Capital',
    bio: 'Martin brings the VC perspective on early-stage blockchain investment — how institutional capital evaluates Web3 projects, what separates fundable from unfundable, and how the Klein Group is positioning across the current cycle.',
    date: 'Date TBC',
    logo: '/logos/klein.jpeg',
  },
  {
    name: 'Christian Etholm',
    org: 'Firi',
    role: 'Head of Marketing',
    bio: "Firi is Norway's leading regulated crypto exchange. Christian covers the go-to-market challenges of building a compliant retail crypto product in a heavily regulated Nordic market.",
    date: 'Date TBC',
    logo: '/logos/firi.png',
  },
  {
    name: 'Filip Berg Nielsen',
    org: 'Tyr Markets & Volven Trading',
    role: 'Founder',
    bio: "Filip founded both a proprietary trading firm and a quantitative trading operation. His session covers the intersection of systematic trading, market microstructure, and digital assets.",
    date: 'Date TBC',
    logo: '/logos/tyr.png',
  },
  {
    name: 'Alexander Hagen',
    org: 'Ace Digital AS (ACED)',
    role: 'CEO & Founder',
    bio: "Alexander founded Ace Digital, one of Scandinavia's first publicly listed Bitcoin treasury companies. His session covers the corporate Bitcoin treasury model and how the Strategy playbook is being adapted for European markets.",
    date: 'Date TBC',
    logo: '/logos/ace-digital.png',
  },
  {
    name: 'Torbjørn Bull Jenssen',
    org: 'K33 Research',
    role: 'Founder',
    bio: 'K33 is one of the most respected independent crypto research and brokerage firms in the Nordics. Torbjørn brings deep market structure knowledge and a long-term perspective on how crypto markets mature.',
    date: 'Date TBC',
    logo: '/logos/k33.png',
  },
  {
    name: 'Jacob Mikkel Hansen',
    org: 'Nordic Blockchain Association',
    role: 'Representative',
    bio: "The Nordic Blockchain Association connects regulators, corporates, and innovators across Scandinavia's blockchain ecosystem. Jacob covers the regulatory landscape, MiCA implementation, and the Nordic opportunity.",
    date: 'Date TBC',
    logo: null,
  },
  {
    name: 'Hannes Virkus',
    org: 'Yolo Investments',
    role: 'Managing Director',
    bio: 'Yolo Investments is one of the most active blockchain-focused investment vehicles in the Baltics and Nordics. Hannes covers early-stage investment in Web3 and portfolio construction across digital assets.',
    date: 'Date TBC',
    logo: '/logos/yolo.jpeg',
  },
];

export const pastEvents = [
  {
    name: 'Sarthak Jain',
    org: 'dYdX',
    role: 'Institutional Business Development',
    summary: 'Covered institutional adoption of decentralised derivatives trading — how dYdX scaled to become one of the largest on-chain perpetuals exchanges and what institutional BD in DeFi actually looks like.',
    image: '/events/sarthak.png',
  },
  {
    name: 'Sadiq Jaffer',
    org: 'KPMG UK',
    role: 'Cloud Innovation Lead',
    summary: "A deep-dive into Bitcoin mining's role in energy optimisation and corporate adoption — covering hashrate financialisation, virtual power plants, and risk management in blockchain infrastructure.",
    image: '/events/sadiq.png',
  },
  {
    name: 'Solana Building Workshop',
    org: 'W3TID Internal',
    role: 'Build, Backtest & Deploy A Solana Trading Bot',
    summary: 'Hands-on workshop covering the full lifecycle of an algorithmic trading strategy — from design and backtesting through to deploying a live automated trading bot on-chain.',
    image: '/events/solana.png',
  },
];

// ── Team ──────────────────────────────────────────────────────────────────────
export const team = [
  { name: 'Leon Godtfredsen',  initials: 'LG', role: 'President & Founding Director — Trading & Investment', degree: 'Mathematics & Statistics, 4th Year',  bio: 'Founded the society in 2024. Leads fund strategy, market analysis, and investor relations. Also interning as Strategy & Operations at Ace Digital AS (Oslo).' },
  { name: 'Sahand Sarbaz',     initials: 'SS', role: 'Co-President',                                          degree: 'Economics, 4th Year',                  bio: 'Co-leads the society with a focus on fundamental analysis, macroeconomics, and the education programme.' },
  { name: 'Josh Davidson',     initials: 'JD', role: 'Head of Investor Relations',                            degree: 'Chemical Engineering, Masters',         bio: "Manages stakeholder communications, fund reports, and the society's relationships with external partners and sponsors." },
  { name: 'Wojtek Zurek',      initials: 'WZ', role: 'Vice President',                                        degree: 'Civil Engineering, 2nd Year',           bio: 'Supports operations across all three divisions and leads member onboarding and internal coordination.' },
  { name: 'Christopher Lam',   initials: 'CL', role: 'Head of Marketing',                                     degree: 'Business Administration, 2nd Year',     bio: "Manages W3TID's brand, social media presence, and event marketing across the University of Edinburgh." },
  { name: 'Cameron Matheson',  initials: 'CM', role: 'Head of Development',                                   degree: 'Computer Science, 4th Year',            bio: 'Leads the technical side of the Think Tank — building prototypes, managing infrastructure, and advising on blockchain architecture.' },
];
