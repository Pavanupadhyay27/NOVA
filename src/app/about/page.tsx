'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import styles from './page.module.css';

interface EpochMetric {
  label: string;
  val: string;
  bad?: boolean;
  good?: boolean;
}

interface FoundingStoryEpoch {
  epoch: string;
  year: string;
  title: string;
  shortTitle: string;
  codename: string;
  tagline: string;
  quote: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  color: string;
  glow: string;
  accentBg: string;
  badgeLabel: string;
  artifactType: 'autopsy' | 'terminal' | 'soundstage' | 'ledger';
  artifactTitle: string;
  artifactSubtitle: string;
  artifactMetrics: EpochMetric[];
  resolution: string;
  turningPoints: string[];
  metricHero: string;
  metricLabel: string;
}

// ─── Data: Chrono-Chamber: The Founding Saga (Interactive First-Principles Evolution) ───
const foundingStoryEpochs: FoundingStoryEpoch[] = [
  {
    epoch: '01',
    year: '2021',
    title: 'The Broken Agency Model',
    shortTitle: 'The 2021 Realization',
    codename: 'WHY WE STARTED',
    tagline: 'Scrapped lock-in contracts to focus 100% on client revenue, not vanity clicks.',
    quote:
      'We watched ambitious Odisha businesses pay lakhs every month for generic flyers, fake followers, and delayed PDF reports—while their phones never rang with real customers.',
    author: 'Shankarsan Nayak',
    authorRole: 'Founder & CEO',
    authorAvatar: '/images/team/exec_1.png',
    color: '#0B2093',
    glow: 'rgba(11, 32, 147, 0.22)',
    accentBg: 'rgba(11, 32, 147, 0.08)',
    badgeLabel: 'THE TURNING POINT',
    artifactType: 'autopsy',
    artifactTitle: 'Legacy Agency Invoice vs Real Results',
    artifactSubtitle: 'Exhibit: What Odisha businesses were paying for vs what they received',
    artifactMetrics: [
      { label: 'Monthly Retainer Billed', val: '₹4,50,000 / mo', bad: true },
      { label: 'Genuine Customer Leads', val: '0 Leads', bad: true },
      { label: 'Vanity Social Impressions', val: '1.4M Clicks', bad: true },
      { label: 'Agency Guarantee', val: '0% Liability', bad: true },
    ],
    resolution:
      'We took a strict pledge: Never bill a single rupee for vanity clicks or empty promises. Every marketing rupee must generate genuine business inquiries and trackable sales.',
    turningPoints: [
      'Zero Lock-In Contracts',
      'Live 24/7 Telemetry Dashboards',
    ],
    metricHero: '0%',
    metricLabel: 'Vanity Metrics',
  },
  {
    epoch: '02',
    year: '2022',
    title: 'Sub-Second Web & Direct Leads',
    shortTitle: 'Speed & Conversion Stack',
    codename: 'PERFORMANCE TECH',
    tagline: 'Sub-second Next.js web pages with instant direct WhatsApp lead delivery.',
    quote:
      'If your website takes 5 seconds to load, half your ad money is wasted before the customer even reads your offer. We started building fast Next.js websites and direct WhatsApp lead routing so no customer is lost.',
    author: 'Pranjal Sharma',
    authorRole: 'Founding Team Member & COO',
    authorAvatar: '/images/team/exec_2.png',
    color: '#0284C7',
    glow: 'rgba(2, 132, 199, 0.22)',
    accentBg: 'rgba(2, 132, 199, 0.08)',
    badgeLabel: 'TECH UPGRADE',
    artifactType: 'terminal',
    artifactTitle: 'Sub-Second Web & Live Lead Delivery Engine',
    artifactSubtitle: 'High-speed Next.js landing pages + Instant WhatsApp lead routing',
    artifactMetrics: [
      { label: 'Google PageSpeed Score', val: '99 / 100', good: true },
      { label: 'Mobile Page Load Speed', val: '0.74s SLA', good: true },
      { label: 'WhatsApp Lead Delivery', val: '<60 Seconds', good: true },
      { label: 'Ad Tracking Accuracy', val: '100% (0% Loss)', good: true },
    ],
    resolution:
      'Clients experienced an immediate 2.4X increase in qualified customer inquiries simply by switching to our high-speed mobile web pages and instant lead routing.',
    turningPoints: [
      '<0.8s Next.js Load SLA',
      'Instant WhatsApp Routing',
    ],
    metricHero: '<0.8s',
    metricLabel: 'Load Speed SLA',
  },
  {
    epoch: '03',
    year: '2023',
    title: 'In-House 4K Cinema Studio',
    shortTitle: 'Bhubaneswar Studio',
    codename: 'KHARVELA PRODUCTION LAB',
    tagline: 'In-house Kharvela soundstage producing high-converting Odia commercials.',
    quote:
      'People in Odisha can easily tell the difference between generic stock photos and real, authentic videos. We opened our physical 4K studio in Kharvela Nagar to create genuine commercials and high-converting video reels that build instant trust.',
    author: 'Praveen Kumar',
    authorRole: 'Founding Team Member & CGO',
    authorAvatar: '/images/team/exec_3.png',
    color: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.22)',
    accentBg: 'rgba(236, 72, 153, 0.08)',
    badgeLabel: 'PHYSICAL STUDIO',
    artifactType: 'soundstage',
    artifactTitle: '4K Commercial Soundstage Bay 01',
    artifactSubtitle: 'Kharvela Nagar, Unit 3 · Professional Studio & Cinema Equipment',
    artifactMetrics: [
      { label: 'Dedicated Bhubaneswar Studio', val: 'Unit 3 Hub', good: true },
      { label: 'Cinema Camera Standard', val: 'Sony 4K / 8K', good: true },
      { label: 'Video Hooks Tested Monthly', val: '40+ Reels', good: true },
      { label: 'Local Customer Trust Multiplier', val: '3.2X Lift', good: true },
    ],
    resolution:
      'No stock footage or copied graphics. Our clients receive high-end cinematic commercials and viral social reels that command premium customer pricing across Odisha.',
    turningPoints: [
      '4K Kharvela Soundstage',
      'In-House Cinema Team',
    ],
    metricHero: '3.2X',
    metricLabel: 'Conversion Lift',
  },
  {
    epoch: '04',
    year: '2024+',
    title: 'Scaling ₹25Cr+ on Mutual Trust',
    shortTitle: '₹25Cr+ Scaled',
    codename: 'PROVEN PERFORMANCE',
    tagline: 'Managing ₹25Cr+ in client budgets with 94% retention and zero lock-in.',
    quote:
      'We manage over ₹25 Crore in verified client ad budgets with a 94% retention rate on simple month-to-month terms. We work as true growth partners: if we do not generate real profit for your business, you can pause or cancel anytime with zero penalty.',
    author: 'Shankarsan Nayak',
    authorRole: 'Founder & CEO',
    authorAvatar: '/images/team/exec_1.png',
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.22)',
    accentBg: 'rgba(16, 185, 129, 0.08)',
    badgeLabel: 'PROVEN SCALE',
    artifactType: 'ledger',
    artifactTitle: 'Audited Ad Spend & Client Retention Ledger',
    artifactSubtitle: 'Verified commercial results across 50+ businesses in Eastern India',
    artifactMetrics: [
      { label: 'Odisha Brands Scaled', val: '50+ Brands', good: true },
      { label: 'Average Blended ROAS', val: '4.8X Target', good: true },
      { label: 'Voluntary Client Retention', val: '94% MoM', good: true },
      { label: 'Binding Lock-In Contracts', val: '0 Days', good: true },
    ],
    resolution:
      'Today, Marketing Copilot is Eastern India’s premier performance marketing partner, trusted by 50+ top brands in luxury real estate, healthcare, retail, and e-commerce.',
    turningPoints: [
      '₹25Cr+ Capital Scaled',
      '94% MoM Client Retention',
    ],
    metricHero: '₹25Cr+',
    metricLabel: 'Ad Spend Managed',
  },
];

// ─── Data: Bedrock Pillars (Manifesto) ───
const manifestoPillars = [
  {
    num: '01',
    tagline: 'QUANTITATIVE COMMERCIAL RIGOR',
    title: 'Revenue Over Vanity Metrics',
    desc: 'Most traditional agencies parade impression counts, generic clicks, and social media likes while your bank account remains stagnant. At Marketing Copilot, we calibrate every campaign strictly to unit economics: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and verified Qualified Sales Pipelines.',
    stat: '100%',
    statLabel: 'Revenue-Attributed Reporting',
    color: '#0B2093',
  },
  {
    num: '02',
    tagline: 'HIGH-VELOCITY EXECUTION PROTOCOL',
    title: 'Speed as an Asymmetric Advantage',
    desc: 'Markets move at algorithm speed. While legacy agencies spend 60 days in committee meetings drafting slide decks, our team deploys creative variants, sets up tracking pixels, and begins iterative media testing within 72 hours. Fast feedback loops create compounding market separation.',
    stat: '<72h',
    statLabel: 'Deployment SLA',
    color: '#D97706',
  },
  {
    num: '03',
    tagline: 'RADICAL CLIENT TRANSPARENCY',
    title: 'Zero Black-Box Reporting',
    desc: 'You should never have to wonder where your ad budget was spent or why conversions dipped. Every Marketing Copilot partner gets 24/7 direct access to live Looker Studio telemetry dashboards, unfiltered platform ad accounts, and real-time sprint logs.',
    stat: '24/7',
    statLabel: 'Live Telemetry Access',
    color: '#10B981',
  },
  {
    num: '04',
    tagline: 'LONG-TERM ASSET CREATION',
    title: 'Compounding Organic Moats',
    desc: 'Paid media generates immediate demand, but organic search and brand authority create long-term enterprise value. We engineer technical SEO architectures and local map pack dominance that systematically lower your customer acquisition cost month after month.',
    stat: '-42%',
    statLabel: 'Blended CAC Over 12 Months',
    color: '#8B5CF6',
  },
];

// ─── Data: Why Choose Us — 4 Elevated Unfair Advantages ───
const fourUnfairAdvantages = [
  {
    id: 'moat-local',
    index: '01',
    badge: 'HYPERLOCAL DOMINANCE',
    title: 'Odisha Ground Reality & Regional Nuance',
    desc: 'Deep consumer psychology across Odisha and Eastern India eliminates generic ad spend waste with cultural resonance.',
    deliverables: [
      'Dual-language Odia & English creative hooks',
      'Hyperlocal Google 3-Pack Map dominance',
    ],
    icon: '📍',
    metric: '3.2X',
    metricLabel: 'Higher Local Conversion',
    accentColor: '#0B2093',
    glowColor: 'rgba(11, 32, 147, 0.15)',
  },
  {
    id: 'moat-speed',
    index: '02',
    badge: 'SOFTWARE ENGINEERING',
    title: 'Sub-Second Next.js Performance Stacks',
    desc: 'Custom Next.js web applications engineered with sub-800ms load speeds and 99/100 Core Web Vitals to maximize conversions.',
    deliverables: [
      'Server-Side Rendering on Edge CDN',
      'Direct WhatsApp & CRM webhook lead routing',
    ],
    icon: '⚡',
    metric: '<0.8s',
    metricLabel: 'Mobile LCP SLA Guarantee',
    accentColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.15)',
  },
  {
    id: 'moat-creative',
    index: '03',
    badge: 'PRODUCTION SOUNDSTAGE',
    title: 'In-House 4K/8K Cinematic Production',
    desc: 'Dedicated in-house production soundstage delivering 4K cinematic commercials, luxury shoots, and high-retention viral reels.',
    deliverables: [
      '4K cinema cameras, pro lighting & audio bays',
      'High-retention viral video sprint hooks',
    ],
    icon: '🎬',
    metric: '4K/8K',
    metricLabel: 'Cinema Studio Standards',
    accentColor: '#D97706',
    glowColor: 'rgba(217, 119, 6, 0.15)',
  },
  {
    id: 'moat-freedom',
    index: '04',
    badge: 'PERFORMANCE FREEDOM',
    title: 'Zero Binding Lock-In Contracts',
    desc: 'No restrictive handcuffs or punitive retainers. We operate on month-to-month performance with mutual commercial alignment.',
    deliverables: [
      'Rolling month-to-month partnership terms',
      'Zero cancellation penalties or exit fees',
    ],
    icon: '🛡️',
    metric: '94%',
    metricLabel: 'Voluntary Client Retention',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.15)',
  },
];

// ─── Data: Comparison Matrix (3D Evaluation) ───
const comparisonRows = [
  {
    feature: 'Primary Metric Focus',
    featureDesc: 'What the agency optimizes daily ad spend for',
    traditional: 'Impressions, Reach, Vanity Likes',
    copilot: 'Net Bank Deposits & Verified SQLs',
    highlight: true,
  },
  {
    feature: 'Reporting Cadence',
    featureDesc: 'How and when performance is communicated',
    traditional: 'Delayed monthly PDF decks (often massaged)',
    copilot: 'Live 24/7 Looker Studio real-time telemetry',
    highlight: false,
  },
  {
    feature: 'Team Allocation',
    featureDesc: 'Who actually works on your campaigns day-to-day',
    traditional: 'Pitched by directors, handed to junior interns',
    copilot: 'Seasoned senior architects & founding strategists',
    highlight: true,
  },
  {
    feature: 'Execution Speed',
    featureDesc: 'Turnaround time for ad copy & creative changes',
    traditional: 'Weeks of committee review & email delays',
    copilot: 'Iterative testing deployed within 48–72h',
    highlight: false,
  },
  {
    feature: 'Contract Terms',
    featureDesc: 'Legal obligations & partner flexibility',
    traditional: '6 to 12 months rigid lock-in handcuffs',
    copilot: 'Performance rolling terms (zero lock-in)',
    highlight: true,
  },
  {
    feature: 'Web & Tech Stack',
    featureDesc: 'Underlying infrastructure powering landing pages',
    traditional: 'Heavy WordPress templates with slow load times',
    copilot: 'Sub-second Next.js edge web architecture',
    highlight: false,
  },
  {
    feature: 'Attribution Tracking',
    featureDesc: 'How ad conversions are tracked and verified',
    traditional: 'Basic browser pixels (40%+ cookie data loss)',
    copilot: 'Server-Side Meta CAPI & Google Offline APIs',
    highlight: true,
  },
];

// ─── Data: Real Executive Leadership Team ───
const executiveArchitects = [
  {
    name: 'Shankarsan Nayak',
    role: 'Founder & Chief Executive Officer',
    dept: 'EXECUTIVE LEADERSHIP & VISION',
    bio: 'Founder driving quantitative innovation, digital transformation, and sustainable business growth through mathematically rigorous strategy, creative prestige, and audited cash flow.',
    quote: 'We drive innovation, digital transformation, and sustainable business growth through strategy, creativity, and measurable results.',
    image: '/images/team/exec_1.png',
    imagePosition: '50% 10%',
    color: '#0B2093',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Pranjal Sharma',
    role: 'Founding Team Member & COO',
    dept: 'OPERATIONS & SCALING PROTOCOLS',
    bio: 'Leading digital marketing operations with 12+ years of experience, focused on seamless sprint execution, operational excellence, and delivering consistent client success across multi-channel campaigns.',
    quote: 'Focused on seamless execution, operational excellence and delivering consistent client success.',
    image: '/images/team/exec_2.png',
    imagePosition: '50% 12%',
    color: '#0284C7',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Praveen Kumar',
    role: 'Founding Team Member & CGO',
    dept: 'GROWTH & STRATEGIC ENTERPRISE',
    bio: 'Spearheading commercial growth, strategic enterprise partnerships, and high-value brand acquisitions to expand Marketing Copilot’s high-performance market footprint across India.',
    quote: 'Building high-leverage growth partnerships that unlock compounding market valuation for ambitious brands.',
    image: '/images/team/exec_3.png',
    imagePosition: '50% 12%',
    color: '#D97706',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Bikram Keshari Sahu',
    role: 'Operation Executive',
    dept: 'CAMPAIGN DELIVERY & ANALYTICS',
    bio: 'Orchestrating campaign delivery pipelines, cross-channel technical infrastructure, and strict SLA compliance for predictable client ROI and operational excellence.',
    quote: 'Operational rigor and precision delivery ensure every campaign produces audited business results.',
    image: '/images/team/exec_4.jpg',
    imagePosition: '50% 10%',
    color: '#10B981',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sasmita Pal',
    role: 'HR Admin Executive',
    dept: 'PEOPLE, CULTURE & TALENT',
    bio: 'Fostering high-performance agency culture, talent acquisition, people development, and seamless organizational administration across our Bhubaneswar studio and growth lab.',
    quote: 'Empowering world-class creative and engineering talent to build the next generation of growth systems.',
    image: '/images/team/exec_5.png',
    imagePosition: '50% 2%',
    color: '#8B5CF6',
    linkedin: 'https://linkedin.com',
  },
];

// ─── Data: 5-Phase Growth Operating System Roadmap ───
const operatingPhases = [
  {
    num: '01',
    name: 'Forensic Audit',
    time: 'Days 1–7',
    focus: 'Diagnostic Moat',
    desc: 'Deep-dive audit of historical ad spend, Google Search Console telemetry, competitor SERP positioning, and conversion leakages.',
    color: '#0B2093',
    deliverables: [
      'Historical Ad Account Forensic Audit',
      'Funnel Leakage & Blended CAC Analysis',
      'Competitor SERP & Keyword Mapping',
      'Unit Economics Benchmark Model',
    ],
    tools: ['Google Search Console', 'Meta Ads Library', 'SEMrush', 'GA4 Analytics'],
    outcomeMetric: '100% Attribution & Waste Identification',
  },
  {
    num: '02',
    name: 'Infrastructure Setup',
    time: 'Days 8–14',
    focus: 'Attribution Tracking',
    desc: 'Server-side Meta Conversions API (CAPI), Google Enhanced Conversions, call tracking routing, and real-time Looker dashboards.',
    color: '#0284C7',
    deliverables: [
      'Server-Side Meta CAPI Deployment',
      'Google Enhanced Conversions Integration',
      'Next.js High-Conversion Landing Pages',
      'Real-Time Looker Telemetry Dashboard',
    ],
    tools: ['Meta CAPI', 'Google Tag Manager', 'Vercel Edge', 'Looker Studio'],
    outcomeMetric: 'Zero Cookie Loss Data Fidelity',
  },
  {
    num: '03',
    name: 'Creative Testing Lab',
    time: 'Days 15–30',
    focus: 'Offer Packaging',
    desc: 'Deployment of high-intent hooks, 4K cinematic commercial video assets, localized copy variations, and friction-free landing pages.',
    color: '#EC4899',
    deliverables: [
      '4K In-House Soundstage Production',
      '15+ Multivariate Video & Static Hooks',
      'High-Converting Offer & Copy Synthesis',
      'Friction-Free WhatsApp Inbound Flow',
    ],
    tools: ['Sony Cinema 4K', 'Premiere Pro', 'After Effects', 'Figma Lab'],
    outcomeMetric: '40+ Creative Hooks Deployed Monthly',
  },
  {
    num: '04',
    name: 'Algorithmic Scale',
    time: 'Month 2',
    focus: 'Omnichannel Expansion',
    desc: 'Systematic scaling of winning cohorts across Meta Advantage+ and Google Performance Max, maintaining strict target CAC thresholds.',
    color: '#F59E0B',
    deliverables: [
      'Meta Advantage+ Cohort Scaling',
      'Google Search & PMax Bid Rebalancing',
      'Automated Dayparting & Budget Allocation',
      'Strict ROAS Threshold Guardrails',
    ],
    tools: ['Meta Business Suite', 'Google Ads API', 'Looker Studio', 'Bid Rules'],
    outcomeMetric: '4.8X Target Blended ROAS Reached',
  },
  {
    num: '05',
    name: 'Compounding Hegemony',
    time: 'Ongoing',
    focus: 'Organic Displaced CPC',
    desc: 'Continuous technical SEO velocity and local map pack dominance, systematically reducing dependency on paid ad auctions.',
    color: '#10B981',
    deliverables: [
      'Programmatic Technical SEO Architecture',
      'Google Local 3-Pack Map Domination',
      'Authoritative Backlink Asset Creation',
      'Systematic Blended CAC Reduction',
    ],
    tools: ['Schema Pro', 'Next.js Edge CDN', 'Ahrefs Enterprise', 'GMB Suite'],
    outcomeMetric: '-42% Blended CAC Reduction over 12 Months',
  },
];

// ─── Data: Real-Time Revenue & Attribution Pipeline (Replaces Static Tooling) ───
const revenuePipelineStages = [
  {
    id: 'stage-1',
    num: '01',
    title: 'Omnichannel Data Ingestion & CAPI',
    category: 'DATA LAYER',
    badge: '100% SERVER-SIDE',
    desc: 'Bypasses iOS 14.5+ cookie blocking using direct server-to-server Meta Conversions API (CAPI) and Google Offline Conversion APIs.',
    metrics: '<12ms Latency · 0% Cookie Loss',
    tech: ['Meta CAPI Direct', 'Google Ads API', 'Stripe Webhooks', 'Next.js Server API'],
    color: '#0B2093',
  },
  {
    id: 'stage-2',
    num: '02',
    title: 'Algorithmic Attribution & Rebalancing',
    category: 'INTELLIGENCE LAYER',
    badge: 'REAL-TIME OPTIMIZATION',
    desc: 'Automated 15-minute budget rebalancer systematically siphons ad spend from underperforming creatives to winning high-ROAS cohorts.',
    metrics: '15-Min Budget Loop · Unit Economics First',
    tech: ['Neural Attribution Engine', 'Looker Data Pipeline', 'BigQuery Warehousing'],
    color: '#0284C7',
  },
  {
    id: 'stage-3',
    num: '03',
    title: 'Creative Velocity & Soundstage Synthesis',
    category: 'CREATIVE LAB',
    badge: '4K CINEMA ASSETS',
    desc: 'Continuous sprint creation of 4K cinematic commercial reels, localized Odia/English variants, and high-CTR static proof modules.',
    metrics: '40+ Multivariate Variants / Mo',
    tech: ['Kharvela Soundstage Studio', 'Cinema 4K Rig', 'After Effects Kinetic'],
    color: '#EC4899',
  },
  {
    id: 'stage-4',
    num: '04',
    title: 'Zero-Leakage Lead Dispatch & Telemetry',
    category: 'CONVERSION LAYER',
    badge: '<60S RESPONSE TIME',
    desc: 'Instant lead handoff to sales reps via automated WhatsApp business APIs, paired with a 24/7 executive revenue telemetry portal.',
    metrics: '<60s Lead Handoff · 24/7 Live Telemetry',
    tech: ['Official WhatsApp API', 'HubSpot Enterprise', 'Looker 24/7 Console'],
    color: '#10B981',
  },
];

// ─── Data: Live Telemetry Numbers ───
const telemetryNumbers = [
  { value: 25, prefix: '₹', suffix: 'Cr+', label: 'Media Capital Managed', tag: 'PORTFOLIO VOLUME', sub: 'Verified ad spend managed across clients', icon: '💎', color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.25)' },
  { value: 4, prefix: '', suffix: '.8X', label: 'Average Blended ROAS', tag: 'NET EFFICIENCY', sub: 'Across e-commerce, real estate & clinics', icon: '🚀', color: '#10B981', glow: 'rgba(16, 185, 129, 0.25)' },
  { value: 94, prefix: '', suffix: '%', label: 'Client Retention Rate', tag: 'PARTNER LOYALTY', sub: 'Voluntary rolling monthly agreements', icon: '🛡️', color: '#A78BFA', glow: 'rgba(167, 139, 250, 0.25)' },
  { value: 50, prefix: '', suffix: '+', label: 'Market Leaders Scaled', tag: 'REGIONAL MOAT', sub: 'High-growth brands across Eastern India', icon: '👑', color: '#FBBF24', glow: 'rgba(251, 191, 36, 0.25)' },
];

// ─── Data: About Us FAQs ───
const aboutFaqs = [
  {
    q: 'How is Marketing Copilot different from traditional advertising agencies in Bhubaneswar?',
    a: 'Traditional agencies sell disconnected deliverables—a few social media posts, generic flyers, or vanity impressions that do not translate into cash flow. Marketing Copilot operates as an embedded quantitative growth partner. We combine technical SEO, high-ROAS paid media, cinematic video production, and high-performance Next.js engineering into a single automated revenue engine with 100% transparent reporting.',
  },
  {
    q: 'Do you require long-term binding contracts?',
    a: 'No. We believe locking clients into restrictive 6-to-12-month contracts is a sign of agency insecurity. We operate on flexible, performance-backed rolling agreements. Our 94% retention rate is built on delivering profitable commercial results every single month, not legal handcuffs.',
  },
  {
    q: 'What industries do you have proven case studies in?',
    a: 'We have proven case studies across Real Estate & Luxury Living, Healthcare & Specialty Clinics, Direct-to-Consumer (D2C) & E-Commerce, Hospitality & Fine Dining, Retail Flagships, and B2B Professional Services throughout Bhubaneswar, Cuttack, and Eastern India.',
  },
  {
    q: 'Can we meet the team in person at your Bhubaneswar studio?',
    a: 'Absolutely. We encourage in-person strategy sessions at our Bhubaneswar Studio & Growth Lab located in Kharvela Nagar, Unit 3. You can review live client case studies, examine our production equipment, and speak directly with our senior strategists.',
  },
  {
    q: 'How quickly will we see measurable traction after onboarding?',
    a: 'Our 14-day sprint protocol deploys diagnostic audits and tracking infrastructure within the first 7 days, followed by live creative testing in days 8–14. Many clients see initial qualified inbound inquiries and conversion rate lifts within the first 2 to 3 weeks.',
  },
];

const heroSlides = [
  {
    id: 'slide-1',
    src: '/images/ns_about_us_graphic.png',
    alt: 'Marketing Copilot digital marketing company strategy and campaigns in Bhubaneswar',
    caption: 'Strategic Growth & Execution',
  },
  {
    id: 'slide-2',
    src: '/images/ns_about us_graphic_slide2.png',
    alt: 'Marketing Copilot marketing performance data and digital solutions',
    caption: 'Performance & 10x ROI',
  },
  {
    id: 'slide-3',
    src: '/images/ns_about us_graphic_slide3.png',
    alt: 'Creative marketing professionals planning growth strategies and digital solutions',
    caption: 'Creative & Performance Marketing',
  },
];

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [activeEpoch, setActiveEpoch] = useState<number>(0);
  const [activePipelineStage, setActivePipelineStage] = useState<number>(0);
  const [spineProgress, setSpineProgress] = useState<number>(12);
  const [currentHeroSlide, setCurrentHeroSlide] = useState<number>(0);
  const heroSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    heroSlideTimerRef.current = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => {
      if (heroSlideTimerRef.current) clearInterval(heroSlideTimerRef.current);
    };
  }, []);

  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const countersStarted = useRef(false);
  const storySectionRef = useRef<HTMLElement | null>(null);
  const timelineTrackRef = useRef<HTMLDivElement | null>(null);

  // Track active chapter as user scrolls through the living timeline
  useEffect(() => {
    const chapters = document.querySelectorAll('[data-epoch-index]');
    if (!chapters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-epoch-index'));
            if (!isNaN(idx)) {
              setActiveEpoch(idx);
            }
          }
        });
      },
      { threshold: 0.35, rootMargin: '-10% 0px -40% 0px' }
    );

    chapters.forEach((ch) => observer.observe(ch));
    return () => observer.disconnect();
  }, []);

  // Continuous smooth scroll progress down the straight timeline spine
  useEffect(() => {
    const handleSpineScroll = () => {
      if (!timelineTrackRef.current) return;
      const rect = timelineTrackRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startPoint = viewportHeight * 0.70;
      const progressPx = startPoint - rect.top;
      const totalHeight = rect.height;
      if (totalHeight > 0) {
        const pct = Math.min(100, Math.max(0, (progressPx / (totalHeight * 0.85)) * 100));
        setSpineProgress(pct);
      }
    };

    window.addEventListener('scroll', handleSpineScroll, { passive: true });
    window.addEventListener('resize', handleSpineScroll, { passive: true });
    handleSpineScroll();
    return () => {
      window.removeEventListener('scroll', handleSpineScroll);
      window.removeEventListener('resize', handleSpineScroll);
    };
  }, []);

  const scrollToChapter = (idx: number, year: string) => {
    setActiveEpoch(idx);
    const targetId = `chapter-${year}`;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Counter animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted.current) {
          countersStarted.current = true;
          counterRefs.current.forEach((el, idx) => {
            if (!el) return;
            const target = telemetryNumbers[idx].value;
            const duration = 1800;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(ease * target).toString();
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                el.textContent = target.toString();
              }
            };
            setTimeout(() => requestAnimationFrame(step), idx * 100);
          });
        }
      },
      { threshold: 0.25 }
    );

    const sectionEl = document.getElementById('about-telemetry-section');
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.aboutPageWrapper}>
      {/* ══════════════════════════════════════════════════════
          SECTION 1: DUAL-PANE HERO & AGENCY COCKPIT
         ══════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroAmbientGlow1} />
        <div className={styles.heroAmbientGlow2} />
        <div className={styles.heroGridLines} />

        <div className="container">
          <div className={styles.heroDualGrid}>
            {/* Left Pane: Narrative, Title, CTAs, Trust Strip */}
            <div className={styles.heroLeftCol}>
              <ScrollReveal direction="up">
                <div className={styles.heroEyebrow}>
                  <span className={styles.heroEyebrowDot} />
                  <span>ABOUT MARKETING COPILOT &bull; BHUBANESWAR</span>
                </div>

                <h1 className={`display-hero ${styles.heroTitle}`}>
                  Engineering Compounding Growth for{' '}
                  <span className={`accent-gradient ${styles.heroAccent}`}>Odisha’s Ambitious Brands.</span>
                </h1>

                <div className={styles.heroSub}>
                  <p>
                    We founded Marketing Copilot with one mission: to replace sluggish legacy marketing retainers with high-velocity, quantitative growth engineering. We build automated client acquisition systems that turn attention into predictable revenue.
                  </p>
                </div>

                <div className={styles.heroActionsRow}>
                  <BeamButton href="/contact" label="Claim Free Growth Audit" size="lg" />
                  <BeamButton
                    href="#war-room-section"
                    label="Visit Our War Room"
                    size="lg"
                    variant="outline"
                  />
                </div>

                {/* Tactile Skeuomorphic Trust Strip */}
                <div className={styles.heroTrustStrip}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustGreenDot} />
                    <span>₹25Cr+ Managed</span>
                  </div>
                  <span className={styles.trustSep}>•</span>
                  <div className={styles.trustItem}>
                    <span className={styles.trustStar}>★</span>
                    <span>4.9/5 Rating (50+ Brands)</span>
                  </div>
                  <span className={styles.trustSep}>•</span>
                  <div className={styles.trustItem}>
                    <span className={styles.trustCheck}>✓</span>
                    <span>94% Retention</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Pane: Clean Photography Showcase (Exact same as Home Hero) */}
            <div className={styles.visual}>
              <div className={styles.imageCard}>
                <div className={styles.imageViewport}>
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`${styles.slideItem} ${idx === currentHeroSlide ? styles.slideActive : ''}`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 900px) 100vw, 680px"
                        quality={95}
                        className={styles.slideImage}
                      />
                      <div className={styles.slideOverlay} />
                    </div>
                  ))}

                  {/* Minimalist Floating Status Badge */}
                  <div className={styles.floatingBadge}>
                    <span className={styles.badgePulse} />
                    <span className={styles.badgeText}>Executive Studio &bull; Bhubaneswar</span>
                  </div>

                  {/* Minimalist Tactile Dot Indicators */}
                  <div className={styles.dotsWrap}>
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`${styles.dot} ${idx === currentHeroSlide ? styles.dotActive : ''}`}
                        onClick={() => setCurrentHeroSlide(idx)}
                        aria-label={`Switch to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════════════════
          SECTION 3: HOME MAP SECTION (YOUR TRUSTED DIGITAL MARKETING COMPANY IN BHUBANESWAR)
         ══════════════════════════════════════════════════════ */}
      <QuickConnectMapSection id="war-room-section" />

      {/* ══════════════════════════════════════════════════════
          SECTION 4: THE FOUNDING STORY (LIVING DOCUMENTARY TIMELINE)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.documentaryStorySection} id="founding-story" ref={storySectionRef}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>THE FOUNDING STORY · DOCUMENTARY CHRONICLE</span>
            </div>
            <h2 className={`display-lg ${styles.cleanStoryHeadline}`}>
              Why We Built Marketing Copilot:{' '}
              <span className="accent-gradient">From Broken Retainers to Sovereign Growth</span>
            </h2>
            <p className={`body-lg ${styles.cleanStorySub}`}>
              The 4-year chronological journey of how three operators rejected vanity agency retainers to engineer Eastern India’s premier quantitative growth copilot.
            </p>
          </ScrollReveal>

          {/* Living Documentary Track with Central Liquid Spine */}
          <div className={styles.documentaryTrackContainer} ref={timelineTrackRef}>
            {/* Luminous Liquid Progress Spine */}
            <div className={styles.documentarySpineWrap}>
              <div className={styles.documentarySpineLine} />
              <div
                className={styles.documentarySpineProgress}
                style={{ height: `${spineProgress}%` }}
              />
              <div
                className={styles.spineLeadingOrb}
                style={{ top: `${spineProgress}%` }}
              />
            </div>

        {/* Chapters Flow (Alternating Zigzag Layout) */}
        <div className={styles.chaptersFlowList}>
          {foundingStoryEpochs.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const chapterId = `chapter-${item.year}`;
            return (
              <div
                key={item.epoch}
                id={chapterId}
                data-epoch-index={idx}
                className={`${styles.chapterBlock} ${isEven ? styles.chapterEven : styles.chapterOdd}`}
              >
                {/* Giant Ghost Watermark Year */}
                <div className={styles.ghostYearWatermark}>
                  {item.year}
                </div>

                {/* Colorful 3D Skeuomorphic Year Medallion on Spine */}
                <div className={styles.chapterBeaconWrap}>
                  <div className={styles.skeuoYearMedallion} style={{ '--medallion-color': item.color, '--medallion-glow': item.glow } as React.CSSProperties}>
                    <span className={styles.medallionChromeRing} />
                    <span className={styles.medallionInnerBevel}>
                      <span className={styles.medallionYearDigit}>{item.year}</span>
                    </span>
                  </div>
                </div>

                {/* Alternating Single 3D Skeuomorphic Milestone Card */}
                <div className={styles.chapterInnerGrid}>
                  {/* Left Column for Odd (Act 1, 3), Spacer for Even */}
                  {!isEven ? (
                    <div className={styles.skeuoMilestoneCard} style={{ '--accent-glow': item.glow, '--card-accent': item.color } as React.CSSProperties}>
                      <div className={styles.cardBevelHighlight} />
                      <span className={`${styles.cardRivet} ${styles.rivetTL}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetTR}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetBL}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetBR}`} />
                      
                      <div className={styles.skeuoCardTopRow}>
                        <div className={styles.skeuoCardYearPill}>
                          <span className={styles.skeuoPillDot} style={{ background: item.color }} />
                          <span className={styles.skeuoPillYear}>{item.year}</span>
                          <span className={styles.skeuoPillDivider}>•</span>
                          <span className={styles.skeuoPillAct}>ACT 0{idx + 1}</span>
                        </div>
                        <span className={styles.skeuoBadgeTag} style={{ borderColor: `${item.color}40`, color: item.color, background: `${item.color}0D` }}>
                          {item.badgeLabel}
                        </span>
                      </div>

                      <h3 className={styles.skeuoCardHeadline}>{item.title}</h3>
                      <p className={styles.skeuoCardSummary}>{item.tagline}</p>

                      <div className={styles.skeuoMetricTray}>
                        <div className={styles.skeuoMetricHeroCell}>
                          <span className={styles.skeuoMetricHeroVal} style={{ color: item.color }}>{item.metricHero}</span>
                          <span className={styles.skeuoMetricHeroLbl}>{item.metricLabel}</span>
                        </div>
                        <div className={styles.skeuoMetricDivider} />
                        <div className={styles.skeuoPillsList}>
                          {item.turningPoints.slice(0, 2).map((pt, pIdx) => (
                            <div key={pIdx} className={styles.skeuoPointChip}>
                              <span className={styles.skeuoPointCheck}>✓</span>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.skeuoGridSpacer} />
                  )}

                  {/* Right Column for Even (Act 2, 4), Spacer for Odd */}
                  {isEven ? (
                    <div className={styles.skeuoMilestoneCard} style={{ '--accent-glow': item.glow, '--card-accent': item.color } as React.CSSProperties}>
                      <div className={styles.cardBevelHighlight} />
                      <span className={`${styles.cardRivet} ${styles.rivetTL}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetTR}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetBL}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetBR}`} />
                      
                      <div className={styles.skeuoCardTopRow}>
                        <div className={styles.skeuoCardYearPill}>
                          <span className={styles.skeuoPillDot} style={{ background: item.color }} />
                          <span className={styles.skeuoPillYear}>{item.year}</span>
                          <span className={styles.skeuoPillDivider}>•</span>
                          <span className={styles.skeuoPillAct}>ACT 0{idx + 1}</span>
                        </div>
                        <span className={styles.skeuoBadgeTag} style={{ borderColor: `${item.color}40`, color: item.color, background: `${item.color}0D` }}>
                          {item.badgeLabel}
                        </span>
                      </div>

                      <h3 className={styles.skeuoCardHeadline}>{item.title}</h3>
                      <p className={styles.skeuoCardSummary}>{item.tagline}</p>

                      <div className={styles.skeuoMetricTray}>
                        <div className={styles.skeuoMetricHeroCell}>
                          <span className={styles.skeuoMetricHeroVal} style={{ color: item.color }}>{item.metricHero}</span>
                          <span className={styles.skeuoMetricHeroLbl}>{item.metricLabel}</span>
                        </div>
                        <div className={styles.skeuoMetricDivider} />
                        <div className={styles.skeuoPillsList}>
                          {item.turningPoints.slice(0, 2).map((pt, pIdx) => (
                            <div key={pIdx} className={styles.skeuoPointChip}>
                              <span className={styles.skeuoPointCheck}>✓</span>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.skeuoGridSpacer} />
                  )}
                </div>
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </section>

{/* ══════════════════════════════════════════════════════
          TRANSITIONAL HIGH-CONVERTING CTA ABOVE MANIFESTO
         ══════════════════════════════════════════════════════ */}
      <section className={styles.transitionalCtaSection}>
    <div className="container">
      <ScrollReveal>
        <div className={styles.transitionalCtaCard}>
          <div className={styles.transCtaGlow} />
          <div className={styles.transCtaLeft}>
            <span className={styles.transCtaBadge}>⚡ FAST-TRACK YOUR REVENUE</span>
            <h3 className={styles.transCtaTitle}>
              Tired of Agency Excuses &amp; Vanity Impressions?
            </h3>
            <p className={styles.transCtaSub}>
              Get a complimentary 30-minute forensic audit of your ad accounts, search rankings, and conversion funnels.
            </p>
          </div>

          <div className={styles.transCtaRight}>
            <div className={styles.transCtaButtons}>
              <BeamButton href="/contact" label="Claim Free Growth Audit" size="md" />
              <BeamButton href="#principles-section" label="Read Our Principles" size="md" variant="outline" />
            </div>
            <div className={styles.transCtaTrust}>
              <span>✓ 48-Hour Turnaround</span>
              <span>•</span>
              <span>✓ Zero Lock-In</span>
              <span>•</span>
              <span>✓ 100% Confidential</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 5: THE COPILOT MANIFESTO & CORE PILLARS
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.manifestoSection } id = "principles-section" >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>THE COPILOT MANIFESTO</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          Four Bedrock Principles That{' '}
          <span className="accent-gradient">Rule Every Decision.</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          We don&apos;t compromise on standards. These four core convictions govern every ad campaign, line of code, and creative storyboard we produce.
        </p>
      </ScrollReveal>

      {/* Horizontal Kinetic Stream of Principles */}
      <div className={styles.manifestoStream}>
        {manifestoPillars.map((pillar, idx) => (
          <ScrollReveal key={pillar.num} delay={idx * 80}>
            <div className={styles.streamItem} style={{ '--pillar-accent': pillar.color } as React.CSSProperties}>
              <div className={styles.streamLeftCol}>
                <span className={styles.ambientIndex}>{pillar.num}</span>
                <span className={styles.pillarTagline} style={{ color: pillar.color }}>
                  {pillar.tagline}
                </span>
              </div>

              <div className={styles.streamMidCol}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>

              <div className={styles.streamRightCol}>
                <div className={styles.streamStatBox}>
                  <span className={styles.streamStatNumber} style={{ color: pillar.color }}>
                    {pillar.stat}
                  </span>
                  <span className={styles.streamStatLabel}>{pillar.statLabel}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 6: 4 ELEVATED UNFAIR ADVANTAGES (WHY CHOOSE US)
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.whyChooseSection } >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>UNFAIR ADVANTAGES</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          Why Market Leaders Choose{' '}
          <span className="accent-gradient">Marketing Copilot</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          Four proprietary structural moats that give our partners an unshakeable competitive edge in market positioning, unit economics, and client acquisition.
        </p>
      </ScrollReveal>

      {/* 4 Luxury Architectural Advantage Cards */}
      <div className={styles.fourAdvantagesGrid}>
        {fourUnfairAdvantages.map((moat, i) => (
          <ScrollReveal key={moat.id} delay={i * 90}>
            <div
              className={styles.advantageLuxuryCard}
              style={
                {
                  '--adv-accent': moat.accentColor,
                  '--adv-glow': moat.glowColor,
                } as React.CSSProperties
              }
            >
              <div className={styles.advCardGlow} />

              <div className={styles.advCardHeader}>
                <span className={styles.advIndexNum}>{moat.index}</span>
                <span className={styles.advBadge}>{moat.badge}</span>
              </div>

              <h3 className={styles.advTitle}>{moat.title}</h3>
              <p className={styles.advDesc}>{moat.desc}</p>

              <div className={styles.advDeliverablesList}>
                {moat.deliverables.map((item) => (
                  <div key={item} className={styles.deliverableItem}>
                    <span className={styles.checkIconBullet} style={{ color: moat.accentColor }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.advCardFooter}>
                <div className={styles.advMetricBox}>
                  <span className={styles.advMetricVal} style={{ color: moat.accentColor }}>{moat.metric}</span>
                  <span className={styles.advMetricLabel}>{moat.metricLabel}</span>
                </div>
                <Link href="/contact" className={styles.advAuditLink}>
                  <span>Explore Moat</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
      </section >

      {/* ══════════════════════════════════════════════════════
          MINIMAL TRANSITIONAL CTA ABOVE TRANSPARENT EVALUATION
         ══════════════════════════════════════════════════════ */}
      <section className={styles.evaluationCtaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.evaluationCtaCard}>
              <div className={styles.evalCtaGlow} />
              <div className={styles.evalCtaLeft}>
                <span className={styles.evalCtaBadge}>⚡ ELEVATE YOUR REVENUE</span>
                <h3 className={styles.evalCtaTitle}>
                  Ready to Turn These Unfair Advantages Into Profit?
                </h3>
                <p className={styles.evalCtaSub}>
                  Claim a complimentary 20-minute diagnostic session with our founding growth architects. Zero lock-in, zero fluff.
                </p>
              </div>

              <div className={styles.evalCtaRight}>
                <BeamButton href="/contact" label="Claim Free Growth Audit" size="md" />
                <div className={styles.evalCtaTrust}>
                  <span>✓ 100% Free</span>
                  <span>•</span>
                  <span>✓ Zero Lock-In</span>
                  <span>•</span>
                  <span>✓ 24h Turnaround</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7: TRANSPARENT EVALUATION (3D COMPARISON MATRIX)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.comparisonSection}>
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>TRANSPARENT EVALUATION</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          Old Traditional Agencies{' '}
          <span className="accent-gradient">vs. The Copilot Standard</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          Compare side-by-side. See why forward-thinking enterprises are leaving antiquated retainer contracts behind.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className={styles.matrixContainer}>
          <div className={styles.matrixHeader}>
            <div className={styles.matrixColFeature}>CRITICAL PERFORMANCE CAPABILITY</div>
            <div className={`${styles.matrixColAgency} ${styles.matrixBad}`}>
              <span>TRADITIONAL AGENCIES</span>
            </div>
            <div className={`${styles.matrixColCopilot} ${styles.matrixGood}`}>
              <span>MARKETING COPILOT ARCHITECTURE</span>
            </div>
          </div>

          <div className={styles.matrixBody}>
            {comparisonRows.map((row, idx) => (
              <div
                key={row.feature}
                className={`${styles.matrixRow} ${row.highlight ? styles.rowHighlight : ''} ${idx % 2 === 0 ? styles.rowEven : ''}`}
              >
                <div className={styles.cellFeature}>
                  <div className={styles.featureTitleWrap}>
                    <span className={styles.featureBullet}>✦</span>
                    <span className={styles.featureNameText}>{row.feature}</span>
                  </div>
                  <span className={styles.featureSubText}>{row.featureDesc}</span>
                </div>

                <div className={`${styles.cellAgency} ${styles.cellBad}`}>
                  {/* 3D Interactive Skeuomorphic Cross Sign Token */}
                  <span className={styles.token3dCross} title="Antiquated Retainer / High Vulnerability" aria-label="Not guaranteed">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span className={styles.agencyText}>{row.traditional}</span>
                </div>

                <div className={`${styles.cellCopilot} ${styles.cellGood}`}>
                  {/* 3D Interactive Skeuomorphic Check Sign Token */}
                  <span className={styles.token3dCheck} title="Verified Quantitative SLA Telemetry" aria-label="Verified SLA">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className={styles.copilotText}>{row.copilot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Single CTA Button down the card */}
      <div className={styles.comparisonCtaRow}>
        <BeamButton href="/contact" label="Switch to The Copilot Standard" size="md" />
      </div>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 8: 5-PHASE GROWTH OS (INTERACTIVE SINUSOIDAL ROADMAP)
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.roadmapSection } >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>THE GROWTH OPERATING SYSTEM</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          How We Take Brands From Forensic Audit to{' '}
          <span className="accent-gradient">Compounding Scale</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          Our battle-tested 5-phase framework designed for rapid execution, mathematical validation, and compounding scale.
        </p>
      </ScrollReveal>

      {/* Connected Desktop Roadmap */}
      <div className={styles.roadmapDesktopWrap}>
        {/* Central Connecting Conduit */}
        <div className={styles.roadmapSvgTrack}>
          <svg viewBox="0 0 1200 48" fill="none" preserveAspectRatio="none" className={styles.roadmapSvg}>
            {/* Ambient Guide Wire */}
            <line
              x1="50"
              y1="24"
              x2="1150"
              y2="24"
              stroke="rgba(11, 32, 147, 0.16)"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            {/* Smooth Glowing Laser Conduit (Phase 1 to Phase 5) */}
            <line
              x1="50"
              y1="24"
              x2="1150"
              y2="24"
              stroke="url(#roadmapGradLaser)"
              strokeWidth="4.5"
              strokeDasharray="36 18"
              strokeLinecap="round"
              className={styles.animatedRoadmapPath}
            />
            {/* Smooth Energy Spark Tracer */}
            <line
              x1="50"
              y1="24"
              x2="1150"
              y2="24"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeDasharray="20 220"
              strokeLinecap="round"
              className={styles.animatedRoadmapSpark}
            />
            <defs>
              <linearGradient id="roadmapGradLaser" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B2093" />
                <stop offset="25%" stopColor="#0284C7" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="75%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 5-Column Grid with Central Numbers & Alternating Cards */}
        <div className={styles.roadmapColumnsGrid}>
          {operatingPhases.map((phase, idx) => {
            const isAbove = idx % 2 === 0;
            const isSelected = activePhase === idx;
            const colIndex = idx + 1;
            return (
              <div
                key={phase.num}
                onClick={() => setActivePhase(idx)}
                className={`${styles.roadmapCol} ${isAbove ? styles.colTop : styles.colBottom} ${isSelected ? styles.roadmapColSelected : ''}`}
                style={
                  {
                    gridColumn: colIndex,
                    gridRow: isAbove ? '1 / 3' : '2 / 4',
                    '--phase-accent': phase.color,
                    cursor: 'pointer',
                  } as React.CSSProperties
                }
              >
                {isAbove ? (
                  <>
                    <div className={`${styles.phaseCard} ${isSelected ? styles.phaseCardActive : ''}`}>
                      <div className={styles.phaseHeaderRow}>
                        <span
                          className={styles.phaseBadge}
                          style={{
                            color: phase.color,
                            borderColor: `${phase.color}35`,
                            background: `${phase.color}12`,
                          }}
                        >
                          Phase {phase.num}
                        </span>
                        <span className={styles.phaseTime}>⏱ {phase.time}</span>
                      </div>

                      <h4 className={styles.phaseName}>{phase.name}</h4>
                      <p className={styles.phaseDesc}>{phase.desc}</p>

                      <div className={styles.phaseFocusRow}>
                        <span className={styles.focusDot} style={{ background: phase.color }} />
                        <span className={styles.focusText} style={{ color: phase.color }}>
                          {phase.focus}
                        </span>
                      </div>
                    </div>

                    <div className={styles.phaseStem} style={{ background: phase.color }} />

                    <div
                      className={`${styles.phaseNodeCircle} ${isSelected ? styles.nodeCircleActive : ''}`}
                      style={{ borderColor: phase.color }}
                    >
                      <span className={styles.phaseNodeCore} style={{ background: phase.color }}>
                        {phase.num}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`${styles.phaseNodeCircle} ${isSelected ? styles.nodeCircleActive : ''}`}
                      style={{ borderColor: phase.color }}
                    >
                      <span className={styles.phaseNodeCore} style={{ background: phase.color }}>
                        {phase.num}
                      </span>
                    </div>

                    <div className={styles.phaseStem} style={{ background: phase.color }} />

                    <div className={`${styles.phaseCard} ${isSelected ? styles.phaseCardActive : ''}`}>
                      <div className={styles.phaseHeaderRow}>
                        <span
                          className={styles.phaseBadge}
                          style={{
                            color: phase.color,
                            borderColor: `${phase.color}35`,
                            background: `${phase.color}12`,
                          }}
                        >
                          Phase {phase.num}
                        </span>
                        <span className={styles.phaseTime}>⏱ {phase.time}</span>
                      </div>

                      <h4 className={styles.phaseName}>{phase.name}</h4>
                      <p className={styles.phaseDesc}>{phase.desc}</p>

                      <div className={styles.phaseFocusRow}>
                        <span className={styles.focusDot} style={{ background: phase.color }} />
                        <span className={styles.focusText} style={{ color: phase.color }}>
                          {phase.focus}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 9: REAL-TIME REVENUE & ATTRIBUTION PIPELINE
          (REPLACES BASIC TOOLING & AUTOMATION TECH STACK)
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.revenuePipelineSection } >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>THE COPILOT AUTOMATION ENGINE</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          Real-Time Intelligence &amp;{' '}
          <span className="accent-gradient">Attribution Pipeline</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          How data travels from customer intent to ad platforms to bank deposit. Zero data leakage, sub-second latency, and algorithmic allocation.
        </p>
      </ScrollReveal>

      {/* Interactive Pipeline Architecture */}
      <div className={styles.pipelineStagesGrid}>
        {revenuePipelineStages.map((stage, idx) => (
          <ScrollReveal key={stage.id} delay={idx * 80} className={styles.pipelineRevealWrap}>
            <div
              onClick={() => setActivePipelineStage(idx)}
              className={`${styles.pipelineCard} ${activePipelineStage === idx ? styles.pipelineCardActive : ''}`}
              style={{ '--stage-accent': stage.color } as React.CSSProperties}
            >
              <div className={styles.pipelineCardTop}>
                <div className={styles.stageNumBadge}>
                  <span>{stage.num}</span>
                </div>
                <span className={styles.stageCategoryTag}>{stage.category}</span>
              </div>

              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDesc}>{stage.desc}</p>

              <div className={styles.stageBottomGroup}>
                <div className={styles.stageTechRow}>
                  {stage.tech.map((t) => (
                    <span key={t} className={styles.stageTechBadge}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.stageFooter}>
                  <span className={styles.stagePulseBeacon} style={{ background: stage.color }} />
                  <span className={styles.stageMetricsText}>{stage.metrics}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <BeamButton href="/contact" label="Integrate Your Revenue Pipeline" size="md" />
      </div>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 10: QUANTIFIED MILESTONES (LIVE NUMBERS COCKPIT)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.telemetrySection} id="about-telemetry-section">
        <div className={styles.telemetryMesh} />
        <div className={styles.telemetryAmbientGlow} />
        <div className="container">
          <ScrollReveal className="text-center">
            <div className={styles.telemetryEyebrow}>
              <span className={styles.telemetryLiveDot} />
              <span>QUANTIFIED MILESTONES · LIVE AUDIT DATA</span>
            </div>
            <h2 className={styles.telemetryTitle}>
              Precision Performance.{' '}
              <span className="accent-gradient">Proven in Revenue.</span>
            </h2>
            <p className={styles.telemetrySub}>
              Real commercial results delivered for ambitious brands that chose compounding scalability over guesswork.
            </p>
          </ScrollReveal>

          {/* 4 Compact Milestone Cards Directly on Net Grid */}
          <div className={styles.telemetryGrid}>
            {telemetryNumbers.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 70}>
                <div
                  className={styles.statBox}
                  style={{ '--stat-accent': stat.color, '--stat-glow': stat.glow } as React.CSSProperties}
                >
                  <div className={styles.statCardTop}>
                    <span
                      className={styles.statTag}
                      style={{ color: stat.color, borderColor: `${stat.color}40`, background: `${stat.color}15` }}
                    >
                      {stat.tag}
                    </span>
                  </div>

                  <div className={styles.statValueRow}>
                    {stat.prefix && <span className={styles.counterPrefix}>{stat.prefix}</span>}
                    <span
                      ref={(el) => {
                        counterRefs.current[i] = el;
                      }}
                      className={styles.counterNum}
                    >
                      0
                    </span>
                    <span className={styles.counterSuffix} style={{ color: stat.color }}>
                      {stat.suffix}
                    </span>
                  </div>

                  <h3 className={styles.statLabel}>{stat.label}</h3>
                  <p className={styles.statSubText}>{stat.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

{/* ══════════════════════════════════════════════════════
          SECTION 11: EXECUTIVE ARCHITECTS (REAL LEADERSHIP TEAM)
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.leadershipSection } id = "leadership-team" >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>EXECUTIVE ARCHITECTS</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          The Minds Behind Your{' '}
          <span className="accent-gradient">Commercial Velocity</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          No junior interns handling your ad spend. Meet the senior strategists and technical leaders who personally engineer your growth.
        </p>
      </ScrollReveal>

      {/* 5 Real Executive Cards */}
      <div className={styles.leadershipGrid}>
        {executiveArchitects.map((leader, idx) => (
          <ScrollReveal key={leader.name} delay={idx * 80} className={styles.leaderRevealWrap}>
            <div
              className={styles.leaderCard}
              style={{ '--leader-accent': leader.color } as React.CSSProperties}
            >
              <div className={styles.leaderPhotoWrap}>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className={styles.leaderPhoto}
                  style={{ objectPosition: leader.imagePosition }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
                <div className={styles.leaderOverlay} />
                <span
                  className={styles.leaderDeptBadge}
                  style={{ color: leader.color, borderColor: `${leader.color}40` }}
                >
                  {leader.dept}
                </span>
              </div>

              <div className={styles.leaderInfo}>
                <div className={styles.leaderHeaderRow}>
                  <div>
                    <h3 className={styles.leaderName}>{leader.name}</h3>
                    <p className={styles.leaderRole} style={{ color: leader.color }}>
                      {leader.role}
                    </p>
                  </div>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.leaderSocial}
                    aria-label={`${leader.name} LinkedIn Profile`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z" />
                    </svg>
                  </a>
                </div>

                <p className={styles.leaderBio}>{leader.bio}</p>

                <blockquote className={styles.leaderQuote}>
                  &ldquo;{leader.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Executive Leadership CTA Card down the cards */}
      <ScrollReveal delay={120}>
        <div className={styles.leadershipCtaCard}>
          <div className={styles.leaderCtaGlow} />
          <div className={styles.leaderCtaMesh} />

          <div className={styles.leaderCtaLeft}>
            <span className={styles.leaderCtaBadge}>⚡ DIRECT SENIOR ACCESS</span>
            <h3 className={styles.leaderCtaTitle}>
              Want These Senior Strategists Personally Leading Your Account?
            </h3>
            <p className={styles.leaderCtaSub}>
              We strictly cap partner onboarding so our executive architects directly steer your campaigns—never handed off to junior interns.
            </p>
          </div>

          <div className={styles.leaderCtaRight}>
            <div className={styles.leaderCtaBtnGroup}>
              <BeamButton href="/contact" label="Book Executive Strategy Session" size="md" />
              <BeamButton href="/about/team" label="View 25+ Specialist Roster" size="md" variant="outline" />
            </div>
            <div className={styles.leaderCtaMeta}>
              <span className={styles.leaderCtaBeacon} />
              <span>Strictly 3 Partner Cohorts Accepted Per Quarter</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
      </section >

        {/* ══════════════════════════════════════════════════════
          SECTION 12: FREQUENTLY ASKED QUESTIONS (MATCHES HOME PAGE LUXURY ACCORDION)
         ══════════════════════════════════════════════════════ */}
        <section className={`section ${styles.faqSection}`} id="faq-section">
          <div className="container-sm">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
                <span className="eyebrow-dot" />
                COMMON QUESTIONS
              </div>
              <h2 className="display-lg" style={{ marginTop: 16 }}>
                Frequently Asked{' '}
                <span className="accent-gradient">Questions</span>
              </h2>
              <p className={`body-lg ${styles.sectionSub}`}>
                Everything you need to know about our partnership framework, pricing methodology, and sprint cadence.
              </p>
            </ScrollReveal>

            <div className={styles.faqList}>
              {aboutFaqs.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <ScrollReveal key={faq.q} delay={i * 40}>
                    <div className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : i)}
                        className={styles.faqQuestion}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
                      </button>

                      <div
                        className={styles.faqAnswer}
                        style={{
                          maxHeight: isOpen ? '600px' : '0',
                        }}
                      >
                        <p className={styles.faqAnswerText}>{faq.a}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Center Bottom FAQ Action */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginTop: 44 }}>
              <p style={{ color: '#64748B', fontSize: 15, margin: 0 }}>Still have questions about our partnership framework?</p>
              <BeamButton href="/contact" label="Talk to Our Growth Team" size="md" />
            </div>
          </div>
        </section>

{/* ══════════════════════════════════════════════════════
          SECTION 13: GRAND FINALE CTA COMMAND CARD
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.ctaFinaleSection } >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className={styles.finaleCard}>
          <div className={styles.finaleGlowBg} />
          <div className={styles.finaleMesh} />

          <div className={styles.finaleBadgeWrap}>
            <span className={styles.finaleBadge}>
              <span className={styles.finaleBadgeDot} />
              <span>TAILORED GROWTH STRATEGY · BHUBANESWAR &amp; BEYOND</span>
            </span>
          </div>

          <h2 className={styles.finaleHeadline}>
            Your Business Deserves an Agency That{' '}
            <span className="accent-gradient">Acts Like an Owner.</span>
          </h2>

          <p className={styles.finaleDesc}>
            Stop settling for disconnected marketing tactics and vague monthly reports. Partner with Marketing Copilot to build an integrated customer acquisition engine engineered for compounding cash flow.
          </p>

          <div className={styles.finaleActions}>
            <BeamButton href="/contact" label="Claim Free Growth Audit" size="lg" />
            <BeamButton href="/portfolio" label="View Client Case Studies" size="lg" variant="outline" />
          </div>
        </div>
      </ScrollReveal>
    </div>
      </section >
    </div >
  );
}
