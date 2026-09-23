'use client';

import React from 'react';
import styles from './PerformanceComparisonMatrix.module.css';

interface ComparisonRow {
  dimension: string;
  subtext: string;
  traditional: string;
  copilot: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Channel Silos vs Orchestration',
    subtext: 'How ad channels interact with one another',
    traditional: 'Separate agencies or freelancers running Meta and Google in total isolation',
    copilot: 'Unified omnichannel orchestration: Meta creates demand, Google captures search, WhatsApp closes',
  },
  {
    dimension: 'Attribution & Signal Integrity',
    subtext: 'Dealing with platform overlap and privacy',
    traditional: 'Accepting duplicated platform claims where Meta and Google both take credit for 1 sale',
    copilot: 'BigQuery server-side de-duplication tracking true blended MER and Net Contribution Margin',
  },
  {
    dimension: 'Creative Testing Cadence',
    subtext: 'Preventing ad fatigue and rising CAC',
    traditional: 'Recycling 1 or 2 static banners for 3 months until customer costs skyrocket',
    copilot: 'Weekly creative sprints testing 8+ video hooks, angles, and interactive landing pages',
  },
  {
    dimension: 'Conversion Rate Optimization',
    subtext: 'What happens after the paid click',
    traditional: 'Traffic dumped onto slow, clunky corporate websites with zero A/B testing',
    copilot: 'Sub-800ms mobile Next.js landers with 1-tap WhatsApp consultation flows yielding 12%+ CVR',
  },
  {
    dimension: 'Retention & Customer LTV',
    subtext: 'Post-acquisition revenue multiplication',
    traditional: 'Zero retention strategy; 100% reliant on buying expensive new clicks forever',
    copilot: 'Automated post-purchase repurchase flows, referral incentives, and VIP retention loops',
  },
  {
    dimension: 'Financial Accountability',
    subtext: 'Metrics that drive board-level decisions',
    traditional: 'Vanity impressions, clicks, and subjective "brand awareness" reports',
    copilot: 'Real-time Looker Studio dashboard tracking Blended CAC, Net Profit, and Verified Revenue',
  },
];

export default function PerformanceComparisonMatrix() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th className={styles.thMetric}>Growth Dimension</th>
            <th className={styles.thTraditional}>Siloed Traditional Agencies</th>
            <th className={styles.thCopilot}>
              Marketing Copilot Performance Engine
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
