'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SocialGrowthRoadmap.module.css';

interface SocialSprintPhase {
  phase: string;
  days: string;
  title: string;
  summary: string;
  deliverables: string[];
  kpi: string;
}

const socialPhases: SocialSprintPhase[] = [
  {
    phase: 'PHASE 01',
    days: 'Days 1–7',
    title: 'Content Pillar Matrix & Scriptwriting',
    summary: 'We audit your Bhubaneswar competitors, identify high-intent buyer questions, and script 8–16 viral video hooks.',
    deliverables: [
      '4 core content pillars mapped: Authority, Proof, Local, & Offer',
      '8–16 bespoke scripts written with dual Odia/English hooks',
      'Moodboard & aesthetic color guide approved by your leadership',
      'On-camera coaching guidelines prepared for shoot day',
    ],
    kpi: '100% Script Approval',
  },
  {
    phase: 'PHASE 02',
    days: 'Days 8–14',
    title: '4K On-Location Studio Production',
    summary: 'Our cinema production crew arrives at your Bhubaneswar location with Sony FX3 cameras, studio lighting, and audio equipment.',
    deliverables: [
      'Full-day cinema shoot capturing 16+ video concepts',
      'Studio lighting setup and dual wireless audio capture',
      'B-roll footage capturing your team, showroom, and happy clients',
      'Raw footage backed up on redundant local NVMe drives',
    ],
    kpi: 'All 16 Master Takes Captured',
  },
  {
    phase: 'PHASE 03',
    days: 'Days 15–21',
    title: 'Viral Editing & Lead Funnel Automation',
    summary: 'Kinetic subtitles, sound design, color grading, and ManyChat automated WhatsApp lead funnels configured.',
    deliverables: [
      'DaVinci Resolve cinematic color grading for all 16 Reels',
      'Kinetic animated word-by-word subtitles and sound effects',
      'ManyChat automated comment-to-DM WhatsApp trigger setup',
      'Client preview portal for 1-click video revisions and sign-off',
    ],
    kpi: 'Full Month Content Scheduled',
  },
  {
    phase: 'PHASE 04',
    days: 'Days 22–30',
    title: 'Algorithmic Distribution & Lead Tracking',
    summary: 'Daily peak-time posting, 15-minute response SLAs, organic reach amplification, and live Looker Studio reporting.',
    deliverables: [
      'Daily scheduled publishing across Instagram, YouTube Shorts, & LinkedIn',
      'Active comment moderation & 15-min response SLA during business hours',
      'Weekly performance analytics tracking follower growth and lead volume',
      'Continuous iteration on top-performing hooks for next month’s sprint',
    ],
    kpi: 'Weekly Client Retrospective Live',
  },
];

export default function SocialGrowthRoadmap() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section className={styles.section} id="roadmap">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.roadDot} />
            <span>30-Day Content Roadmap</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            From Script to Viral Distribution in <span className="accent-gradient">30 Days</span>
          </h2>
          <p className={styles.subhead}>
            A repeatable, professional studio process engineered to build market dominance across Bhubaneswar without exhausting your internal team.
          </p>
        </ScrollReveal>

        {/* Phase Grid */}
        <div className={styles.phasesGrid}>
          {socialPhases.map((p, idx) => {
            const isSelected = activePhase === idx;
            return (
              <div
                key={p.phase}
                className={`${styles.phaseCard} ${isSelected ? styles.phaseCardActive : ''}`}
                onClick={() => setActivePhase(idx)}
              >
                <div className={styles.phaseHeader}>
                  <span className={styles.phaseTag}>{p.phase}</span>
                  <span className={styles.daysTag}>{p.days}</span>
                </div>

                <h3 className={styles.phaseTitle}>{p.title}</h3>
                <p className={styles.phaseSummary}>{p.summary}</p>

                <div className={styles.delivList}>
                  {p.deliverables.map((d, i) => (
                    <div key={i} className={styles.delivItem}>
                      <span className={styles.delivCheck}>✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.kpiFooter}>
                  <span className={styles.kpiLabel}>Milestone Exit Gate:</span>
                  <span className={styles.kpiValue}>{p.kpi}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
