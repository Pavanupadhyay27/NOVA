'use client';
import { useRef, useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './StoryVideoSection.module.css';

const storyPillars = [
  {
    icon: '🎯',
    title: 'Diagnostic Strategy & Moats',
    desc: 'Funnel audits, unit economics modeling, and custom omnichannel growth architecture.',
  },
  {
    icon: '🎨',
    title: 'High-Impact Creative & Media',
    desc: 'Commercial videography, AI-accelerated copy, and landing pages engineered to convert.',
  },
  {
    icon: '📈',
    title: 'Compounding Algorithmic Scale',
    desc: 'Omnichannel Meta Ads, Google search SERP dominance, and automated lead pipelines.',
  },
];

export default function StoryVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className={styles.section} id="company-story">
      {/* Soft Ambient Background Glows */}
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        <div className={styles.dualGrid}>
          {/* ══════════════════════════════════════════════════
              LEFT PANE: COMPANY INTRODUCTION
             ══════════════════════════════════════════════════ */}
          <ScrollReveal className={styles.revealCol}>
            <div className={styles.paneCard}>
              <div className={styles.paneHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span>COMPANY INTRODUCTION</span>
                </div>

                <h3 className={styles.headline}>
                  Growing Brands Through<br />
                  <span className={`accent-gradient ${styles.headlineHighlight}`}>
                    Strategy, Creativity &amp; Performance.
                  </span>
                </h3>

                <p className={styles.leadText}>
                  At <strong>Nova Spark</strong>, we engineer full-funnel digital acquisition engines, high-converting creative campaigns, and automated revenue systems that turn customer attention into compounding scale.
                </p>
              </div>

              {/* 3 Larger & Aligned Feature Cards */}
              <div className={styles.pillarsList}>
                {storyPillars.map((item, idx) => (
                  <div key={idx} className={styles.pillarCard}>
                    <div className={styles.pillarIconBox}>
                      <span>{item.icon}</span>
                    </div>
                    <div className={styles.pillarContent}>
                      <h4 className={styles.pillarTitle}>{item.title}</h4>
                      <p className={styles.pillarDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════
              RIGHT PANE: OUR WORKING PROCESS & EQUAL VIDEO
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={100} className={styles.revealCol}>
            <div className={styles.paneCard}>
              <div className={styles.paneHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDotIndigo} />
                  <span>OUR WORKING PROCESS</span>
                </div>

                <h3 className={styles.headline}>
                  See How We Turn Ideas<br />
                  <span className={`accent-gradient ${styles.headlineHighlight}`}>
                    Into Compounding Results.
                  </span>
                </h3>

                <p className={styles.leadText}>
                  Take an inside look at how our team moves from strategy and creative planning through to live execution and business growth you can actually measure.
                </p>
              </div>

              {/* Video Viewport Locked in Equal Height to Left Cards */}
              <div className={styles.videoContainer}>
                <div className={styles.videoBackdrop} />

                <div className={styles.videoWrapper}>
                  <video
                    ref={videoRef}
                    className={styles.videoPlayer}
                    src="/videos/NS REEL 22 AUG.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
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
