'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './EcommerceRoasCalculator.module.css';

export default function EcommerceRoasCalculator() {
  const [adSpend, setAdSpend] = useState<number>(250000); // 2.5 Lakhs
  const [aov, setAov] = useState<number>(2200); // INR 2200
  const [currentRoas, setCurrentRoas] = useState<number>(2.4); // 2.4x
  const [rtoRate, setRtoRate] = useState<number>(28); // 28%

  // Calculations
  const currentGrossRevenue = adSpend * currentRoas;
  const currentNetRevenue = currentGrossRevenue * (1 - rtoRate / 100);

  // Marketing Copilot Optimizations:
  const projectedRoas = Number((currentRoas * 1.62).toFixed(1));
  const projectedGrossRevenue = adSpend * projectedRoas;
  const projectedRtoRate = Math.max(8, Math.round(rtoRate * 0.45));
  const projectedNetRevenue = projectedGrossRevenue * (1 - projectedRtoRate / 100);

  const extraMonthlyProfit = Math.round(projectedNetRevenue - currentNetRevenue);
  const cacReduction = Math.round((1 - (1 / projectedRoas) / (1 / currentRoas)) * 100);

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
    <div className={styles.calculatorCard}>
      <div className={styles.calcGrid}>
        {/* Left: Interactive Controls */}
        <div>
          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Monthly Ad Spend (Meta + Google)
              </span>
              <span className={styles.sliderValue}>{formatINR(adSpend)}</span>
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="25000"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className={styles.slider}
              aria-label="Monthly Ad Spend"
            />
            <div className={styles.sliderHints}>
              <span>₹50,000</span>
              <span>₹10 Lakhs</span>
              <span>₹20 Lakhs</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Average Order Value (AOV)
              </span>
              <span className={styles.sliderValue}>₹{aov.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="600"
              max="10000"
              step="100"
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className={styles.slider}
              aria-label="Average Order Value"
            />
            <div className={styles.sliderHints}>
              <span>₹600 (Impulse/Beauty)</span>
              <span>₹5,000</span>
              <span>₹10,000+ (Luxury)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                Current Blended ROAS
              </span>
              <span className={styles.sliderValue}>{currentRoas.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="1.2"
              max="4.5"
              step="0.1"
              value={currentRoas}
              onChange={(e) => setCurrentRoas(Number(e.target.value))}
              className={styles.slider}
              aria-label="Current Blended ROAS"
            />
            <div className={styles.sliderHints}>
              <span>1.2x (Unprofitable)</span>
              <span>2.5x (Average)</span>
              <span>4.5x+ (Scaling)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                Current RTO (Return to Origin) %
              </span>
              <span className={styles.sliderValue}>{rtoRate}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="45"
              step="1"
              value={rtoRate}
              onChange={(e) => setRtoRate(Number(e.target.value))}
              className={styles.slider}
              aria-label="Current Return to Origin Rate"
            />
            <div className={styles.sliderHints}>
              <span>10% (Prepaid Heavy)</span>
              <span>28% (COD Average)</span>
              <span>45% (High Bleed)</span>
            </div>
          </div>
        </div>

        {/* Right: Projected Yield Panel */}
        <div className={styles.resultPanel}>
          <div className={styles.resultTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Full-Funnel Growth Yield
          </div>

          <div className={styles.statHighlight}>
            <div className={styles.statHighlightLabel}>Extra Net Revenue Generated</div>
            <div className={styles.statHighlightValue}>+{formatINR(extraMonthlyProfit)}</div>
            <div className={styles.statHighlightSubtitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              Projected ROAS jumps from {currentRoas.toFixed(1)}x to {projectedRoas}x
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Projected Net Revenue</div>
              <div className={styles.metricBoxVal}>{formatINR(projectedNetRevenue)}</div>
              <div className={styles.metricBoxDiff}>vs {formatINR(currentNetRevenue)} now</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>RTO Rate Reduced</div>
              <div className={styles.metricBoxVal}>{projectedRtoRate}%</div>
              <div className={styles.metricBoxDiff}>Saved -{rtoRate - projectedRtoRate}% leak</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Blended CAC Reduction</div>
              <div className={styles.metricBoxVal}>-{cacReduction}%</div>
              <div className={styles.metricBoxDiff}>Lower customer cost</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Est. Monthly Orders</div>
              <div className={styles.metricBoxVal}>{Math.round(projectedGrossRevenue / aov).toLocaleString()}</div>
              <div className={styles.metricBoxDiff}>+{Math.round((projectedGrossRevenue - currentGrossRevenue) / aov)} orders</div>
            </div>
          </div>

          <Link href="#executive-terminal" className={styles.ctaBtn}>
            <span>Audit Your D2C Unit Economics</span>
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
