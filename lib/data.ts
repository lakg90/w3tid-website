// ── Portfolio chart data ──────────────────────────────────────────────────────
export const portfolioData = [
  { date: "15 Dec '25", invested: 0.00,   total: 0.00  },
  { date: "1 Jan '26",  invested: -12.20, total: -0.61 },
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

// ── Holdings ──────────────────────────────────────────────────────────────────
export const holdings = [
  { asset: 'BTC',       category: 'Blue Chip',  invested: 4790,  avgBuy: '$74,739', nav: 4029,  ret: -15.9, retPos: false },
  { asset: 'ETH',       category: 'Blue Chip',  invested: 320,   avgBuy: '$2,351',  nav: 228,   ret: -28.9, retPos: false },
  { asset: 'XMR',       category: 'Mid Cap',    invested: 89,    avgBuy: '$349',    nav: 80,    ret: -10.2, retPos: false },
  { asset: 'PAXG (Gold)', category: 'Commodity', invested: 1000, avgBuy: '$4,797',  nav: 900,   ret: -10.0, retPos: false },
  { asset: 'Cash (USDT)', category: 'Reserve',  invested: 6301,  avgBuy: '—',       nav: 6301,  ret: 0,     retPos: null  },
];

export const allocationData = [
  { name: 'BTC',   value: 34.9, color: '#D4A017' },
  { name: 'Cash',  value: 50.4, color: '#C8C0B0' },
  { name: 'PAXG',  value: 7.8,  color: '#A07810' },
  { name: 'ETH',   value: 2.0,  color: '#8A847C' },
  { name: 'XMR',   value: 0.7,  color: '#4A4540' },
];

// ── Fund reports ──────────────────────────────────────────────────────────────
export const fundReports = [
  {
    id: 4,
    title: 'Fund Report #4',
    date: 'April 2026',
    headline: 'Cash-heavy at 57%. Awaiting summer lull. HYPE flagged as high-conviction future accumulation target.',
    href: '#',
  },
  {
    id: 3,
    title: 'Fund Report #3',
    date: 'March 2026',
    headline: 'Rotated ALT holdings to XMR. No new deployments. Expecting drawdown into April/May.',
    href: '#',
  },
  {
    id: 2,
    title: 'Fund Report #2',
    date: 'February 2026',
    headline: 'Deployed 30% additional capital post-crash. BTC, ETH and Gold acquisitions.',
    href: '#',
  },
  {
    id: 1,
    title: 'Fund Report #1',
    date: 'January 2026',
    headline: 'First fund report. Repositioning from altcoins to BTC-heavy allocation. Target: 75% BTC / 10% ETH / 15% Gold.',
    href: '#',
  },
];

// ── Education sessions ────────────────────────────────────────────────────────
export const sessions = [
  {
    number: 1,
    title: 'Introduction to Blockchain & Traditional Finance',
    date: 'October 2025',
    topics: ['History of money', 'Ledgers and the traditional financial system', 'Introduction to Bitcoin', 'What problem does blockchain solve?'],
    context: 'We start every cohort by asking: what is money? Understanding the failures of the traditional financial system — counterparty risk, censorship, debasement — is the prerequisite to understanding why blockchain matters.',
  },
  {
    number: 2,
    title: 'Cryptography & Technical Fundamentals',
    date: 'October 2025',
    topics: ['Hash functions (SHA-256)', 'Asymmetric cryptography', 'Digital signatures', 'Consensus mechanisms (PoW vs PoS)', 'UTXO model and how transactions work'],
    context: 'The technical backbone. Most people talk about Bitcoin without understanding the cryptographic guarantees that make it trustless. We fix that.',
  },
  {
    number: 3,
    title: 'Technical Challenges, Policy & Use Cases',
    date: 'November 2025',
    topics: ['The Scalability Trilemma', "Ethereum's transition to Proof of Stake", 'Privacy, interoperability and governance', 'Commodity vs Security classification', 'Smart contracts, DeFi, NFTs'],
    context: 'Blockchain is not a solution looking for a problem. We map specific use cases to specific technical capabilities — and are honest about where the technology currently falls short.',
  },
  {
    number: 4,
    title: 'Cryptocurrencies, Tokenomics & Fundamental Analysis',
    date: 'November 2025',
    topics: ['Tokenomics frameworks — supply schedules, inflation vs deflation models, staking, burning, vesting', 'Connecting tokenomics to investment potential', 'Oracle networks, L1s, functional coins', 'Fundamental analysis methodology'],
    context: 'Not all tokens are equal. Understanding the economic design of a protocol is the single most important skill for separating genuine value from speculation.',
  },
  {
    number: 5,
    title: 'Market History & Market Cycle Theory',
    date: 'January 2026',
    topics: ['Full crypto market history', 'The 4-year Bitcoin halving cycle', 'Cycle stages', 'Market cycle indicators: MVRV-Z Score, BTC Dominance, Puell Multiple, Log Regression Band, Pi Indicator'],
    context: "History doesn't repeat, but it rhymes. Understanding where we are in the cycle is the foundation of our fund's allocation strategy.",
  },
  {
    number: 6,
    title: 'Modern Portfolio Theory & Portfolio Construction',
    date: 'January 2026',
    topics: ['MPT overview', 'Efficient frontier', 'Sharpe ratio, Sortino ratio', 'Correlation matrices in crypto', 'Building a crypto portfolio using MPT principles', 'Dynamic Sharpe-maximising optimiser'],
    context: 'The same mathematical framework used by institutional asset managers, applied to digital assets. This session is where theory meets our live fund.',
  },
  {
    number: 7,
    title: 'Macro-Economic Analysis',
    date: 'February 2026',
    topics: ['Key macro indicators (CPI, unemployment, Fed funds rate)', 'Global liquidity as the primary fuel for risk assets', 'M2 money supply', 'DXY', 'Yield curve', 'CME FedWatch', 'Geopolitics and second-order effects'],
    context: 'Bitcoin does not exist in a vacuum. Every fund report we publish begins with macro. This session is why.',
  },
  {
    number: 8,
    title: 'Technical Analysis, Trading Patterns & Execution',
    date: 'March 2026',
    topics: ['Foundations of TA — support/resistance, moving averages, RSI, MACD, volume', 'Chart patterns', 'Open interest and funding rate interpretation', 'Trade setups and entry/exit execution', 'Trading psychology'],
    context: 'The final session brings everything together into a live market context. By the end, members can read a chart, size a position, and execute with a defined framework.',
  },
];

// ── Events ────────────────────────────────────────────────────────────────────
export const upcomingEvents = [
  {
    name: 'Martin Bentzen',
    org: 'Klein Group',
    role: 'Web3 Venture Capital',
    bio: 'Martin brings the VC perspective on early-stage blockchain investment — how institutional capital evaluates Web3 projects, what separates fundable from unfundable, and how the Klein Group is positioning across the current cycle.',
    date: 'Date TBC',
  },
  {
    name: 'Christian Etholm',
    org: 'Firi',
    role: 'Head of Marketing',
    bio: "Firi is Norway's leading regulated crypto exchange. Christian covers the go-to-market challenges of building a compliant retail crypto product in a heavily regulated Nordic market — and what the next generation of crypto-native financial products looks like.",
    date: 'Date TBC',
  },
  {
    name: 'Filip Berg Nielsen',
    org: 'Tyr Markets & Volven Trading',
    role: 'Founder',
    bio: 'Filip founded both a proprietary trading firm and a quantitative trading operation. His session will cover the intersection of systematic trading, market microstructure, and digital assets — directly relevant to W3TID\'s algorithmic trading division.',
    date: 'Date TBC',
  },
  {
    name: 'Alexander Hagen',
    org: 'Ace Digital AS (ACED)',
    role: 'CEO & Founder',
    bio: 'Alexander founded Ace Digital, one of Scandinavia\'s first publicly listed Bitcoin treasury companies. His session covers the corporate Bitcoin treasury model — why public companies are converting balance sheets to BTC, and how the Strategy playbook is being adapted for European markets.',
    date: 'Date TBC',
  },
  {
    name: 'Torbjørn Bull Jenssen',
    org: 'K33 Research',
    role: 'Founder',
    bio: 'K33 is one of the most respected independent crypto research and brokerage firms in the Nordics. Torbjørn brings deep market structure knowledge and a long-term perspective on how crypto markets mature — essential context for any serious investor.',
    date: 'Date TBC',
  },
  {
    name: 'Jacob Mikkel Hansen',
    org: 'Nordic Blockchain Association',
    role: 'Representative',
    bio: 'The Nordic Blockchain Association connects regulators, corporates, and innovators across Scandinavia\'s blockchain ecosystem. Jacob covers the regulatory landscape, MiCA implementation, and the opportunity for Nordic institutions in the digital asset space.',
    date: 'Date TBC',
  },
  {
    name: 'Hannes Virkus',
    org: 'Yolo Investments',
    role: 'Managing Director',
    bio: 'Yolo Investments is one of the most active blockchain-focused investment vehicles in the Baltics and Nordics. Hannes covers early-stage investment in Web3, portfolio construction across digital assets, and how an investment manager navigates volatile crypto markets.',
    date: 'Date TBC',
  },
];

export const pastEvents = [
  {
    name: 'Sarthak Jain',
    org: 'dYdX',
    role: 'Institutional Business Development',
    summary: 'Covered institutional adoption of decentralised derivatives trading — how dYdX scaled to become one of the largest on-chain perpetuals exchanges and what institutional BD in DeFi actually looks like.',
  },
  {
    name: 'Sadiq Jaffer',
    org: 'Independent',
    role: 'Chief Bitcoin Officer',
    summary: 'A deep-dive into the Bitcoin standard thesis from a corporate treasury perspective — covering sovereign risk, purchasing power preservation, and the practical steps a company takes when converting reserves to Bitcoin.',
  },
  {
    name: 'Solana Building Workshops',
    org: 'W3TID Internal',
    role: 'Multiple Sessions',
    summary: 'A multi-session practical workshop series covering Solana development — from devnet setup and wallet integration through to deploying basic smart contracts and interacting with DeFi protocols.',
  },
];

// ── Team ──────────────────────────────────────────────────────────────────────
export const team = [
  {
    name: 'Leon Godtfredsen',
    initials: 'LG',
    role: 'President & Founding Director — Trading & Investment',
    degree: 'Mathematics & Statistics, 4th Year',
    bio: 'Founded the society in 2024. Leads fund strategy, market analysis, and investor relations. Also interning as Strategy & Operations at Ace Digital AS (Oslo).',
  },
  {
    name: 'Sahand Sarbaz',
    initials: 'SS',
    role: 'Co-President',
    degree: 'Economics, 4th Year',
    bio: 'Co-leads the society with a focus on fundamental analysis, macroeconomics, and the education programme.',
  },
  {
    name: 'Josh Davidson',
    initials: 'JD',
    role: 'Head of Investor Relations',
    degree: 'Chemical Engineering, Masters',
    bio: "Manages stakeholder communications, fund reports, and the society's relationships with external partners and sponsors.",
  },
  {
    name: 'Wojtek Zurek',
    initials: 'WZ',
    role: 'Vice President',
    degree: 'Civil Engineering, 2nd Year',
    bio: 'Supports operations across all three divisions and leads member onboarding and internal coordination.',
  },
  {
    name: 'Christopher Lam',
    initials: 'CL',
    role: 'Head of Marketing',
    degree: 'Business Administration, 2nd Year',
    bio: "Manages W3TID's brand, social media presence, and event marketing across the University of Edinburgh.",
  },
  {
    name: 'Cameron Matheson',
    initials: 'CM',
    role: 'Head of Development',
    degree: 'Computer Science, 4th Year',
    bio: 'Leads the technical side of the Think Tank — building prototypes, managing infrastructure, and advising on blockchain architecture.',
  },
];
