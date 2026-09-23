'use client';

import React from 'react';
import styles from './EcommerceComparisonMatrix.module.css';

interface ComparisonRow {
  dimension: string;
  subtext: string;
  traditional: string;
  copilot: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Tracking & Attribution',
    subtext: 'Data integrity after iOS 14.5 & privacy shifts',
    traditional: 'Basic browser pixel prone to 40%+ signal drop and skewed ROAS',
    copilot: 'CAPI Server-Side + GA4 BigQuery pipeline with 98% event match quality',
  },
  {
    dimension: 'Creative Strategy',
    subtext: 'Ad creative volume and angle testing',
    traditional: '1-2 static catalog banners per month; quick ad fatigue',
    copilot: 'Weekly creative sprints: UGC hooks, founder stories, unboxings & problem-solution reels',
  },
  {
    dimension: 'RTO & COD Protection',
    subtext: 'Cash-on-delivery return rate prevention',
    traditional: 'Unverified dispatch leading to 30-40% RTO logistics bleed',
    copilot: 'Automated WhatsApp OTP + address scrubber, cutting RTO down to 10-14%',
  },
  {
    dimension: 'Average Order Value (AOV)',
    subtext: 'Cart mechanics & bundle engineering',
    traditional: 'Single-item discount codes that erode gross profit margins',
    copilot: 'Tiered volume discounts, 1-click in-cart cross-sells, & post-purchase upsell ladders',
  },
  {
    dimension: 'Customer Retention & LTV',
    subtext: 'Turning 1-time buyers into repeat brand advocates',
    traditional: 'Zero retention strategy; reliance on expensive re-acquisition',
    copilot: 'Automated Klaviyo email + WhatsApp VIP flows driving 35%+ repeat purchase rates',
  },
  {
    dimension: 'Unit Economics Transparency',
    subtext: 'Real-time profit tracking vs vanity ROAS',
    traditional: 'Vanity Meta platform ROAS screenshots ignoring product COGS & logistics',
    copilot: 'Live executive dashboard tracking Net Contribution Margin (POAS) & True LTV',
  },
];

export default function EcommerceComparisonMatrix() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th className={styles.thMetric}>Growth Dimension</th>
            <th className={styles.thTraditional}>Traditional D2C Agency</th>
            <th className={styles.thCopilot}>
              Marketing Copilot Engine
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
