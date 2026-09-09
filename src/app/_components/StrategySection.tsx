'use client';
import { useState, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './StrategySection.module.css';

interface StrategyStage {
  num: string;
  name: string;
  tagline: string;
  desc: string;
  timeframe: string;
  deliverables: string[];
  benchmark: string;
  milestone: string;
  color: string;
  icon: React.ReactNode;
}

const stages: StrategyStage[] = [
  {
    num: '01',
    name: 'Discover & Diagnose',
    tagline: 'Commercial & Unit Economics Audit',
    desc: 'Forensic audit of historical ad spend, customer economics, and funnels to unlock high-leverage growth vectors.',
    timeframe: 'Days 1–7',
    deliverables: [
      'Unit Economics Audit',
      'Customer Psychology Map',
      'Competitor Gap Analysis',
      'Ad Account Teardown'
    ],
    benchmark: '100% Diagnostic Clarity',
    milestone: 'Forensic Audit & Gap Matrix',
    color: '#0284C7',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Strategy Architecture',
    tagline: 'Full-Funnel Growth Engineering',
    desc: 'Custom omnichannel growth architecture mapping acquisition channels, conversion funnels, and CAC:LTV models.',
    timeframe: 'Days 8–14',
    deliverables: [
      'Channel Mix Blueprint',
      'Full-Funnel CRO System',
      'Server-Side Attribution',
      'CAC:LTV Forecast Engine'
    ],
    benchmark: '3.5X Capital Efficiency',
    milestone: 'Financial Growth Blueprint',
    color: '#6366F1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'High-Impact Creative',
    tagline: 'Asset Production Sprint',
    desc: 'High-converting UGC video hooks, persuasion copywriting, and interactive landers designed to stop the scroll.',
    timeframe: 'Days 15–21',
    deliverables: [
      'High-Converting Hooks',
      'Conversion Landing Pages',
      'Creative Sprint Matrix',
      'Brand Asset Library'
    ],
    benchmark: 'Top 1% Click Velocity',
    milestone: 'Production Creative Matrix',
    color: '#EC4899',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Algorithmic Launch',
    tagline: 'Precision Campaign Deployment',
    desc: 'Omnichannel campaign deployment across Meta, Google, and Programmatic with real-time automated bid optimization.',
    timeframe: 'Days 22–30',
    deliverables: [
      'Server CAPI Tracking',
      'Micro-Audience Routing',
      'Automated Bid Rules',
      'Live Telemetry Dashboard'
    ],
    benchmark: 'Zero Media Waste',
    milestone: 'Omnichannel Activation',
    color: '#F59E0B',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Scale & Compound',
    tagline: 'Compounding Revenue Engine',
    desc: 'Aggressive scaling on winning creatives, secondary network expansion, and automated high-retention customer loops.',
    timeframe: 'Month 2+',
    deliverables: [
      'Winning Creative Scaler',
      'Network Expansion',
      'Retention & LTV Loops',
      'Quarterly Scale Reviews'
    ],
    benchmark: '+142% Annual Scale',
    milestone: 'Compounding ARR Engine',
    color: '#10B981',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
];

export default function StrategySection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleStageClick = (idx: number) => {
    setActiveStage(idx);
    if (scrollRef.current) {
      const stageElements = scrollRef.current.querySelectorAll(`.${styles.waveStageCard}`);
      if (stageElements[idx]) {
        stageElements[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handlePrev = () => {
    handleStageClick(Math.max(0, activeStage - 1));
  };

  const handleNext = () => {
    handleStageClick(Math.min(stages.length - 1, activeStage + 1));
  };

  return (
    <section className={styles.section} id="growth-framework">
      <div className={styles.bgGlow} />

      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="text-center">
          <div className={styles.headerWrap}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Our Growth Framework · Execution Blueprint</span>
            </div>
            <h2 className={styles.title}>
              From audit to<br />
              <span className={styles.titleGradient}>compounding market scale.</span>
            </h2>
            <p className={styles.subtitle}>
              A 5-stage execution timeline engineered to scale your brand with mathematical precision.
            </p>
          </div>
        </ScrollReveal>

        {/* ══════════════════════════════════════════════════
            HORIZONTAL WAVE ROADMAP CONTAINER
           ══════════════════════════════════════════════════ */}
        <div className={styles.waveRoadmapWrap}>
          {/* Horizontal Sinusoidal Broken-Dot Wave Track (Desktop SVG) */}
          <div className={styles.waveSvgTrack}>
            <svg 
              className={styles.waveSvg} 
              viewBox="0 0 1200 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="25%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="75%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>

                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                </linearGradient>

                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Underlying Broken Hyphenated Sine Wave */}
              <path
                d="M 60,60 C 200,10 260,110 380,60 C 500,10 560,110 680,60 C 800,10 860,110 980,60 C 1060,20 1140,70 1180,60"
                stroke="rgba(203, 213, 225, 0.7)"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />

              {/* Vibrant Colored Glowing Broken-Dot Wave */}
              <path
                d="M 60,60 C 200,10 260,110 380,60 C 500,10 560,110 680,60 C 800,10 860,110 980,60 C 1060,20 1140,70 1180,60"
                stroke="url(#waveGradient)"
                strokeWidth="3"
                strokeDasharray="10 8"
                strokeLinecap="round"
                className={styles.animatedWavePath}
                filter="url(#glowEffect)"
              />

              {/* Vertical Broken Hyphen Drop Connectors for each Node */}
              <line x1="120" y1="60" x2="120" y2="115" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="360" y1="60" x2="360" y2="115" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="600" y1="60" x2="600" y2="115" stroke="#EC4899" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="840" y1="60" x2="840" y2="115" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="1080" y1="60" x2="1080" y2="115" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
            </svg>
          </div>

          {/* Interactive Horizontal Navigation Stepper */}
          <div className={styles.stepperNav}>
            {stages.map((st, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => handleStageClick(idx)}
                  className={`${styles.stepNavBtn} ${isSelected ? styles.stepNavBtnActive : ''}`}
                  style={{ '--stage-color': st.color } as React.CSSProperties}
                  aria-label={`Jump to stage ${st.num}: ${st.name}`}
                >
                  <div className={styles.stepNodeOuter}>
                    <div className={styles.stepNodeCore} style={{ background: st.color }}>
                      <span className={styles.stepNodeNum}>{st.num}</span>
                    </div>
                    {isSelected && <span className={styles.nodePulseRing} style={{ borderColor: st.color }} />}
                  </div>
                  <div className={styles.stepNavText}>
                    <span className={styles.navPhase}>Phase {st.num}</span>
                    <strong className={styles.navName}>{st.name}</strong>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 5-Column Horizontal Cards Grid / Stream with Smooth Wave Transitions */}
          <div className={styles.cardsStream} ref={scrollRef}>
            {stages.map((stage, idx) => {
              const isFocused = activeStage === idx;
              return (
                <div
                  key={stage.num}
                  className={`${styles.waveStageCard} ${isFocused ? styles.cardFocused : ''}`}
                  onMouseEnter={() => setActiveStage(idx)}
                  style={{ '--stage-color': stage.color } as React.CSSProperties}
                >
                  {/* Top Wave Anchor & Phase Badge */}
                  <div className={styles.cardHeader}>
                    <div className={styles.stageOrbWrap}>
                      <div className={styles.stageOrb} style={{ background: stage.color }}>
                        <span>{stage.num}</span>
                      </div>
                      <span className={styles.hyphenConnector} />
                    </div>

                    <div className={styles.headerMeta}>
                      <span 
                        className={styles.phaseBadge}
                        style={{ color: stage.color, borderColor: `${stage.color}35`, background: `${stage.color}10` }}
                      >
                        Phase {stage.num}
                      </span>
                      <span className={styles.timeframePill}>⏱ {stage.timeframe}</span>
                    </div>
                  </div>

                  {/* Stage Name & Tagline */}
                  <div className={styles.cardBody}>
                    <h3 className={styles.stageName}>{stage.name}</h3>
                    <p className={styles.stageTagline} style={{ color: stage.color }}>
                      {stage.tagline}
                    </p>
                    <p className={styles.stageDesc}>{stage.desc}</p>
                  </div>

                  {/* Deliverables Checklist Chips */}
                  <div className={styles.deliverablesList}>
                    <span className={styles.delHeader}>Core Deliverables:</span>
                    {stage.deliverables.map((item) => (
                      <div key={item} className={styles.delItem}>
                        <span className={styles.checkIcon} style={{ color: stage.color }}>✓</span>
                        <span className={styles.delText}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Milestone & Benchmark Footer */}
                  <div className={styles.cardFooter}>
                    <div className={styles.benchmarkRow}>
                      <span className={styles.benchmarkDot} style={{ background: stage.color }} />
                      <span className={styles.benchmarkText}>{stage.benchmark}</span>
                    </div>

                    <div className={styles.milestonePill}>
                      <span className={styles.milestoneTag}>Milestone</span>
                      <span className={styles.milestoneVal}>{stage.milestone}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Slider Controls */}
          <div className={styles.sliderControls}>
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeStage === 0}
              className={styles.sliderArrowBtn}
              aria-label="Previous Stage"
            >
              ← Previous Phase
            </button>

            <div className={styles.sliderIndicators}>
              {stages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleStageClick(i)}
                  className={`${styles.indicatorDot} ${activeStage === i ? styles.indicatorDotActive : ''}`}
                  aria-label={`Slide to stage ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeStage === stages.length - 1}
              className={styles.sliderArrowBtn}
              aria-label="Next Stage"
            >
              Next Phase →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
