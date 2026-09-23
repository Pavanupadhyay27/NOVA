'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './GoogleAdsPpcCalculator.module.css';

export default function GoogleAdsPpcCalculator() {
  const [adSpend, setAdSpend] = useState<number>(45000); // 45k
  const [cpc, setCpc] = useState<number>(32); // ₹32
  const [avgDealValue, setAvgDealValue] = useState<number>(18000); // ₹18,000
  const [closeRate, setCloseRate] = useState<number>(18); // 18%

  // Calculations
  const clicks = Math.round(adSpend / cpc);
  // Marketing Copilot high-converting mobile landing pages convert at ~12.5%
  const conversionRate = 0.125;
  const leads = Math.round(clicks * conversionRate);
  const costPerLead = leads > 0 ? Math.round(adSpend / leads) : 0;
  const closedClients = Math.round(leads * (closeRate / 100));
  const estimatedRevenue = closedClients * avgDealValue;
  const roas = adSpend > 0 ? (estimatedRevenue / adSpend).toFixed(1) : '0';

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} L`;
    }
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcGrid}>
        {/* Left: Sliders */}
        <div>
          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Monthly Google Ads Budget
              </span>
              <span className={styles.sliderValue}>{formatINR(adSpend)}</span>
            </div>
            <input
              type="range"
              min="20000"
              max="500000"
              step="5000"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className={styles.slider}
              aria-label="Monthly Google Ads Budget"
            />
            <div className={styles.sliderHints}>
              <span>₹20,000 (Local Clinic)</span>
              <span>₹2 Lakhs</span>
              <span>₹5 Lakhs+ (Scale)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Estimated Cost-Per-Click (CPC)
              </span>
              <span className={styles.sliderValue}>₹{cpc}</span>
            </div>
            <input
              type="range"
              min="15"
              max="150"
              step="2"
              value={cpc}
              onChange={(e) => setCpc(Number(e.target.value))}
              className={styles.slider}
              aria-label="Estimated Cost Per Click"
            />
            <div className={styles.sliderHints}>
              <span>₹15 (Low Competition)</span>
              <span>₹50</span>
              <span>₹150 (Real Estate / Legal)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Average Deal / Patient Lifetime Value
              </span>
              <span className={styles.sliderValue}>{formatINR(avgDealValue)}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="150000"
              step="1000"
              value={avgDealValue}
              onChange={(e) => setAvgDealValue(Number(e.target.value))}
              className={styles.slider}
              aria-label="Average Deal Value"
            />
            <div className={styles.sliderHints}>
              <span>₹2,000 (Dental Clean)</span>
              <span>₹50,000</span>
              <span>₹1.5 Lakhs+ (Surgical/B2B)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Lead-to-Client Close Rate
              </span>
              <span className={styles.sliderValue}>{closeRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className={styles.slider}
              aria-label="Lead to Client Close Rate"
            />
            <div className={styles.sliderHints}>
              <span>5% (Cold Consultation)</span>
              <span>18% (Average)</span>
              <span>40% (Hot Referrals)</span>
            </div>
          </div>
        </div>

        {/* Right: Projected Yield */}
        <div className={styles.resultPanel}>
          <div className={styles.resultTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Projected Pipeline Yield
          </div>

          <div className={styles.statHighlight}>
            <div className={styles.statHighlightLabel}>Estimated Monthly Pipeline</div>
            <div className={styles.statHighlightValue}>{formatINR(estimatedRevenue)}</div>
            <div className={styles.statHighlightSubtitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              Projected ROAS: {roas}X Return On Ad Spend
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Qualified Phone Leads</div>
              <div className={styles.metricBoxVal}>{leads}</div>
              <div className={styles.metricBoxDiff}>~{clicks} Ad Clicks</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Cost Per Inbound Lead</div>
              <div className={styles.metricBoxVal}>₹{costPerLead}</div>
              <div className={styles.metricBoxDiff}>vs ₹650+ avg agency</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Projected Closed Clients</div>
              <div className={styles.metricBoxVal}>{closedClients}</div>
              <div className={styles.metricBoxDiff}>At {closeRate}% close rate</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Net Revenue Gain</div>
              <div className={styles.metricBoxVal}>{formatINR(Math.max(0, estimatedRevenue - adSpend))}</div>
              <div className={styles.metricBoxDiff}>After ad spend deducted</div>
            </div>
          </div>

          <Link href="#executive-terminal" className={styles.ctaBtn}>
            <span>Request Inbound Search Audit</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
