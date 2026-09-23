'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SocialReachCalculator.module.css';

export default function SocialReachCalculator() {
  const [monthlyViews, setMonthlyViews] = useState<number>(150000);
  const [videoCount, setVideoCount] = useState<number>(16);
  const [industry, setIndustry] = useState<'realestate' | 'healthcare' | 'retail' | 'b2b'>('realestate');

  const results = useMemo(() => {
    const industryMultipliers = {
      realestate: { leadRate: 0.0018, ticketAvg: '₹45L+ Villas', followRate: 0.016 },
      healthcare: { leadRate: 0.0024, ticketAvg: 'Consultations', followRate: 0.022 },
      retail: { leadRate: 0.0035, ticketAvg: 'Orders & Visits', followRate: 0.034 },
      b2b: { leadRate: 0.0014, ticketAvg: 'Corporate Retainers', followRate: 0.012 },
    };

    const multiplier = industryMultipliers[industry];
    const newFollowers = Math.round(monthlyViews * multiplier.followRate);
    const qualifiedInquiries = Math.round(monthlyViews * multiplier.leadRate);
    const costPerViewEquivalent = '₹0.12';
    const organicSaveValue = Math.round((monthlyViews * 0.45)); // Value in Rs compared to paid ads

    return {
      newFollowers,
      qualifiedInquiries,
      costPerViewEquivalent,
      organicSaveValue,
      ticketAvg: multiplier.ticketAvg,
    };
  }, [monthlyViews, videoCount, industry]);

  const formatRupees = (amt: number) => {
    if (amt >= 100000) return `₹${(amt / 100000).toFixed(1)} Lakhs`;
    return `₹${amt.toLocaleString('en-IN')}`;
  };

  return (
    <section className={styles.section} id="social-calculator">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.calcDot} />
            <span>Interactive Viral ROI Engine</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Model Your Social Attention <span className="accent-gradient">Into Revenue</span>
          </h2>
          <p className={styles.subhead}>
            Calculate how commercial video Reels compound into organic followers, viral brand authority, and verified customer leads across Bhubaneswar.
          </p>
        </ScrollReveal>

        {/* Engine Console */}
        <div className={styles.engineConsole}>
          {/* Controls */}
          <div className={styles.controlsCol}>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label className={styles.sliderLabel}>Target Monthly Organic Video Views</label>
                <span className={styles.sliderValue}>{(monthlyViews / 1000).toFixed(0)}K views/mo</span>
              </div>
              <input
                type="range"
                min={25000}
                max={1000000}
                step={25000}
                value={monthlyViews}
                onChange={(e) => setMonthlyViews(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderScale}>
                <span>25,000</span>
                <span>500,000</span>
                <span>1,000,000+</span>
              </div>
            </div>

            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label className={styles.sliderLabel}>Monthly Video Production Volume</label>
                <span className={styles.sliderValue}>{videoCount} Reels / Month</span>
              </div>
              <input
                type="range"
                min={8}
                max={24}
                step={4}
                value={videoCount}
                onChange={(e) => setVideoCount(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderScale}>
                <span>8 Reels (Bi-Weekly)</span>
                <span>16 Reels (Standard)</span>
                <span>24 Reels (Domination)</span>
              </div>
            </div>

            {/* Industry Selector */}
            <div className={styles.industryGroup}>
              <label className={styles.industryLabel}>Select Your Commercial Sector</label>
              <div className={styles.industryBtns}>
                {[
                  { id: 'realestate', label: 'Real Estate & Luxury' },
                  { id: 'healthcare', label: 'Healthcare & Clinics' },
                  { id: 'retail', label: 'Fashion & Retail' },
                  { id: 'b2b', label: 'B2B & Higher Education' },
                ].map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    className={`${styles.indBtn} ${industry === ind.id ? styles.indBtnActive : ''}`}
                    onClick={() => setIndustry(ind.id as any)}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.compoundingNote}>
              <span className={styles.noteIcon}>💡</span>
              <span className={styles.noteText}>
                Every Reel produced by Marketing Copilot stays live permanently, generating evergreen inquiries for 6–12 months without ongoing ad spend.
              </span>
            </div>
          </div>

          {/* Results */}
          <div className={styles.resultsCol}>
            <div className={styles.resultsGlow} />
            <div className={styles.resultsHeader}>
              <span className={styles.resBadge}>ORGANIC REVENUE TELEMETRY</span>
              <div className={styles.resHeadline}>Compounding Brand Pipeline</div>
            </div>

            <div className={styles.primaryMetricBlock}>
              <span className={styles.primLabel}>Estimated Direct Monthly Inquiries:</span>
              <span className={styles.primValue}>+{results.qualifiedInquiries} Leads / Mo</span>
              <span className={styles.primSub}>Targeting {results.ticketAvg}</span>
            </div>

            <div className={styles.outputGrid}>
              <div className={styles.outputCard}>
                <span className={styles.outKey}>New Follower Run-Rate</span>
                <span className={styles.outVal}>+{results.newFollowers.toLocaleString()}</span>
                <span className={styles.outSub}>Targeted Odisha Audience</span>
              </div>

              <div className={styles.outputCard}>
                <span className={styles.outKey}>Organic Ad Spend Savings</span>
                <span className={styles.outVal}>{formatRupees(results.organicSaveValue)}</span>
                <span className={styles.outSub}>Equivalent Meta Ad Value</span>
              </div>
            </div>

            <div className={styles.resCtaBox}>
              <Link href="/contact" className={styles.claimAuditBtn}>
                <span>Claim Free Brand Growth Strategy</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
