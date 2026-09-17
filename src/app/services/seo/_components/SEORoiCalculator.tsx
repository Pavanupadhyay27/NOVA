'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SEORoiCalculator.module.css';

type SeoIntentType = 'local_services' | 'enterprise_b2b';

const presets = [
  { label: '2.5K Clicks', value: 2500 },
  { label: '5K Clicks', value: 5000 },
  { label: '10K Clicks', value: 10000 },
  { label: '25K Clicks', value: 25000 },
  { label: '50K Clicks', value: 50000 },
];

export default function SEORoiCalculator() {
  const [traffic, setTraffic] = useState<number>(8500);
  const [intent, setIntent] = useState<SeoIntentType>('local_services');

  // Dynamic calculations based on verified organic conversion benchmarks in Bhubaneswar
  const stats = useMemo(() => {
    if (intent === 'local_services') {
      // Local retail, clinics, dining, home services
      const conversionRate = 0.048; // 4.8% visitor to call/inquiry
      const monthlyInquiries = Math.round(traffic * conversionRate);
      const avgGoogleAdCpc = 38; // ₹38 per commercial click
      const freeTrafficValue = traffic * avgGoogleAdCpc;
      const avgLeadValue = 3500;
      const pipelineValue = Math.round(monthlyInquiries * avgLeadValue * 0.35); // 35% close rate

      return {
        inquiriesLabel: 'Verified Phone & WhatsApp Inquiries',
        inquiriesCount: monthlyInquiries.toLocaleString('en-IN'),
        trafficValueLabel: 'Equivalent Google Ads Ad Spend Saved',
        trafficValue: `₹${(freeTrafficValue / 100000).toFixed(1)} Lakhs/mo`,
        pipelineLabel: 'Estimated Monthly Revenue Pipeline',
        pipelineValue: `₹${(pipelineValue / 100000).toFixed(1)} Lakhs`,
        cplEquivalent: '₹18–₹35',
        cplTag: 'Effective CPL (Compounding)',
        note: 'Calculated using verified Local Map 3-Pack click-to-call intent rates across Bhubaneswar.',
      };
    } else {
      // Real estate, B2B, legal, luxury hospitality
      const conversionRate = 0.024; // 2.4% high-ticket inquiry
      const monthlyInquiries = Math.round(traffic * conversionRate);
      const avgGoogleAdCpc = 85; // ₹85 per high-ticket click
      const freeTrafficValue = traffic * avgGoogleAdCpc;
      const avgDealValue = 85000;
      const pipelineValue = Math.round(monthlyInquiries * avgDealValue * 0.18); // 18% close rate

      return {
        inquiriesLabel: 'High-Ticket Qualified Inquiries',
        inquiriesCount: monthlyInquiries.toLocaleString('en-IN'),
        trafficValueLabel: 'Equivalent Google Ads Ad Spend Saved',
        trafficValue: `₹${(freeTrafficValue / 100000).toFixed(1)} Lakhs/mo`,
        pipelineLabel: 'Estimated High-Net-Worth Pipeline',
        pipelineValue: `₹${(pipelineValue / 100000).toFixed(1)} Lakhs`,
        cplEquivalent: '₹45–₹70',
        cplTag: 'Effective CPL (Compounding)',
        note: 'Engineered for Patia tech parks, luxury real estate buyers, and regional B2B contracts.',
      };
    }
  }, [traffic, intent]);

  const formatTraffic = (val: number) => {
    if (val >= 1000) {
      return `${(val / 1000).toFixed(val % 1000 === 0 ? 0 : 1)}K Monthly Visits`;
    }
    return `${val} Monthly Visits`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 10px' }}>
              <span className={styles.calcIcon}>📈</span>
              <span>Interactive SEO Revenue &amp; Traffic Projection Matrix</span>
            </div>
            <h3 className={`display-lg ${styles.headline}`}>
              Calculate What Ranking <span className="accent-gradient">#1 on Google</span> Is Worth
            </h3>
            <p className={styles.subText}>
              Unlike paid ads that stop the second you pause spending, organic SEO compounds perpetually. Estimate the free high-intent inquiries and commercial ad-spend savings Google dominance will generate for your business.
            </p>
          </ScrollReveal>
        </div>

        {/* Master Skeuomorphic Console */}
        <ScrollReveal delay={80}>
          <div className={styles.calcConsole}>
            <div className={styles.consoleGlow} />

            {/* Left Column: Interactive Inputs */}
            <div className={styles.inputPane}>
              {/* Category Intent Tabs */}
              <div className={styles.goalSection}>
                <label className={styles.inputSectionLabel}>Select Your Industry &amp; Target Category</label>
                <div className={styles.segmentedToggle}>
                  <button
                    type="button"
                    className={`${styles.segmentBtn} ${intent === 'local_services' ? styles.segmentBtnActive : ''}`}
                    onClick={() => setIntent('local_services')}
                  >
                    <span className={styles.btnIcon}>📍</span>
                    <span>Local Services, Clinics &amp; Retail</span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.segmentBtn} ${intent === 'enterprise_b2b' ? styles.segmentBtnActive : ''}`}
                    onClick={() => setIntent('enterprise_b2b')}
                  >
                    <span className={styles.btnIcon}>🏢</span>
                    <span>Real Estate &amp; Enterprise B2B</span>
                  </button>
                </div>
              </div>

              {/* Monthly Organic Traffic Slider */}
              <div className={styles.budgetSection}>
                <div className={styles.budgetHeader}>
                  <label htmlFor="trafficSlider" className={styles.inputSectionLabel}>
                    Target Monthly Organic Search Clicks
                  </label>
                  <span className={styles.budgetDisplay}>{formatTraffic(traffic)}</span>
                </div>

                <div className={styles.sliderTrackWrap}>
                  <input
                    id="trafficSlider"
                    type="range"
                    min={1000}
                    max={50000}
                    step={500}
                    value={traffic}
                    onChange={(e) => setTraffic(Number(e.target.value))}
                    className={styles.rangeInput}
                    aria-label="Target monthly organic traffic"
                  />
                  <div
                    className={styles.sliderFill}
                    style={{ width: `${((traffic - 1000) / (50000 - 1000)) * 100}%` }}
                  />
                </div>

                {/* Quick Presets */}
                <div className={styles.presetsRow}>
                  <span className={styles.presetLabel}>Quick Targets:</span>
                  <div className={styles.presetsList}>
                    {presets.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        className={`${styles.presetBtn} ${traffic === p.value ? styles.presetBtnActive : ''}`}
                        onClick={() => setTraffic(p.value)}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Value Add Note */}
              <div className={styles.guaranteePill}>
                <span className={styles.shieldIcon}>🛡️</span>
                <span>
                  <strong>Marketing Copilot SEO Engine:</strong> White-hat Core Web Vitals (under 1.2s), schema architecture, and geo-targeted topical maps that Google rewards permanently.
                </span>
              </div>
            </div>

            {/* Right Column: 3D Skeuomorphic Telemetry Dashboard */}
            <div className={styles.outputPane}>
              <div className={styles.telemetryCardHeader}>
                <div className={styles.liveIndicator}>
                  <span className={styles.livePulse} />
                  <span>ORGANIC VALUATION TELEMETRY</span>
                </div>
                <span className={styles.modelTag}>Bhubaneswar SERP Engine</span>
              </div>

              {/* Metric 1 & 2 Cards */}
              <div className={styles.metricsGrid}>
                {/* Metric Card 1: Inquiries */}
                <div className={styles.telemetryCard}>
                  <div className={styles.cardGlowEdge} />
                  <div className={styles.telemetryLabel}>{stats.inquiriesLabel}</div>
                  <div className={styles.telemetryValue}>{stats.inquiriesCount}</div>
                  <div className={styles.telemetrySub}>Avg Rate: <strong>High Proximity Intent</strong></div>
                </div>

                {/* Metric Card 2: Ad Spend Saved */}
                <div className={`${styles.telemetryCard} ${styles.telemetryCardAdVal}`}>
                  <div className={styles.cardGlowEdge} />
                  <div className={styles.telemetryLabel}>{stats.trafficValueLabel}</div>
                  <div className={styles.telemetryValueVal}>{stats.trafficValue}</div>
                  <div className={styles.telemetrySub}>Valuation: <strong>100% Free Organic Traffic</strong></div>
                </div>
              </div>

              {/* Full Width Revenue Pipeline Card */}
              <div className={styles.pipelineCard}>
                <div className={styles.pipelineLeft}>
                  <span className={styles.pipelineLabel}>{stats.pipelineLabel}</span>
                  <div className={styles.pipelineNumber}>{stats.pipelineValue}</div>
                </div>
                <div className={styles.pipelineSpark}>
                  <svg width="110" height="34" viewBox="0 0 110 34" fill="none">
                    <path
                      d="M2 30 C 25 28, 40 18, 60 20 C 75 22, 90 8, 108 3"
                      stroke="#10B981"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                    <circle cx="108" cy="3" r="3.5" fill="#10B981" />
                  </svg>
                  <span className={styles.sparkCaption}>Durable Search Moat</span>
                </div>
              </div>

              {/* Bottom Projection Footer & CTA with navbar border beam */}
              <div className={styles.outputActionRow}>
                <p className={styles.disclaimerText}>{stats.note}</p>
                
                <div className={styles.borderBeamWrapper}>
                  <div className={styles.borderGlowAmbient} />
                  <div className={styles.borderBeamSpin} />
                  <Link href="/contact" className={styles.btnLaunchStrategy}>
                    <span className={styles.btnShimmer} />
                    <span className={styles.btnGlassGloss} />
                    <span className={styles.btnText}>Audit My Keywords &amp; Claim #1 Position</span>
                    <span className={styles.btnArrow}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
