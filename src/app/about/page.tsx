'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './page.module.css';

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

// ─── Data: Why Choose Us Bento Moats ───
const whyChooseMoats = [
  {
    id: 'moat-local',
    badge: 'HYPERLOCAL ROOTS',
    title: 'Odisha Ground Reality & Regional Insight',
    desc: 'We understand consumer behavior in Bhubaneswar, Cuttack, Puri, and Eastern India at a forensic level. From language nuances and local map pack intent to regional consumer psychology, our localized targeting outconverts generic national agencies by over 3.2X.',
    icon: '📍',
    metric: '3.2X',
    metricLabel: 'Higher Local Conversion Rate',
  },
  {
    id: 'moat-speed',
    badge: 'ENGINEERING EXCELLENCE',
    title: 'Sub-Second Next.js Performance Stacks',
    desc: 'Slow websites bleed revenue. Every digital experience we build is engineered on modern Next.js React frameworks with sub-900ms mobile load times, achieving 99/100 Google Core Web Vitals to maximize conversion rates and organic SERP ranks.',
    icon: '⚡',
    metric: '<0.8s',
    metricLabel: 'Average Mobile LCP SLA',
  },
  {
    id: 'moat-creative',
    badge: 'PRODUCTION STUDIO',
    title: 'In-House Cinematic Creative & Videography',
    desc: 'No generic stock footage or cookie-cutter templates. Our in-house production studio handles 4K cinematic commercial shoots, aerial drone cinematography, and high-converting viral reels that give your brand genuine prestige.',
    icon: '🎬',
    metric: '4K/8K',
    metricLabel: 'Cinema Studio Standards',
  },
  {
    id: 'moat-freedom',
    badge: 'CONFIDENCE PROMISE',
    title: 'Zero Binding Lock-In Contracts',
    desc: 'Traditional agencies lock clients into 12-month punitive contracts because their retention is terrible. We operate entirely on mutual performance and rolling agreements. We earn the right to scale your business every single month.',
    icon: '🛡️',
    metric: '94%',
    metricLabel: 'Voluntary Client Retention',
  },
];

// ─── Data: Comparison Matrix ───
const comparisonRows = [
  {
    feature: 'Primary Metric Focus',
    traditional: 'Impressions, Reach, Vanity Likes',
    copilot: 'Revenue, Bank Deposits & Verified SQLs',
    highlight: true,
  },
  {
    feature: 'Reporting Cadence',
    traditional: 'Static monthly PDF decks (often delayed)',
    copilot: 'Live 24/7 Looker Studio real-time telemetry',
    highlight: false,
  },
  {
    feature: 'Team Allocation',
    traditional: 'Pitched by directors, handed to junior interns',
    copilot: 'Senior strategists and seasoned architects only',
    highlight: true,
  },
  {
    feature: 'Execution Speed',
    traditional: 'Weeks to approve simple ad creative changes',
    copilot: 'Iterative testing cycles deployed within 48–72h',
    highlight: false,
  },
  {
    feature: 'Contract Terms',
    traditional: '6 to 12 months rigid lock-in agreements',
    copilot: 'Performance-driven rolling terms (zero handcuffs)',
    highlight: true,
  },
  {
    feature: 'Tech & Tooling',
    traditional: 'Basic WordPress templates & fragmented tools',
    copilot: 'Sub-second Next.js web stacks & automated APIs',
    highlight: false,
  },
];

// ─── Data: Leadership Team ───
const leadershipTeam = [
  {
    name: 'Aarav Pattnaik',
    role: 'Founder & Managing Director',
    dept: 'GROWTH STRATEGY & UNIT ECONOMICS',
    bio: 'Ex-consultant specializing in full-funnel customer acquisition, algorithmic bidding models, and enterprise conversion architecture. Scaled ₹25Cr+ in client ad spend across Odisha and Eastern India.',
    quote: 'If your marketing agency cannot tell you the exact rupee return on your spend, they are gambling with your capital.',
    image: '/images/ceo_aarav.jpg',
    color: '#0B2093',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Priya Mohapatra',
    role: 'Co-Founder & Chief Operating Officer',
    dept: 'CLIENT SUCCESS & PERFORMANCE PROTOCOLS',
    bio: 'Oversees sprint delivery, media testing velocity, and multichannel client operations. Champions zero-leakage pipeline frameworks for B2B, retail, and real estate enterprises.',
    quote: 'Predictable growth is not lucky inspiration—it is the direct mathematical consequence of disciplined execution.',
    image: '/images/coo_priya.jpg',
    color: '#0D007F',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Debashis Mishra',
    role: 'Head of Creative & Media Production',
    dept: 'VISUAL PRESTIGE & VIRAL REELS',
    bio: 'Cinematographer and creative director with 9+ years directing brand commercials, luxury product shoots, and viral social media campaigns that capture regional consumer imagination.',
    quote: 'Attention is earned in the first 1.8 seconds. If your creative lacks soul, your media budget is subsidizing failure.',
    image: '/images/team/exec_3.png',
    color: '#EC4899',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Rohan Senapati',
    role: 'Principal Full-Stack & Technical SEO Architect',
    dept: 'SUB-SECOND WEB & SEARCH MOATS',
    bio: 'Full-stack software engineer and technical SEO veteran specializing in Next.js performance optimizations, structured data schemas, and high-converting conversion rate platforms.',
    quote: 'A 1-second delay in page load time reduces conversions by 7%. Speed is not a luxury feature—it is your profit margin.',
    image: '/images/team/exec_4.jpg',
    color: '#10B981',
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
  },
  {
    num: '02',
    name: 'Infrastructure Setup',
    time: 'Days 8–14',
    focus: 'Attribution Tracking',
    desc: 'Server-side Meta Conversions API (CAPI), Google Enhanced Conversions, call tracking routing, and real-time Looker dashboards.',
    color: '#0D007F',
  },
  {
    num: '03',
    name: 'Creative Testing Lab',
    time: 'Days 15–30',
    focus: 'Offer Packaging',
    desc: 'Deployment of high-intent hooks, 4K cinematic commercial video assets, localized copy variations, and friction-free landing pages.',
    color: '#EC4899',
  },
  {
    num: '04',
    name: 'Algorithmic Scale',
    time: 'Month 2',
    focus: 'Omnichannel Expansion',
    desc: 'Systematic scaling of winning cohorts across Meta Advantage+ and Google Performance Max, maintaining strict target CAC thresholds.',
    color: '#F59E0B',
  },
  {
    num: '05',
    name: 'Compounding Hegemony',
    time: 'Ongoing',
    focus: 'Organic Displaced CPC',
    desc: 'Continuous technical SEO velocity and local map pack dominance, systematically reducing dependency on paid ad auctions.',
    color: '#10B981',
  },
];

// ─── Data: MarTech Tools ───
const martechEcosystem = [
  { name: 'Google Marketing Platform', category: 'Search & Performance Max', status: 'Enterprise Partner' },
  { name: 'Meta Business Suite & CAPI', category: 'Advantage+ & Audience Intelligence', status: 'Direct API Sync' },
  { name: 'Next.js & Vercel React', category: 'Sub-Second Web Infrastructure', status: 'Global Edge CDN' },
  { name: 'Looker Studio Telemetry', category: 'Real-Time Revenue Attribution', status: 'Live 24/7' },
  { name: 'SEMrush & Ahrefs Enterprise', category: 'Competitor SERP & Keyword Moats', status: 'Daily Crawl' },
  { name: 'HubSpot & WhatsApp APIs', category: 'Zero-Leakage Lead Automation', status: 'Instant Routing' },
];

// ─── Data: Live Telemetry Numbers ───
const telemetryNumbers = [
  { value: 25, suffix: 'Cr+', label: 'Media Managed', sub: 'Calculated in verified ad spend across client accounts', color: '#0B2093' },
  { value: 4, suffix: '.8X', label: 'Average Blended ROAS', sub: 'Across e-commerce, D2C, and performance lead pipelines', color: '#10B981' },
  { value: 94, suffix: '%', label: 'Client Retention Rate', sub: 'Voluntary month-over-month client partnership renewal', color: '#8B5CF6' },
  { value: 50, suffix: '+', label: 'Brands Scaled', sub: 'Enterprises, clinics, retail flagships, and real estate groups', color: '#D97706' },
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

  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.757640242207!2d85.8456126759714!3d20.268884013444406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a797c558c48f%3A0xe13ef479e0066bf2!2sMarketing%20Copilot!5e0!3m2!1sen!2sin!4v1741541000000!5m2!1sen!2sin';

  const mapsSearchUrl =
    'https://www.google.com/maps/search/?api=1&query=Marketing+Copilot+Bhubaneswar';

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
                    href="#leadership-team"
                    label="Meet Our Leadership"
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
                    <div className={styles.cockpitImgOverlay} />
                    <div className={styles.cockpitFloatingTag}>
                      <span className={styles.tagIcon}>📍</span>
                      <span>Growth Lab &amp; Studio · Kharvela Nagar</span>
                    </div>
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
                    <Link href="/contact" className={styles.cockpitExploreLink}>
                      <span>Explore War Room</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: FOUNDING NARRATIVE (EDITORIAL SPLIT-SCREEN)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.editorialSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.editorialCard}>
              <div className={styles.editorialTopRow}>
                <span className={styles.editorialBadge}>THE FOUNDING STORY</span>
                <span className={styles.editorialDate}>Est. 2021 · Bhubaneswar, Odisha</span>
              </div>

              <blockquote className={styles.editorialQuote}>
                &ldquo;We watched countless ambitious businesses across Odisha burn hundreds of thousands on vanity impressions and delayed monthly PDF reports from legacy agencies that took zero responsibility for real cash flow. We built Marketing Copilot to be the exact growth partner we wished existed.&rdquo;
              </blockquote>

              <div className={styles.editorialColumns}>
                <div className={styles.editorialCol}>
                  <h3 className={styles.colTitle}>The Problem With Traditional Agencies</h3>
                  <p className={styles.colText}>
                    In the traditional agency model, high-ticket account directors pitch you an inspiring vision, only to hand your media budget to inexperienced junior interns the moment the contract is signed. Communication becomes a game of email ping-pong, metrics are massaged to look positive, and no one is accountable for genuine bank deposits.
                  </p>
                </div>

                <div className={styles.editorialCol}>
                  <h3 className={styles.colTitle}>The Embedded Copilot Paradigm</h3>
                  <p className={styles.colText}>
                    Marketing Copilot was architected from day one as an embedded quantitative department. We combine mathematical attribution models, sub-second web software engineering, and Hollywood-grade cinema production into a single agile unit. We don’t just deliver ad clicks—we engineer compounding market hegemony.
                  </p>
                </div>
              </div>

              {/* Founder Sign-off Strip */}
              <div className={styles.editorialSignatureRow}>
                <div className={styles.signatureBlock}>
                  <span className={styles.signatureText}>Marketing Copilot Directorate</span>
                  <span className={styles.signatureRole}>Executive Strategy Board · Unit 3, Kharvela Nagar</span>
                </div>
                <div className={styles.verifiedStamp}>
                  <span className={styles.stampSeal}>✦</span>
                  <span>VERIFIED COMMERCIAL INTEGRITY</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3: AGENCY MANIFESTO & CORE PILLARS (HORIZONTAL STREAM)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.manifestoSection}>
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

          {/* Horizontal Kinetic Stream of Principles (Not simple cards) */}
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
          SECTION 4: WHY CHOOSE US — 5 UNFAIR GROWTH MOATS (BENTO GRID)
         ══════════════════════════════════════════════════ */}
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
              Five structural moats that give our partners an unshakeable competitive edge across Google search, paid social, and customer acquisition.
            </p>
          </ScrollReveal>

          {/* Asymmetrical Tactile Bento Grid */}
          <div className={styles.bentoGrid}>
            {/* Bento Hero Spotlight (Spans 2 columns) */}
            <ScrollReveal className={styles.bentoColSpan2}>
              <div className={`${styles.bentoTile} ${styles.bentoTileHero}`}>
                <div className={styles.bentoTileGlow} />
                <div className={styles.bentoTileMesh} />

                <div className={styles.bentoBadgeRow}>
                  <span className={styles.bentoHeroBadge}>PROPRIETARY REVENUE ENGINE</span>
                  <span className={styles.bentoLiveBadge}>⚡ Continuous Optimization</span>
                </div>

                <h3 className={styles.bentoHeroTitle}>
                  The Full-Funnel Synergy Matrix
                </h3>
                <p className={styles.bentoHeroDesc}>
                  Other agencies run isolated ads or isolated SEO. We connect all acquisition channels into a unified algorithmic loop: Google Search intent fuels Meta retargeting pools, which trigger high-intent WhatsApp automations, supported by sub-second Next.js conversion architecture.
                </p>

                <div className={styles.bentoHeroFeatures}>
                  <div className={styles.heroFeaturePill}>
                    <span>🎯 Omnichannel Attribution</span>
                  </div>
                  <div className={styles.heroFeaturePill}>
                    <span>⚡ Sub-Second Landing Speeds</span>
                  </div>
                  <div className={styles.heroFeaturePill}>
                    <span>📈 Zero Ad Spend Leakage</span>
                  </div>
                </div>

                <div className={styles.bentoHeroFooter}>
                  <div className={styles.heroMetricRow}>
                    <span className={styles.heroMetricVal}>+320%</span>
                    <span className={styles.heroMetricText}>Average Pipeline Lift in 90 Days</span>
                  </div>
                  <BeamButton href="/contact" label="Audit Your Funnel" size="md" />
                </div>
              </div>
            </ScrollReveal>

            {/* 4 Specialized Bento Tiles */}
            {whyChooseMoats.map((moat, i) => (
              <ScrollReveal key={moat.id} delay={i * 90}>
                <div className={styles.bentoTile}>
                  <div className={styles.bentoHeaderRow}>
                    <span className={styles.bentoIconBox}>{moat.icon}</span>
                    <span className={styles.bentoTag}>{moat.badge}</span>
                  </div>

                  <h4 className={styles.bentoTileTitle}>{moat.title}</h4>
                  <p className={styles.bentoTileDesc}>{moat.desc}</p>

                  <div className={styles.bentoFooter}>
                    <span className={styles.bentoMetricVal}>{moat.metric}</span>
                    <span className={styles.bentoMetricLabel}>{moat.metricLabel}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5: COMPARISON MATRIX (TRADITIONAL VS COPILOT)
         ══════════════════════════════════════════════════ */}
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
              Compare side-by-side. See why forward-thinking enterprises are leaving antiquated retainer retainers behind.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.matrixContainer}>
              <div className={styles.matrixHeader}>
                <div className={styles.matrixColFeature}>CRITICAL PERFORMANCE CAPABILITY</div>
                <div className={`${styles.matrixColAgency} ${styles.matrixBad}`}>TRADITIONAL AGENCIES</div>
                <div className={`${styles.matrixColCopilot} ${styles.matrixGood}`}>MARKETING COPILOT</div>
              </div>

              <div className={styles.matrixBody}>
                {comparisonRows.map((row, idx) => (
                  <div
                    key={row.feature}
                    className={`${styles.matrixRow} ${row.highlight ? styles.rowHighlight : ''} ${idx % 2 === 0 ? styles.rowEven : ''}`}
                  >
                    <div className={styles.cellFeature}>
                      <span className={styles.featureBullet}>✦</span>
                      <span>{row.feature}</span>
                    </div>

                    <div className={`${styles.cellAgency} ${styles.cellBad}`}>
                      <span className={styles.crossIcon}>✕</span>
                      <span>{row.traditional}</span>
                    </div>

                    <div className={`${styles.cellCopilot} ${styles.cellGood}`}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{row.copilot}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6: LEADERSHIP SHOWCASE & MASTER STRATEGISTS
         ══════════════════════════════════════════════════ */}
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

          <div className={styles.leadershipGrid}>
            {leadershipTeam.map((leader, idx) => (
              <ScrollReveal key={leader.name} delay={idx * 100}>
                <div className={styles.leaderCard}>
                  <div className={styles.leaderPhotoWrap}>
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className={styles.leaderPhoto}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className={styles.leaderOverlay} />
                    <span className={styles.leaderDeptBadge} style={{ color: leader.color, borderColor: `${leader.color}40` }}>
                      {leader.dept}
                    </span>
                  </div>

                  <div className={styles.leaderInfo}>
                    <div className={styles.leaderHeaderRow}>
                      <div>
                        <h3 className={styles.leaderName}>{leader.name}</h3>
                        <p className={styles.leaderRole} style={{ color: leader.color }}>{leader.role}</p>
                      </div>
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className={styles.leaderSocial} aria-label="LinkedIn profile">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
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
          SECTION 7: 5-PHASE GROWTH OPERATING SYSTEM (SINE-WAVE ROADMAP)
         ══════════════════════════════════════════════════ */}
      <section className={styles.roadmapSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>THE GROWTH OPERATING SYSTEM</span>
            </div>
            <h2 className={`display-lg ${styles.sectionHeadline}`}>
              How We Take Brands From Diagnostic Audit to{' '}
              <span className="accent-gradient">Compounding Scale</span>
            </h2>
            <p className={`body-lg ${styles.sectionSub}`}>
              Our battle-tested 5-phase framework designed for rapid execution, mathematical validation, and exponential market leadership.
            </p>
          </ScrollReveal>

          {/* Connected Sinusoidal Desktop Roadmap */}
          <div className={styles.roadmapDesktopWrap}>
            <div className={styles.roadmapSvgTrack}>
              <svg viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none" className={styles.roadmapSvg}>
                <path
                  d="M 50,60 C 150,20 250,20 350,60 C 450,100 550,100 650,60 C 750,20 850,20 950,60 C 1050,100 1150,80 1180,60"
                  stroke="rgba(11, 32, 147, 0.2)"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                />
                <path
                  d="M 50,60 C 150,20 250,20 350,60 C 450,100 550,100 650,60 C 750,20 850,20 950,60 C 1050,100 1150,80 1180,60"
                  stroke="url(#roadmapGrad)"
                  strokeWidth="3.5"
                  strokeDasharray="12 8"
                  className={styles.animatedRoadmapPath}
                />
                <defs>
                  <linearGradient id="roadmapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0B2093" />
                    <stop offset="35%" stopColor="#0D007F" />
                    <stop offset="70%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className={styles.roadmapColumnsGrid}>
              {operatingPhases.map((phase, idx) => {
                const isAbove = idx % 2 === 0;
                return (
                  <div key={phase.num} className={`${styles.roadmapCol} ${isAbove ? styles.colTop : styles.colBottom}`}>
                    <div className={styles.phaseCard}>
                      <div className={styles.phaseHeaderRow}>
                        <span className={styles.phaseBadge} style={{ color: phase.color, borderColor: `${phase.color}35`, background: `${phase.color}10` }}>
                          Phase {phase.num}
                        </span>
                        <span className={styles.phaseTime}>⏱ {phase.time}</span>
                      </div>

                      <h4 className={styles.phaseName}>{phase.name}</h4>
                      <p className={styles.phaseDesc}>{phase.desc}</p>

                      <div className={styles.phaseFocusRow}>
                        <span className={styles.focusDot} style={{ background: phase.color }} />
                        <span className={styles.focusText} style={{ color: phase.color }}>{phase.focus}</span>
                      </div>
                    </div>

                    <div className={styles.phaseNodeCircle} style={{ borderColor: phase.color }}>
                      <span className={styles.phaseNodeCore} style={{ background: phase.color }}>
                        {phase.num}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Step Switcher */}
          <div className={styles.roadmapMobileWrap}>
            <div className={styles.mobilePhaseHeader}>
              <span className={styles.mobilePhaseBadge} style={{ color: operatingPhases[activePhase].color }}>
                Phase {operatingPhases[activePhase].num} · {operatingPhases[activePhase].time}
              </span>
              <span className={styles.mobilePhaseCounter}>{activePhase + 1} / {operatingPhases.length}</span>
            </div>

            <h4 className={styles.mobilePhaseTitle}>{operatingPhases[activePhase].name}</h4>
            <p className={styles.mobilePhaseDesc}>{operatingPhases[activePhase].desc}</p>

            <div className={styles.mobilePhaseControls}>
              <button
                type="button"
                onClick={() => setActivePhase((p) => Math.max(0, p - 1))}
                disabled={activePhase === 0}
                className={styles.mobileArrowBtn}
              >
                ← Prev
              </button>
              <div className={styles.mobileDots}>
                {operatingPhases.map((st, i) => (
                  <button
                    key={st.num}
                    type="button"
                    onClick={() => setActivePhase(i)}
                    className={`${styles.mobileDot} ${activePhase === i ? styles.mobileDotActive : ''}`}
                    style={{ background: activePhase === i ? st.color : undefined }}
                    aria-label={`Jump to phase ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActivePhase((p) => Math.min(operatingPhases.length - 1, p + 1))}
                disabled={activePhase === operatingPhases.length - 1}
                className={styles.mobileArrowBtn}
              >
                Next →
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <BeamButton href="/contact" label="Start Your 5-Phase Growth Plan" size="md" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8: MARTECH ECOSYSTEM & PLATFORM INTEGRATIONS
         ══════════════════════════════════════════════════ */}
      <section className={styles.martechSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>TOOLING &amp; AUTOMATION</span>
            </div>
            <h2 className={`display-lg ${styles.sectionHeadline}`}>
              Enterprise Tech Stack.{' '}
              <span className="accent-gradient">Zero Guesswork.</span>
            </h2>
            <p className={`body-lg ${styles.sectionSub}`}>
              Every partner is backed by institutional-grade tracking, automated bidding APIs, and real-time client telemetry.
            </p>
          </ScrollReveal>

          <div className={styles.martechGrid}>
            {martechEcosystem.map((tool, idx) => (
              <ScrollReveal key={tool.name} delay={idx * 70}>
                <div className={styles.martechCard}>
                  <div className={styles.martechCardTop}>
                    <span className={styles.martechIcon}>{idx + 1}</span>
                    <span className={styles.martechStatusBadge}>
                      <span className={styles.statusPulseDot} />
                      {tool.status}
                    </span>
                  </div>
                  <h3 className={styles.martechName}>{tool.name}</h3>
                  <p className={styles.martechCat}>{tool.category}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9: NUMBERS THAT DEFINE OUR STANDARD (LIVE TELEMETRY)
         ══════════════════════════════════════════════════ */}
      <section className={styles.telemetrySection} id="about-telemetry-section">
        <div className={styles.telemetryMesh} />
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}>
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
          SECTION 10: IN-PERSON COLLABORATIVE STUDIO & HEADQUARTERS
         ══════════════════════════════════════════════════ */}
      <section className={styles.studioSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>IN-PERSON WAR ROOM</span>
            </div>
            <h2 className={`display-lg ${styles.sectionHeadline}`}>
              Visit Our Bhubaneswar Studio{' '}
              <span className="accent-gradient">&amp; Growth Hub</span>
            </h2>
            <p className={`body-lg ${styles.sectionSub}`}>
              In-person collaboration creates clarity that zoom calls simply cannot replicate. Come brainstorm your roadmap at our Kharvela Nagar headquarters.
            </p>
          </ScrollReveal>

          <div className={styles.studioDualGrid}>
            {/* Left Column: Studio Details & Consultation Briefing */}
            <ScrollReveal>
              <div className={styles.studioDetailsCard}>
                <div className={styles.studioCardHeader}>
                  <span className={styles.studioLiveBadge}>🟢 Open For In-Person Briefings</span>
                  <span className={styles.studioHours}>Mon – Sat · 9:30 AM – 7:30 PM</span>
                </div>

                <h3 className={styles.studioCardTitle}>
                  Marketing Copilot Studio Headquarters
                </h3>

                <p className={styles.studioAddress}>
                  Unit 3, Kharvela Nagar, Near Master Canteen Chowk,<br />
                  Bhubaneswar, Odisha 751001, India
                </p>

                <div className={styles.studioFeatureList}>
                  <div className={styles.studioFeature}>
                    <span className={styles.featureIcon}>☕</span>
                    <div>
                      <h4 className={styles.featureTitle}>1-on-1 Growth Diagnostic Room</h4>
                      <p className={styles.featureDesc}>Private strategy room equipped with live Looker telemetry projections.</p>
                    </div>
                  </div>

                  <div className={styles.studioFeature}>
                    <span className={styles.featureIcon}>🎬</span>
                    <div>
                      <h4 className={styles.featureTitle}>Commercial Production Soundstage</h4>
                      <p className={styles.featureDesc}>In-house 4K video recording, high-production lighting, and audio recording bays.</p>
                    </div>
                  </div>

                  <div className={styles.studioFeature}>
                    <span className={styles.featureIcon}>📊</span>
                    <div>
                      <h4 className={styles.featureTitle}>War Room Collaborative Table</h4>
                      <p className={styles.featureDesc}>Interactive whiteboard sessions to construct your omnichannel unit economics model.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.studioActionRow}>
                  <BeamButton href="/contact" label="Schedule In-Person Strategy Session" size="md" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Interactive Map Preview */}
            <ScrollReveal delay={120}>
              <div className={styles.studioMapCard}>
                <iframe
                  title="Marketing Copilot Studio Headquarters Map"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapIframe}
                />

                {/* 3D Location Marker Beacon */}
                <div className={styles.mapBeaconOverlay}>
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapPinAnchor}
                    title="Click to open directions on Google Maps"
                  >
                    <div className={styles.pulseRadar1} />
                    <div className={styles.pulseRadar2} />
                    <div className={styles.mapPinBadge}>
                      <span className={styles.pinDot} />
                      <span>Marketing Copilot Studio</span>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 11: TRANSPARENT FAQS ACCORDION
         ══════════════════════════════════════════════════ */}
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
          SECTION 12: GRAND FINALE CTA COMMAND CARD
         ══════════════════════════════════════════════════ */}
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
