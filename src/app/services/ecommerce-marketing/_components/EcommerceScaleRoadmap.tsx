'use client';

import React from 'react';
import styles from './EcommerceScaleRoadmap.module.css';

interface RoadmapPhase {
  phase: number;
  timeline: string;
  title: string;
  description: string;
  deliverable: string;
  items: string[];
}

const PHASES: RoadmapPhase[] = [
  {
    phase: 1,
    timeline: 'Days 1 – 7',
    title: 'Unit Economics, CAPI Pipeline & Catalog Scrub',
    description: 'We audit your true contribution margins (POAS), fix pixel and server-side signal leakage via Meta CAPI & GA4, and optimize your product feed with rich tags.',
    deliverable: 'Unit Economics Blueprint + 98% CAPI Match Quality',
    items: [
      'COGS & Gross Margin break-even calculation per SKU',
      'Meta CAPI + Google Enhanced Conversions server-side setup',
      'Merchant Center feed synchronization and disapproval resolution',
      'Mobile checkout friction and drop-off analysis',
    ],
  },
  {
    phase: 2,
    timeline: 'Days 8 – 15',
    title: 'Creative Engine & High-Converting PDP Architecture',
    description: 'We script, produce, and edit 12+ thumb-stopping creative angles (UGC hooks, unboxings, problem/solution) while engineering 1-click cart cross-sells on your store.',
    deliverable: '12+ Production Creatives + Custom Cart Upsells',
    items: [
      'Top-of-Funnel UGC video hooks & unboxing creative sprint',
      'Product Detail Page (PDP) social proof & trust badge overhaul',
      '1-click bundle upsell & volume discount configuration',
      'WhatsApp order confirmation & address scrubbing automation',
    ],
  },
  {
    phase: 3,
    timeline: 'Days 16 – 23',
    title: 'Full-Funnel Omnichannel Launch & RTO Mitigation',
    description: 'We activate Advantage+ Shopping campaigns on Meta, deploy Google Performance Max for high-intent searchers, and turn on automated RTO risk detection.',
    deliverable: 'Multi-Channel Live Campaigns + RTO Firewalls',
    items: [
      'Meta Advantage+ Shopping Campaigns (ASC) with broad creative testing',
      'Google Shopping & Performance Max search capture',
      'High-risk COD order phone verification via WhatsApp OTP',
      'Abandoned checkout automated SMS & WhatsApp recovery flows',
    ],
  },
  {
    phase: 4,
    timeline: 'Days 24 – 30',
    title: 'Aggressive Scale & Retention Flywheel (LTV Scaling)',
    description: 'We inject capital into winning ad sets, kill unprofitable SKUs, and launch automated post-purchase VIP sequences to drive recurring purchases.',
    deliverable: '4.2x+ Blended ROAS + Repeat Purchase System',
    items: [
      'Budget scale on sub-₹250 CAC winning ad creatives',
      'Klaviyo email marketing post-purchase replenishment loops',
      'Customer lifetime value (LTV) cohort analysis',
      'Weekly executive POAS margin & profit reporting',
    ],
  },
];

export default function EcommerceScaleRoadmap() {
  return (
    <div className={styles.roadmapContainer}>
      {PHASES.map((p) => (
        <div key={p.phase} className={styles.phaseCard}>
          <div className={styles.phaseHeader}>
            <div className={styles.phaseMeta}>
              <div className={styles.phaseNumber}>0{p.phase}</div>
              <span className={styles.phaseTimeline}>{p.timeline}</span>
            </div>
            <span className={styles.deliverableBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {p.deliverable}
            </span>
          </div>

          <h3 className={styles.phaseTitle}>{p.title}</h3>
          <p className={styles.phaseDescription}>{p.description}</p>

          <div className={styles.bulletGrid}>
            {p.items.map((item, idx) => (
              <div key={idx} className={styles.bulletItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.bulletCheck}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
