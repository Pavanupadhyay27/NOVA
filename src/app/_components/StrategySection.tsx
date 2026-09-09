'use client';
import { useState } from 'react';
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
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className={styles.section} id="growth-framework">
      {/* Background ambient lighting */}
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
            HORIZONTAL UNDULATING WAVE & ALTERNATING NODES
           ══════════════════════════════════════════════════ */}
        <div className={styles.waveContainer}>
          {/* Continuous Sinusoidal Broken-Dot Wave (SVG Track) */}
          <div className={styles.waveSvgTrack}>
            <svg
              className={styles.waveSvg}
              viewBox="0 0 1200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waveGradientFull" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="25%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="75%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>

                <filter id="waveGlow" x="-10%" y="-30%" width="120%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Underlying Base Broken-Hyphen Wave */}
              <path
                d="M 30,100 C 120,20 180,20 240,100 C 300,180 420,180 480,100 C 540,20 660,20 720,100 C 780,180 900,180 960,100 C 1020,20 1110,20 1170,100"
                stroke="rgba(203, 213, 225, 0.6)"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />

              {/* Glowing Colored Broken Hyphen Wave */}
              <path
                d="M 30,100 C 120,20 180,20 240,100 C 300,180 420,180 480,100 C 540,20 660,20 720,100 C 780,180 900,180 960,100 C 1020,20 1110,20 1170,100"
                stroke="url(#waveGradientFull)"
                strokeWidth="3.5"
                strokeDasharray="10 8"
                strokeLinecap="round"
                className={styles.animatedWave}
                filter="url(#waveGlow)"
              />
            </svg>
          </div>

          {/* 5-Column Alternating Layout (Top -> Node -> Bottom) */}
          <div className={styles.waveGrid}>
            {stages.map((stage, idx) => {
              const isAbove = idx % 2 === 0; // 0 (above), 1 (below), 2 (above), 3 (below), 4 (above)
              const isHovered = activeIdx === idx;

              return (
                <div
                  key={stage.num}
                  className={`${styles.waveColumn} ${isAbove ? styles.posAbove : styles.posBelow} ${isHovered ? styles.colActive : ''}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  style={{ '--stage-color': stage.color } as React.CSSProperties}
                >
                  {/* TOP ZONE (Rendered if step is ABOVE) */}
                  <div className={styles.contentZoneTop}>
                    {isAbove && (
                      <div className={styles.stepContentWrap}>
                        {/* Meta Row: Phase & Timeframe */}
                        <div className={styles.metaRow}>
                          <span 
                            className={styles.phasePill}
                            style={{ color: stage.color, borderColor: `${stage.color}40`, background: `${stage.color}10` }}
                          >
                            Phase {stage.num}
                          </span>
                          <span className={styles.timeframePill}>⏱ {stage.timeframe}</span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className={styles.stepTitle}>{stage.name}</h3>
                        <p className={styles.stepTagline} style={{ color: stage.color }}>
                          {stage.tagline}
                        </p>
                        <p className={styles.stepDesc}>{stage.desc}</p>

                        {/* Deliverables Checklist Chips */}
                        <div className={styles.deliverablesList}>
                          {stage.deliverables.slice(0, 3).map((item) => (
                            <div key={item} className={styles.delChip}>
                              <span className={styles.checkIcon} style={{ color: stage.color }}>✓</span>
                              <span className={styles.delText}>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Benchmark Badge */}
                        <div className={styles.benchmarkBadge}>
                          <span className={styles.benchmarkDot} style={{ background: stage.color }} />
                          <span>{stage.benchmark}</span>
                        </div>

                        {/* Vertical Broken Hyphen Drop Connector leading to Circular Node */}
                        <div className={`${styles.verticalConnector} ${styles.connectorDown}`} />
                      </div>
                    )}
                  </div>

                  {/* MIDDLE ZONE: Circular 3D Node Sitting ON the Wave */}
                  <div className={styles.nodeCenterZone}>
                    <div 
                      className={styles.circularNode}
                      style={{ borderColor: isHovered ? stage.color : 'rgba(218, 226, 237, 0.95)' }}
                    >
                      {/* Outer Ring & Pulse Effect */}
                      <div 
                        className={styles.nodeCore}
                        style={{ background: stage.color }}
                      >
                        <span className={styles.nodeNum}>{stage.num}</span>
                      </div>

                      <span 
                        className={styles.nodePulseRing}
                        style={{ borderColor: stage.color }}
                      />
                    </div>
                  </div>

                  {/* BOTTOM ZONE (Rendered if step is BELOW) */}
                  <div className={styles.contentZoneBottom}>
                    {!isAbove && (
                      <div className={styles.stepContentWrap}>
                        {/* Vertical Broken Hyphen Rise Connector coming from Circular Node */}
                        <div className={`${styles.verticalConnector} ${styles.connectorUp}`} />

                        {/* Meta Row: Phase & Timeframe */}
                        <div className={styles.metaRow}>
                          <span 
                            className={styles.phasePill}
                            style={{ color: stage.color, borderColor: `${stage.color}40`, background: `${stage.color}10` }}
                          >
                            Phase {stage.num}
                          </span>
                          <span className={styles.timeframePill}>⏱ {stage.timeframe}</span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className={styles.stepTitle}>{stage.name}</h3>
                        <p className={styles.stepTagline} style={{ color: stage.color }}>
                          {stage.tagline}
                        </p>
                        <p className={styles.stepDesc}>{stage.desc}</p>

                        {/* Deliverables Checklist Chips */}
                        <div className={styles.deliverablesList}>
                          {stage.deliverables.slice(0, 3).map((item) => (
                            <div key={item} className={styles.delChip}>
                              <span className={styles.checkIcon} style={{ color: stage.color }}>✓</span>
                              <span className={styles.delText}>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Benchmark Badge */}
                        <div className={styles.benchmarkBadge}>
                          <span className={styles.benchmarkDot} style={{ background: stage.color }} />
                          <span>{stage.benchmark}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
