'use strict';
'use client';

import React from 'react';
import styles from './AmazonComparisonMatrix.module.css';

interface MatrixRow {
  feature: string;
  sub: string;
  traditional: string;
  copilot: string;
}

const COMPARISON_DATA: MatrixRow[] = [
  {
    feature: 'PPC Structure & Campaign Isolation',
    sub: 'How ads are grouped and keywords targeted',
    traditional: 'Auto-campaigns dump budget into single ad groups with zero keyword isolation',
    copilot: 'Single-ASIN architecture with Exact, Phrase & Auto discovery funnels'
  },
  {
    feature: 'Negative Keyword Harvesting',
    sub: 'Cutting wasted ad spend from irrelevant shopper searches',
    traditional: 'Done once a month or never; hundreds of irrelevant search terms bleed budget',
    copilot: 'Daily algorithmic negative search term sculpting (broad & exact negatives)'
  },
  {
    feature: 'A+ Content & Brand Store',
    sub: 'Visual product storytelling & conversion optimization',
    traditional: 'Generic template modules with low-res manufacturer images and text blocks',
    copilot: 'Editorial luxury dielines, comparison tables, and immersive brand stores'
  },
  {
    feature: 'Buy Box & Hijacker Defense',
    sub: 'Safeguarding listings against unauthorized sellers',
    traditional: 'Slow manual check; hijackers steal revenue for weeks unnoticed',
    copilot: '24/7 automated piggybacker monitoring with instant Brand Registry escalations'
  },
  {
    feature: 'Inventory & Restock Forecasting',
    sub: 'Preventing stock-outs and ranking drops',
    traditional: 'Ad-hoc manual re-ordering causing devastating out-of-stock de-rankings',
    copilot: 'Predictive velocity modeling maintaining healthy IPI scores above 550'
  }
];

export default function AmazonComparisonMatrix() {
  return (
    <section className={styles.matrixContainer}>
      <div className={styles.matrixHeader}>
        <div className={styles.kicker}>The Performance Standard</div>
        <h2 className={styles.title}>Amateur Agency Ad Spend vs. Copilot Amazon Mastery</h2>
        <p className={styles.subtitle}>
          Discover why high-growth direct-to-consumer and manufacturing brands choose our disciplined Amazon growth architecture over legacy agency guesswork.
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th className={styles.featureCol}>Growth Dimension</th>
              <th className={styles.agencyCol}>Traditional PPC Agencies</th>
              <th className={styles.copilotCol}>
                Copilot Amazon Engine <span className={styles.copilotBadge}>Standard</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx}>
                <td>
                  <span className={styles.featureName}>{row.feature}</span>
                  <span className={styles.featureSub}>{row.sub}</span>
                </td>
                <td>
                  <div className={styles.badCell}>
                    <svg className={styles.iconCross} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.goodCell}>
                    <svg className={styles.iconCheck} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>{row.copilot}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
