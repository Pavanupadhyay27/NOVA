'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './LocalSeoRevenueCalculator.module.css';

export default function LocalSeoRevenueCalculator() {
  const [searchVolume, setSearchVolume] = useState<number>(4500); // 4,500 monthly searches
  const [currentRank, setCurrentRank] = useState<number>(7); // Rank #7
  const [ticketValue, setTicketValue] = useState<number>(1800); // ₹1,800
  const [conversionRate, setConversionRate] = useState<number>(28); // 28%

  // Current capture rate vs Rank #1 capture rate:
  // Rank #1-3 captures ~64% of all local map interaction clicks
  // Outside 3-pack (Rank 4+) captures less than 6%
  const currentCaptureRate = currentRank <= 3 ? 0.35 : 0.05;
  const targetCaptureRate = 0.42; // Rank #1 in 3-pack

  const currentClicks = Math.round(searchVolume * currentCaptureRate);
  const projectedClicks = Math.round(searchVolume * targetCaptureRate);
  const extraInquiries = Math.max(0, projectedClicks - currentClicks);

  const extraPayingCustomers = Math.round(extraInquiries * (conversionRate / 100));
  const extraMonthlyRevenue = extraPayingCustomers * ticketValue;

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
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Monthly &quot;Near Me&quot; Searches (Bhubaneswar Hub)
              </span>
              <span className={styles.sliderValue}>{searchVolume.toLocaleString()} Searches</span>
            </div>
            <input
              type="range"
              min="1000"
              max="20000"
              step="500"
              value={searchVolume}
              onChange={(e) => setSearchVolume(Number(e.target.value))}
              className={styles.slider}
              aria-label="Monthly Local Searches"
            />
            <div className={styles.sliderHints}>
              <span>1,000 (Niche Service)</span>
              <span>10,000</span>
              <span>20,000+ (Retail / Food)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Current Google Maps Rank
              </span>
              <span className={styles.sliderValue}>
                {currentRank <= 3 ? `Rank #${currentRank} (Inside 3-Pack)` : `Rank #${currentRank} (Invisible)`}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={currentRank}
              onChange={(e) => setCurrentRank(Number(e.target.value))}
              className={styles.slider}
              aria-label="Current Maps Rank"
            />
            <div className={styles.sliderHints}>
              <span>Rank #1 (Leader)</span>
              <span>Rank #3 (3-Pack Edge)</span>
              <span>Rank #15 (Lost Traffic)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Average Customer Transaction Value
              </span>
              <span className={styles.sliderValue}>{formatINR(ticketValue)}</span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={ticketValue}
              onChange={(e) => setTicketValue(Number(e.target.value))}
              className={styles.slider}
              aria-label="Average Transaction Value"
            />
            <div className={styles.sliderHints}>
              <span>₹500 (Grocery/Cafe)</span>
              <span>₹15,000</span>
              <span>₹50,000+ (High-Ticket)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                In-Store / Call Conversion Rate
              </span>
              <span className={styles.sliderValue}>{conversionRate}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className={styles.slider}
              aria-label="Walk-in Conversion Rate"
            />
            <div className={styles.sliderHints}>
              <span>10% (Browsers)</span>
              <span>28% (Average)</span>
              <span>50% (High Urgency)</span>
            </div>
          </div>
        </div>

        {/* Right: Projected Revenue Yield */}
        <div className={styles.resultPanel}>
          <div className={styles.resultTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Map 3-Pack Growth Yield
          </div>

          <div className={styles.statHighlight}>
            <div className={styles.statHighlightLabel}>Extra Monthly Revenue Unlocked</div>
            <div className={styles.statHighlightValue}>+{formatINR(extraMonthlyRevenue)}</div>
            <div className={styles.statHighlightSubtitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              Locking Rank #1 captures 42% of all local buyer clicks
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Extra Monthly Inquiries</div>
              <div className={styles.metricBoxVal}>+{extraInquiries}</div>
              <div className={styles.metricBoxDiff}>Calls &amp; Direction requests</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>New In-Store Buyers</div>
              <div className={styles.metricBoxVal}>+{extraPayingCustomers}</div>
              <div className={styles.metricBoxDiff}>Converted walk-in clients</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Estimated Annual Lift</div>
              <div className={styles.metricBoxVal}>{formatINR(extraMonthlyRevenue * 12)}</div>
              <div className={styles.metricBoxDiff}>Recurring annual gross gain</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Organic Ad Savings</div>
              <div className={styles.metricBoxVal}>₹0 Ad Spend</div>
              <div className={styles.metricBoxDiff}>100% Free organic calls</div>
            </div>
          </div>

          <Link href="#executive-terminal" className={styles.ctaBtn}>
            <span>Audit Your Map 3-Pack Footprint</span>
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
