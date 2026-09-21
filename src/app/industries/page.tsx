'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import SmoothCounter from '@/components/SmoothCounter';
import CTASection from '../_components/CTASection';
import {
  industryCatalog,
  sectorBenchmarksTicker,
  sectorCorridorMatrix,
  sectorRoiTiers,
  IndustryItem,
} from './data';
import { clientTestimonials } from '../portfolio/data';
import styles from './page.module.css';

const filterCategories = [
  { id: 'all', label: 'All 12 Sectors' },
  { id: 'property', label: 'Property & Infra' },
  { id: 'health_edu', label: 'Healthcare & Edu' },
  { id: 'retail_food', label: 'Retail & Hospitality' },
  { id: 'b2b_industrial', label: 'B2B & Industrial' },
  { id: 'tech_logistics', label: 'Tech & Logistics' },
];

const deltaSectors = [
  {
    id: 'real-estate',
    name: 'Real Estate & Housing',
    before: {
      cpl: '₹1,850',
      channels: 'Brokers & Unverified Portals',
      leakage: '45% Duplicate Numbers',
      turnaround: '3 - 5 Days',
    },
    after: {
      cpl: '₹420',
      channels: 'Hyperlocal SEO & 3D Virtual Tours',
      leakage: '0% (Verified OTP)',
      turnaround: '< 5 Minutes via WhatsApp',
    },
    lift: '3.4X Qualified Site Visits',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    before: {
      cpl: '₹750',
      channels: 'Aggregator Commissions',
      leakage: '32% Patient No-Shows',
      turnaround: 'Manual OPD Calling',
    },
    after: {
      cpl: '₹165',
      channels: 'Google Maps 3-Pack & WhatsApp Bot',
      leakage: '< 6% No-Shows',
      turnaround: 'Instant 1-Click WhatsApp Booking',
    },
    lift: '+190% Direct Consultations',
  },
  {
    id: 'education',
    name: 'Education & Coaching',
    before: {
      cpl: '₹620',
      channels: 'Cold Call Telecalling Lists',
      leakage: '60% Unreachable Contacts',
      turnaround: '24+ Hours Wait',
    },
    after: {
      cpl: '₹140',
      channels: 'Scholarship Test Funnels & Meta Ads',
      leakage: 'Verified Parent Numbers',
      turnaround: 'Instant Counselor WhatsApp Ping',
    },
    lift: '400+ Batch Admissions',
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    before: {
      cpl: '2.1X ROAS',
      channels: 'Generic Broad Facebook Ads',
      leakage: '74% Cart Abandonment',
      turnaround: 'Zero Automated Recovery',
    },
    after: {
      cpl: '7.1X ROAS',
      channels: 'Advantage+ Catalogs & Google Shopping',
      leakage: '34% Recovered via WhatsApp',
      turnaround: 'Automated 15-Min Abandonment Ping',
    },
    lift: '₹50L+ Monthly D2C Revenue',
  },
];

const methodologySteps = [
  {
    num: '01',
    phase: 'AUDIT & PSYCHOLOGY',
    title: 'Hyperlocal Intent Mapping',
    desc: 'We map exact search behaviors, price thresholds, and competitive gaps across Bhubaneswar and Odisha commercial corridors.',
    tags: ['Pin-Code Clustering', 'Search Intent Gap Analysis', 'Competitor Ad Audits'],
    metric: '100%',
    metricLabel: 'Attribution Blueprint',
  },
  {
    num: '02',
    phase: 'CONVERSION ARCHITECTURE',
    title: 'Sub-Second Web Moats',
    desc: 'We construct high-speed Next.js landing pages with 3D tours, interactive estimators, and 1-tap WhatsApp scheduling.',
    tags: ['Core Web Vitals < 0.8s', 'Micro-Commitment Forms', 'Mobile CRO Framework'],
    metric: '< 0.8s',
    metricLabel: 'Page Load Speed',
  },
  {
    num: '03',
    phase: 'PRECISION ACQUISITION',
    title: 'Omni-Channel Intent Sniping',
    desc: 'We deploy Google Search Ads with negative keyword shielding and high-converting Meta video creative to capture buyers.',
    tags: ['Negative Keyword Moat', 'Cinematic Creative Drops', 'Google 3-Pack SEO'],
    metric: '6.8X',
    metricLabel: 'Target ROAS Peak',
  },
  {
    num: '04',
    phase: 'REVENUE AUTOMATION',
    title: 'WhatsApp & CRM Acceleration',
    desc: 'Every inquiry is routed instantly to WhatsApp counselors with automated reminders, preventing lead decay.',
    tags: ['Instant Lead Routing', 'Automated Reminders', 'CRM Stage Tracking'],
    metric: '< 5s',
    metricLabel: 'Lead Response Time',
  },
];

const engagementModels = [
  {
    name: 'Sector Launch Sprint',
    duration: '30-Day Fixed Deployment',
    tagline: 'Rapid market entry for single-location businesses ready to capture immediate demand in Bhubaneswar.',
    price: '₹35,000 / mo',
    features: [
      'Complete Google Maps 3-Pack Dominance',
      'Hyperlocal Google Search Campaign (15km radius)',
      'Sub-second Next.js Lead Landing Page',
      '1-Click WhatsApp Lead Routing Bot',
      'Weekly Audited Lead Reports',
    ],
    recommendedFor: 'Clinics, cafes, boutique builders, single-location retail',
    badge: 'RAPID DEPLOYMENT',
    isPrimary: false,
  },
  {
    name: 'Growth Dominance Retainer',
    duration: 'Compounding Revenue Retainer',
    tagline: 'Comprehensive multi-channel scaling for ambitious market leaders aiming to monopolize their sector in Odisha.',
    price: '₹75,000 / mo',
    features: [
      'Full-Funnel Google Search, Display & Performance Max',
      'Meta Video Ads & Advantage+ Catalog Retargeting',
      'Technical On-Page & Hyperlocal Link Authority',
      'Interactive ROI / Virtual Tour Web Modules',
      'Multi-Stage WhatsApp Cart & Appointment Automation',
      'Dedicated Senior Strategist & Bi-Weekly Executive Reviews',
    ],
    recommendedFor: 'Real estate builders, universities, diagnostic chains, high-volume retail',
    badge: 'MOST POPULAR FOR SCALE',
    isPrimary: true,
  },
  {
    name: 'Enterprise Commercial Partner',
    duration: 'Bespoke Annual Partnership',
    tagline: 'Custom revenue engineering, enterprise web infrastructure, and omni-channel acquisition across Eastern India.',
    price: 'Custom Commercial SLA',
    features: [
      'Multi-Location Pan-Odisha Regional Campaigns',
      'Full Custom Web / App Engineering (Next.js + Headless CMS)',
      'Dedicated 4K Video Production & Food/Industrial Shoots',
      'Custom CRM & ERP Bi-Directional Pipeline Sync',
      'Executive Account-Based Marketing (ABM) for B2B RFQs',
      '24/7 Dedicated Revenue Pod & Priority SLA Support',
    ],
    recommendedFor: 'Enterprise builders, hospital chains, industrial exporters, mega retail brands',
    badge: 'ENTERPRISE SCALE',
    isPrimary: false,
  },
];

export default function IndustriesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPlaybook, setSelectedPlaybook] = useState<IndustryItem | null>(null);
  const [activeDeltaSector, setActiveDeltaSector] = useState(0);

  // Sector ROI Calculator State
  const [selectedRoiSector, setSelectedRoiSector] = useState('real-estate');
  const [budgetSlider, setBudgetSlider] = useState(75000);

  const currentRoiTier = useMemo(() => {
    return sectorRoiTiers.find(t => t.sectorId === selectedRoiSector) || sectorRoiTiers[0];
  }, [selectedRoiSector]);

  const projectedLeads = useMemo(() => {
    return Math.round(budgetSlider * currentRoiTier.leadMultiplier);
  }, [budgetSlider, currentRoiTier]);

  const projectedPipeline = useMemo(() => {
    return Math.round((budgetSlider * currentRoiTier.pipelineMultiplier) / 100000);
  }, [budgetSlider, currentRoiTier]);

  const filteredIndustries = useMemo(() => {
    if (activeCategory === 'all') return industryCatalog;
    return industryCatalog.filter(ind => ind.group === activeCategory);
  }, [activeCategory]);

  return (
    <div className={styles.page}>
      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO COMMAND CENTER
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlowOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <ScrollReveal>
              <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
                <span className="eyebrow-dot" />
                12 SPECIALIZED SECTORS IN BHUBANESWAR & ODISHA
              </div>
              <h1 className={`display-xl ${styles.heroTitle}`}>
                Bhubaneswar Digital Marketing<br />
                <span className="accent-gradient">Built for Your Specific Industry.</span>
              </h1>
              <p className={`body-lg ${styles.heroSub}`}>
                Generic marketing fails because every industry has unique customer psychology, sales cycles, and pricing dynamics. We build bespoke acquisition engines tailored specifically to your sector in Bhubaneswar.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className={styles.heroCtaRow}>
                <BeamButton
                  href="#industry-matrix"
                  label="Explore 12 Industry Playbooks ↓"
                  size="lg"
                />
                <Link href="/contact" className={styles.heroSecondaryBtn}>
                  Claim Sector Growth Blueprint <span>→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Quick Sector Navigator Strip */}
            <ScrollReveal delay={180}>
              <div className={styles.sectorNavStrip}>
                <span className={styles.sectorNavLabel}>QUICK JUMP:</span>
                <div className={styles.sectorNavChips}>
                  {industryCatalog.map(ind => (
                    <button
                      key={ind.id}
                      type="button"
                      className={styles.sectorNavChip}
                      onClick={() => {
                        const el = document.getElementById(`industry-${ind.id}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      <span className={styles.chipDot} style={{ backgroundColor: ind.color }} />
                      {ind.shortTitle}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Real-time Metric Badge */}
            <ScrollReveal delay={240}>
              <div className={styles.heroTrustBanner}>
                <div className={styles.heroTrustItem}>
                  <span className={styles.trustVal}>₹25Cr+</span>
                  <span className={styles.trustLabel}>Attributed Client Revenue in Odisha</span>
                </div>
                <div className={styles.trustDivider} />
                <div className={styles.heroTrustItem}>
                  <span className={styles.trustVal}>150+</span>
                  <span className={styles.trustLabel}>Bhubaneswar Businesses Scaled</span>
                </div>
                <div className={styles.trustDivider} />
                <div className={styles.heroTrustItem}>
                  <span className={styles.trustVal}>12</span>
                  <span className={styles.trustLabel}>Specialized Industry Playbooks</span>
                </div>
                <div className={styles.trustDivider} />
                <div className={styles.heroTrustItem}>
                  <span className={styles.trustVal}>98%</span>
                  <span className={styles.trustLabel}>Annual Client Retention Rate</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: PANORAMIC SECTOR PERFORMANCE RIBBON
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.ribbonSection}>
        <div className={styles.ribbonContainer}>
          <div className={styles.ribbonTrack}>
            {/* Duplicated for infinite continuous ticker */}
            {[...sectorBenchmarksTicker, ...sectorBenchmarksTicker].map((item, idx) => (
              <div key={`${item.sector}-${idx}`} className={styles.ribbonCard}>
                <span className={styles.ribbonDot} style={{ backgroundColor: item.color }} />
                <span className={styles.ribbonSector}>{item.sector}</span>
                <span className={styles.ribbonMetric}>{item.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: FEATURED INDUSTRY MILESTONE SPOTLIGHT
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.spotlightSection}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              FEATURED SECTOR DEPLOYMENT
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Bhubaneswar High-Ticket Real Estate & Construction<br />
              <span className="accent-gradient">3X Verified Buyer Pipeline in 90 Days.</span>
            </h2>
            <p className={styles.sectionSub}>
              How we eliminated costly third-party portal aggregators for a premier Patia builder and deployed an inbound acquisition moat delivering 90+ verified luxury apartment buyers every single month.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className={styles.spotlightCard}>
              <div className={styles.spotlightVisualFrame}>
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Real Estate Industry Case Study Bhubaneswar"
                  fill
                  className={styles.spotlightImg}
                  priority
                />
                <div className={styles.spotlightVisualOverlay} />
                <div className={styles.spotlightLocationBadge}>
                  📍 Patia & Khandagiri, Bhubaneswar
                </div>
                <div className={styles.spotlightStatusBadge}>
                  <span className={styles.liveBeacon} />
                  Audited Sector Deployment • 90 Days
                </div>
              </div>

              <div className={styles.spotlightContentPane}>
                <div className={styles.spotlightEyebrowBadge}>
                  🏢 UTKAL HEIGHTS & LUXURY VILLAS
                </div>
                <h3 className={styles.spotlightHeadline}>
                  Dominating High-Ticket 3 & 4 BHK Searches in Bhubaneswar
                </h3>
                <p className={styles.spotlightDesc}>
                  By replacing slow 50MB PDF brochures with a sub-second Next.js virtual tour portal and launching hyper-targeted Google Search Ads with negative keyword shielding, we generated 94 verified buyer visits in the first 90 days.
                </p>

                <div className={styles.spotlightStatsGrid}>
                  <div className={styles.spotlightStatBox}>
                    <span className={styles.spotlightStatVal}>3X</span>
                    <span className={styles.spotlightStatLabel}>Inbound Qualified Buyers</span>
                  </div>
                  <div className={styles.spotlightStatBox}>
                    <span className={styles.spotlightStatVal}>₹420</span>
                    <span className={styles.spotlightStatLabel}>Cost Per Site Visit</span>
                  </div>
                  <div className={styles.spotlightStatBox}>
                    <span className={styles.spotlightStatVal}>100%</span>
                    <span className={styles.spotlightStatLabel}>Zero Aggregator Cuts</span>
                  </div>
                  <div className={styles.spotlightStatBox}>
                    <span className={styles.spotlightStatVal}>99.2%</span>
                    <span className={styles.spotlightStatLabel}>Verified Buyer Intent</span>
                  </div>
                </div>

                <div className={styles.spotlightDeliverables}>
                  <span className={styles.spotlightDelivTag}>✓ Sub-Second 3D Tour Portal</span>
                  <span className={styles.spotlightDelivTag}>✓ Google Search Ads with Negative Shield</span>
                  <span className={styles.spotlightDelivTag}>✓ WhatsApp Counselor Automated Routing</span>
                </div>

                <div style={{ marginTop: 24 }}>
                  <BeamButton
                    href="/contact"
                    label="Schedule Real Estate Strategy Call →"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: THE 12-INDUSTRY INTERACTIVE MATRIX (CORE BENTO GRID)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.matrixSection} id="industry-matrix">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              12 SPECIALIZED SECTOR PLAYBOOKS
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Tailored Digital Infrastructure<br />
              <span className="accent-gradient">Engineered for Your Business Model.</span>
            </h2>
            <p className={styles.sectionSub}>
              Select your industry category below to explore our audited revenue blueprints, key deliverables, and commercial benchmarks deployed across Bhubaneswar.
            </p>
          </ScrollReveal>

          {/* Category Filter Tabs */}
          <ScrollReveal delay={80}>
            <div className={styles.filterTabsRow}>
              {filterCategories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.filterTab} ${activeCategory === cat.id ? styles.filterTabActive : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* 12-Card Bento Grid */}
          <div className={styles.matrixGrid}>
            {filteredIndustries.map((ind, i) => (
              <ScrollReveal key={ind.id} delay={i * 40}>
                <div className={styles.industryCard} id={`industry-${ind.id}`}>
                  {/* Card Visual Banner */}
                  <div className={styles.cardImgContainer}>
                    <Image
                      src={ind.image}
                      alt={`${ind.title} Digital Marketing in Bhubaneswar`}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className={styles.cardImg}
                    />
                    <div className={styles.cardImgOverlay} />
                    <div className={styles.cardNumPill}>SECTOR {ind.num}</div>
                    <div className={styles.cardCategoryPill}>{ind.category}</div>
                  </div>

                  {/* Card Body */}
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{ind.title}</h3>
                    <p className={styles.cardDesc}>{ind.desc}</p>

                    {/* Deliverable Tags */}
                    <div className={styles.cardTagsRow}>
                      {ind.services.slice(0, 3).map(s => (
                        <span key={s} className={styles.cardTag}>
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Audited Metric Well */}
                    <div className={styles.cardMetricWell}>
                      <div className={styles.cardMetricVal} style={{ color: ind.color }}>
                        {ind.metric}
                      </div>
                      <div className={styles.cardMetricLabel}>{ind.metricLabel}</div>
                    </div>

                    {/* Interactive Playbook Trigger */}
                    <button
                      type="button"
                      className={styles.cardPlaybookBtn}
                      onClick={() => setSelectedPlaybook(ind)}
                    >
                      <span>Open Sector Playbook</span>
                      <span className={styles.btnArrow}>→</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: INTERACTIVE INDUSTRY PLAYBOOK DRAWER
         ══════════════════════════════════════════════════════════ */}
      {selectedPlaybook && (
        <div className={styles.drawerOverlay} onClick={() => setSelectedPlaybook(null)}>
          <div className={styles.drawerContent} onClick={e => e.stopPropagation()}>
            <div className={styles.drawerDragHandle} />

            {/* Drawer Header Banner */}
            <div className={styles.drawerHeroBanner}>
              <Image
                src={selectedPlaybook.image}
                alt={selectedPlaybook.title}
                fill
                className={styles.drawerHeroImg}
              />
              <div className={styles.drawerHeroOverlay} />
              <div className={styles.drawerCategoryPill}>{selectedPlaybook.category}</div>
              <button
                type="button"
                className={styles.drawerCloseBtn}
                onClick={() => setSelectedPlaybook(null)}
                aria-label="Close Playbook"
              >
                ✕
              </button>
              <div className={styles.drawerHeroText}>
                <h3 className={styles.drawerTitle}>{selectedPlaybook.title}</h3>
                <p className={styles.drawerSubtitle}>{selectedPlaybook.tagline}</p>
                <div className={styles.drawerClientAnchor}>
                  📍 {selectedPlaybook.playbook.clientAnchor} • {selectedPlaybook.playbook.clientLocation}
                </div>
              </div>
            </div>

            {/* Drawer Scrollable Body */}
            <div className={styles.drawerBody}>
              {/* Bottlenecks Card */}
              <div className={styles.drawerSectionCard} style={{ borderColor: 'rgba(239, 68, 68, 0.25)', background: 'rgba(239, 68, 68, 0.02)' }}>
                <div className={styles.drawerSectionHeader} style={{ color: '#DC2626' }}>
                  ⚠️ COMMON SECTOR BOTTLENECKS (The Problem)
                </div>
                <ul className={styles.drawerList}>
                  {selectedPlaybook.playbook.bottlenecks.map((b, idx) => (
                    <li key={idx} className={styles.drawerListItem}>
                      <span className={styles.bulletBad}>✕</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions Card */}
              <div className={styles.drawerSectionCard} style={{ borderColor: 'rgba(16, 185, 129, 0.25)', background: 'rgba(16, 185, 129, 0.02)' }}>
                <div className={styles.drawerSectionHeader} style={{ color: '#059669' }}>
                  ⚡ OUR BESPOKE ARCHITECTURE (The Solution)
                </div>
                <ul className={styles.drawerList}>
                  {selectedPlaybook.playbook.solutions.map((s, idx) => (
                    <li key={idx} className={styles.drawerListItem}>
                      <span className={styles.bulletGood}>✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3-Step Funnel Flow */}
              <div className={styles.drawerSectionCard}>
                <div className={styles.drawerSectionHeader}>
                  🛠️ PROVEN 3-STEP ACQUISITION FUNNEL
                </div>
                <div className={styles.drawerFunnelSteps}>
                  {selectedPlaybook.playbook.funnelSteps.map((step, idx) => (
                    <div key={idx} className={styles.drawerFunnelStep}>
                      <div className={styles.funnelStepNum}>0{idx + 1}</div>
                      <div className={styles.funnelStepContent}>
                        <div className={styles.funnelStepTitle}>{step.title}</div>
                        <div className={styles.funnelStepDesc}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audited Benchmarks */}
              <div className={styles.drawerSectionCard}>
                <div className={styles.drawerSectionHeader}>
                  📊 AUDITED COMMERCIAL BENCHMARKS
                </div>
                <div className={styles.drawerBenchmarksGrid}>
                  {selectedPlaybook.playbook.benchmarks.map((bm, idx) => (
                    <div key={idx} className={styles.drawerBenchmarkWell}>
                      <div className={styles.drawerBenchmarkVal}>{bm.val}</div>
                      <div className={styles.drawerBenchmarkLabel}>{bm.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Drawer Footer */}
            <div className={styles.drawerStickyFooter}>
              <BeamButton
                href="/contact"
                label={`Deploy ${selectedPlaybook.shortTitle} Playbook →`}
                size="lg"
              />
              <div className={styles.drawerFooterNote}>
                🔒 Non-Disclosure Protected • 30-Day Measurable SLA Guarantee
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: SECTOR REVENUE ARCHITECTURE & FUNNEL ENGINEERING
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.methodologySection}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              SCIENTIFIC REVENUE METHODOLOGY
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              4-Phase Funnel Engineering<br />
              <span className="accent-gradient">Customized to Your Industry Economics.</span>
            </h2>
            <p className={styles.sectionSub}>
              How we calibrate customer acquisition cost, conversion rate optimization, and lifetime value for every distinct business category in Bhubaneswar.
            </p>
          </ScrollReveal>

          <div className={styles.methodologyGrid}>
            {methodologySteps.map((step, idx) => (
              <ScrollReveal key={step.num} delay={idx * 80}>
                <div className={styles.methodologyCard}>
                  <div className={styles.methodologyCardTop}>
                    <div className={styles.methodologyNum}>{step.num}</div>
                    <div className={styles.methodologyPhase}>{step.phase}</div>
                  </div>
                  <h3 className={styles.methodologyTitle}>{step.title}</h3>
                  <p className={styles.methodologyDesc}>{step.desc}</p>
                  <div className={styles.methodologyTags}>
                    {step.tags.map(t => (
                      <span key={t} className={styles.methodologyTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className={styles.methodologyMetricWell}>
                    <span className={styles.methodologyMetricVal}>{step.metric}</span>
                    <span className={styles.methodologyMetricLabel}>{step.metricLabel}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: AUDITED COMMERCIAL DELTAS (BEFORE VS AFTER BY SECTOR)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.deltasSection}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              AUDITED COMMERCIAL DELTAS
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Generic Agency Campaigns vs.<br />
              <span className="accent-gradient">Marketing Copilot Architecture.</span>
            </h2>
            <p className={styles.sectionSub}>
              Real audited differences in customer acquisition cost, lead quality, and speed to market across major Bhubaneswar sectors.
            </p>
          </ScrollReveal>

          {/* Sector Segmented Switcher */}
          <ScrollReveal delay={80}>
            <div className={styles.deltaTabsRow}>
              {deltaSectors.map((sector, idx) => (
                <button
                  key={sector.id}
                  type="button"
                  className={`${styles.deltaTab} ${activeDeltaSector === idx ? styles.deltaTabActive : ''}`}
                  onClick={() => setActiveDeltaSector(idx)}
                >
                  {sector.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Side-by-Side Comparison Console */}
          <ScrollReveal delay={120}>
            <div className={styles.deltaConsole}>
              {/* Before Column */}
              <div className={styles.deltaColBefore}>
                <div className={styles.deltaColHeaderBefore}>
                  <span className={styles.deltaBadgeBefore}>THE GENERIC AGENCY APPROACH</span>
                  <h4 className={styles.deltaColTitle}>Wasted Budget & High Friction</h4>
                </div>
                <div className={styles.deltaWellBefore}>
                  <div className={styles.deltaRow}>
                    <span className={styles.deltaLabel}>Cost Per Lead:</span>
                    <span className={styles.deltaValBad}>{deltaSectors[activeDeltaSector].before.cpl}</span>
                  </div>
                  <div className={styles.deltaRow}>
                    <span className={styles.deltaLabel}>Acquisition Channel:</span>
                    <span className={styles.deltaValBad}>{deltaSectors[activeDeltaSector].before.channels}</span>
                  </div>
                  <div className={styles.deltaRow}>
                    <span className={styles.deltaLabel}>Pipeline Leakage:</span>
                    <span className={styles.deltaValBad}>{deltaSectors[activeDeltaSector].before.leakage}</span>
                  </div>
                  <div className={styles.deltaRow}>
                    <span className={styles.deltaLabel}>Response Turnaround:</span>
                    <span className={styles.deltaValBad}>{deltaSectors[activeDeltaSector].before.turnaround}</span>
                  </div>
                </div>
              </div>

              {/* Center Multiplier Medallion */}
              <div className={styles.deltaCenterMedallion}>
                <div className={styles.medallionRing}>
                  <span className={styles.medallionLift}>{deltaSectors[activeDeltaSector].lift}</span>
                  <span className={styles.medallionLabel}>AUDITED COMMERCIAL DELTA</span>
                </div>
              </div>

              {/* After Column */}
              <div className={styles.deltaColAfter}>
                <div className={styles.deltaColHeaderAfter}>
                  <span className={styles.deltaBadgeAfter}>MARKETING COPILOT ARCHITECTURE</span>
                  <h4 className={styles.deltaColTitle}>High-Velocity Inbound Pipeline</h4>
                </div>
                <div className={styles.deltaWellAfter}>
                  <div className={styles.deltaRow}>
                    <span className={styles.deltaLabel}>Cost Per Lead:</span>
                    <span className={styles.deltaValGood}>{deltaSectors[activeDeltaSector].after.cpl}</span>
                  </div>
                  <div className={styles.deltaRow}>
                    <span className={styles.deltaLabel}>Acquisition Channel:</span>
                    <span className={styles.deltaValGood}>{deltaSectors[activeDeltaSector].after.channels}</span>
                  </div>
                  <div className={styles.deltaRow}>
                    <span className={styles.deltaLabel}>Pipeline Leakage:</span>
                    <span className={styles.deltaValGood}>{deltaSectors[activeDeltaSector].after.leakage}</span>
                  </div>
                  <div className={styles.deltaRow}>
                    <span className={styles.deltaLabel}>Response Turnaround:</span>
                    <span className={styles.deltaValGood}>{deltaSectors[activeDeltaSector].after.turnaround}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: HYPERLOCAL ODISHA MARKET DOMINANCE (CORRIDOR MATRIX)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.corridorSection}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              REGIONAL CORRIDOR DOMINANCE
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Bhubaneswar Sector Footprint<br />
              <span className="accent-gradient">Mapping High-Intent Commercial Corridors.</span>
            </h2>
            <p className={styles.sectionSub}>
              How we tailor campaigns to the demographic density, buyer purchasing power, and local traffic patterns of each commercial node in Odisha.
            </p>
          </ScrollReveal>

          <div className={styles.corridorGrid}>
            {sectorCorridorMatrix.map((c, idx) => (
              <ScrollReveal key={c.corridor} delay={idx * 50}>
                <div className={styles.corridorCard}>
                  <div className={styles.corridorTop}>
                    <span className={styles.corridorBadge}>{c.badge}</span>
                    <span className={styles.corridorBeacon} />
                  </div>
                  <h3 className={styles.corridorTitle}>{c.corridor}</h3>
                  <div className={styles.corridorFocus}>{c.focus}</div>
                  <div className={styles.corridorMetricWell}>
                    <span className={styles.corridorMetricVal}>{c.metric}</span>
                  </div>
                  <div className={styles.corridorAnchor}>
                    <span className={styles.anchorLabel}>Client Anchor:</span>
                    <span className={styles.anchorVal}>{c.anchor}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 9: INTERACTIVE SECTOR ROI & BUDGET YIELD CALCULATOR
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.calculatorSection}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              DYNAMIC BUDGET YIELD MODELER
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Estimate Inbound Leads & Pipeline<br />
              <span className="accent-gradient">Tailored to Your Sector Economics.</span>
            </h2>
            <p className={styles.sectionSub}>
              Adjust your monthly marketing budget below to project estimated verified leads, customer acquisition cost, and revenue pipeline for your sector in Bhubaneswar.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.calculatorConsole}>
              {/* Sector Selection Row */}
              <div className={styles.calcSectorSelectRow}>
                <span className={styles.calcLabel}>SELECT YOUR SECTOR:</span>
                <div className={styles.calcSectorButtons}>
                  {sectorRoiTiers.map(t => (
                    <button
                      key={t.sectorId}
                      type="button"
                      className={`${styles.calcSectorBtn} ${selectedRoiSector === t.sectorId ? styles.calcSectorBtnActive : ''}`}
                      onClick={() => setSelectedRoiSector(t.sectorId)}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Row */}
              <div className={styles.calcSliderRow}>
                <div className={styles.calcSliderHeader}>
                  <span className={styles.calcLabel}>MONTHLY MARKETING SPEND:</span>
                  <span className={styles.calcBudgetValue}>₹{budgetSlider.toLocaleString('en-IN')} / month</span>
                </div>
                <input
                  type="range"
                  min={currentRoiTier.minBudget}
                  max={currentRoiTier.maxBudget}
                  step={5000}
                  value={budgetSlider}
                  onChange={e => setBudgetSlider(Number(e.target.value))}
                  className={styles.calcSlider}
                />
                <div className={styles.calcSliderLimits}>
                  <span>₹{currentRoiTier.minBudget.toLocaleString('en-IN')}</span>
                  <span>₹{currentRoiTier.maxBudget.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Dynamic Results Grid */}
              <div className={styles.calcResultsGrid}>
                <div className={styles.calcResultDial}>
                  <span className={styles.calcResultLabel}>ESTIMATED INBOUND LEADS</span>
                  <span className={styles.calcResultNumber}>
                    <SmoothCounter value={`${projectedLeads}`} duration={700} />+
                  </span>
                  <span className={styles.calcResultSub}>Verified Phone/WhatsApp Inquiries</span>
                </div>

                <div className={styles.calcResultDial}>
                  <span className={styles.calcResultLabel}>ESTIMATED TARGET CPL</span>
                  <span className={styles.calcResultNumber}>{currentRoiTier.cplRange}</span>
                  <span className={styles.calcResultSub}>Based on Bhubaneswar Benchmarks</span>
                </div>

                <div className={styles.calcResultDial}>
                  <span className={styles.calcResultLabel}>PROJECTED PIPELINE VALUE</span>
                  <span className={styles.calcResultNumber}>₹{projectedPipeline}L – ₹{Math.round(projectedPipeline * 1.5)}L</span>
                  <span className={styles.calcResultSub}>Estimated Gross Commercial Value</span>
                </div>
              </div>

              {/* Channel Split Recommendation */}
              <div className={styles.calcChannelSplit}>
                <span className={styles.channelSplitLabel}>RECOMMENDED CHANNEL ALLOCATION:</span>
                <span className={styles.channelSplitVal}>{currentRoiTier.channelSplit}</span>
              </div>

              <div style={{ textAlign: 'center', marginTop: 32 }}>
                <BeamButton
                  href="/contact"
                  label="Claim Custom Sector Growth Audit →"
                  size="lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 10: VERIFIED ODISHA FOUNDERS & SECTOR ENDORSEMENTS
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.endorsementsSection}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              VERIFIED SECTOR ENDORSEMENTS
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              What Odisha Founders Say<br />
              <span className="accent-gradient">About Our Sector-Specific Results.</span>
            </h2>
            <p className={styles.sectionSub}>
              Unfiltered feedback from business owners across real estate, healthcare, education, and retail who trusted us with their core growth infrastructure.
            </p>
          </ScrollReveal>

          <div className={styles.endorsementsGrid}>
            {clientTestimonials.map((t, idx) => (
              <ScrollReveal key={t.author} delay={idx * 80}>
                <div className={styles.endorsementCard}>
                  <div className={styles.endorsementTop}>
                    <div className={styles.starRow}>★★★★★</div>
                    <div className={styles.googleReviewPill}>★ 5.0 Google Review</div>
                  </div>
                  <p className={styles.endorsementQuote}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles.endorsementAuthorRow}>
                    <div className={styles.authorAvatarWrap}>
                      <Image
                        src={t.image}
                        alt={t.author}
                        width={54}
                        height={54}
                        className={styles.authorAvatar}
                      />
                    </div>
                    <div className={styles.authorDetails}>
                      <div className={styles.authorName}>{t.author}</div>
                      <div className={styles.authorRole}>
                        {t.role} • {t.company}
                      </div>
                      <div className={styles.authorStat}>{t.stat}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 11: SECTOR PARTNERSHIP ENGAGEMENT TIERS
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.engagementSection}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              PARTNERSHIP STRUCTURES
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Transparent, Outcome-Oriented<br />
              <span className="accent-gradient">Sector Engagement Models.</span>
            </h2>
            <p className={styles.sectionSub}>
              No vague retainers or hidden fees. We structure our partnerships around measurable deliverables, guaranteed SLAs, and attributed revenue milestones.
            </p>
          </ScrollReveal>

          <div className={styles.engagementGrid}>
            {engagementModels.map((m, idx) => (
              <ScrollReveal key={m.name} delay={idx * 80}>
                <div className={`${styles.engagementCard} ${m.isPrimary ? styles.engagementCardPrimary : ''}`}>
                  <div className={styles.engagementTop}>
                    <span className={styles.engagementBadge}>{m.badge}</span>
                    <h3 className={styles.engagementTitle}>{m.name}</h3>
                    <div className={styles.engagementDuration}>{m.duration}</div>
                    <div className={styles.engagementPrice}>{m.price}</div>
                  </div>
                  <p className={styles.engagementTagline}>{m.tagline}</p>

                  <div className={styles.engagementFeaturesList}>
                    {m.features.map(f => (
                      <div key={f} className={styles.engagementFeatureItem}>
                        <span className={styles.featureCheck}>✓</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.engagementFooter}>
                    <div className={styles.recommendedForLabel}>RECOMMENDED FOR:</div>
                    <div className={styles.recommendedForText}>{m.recommendedFor}</div>
                    <div style={{ marginTop: 20 }}>
                      <BeamButton
                        href="/contact"
                        label={`Select ${m.name.split(' ')[0]} Model →`}
                        size="md"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 12: EXECUTIVE BESPOKE BOTTOM CTA SECTION
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.bespokeCtaCard}>
              <div className={styles.ctaCardGlow} />
              <div className={styles.ctaCardBadge}>
                SCHEDULE SECTOR STRATEGY SESSION
              </div>
              <h2 className={styles.ctaCardTitle}>
                Ready to Monopolize Your Sector<br />
                in Bhubaneswar & Odisha?
              </h2>
              <p className={styles.ctaCardSub}>
                Book a 45-minute confidential growth session with our senior strategists. We will audit your current market visibility, benchmark your competitors, and deliver a custom 90-day acquisition roadmap.
              </p>

              <div className={styles.ctaCardButtonsRow}>
                <BeamButton
                  href="/contact"
                  label="Claim Free Sector Growth Blueprint →"
                  size="lg"
                />
                <a href="tel:+918763570630" className={styles.ctaCardCallBtn}>
                  📞 Call +91 8763570630
                </a>
              </div>

              <div className={styles.ctaCardFooterTrust}>
                <span>📍 DLF Cybercity & Patia, Bhubaneswar</span>
                <span>•</span>
                <span>🔒 Strict NDA & Non-Compete Guarantee</span>
                <span>•</span>
                <span>⚡ First Leads in 72 Hours</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
