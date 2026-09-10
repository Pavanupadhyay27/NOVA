'use client';
import { useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './StoryVideoSection.module.css';

const storyPillars = [
  {
    icon: '🎯',
    title: 'Diagnostic Strategy',
    desc: 'Funnel audits, unit economics modeling, and custom growth architecture.',
  },
  {
    icon: '🎨',
    title: 'High-Impact Creative',
    desc: 'Commercial videography, AI-accelerated copy, and high-converting landing pages.',
  },
  {
    icon: '📈',
    title: 'Compounding Scale',
    desc: 'Algorithmic Meta Ads, Google search dominance, and automated lead pipelines.',
  },
];

export default function StoryVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className={styles.section} id="company-story">
      {/* Soft Ambient Background Blooms */}
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        <div className={styles.dualGrid}>
          {/* ══════════════════════════════════════════════════
              LEFT PANE: MINIMAL & ELEGANT COMPANY STORY
             ══════════════════════════════════════════════════ */}
          <ScrollReveal>
            <div className={styles.storyPane}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span>COMPANY INTRODUCTION</span>
              </div>

              <h2 className={styles.storyHeadline}>
                Growing Brands Through<br />
                <span className={`accent-gradient ${styles.headlineHighlight}`}>
                  Strategy, Creativity & Performance.
                </span>
              </h2>

              <p className={styles.storyLead}>
                At <strong>Nova Spark</strong>, we engineer full-funnel digital acquisition engines, high-converting creative campaigns, and automated revenue systems that turn customer attention into compounding scale.
              </p>

              {/* 3 Minimal Feature Cards */}
              <div className={styles.pillarsList}>
                {storyPillars.map((item, idx) => (
                  <div key={idx} className={styles.pillarCard}>
                    <div className={styles.pillarIconBox}>
                      <span>{item.icon}</span>
                    </div>
                    <div className={styles.pillarContent}>
                      <h3 className={styles.pillarTitle}>{item.title}</h3>
                      <p className={styles.pillarDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className={styles.actionRow}>
                <Link href="/contact" className={styles.primaryBtn}>
                  <span>Start Your Project</span>
                  <span className={styles.arrow}>→</span>
                </Link>
                <div className={styles.trustText}>
                  <span className={styles.star}>★</span>
                  <span>4.9/5 Rating (50+ Brands)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════
              RIGHT PANE: CLEAN PROCESS VIDEO SHOWCASE
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={100}>
            <div className={styles.videoPane}>
              <div className={styles.processHeader}>
                <div className={styles.processEyebrow}>
                  <span className={styles.processPulse} />
                  <span>OUR WORKING PROCESS</span>
                </div>

                <h3 className={styles.processTitle}>
                  See How We Turn Ideas Into Results
                </h3>

                <p className={styles.processDesc}>
                  Take a look at how we move from strategy and creative planning through to execution and business growth you can actually measure.
                </p>
              </div>

              {/* Clean Minimal Video Frame */}
              <div className={styles.videoContainer}>
                <div className={styles.videoBackdrop} />

                <div className={styles.videoWrapper}>
                  <video
                    ref={videoRef}
                    className={styles.videoPlayer}
                    src="/videos/agency-story.mp4"
                    poster="/images/team_office.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  {/* Floating Minimal Founder Badge */}
                  <div className={styles.founderBadge}>
                    <div className={styles.quoteIconBox}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>
                    <div className={styles.founderInfo}>
                      <span className={styles.founderEyebrow}>FOUNDER MESSAGE</span>
                      <span className={styles.founderText}>Building the future of digital growth.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
