'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  // Toggle sound manually
  const toggleSound = useCallback(() => {
    if (!videoRef.current) return;
    setUserInteracted(true);
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.85;
      videoRef.current.play().catch(() => {});
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  }, [isMuted]);

  // Scroll into view detection for scroll-triggered video sound
  useEffect(() => {
    const el = sectionRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    // Detect user gesture to enable unmuted playback according to browser autoplay policy
    const handleFirstGesture = () => {
      setUserInteracted(true);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
    };
    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('scroll', handleFirstGesture, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          // If user has interacted, un-mute sound automatically when scrolled into section
          if (userInteracted && !isMuted) {
            video.muted = false;
            video.volume = 0.85;
          }
        } else {
          // Auto-mute and pause audio when scrolled away
          video.muted = true;
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
    };
  }, [userInteracted, isMuted]);

  return (
    <section className={styles.section} id="company-story" ref={sectionRef}>
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
                  At <strong>Marketing Copilot</strong>, we engineer full-funnel digital acquisition engines, high-converting creative campaigns, and automated revenue systems that turn customer attention into compounding scale.
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
                    muted={isMuted}
                    playsInline
                    preload="auto"
                  />

                  {/* Sleek Skeuomorphic Speaker Toggle Button (Icon Only) */}
                  <button
                    type="button"
                    onClick={toggleSound}
                    className={`${styles.soundControlBtn} ${!isMuted ? styles.soundActive : ''}`}
                    aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
                    title={isMuted ? 'Click to unmute' : 'Click to mute'}
                  >
                    <span className={styles.soundGlassGloss} />
                    {!isMuted ? (
                      <svg
                        className={styles.speakerSvg}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.25" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" className={styles.wave1} />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" className={styles.wave2} />
                      </svg>
                    ) : (
                      <svg
                        className={styles.speakerSvg}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.2" />
                        <line x1="22" y1="9" x2="16" y2="15" />
                        <line x1="16" y1="9" x2="22" y2="15" />
                      </svg>
                    )}
                  </button>

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

        {/* Center Bottom Discovery CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <BeamButton href="/contact" label="Book a Strategic Discovery Session" size="md" />
        </div>
      </div>
    </section>
  );
}
