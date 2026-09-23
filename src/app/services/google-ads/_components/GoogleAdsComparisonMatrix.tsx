'use client';

import React from 'react';
import styles from './GoogleAdsComparisonMatrix.module.css';

interface ComparisonRow {
  dimension: string;
  subtext: string;
  traditional: string;
  copilot: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Keyword Match Strategy',
    subtext: 'Targeting methodology and budget control',
    traditional: 'Lazy broad match terms generating irrelevant student and job-seeker clicks',
    copilot: 'Single-Theme Ad Groups (STAGs) using exact and phrase match modifiers strictly',
  },
  {
    dimension: 'Negative Keyword Filtering',
    subtext: 'Proactive ad waste mitigation',
    traditional: 'Zero negative lists added; up to 40% budget burned on non-buyers',
    copilot: '400+ pre-compiled Odisha negative lists installed on Day 1 plus daily query scrubbing',
  },
  {
    dimension: 'Landing Page & Quality Score',
    subtext: 'Impact on effective cost-per-click',
    traditional: 'Directing ad traffic to generic homepages with 3/10 or 4/10 Quality Scores (paying high CPC)',
    copilot: 'Custom Next.js mobile landing pages maintaining 9/10–10/10 Quality Scores (paying 40% less CPC)',
  },
  {
    dimension: 'Call & Inbound Attribution',
    subtext: 'Tracking real revenue vs vanity clicks',
    traditional: 'Only tracking basic page visits; zero tracking of phone calls or WhatsApp chats',
    copilot: 'Dynamic Number Insertion (DNI) recording call length, caller location, and keyword attribution',
  },
  {
    dimension: 'Geo-Targeting Boundaries',
    subtext: 'Preventing runaway out-of-market impressions',
    traditional: 'Generic state-wide targeting that attracts callers 300km away who cannot visit',
    copilot: 'Hyperlocal pin-code and 5–12km radius geo-fences strictly around your Bhubaneswar facilities',
  },
  {
    dimension: 'Account Ownership',
    subtext: 'Transparency and intellectual property',
    traditional: 'Agency holds accounts hostage under their own master billing',
    copilot: '100% client-owned Google Ads account with full administrative and billing control',
  },
];

export default function GoogleAdsComparisonMatrix() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th className={styles.thMetric}>Growth Dimension</th>
            <th className={styles.thTraditional}>Traditional PPC Agencies</th>
            <th className={styles.thCopilot}>
              Marketing Copilot Standard
              <span className={styles.copilotBadge}>Leader</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_DATA.map((row, idx) => (
            <tr key={idx}>
              <td className={styles.metricCell}>
                <div>{row.dimension}</div>
                <div className={styles.metricSubtext}>{row.subtext}</div>
              </td>
              <td>
                <div className={styles.traditionalCell}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.crossIcon}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <span>{row.traditional}</span>
                </div>
              </td>
              <td>
                <div className={styles.copilotCell}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{row.copilot}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
