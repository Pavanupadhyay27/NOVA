'use strict';
'use client';

import React from 'react';
import styles from './AmazonWorkstation.module.css';

interface Module {
  number: string;
  title: string;
  summary: string;
  badge: string;
  points: string[];
}

const MODULES: Module[] = [
  {
    number: '01',
    title: 'High-Precision Sponsored Ads & Negative Keyword Sculpting',
    summary: 'Stop wasting budget on broad exploratory matches. We isolate exact-match converting queries into single-ASIN campaigns, sculpting 300+ negative keywords to maintain sub-20% ACoS.',
    badge: 'Sub-20% ACoS Guardrail',
    points: [
      'Automated daily search term harvesting moving high-performing terms to exact match',
      'Continuous negative broad isolation eliminating non-converting exploratory clicks',
      'Dayparting bid schedules boosting bids during peak prime shopping windows'
    ]
  },
  {
    number: '02',
    title: 'Editorial A+ Content & Brand Store Architecture',
    summary: 'Elevate your product detail page conversion rate by 22-38% with cinematic lifestyle photography, interactive comparison grids, and custom multi-page Amazon Brand Stores.',
    badge: '+28% Page Conversion Lift',
    points: [
      'High-resolution lifestyle infographics breaking down active ingredients & certifications',
      'Cross-selling comparison carousels keeping consumers inside your brand catalog',
      'Curated Amazon Brand Store navigation indexed on Google search'
    ]
  },
  {
    number: '03',
    title: 'Buy Box Domination & MAP Pricing Protection',
    summary: 'Defend your margins against unauthorized third-party resellers and listing hijackers. We configure algorithmic re-pricing software and enforce strict brand ownership on Seller Central.',
    badge: '99%+ Buy Box Win Rate',
    points: [
      'Automated 24/7 piggybacker detection alerts triggering immediate Amazon Brand Registry cases',
      'Minimum Advertised Price (MAP) surveillance across all Indian eCommerce channels',
      'Algorithmic re-pricing maintaining the Buy Box without entering race-to-the-bottom price wars'
    ]
  },
  {
    number: '04',
    title: 'Amazon Vine Review Seeding & FBA Inventory Health',
    summary: 'Fast-track social proof on new product launches while keeping your Inventory Performance Index (IPI) score above 550 to prevent punitive storage fees and out-of-stock de-rankings.',
    badge: 'IPI Score 550+ Guaranteed',
    points: [
      'Official Amazon Vine review program enrollment capturing verified 5-star customer ratings',
      'Predictive 60-day restock forecasting avoiding catastrophic out-of-stock rank penalties',
      'Stranded inventory and lost reimbursement reconciliation with Seller Support'
    ]
  }
];

export default function AmazonWorkstation() {
  return (
    <section className={styles.workstationSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.kicker}>The E-Commerce Growth Infrastructure</div>
        <h2 className={styles.sectionTitle}>The 4 Amazon Engines We Engineer to Scale Brands</h2>
        <p className={styles.sectionDescription}>
          From precision PPC harvest architectures to conversion-rate-optimized A+ content, we build the flywheel
          that turns paid traffic velocity into unstoppable organic Best Seller rankings.
        </p>
      </div>

      <div className={styles.grid}>
        {MODULES.map((mod) => (
          <div key={mod.number} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className={styles.moduleNumber}>{mod.number}</span>
            </div>

            <h3 className={styles.cardTitle}>{mod.title}</h3>
            <p className={styles.cardSummary}>{mod.summary}</p>

            <ul className={styles.featureList}>
              {mod.points.map((pt, i) => (
                <li key={i} className={styles.featureItem}>
                  <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className={styles.badgeHighlight}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {mod.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
