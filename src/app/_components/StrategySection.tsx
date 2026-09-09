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
    milestone: 'Forensic Audit & Channel Gap Matrix',
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
    benchmark: '3.5X Capital Efficiency Target',
    milestone: 'Full-Funnel Financial Blueprint',
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
      'High-Converting Video Hooks',
      'Conversion Landing Pages',
      'Creative Sprint Matrix',
      'Brand Asset Library'
    ],
    benchmark: 'Top 1% Click Velocity',
    milestone: 'Production Creative Matrix & Landers',
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
    desc: 'Omnichannel campaign deployment across Meta, Google, and Programmatic with real-time bid optimization.',
    timeframe: 'Days 22–30',
    deliverables: [
      'Server CAPI Tracking',
      'Micro-Audience Routing',
      'Automated Bid Rules',
      'Live Telemetry Dashboard'
    ],
    benchmark: 'Zero Ad Waste',
    milestone: 'Live Omnichannel Campaign Activation',
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
    desc: 'Aggressive scaling on winning creatives, secondary network expansion, and automated retention loops.',
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
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgGlow} />

      <div className="container">
        <ScrollReveal className="text-center">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Our Growth Framework · Execution Blueprint
          </div>
          <h2 className="display-lg" style={{ marginTop: 14 }}>
            From audit to<br />
            <span className="accent-gradient">compounding market scale.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 520, margin: '12px auto 0' }}>
            A 5-stage execution timeline engineered to scale your brand with mathematical precision.
          </p>
        </ScrollReveal>

        {/* Card-Free Vertical Connected Steps Stream */}
        <div className={styles.verticalStepsStream}>
          {/* Continuous Vertical Gradient Spine */}
          <div className={styles.spineBeam} />

          {stages.map((stage, idx) => {
            const isHovered = activeStep === idx;
            return (
              <ScrollReveal key={stage.num} delay={idx * 0.06}>
                <div
                  className={`${styles.verticalStepItem} ${isHovered ? styles.itemActive : ''}`}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  style={{ '--step-color': stage.color } as React.CSSProperties}
                >
                  {/* Left: 3D Spine Node */}
                  <div className={styles.spineNodeCol}>
                    <div className={styles.spineNodeDisk}>
                      <div className={styles.diskOuterRing} style={{ borderColor: stage.color }}>
                        <div className={styles.diskInnerCore} style={{ background: stage.color }}>
                          <span className={styles.diskNum}>{stage.num}</span>
                        </div>
                      </div>
                      <div className={styles.diskPulseRing} style={{ borderColor: `${stage.color}50` }} />
                    </div>
                  </div>

                  {/* Right: Crisp, Card-Free Step Content */}
                  <div className={styles.stepContentStream}>
                    {/* Header Row: Meta Badges */}
                    <div className={styles.stepMetaRow}>
                      <div className={styles.metaBadges}>
                        <span 
                          className={styles.phaseTag}
                          style={{ color: stage.color, background: `${stage.color}12`, borderColor: `${stage.color}30` }}
                        >
                          Phase {stage.num}
                        </span>
                        <span className={styles.timeTag}>
                          ⏱ {stage.timeframe}
                        </span>
                      </div>

                      <div className={styles.benchmarkTag} style={{ color: stage.color }}>
                        <span className={styles.benchmarkDot} style={{ background: stage.color }} />
                        <span>{stage.benchmark}</span>
                      </div>
                    </div>

                    {/* Step Title & Tagline */}
                    <div className={styles.titleWrap}>
                      <h3 className={styles.stepTitle}>{stage.name}</h3>
                      <span className={styles.titleDivider}>—</span>
                      <p className={styles.stepTagline} style={{ color: stage.color }}>{stage.tagline}</p>
                    </div>

                    {/* Concise Editorial Narrative */}
                    <p className={styles.stepDesc}>{stage.desc}</p>

                    {/* Deliverables Stream Chips */}
                    <div className={styles.delRow}>
                      {stage.deliverables.map((item) => (
                        <div key={item} className={styles.delChip}>
                          <span className={styles.chipCheck} style={{ color: stage.color }}>✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Milestone Highlight */}
                    <div className={styles.milestoneStream}>
                      <span className={styles.milestoneBadge} style={{ color: stage.color, borderColor: `${stage.color}35` }}>
                        Milestone
                      </span>
                      <span className={styles.milestoneText}>{stage.milestone}</span>
                    </div>

                    {/* Step Hairline Divider (except last) */}
                    {idx < stages.length - 1 && <div className={styles.stepDivider} />}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
