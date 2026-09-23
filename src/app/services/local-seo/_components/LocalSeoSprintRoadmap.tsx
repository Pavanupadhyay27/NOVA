'use client';

import React from 'react';
import styles from './LocalSeoSprintRoadmap.module.css';

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
    title: 'GMB Forensic Audit & Category Alignment',
    description: 'We audit your Google Business Profile taxonomy, eliminate category mismatches, and run an initial 5x5 geo-grid scan across all Bhubaneswar pin codes.',
    deliverable: 'Baseline Geo-Grid Scan + Category Restructure',
    items: [
      'GMB primary and secondary category restructuring',
      '5x5 Geo-Grid rank analysis across Patia, Saheed Nagar, & Nayapalli',
      'Audit of duplicate phone numbers and address discrepancies',
      'Verification of holiday operating hours and direct booking links',
    ],
  },
  {
    phase: 2,
    timeline: 'Days 8 – 15',
    title: 'Geo-Tagged Media & LocalBusiness Schema Deployment',
    description: 'We embed GPS latitude/longitude coordinates into 30+ high-res facility photos, configure Google 360 virtual tours, and inject JSON-LD schema into your website.',
    deliverable: '30+ Geo-Tagged Photos + LocalBusiness Schema',
    items: [
      'EXIF GPS metadata injection for physical Bhubaneswar location',
      'Google Street View 360 indoor virtual tour publish',
      'Schema.org LocalBusiness & GeoCoordinates markup integration',
      'Weekly keyword-optimized Google Update Post schedule',
    ],
  },
  {
    phase: 3,
    timeline: 'Days 16 – 23',
    title: 'Tier-1 Citation Synchronization & Review Funnels',
    description: 'We lock your NAP across 60+ Tier-1 directories and launch automated WhatsApp review funnels that generate authentic 5-star customer ratings.',
    deliverable: '60+ Locked Citations + WhatsApp Review Engine',
    items: [
      'NAP consistency lockdown across Apple Maps, Justdial, & Bing',
      'Suppression of duplicate listings and outdated phone records',
      'WhatsApp post-checkout automated 5-star review invitation trigger',
      'Custom keyword-prompted templates mentioning local corridors',
    ],
  },
  {
    phase: 4,
    timeline: 'Days 24 – 30',
    title: 'Map 3-Pack Lockdown & Localized Backlink Velocity',
    description: 'We earn localized contextual links from Bhubaneswar news portals and community associations, cementing permanent #1 Map 3-Pack rankings.',
    deliverable: 'Permanent Map 3-Pack Top Rank + Live Geo-Tracker',
    items: [
      'Hyperlocal backlinks from Odisha business and trade directories',
      'Follow-up 5x5 Geo-Grid re-scan showing green #1 pins',
      'Real-time tracking of phone calls and driving direction requests',
      'Monthly executive Map 3-Pack local share report',
    ],
  },
];

export default function LocalSeoSprintRoadmap() {
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
