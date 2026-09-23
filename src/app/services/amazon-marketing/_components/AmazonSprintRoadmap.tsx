'use strict';
'use client';

import React from 'react';
import styles from './AmazonSprintRoadmap.module.css';

interface Phase {
  phase: string;
  days: string;
  title: string;
  desc: string;
  deliverables: string[];
}

const PHASES: Phase[] = [
  {
    phase: 'Phase 01',
    days: 'Days 1 - 7',
    title: 'Listing SEO & Reverse-ASIN Keyword Mining',
    desc: 'Audit current indexation with Helium 10 Cerebro. Rewrite titles, bullet points, and 249-byte backend search terms for high-volume conversion terms.',
    deliverables: [
      'Comprehensive competitor reverse-ASIN matrix',
      'High-conversion title & bullet rewrite',
      'Backend search term character optimization'
    ]
  },
  {
    phase: 'Phase 02',
    days: 'Days 8 - 14',
    title: 'A+ Content Redesign & Brand Store Buildout',
    desc: 'Produce custom graphic dielines, ingredient breakdown comparison modules, and launch an immersive, multi-tab Amazon Brand Storefront.',
    deliverables: [
      'Custom premium A+ banner assets',
      'Interactive cross-sell comparison grids',
      'Brand Store architecture & navigation'
    ]
  },
  {
    phase: 'Phase 03',
    days: 'Days 15 - 22',
    title: 'PPC Restructuring & Search Term Funnels',
    desc: 'Construct single-ASIN campaigns across Sponsored Products, Sponsored Brands Video, and Sponsored Display ASIN defense. Implement negative lists.',
    deliverables: [
      'Auto-to-Manual keyword harvesting scripts',
      'Top-of-search placement bid modifiers',
      '300+ negative broad keyword firewalls'
    ]
  },
  {
    phase: 'Phase 04',
    days: 'Days 23 - 30',
    title: 'Algorithmic Dayparting & Review Seeding',
    desc: 'Deploy hourly automated bid adjustments based on peak purchasing velocity and initiate official Amazon Vine review seeding.',
    deliverables: [
      'Hourly dayparting bid schedules',
      'Amazon Vine review enrollment',
      'Real-time TACoS & Buy Box live telemetry dashboard'
    ]
  }
];

export default function AmazonSprintRoadmap() {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.header}>
        <div className={styles.kicker}>Execution Roadmap</div>
        <h2 className={styles.title}>30-Day Amazon Brand Velocity Sprint</h2>
        <p className={styles.subtitle}>
          How we overhaul your product listings, reduce ACoS, and ignite organic Best Seller momentum in 4 rigorous weeks.
        </p>
      </div>

      <div className={styles.timeline}>
        {PHASES.map((p) => (
          <div key={p.phase} className={styles.timelineCard}>
            <span className={styles.phaseBadge}>{p.phase}</span>
            <div className={styles.phaseDays}>{p.days}</div>
            <h3 className={styles.phaseTitle}>{p.title}</h3>
            <p className={styles.phaseDesc}>{p.desc}</p>

            <ul className={styles.deliverablesList}>
              {p.deliverables.map((item, i) => (
                <li key={i} className={styles.deliverableItem}>
                  <div className={styles.bulletDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
