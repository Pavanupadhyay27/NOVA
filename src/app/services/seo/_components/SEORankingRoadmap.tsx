'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SEORankingRoadmap.module.css';

interface SprintMilestone {
  id: number;
  tabLabel: string;
  tabDuration: string;
  phase: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  sla: string;
  specimen: {
    tool: string;
    status: string;
    metrics: { label: string; value: string; note: string }[];
    footnote: string;
  };
}

const sprintMilestones: SprintMilestone[] = [
  {
    id: 1,
    tabLabel: 'Forensic Audit',
    tabDuration: 'Days 1–14',
    phase: 'Phase 01 · Days 1–14',
    badge: 'Technical Foundation',
    title: 'Technical Crawl & Bhubaneswar Indexation Audit',
    description: 'We run deep forensic crawls across 1,000+ URLs using Screaming Frog and Google Search Console to eliminate technical crawl debt and map commercial keyword gaps.',
    deliverables: [
      'Elimination of 404s, redirect loops & crawl bloat',
      'Schema.org JSON-LD LocalBusiness & Organization markup',
      'Competitor gap matrix across Patia, Saheed Nagar & Infocity',
      'XML sitemap & canonical indexing hierarchy overhaul',
    ],
    sla: '14-Day Delivery SLA · 100% Crawl Health Guaranteed',
    specimen: {
      tool: 'Screaming Frog & GSC Telemetry',
      status: 'AUDIT VERIFIED',
      metrics: [
        { label: 'Crawl Coverage', value: '1,420 URLs', note: '100% Scanned' },
        { label: 'Crawl Errors Remedied', value: '0 Errors', note: 'Clean Index' },
        { label: 'Schema Validation', value: 'JSON-LD Valid', note: 'Rich Snippets Active' },
        { label: 'Commercial Kw Gaps', value: '42 High-Intent', note: 'Bhubaneswar Corridor' },
      ],
      footnote: 'Audit log exported to client Looker Studio dashboard upon Day 14 milestone signoff.',
    },
  },
  {
    id: 2,
    tabLabel: 'Speed & Vitals',
    tabDuration: 'Days 15–30',
    phase: 'Phase 02 · Days 15–30',
    badge: 'Speed & Architecture',
    title: 'Next.js Speed Engineering & Core Web Vitals',
    description: 'Google strictly prioritizes lightning-fast mobile experiences. We optimize critical rendering paths, compress assets, and implement edge caching for sub-second load times.',
    deliverables: [
      'Largest Contentful Paint (LCP) compressed under 0.9s',
      'Cumulative Layout Shift (CLS) stabilized to 0.00',
      'Instant mobile rendering across all Bhubaneswar networks',
      'WebP/AVIF modern image pipeline & asset minification',
    ],
    sla: 'Google PageSpeed SLA · 95+ Mobile Score Guaranteed',
    specimen: {
      tool: 'Google PageSpeed Insights Telemetry',
      status: 'CORE VITALS PASS',
      metrics: [
        { label: 'Mobile Performance', value: '99 / 100', note: 'Top 1% in Odisha' },
        { label: 'Largest Contentful Paint', value: '0.8s', note: 'Under 1.2s SLA' },
        { label: 'Cumulative Layout Shift', value: '0.00', note: 'Zero visual shift' },
        { label: 'Interaction to Next Paint', value: '14ms', note: 'Instant response' },
      ],
      footnote: 'Benchmarked against real 4G/5G Airtel & Jio mobile connections in Bhubaneswar.',
    },
  },
  {
    id: 3,
    tabLabel: 'Map 3-Pack Moat',
    tabDuration: 'Days 31–60',
    phase: 'Phase 03 · Days 31–60',
    badge: 'Local Proximity Moat',
    title: 'Hyperlocal Google Maps 3-Pack Domination',
    description: 'When high-intent customers search for your services "near me", we place you squarely in the top 3 of Google Maps with consistent geo-coordinates and review velocity.',
    deliverables: [
      '100% Google Business Profile category & service optimization',
      'Geo-tagged citation matrix across Patia, Saheed Nagar & Cuttack',
      'Systematic review velocity protocol with photo proof',
      'Proximity pin ranking across key Bhubaneswar commercial hubs',
    ],
    sla: 'Bhubaneswar SLA · Top 3 Map Pack Visibility Guaranteed',
    specimen: {
      tool: 'Local Proximity SERP Geo-Grid',
      status: 'TOP 3 MAP MOAT',
      metrics: [
        { label: 'Patia & Infocity Corridor', value: '#1 Result', note: 'High Tech Density' },
        { label: 'Saheed Nagar Commercial', value: '#2 Result', note: 'High Footfall Intent' },
        { label: 'Jaydev Vihar & Nayapalli', value: '#1 Result', note: 'High-Ticket Buyers' },
        { label: 'NAP Consistency Score', value: '100%', note: 'Zero duplicate records' },
      ],
      footnote: 'Real-time geo-grid scanner verifies top 3 pin placement across 15km radius in Bhubaneswar.',
    },
  },
  {
    id: 4,
    tabLabel: 'Authority & Revenue',
    tabDuration: 'Days 61–90+',
    phase: 'Phase 04 · Days 61–90+',
    badge: 'Revenue & Authority',
    title: 'High-Authority Backlinks & Revenue Attribution',
    description: 'We build durable search authority through white-hat regional placements and commercial topic clustering, tied directly to verified phone calls, WhatsApp leads, and revenue.',
    deliverables: [
      'Zero-spam contextual backlinks from reputable regional portals',
      'Topical cluster pages designed to capture commercial buying intent',
      'Dynamic phone call attribution & WhatsApp lead tracking',
      'Weekly transparent revenue & rank velocity retrospectives',
    ],
    sla: 'Compounding Scale · +240% Inquiries Target Benchmark',
    specimen: {
      tool: 'GA4 & Call Attribution Telemetry',
      status: 'COMPOUNDING REVENUE',
      metrics: [
        { label: 'Inbound Qualified Calls', value: '+240%', note: 'Verified Phone & Chat' },
        { label: 'Top 3 Commercial Terms', value: '18 Keywords', note: 'Compounding monthly' },
        { label: 'Spam Backlink Score', value: '0% Spam', note: 'Ethical White-Hat' },
        { label: 'Ad-Spend Value Saved', value: '₹9.3L / mo', note: 'Equivalent PPC' },
      ],
      footnote: 'Every phone call and lead form submission is attribution-tracked to exact ranking keywords.',
    },
  },
];

export default function SEORankingRoadmap() {
  const [activeTab, setActiveTab] = useState(1);
  const current = sprintMilestones[activeTab - 1];

  return (
    <section className={styles.section} id="seo-roadmap">
      {/* Soft Ambient Background Light */}
      <div className={styles.ambientGlow} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className={styles.eyebrowDot} />
              <span>THE 90-DAY DOMINANCE BLUEPRINT</span>
            </div>
            <h3 className={`display-lg ${styles.headline}`}>
              The 4-Milestone Sprint to <span className="accent-gradient">#1 Search Dominance</span>
            </h3>
            <p className={styles.subText}>
              A transparent, milestone-driven execution framework engineered for predictable top rankings and inbound phone inquiries across Bhubaneswar.
            </p>
          </ScrollReveal>
        </div>

        {/* Tactile Skeuomorphic Milestone Selector Bar */}
        <div className={styles.selectorWrapper}>
          <div className={styles.milestoneTabs}>
            {sprintMilestones.map((m) => {
              const isActive = m.id === activeTab;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveTab(m.id)}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <span className={styles.tabNumberBadge}>0{m.id}</span>
                  <div className={styles.tabLabelGroup}>
                    <span className={styles.tabLabel}>{m.tabLabel}</span>
                    <span className={styles.tabDuration}>{m.tabDuration}</span>
                  </div>
                  {isActive && <span className={styles.tabActiveGlow} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tactile Dual-Card Command Center */}
        <div className={styles.commandConsole}>
          <div className={styles.cardGlassLip} />

          {/* Left Pane: Sprint Scope & Execution Plan */}
          <div className={styles.scopeCol}>
            <div className={styles.phaseHeaderRow}>
              <span className={styles.phasePill}>{current.phase}</span>
              <span className={styles.badgePill}>{current.badge}</span>
            </div>

            <h4 className={styles.scopeTitle}>{current.title}</h4>
            <p className={styles.scopeDesc}>{current.description}</p>

            {/* Concrete Deliverable Checklist */}
            <div className={styles.deliverablesBox}>
              <span className={styles.deliverablesLabel}>Verified Sprint Deliverables:</span>
              <div className={styles.deliverablesList}>
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className={styles.deliverableItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span className={styles.deliverableText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Commitment Banner */}
            <div className={styles.slaBanner}>
              <div className={styles.slaIconBox}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className={styles.slaInfo}>
                <span className={styles.slaLabel}>GUARANTEED OUTCOME SLA</span>
                <span className={styles.slaText}>{current.sla}</span>
              </div>
            </div>
          </div>

          {/* Right Pane: Sprint Execution Inspector Specimen */}
          <div className={styles.specimenCol}>
            <div className={styles.specimenCard}>
              {/* Card Mac-style Inspector Header */}
              <div className={styles.specimenHeader}>
                <div className={styles.macDots}>
                  <span className={styles.macDotRed} />
                  <span className={styles.macDotYellow} />
                  <span className={styles.macDotGreen} />
                </div>
                <span className={styles.toolTitle}>{current.specimen.tool}</span>
                <span className={styles.statusBadge}>{current.specimen.status}</span>
              </div>

              {/* 2x2 Telemetry Metric Tiles */}
              <div className={styles.metricGrid}>
                {current.specimen.metrics.map((met, idx) => (
                  <div key={idx} className={styles.metricTile}>
                    <span className={styles.tileLabel}>{met.label}</span>
                    <span className={styles.tileValue}>{met.value}</span>
                    <span className={styles.tileNote}>{met.note}</span>
                  </div>
                ))}
              </div>

              {/* Verified Footnote */}
              <div className={styles.specimenFootnote}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>{current.specimen.footnote}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tactile Action Link */}
        <div className={styles.bottomCtaRow}>
          <Link href="/contact" className={styles.sprintCtaBtn}>
            <span className={styles.btnShimmer} />
            <span className={styles.btnGlass} />
            <span>Schedule Your 90-Day Sprint Kickoff</span>
            <span className={styles.btnArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
