'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SEOCapabilitiesWorkstation.module.css';

interface CapabilityTab {
  id: string;
  tabLabel: string;
  tabIcon: string;
  headline: string;
  subhead: string;
  deliverables: string[];
  metrics: { label: string; value: string; note: string }[];
  codeSnippetTitle: string;
  codeSnippet: string;
}

const capabilities: CapabilityTab[] = [
  {
    id: 'vitals',
    tabLabel: 'Core Web Vitals & Speed',
    tabIcon: '⚡',
    headline: 'Sub-Second Edge Rendering & Zero Crawl Bloat',
    subhead: 'Google strictly favors websites that load under 1.2 seconds on mobile networks in Odisha. We optimize Next.js rendering paths, server-side caching, and eliminate technical crawl debt.',
    deliverables: [
      'Largest Contentful Paint (LCP) optimized under 0.8s',
      'Cumulative Layout Shift (CLS) stabilized to 0.00',
      'First Input Delay (FID / INP) compressed under 50ms',
      'Automated Next-Gen WebP/AVIF image compression pipeline',
      'Crawl budget optimization & 404/redirect loop eradication',
    ],
    metrics: [
      { label: 'Mobile PageSpeed', value: '98/100', note: 'Google Lighthouse SLA' },
      { label: 'Average LCP', value: '0.74s', note: 'Bhubaneswar 4G/5G' },
      { label: 'Index Coverage', value: '100%', note: '0 Crawl Errors' },
    ],
    codeSnippetTitle: 'Next.js 15 Edge Cache & Meta Header Architecture',
    codeSnippet: `// next.config.mjs - Sub-second Cache & Core Web Vitals
export default {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  headers: async () => [{
    source: '/:path*',
    headers: [
      { key: 'X-Robots-Tag', value: 'index, follow, max-snippet:-1' },
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
    ],
  }],
};`,
  },
  {
    id: 'schema',
    tabLabel: 'Hyperlocal Geo-Schema & GBP',
    tabIcon: '📍',
    headline: 'Structured JSON-LD Data & Google 3-Pack Authority',
    subhead: 'We inject structured microdata directly into your site, connecting your business to Patia, Saheed Nagar, and Bhubaneswar geolocations so Google knows exactly who to show first.',
    deliverables: [
      'Schema.org LocalBusiness & Organization JSON-LD markup',
      'Google Business Profile complete taxonomy & category mapping',
      'Hyperlocal review collection system with automated SMS triggers',
      'Geo-tagged image EXIF metadata and Bhubaneswar NAP citations',
      'Map pack proximity radius expansion across Cuttack & Khordha',
    ],
    metrics: [
      { label: 'Map 3-Pack Rank', value: 'Top 3', note: '14 Target Keywords' },
      { label: 'Verified Reviews', value: '100% 5★', note: 'Sentiment Optimized' },
      { label: 'Proximity Reach', value: '15 km', note: 'Across Twin Cities' },
    ],
    codeSnippetTitle: 'Schema.org JSON-LD LocalBusiness Geo Injection',
    codeSnippet: `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nova Spark Client Bhubaneswar",
  "telephone": "+91-9437168434",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Infocity Road, Patia",
    "addressLocality": "Bhubaneswar",
    "postalCode": "751024",
    "addressRegion": "Odisha",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.2961,
    "longitude": 85.8245
  },
  "areaServed": ["Patia", "Saheed Nagar", "Nayapalli", "Cuttack"]
}`,
  },
  {
    id: 'clusters',
    tabLabel: 'Commercial Topic Clusters',
    tabIcon: '🎯',
    headline: 'High-Intent Search Architecture That Captures Buyers',
    subhead: 'Instead of vanity blog posts that drive zero revenue, we engineer authoritative pillar pages and topic clusters around transactional searches that commercial buyers make before purchasing.',
    deliverables: [
      'High-intent commercial keyword mapping across Bhubaneswar',
      'Search intent classification (Commercial, Transactional, Navigational)',
      'Entity-based internal linking architecture (Pillar & Cluster model)',
      'Conversion-engineered landing copy designed to turn clicks into calls',
      'Continuous rank tracking with automated competitor delta alerts',
    ],
    metrics: [
      { label: 'Target Search Volume', value: '45,000+', note: 'Monthly High-Intent' },
      { label: 'First Page Share', value: '78%', note: 'Within 90 Days' },
      { label: 'Est. Google CPC Saved', value: '₹1.8L/mo', note: 'Organic Value' },
    ],
    codeSnippetTitle: 'Commercial Keyword Mapping Matrix Sample',
    codeSnippet: `// High-Yield Bhubaneswar Search Intent Clusters
const clusterMapping = [
  { keyword: "best luxury apartments in patia", intent: "Commercial", cpcValue: "₹185" },
  { keyword: "interior designer in saheed nagar", intent: "Transactional", cpcValue: "₹140" },
  { keyword: "top business marketing company odisha", intent: "Decision", cpcValue: "₹210" },
  { keyword: "implant dentist near me bhubaneswar", intent: "Emergency", cpcValue: "₹165" },
];`,
  },
  {
    id: 'backlinks',
    tabLabel: 'Authoritative Regional PR & Links',
    tabIcon: '🔗',
    headline: 'Ethical, High-Domain Authority Editorial Mentions',
    subhead: 'Zero spam, zero automated link farms. We earn legitimate contextual backlinks from prominent Odisha news publications, trade journals, and high-DA industry authorities.',
    deliverables: [
      'Odisha regional press release syndication and editorial coverage',
      'Contextual backlinks on DR 50+ business and media portals',
      'Competitor backlink gap analysis to siphon top ranking juice',
      'Disavow tool auditing to protect against negative SEO attacks',
      '100% white-hat Google Penguin & SpamBrain compliant link velocity',
    ],
    metrics: [
      { label: 'Avg Domain Rating', value: 'DR 45–70', note: 'Verified Real Sites' },
      { label: 'Spam Score', value: '0% Spam', note: 'Strictly Safe Links' },
      { label: 'Referral Pipeline', value: '+35%', note: 'Direct Referral Traffic' },
    ],
    codeSnippetTitle: 'Authority Link Distribution Telemetry',
    codeSnippet: `// Verified Backlink Distribution Profile
const linkProfile = {
  anchorTextProfile: "70% Branded / 20% Partial Keyword / 10% Natural",
  referringDomains: ["Odisha Media Portals", "Industry Publications", "Regional Tech Portals"],
  spamScoreThreshold: "< 1% on Moz and Ahrefs index",
  growthTrajectory: "Compounding white-hat velocity",
};`,
  },
];

export default function SEOCapabilitiesWorkstation() {
  const [activeTabId, setActiveTabId] = useState(capabilities[0].id);
  const currentCapability = capabilities.find((c) => c.id === activeTabId) || capabilities[0];

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>Engineering Capabilities</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            The Technical Architecture Behind <span className="accent-gradient">#1 Rankings</span>
          </h2>
          <p className={styles.subhead}>
            Explore our four core algorithmic engineering disciplines. We don&apos;t just tweak meta tags; we engineer high-performance search systems.
          </p>
        </ScrollReveal>

        {/* Workstation Console */}
        <div className={styles.workstationWrapper}>
          {/* Tab Selector Buttons */}
          <div className={styles.tabNav}>
            {capabilities.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`${styles.tabBtn} ${activeTabId === c.id ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTabId(c.id)}
              >
                <span className={styles.tabIcon}>{c.tabIcon}</span>
                <span className={styles.tabLabel}>{c.tabLabel}</span>
              </button>
            ))}
          </div>

          {/* Active Workstation Stage */}
          <div className={styles.stageGrid}>
            {/* Left: Deep Explanation & Deliverables */}
            <div className={styles.stageContent}>
              <div className={styles.badgeRow}>
                <span className={styles.categoryPill}>{currentCapability.tabLabel}</span>
                <span className={styles.slaBadge}>Enterprise SLA Guaranteed</span>
              </div>

              <h3 className={styles.capabilityHeadline}>
                {currentCapability.headline}
              </h3>

              <p className={styles.capabilitySubhead}>
                {currentCapability.subhead}
              </p>

              {/* Deliverable Checklist */}
              <div className={styles.checklist}>
                <span className={styles.checklistHeading}>Core Engineering Deliverables:</span>
                {currentCapability.deliverables.map((item) => (
                  <div key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span className={styles.checkText}>{item}</span>
                  </div>
                ))}
              </div>

              {/* 3 Metric Pills */}
              <div className={styles.metricsRow}>
                {currentCapability.metrics.map((m) => (
                  <div key={m.label} className={styles.metricBlock}>
                    <div className={styles.metricValue}>{m.value}</div>
                    <div className={styles.metricLabel}>{m.label}</div>
                    <div className={styles.metricNote}>{m.note}</div>
                  </div>
                ))}
              </div>

              <div className={styles.actionRow}>
                <Link href="/contact" className={styles.actionBtn}>
                  <span>Schedule Technical Audit</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: Technical Code & Schema Telemetry Display */}
            <div className={styles.stageConsole}>
              <div className={styles.consoleHeader}>
                <div className={styles.consoleDots}>
                  <span className={styles.consoleDot} />
                  <span className={styles.consoleDot} />
                  <span className={styles.consoleDot} />
                </div>
                <span className={styles.consoleTitle}>{currentCapability.codeSnippetTitle}</span>
                <span className={styles.liveTag}>LIVE PROTOCOL</span>
              </div>
              <pre className={styles.codeBlock}>
                <code>{currentCapability.codeSnippet}</code>
              </pre>
              <div className={styles.consoleFooter}>
                <span className={styles.validStatus}>● Validated by Google Schema Markup Linter &amp; Search Console</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
