'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetaSprintRoadmap.module.css';

interface SprintStep {
  week: string;
  phase: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  sla: string;
  specimen: {
    title: string;
    metrics: { label: string; value: string }[];
    note: string;
  };
}

const sprintSteps: SprintStep[] = [
  {
    week: 'Week 01',
    phase: 'Discovery & Angle Scripting',
    badge: 'AUDIENCE & PSYCHOLOGY',
    title: 'Audience Cohort Modeling & 6 Psychological Hooks',
    description: 'We analyze your Bhubaneswar buyer psychology, map geographic interest clusters across Patia, Saheed Nagar, and Infocity, and script 6 distinct psychological video angles.',
    deliverables: [
      'Bhubaneswar customer avatar modeling (HNI, Student, Tech, Family)',
      '6 high-converting 3-second hook scripts (Odia/English bilingual)',
      'Competitor creative audit on Meta Ad Library across Odisha',
      'Meta Business Suite and pixel/CAPI access verification',
    ],
    sla: 'Day 5 Delivery · Complete Hook & Script Deck Approved',
    specimen: {
      title: 'Script Deck Deliverables',
      metrics: [
        { label: 'Angles Scripted', value: '6 Hooks' },
        { label: 'Target Clusters', value: '4 Hubs' },
        { label: 'Audience Pools', value: '180K Reach' },
      ],
      note: 'Client approves scripts via private Loom video breakdown on Day 5.',
    },
  },
  {
    week: 'Week 02',
    phase: 'Production & Video Editing',
    badge: 'CREATIVE SPRINT',
    title: 'Rapid Creative Production: 8 Reels & 12 Carousels',
    description: 'Our creative studio designs, edits, sound-engineers, and color-grades 8 vertical 9:16 video variations with thumb-stopping motion graphics and native subtitles.',
    deliverables: [
      '8 fast-paced 9:16 vertical video reels with captions & sound design',
      '12 high-converting static carousel and single-image variations',
      'Click-to-WhatsApp automated greeting and routing flows scripted',
      'Instant Lead Form logic configured with conditional qualification',
    ],
    sla: 'Day 12 Delivery · 20 Creative Assets Ready for Launch',
    specimen: {
      title: 'Studio Creative Batch',
      metrics: [
        { label: 'Reel Videos', value: '8 Cuts' },
        { label: 'Statics & Carousels', value: '12 Assets' },
        { label: 'WhatsApp Flows', value: 'Active' },
      ],
      note: 'All video assets delivered in 4K resolution optimized for mobile screens.',
    },
  },
  {
    week: 'Week 03',
    phase: 'Algorithmic Testing',
    badge: 'DATA CALIBRATION',
    title: 'Dynamic Creative Testing & CAPI Calibration',
    description: 'We deploy testing budgets using Meta Advantage+ AI, pitting hooks against each other to scientifically identify the top 20% winning creatives with the lowest CPA.',
    deliverables: [
      'Dynamic Creative Testing (DCT) across 4 headline variations',
      'Meta Conversions API (CAPI) server-to-server event verification',
      'Elimination of losing ads within 72 hours of data maturity',
      'First round of qualified phone calls and WhatsApp chats delivered',
    ],
    sla: 'Day 19 Delivery · Winning 20% Creative Angles Isolated',
    specimen: {
      title: 'Algorithmic Testing Signals',
      metrics: [
        { label: 'Event Match Score', value: '9.2 / 10' },
        { label: 'Winning Creative ROAS', value: '3.8X+' },
        { label: 'Cost Per Lead', value: 'Sub-₹25' },
      ],
      note: 'Live Looker Studio dashboard credentials shared with your executive team.',
    },
  },
  {
    week: 'Week 04',
    phase: 'Budget Scaling',
    badge: 'REVENUE EXPANSION',
    title: 'Budget Scaling & Weekly Creative Rotation',
    description: 'With winners validated, we scale ad spend profitably on winning ad sets, expand into lookalike audiences, and begin rotating fresh creative variants to eliminate fatigue.',
    deliverables: [
      'Horizontal budget scaling on top performing Bhubaneswar cohorts',
      'Top 1% Customer Match Lookalike audience activation',
      'Weekly creative refresh cycle kicking off for Month 2 momentum',
      'Executive ROAS and pipeline revenue review meeting',
    ],
    sla: 'Day 30 Delivery · Target 4.5X+ Blended ROAS Achieved',
    specimen: {
      title: 'Scale & Attribution Output',
      metrics: [
        { label: 'Average ROAS', value: '4.8X' },
        { label: 'Monthly Growth', value: '+340%' },
        { label: 'Ad Fatigue Risk', value: '0%' },
      ],
      note: 'Contractual milestone sign-off and expansion into next tier budget.',
    },
  },
];

export default function MetaSprintRoadmap() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = sprintSteps[activeStepIndex];

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>Structured 30-Day Engine</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            The 4-Week Meta Ads <span className="accent-gradient">Sprint Roadmap</span>
          </h2>
          <p className={styles.subhead}>
            From initial hook scripting to high-ROAS budget scaling. Every milestone backed by transparent deliverables and strict SLAs.
          </p>
        </ScrollReveal>

        {/* Roadmap Workstation */}
        <div className={styles.roadmapCard}>
          {/* Top Progress Node Timeline */}
          <div className={styles.timelineBar}>
            {sprintSteps.map((step, idx) => (
              <button
                key={step.week}
                type="button"
                className={`${styles.timelineStepBtn} ${activeStepIndex === idx ? styles.timelineStepActive : ''}`}
                onClick={() => setActiveStepIndex(idx)}
              >
                <span className={styles.stepCircle}>{idx + 1}</span>
                <div className={styles.stepMetaCol}>
                  <span className={styles.stepWeek}>{step.week}</span>
                  <span className={styles.stepPhase}>{step.phase}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Content Stage */}
          <div className={styles.stepContentGrid}>
            {/* Left Column: Details & Deliverables */}
            <div className={styles.stepInfoCol}>
              <div className={styles.stepPillRow}>
                <span className={styles.stepBadgePill}>{currentStep.badge}</span>
                <span className={styles.stepSlaTag}>✓ {currentStep.sla}</span>
              </div>

              <h3 className={styles.stepHeadline}>{currentStep.title}</h3>
              <p className={styles.stepDesc}>{currentStep.description}</p>

              <div className={styles.deliverablesList}>
                <span className={styles.deliverablesLabel}>Milestone Deliverables:</span>
                {currentStep.deliverables.map((item) => (
                  <div key={item} className={styles.deliverableItem}>
                    <span className={styles.checkMark}>✓</span>
                    <span className={styles.deliverableText}>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.ctaWrapper}>
                <Link href="/contact" className={styles.launchSprintBtn}>
                  <span>Initiate Week 01 Discovery Sprint</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Telemetry Specimen */}
            <div className={styles.stepSpecimenCol}>
              <div className={styles.specimenCard}>
                <div className={styles.specimenHeader}>
                  <span className={styles.specimenBadge}>VERIFIED TELEMETRY</span>
                  <span className={styles.specimenTitle}>{currentStep.specimen.title}</span>
                </div>

                <div className={styles.specimenMetricsRow}>
                  {currentStep.specimen.metrics.map((m) => (
                    <div key={m.label} className={styles.metricItem}>
                      <span className={styles.metricVal}>{m.value}</span>
                      <span className={styles.metricLbl}>{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.specimenFooter}>
                  <span className={styles.specimenNote}>💡 {currentStep.specimen.note}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
