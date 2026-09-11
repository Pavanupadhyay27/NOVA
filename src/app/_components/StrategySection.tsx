'use client';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './StrategySection.module.css';

interface StrategyStage {
  num: string;
  name: string;
  tagline: string;
  timeframe: string;
  focus: string;
  color: string;
}

const stages: StrategyStage[] = [
  {
    num: '01',
    name: 'Discover & Diagnose',
    tagline: 'Audit funnels, unit economics & historical ad spend.',
    timeframe: 'Days 1–7',
    focus: 'Diagnostic Audit',
    color: '#0B2093',
  },
  {
    num: '02',
    name: 'Strategy Architecture',
    tagline: 'Custom omnichannel growth & conversion funnel modeling.',
    timeframe: 'Days 8–14',
    focus: 'Growth Blueprint',
    color: '#0D007F',
  },
  {
    num: '03',
    name: 'High-Impact Creative',
    tagline: 'High-converting video hooks, copy & interactive landers.',
    timeframe: 'Days 15–21',
    focus: 'Creative Sprints',
    color: '#EC4899',
  },
  {
    num: '04',
    name: 'Algorithmic Launch',
    tagline: 'Omnichannel campaign activation & automated bidding.',
    timeframe: 'Days 22–30',
    focus: 'Live Deployment',
    color: '#F59E0B',
  },
  {
    num: '05',
    name: 'Scale & Compound',
    tagline: 'Winning creative scaling & secondary channel expansion.',
    timeframe: 'Month 2+',
    focus: 'Compounding Scale',
    color: '#10B981',
  },
];

export default function StrategySection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

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
            CLEAN HORIZONTAL WAVE ROADMAP (ALTERNATING STEPS)
           ══════════════════════════════════════════════════ */}
        <div className={styles.waveRoadmap}>
          {/* Continuous Sinusoidal Broken-Hyphen Wave Track */}
          <div className={styles.waveSvgTrack}>
            <svg
              className={styles.waveSvg}
              viewBox="0 0 1200 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="cleanWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0D007F" />
                  <stop offset="25%" stopColor="#0B2093" />
                  <stop offset="50%" stopColor="#1A3DB5" />
                  <stop offset="75%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <filter id="cleanGlow" x="-10%" y="-30%" width="120%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Underlying Base Broken-Hyphen Wave */}
              <path
                d="M 50,80 C 130,20 190,20 250,80 C 310,140 390,140 450,80 C 510,20 590,20 650,80 C 710,140 790,140 850,80 C 910,20 990,20 1050,80 C 1110,140 1150,110 1180,80"
                stroke="rgba(203, 213, 225, 0.6)"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />

              {/* Glowing Colored Animated Broken-Hyphen Wave */}
              <path
                d="M 50,80 C 130,20 190,20 250,80 C 310,140 390,140 450,80 C 510,20 590,20 650,80 C 710,140 790,140 850,80 C 910,20 990,20 1050,80 C 1110,140 1150,110 1180,80"
                stroke="url(#cleanWaveGrad)"
                strokeWidth="3.5"
                strokeDasharray="10 8"
                strokeLinecap="round"
                className={styles.animatedWave}
                filter="url(#cleanGlow)"
              />
            </svg>
          </div>

          {/* 5-Column Alternating Layout */}
          <div className={styles.stagesGrid}>
            {stages.map((stage, idx) => {
              const isAbove = idx % 2 === 0; // 0, 2, 4 (Above) | 1, 3 (Below)
              const isHovered = activeIdx === idx;

              return (
                <div
                  key={stage.num}
                  className={`${styles.stageColumn} ${isAbove ? styles.colAbove : styles.colBelow} ${isHovered ? styles.colHovered : ''}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  style={{ '--stage-color': stage.color } as React.CSSProperties}
                >
                  {/* TOP ZONE: Content for steps 01, 03, 05 */}
                  <div className={styles.topSlot}>
                    {isAbove && (
                      <div className={styles.stepBubble}>
                        <div className={styles.pillRow}>
                          <span 
                            className={styles.phasePill}
                            style={{ color: stage.color, borderColor: `${stage.color}35`, background: `${stage.color}12` }}
                          >
                            Phase {stage.num}
                          </span>
                          <span className={styles.timePill}>⏱ {stage.timeframe}</span>
                        </div>

                        <h3 className={styles.stepTitle}>{stage.name}</h3>
                        <p className={styles.stepDesc}>{stage.tagline}</p>

                        <span className={styles.focusPill} style={{ color: stage.color }}>
                          <span className={styles.focusDot} style={{ background: stage.color }} />
                          {stage.focus}
                        </span>

                        {/* Broken Hyphen Drop Connector to Node */}
                        <div className={`${styles.hyphenConnector} ${styles.connectorDown}`} />
                      </div>
                    )}
                  </div>

                  {/* CENTER ZONE: 3D Circular Skeuomorphic Node on Wave */}
                  <div className={styles.nodeSlot}>
                    <div 
                      className={styles.circularNode}
                      style={{ borderColor: isHovered ? stage.color : 'rgba(218, 226, 237, 0.95)' }}
                    >
                      <div 
                        className={styles.nodeCore}
                        style={{ background: stage.color }}
                      >
                        <span className={styles.nodeNum}>{stage.num}</span>
                      </div>
                      <span 
                        className={styles.pulseRing}
                        style={{ borderColor: stage.color }}
                      />
                    </div>
                  </div>

                  {/* BOTTOM ZONE: Content for steps 02, 04 */}
                  <div className={styles.bottomSlot}>
                    {!isAbove && (
                      <div className={styles.stepBubble}>
                        {/* Broken Hyphen Rise Connector from Node */}
                        <div className={`${styles.hyphenConnector} ${styles.connectorUp}`} />

                        <div className={styles.pillRow}>
                          <span 
                            className={styles.phasePill}
                            style={{ color: stage.color, borderColor: `${stage.color}35`, background: `${stage.color}12` }}
                          >
                            Phase {stage.num}
                          </span>
                          <span className={styles.timePill}>⏱ {stage.timeframe}</span>
                        </div>

                        <h3 className={styles.stepTitle}>{stage.name}</h3>
                        <p className={styles.stepDesc}>{stage.tagline}</p>

                        <span className={styles.focusPill} style={{ color: stage.color }}>
                          <span className={styles.focusDot} style={{ background: stage.color }} />
                          {stage.focus}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            MOBILE VERTICAL TIMELINE STEPPER (< 900px)
           ══════════════════════════════════════════════════ */}
        <div className={styles.mobileTimeline}>
          {stages.map((stage, idx) => (
            <div 
              key={stage.num} 
              className={styles.mobileStep}
              style={{ '--stage-color': stage.color } as React.CSSProperties}
            >
              <div className={styles.mobileLineCol}>
                <div className={styles.mobileCircularNode}>
                  <div className={styles.mobileNodeCore} style={{ background: stage.color }}>
                    <span className={styles.nodeNum}>{stage.num}</span>
                  </div>
                  <span className={styles.mobilePulseRing} style={{ borderColor: stage.color }} />
                </div>
                {idx < stages.length - 1 && <div className={styles.mobileDashedLine} />}
              </div>

              <div className={styles.mobileCard}>
                <div className={styles.pillRow}>
                  <span 
                    className={styles.phasePill}
                    style={{ color: stage.color, borderColor: `${stage.color}35`, background: `${stage.color}12` }}
                  >
                    Phase {stage.num}
                  </span>
                  <span className={styles.timePill}>⏱ {stage.timeframe}</span>
                </div>

                <h3 className={styles.mobileStepTitle}>{stage.name}</h3>
                <p className={styles.mobileStepDesc}>{stage.tagline}</p>

                <div className={styles.mobileFocusRow}>
                  <span className={styles.focusPill} style={{ color: stage.color }}>
                    <span className={styles.focusDot} style={{ background: stage.color }} />
                    {stage.focus}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
