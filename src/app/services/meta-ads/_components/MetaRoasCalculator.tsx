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
}

const industries: IndustryBenchmark[] = [
  { id: 'd2c', name: 'D2C Ecommerce & Fashion', typicalCpl: 220, typicalRoas: 4.8 },
  { id: 'realestate', name: 'Real Estate & Luxury Housing', typicalCpl: 380, typicalRoas: 6.2 },
  { id: 'clinic', name: 'Healthcare & Dental Clinics', typicalCpl: 160, typicalRoas: 5.1 },
  { id: 'education', name: 'Higher Education & Coaching', typicalCpl: 120, typicalRoas: 4.2 },
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

        {/* Simulator Grid */}
        <div className={styles.simulatorGrid}>
          {/* Controls Column */}
          <div className={styles.controlsCol}>
            {/* Sector Selector */}
            <div className={styles.group}>
              <label className={styles.label}>Select Industry Sector:</label>
              <div className={styles.sectorChips}>
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
              <div className={styles.sliderRow}>
                <span className={styles.sliderTitle}>Monthly Meta Ad Spend:</span>
                <span className={styles.sliderVal}>₹{spend.toLocaleString('en-IN')} / mo</span>
              </div>
              <input
                type="range"
                min="20000"
                max="500000"
                step="10000"
                value={spend}
                onChange={(e) => setSpend(Number(e.target.value))}
                className={styles.sliderInput}
              />
              <div className={styles.ticks}>
                <span>₹20,000 (Testing)</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000 (Scale)</span>
              </div>
            </div>

            {/* Slider 2: Average Deal / Order Value */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderRow}>
                <span className={styles.sliderTitle}>
                  {activeIndustryId === 'd2c' ? 'Average Order Value (AOV):' : 'Average Customer Value:'}
                </span>
                <span className={styles.sliderVal}>₹{dealValue.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className={styles.sliderInput}
              />
              <div className={styles.ticks}>
                <span>₹500</span>
                <span>₹25,000</span>
                <span>₹50,000+</span>
              </div>
            </div>

            <div className={styles.dataNotice}>
              <span>ℹ️ Calibrated against verified client Meta Conversions API (CAPI) metrics in Odisha.</span>
            </div>
          </div>

          {/* Results Output Column */}
          <div className={styles.outputCol}>
            <div className={styles.outputHeader}>
              <span className={styles.outputPill}>PROJECTED 30-DAY OUTCOME</span>
              <span className={styles.cplBenchmark}>Est. CPL: ₹{industry.typicalCpl}</span>
            </div>

            <div className={styles.heroRoasDisplay}>
              <div className={styles.roasValRow}>
                <span className={styles.bigRoasNumber}>{estimatedRoas}X</span>
                <span className={styles.roasTag}>Projected ROAS</span>
              </div>
              <p className={styles.roasSub}>
                Every ₹1 invested in Meta Ads returns approximately ₹{estimatedRoas} in gross sales pipeline.
              </p>
            </div>

            <div className={styles.kpiTilesGrid}>
              <div className={styles.kpiTile}>
                <span className={styles.tileLbl}>Projected Revenue</span>
                <span className={styles.tileValHighlight}>₹{projectedRevenue.toLocaleString('en-IN')}</span>
                <span className={styles.tileSub}>Gross Pipeline Volume</span>
              </div>

              <div className={styles.kpiTile}>
                <span className={styles.tileLbl}>Estimated Customers / Leads</span>
                <span className={styles.tileVal}>{estimatedLeadsOrOrders.toLocaleString('en-IN')}</span>
                <span className={styles.tileSub}>High-Intent Contacts</span>
              </div>

              <div className={styles.kpiTile}>
                <span className={styles.tileLbl}>Target CPA / Lead Cost</span>
                <span className={styles.tileValGreen}>₹{industry.typicalCpl}</span>
                <span className={styles.tileSub}>Verified CAPI Cost</span>
              </div>

              <div className={styles.kpiTile}>
                <span className={styles.tileLbl}>Net Pipeline Yield</span>
                <span className={styles.tileVal}>₹{Math.max(0, projectedRevenue - spend).toLocaleString('en-IN')}</span>
                <span className={styles.tileSub}>Above Ad Expenditure</span>
              </div>
            </div>

            <Link href="/contact" className={styles.calcActionBtn}>
              <span>Lock In This ROAS Engine</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
