'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import SmoothCounter from '@/components/SmoothCounter';
import {
  industryCatalog,
  sectorCorridorMatrix,
  IndustryItem,
} from './data';
import styles from './page.module.css';

// Industry Icons Map
const sectorIcons: Record<string, string> = {
  'real-estate': '🏢',
  'healthcare': '🏥',
  'education': '🎓',
  'retail-ecom': '🛍️',
  'hospitality': '🍽️',
  'construction': '🏗️',
  'professional-services': '⚖️',
  'manufacturing': '🏭',
  'automotive': '🏎️',
  'tech-saas': '💻',
  'agriculture-food': '🌾',
  'logistics-supply': '🚚',
};

// Corridor Deep Dive Intelligence Data
const corridorDetails: Record<string, {
  pinCodes: string[];
  hotspots: string[];
  queries: string[];
  purchasingPower: string;
  conversionSpeed: string;
  demographics: string;
}> = {
  'Patia & Infocity': {
    pinCodes: ['751024', '751016'],
    hotspots: ['Infocity Tech Park', 'KIIT Road', 'DLF Cybercity', 'Silicon Hills', 'Magnetic Square'],
    queries: ['3 BHK Luxury Flats in Patia', 'Best Cafes near Infocity', 'IT Company Office Space Bhubaneswar'],
    purchasingPower: 'High (IT Executives, Tech Founders, Doctors)',
    conversionSpeed: '< 72 Hours (High Digital Adoption)',
    demographics: 'Tech Workforce, High-Net-Worth Young Families, University Students',
  },
  'Saheed Nagar': {
    pinCodes: ['751007'],
    hotspots: ['Bhawani Mall', 'RD Women’s College Road', 'Metro House', 'Janpath Commercial Strip'],
    queries: ['Specialist Dental Clinic Saheed Nagar', 'Best CA Firm Bhubaneswar', 'Diagnostics Centre Saheed Nagar'],
    purchasingPower: 'High (Established Business Families, Senior Professionals)',
    conversionSpeed: '< 24 Hours (Immediate Medical & Legal Need)',
    demographics: 'Business Owners, Senior Doctors, Legacy Residents',
  },
  'Chandrasekharpur': {
    pinCodes: ['751016', '751023'],
    hotspots: ['Damana Square', 'Sailashree Vihar', 'Kanan Vihar', 'BDA Colony'],
    queries: ['NEET Coaching Institute Bhubaneswar', 'PEB Industrial Contractors Odisha', 'CBSE School Admissions'],
    purchasingPower: 'Upper Middle Class (Corporate Officers, Edu Founders)',
    conversionSpeed: '3 - 7 Days (Evaluation Cycle)',
    demographics: 'Aspirant Families, Corporate Engineers, Academic Leaders',
  },
  'Khandagiri & Nayapalli': {
    pinCodes: ['751030', '751012'],
    hotspots: ['IRC Village', 'Baramunda Bus Terminal Node', 'Khandagiri Square', 'National Highway Belt'],
    queries: ['Electric Scooter Showroom Bhubaneswar', 'Luxury Villa Projects Nayapalli', 'Car Service Center'],
    purchasingPower: 'Upper Middle to High (Commercial Traders, Contractors)',
    conversionSpeed: '2 - 4 Days (Test Drive to Booking)',
    demographics: 'Showroom Shoppers, Commuters, Property Investors',
  },
  'Mancheswar & Rasulgarh': {
    pinCodes: ['751010'],
    hotspots: ['Mancheswar Industrial Estate Sector A & B', 'Rasulgarh Flyover Hub', 'NH-16 Logistics Spine'],
    queries: ['Warehouse for Lease Bhubaneswar', 'CNC Precision Machining Odisha', 'Industrial Steel Fabricators'],
    purchasingPower: 'Enterprise B2B (Factory Owners, Export Procurement Heads)',
    conversionSpeed: '7 - 14 Days (Commercial Tender / RFQ)',
    demographics: 'Industrialists, Freight Operators, Supply Chain Directors',
  },
  'Puri Circuit & Cuttack Road': {
    pinCodes: ['751006', '752002'],
    hotspots: ['Cuttack-Puri Bypass', 'Samantarapur', 'Old Town Heritage Hub', 'NH-316 Gateway'],
    queries: ['Heritage Boutique Resort near Puri', 'Fresh Dairy Milk Delivery Bhubaneswar', 'Odisha Seafood Restaurant'],
    purchasingPower: 'High Weekend & Tourism Spend',
    conversionSpeed: '< 4 Hours (Dining & Tourism Reservations)',
    demographics: 'Pilgrims, Weekend Travelers, Regional Food Lovers',
  },
};

// Diagnostic Tool Options
const diagnosticSectors = [
  { id: 'real-estate', icon: '🏢', name: 'Real Estate & Builders', defaultStack: 'Sub-second 3D Virtual Tour Portal + Google Search Ads with Negative Shield + WhatsApp Lead Routing', sampleLead: '4 BHK Villa Buyer in Patia (Verified OTP)' },
  { id: 'healthcare', icon: '🏥', name: 'Healthcare & Clinics', defaultStack: 'Google Maps 3-Pack SEO + Verified Doctor Schema + Automated WhatsApp Appointment Bot', sampleLead: 'Specialist Consultation in Saheed Nagar' },
  { id: 'education', icon: '🎓', name: 'Education & Coaching', defaultStack: 'Scholarship Aptitude Test Lead Magnet + Meta Video Ads + Automated Counselor CRM', sampleLead: 'NEET Batch Enrollment from Cuttack' },
  { id: 'retail-ecom', icon: '🛍️', name: 'Retail & E-commerce', defaultStack: 'Google Shopping / PMax Feeds + Meta Advantage+ Catalog + WhatsApp 3-Stage Cart Recovery', sampleLead: 'D2C Handloom Repeat Order (UPI Paid)' },
  { id: 'b2b-industrial', icon: '🏗️', name: 'B2B & Industrial Infra', defaultStack: 'B2B Technical SEO Schema + LinkedIn Account-Based Marketing + Interactive RFQ Estimator', sampleLead: '₹1.2Cr Industrial PEB Structure RFQ' },
  { id: 'tech-saas', icon: '💻', name: 'Tech, IT & SaaS', defaultStack: 'SaaS Interactive Product Tour + Technical Topic Cluster SEO + Automated Trial Activation Engine', sampleLead: 'Enterprise Software Demo Booking' },
];

const diagnosticBottlenecks = [
  { id: 'high-cpl', label: 'High Cost Per Lead (CPL)', impact: 'Reduce CPL by 45–62% via negative keyword shields & direct funnels' },
  { id: 'poor-quality', label: 'Unverified / Duplicate Leads', impact: 'Eliminate tire-kickers with 2-step OTP qualification & budget filters' },
  { id: 'maps-rank', label: 'Zero Google Maps 3-Pack Rank', impact: 'Dominate local searches across 12 geo-fenced Bhubaneswar pin codes' },
  { id: 'slow-site', label: 'Slow Website / Low Conversion', impact: 'Upgrade to Next.js 15 loading in <0.8s with interactive micro-commitments' },
];

const diagnosticBudgets = [
  { id: 'starter', label: '₹30,000 – ₹50,000 / mo', leadsRange: '45 – 70 Leads', targetCpl: '₹350 – ₹450', timeline: 'First Leads in 72 Hours' },
  { id: 'growth', label: '₹50,000 – ₹1,00,000 / mo', leadsRange: '110 – 190 Leads', targetCpl: '₹220 – ₹320', timeline: 'Full-Funnel Scale in 14 Days' },
  { id: 'scale', label: '₹1,00,000+ / mo', leadsRange: '250+ Verified Leads', targetCpl: '₹140 – ₹240', timeline: 'Multi-Location Market Dominance' },
];

// Engagement Models (Tabbed Console)
const engagementTiers = [
  {
    id: 'sprint',
    badge: '30-DAY FIXED SPRINT',
    name: 'Sector Launch Sprint',
    price: '₹35,000',
    period: '/ month',
    tagline: 'Rapid market entry for single-location businesses ready to capture immediate demand in Bhubaneswar.',
    deliverables: [
      'Complete Google Maps 3-Pack Dominance & Pin Verification',
      'Hyperlocal Google Search Campaign (15km radius around clinic/store)',
      'Sub-second Next.js Lead Landing Page with WhatsApp Bot',
      'Negative Keyword Shielding to eliminate wasted ad clicks',
      'Weekly Audited Lead & Cost-Per-Acquisition Reports',
    ],
    timeline: 'Live in 72 Hours',
    guarantee: '100% Attribution Verified Leads',
    targetSectors: 'Local clinics, cafes, boutique builders, single-location retail',
  },
  {
    id: 'retainer',
    badge: 'COMPOUNDING DOMINANCE',
    name: 'Growth Dominance Retainer',
    price: '₹75,000',
    period: '/ month',
    tagline: 'Comprehensive multi-channel scaling for ambitious market leaders aiming to monopolize their sector in Odisha.',
    deliverables: [
      'Full-Funnel Google Search, Display & Performance Max Ads',
      'Meta Video Ads & Advantage+ Catalog Retargeting',
      'Technical On-Page SEO & Hyperlocal Authority Backlinks',
      'Interactive 3D Virtual Tour / Price Estimator Web Modules',
      'Multi-Stage WhatsApp Cart & Appointment Automation Sequences',
      'Bi-Weekly Executive Strategy & Pipeline Reviews',
    ],
    timeline: 'Continuous Compounding Scale',
    guarantee: 'Guaranteed Cost-Per-Lead Ceilings',
    targetSectors: 'Real estate builders, universities, diagnostic chains, high-volume retail',
  },
  {
    id: 'enterprise',
    badge: 'BESPOKE ANNUAL SLA',
    name: 'Enterprise Commercial Partner',
    price: 'Custom Commercial SLA',
    period: '',
    tagline: 'Custom revenue engineering, enterprise web infrastructure, and omni-channel acquisition across Eastern India.',
    deliverables: [
      'Multi-Location Pan-Odisha Regional Campaign Architecture',
      'Full Custom Web / App Engineering (Next.js 15 + Headless CMS)',
      'Dedicated 4K Video Production & Food/Industrial Creative Shoots',
      'Custom CRM & ERP Bi-Directional Pipeline Integration',
      'Executive Account-Based Marketing (ABM) for High-Value B2B RFQs',
      '24/7 Dedicated Revenue Pod & Priority Executive SLA Support',
    ],
    timeline: 'Annual Strategic Retainer',
    guarantee: 'Dedicated Revenue Share / Performance SLA',
    targetSectors: 'Enterprise builders, hospital chains, industrial exporters, mega retail brands',
  },
];

export default function IndustriesPage() {
  // Master-Detail Sector Workstation State
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('real-estate');

  // Corridor Console State
  const [activeCorridorIdx, setActiveCorridorIdx] = useState<number>(0);

  // Diagnostic Tool State
  const [diagSector, setDiagSector] = useState<string>('real-estate');
  const [diagBottleneck, setDiagBottleneck] = useState<string>('high-cpl');
  const [diagBudget, setDiagBudget] = useState<string>('growth');

  // Engagement Tier State
  const [activeTierId, setActiveTierId] = useState<string>('retainer');

  // Category filter for the 12-Sector Bento Grid
  const [activeSectorGroup, setActiveSectorGroup] = useState<string>('all');

  const sectorGroups = [
    { id: 'all', label: 'All 12 Sectors' },
    { id: 'property', label: '🏢 Property & Living' },
    { id: 'health_edu', label: '🏥 Healthcare & Education' },
    { id: 'retail_food', label: '🛍️ Retail & Food' },
    { id: 'b2b_industrial', label: '🏗️ B2B & Industrial' },
    { id: 'tech_logistics', label: '💻 Tech & Professional' },
  ];

  const filteredIndustries = useMemo(() => {
    if (activeSectorGroup === 'all') return industryCatalog;
    return industryCatalog.filter(i => i.group === activeSectorGroup);
  }, [activeSectorGroup]);

  // Selected Diagnostic Sector Item
  const activeDiagSector = useMemo(() => {
    return diagnosticSectors.find(s => s.id === diagSector) || diagnosticSectors[0];
  }, [diagSector]);

  // Selected Diagnostic Bottleneck Item
  const activeDiagBottleneck = useMemo(() => {
    return diagnosticBottlenecks.find(b => b.id === diagBottleneck) || diagnosticBottlenecks[0];
  }, [diagBottleneck]);

  // Selected Diagnostic Budget Item
  const activeDiagBudget = useMemo(() => {
    return diagnosticBudgets.find(b => b.id === diagBudget) || diagnosticBudgets[0];
  }, [diagBudget]);

  // Active Engagement Tier
  const activeTier = useMemo(() => {
    return engagementTiers.find(t => t.id === activeTierId) || engagementTiers[1];
  }, [activeTierId]);

  // Active Corridor Details
  const activeCorridorName = sectorCorridorMatrix[activeCorridorIdx].corridor;
  const currentCorridorInfo = corridorDetails[activeCorridorName] || corridorDetails['Patia & Infocity'];

  return (
    <div className={styles.page}>
      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO COMMAND CENTER (FITS SINGLE WINDOW, CENTERED EYEBROW)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlowOverlay} />
        <div className="container">
          {/* Centered Eyebrow */}
          <div className={styles.heroEyebrowCenter}>
            <ScrollReveal>
              <div className="eyebrow eyebrow-center">
                <span className="eyebrow-dot" />
                12 SPECIALIZED SECTORS IN BHUBANESWAR & ODISHA
              </div>
            </ScrollReveal>
          </div>

          <div className={styles.heroDualPane}>
            {/* Left Pane: Strategic Positioning & Sector Launcher */}
            <div className={styles.heroLeftPane}>
              <ScrollReveal>
                <h1 className={`display-xl ${styles.heroTitle}`}>
                  Bhubaneswar Digital Marketing<br />
                  <span className="accent-gradient">Built for Your Specific Industry.</span>
                </h1>
                <p className={`body-lg ${styles.heroSub}`}>
                  Generic marketing fails because every industry has unique customer psychology, sales cycles, and pricing dynamics. We build bespoke acquisition engines tailored specifically to your sector in Bhubaneswar.
                </p>

                <div className={styles.heroCtaRow}>
                  <BeamButton
                    href="#sector-showcase"
                    label="Explore Sector Playbooks ↓"
                    size="md"
                  />
                  <Link href="/contact" className={styles.heroSecondaryBtn}>
                    Claim Sector Growth Blueprint <span>→</span>
                  </Link>
                </div>

                {/* Direct Access Quick Sector Chips */}
                <div className={styles.heroTagsStrip}>
                  <span className={styles.heroTagsLabel}>DIRECT SECTOR ACCESS:</span>
                  <div className={styles.heroTagsList}>
                    {industryCatalog.map(ind => {
                      const isSelected = ind.id === selectedIndustryId;
                      return (
                        <button
                          key={ind.id}
                          type="button"
                          className={`${styles.heroTagBtn} ${isSelected ? styles.heroTagBtnActive : ''}`}
                          onClick={() => {
                            setSelectedIndustryId(ind.id);
                            const el = document.getElementById(`sector-card-${ind.id}`);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            else {
                              const s = document.getElementById('sector-showcase');
                              if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                        >
                          <span style={{ marginRight: 4 }}>{sectorIcons[ind.id] || '⚡'}</span>
                          {ind.shortTitle}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Pane: Visual Operations Cockpit */}
            <div className={styles.heroRightPane}>
              <ScrollReveal delay={120}>
                <div className={styles.heroVisualCockpit}>
                  <div className={styles.heroVisualInner}>
                    <Image
                      src="/images/dashboard_hero.jpg"
                      alt="Marketing Copilot Sector Operations Command Center"
                      fill
                      priority
                      className={styles.heroImg}
                    />
                    <div className={styles.heroImgOverlay} />
                    <div className={styles.heroCornerTL} />
                    <div className={styles.heroCornerBR} />

                    {/* Floating Frosted Glass KPI Badges - Non-colliding */}
                    <div className={`${styles.floatingKpiBadge} ${styles.kpiTopLeft}`}>
                      <span className={styles.kpiIcon}>🏢</span>
                      <div className={styles.kpiContent}>
                        <div className={styles.kpiValue}>90+ Inbound Buyers / Mo</div>
                        <div className={styles.kpiSub}>Real Estate • Patia Corridor</div>
                      </div>
                    </div>

                    <div className={`${styles.floatingKpiBadge} ${styles.kpiBottomRight}`}>
                      <span className={styles.kpiIcon}>🏥</span>
                      <div className={styles.kpiContent}>
                        <div className={styles.kpiValue}>+190% Patient Calls</div>
                        <div className={styles.kpiSub}>Healthcare • Saheed Nagar 3-Pack</div>
                      </div>
                    </div>

                    {/* Center Bottom Live Intelligence Pill */}
                    <div className={styles.heroLiveCenterPill}>
                      <span className={styles.pulseDotGreen} />
                      <span>LIVE ODISHA SECTOR INTELLIGENCE • 12 VERTICALS MONITORED</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: ELEVATED MARQUEE PROOF STRIP
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.dataStripSection}>
        <div className="container">
          <div className={styles.dataStripGlassPlate}>
            <div className={styles.dataStripItem}>
              <span className={styles.dataStripVal}>₹25Cr+</span>
              <span className={styles.dataStripLabel}>Attributed Client Revenue in Odisha</span>
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.dataStripItem}>
              <span className={styles.dataStripVal}>150+</span>
              <span className={styles.dataStripLabel}>Bhubaneswar Businesses Scaled</span>
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.dataStripItem}>
              <span className={styles.dataStripVal}>12</span>
              <span className={styles.dataStripLabel}>Specialized Sector Playbooks</span>
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.dataStripItem}>
              <span className={styles.dataStripVal}>&lt; 0.8s</span>
              <span className={styles.dataStripLabel}>Next.js High-Speed Web Infrastructure</span>
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.dataStripItem}>
              <span className={styles.dataStripVal}>98%</span>
              <span className={styles.dataStripLabel}>Annual Client Retention Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: THE 12-SECTOR BENTO SHOWCASE (REPLACES OLD WORKSTATION)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.sectorShowcaseSection} id="sector-showcase">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              THE 12 SPECIALIZED SECTOR ARCHITECTURES
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Bespoke Industry Acquisition Engines.<br />
              <span className="accent-gradient">Engineered for Bhubaneswar Commercial Growth.</span>
            </h2>
            <p className={styles.sectionSub}>
              Generic marketing burns budgets because every industry has distinct customer psychology, sales velocity, and pricing dynamics in Odisha. Explore our audited playbooks below.
            </p>

            {/* Interactive Category Filter Pills */}
            <div className={styles.sectorFilterRow}>
              {sectorGroups.map(grp => (
                <button
                  key={grp.id}
                  type="button"
                  className={`${styles.sectorFilterBtn} ${activeSectorGroup === grp.id ? styles.sectorFilterBtnActive : ''}`}
                  onClick={() => setActiveSectorGroup(grp.id)}
                >
                  {grp.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Sector Bento Grid */}
          <div className={styles.sectorBentoGrid}>
            {filteredIndustries.map((ind) => (
              <div key={ind.id} id={`sector-card-${ind.id}`} className={styles.sectorBentoCard}>
                {/* Top Badge & Metric Row */}
                <div className={styles.cardTopRow}>
                  <div className={styles.cardSectorNumBadge}>
                    <span className={styles.cardNum}>SECTOR {ind.num}</span>
                    <span className={styles.cardCategoryTag}>{ind.category}</span>
                  </div>
                  <div className={styles.cardMetricPill}>
                    <span className={styles.cardMetricVal}>{ind.metric}</span>
                    <span className={styles.cardMetricLabel}>{ind.metricLabel.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Sector Title & Tagline */}
                <div className={styles.cardHeader}>
                  <span className={styles.cardSectorIcon}>{sectorIcons[ind.id] || '⚡'}</span>
                  <div className={styles.cardTitleWrap}>
                    <h3 className={styles.cardTitle}>{ind.title}</h3>
                    <p className={styles.cardTagline}>{ind.tagline}</p>
                  </div>
                </div>

                {/* Image Window */}
                <div className={styles.cardImageFrame}>
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className={styles.cardImg}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.cardImgOverlay} />
                  <div className={styles.cardLocationTag}>
                    📍 {ind.playbook.clientLocation}
                  </div>
                  <div className={styles.cardAnchorTag}>
                    ✓ {ind.playbook.clientAnchor.split('&')[0]}
                  </div>
                </div>

                {/* Strategic Comparison: Problem vs Solution */}
                <div className={styles.cardStrategyBox}>
                  <div className={styles.cardProblemPill}>
                    <span className={styles.problemTag}>⚠️ BOTTLENECK</span>
                    <p className={styles.problemText}>{ind.playbook.bottlenecks[0]}</p>
                  </div>
                  <div className={styles.cardSolutionPill}>
                    <span className={styles.solutionTag}>⚡ OUR MOAT</span>
                    <p className={styles.solutionText}>{ind.playbook.solutions[0]}</p>
                  </div>
                </div>

                {/* Channels Micro Badges */}
                <div className={styles.cardServicesStrip}>
                  {ind.services.slice(0, 3).map((srv, idx) => (
                    <span key={idx} className={styles.serviceMicroTag}>
                      {srv}
                    </span>
                  ))}
                </div>

                {/* Card Footer: Benchmark & Direct Action */}
                <div className={styles.cardFooter}>
                  <div className={styles.cardBenchmarkWell}>
                    <span className={styles.benchVal}>{ind.playbook.benchmarks[0]?.val}</span>
                    <span className={styles.benchLabel}>{ind.playbook.benchmarks[0]?.label}</span>
                  </div>
                  <Link href="/contact" className={styles.cardDeployBtn}>
                    Deploy Playbook <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: CROSS-SECTOR COMMERCIAL BENCHMARK MATRIX TABLE
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.tableSection} id="sector-matrix">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              EXECUTIVE COMPARISON MATRIX
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Cross-Sector Performance Benchmarks<br />
              <span className="accent-gradient">Audited Across Bhubaneswar Markets.</span>
            </h2>
            <p className={styles.sectionSub}>
              A comprehensive data matrix comparing customer acquisition cost, conversion velocity, primary channels, and proven client anchors across all 12 commercial sectors in Odisha.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className={styles.tableContainer}>
              <table className={styles.matrixTable}>
                <thead>
                  <tr>
                    <th>SECTOR VERTICAL</th>
                    <th>TYPICAL CPL (BHUBANESWAR)</th>
                    <th>PRIMARY ACQUISITION ENGINE</th>
                    <th>TARGET ROAS / YIELD</th>
                    <th>CONVERSION VELOCITY</th>
                    <th>CLIENT ANCHOR</th>
                  </tr>
                </thead>
                <tbody>
                  {industryCatalog.map((ind) => (
                    <tr key={ind.id} onClick={() => {
                      setSelectedIndustryId(ind.id);
                      const el = document.getElementById(`sector-card-${ind.id}`) || document.getElementById('sector-showcase');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}>
                      <td className={styles.tableSectorCell}>
                        <span className={styles.tableSectorIcon}>{sectorIcons[ind.id] || '⚡'}</span>
                        <span className={styles.tableSectorTitle}>{ind.title}</span>
                      </td>
                      <td className={styles.tableMetricCell}>
                        <span className={styles.metricPill}>{ind.metric}</span>
                      </td>
                      <td className={styles.tableChannelCell}>
                        {ind.services[0]} &bull; {ind.services[1]}
                      </td>
                      <td className={styles.tableBadgeCell}>
                        <span className={styles.badgePill}>{ind.badge}</span>
                      </td>
                      <td className={styles.tableVelocityCell}>
                        {ind.playbook.benchmarks[0]?.val || 'Verified'}
                      </td>
                      <td className={styles.tableAnchorCell}>
                        {ind.playbook.clientAnchor.split('&')[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: HYPERLOCAL CORRIDOR DISTRIBUTION CONSOLE
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.corridorSection} id="sector-corridors">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              GEOGRAPHIC FOOTPRINT
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Bhubaneswar Commercial Corridors<br />
              <span className="accent-gradient">Sector Density & Intent Mapping.</span>
            </h2>
            <p className={styles.sectionSub}>
              How we tailor campaigns to the demographic density, buyer purchasing power, and local traffic patterns of each commercial node in Odisha.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.corridorConsole}>
              {/* Left Column: Corridor Selector List */}
              <div className={styles.corridorListPane}>
                <div className={styles.corridorListHeader}>
                  <span>COMMERCIAL CORRIDORS</span>
                  <span>SEARCH VOL</span>
                </div>
                {sectorCorridorMatrix.map((c, idx) => {
                  const isSelected = activeCorridorIdx === idx;
                  return (
                    <button
                      key={c.corridor}
                      type="button"
                      className={`${styles.corridorItemBtn} ${isSelected ? styles.corridorItemBtnActive : ''}`}
                      onClick={() => setActiveCorridorIdx(idx)}
                    >
                      <div className={styles.corridorRadioDot}>
                        {isSelected && <span className={styles.radioInner} />}
                      </div>
                      <div className={styles.corridorItemInfo}>
                        <div className={styles.corridorItemName}>{c.corridor}</div>
                        <div className={styles.corridorItemBadge}>{c.badge}</div>
                      </div>
                      <div className={styles.corridorItemMetric}>{c.metric.split(' ')[0]}</div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Corridor Deep-Dive Intelligence Display */}
              <div className={styles.corridorDetailPane}>
                <div className={styles.corridorDetailHeader}>
                  <div className={styles.corridorDetailBadge}>
                    📍 ACTIVE CORRIDOR NODE
                  </div>
                  <h3 className={styles.corridorDetailTitle}>
                    {activeCorridorName}
                  </h3>
                  <p className={styles.corridorDetailSub}>
                    <strong>Dominant Focus:</strong> {sectorCorridorMatrix[activeCorridorIdx].focus}
                  </p>
                </div>

                <div className={styles.corridorMetricsRow}>
                  <div className={styles.corridorStatWell}>
                    <span className={styles.corridorStatVal}>
                      {sectorCorridorMatrix[activeCorridorIdx].metric}
                    </span>
                    <span className={styles.corridorStatLabel}>Monthly In-Market Search Queries</span>
                  </div>
                  <div className={styles.corridorStatWell}>
                    <span className={styles.corridorStatVal}>
                      {currentCorridorInfo.purchasingPower.split('(')[0]}
                    </span>
                    <span className={styles.corridorStatLabel}>Buyer Purchasing Power</span>
                  </div>
                  <div className={styles.corridorStatWell}>
                    <span className={styles.corridorStatVal}>
                      {currentCorridorInfo.conversionSpeed.split('(')[0]}
                    </span>
                    <span className={styles.corridorStatLabel}>Decision Turnaround Speed</span>
                  </div>
                </div>

                {/* Hotspots & Target Pin-Codes */}
                <div className={styles.corridorInfoGrid}>
                  <div className={styles.corridorInfoCard}>
                    <span className={styles.infoCardLabel}>TARGET PIN CODES & NODES:</span>
                    <div className={styles.pinCodeTags}>
                      {currentCorridorInfo.pinCodes.map(pin => (
                        <span key={pin} className={styles.pinTag}>PIN: {pin}</span>
                      ))}
                      {currentCorridorInfo.hotspots.slice(0, 3).map(h => (
                        <span key={h} className={styles.hotspotTag}>• {h}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.corridorInfoCard}>
                    <span className={styles.infoCardLabel}>TOP COMMERCIAL SEARCH QUERIES:</span>
                    <div className={styles.queryList}>
                      {currentCorridorInfo.queries.map(q => (
                        <span key={q} className={styles.queryTag}>&ldquo;{q}&rdquo;</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.corridorClientRow}>
                  <span className={styles.corridorClientLabel}>VERIFIED CLIENT ANCHOR:</span>
                  <span className={styles.corridorClientVal}>{sectorCorridorMatrix[activeCorridorIdx].anchor}</span>
                </div>

                <div style={{ marginTop: 24 }}>
                  <BeamButton
                    href="/contact"
                    label={`Dominate ${activeCorridorName} Market →`}
                    size="md"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: INTERACTIVE GROWTH DIAGNOSTIC (STRATEGY FINDER)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.diagnosticSection} id="sector-diagnostic">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              INTERACTIVE REVENUE DIAGNOSTIC
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Find the Exact Growth Engine<br />
              <span className="accent-gradient">For Your Sector & Budget.</span>
            </h2>
            <p className={styles.sectionSub}>
              Select your sector, primary bottleneck, and monthly budget below to instantly reveal your custom acquisition architecture and projected lead velocity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.diagnosticConsole}>
              {/* Step 1: Sector Selection */}
              <div className={styles.diagStep}>
                <div className={styles.diagStepHeader}>
                  <span className={styles.diagStepNum}>01</span>
                  <span className={styles.diagStepTitle}>SELECT YOUR INDUSTRY SECTOR:</span>
                </div>
                <div className={styles.diagOptionsGrid}>
                  {diagnosticSectors.map(s => {
                    const isSelected = diagSector === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        className={`${styles.diagOptionBtn} ${isSelected ? styles.diagOptionBtnActive : ''}`}
                        onClick={() => setDiagSector(s.id)}
                      >
                        <span className={styles.diagBtnIcon}>{s.icon}</span>
                        <span>{s.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Bottleneck Selection */}
              <div className={styles.diagStep}>
                <div className={styles.diagStepHeader}>
                  <span className={styles.diagStepNum}>02</span>
                  <span className={styles.diagStepTitle}>IDENTIFY YOUR PRIMARY BOTTLENECK:</span>
                </div>
                <div className={styles.diagBottleneckGrid}>
                  {diagnosticBottlenecks.map(b => {
                    const isSelected = diagBottleneck === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        className={`${styles.diagBottleneckBtn} ${isSelected ? styles.diagBottleneckBtnActive : ''}`}
                        onClick={() => setDiagBottleneck(b.id)}
                      >
                        <div className={styles.bottleneckLabel}>{b.label}</div>
                        <div className={styles.bottleneckImpact}>{b.impact}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Budget Selection */}
              <div className={styles.diagStep}>
                <div className={styles.diagStepHeader}>
                  <span className={styles.diagStepNum}>03</span>
                  <span className={styles.diagStepTitle}>MONTHLY MARKETING SPEND RANGE:</span>
                </div>
                <div className={styles.diagBudgetGrid}>
                  {diagnosticBudgets.map(bg => {
                    const isSelected = diagBudget === bg.id;
                    return (
                      <button
                        key={bg.id}
                        type="button"
                        className={`${styles.diagBudgetBtn} ${isSelected ? styles.diagBudgetBtnActive : ''}`}
                        onClick={() => setDiagBudget(bg.id)}
                      >
                        <div className={styles.budgetAmount}>{bg.label}</div>
                        <div className={styles.budgetYield}>{bg.leadsRange}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Diagnostic Dynamic Recommendation Plane */}
              <div className={styles.diagOutputPlane}>
                <div className={styles.diagOutputTop}>
                  <span className={styles.outputBadge}>RECOMMENDED REVENUE ARCHITECTURE</span>
                  <div className={styles.outputTimeline}>⚡ {activeDiagBudget.timeline}</div>
                </div>

                <div className={styles.diagOutputHeadline}>
                  {activeDiagSector.name}: {activeDiagBottleneck.label} Solution
                </div>

                <div className={styles.diagStackBox}>
                  <span className={styles.stackLabel}>RECOMMENDED CORE TECH & FUNNEL STACK:</span>
                  <p className={styles.stackDesc}>{activeDiagSector.defaultStack}</p>
                </div>

                <div className={styles.diagMetricsRow}>
                  <div className={styles.diagMetricWell}>
                    <span className={styles.diagMetricVal}>{activeDiagBudget.leadsRange}</span>
                    <span className={styles.diagMetricLabel}>Estimated Monthly Inbound Inquiries</span>
                  </div>
                  <div className={styles.diagMetricWell}>
                    <span className={styles.diagMetricVal}>{activeDiagBudget.targetCpl}</span>
                    <span className={styles.diagMetricLabel}>Target Cost Per Verified Lead</span>
                  </div>
                  <div className={styles.diagMetricWell}>
                    <span className={styles.diagMetricVal}>
                      <SmoothCounter value="45%" duration={600} /> – 62%
                    </span>
                    <span className={styles.diagMetricLabel}>Average CPL Reduction vs Benchmarks</span>
                  </div>
                </div>

                <div className={styles.diagSampleLeadBox}>
                  <span className={styles.sampleLeadLabel}>SAMPLE VERIFIED LEAD PROFILE:</span>
                  <span className={styles.sampleLeadVal}>&ldquo;{activeDiagSector.sampleLead}&rdquo;</span>
                </div>

                <div style={{ textAlign: 'center', marginTop: 24 }}>
                  <BeamButton
                    href="/contact"
                    label="Claim This Exact Growth Blueprint →"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: EDITORIAL-GRADE FLAGSHIP TRANSFORMATION SHOWCASE
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.editorialSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.editorialSpread}>
              {/* Left Column: Full-Bleed Imagery with HUD Corner Accents */}
              <div className={styles.editorialImagePane}>
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Real Estate Case Study Bhubaneswar"
                  fill
                  className={styles.editorialImg}
                />
                <div className={styles.editorialImgOverlay} />
                <div className={styles.hudCornerTL} />
                <div className={styles.hudCornerBR} />
                <div className={styles.editorialPillLocation}>
                  📍 Utkal Heights • Patia, Bhubaneswar
                </div>
                <div className={styles.editorialPillAudit}>
                  ✓ 100% Attribution Verified
                </div>
              </div>

              {/* Right Column: Editorial Narrative & Pull Quote */}
              <div className={styles.editorialNarrativePane}>
                <div className={styles.editorialEyebrow}>FLAGSHIP SECTOR TRANSFORMATION</div>
                <h3 className={styles.editorialHeadline}>
                  &ldquo;Marketing Copilot transformed our property sales in Patia from zero to 90+ verified buyers every month.&rdquo;
                </h3>
                <p className={styles.editorialAuthor}>
                  <strong>Rajesh Mohapatra</strong> — Director of Marketing, Utkal Heights
                </p>

                <div className={styles.editorialDivider} />

                <div className={styles.editorialStory}>
                  <p>
                    Before partnering with Marketing Copilot, Utkal Heights was paying astronomical brokerage commissions to aggregators who sold the exact same lead to 5 competing builders in Patia.
                  </p>
                  <p>
                    We engineered a sub-second Next.js 3D virtual tour platform and deployed negative-shielded Google Search campaigns. Within 90 days, direct buyer site visits tripled at a verified cost of just ₹420 per visit.
                  </p>
                </div>

                <div className={styles.editorialMetricsStrip}>
                  <div className={styles.editorialMetricItem}>
                    <span className={styles.edMetricVal}>3X</span>
                    <span className={styles.edMetricLabel}>Inbound Qualified Buyers</span>
                  </div>
                  <div className={styles.editorialMetricItem}>
                    <span className={styles.edMetricVal}>₹420</span>
                    <span className={styles.edMetricLabel}>Cost Per Site Visit</span>
                  </div>
                  <div className={styles.editorialMetricItem}>
                    <span className={styles.edMetricVal}>0%</span>
                    <span className={styles.edMetricLabel}>Brokerage Commissions</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: SEGMENTED PARTNERSHIP TIER TERMINAL (NO 3-CARD FATIGUE)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.tierTerminalSection} id="sector-tiers">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow" style={{ margin: '0 auto 16px', textAlign: 'center' }}>
              <span className="eyebrow-dot" />
              PARTNERSHIP ARCHITECTURE
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Outcome-Oriented Engagement Models<br />
              <span className="accent-gradient">Transparent. Measurable. Guaranteed.</span>
            </h2>
            <p className={styles.sectionSub}>
              Select an engagement model below to inspect its deliverables, turnaround timelines, and commercial SLA commitments.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className={styles.tierConsole}>
              {/* Segmented Top Tab Bar */}
              <div className={styles.tierTabBar}>
                {engagementTiers.map(t => {
                  const isActive = t.id === activeTierId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      className={`${styles.tierTabBtn} ${isActive ? styles.tierTabBtnActive : ''}`}
                      onClick={() => setActiveTierId(t.id)}
                    >
                      <span className={styles.tierTabBadge}>{t.badge}</span>
                      <span className={styles.tierTabName}>{t.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tier Comprehensive Detail Plane */}
              <div className={styles.tierDetailPlane}>
                <div className={styles.tierDetailHeader}>
                  <div>
                    <h3 className={styles.tierDetailTitle}>{activeTier.name}</h3>
                    <p className={styles.tierDetailTagline}>{activeTier.tagline}</p>
                  </div>
                  <div className={styles.tierPriceBox}>
                    <span className={styles.tierPriceVal}>{activeTier.price}</span>
                    <span className={styles.tierPricePeriod}>{activeTier.period}</span>
                  </div>
                </div>

                <div className={styles.tierBodyGrid}>
                  {/* Deliverables Column */}
                  <div className={styles.tierDeliverablesCol}>
                    <div className={styles.tierColTitle}>INCLUDED REVENUE DELIVERABLES:</div>
                    <ul className={styles.tierCheckList}>
                      {activeTier.deliverables.map(d => (
                        <li key={d} className={styles.tierCheckItem}>
                          <span className={styles.greenCheckMedallion}>✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Commitments & Target Fit Column */}
                  <div className={styles.tierCommitmentsCol}>
                    <div className={styles.tierCommitmentBox}>
                      <div className={styles.commitmentLabel}>DEPLOYMENT TIMELINE:</div>
                      <div className={styles.commitmentVal}>⚡ {activeTier.timeline}</div>
                    </div>
                    <div className={styles.tierCommitmentBox}>
                      <div className={styles.commitmentLabel}>COMMERCIAL GUARANTEE:</div>
                      <div className={styles.commitmentVal}>🔒 {activeTier.guarantee}</div>
                    </div>
                    <div className={styles.tierCommitmentBox}>
                      <div className={styles.commitmentLabel}>RECOMMENDED SECTOR FIT:</div>
                      <div className={styles.commitmentVal}>{activeTier.targetSectors}</div>
                    </div>

                    <div style={{ marginTop: 24 }}>
                      <BeamButton
                        href="/contact"
                        label={`Initiate ${activeTier.name} →`}
                        size="lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 9: EXECUTIVE BESPOKE BOTTOM CONSULTATION BANNER
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.bottomBannerSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.bespokeBannerCard}>
              <div className={styles.bannerGlow} />
              <div className={styles.bannerBadge}>
                CONFIDENTIAL SECTOR STRATEGY SESSION
              </div>
              <h2 className={styles.bannerTitle}>
                Ready to Monopolize Your Industry<br />
                in Bhubaneswar & Odisha?
              </h2>
              <p className={styles.bannerSub}>
                Book a 45-minute growth diagnostic session with our senior revenue engineers. We will audit your current market visibility, benchmark your competitors, and deliver a custom 90-day acquisition roadmap.
              </p>

              <div className={styles.bannerButtonsRow}>
                <BeamButton
                  href="/contact"
                  label="Claim Free Sector Growth Blueprint →"
                  size="lg"
                />
                <a href="tel:+918763570630" className={styles.bannerCallBtn}>
                  📞 Call +91 8763570630
                </a>
              </div>

              <div className={styles.bannerFooterTrust}>
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
