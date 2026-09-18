'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import styles from './page.module.css';

// ─── Data: Founding Story Sliding Chronicle Cards ───
const foundingStoryCards = [
  {
    chapter: '01',
    year: '2021',
    badge: 'GENESIS & THE PROBLEM',
    title: 'The Broken Legacy Retainer Model',
    quote:
      'We watched ambitious businesses across Odisha burn hundreds of thousands on vanity impressions and delayed monthly PDF reports from legacy agencies that took zero accountability for real cash flow.',
    takeaway: 'Zero accountability. Fragmented execution. Handcuff contracts.',
    stat: '0%',
    statLabel: 'Agency Accountability in Old Model',
    color: '#0B2093',
  },
  {
    chapter: '02',
    year: '2022',
    badge: 'FIRST PRINCIPLES ENGINEERING',
    title: 'The Quantitative Copilot Paradigm',
    quote:
      'We rebuilt marketing from first principles: sub-second Next.js web stacks, server-side Meta CAPI tracking, and algorithmic ad bidding. We treated client acquisition as an engineering discipline, not guesswork.',
    takeaway: 'Sub-second speed + 100% attribution fidelity replaces subjective slides.',
    stat: '<0.8s',
    statLabel: 'Mobile Speed SLA Guarantee',
    color: '#0D007F',
  },
  {
    chapter: '03',
    year: '2023',
    badge: 'REGIONAL ROOTS & CINEMA SOUNDSTAGE',
    title: 'Hyperlocal Psychology & 4K Studio',
    quote:
      'We established our physical studio & soundstage in Kharvela Nagar, Bhubaneswar. Combining forensic regional consumer psychology in Odisha with 4K commercial cinema production created instant market dominance.',
    takeaway: 'In-house production soundstage + deep local cultural nuance.',
    stat: '3.2X',
    statLabel: 'Higher Regional Conversion Rate',
    color: '#EC4899',
  },
  {
    chapter: '04',
    year: '2024+',
    badge: 'SCALE & PERFORMANCE FREEDOM',
    title: '₹25Cr+ Deployed & Zero Handcuff Freedom',
    quote:
      'Today, we manage ₹25Cr+ in verified media spend with a 94% voluntary retention rate. We operate entirely on rolling month-to-month performance. We earn the right to scale your business every 30 days.',
    takeaway: '100% skin in the game. Real bank deposits. Compounding equity.',
    stat: '94%',
    statLabel: 'Voluntary Month-Over-Month Retention',
    color: '#10B981',
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
    desc: 'We understand consumer behavior in Bhubaneswar, Cuttack, Puri, and Eastern India at a forensic psychological level. We eliminate generic national ad waste with pinpoint cultural resonance.',
    deliverables: [
      'Dual-language Odia & English creative hooks',
      'Hyperlocal Google 3-Pack Map dominance',
      'Regional competitor auction arbitrage',
      'Local consumer trust triggers & social proof',
    ],
    icon: '📍',
    metric: '3.2X',
    metricLabel: 'Higher Local Conversion Rate',
    accentColor: '#0B2093',
    glowColor: 'rgba(11, 32, 147, 0.15)',
  },
  {
    id: 'moat-speed',
    index: '02',
    badge: 'SOFTWARE ENGINEERING',
    title: 'Sub-Second Next.js Performance Stacks',
    desc: 'Slow websites bleed revenue. Every digital experience we build is engineered on modern Next.js React frameworks with sub-900ms mobile load times, achieving 99/100 Core Web Vitals to maximize conversion rates.',
    deliverables: [
      'Server-Side Rendering on Global Edge CDN',
      'Zero bloated WordPress plugins or template bloat',
      'Direct WhatsApp & CRM webhook lead routing',
      'Flawless 99/100 Google Core Web Vitals score',
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
    desc: 'No generic Canva graphics or recycled stock footage. Our dedicated in-house production soundstage handles 4K cinematic commercials, luxury shoots, and high-retention viral reels.',
    deliverables: [
      '4K cinema cameras, pro lighting & audio bays',
      'High-retention viral Instagram & YouTube hooks',
      'Multi-variant video experimentation sprints',
      'Brand prestige that commands premium pricing',
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
    desc: 'Traditional agencies enforce 12-month punitive handcuffs because their client retention is terrible. We operate entirely on mutual performance and rolling agreements. If we don’t perform, fire us with zero penalty.',
    deliverables: [
      '100% mutual commercial alignment',
      'Rolling month-to-month partnership terms',
      'Direct senior architect sprint access',
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
  { value: 25, suffix: 'Cr+', label: 'Media Managed', sub: 'Verified ad spend managed across client portfolios', color: '#0B2093' },
  { value: 4, suffix: '.8X', label: 'Average Blended ROAS', sub: 'Across e-commerce, D2C, real estate, and healthcare', color: '#10B981' },
  { value: 94, suffix: '%', label: 'Client Retention Rate', sub: 'Voluntary month-over-month client partnership renewals', color: '#8B5CF6' },
  { value: 50, suffix: '+', label: 'Brands Scaled', sub: 'Enterprises, flagship retail, clinics, and D2C brands', color: '#D97706' },
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

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const [activePipelineStage, setActivePipelineStage] = useState<number>(0);

  const storyTrackRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const countersStarted = useRef(false);

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

  // Slide story cards
  const slideStoryTo = (idx: number) => {
    const validIdx = Math.max(0, Math.min(foundingStoryCards.length - 1, idx));
    setActiveStoryIdx(validIdx);
    if (storyTrackRef.current) {
      const cardWidth = 420; // approx card + gap
      storyTrackRef.current.scrollTo({
        left: validIdx * cardWidth,
        behavior: 'smooth',
      });
    }
  };

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
                <div className={styles.eyebrowBadge}>
                  <span className={styles.eyebrowPulse} />
                  <span>ABOUT MARKETING COPILOT · BHUBANESWAR</span>
                </div>

                <h1 className={styles.heroMainTitle}>
                  Engineering Compounding Growth for{' '}
                  <span className="accent-gradient">Odisha’s Ambitious Brands.</span>
                </h1>

                <p className={styles.heroLeadText}>
                  We founded Marketing Copilot with one mission: to replace sluggish legacy marketing retainers with high-velocity, quantitative growth engineering. We build automated client acquisition systems that turn attention into predictable revenue.
                </p>

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

            {/* Right Pane: 3D Skeuomorphic Live Telemetry Cockpit */}
            <div className={styles.heroRightCol}>
              <ScrollReveal delay={120} direction="up">
                <div className={styles.cockpitConsole}>
                  <span className={styles.cockpitGlassLip} />

                  {/* Console Header */}
                  <div className={styles.cockpitHeader}>
                    <div className={styles.cockpitTitleWrap}>
                      <span className={styles.cockpitLiveDot} />
                      <span className={styles.cockpitTitle}>AGENCY OPERATING DNA</span>
                    </div>
                    <span className={styles.cockpitStatusBadge}>⚡ All Systems Active</span>
                  </div>

                  {/* Primary Telemetry Visual Card */}
                  <div className={styles.cockpitVisualFrame}>
                    <Image
                      src="/images/about_hero.jpg"
                      alt="Marketing Copilot Studio & Leadership Hub"
                      fill
                      priority
                      className={styles.cockpitImg}
                      sizes="(max-width: 900px) 100vw, 540px"
                    />
                  </div>

                  {/* 3 Telemetry Live Gauges */}
                  <div className={styles.cockpitGaugesRow}>
                    <div className={styles.gaugeBox}>
                      <div className={styles.gaugeTop}>
                        <span className={styles.gaugeLabel}>Target CAC Drop</span>
                        <span className={styles.gaugeSpark}>📉</span>
                      </div>
                      <div className={styles.gaugeVal} style={{ color: '#10B981' }}>-38%</div>
                      <div className={styles.gaugeTrack}>
                        <div className={styles.gaugeFill} style={{ width: '76%', background: '#10B981' }} />
                      </div>
                    </div>

                    <div className={styles.gaugeBox}>
                      <div className={styles.gaugeTop}>
                        <span className={styles.gaugeLabel}>Blended ROAS</span>
                        <span className={styles.gaugeSpark}>🚀</span>
                      </div>
                      <div className={styles.gaugeVal} style={{ color: '#0B2093' }}>4.8X</div>
                      <div className={styles.gaugeTrack}>
                        <div className={styles.gaugeFill} style={{ width: '84%', background: '#0B2093' }} />
                      </div>
                    </div>

                    <div className={styles.gaugeBox}>
                      <div className={styles.gaugeTop}>
                        <span className={styles.gaugeLabel}>Web Speed SLA</span>
                        <span className={styles.gaugeSpark}>⚡</span>
                      </div>
                      <div className={styles.gaugeVal} style={{ color: '#D97706' }}>&lt;0.8s</div>
                      <div className={styles.gaugeTrack}>
                        <div className={styles.gaugeFill} style={{ width: '92%', background: '#D97706' }} />
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Footer Strip */}
                  <div className={styles.cockpitFooter}>
                    <div className={styles.uptimeCol}>
                      <span className={styles.uptimeLabel}>Live Sprint Uptime</span>
                      <span className={styles.uptimeVal}>99.98% SLA Compliance</span>
                    </div>
                    <a href="#war-room-section" className={styles.cockpitExploreLink}>
                      <span>Explore War Room</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: KINETIC VELOCITY PARTNER & CLIENT TICKER
         ══════════════════════════════════════════════════════ */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeHeader}>
          <span className={styles.marqueeDot} />
          <span className={styles.marqueeLabel}>TRUSTED BY INDUSTRY PACESETTERS &amp; CERTIFIED ENTERPRISE PARTNERS</span>
        </div>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeContent}>
            <span className={styles.marqueeItem}>Google Premier Partner</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>Meta Business Partner</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>AWS Advanced Tier</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>HubSpot Elite Certified</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>Next.js Vercel Edge</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>Looker Studio Telemetry</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>SEMrush Enterprise</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>Official WhatsApp Business API</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>Google Premier Partner</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>Meta Business Partner</span>
            <span className={styles.marqueeSep}>✦</span>
            <span className={styles.marqueeItem}>AWS Advanced Tier</span>
            <span className={styles.marqueeSep}>✦</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3: HOME MAP SECTION (YOUR TRUSTED DIGITAL MARKETING COMPANY IN BHUBANESWAR)
         ══════════════════════════════════════════════════════ */}
      <QuickConnectMapSection id="war-room-section" />

      {/* ══════════════════════════════════════════════════════
          SECTION 4: THE FOUNDING STORY (SLIDING CHRONICLE CARDS)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.foundingSliderSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>THE FOUNDING STORY</span>
            </div>
            <h2 className={`display-lg ${styles.sectionHeadline}`}>
              The 4-Year Journey From Broken Retainers to{' '}
              <span className="accent-gradient">Engineered Alpha</span>
            </h2>
            <p className={`body-lg ${styles.sectionSub}`}>
              Built on the conviction that ambitious businesses in Odisha deserve a growth partner that acts like an owner. Slide through our evolution.
            </p>
          </ScrollReveal>

          {/* Sliding Track Controls & Progress */}
          <div className={styles.sliderControlsBar}>
            <div className={styles.sliderPillTabs}>
              {foundingStoryCards.map((card, i) => (
                <button
                  key={card.chapter}
                  type="button"
                  onClick={() => slideStoryTo(i)}
                  className={`${styles.sliderPillTab} ${activeStoryIdx === i ? styles.sliderPillActive : ''}`}
                >
                  <span className={styles.pillYear}>{card.year}</span>
                  <span className={styles.pillChapter}>Ch. {card.chapter}</span>
                </button>
              ))}
            </div>

            <div className={styles.sliderArrowNav}>
              <button
                type="button"
                onClick={() => slideStoryTo(activeStoryIdx - 1)}
                disabled={activeStoryIdx === 0}
                className={styles.sliderArrowBtn}
                aria-label="Previous Chapter"
              >
                ←
              </button>
              <span className={styles.sliderIndexCount}>
                0{activeStoryIdx + 1} / 0{foundingStoryCards.length}
              </span>
              <button
                type="button"
                onClick={() => slideStoryTo(activeStoryIdx + 1)}
                disabled={activeStoryIdx === foundingStoryCards.length - 1}
                className={styles.sliderArrowBtn}
                aria-label="Next Chapter"
              >
                →
              </button>
            </div>
          </div>

          {/* Horizontal Sliding Track of Compact Editorial Cards */}
          <div
            ref={storyTrackRef}
            className={styles.slidingStoryTrack}
            onScroll={(e) => {
              const target = e.currentTarget;
              const cardWidth = 380;
              const newIdx = Math.round(target.scrollLeft / cardWidth);
              if (newIdx !== activeStoryIdx && newIdx >= 0 && newIdx < foundingStoryCards.length) {
                setActiveStoryIdx(newIdx);
              }
            }}
          >
            {foundingStoryCards.map((card, idx) => (
              <div
                key={card.chapter}
                className={`${styles.slidingStoryCard} ${activeStoryIdx === idx ? styles.storyCardActive : ''}`}
                style={{ '--card-accent': card.color } as React.CSSProperties}
              >
                <div className={styles.storyCardTop}>
                  <span className={styles.storyYearTag}>{card.year}</span>
                  <span className={styles.storyBadge}>{card.badge}</span>
                </div>

                <h3 className={styles.storyCardTitle}>{card.title}</h3>

                <blockquote className={styles.storyCardQuote}>
                  &ldquo;{card.quote}&rdquo;
                </blockquote>

                <div className={styles.storyCardFooter}>
                  <div className={styles.storyStatCol}>
                    <span className={styles.storyStatVal} style={{ color: card.color }}>
                      {card.stat}
                    </span>
                    <span className={styles.storyStatLabel}>{card.statLabel}</span>
                  </div>
                  <div className={styles.storyTakeawayBox}>
                    <span className={styles.takeawayCheck}>✓</span>
                    <span className={styles.takeawayText}>{card.takeaway}</span>
                  </div>
                </div>
              </div>
            ))}
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
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5: THE COPILOT MANIFESTO & CORE PILLARS
         ══════════════════════════════════════════════════════ */}
      <section className={styles.manifestoSection} id="principles-section">
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
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6: 4 ELEVATED UNFAIR ADVANTAGES (WHY CHOOSE US)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.whyChooseSection}>
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
                    <div className={styles.advIconMedallion}>
                      <span>{moat.icon}</span>
                    </div>
                    <div className={styles.advBadgeRow}>
                      <span className={styles.advIndexNum}>{moat.index}</span>
                      <span className={styles.advBadge}>{moat.badge}</span>
                    </div>
                  </div>

                  <h3 className={styles.advTitle}>{moat.title}</h3>
                  <p className={styles.advDesc}>{moat.desc}</p>

                  <div className={styles.advDeliverablesList}>
                    <span className={styles.deliverablesLabel}>CORE ARCHITECTURAL PROOFS:</span>
                    {moat.deliverables.map((item) => (
                      <div key={item} className={styles.deliverableItem}>
                        <span className={styles.checkIconBullet}>✦</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.advCardFooter}>
                    <div className={styles.advMetricBox}>
                      <span className={styles.advMetricVal}>{moat.metric}</span>
                      <span className={styles.advMetricLabel}>{moat.metricLabel}</span>
                    </div>
                    <Link href="/contact" className={styles.advAuditLink}>
                      <span>Audit Moat</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                  <span className={styles.tokenBadHeader}>✕</span>
                  <span>TRADITIONAL AGENCIES</span>
                </div>
                <div className={`${styles.matrixColCopilot} ${styles.matrixGood}`}>
                  <span className={styles.tokenGoodHeader}>✓</span>
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
                      {/* 3D Skeuomorphic Cross Sign Token */}
                      <span className={styles.token3dCross} title="Not Guaranteed / High Vulnerability">
                        ✕
                      </span>
                      <span className={styles.agencyText}>{row.traditional}</span>
                    </div>

                    <div className={`${styles.cellCopilot} ${styles.cellGood}`}>
                      {/* 3D Skeuomorphic Check Sign Token */}
                      <span className={styles.token3dCheck} title="Verified Quantitative SLA">
                        ✓
                      </span>
                      <span className={styles.copilotText}>{row.copilot}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Guarantee Badge */}
              <div className={styles.matrixFooterBar}>
                <span className={styles.matrixSealDot}>✦</span>
                <span>100% of Marketing Copilot campaign workflows operate under verified, real-time Looker SLA telemetry.</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8: 5-PHASE GROWTH OS (INTERACTIVE SINUSOIDAL ROADMAP)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.roadmapSection}>
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
              Our battle-tested 5-phase framework designed for rapid execution, mathematical validation, and exponential market leadership. Click any phase to inspect live deliverables.
            </p>
          </ScrollReveal>

          {/* Interactive Phase Stepper Bar */}
          <div className={styles.phaseStepperBar}>
            {operatingPhases.map((phase, idx) => (
              <button
                key={phase.num}
                type="button"
                onClick={() => setActivePhase(idx)}
                className={`${styles.stepperPhaseBtn} ${activePhase === idx ? styles.stepperPhaseActive : ''}`}
                style={{ '--phase-color': phase.color } as React.CSSProperties}
              >
                <span className={styles.stepperNum}>{phase.num}</span>
                <div className={styles.stepperTextCol}>
                  <span className={styles.stepperName}>{phase.name}</span>
                  <span className={styles.stepperTime}>{phase.time}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Connected Sinusoidal Desktop Roadmap */}
          <div className={styles.roadmapDesktopWrap}>
            <div className={styles.roadmapSvgTrack}>
              <svg viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none" className={styles.roadmapSvg}>
                <path
                  d="M 50,60 C 150,20 250,20 350,60 C 450,100 550,100 650,60 C 750,20 850,20 950,60 C 1050,100 1150,80 1180,60"
                  stroke="rgba(11, 32, 147, 0.15)"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                />
                <path
                  d="M 50,60 C 150,20 250,20 350,60 C 450,100 550,100 650,60 C 750,20 850,20 950,60 C 1050,100 1150,80 1180,60"
                  stroke="url(#roadmapGradLaser)"
                  strokeWidth="4"
                  strokeDasharray="20 10"
                  className={styles.animatedRoadmapPath}
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

            <div className={styles.roadmapColumnsGrid}>
              {operatingPhases.map((phase, idx) => {
                const isAbove = idx % 2 === 0;
                const isSelected = activePhase === idx;
                return (
                  <div
                    key={phase.num}
                    onClick={() => setActivePhase(idx)}
                    className={`${styles.roadmapCol} ${isAbove ? styles.colTop : styles.colBottom} ${isSelected ? styles.roadmapColSelected : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
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

                    <div
                      className={`${styles.phaseNodeCircle} ${isSelected ? styles.nodeCircleActive : ''}`}
                      style={{ borderColor: phase.color }}
                    >
                      <span className={styles.phaseNodeCore} style={{ background: phase.color }}>
                        {phase.num}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Phase Live Telemetry Inspector */}
          <div className={styles.phaseTelemetryInspector}>
            <div className={styles.inspectorHeader}>
              <div className={styles.inspectorLeftBadge}>
                <span
                  className={styles.inspectorDot}
                  style={{ background: operatingPhases[activePhase].color }}
                />
                <span className={styles.inspectorTitle}>
                  PHASE {operatingPhases[activePhase].num} DEEP INSPECTION: {operatingPhases[activePhase].name.toUpperCase()}
                </span>
              </div>
              <span className={styles.inspectorTimelineTag}>
                Cadence: {operatingPhases[activePhase].time}
              </span>
            </div>

            <div className={styles.inspectorBodyGrid}>
              <div className={styles.inspectorDeliverablesCol}>
                <h5 className={styles.inspectorColTitle}>KEY EXECUTION DELIVERABLES:</h5>
                <div className={styles.inspectorItemsList}>
                  {operatingPhases[activePhase].deliverables.map((item) => (
                    <div key={item} className={styles.inspectorItemRow}>
                      <span className={styles.itemCheck} style={{ color: operatingPhases[activePhase].color }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.inspectorToolsCol}>
                <h5 className={styles.inspectorColTitle}>CORE TECHNOLOGIES DEPLOYED:</h5>
                <div className={styles.inspectorToolsWrap}>
                  {operatingPhases[activePhase].tools.map((tool) => (
                    <span key={tool} className={styles.inspectorToolPill}>
                      {tool}
                    </span>
                  ))}
                </div>

                <div className={styles.inspectorMetricHighlight}>
                  <span className={styles.metricHighlightLabel}>VERIFIED OUTCOME TARGET:</span>
                  <span
                    className={styles.metricHighlightVal}
                    style={{ color: operatingPhases[activePhase].color }}
                  >
                    {operatingPhases[activePhase].outcomeMetric}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.inspectorFooterRow}>
              <button
                type="button"
                onClick={() => setActivePhase((p) => Math.max(0, p - 1))}
                disabled={activePhase === 0}
                className={styles.inspectorNavBtn}
              >
                ← Previous Phase
              </button>
              <BeamButton href="/contact" label={`Initialize Phase ${operatingPhases[activePhase].num} Audit`} size="md" />
              <button
                type="button"
                onClick={() => setActivePhase((p) => Math.min(operatingPhases.length - 1, p + 1))}
                disabled={activePhase === operatingPhases.length - 1}
                className={styles.inspectorNavBtn}
              >
                Next Phase →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9: REAL-TIME REVENUE & ATTRIBUTION PIPELINE
          (REPLACES BASIC TOOLING & AUTOMATION TECH STACK)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.revenuePipelineSection}>
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
              <ScrollReveal key={stage.id} delay={idx * 80}>
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
              </ScrollReveal>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <BeamButton href="/contact" label="Integrate Your Revenue Pipeline" size="md" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 10: QUANTIFIED MILESTONES (LIVE NUMBERS COCKPIT)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.telemetrySection} id="about-telemetry-section">
        <div className={styles.telemetryMesh} />
        <div className="container">
          <ScrollReveal className="text-center">
            <div
              className="eyebrow"
              style={{
                margin: '0 auto 12px',
                background: 'rgba(255,255,255,0.1)',
                color: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.2)',
              }}
            >
              <span className="eyebrow-dot" style={{ background: '#38BDF8' }} />
              <span>QUANTIFIED MILESTONES</span>
            </div>
            <h2 className={`display-lg ${styles.telemetryTitle}`}>
              Precision Performance.{' '}
              <span className="accent-gradient">Proven in Revenue.</span>
            </h2>
            <p className={styles.telemetrySub}>
              Real commercial results delivered for ambitious brands that chose compounding scalability over guesswork.
            </p>
          </ScrollReveal>

          <div className={styles.telemetryGrid}>
            {telemetryNumbers.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className={styles.statBox}>
                  <div className={styles.statValueRow}>
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
      <section className={styles.leadershipSection} id="leadership-team">
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
              <ScrollReveal key={leader.name} delay={idx * 80}>
                <div className={styles.leaderCard}>
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

          <div className={styles.leadershipCtaRow}>
            <BeamButton href="/about/team" label="View Complete 25+ Specialist Roster" size="md" variant="outline" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 12: TRANSPARENT FAQS ACCORDION
         ══════════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>COMMON QUESTIONS</span>
            </div>
            <h2 className={`display-lg ${styles.sectionHeadline}`}>
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
                <ScrollReveal key={faq.q} delay={i * 60}>
                  <div className={`${styles.faqCard} ${isOpen ? styles.faqOpen : ''}`}>
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      className={styles.faqQuestionBtn}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.faqQuestionText}>{faq.q}</span>
                      <span className={styles.faqToggleIcon}>{isOpen ? '−' : '+'}</span>
                    </button>

                    {isOpen && (
                      <div className={styles.faqAnswerWrap}>
                        <p className={styles.faqAnswerText}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 13: GRAND FINALE CTA COMMAND CARD
         ══════════════════════════════════════════════════════ */}
      <section className={styles.ctaFinaleSection}>
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

              <div className={styles.finaleTrustStrip}>
                <span className={styles.trustPoint}>✓ 100% Free 30-Min Diagnostic Call</span>
                <span className={styles.trustDivider}>•</span>
                <span className={styles.trustPoint}>✓ Custom 90-Day Revenue Blueprint</span>
                <span className={styles.trustDivider}>•</span>
                <span className={styles.trustPoint}>✓ Zero Long-Term Lock-Ins</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
