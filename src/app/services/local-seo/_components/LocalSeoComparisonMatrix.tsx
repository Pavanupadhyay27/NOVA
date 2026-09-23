'use client';

import React from 'react';
import styles from './LocalSeoComparisonMatrix.module.css';

interface ComparisonRow {
  dimension: string;
  subtext: string;
  traditional: string;
  copilot: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Google Map 3-Pack Focus',
    subtext: 'Where 72% of local mobile buyers actually click',
    traditional: 'Only builds generic national backlinks; completely ignores the Google Map 3-Pack',
    copilot: 'Dedicated Geo-Grid Map 3-Pack domination engineering ensuring Rank #1 across Bhubaneswar',
  },
  {
    dimension: 'Geo-Tagged EXIF Metadata',
    subtext: 'Physical proof of local location to crawlers',
    traditional: 'Uploads stock photos with zero GPS latitude/longitude metadata or location context',
    copilot: '100% of photos embedded with verified Bhubaneswar GPS coordinates, IPTC tags, and EXIF schema',
  },
  {
    dimension: 'Citation Consistency & NAP',
    subtext: 'Preventing algorithmic trust dilution',
    traditional: 'Sloppy manual entries resulting in duplicate phone numbers and mismatched address spellings',
    copilot: 'Locked NAP consistency across 60+ Tier-1 directories with automated duplicate suppression',
  },
  {
    dimension: 'Review Generation Velocity',
    subtext: 'The #1 direct ranking signal on Google Maps',
    traditional: 'Leaves reviews to chance; zero automated follow-up system for satisfied clients',
    copilot: 'Automated WhatsApp review invitations with keyword prompts driving 20+ verified 5★ reviews monthly',
  },
  {
    dimension: 'Localized On-Page Schema',
    subtext: 'Structured data for Google local spiders',
    traditional: 'Generic WebSite schema that fails to communicate physical local presence',
    copilot: 'Detailed LocalBusiness & GeoCoordinates JSON-LD schema with exact service radius definitions',
  },
  {
    dimension: 'Transparent Geo-Grid Reporting',
    subtext: 'Tracking ranking every 500 meters',
    traditional: 'Single screenshot from their own office WiFi pretending you rank #1 everywhere',
    copilot: 'Live 5x5 Geo-Grid rank tracker tracking your real rankings across Patia, Saheed Nagar, & Nayapalli',
  },
];

export default function LocalSeoComparisonMatrix() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th className={styles.thMetric}>Growth Dimension</th>
            <th className={styles.thTraditional}>Traditional SEO Agencies</th>
            <th className={styles.thCopilot}>
              Marketing Copilot Local Standard
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
