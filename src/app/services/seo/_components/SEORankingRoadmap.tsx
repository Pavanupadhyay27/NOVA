'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SEORankingRoadmap.module.css';

const steps = [
  {
    id: 1,
    phase: 'Phase 1 · Days 1–14',
    name: 'Crawl & Commercial Gap Audit',
    short: 'Audit & Crawl',
    tagline: 'Deep technical crawl across 1,000+ local pages to uncover high-intent commercial keywords competitors missed.',
    chips: ['100% Crawl Coverage', 'Competitor Gap Matrix', 'Schema JSON-LD Audit'],
    metricLabel: 'Technical Health',
    metricVal: '0 Crawl Errors',
    icon: '🔍',
    accent: '#0B2093',
  },
  {
    id: 2,
    phase: 'Phase 2 · Days 15–30',
    name: 'Core Web Vitals & Next.js Speed',
    short: 'Speed & Architecture',
    tagline: 'Sub-second mobile loading, semantic heading structure, and dynamic rich snippets that Google ranks instantly.',
    chips: ['LCP < 0.9s Speed', 'Rich Schema Markup', 'Mobile-First Indexing'],
    metricLabel: 'Google Speed Score',
    metricVal: '99/100 Mobile',
    icon: '⚡',
    accent: '#1D4ED8',
  },
  {
    id: 3,
    phase: 'Phase 3 · Days 31–60',
    name: 'Local Map 3-Pack Moat',
    short: 'Map 3-Pack Moat',
    tagline: 'Hyperlocal geo-coordinate citations across Patia, Saheed Nagar, Infocity, and Cuttack for #1 map rankings.',
    chips: ['Google Business Profile 100%', 'Local Citation Matrix', 'Review Velocity Protocol'],
    metricLabel: 'Bhubaneswar Position',
    metricVal: 'Top 3 Map Pack',
    icon: '📍',
    accent: '#10B981',
  },
  {
    id: 4,
    phase: 'Phase 4 · Days 61–90+',
    name: 'Authority Backlinks & Revenue Scale',
    short: 'Authority & Scale',
    tagline: 'White-hat regional backlinks, commercial topic clustering, and direct conversion tracking on phone inquiries.',
    chips: ['Zero-Spam Backlinks', 'Topical Keyword Clusters', 'Phone Call Attribution'],
    metricLabel: 'Average Revenue Traction',
    metricVal: '+240% Inquiries',
    icon: '🚀',
    accent: '#D97706',
  },
];

const STEP_DURATION = 3000; // Snappy 3-second auto-progression per step

export default function SEORankingRoadmap() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-progress animation with snappy 3-second pacing without laggy 50ms intervals
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    timerRef.current = setTimeout(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, STEP_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeStep, isPaused]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  const togglePause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused((prev) => !prev);
  };

  const current = steps[activeStep - 1];

  return (
    <section 
      className={styles.section}
      id="seo-roadmap"
    >
      <div className={styles.ambientGlow} />

      <div className="container">
        {/* Header with ample top clearance to prevent navbar overlap */}
        <div className={styles.header}>
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className={styles.stepBadgeIcon}>🗺️</span>
              <span>Automated 4-Step Sprint Architecture</span>
            </div>
            <h3 className={`display-lg ${styles.headline}`}>
              The 4-Step Formula to <span className="accent-gradient">#1 Search Dominance</span>
            </h3>
            <p className={styles.subText}>
              A transparent, battle-tested algorithmic sprint engineered for predictable top rankings in Bhubaneswar.
            </p>

            {/* Live Auto-Play Telemetry Pill with Manual Pause/Resume Toggle */}
            <div className={styles.autoPlayStatusPill}>
              <span className={`${styles.liveBlinker} ${isPaused ? styles.liveBlinkerPaused : ''}`} />
              <span className={styles.autoPlayText}>
                {isPaused ? 'Sprint Paused' : `Automated Walkthrough · Phase 0${activeStep} of 04`}
              </span>
              <button
                type="button"
                onClick={togglePause}
                className={styles.pauseBtn}
                aria-label={isPaused ? 'Resume walkthrough' : 'Pause walkthrough'}
              >
                {isPaused ? '▶ Resume' : '⏸ Pause'}
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Step Navigation Bar with Animated Progress Connectors */}
        <div className={styles.navStage}>
          {/* Main Connector Track */}
          <div className={styles.trackLine}>
            <div 
              className={styles.trackProgress} 
              style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            <div 
              className={styles.trackGlowBeam} 
              style={{ left: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className={styles.stepsRow}>
            {steps.map((s) => {
              const isActive = s.id === activeStep;
              const isPast = s.id < activeStep;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleStepClick(s.id)}
                  className={`${styles.stepTab} ${isActive ? styles.stepTabActive : ''} ${isPast ? styles.stepTabPast : ''}`}
                  style={{ '--step-color': s.accent } as React.CSSProperties}
                  aria-label={`Step ${s.id}: ${s.name}`}
                >
                  <div className={styles.stepNumberCircle}>
                    {isPast ? '✓' : `0${s.id}`}
                    {isActive && (
                      <svg key={activeStep} className={styles.circleTimerSvg} viewBox="0 0 54 54">
                        <circle
                          cx="27"
                          cy="27"
                          r="25"
                          className={styles.circleTimerTrack}
                        />
                        <circle
                          cx="27"
                          cy="27"
                          r="25"
                          className={`${styles.circleTimerBar} ${isPaused ? styles.timerPaused : ''}`}
                        />
                      </svg>
                    )}
                  </div>

                  <div className={styles.stepTabMeta}>
                    <span className={styles.stepPhaseText}>{s.phase.split('·')[0]}</span>
                    <span className={styles.stepShortTitle}>{s.short}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tactile Skeuomorphic Showcase Card */}
        <div className={styles.cardWrapper}>
          <div className={styles.showcaseCard}>
            <div className={styles.cardGlassGloss} />

            {/* Left Column: Sprint Deliverables & Details */}
            <div className={styles.cardDetails}>
              <div className={styles.phaseBadgeRow}>
                <span className={styles.phaseChip} style={{ color: current.accent, borderColor: `${current.accent}35`, background: `${current.accent}10` }}>
                  {current.phase}
                </span>
                <span className={styles.livePulseChip}>
                  <span className={styles.pulseDot} style={{ background: current.accent }} />
                  Active Sprint
                </span>
              </div>

              <h4 className={styles.cardTitle}>{current.name}</h4>
              <p className={styles.cardTagline}>{current.tagline}</p>

              {/* 3 Skeuomorphic Deliverable Chips */}
              <div className={styles.chipsRow}>
                {current.chips.map((chip, idx) => (
                  <span key={idx} className={styles.deliverableChip}>
                    <span className={styles.chipCheck}>✓</span>
                    <span>{chip}</span>
                  </span>
                ))}
              </div>

              {/* Target Benchmark Metric Strip */}
              <div className={styles.metricStrip}>
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>{current.metricLabel}</span>
                  <span className={styles.metricValue} style={{ color: current.accent }}>
                    {current.metricVal}
                  </span>
                </div>
                <div className={styles.metricDivider} />
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>Audit SLA</span>
                  <span className={styles.metricValDone}>100% Guaranteed Outcome</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Interactive Visual Canvas */}
            <div className={styles.cardVisual}>
              <div className={styles.visualCanvas}>
                {/* Step 1 Visual: High-Tech Radar Keyword Discovery */}
                {activeStep === 1 && (
                  <div className={styles.radarGraphic}>
                    <div className={styles.radarRing1} />
                    <div className={styles.radarRing2} />
                    <div className={styles.radarSweep} />
                    <div className={`${styles.radarBlip} ${styles.blip1}`}>
                      <span className={styles.blipDot} />
                      <span className={styles.blipTag}>Patia Kw (#1)</span>
                    </div>
                    <div className={`${styles.radarBlip} ${styles.blip2}`}>
                      <span className={styles.blipDot} />
                      <span className={styles.blipTag}>Infocity Kw (#1)</span>
                    </div>
                    <div className={`${styles.radarBlip} ${styles.blip3}`}>
                      <span className={styles.blipDot} />
                      <span className={styles.blipTag}>Saheed Nagar (#1)</span>
                    </div>
                    <div className={styles.radarCenterIcon}>🔍</div>
                    <div className={styles.canvasBadgeBottom}>
                      <span>1,240 Keywords Crawled · 0 Errors</span>
                    </div>
                  </div>
                )}

                {/* Step 2 Visual: Speed Gauge Core Web Vitals */}
                {activeStep === 2 && (
                  <div className={styles.speedGraphic}>
                    <div className={styles.gaugeBox}>
                      <div className={styles.gaugeCircle}>
                        <span className={styles.gaugeScore}>99</span>
                        <span className={styles.gaugeLabel}>Google Speed</span>
                        <div className={styles.gaugeGlowPulse} />
                      </div>
                    </div>
                    <div className={styles.speedStatsRow}>
                      <span className={styles.speedPill}>⚡ LCP 0.8s</span>
                      <span className={styles.speedPill}>⚡ CLS 0.00</span>
                      <span className={styles.speedPill}>⚡ FID 6ms</span>
                    </div>
                    <div className={styles.canvasBadgeBottom}>
                      <span>Core Web Vitals Pass · Mobile &amp; Desktop</span>
                    </div>
                  </div>
                )}

                {/* Step 3 Visual: Google Maps 3-Pack Pin Dropper */}
                {activeStep === 3 && (
                  <div className={styles.mapGraphic}>
                    <div className={styles.mapGridPattern} />
                    <div className={styles.mapPinPulse}>
                      <span className={styles.mapPinIcon}>📍</span>
                      <span className={styles.pinRingPulse} />
                      <span className={styles.pinRingPulse2} />
                    </div>
                    <div className={styles.mapCardSim}>
                      <div className={styles.mapCardHeader}>
                        <span className={styles.mapRankBadge}>#1 RESULT</span>
                        <span className={styles.mapVerified}>✓ Verified</span>
                      </div>
                      <div className={styles.mapCardTitle}>Marketing Copilot</div>
                      <div className={styles.mapCardStars}>★★★★★ 5.0 (128 Reviews)</div>
                      <div className={styles.mapCardGeo}>Patia &amp; Infocity Corridor, Bhubaneswar</div>
                    </div>
                  </div>
                )}

                {/* Step 4 Visual: Compounding Growth Curve */}
                {activeStep === 4 && (
                  <div className={styles.growthGraphic}>
                    <svg className={styles.growthSvg} viewBox="0 0 220 110" fill="none">
                      <path
                        d="M10 95 C 60 90, 100 70, 140 40 C 170 18, 195 12, 210 6"
                        stroke="url(#growthGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle cx="210" cy="6" r="4.5" fill="#10B981" />
                      <defs>
                        <linearGradient id="growthGrad" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F59E0B" />
                          <stop offset="0.5" stopColor="#38BDF8" />
                          <stop offset="1" stopColor="#10B981" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className={styles.growthBadgeCard}>
                      <span className={styles.growthTag}>🚀 Compounding Organic Traction</span>
                      <span className={styles.growthVal}>+240% Inquiries</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Center Bottom CTA Matching Navbar Revolving Border Beam Standard */}
        <div className={styles.bottomCtaRow}>
          <div className={styles.borderBeamWrapper}>
            <div className={styles.borderGlowAmbient} />
            <div className={styles.borderBeamSpin} />
            <Link href="/contact" className={styles.btnRoadmap}>
              <span className={styles.btnShimmer} />
              <span className={styles.btnGlassGloss} />
              <span>Start Your 4-Step Ranking Sprint</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
