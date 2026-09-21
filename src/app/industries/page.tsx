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

// Interactive Sector Revenue & ROI Simulator Models
const sectorSimulations: Record<string, {
  name: string;
  icon: string;
  category: string;
  tagline: string;
  baseCpl: number;
  closeRate: string;
  avgDealValue: string;
  typicalRoas: string;
  pipelineMultiplier: number;
  primaryChannels: string[];
  stages: { step: string; title: string; desc: string }[];
  verifiedAnchor: string;
}> = {
  'real-estate': {
    name: 'Real Estate & Builders',
    icon: '🏢',
    category: 'Property & Living',
    tagline: 'High-ticket luxury apartment & villa buyers across Patia, Nayapalli & Pahala',
    baseCpl: 380,
    closeRate: '4% – 7%',
    avgDealValue: '₹65L – ₹2.5Cr',
    typicalRoas: '12X – 24X Pipeline',
    pipelineMultiplier: 85000,
    primaryChannels: ['Google Search (Exact-Match)', 'Meta 3D Tour Retargeting', 'WhatsApp OTP Routing'],
    stages: [
      { step: '01', title: 'High-Intent Search Shield', desc: 'Capture active Bhubaneswar buyers searching "3 BHK in Patia" while negative keywords block brokers.' },
      { step: '02', title: 'Sub-Second Virtual Tour', desc: 'Next.js 15 interactive 3D floor plan loads in 0.7s, collecting verified OTP phone numbers.' },
      { step: '03', title: 'Instant Sales Concierge', desc: 'Direct WhatsApp CRM bridge sends site visit calendar invite within 90 seconds of inquiry.' },
    ],
    verifiedAnchor: 'Utkal Heights & DN Homes Corridors',
  },
  'healthcare': {
    name: 'Healthcare & Clinics',
    icon: '🏥',
    category: 'Healthcare & Wellness',
    tagline: 'Patient footfall & specialist OP consultations across Saheed Nagar & Khandagiri',
    baseCpl: 210,
    closeRate: '22% – 35%',
    avgDealValue: '₹1,500 – ₹45,000',
    typicalRoas: '5.2X – 8.6X',
    pipelineMultiplier: 12000,
    primaryChannels: ['Google Maps 3-Pack SEO', 'Doctor Video Ads', 'Automated Slot Booking Bot'],
    stages: [
      { step: '01', title: 'Local Maps Dominance', desc: 'Rank #1 in Google Local 3-Pack across 12 Bhubaneswar pin codes for "Best Clinic near me".' },
      { step: '02', title: 'Doctor Trust Architecture', desc: 'Video case-studies & patient recovery proof build instant clinical authority.' },
      { step: '03', title: 'Automated OP Scheduler', desc: 'WhatsApp bot confirms appointment slot, sends location pin, and eliminates no-shows.' },
    ],
    verifiedAnchor: 'Sparsh & Apollo Doctor Clusters',
  },
  'education': {
    name: 'Education & Coaching',
    icon: '🎓',
    category: 'EdTech & Institutes',
    tagline: 'NEET, JEE, CBSE & university admissions across Chandrasekharpur & KIIT Road',
    baseCpl: 260,
    closeRate: '12% – 18%',
    avgDealValue: '₹45,000 – ₹1,80,000',
    typicalRoas: '6.8X – 10.5X',
    pipelineMultiplier: 28000,
    primaryChannels: ['Aptitude Lead Magnet', 'Meta Video Testimonials', 'Counselor Telecalling Bridge'],
    stages: [
      { step: '01', title: 'Scholarship Lead Magnet', desc: 'Attract students with free online mock tests and syllabus blueprints.' },
      { step: '02', title: 'Parent Video Proof', desc: 'Rankers testimonials and faculty credentials delivered via Instagram & YouTube Shorts.' },
      { step: '03', title: 'Counselor CRM Routing', desc: 'Instant counselor callback and campus visit scheduling via automated WhatsApp workflow.' },
    ],
    verifiedAnchor: 'Chandrasekharpur & KIIT Road Hub',
  },
  'retail-ecom': {
    name: 'Retail & E-commerce',
    icon: '🛍️',
    category: 'Retail & Consumer',
    tagline: 'High-AOV retail footfall & Odisha handloom/D2C pan-India shipping',
    baseCpl: 140,
    closeRate: '28% – 42%',
    avgDealValue: '₹1,200 – ₹15,000',
    typicalRoas: '4.5X – 7.8X Direct ROAS',
    pipelineMultiplier: 8500,
    primaryChannels: ['Google Shopping / PMax', 'Meta Catalog Ads', '3-Stage Abandoned Cart Recovery'],
    stages: [
      { step: '01', title: 'Hyperlocal & Pan-India Feeds', desc: 'Automated product sync to Google Shopping and Meta Catalog with real-time stock.' },
      { step: '02', title: 'Sub-Second Checkout UI', desc: 'Frictionless Next.js checkout with 1-click UPI and dynamic pin code delivery check.' },
      { step: '03', title: 'WhatsApp Cart Recovery', desc: '3-stage automated reminder recovering 24% of abandoned checkouts with exclusive perks.' },
    ],
    verifiedAnchor: 'Bhawani Mall & Janpath Retail Strip',
  },
  'construction': {
    name: 'B2B & Industrial Infra',
    icon: '🏗️',
    category: 'B2B & Manufacturing',
    tagline: 'High-value PEB, structural steel, warehousing & commercial tender RFQs',
    baseCpl: 620,
    closeRate: '6% – 11%',
    avgDealValue: '₹8.5L – ₹1.5Cr',
    typicalRoas: '14X – 32X Pipeline',
    pipelineMultiplier: 240000,
    primaryChannels: ['Technical B2B SEO', 'LinkedIn Account-Based Ads', 'Interactive RFQ Estimator'],
    stages: [
      { step: '01', title: 'Engineering Topic Clusters', desc: 'Rank for high-intent B2B terms like "PEB industrial sheds Odisha" and "warehouse fabrication".' },
      { step: '02', title: 'Interactive RFQ Estimator', desc: 'Allow procurement managers to calculate square-footage estimates and submit tender specs.' },
      { step: '03', title: 'Director-Level Routing', desc: 'Lead dossier with project specs immediately sent to MD/Sales Director email & WhatsApp.' },
    ],
    verifiedAnchor: 'Mancheswar & Rasulgarh Industrial Belt',
  },
  'tech-saas': {
    name: 'Tech, IT & SaaS',
    icon: '💻',
    category: 'Technology',
    tagline: 'Enterprise software demos, IT staffing contracts & global SaaS trials',
    baseCpl: 480,
    closeRate: '10% – 16%',
    avgDealValue: '₹1.2L – ₹25L ARR',
    typicalRoas: '8X – 15X Pipeline',
    pipelineMultiplier: 110000,
    primaryChannels: ['Interactive Product Demo', 'Google Search Intent', 'LinkedIn Retargeting'],
    stages: [
      { step: '01', title: 'Intent Search & Comparison', desc: 'Capture buyers searching for enterprise software alternatives and IT solutions.' },
      { step: '02', title: 'Interactive Product Tour', desc: 'Self-guided interactive product tour that delivers the "aha!" moment in under 60 seconds.' },
      { step: '03', title: 'Automated Demo Booking', desc: 'Frictionless calendar scheduling synced with Zoom and enterprise sales reps.' },
    ],
    verifiedAnchor: 'Infocity & DLF Cybercity Corridor',
  },
};

function formatInr(val: number): string {
  if (val >= 10000000) {
    return `₹${(val / 10000000).toFixed(1)} Cr`;
  }
  if (val >= 100000) {
    return `₹${(val / 100000).toFixed(1)} L`;
  }
  return `₹${val.toLocaleString('en-IN')}`;
}

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

  // Controls 4 cards vs all 12 cards in Section 3
  const [showAllCards, setShowAllCards] = useState<boolean>(false);

  const visibleIndustries = useMemo(() => {
    if (showAllCards) return filteredIndustries;
    return filteredIndustries.slice(0, 4);
  }, [filteredIndustries, showAllCards]);

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

  // Simulator State
  const [simSector, setSimSector] = useState<string>('real-estate');
  const [simSpend, setSimSpend] = useState<number>(75000);
  const [simCorridor, setSimCorridor] = useState<string>('Patia & Infocity');

  const activeSim = sectorSimulations[simSector] || sectorSimulations['real-estate'];
  const simLeadsMin = Math.max(1, Math.round((simSpend / activeSim.baseCpl) * 0.85));
  const simLeadsMax = Math.max(1, Math.round((simSpend / activeSim.baseCpl) * 1.25));
  const simPipelineMin = simLeadsMin * activeSim.pipelineMultiplier;
  const simPipelineMax = simLeadsMax * activeSim.pipelineMultiplier;

  return (
    <div className={styles.page}>
      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO COMMAND CENTER (FITS SINGLE WINDOW, CENTERED EYEBROW)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlowOverlay} />
        <div className="container">
          <div className={styles.heroDualPane}>
            {/* Left Pane: Strategic Positioning & Sector Launcher */}
            <div className={styles.heroLeftPane}>
              <ScrollReveal>
                <div className="eyebrow" style={{ marginBottom: 12 }}>
                  <span className="eyebrow-dot" />
                  SPECIALIZED INDUSTRY ARCHITECTURES &bull; BHUBANESWAR &amp; ODISHA
                </div>
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

                {/* Priority Direct Sector Access — Only 4 Visible + See All Button */}
                <div className={styles.heroTagsStrip}>
                  <span className={styles.heroTagsLabel}>PRIORITY SECTORS:</span>
                  <div className={styles.heroTagsList}>
                    {industryCatalog.slice(0, 4).map(ind => {
                      const isSelected = ind.id === selectedIndustryId;
                      return (
                        <button
                          key={ind.id}
                          type="button"
                          className={`${styles.heroTagBtn} ${isSelected ? styles.heroTagBtnActive : ''}`}
                          onClick={() => {
                            setSelectedIndustryId(ind.id);
                            const el = document.getElementById(`sector-card-${ind.id}`) || document.getElementById('sector-showcase');
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                        >
                          <span style={{ marginRight: 4 }}>{sectorIcons[ind.id] || '⚡'}</span>
                          {ind.shortTitle}
                        </button>
                      );
                    })}

                    <a
                      href="#sector-showcase"
                      className={styles.heroSeeMoreBtn}
                    >
                      See All 12 Sectors ↓
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Pane: Clean Visual Operations Cockpit (No numbers/overlapping badges) */}
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
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: THE 12-SECTOR BENTO SHOWCASE (4 VISIBLE + SEE MORE)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.sectorShowcaseSection} id="sector-showcase">
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionEyebrowCenter}>
              <div className="eyebrow eyebrow-center">
                <span className="eyebrow-dot" />
                THE 12 SPECIALIZED SECTOR ARCHITECTURES
              </div>
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

          {/* Sector Bento Grid (4 Visible by Default) */}
          <div className={styles.sectorBentoGrid}>
            {visibleIndustries.map((ind) => (
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

          {/* Load More / Show Less Sectors Toggle Button */}
          {filteredIndustries.length > 4 && (
            <div className={styles.bentoShowMoreWrap}>
              <button
                type="button"
                className={styles.bentoShowMoreBtn}
                onClick={() => setShowAllCards(prev => !prev)}
              >
                <span>{showAllCards ? 'Show Less Sectors ↑' : `Explore All 12 Sectors (+${filteredIndustries.length - 4} More) ↓`}</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: INTERACTIVE SECTOR REVENUE & ROI SIMULATOR
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.simulatorSection} id="sector-calculator">
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionEyebrowCenter}>
              <div className="eyebrow eyebrow-center">
                <span className="eyebrow-dot" />
                SECTOR ROI &amp; REVENUE SIMULATOR
              </div>
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Estimate Your Sector Acquisition Yield.<br />
              <span className="accent-gradient">Live CPL &amp; Pipeline Projection Engine.</span>
            </h2>
            <p className={styles.sectionSub}>
              Select your commercial vertical, adjust your monthly ad spend, and instantly model your verified inbound lead volume, target CPL ceiling, and pipeline value in Bhubaneswar.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className={styles.simulatorCard}>
              {/* Top Bar: Sector Tabs Selector */}
              <div className={styles.simTopBar}>
                <div className={styles.simTopBarTitleWrap}>
                  <span className={styles.simLivePulse} />
                  <span className={styles.simTopBarTitle}>ODISHA SECTOR SIMULATOR v2.4</span>
                </div>
                <div className={styles.simSectorTabs}>
                  {Object.entries(sectorSimulations).map(([secKey, secData]) => {
                    const isSelected = simSector === secKey;
                    return (
                      <button
                        key={secKey}
                        type="button"
                        className={`${styles.simSectorTabBtn} ${isSelected ? styles.simSectorTabBtnActive : ''}`}
                        onClick={() => setSimSector(secKey)}
                      >
                        <span className={styles.simTabIcon}>{secData.icon}</span>
                        <span className={styles.simTabName}>{secData.name.split('&')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Dual-Pane Simulator Console */}
              <div className={styles.simBodyGrid}>
                {/* Left Column: Investment Sliders & Configuration */}
                <div className={styles.simControlsCol}>
                  {/* Spend Slider Box */}
                  <div className={styles.simControlCard}>
                    <div className={styles.simControlHeader}>
                      <span className={styles.simControlLabel}>MONTHLY AD INVESTMENT</span>
                      <span className={styles.simSpendBadge}>
                        ₹{simSpend.toLocaleString('en-IN')} <small>/ month</small>
                      </span>
                    </div>

                    {/* Tactile Skeuomorphic Range Slider */}
                    <div className={styles.simSliderWrap}>
                      <input
                        type="range"
                        min="25000"
                        max="300000"
                        step="5000"
                        value={simSpend}
                        onChange={(e) => setSimSpend(Number(e.target.value))}
                        className={styles.simRangeInput}
                        aria-label="Monthly Marketing Spend Range"
                      />
                      <div className={styles.simSliderTicks}>
                        <span>₹25K (Starter)</span>
                        <span>₹1.5L (Scale)</span>
                        <span>₹3L+ (Monopolize)</span>
                      </div>
                    </div>

                    {/* Quick Preset Buttons */}
                    <div className={styles.simPresetsRow}>
                      {[
                        { label: '₹35K', val: 35000, tag: 'Starter' },
                        { label: '₹75K', val: 75000, tag: 'Growth' },
                        { label: '₹1.5L', val: 150000, tag: 'Scale' },
                        { label: '₹2.5L', val: 250000, tag: 'Monopolize' },
                      ].map(preset => (
                        <button
                          key={preset.val}
                          type="button"
                          className={`${styles.simPresetBtn} ${simSpend === preset.val ? styles.simPresetBtnActive : ''}`}
                          onClick={() => setSimSpend(preset.val)}
                        >
                          <span className={styles.simPresetLabel}>{preset.label}</span>
                          <span className={styles.simPresetTag}>{preset.tag}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Corridor Picker */}
                  <div className={styles.simControlCard}>
                    <div className={styles.simControlHeader}>
                      <span className={styles.simControlLabel}>TARGET BHUBANESWAR CORRIDOR</span>
                      <span className={styles.simCorridorCurrent}>📍 {simCorridor}</span>
                    </div>
                    <div className={styles.simCorridorChips}>
                      {[
                        'Patia & Infocity',
                        'Saheed Nagar',
                        'Chandrasekharpur',
                        'Khandagiri & Nayapalli',
                        'All Bhubaneswar & Cuttack',
                      ].map(corridor => (
                        <button
                          key={corridor}
                          type="button"
                          className={`${styles.simCorridorChip} ${simCorridor === corridor ? styles.simCorridorChipActive : ''}`}
                          onClick={() => setSimCorridor(corridor)}
                        >
                          {corridor}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Commercial SLA Guarantee Pill */}
                  <div className={styles.simGuaranteeBox}>
                    <div className={styles.simGuaranteeIcon}>🔒</div>
                    <div className={styles.simGuaranteeMeta}>
                      <strong>100% Attribution &amp; CPL Ceiling Guarantee</strong>
                      <p>We lock in your maximum cost-per-verified-lead in writing before campaign launch. Zero duplicate or tire-kicker leads.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Live Calculated Output Cockpit */}
                <div className={styles.simResultsCol}>
                  {/* Selected Sector Top Banner */}
                  <div className={styles.simResultHeader}>
                    <div className={styles.simResultIconWrap}>
                      <span className={styles.simResultIcon}>{activeSim.icon}</span>
                    </div>
                    <div className={styles.simResultMeta}>
                      <div className={styles.simResultSectorTitle}>{activeSim.name}</div>
                      <div className={styles.simResultSectorTagline}>{activeSim.tagline}</div>
                    </div>
                    <div className={styles.simVerifiedBadge}>
                      ✓ {activeSim.verifiedAnchor}
                    </div>
                  </div>

                  {/* 4-Stat Live Metrics Grid */}
                  <div className={styles.simStatGrid}>
                    {/* Stat 1: Verified Leads */}
                    <div className={styles.simStatCard}>
                      <span className={styles.simStatLabel}>ESTIMATED INBOUND LEADS</span>
                      <div className={styles.simStatValWrap}>
                        <span className={styles.simStatValHighlight}>{simLeadsMin} – {simLeadsMax}</span>
                        <span className={styles.simStatUnit}>Leads / Mo</span>
                      </div>
                      <span className={styles.simStatMicro}>OTP &amp; Phone Verified</span>
                    </div>

                    {/* Stat 2: Target CPL Ceiling */}
                    <div className={styles.simStatCard}>
                      <span className={styles.simStatLabel}>TARGET CPL CEILING</span>
                      <div className={styles.simStatValWrap}>
                        <span className={styles.simStatVal}>₹{activeSim.baseCpl}</span>
                        <span className={styles.simStatUnit}>max / lead</span>
                      </div>
                      <span className={styles.simStatMicroPositive}>↓ 48% vs Agency Avg</span>
                    </div>

                    {/* Stat 3: Pipeline Gross Yield */}
                    <div className={styles.simStatCard}>
                      <span className={styles.simStatLabel}>PROJECTED PIPELINE VALUE</span>
                      <div className={styles.simStatValWrap}>
                        <span className={styles.simStatValHighlight}>{formatInr(simPipelineMin)} – {formatInr(simPipelineMax)}</span>
                      </div>
                      <span className={styles.simStatMicro}>Based on {activeSim.avgDealValue} AOV</span>
                    </div>

                    {/* Stat 4: Acquisition Multiplier */}
                    <div className={styles.simStatCard}>
                      <span className={styles.simStatLabel}>PROJECTED ACQUISITION YIELD</span>
                      <div className={styles.simStatValWrap}>
                        <span className={styles.simStatVal}>{activeSim.typicalRoas}</span>
                      </div>
                      <span className={styles.simStatMicroPositive}>Close Rate: {activeSim.closeRate}</span>
                    </div>
                  </div>

                  {/* 3-Stage Acquisition Architecture Steps */}
                  <div className={styles.simStagesBox}>
                    <div className={styles.simStagesHeader}>
                      <span>3-STAGE {activeSim.name.toUpperCase()} ACQUISITION ENGINE</span>
                      <span>DEPLOYED IN 72 HOURS</span>
                    </div>
                    <div className={styles.simStagesList}>
                      {activeSim.stages.map((stg) => (
                        <div key={stg.step} className={styles.simStageItem}>
                          <div className={styles.simStageStepBadge}>{stg.step}</div>
                          <div className={styles.simStageContent}>
                            <div className={styles.simStageTitle}>{stg.title}</div>
                            <div className={styles.simStageDesc}>{stg.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Bottom Bar */}
                  <div className={styles.simActionRow}>
                    <div className={styles.simActionLeft}>
                      <span className={styles.simActionNote}>Ready to deploy this exact engine for {activeSim.name}?</span>
                      <span className={styles.simActionSub}>Custom commercial roadmap prepared for your specific location in Odisha.</span>
                    </div>
                    <BeamButton
                      href="/contact"
                      label={`Lock In ₹${activeSim.baseCpl} CPL Ceiling →`}
                      size="md"
                    />
                  </div>
                </div>
              </div>
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
            <div className={styles.sectionEyebrowCenter}>
              <div className="eyebrow eyebrow-center">
                <span className="eyebrow-dot" />
                GEOGRAPHIC FOOTPRINT
              </div>
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
            <div className={styles.sectionEyebrowCenter}>
              <div className="eyebrow eyebrow-center">
                <span className="eyebrow-dot" />
                INTERACTIVE REVENUE DIAGNOSTIC
              </div>
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
            <div className={styles.sectionEyebrowCenter}>
              <div className="eyebrow eyebrow-center">
                <span className="eyebrow-dot" />
                PARTNERSHIP ARCHITECTURE &bull; COMMERCIAL ENGAGEMENT MODELS
              </div>
            </div>
            <h2 className={`display-md ${styles.sectionHeading}`}>
              Commercial Partnership Architectures<br />
              <span className="accent-gradient">Calibrated for Guaranteed ROI in Odisha.</span>
            </h2>
            <p className={styles.sectionSub}>
              Choose the exact engagement model calibrated to your business scale and commercial ambitions. Every tier includes guaranteed CPL ceilings, audited attribution, and dedicated revenue pods in Bhubaneswar.
            </p>

            {/* Executive Trust Badges in Section Header */}
            <div className={styles.tierHeaderTrustStrip}>
              <span className={styles.tierTrustPill}>
                <span className={styles.tierTrustDot} />
                🔒 Written CPL Ceiling Guarantee
              </span>
              <span className={styles.tierTrustPill}>
                <span className={styles.tierTrustDot} />
                ⚡ Live in 72 Hours
              </span>
              <span className={styles.tierTrustPill}>
                <span className={styles.tierTrustDot} />
                📊 Weekly Audited Attribution
              </span>
              <span className={styles.tierTrustPill}>
                <span className={styles.tierTrustDot} />
                🚫 Zero Long-Term Lock-in
              </span>
            </div>
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
