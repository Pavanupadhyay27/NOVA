'use strict';
'use client';

import React from 'react';
import styles from './AiAutomationComparisonMatrix.module.css';

interface MatrixRow {
  feature: string;
  sub: string;
  traditional: string;
  copilot: string;
}

const COMPARISON_DATA: MatrixRow[] = [
  {
    feature: 'First Response Time',
    sub: 'Time to acknowledge and engage an inbound lead',
    traditional: '4 to 12 hours (delayed until office opening or rep free time)',
    copilot: 'Sub-2 seconds 24/7/365 across WhatsApp, Instagram, and web chat'
  },
  {
    feature: 'Weekend & Midnight Coverage',
    sub: 'Capturing after-hours and holiday interest',
    traditional: 'Zero response. Leads cold-call competitors who pick up first',
    copilot: 'Full autonomous conversational qualification, quoting & booking'
  },
  {
    feature: 'CRM Data Accuracy',
    sub: 'Logging customer requirements and lead details',
    traditional: 'Manual CSV entry prone to typos, missed phones, or dropped tags',
    copilot: 'Real-time JSON webhook synchronization to HubSpot/Zoho with intent scoring'
  },
  {
    feature: 'Multi-Language Fluidity',
    sub: 'Engaging customers in local regional dialects',
    traditional: 'Limited to English/Hindi; struggles with colloquial regional phrasing',
    copilot: 'Fluent multi-lingual LLM support (Odia, Hindi, English, Hinglish)'
  },
  {
    feature: 'Automated Follow-Up Cadence',
    sub: 'Nurturing unconverted inquiries',
    traditional: 'Rep forgets after 1 call; 68% of warm prospects get abandoned',
    copilot: 'Algorithmic multi-touch drip sequence across WhatsApp and SMS'
  }
];

export default function AiAutomationComparisonMatrix() {
  return (
    <section className={styles.matrixContainer}>
      <div className={styles.matrixHeader}>
        <div className={styles.kicker}>The Execution Gap</div>
        <h2 className={styles.title}>Manual Human Sales Friction vs. Copilot AI Systems</h2>
        <p className={styles.subtitle}>
          Compare the realities of traditional manual inquiry handling with our modern, autonomous AI infrastructure.
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th className={styles.featureCol}>Operational Metric</th>
              <th className={styles.agencyCol}>Traditional Manual Sales Reps</th>
              <th className={styles.copilotCol}>
                Copilot AI Automation Engine <span className={styles.copilotBadge}>Standard</span>
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
