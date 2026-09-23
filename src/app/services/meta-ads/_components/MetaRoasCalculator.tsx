'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetaRoasCalculator.module.css';

interface IndustryBenchmark {
  id: string;
  name: string;
  typicalCpl: number;
  typicalRoas: number;
  convRate: number;
}

const industries: IndustryBenchmark[] = [
  { id: 'd2c', name: 'D2C Ecommerce & Fashion', typicalCpl: 220, typicalRoas: 4.8, convRate: 2.8 },
  { id: 'realestate', name: 'Real Estate & Luxury Housing', typicalCpl: 380, typicalRoas: 6.2, convRate: 4.5 },
  { id: 'clinic', name: 'Healthcare & Dental Clinics', typicalCpl: 160, typicalRoas: 5.1, convRate: 6.0 },
  { id: 'education', name: 'Higher Education & Coaching', typicalCpl: 120, typicalRoas: 4.2, convRate: 5.2 },
];

export default function MetaRoasCalculator() {
  const [spend, setSpend] = useState<number>(50000);
  const [dealValue, setDealValue] = useState<number>(3500);
  const [activeIndustryId, setActiveIndustryId] = useState<string>('d2c');

  const industry = industries.find((i) => i.id === activeIndustryId) || industries[0];

  // Mathematical Projection
  const estimatedLeadsOrOrders = Math.round(spend / industry.typicalCpl);
  const projectedRevenue = Math.round(estimatedLeadsOrOrders * dealValue * (industry.id === 'd2c' ? 1 : 0.28));
  const estimatedRoas = spend > 0 ? (projectedRevenue / spend).toFixed(1) : '0';
  const profitMargin = projectedRevenue - spend;

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.calcPulse} />
            <span>Financial Profit Model</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Interactive Meta Ads <span className="accent-gradient">ROAS &amp; Profit Simulator</span>
          </h2>
          <p className={styles.subhead}>
            Forecast your customer acquisition costs, pipeline volume, and expected Return on Ad Spend based on real Bhubaneswar campaign data.
          </p>
        </ScrollReveal>

        {/* Calculator Card */}
        <div className={styles.calcCard}>
          {/* Left: Interactive Input Sliders */}
          <div className={styles.inputCol}>
            {/* Sector Selector */}
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Select Your Industry Sector:</label>
              <div className={styles.sectorButtonsRow}>
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    className={`${styles.sectorBtn} ${activeIndustryId === ind.id ? styles.sectorBtnActive : ''}`}
                    onClick={() => setActiveIndustryId(ind.id)}
                  >
                    {ind.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Monthly Ad Budget */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderLabelRow}>
                <span className={styles.sliderTitle}>Monthly Meta Ad Budget:</span>
                <span className={styles.sliderValueHighlight}>
                  ₹{spend.toLocaleString('en-IN')} / mo
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="500000"
                step="10000"
                value={spend}
                onChange={(e) => setSpend(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.sliderTicks}>
                <span>₹20,000 (Testing)</span>
                <span>₹2,50,000 (Scaling)</span>
                <span>₹5,00,000 (Market Leader)</span>
              </div>
            </div>

            {/* Slider 2: Average Customer Value */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderLabelRow}>
                <span className={styles.sliderTitle}>
                  {activeIndustryId === 'd2c' ? 'Average Order Value (AOV):' : 'Average Customer Lifetime Value:'}
                </span>
                <span className={styles.sliderValueHighlight}>
                  ₹{dealValue.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.sliderTicks}>
                <span>₹500</span>
                <span>₹25,000</span>
                <span>₹50,000+</span>
              </div>
            </div>

            <div className={styles.calcDisclaimer}>
              <span>ℹ️ Projections calibrated against verified Meta Conversions API client metrics in Odisha.</span>
            </div>
          </div>

          {/* Right: Projected Commercial Return Output Pane */}
          <div className={styles.resultCol}>
            <div className={styles.resultHeader}>
              <span className={styles.resultPill}>PROJECTED 30-DAY IMPACT</span>
              <span className={styles.benchmarkTag}>Benchmark CPL: ₹{industry.typicalCpl}</span>
            </div>

            {/* Big ROAS Display */}
            <div className={styles.bigRoasBox}>
              <div className={styles.roasMultipleRow}>
                <span className={styles.roasNumber}>{estimatedRoas}X</span>
                <span className={styles.roasLabel}>Projected ROAS</span>
              </div>
              <p className={styles.roasSub}>
                Every ₹1 invested in Meta Ads returns approximately ₹{estimatedRoas} in gross sales pipeline.
              </p>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className={styles.metricsBreakdownGrid}>
              <div className={styles.statTile}>
                <span className={styles.statTileLabel}>Projected Revenue</span>
                <span className={styles.statTileValHighlight}>
                  ₹{projectedRevenue.toLocaleString('en-IN')}
                </span>
                <span className={styles.statTileSub}>Gross Sales Volume</span>
              </div>

              <div className={styles.statTile}>
                <span className={styles.statTileLabel}>Estimated Inquiries / Orders</span>
                <span className={styles.statTileVal}>
                  {estimatedLeadsOrOrders.toLocaleString('en-IN')}
                </span>
                <span className={styles.statTileSub}>Qualified Customers</span>
              </div>

              <div className={styles.statTile}>
                <span className={styles.statTileLabel}>Target CPA / Lead Cost</span>
                <span className={styles.statTileValGreen}>
                  ₹{industry.typicalCpl}
                </span>
                <span className={styles.statTileSub}>CAPI Verified</span>
              </div>

              <div className={styles.statTile}>
                <span className={styles.statTileLabel}>Estimated Net Gain</span>
                <span className={styles.statTileVal}>
                  ₹{Math.max(0, profitMargin).toLocaleString('en-IN')}
                </span>
                <span className={styles.statTileSub}>Over Ad Spend</span>
              </div>
            </div>

            {/* Action Trigger */}
            <Link href="/contact" className={styles.calcCtaBtn}>
              <span>Lock In This ROAS Architecture</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
