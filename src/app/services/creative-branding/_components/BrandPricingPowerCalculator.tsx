'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './BrandPricingPowerCalculator.module.css';

export default function BrandPricingPowerCalculator() {
  const [dealPrice, setDealPrice] = useState<number>(85000); // ₹85,000 avg ticket
  const [clientCount, setClientCount] = useState<number>(24); // 24 clients / mo
  const [premiumLift, setPremiumLift] = useState<number>(28); // +28% pricing power
  const [retentionMult, setRetentionMult] = useState<number>(1.2); // 1.2x retention

  // Calculations
  const newPrice = Math.round(dealPrice * (1 + premiumLift / 100));
  const baseRevenue = dealPrice * clientCount;
  const scaledClients = Math.round(clientCount * retentionMult);
  const newRevenue = newPrice * scaledClients;
  const extraMonthlyProfit = Math.round(newRevenue - baseRevenue);

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcGrid}>
        {/* Left: Interactive Controls */}
        <div>
          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Current Average Deal / Product Price
              </span>
              <span className={styles.sliderValue}>{formatINR(dealPrice)}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="500000"
              step="5000"
              value={dealPrice}
              onChange={(e) => setDealPrice(Number(e.target.value))}
              className={styles.slider}
              aria-label="Average Deal Price"
            />
            <div className={styles.sliderHints}>
              <span>₹5,000 (D2C / Retail)</span>
              <span>₹1 Lakh</span>
              <span>₹5 Lakhs+ (Architecture / Luxury)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                Monthly Customers / Contracts
              </span>
              <span className={styles.sliderValue}>{clientCount} Transactions</span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="1"
              value={clientCount}
              onChange={(e) => setClientCount(Number(e.target.value))}
              className={styles.slider}
              aria-label="Monthly Transactions"
            />
            <div className={styles.sliderHints}>
              <span>5 (High Ticket)</span>
              <span>50</span>
              <span>150+ (High Volume)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                Brand Perception &amp; Pricing Power Lift
              </span>
              <span className={styles.sliderValue}>+{premiumLift}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="2"
              value={premiumLift}
              onChange={(e) => setPremiumLift(Number(e.target.value))}
              className={styles.slider}
              aria-label="Pricing Power Lift"
            />
            <div className={styles.sliderHints}>
              <span>+10% (Modest Refine)</span>
              <span>+28% (Typical Rebrand)</span>
              <span>+50% (Luxury Pivot)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Customer Retention &amp; Referral Multiplier
              </span>
              <span className={styles.sliderValue}>{retentionMult.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="1.5"
              step="0.05"
              value={retentionMult}
              onChange={(e) => setRetentionMult(Number(e.target.value))}
              className={styles.slider}
              aria-label="Retention Multiplier"
            />
            <div className={styles.sliderHints}>
              <span>1.0x (No Lift)</span>
              <span>1.2x (Word of Mouth)</span>
              <span>1.5x (Brand Moat)</span>
            </div>
          </div>
        </div>

        {/* Right: Projected Equity Yield */}
        <div className={styles.resultPanel}>
          <div className={styles.resultTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Brand Equity Economics
          </div>

          <div className={styles.statHighlight}>
            <div className={styles.statHighlightLabel}>Extra Net Profit Unlocked</div>
            <div className={styles.statHighlightValue}>+{formatINR(extraMonthlyProfit)}</div>
            <div className={styles.statHighlightSubtitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              Zero extra product COGS — pure gross margin expansion
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>New Premium Fee / Unit</div>
              <div className={styles.metricBoxVal}>{formatINR(newPrice)}</div>
              <div className={styles.metricBoxDiff}>vs {formatINR(dealPrice)} baseline</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Annual Margin Lift</div>
              <div className={styles.metricBoxVal}>{formatINR(extraMonthlyProfit * 12)}</div>
              <div className={styles.metricBoxDiff}>Compounding business value</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Discount Haggling</div>
              <div className={styles.metricBoxVal}>0%</div>
              <div className={styles.metricBoxDiff}>Eliminates price wars</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Trademark Security</div>
              <div className={styles.metricBoxVal}>100% IP</div>
              <div className={styles.metricBoxDiff}>Zero legal vulnerability</div>
            </div>
          </div>

          <Link href="#executive-terminal" className={styles.ctaBtn}>
            <span>Request Brand Identity Discovery</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
