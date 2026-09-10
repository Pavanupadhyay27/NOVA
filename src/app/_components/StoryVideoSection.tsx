'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './StoryVideoSection.module.css';

interface StoryPillar {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  icon: string;
  color: string;
}

const pillars: StoryPillar[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Diagnostic Strategy & Market Research',
    shortDesc: 'Auditing unit economics, funnels & competitor landscape.',
    detail: 'Instead of generic marketing tactics, we uncover your brand’s unique competitive moats and develop customized multi-channel roadmaps aligned directly with your business goals.',
    icon: '🎯',
    color: '#0284C7',
  },
  {
    id: 'creativity',
    number: '02',
    title: 'High-Impact Creative & Storytelling',
    shortDesc: 'Commercial videography, AI content & visual conversion hooks.',
    detail: 'We produce thumb-stopping commercial media, AI-accelerated copy, and high-converting landing experiences designed to turn customer attention into emotional resonance.',
    icon: '🎨',
    color: '#6366F1',
  },
  {
    id: 'performance',
    number: '03',
    title: 'Data-Driven Optimization & Compounding Scale',
    shortDesc: 'Omnichannel ad automation, SEO dominance & revenue systems.',
    detail: 'We deploy precision Meta Ads, Google search architectures, and automated CRM pipelines that continuously optimize for maximum return on investment and sustainable scale.',
    icon: '📈',
    color: '#10B981',
  },
];

const capabilityTags = [
  'Technical & Local SEO',
  'Performance Meta Ads',
  'Google Ads & Search SERP',
  'Commercial Photography & Video',
  'AI Content Pipelines',
  'High-Converting Web Design',
  'WhatsApp & Funnel Automation',
];

export default function StoryVideoSection() {
  const [activePillar, setActivePillar] = useState<string>('strategy');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [duration, setDuration] = useState<string>('0:00');
  const [videoError, setVideoError] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback or autoplay policy block
        setIsPlaying(false);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const seekFraction = Math.max(0, Math.min(1, clickX / width));
    videoRef.current.currentTime = seekFraction * (videoRef.current.duration || 0);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  return (
    <section className={styles.section} id="company-story">
      {/* Background Ambient Glowing Orbs */}
      <div className={styles.ambientBlobLeft} />
      <div className={styles.ambientBlobRight} />
      <div className={styles.gridPattern} />

      <div className="container">
        <div className={styles.dualGrid}>
          {/* ══════════════════════════════════════════════════
              LEFT PANE: COMPANY STORY & STRATEGIC FOUNDATION
             ══════════════════════════════════════════════════ */}
          <ScrollReveal>
            <div className={styles.storyPane}>
              {/* Eyebrow Pill */}
              <div className={styles.eyebrowWrap}>
                <span className={styles.eyebrowIcon}>🏢</span>
                <span className={styles.eyebrowText}>COMPANY INTRODUCTION · OUR PHILOSOPHY</span>
              </div>

              {/* Main Headline with Accent Gradient */}
              <h2 className={styles.storyHeadline}>
                Growing Brands Through<br />
                <span className={`accent-gradient ${styles.headlineHighlight}`}>
                  Strategy, Creativity & Performance.
                </span>
              </h2>

              {/* Lead Paragraph */}
              <p className={styles.storyLead}>
                At <strong>Nova Spark</strong>, we believe every successful brand is built on a strong strategic foundation and propelled by high-converting creativity, smart technology, and measurable performance.
              </p>

              <p className={styles.storyBody}>
                As a results-focused digital marketing agency, we partner alongside startups, local leaders, and established enterprises to turn customer attention into sustainable, compounding market growth.
              </p>

              {/* Interactive 3-Pillar Story Cards */}
              <div className={styles.pillarsContainer}>
                <div className={styles.pillarTabs}>
                  {pillars.map((pillar) => {
                    const isActive = activePillar === pillar.id;
                    return (
                      <button
                        key={pillar.id}
                        type="button"
                        onClick={() => setActivePillar(pillar.id)}
                        className={`${styles.pillarTab} ${isActive ? styles.pillarTabActive : ''}`}
                        style={{ '--pillar-color': pillar.color } as React.CSSProperties}
                        aria-expanded={isActive}
                      >
                        <div className={styles.pillarTabHeader}>
                          <span className={styles.pillarNum}>{pillar.number}</span>
                          <span className={styles.pillarIcon}>{pillar.icon}</span>
                          <span className={styles.pillarTitle}>{pillar.title}</span>
                          <span className={styles.pillarChevron}>{isActive ? '▾' : '▸'}</span>
                        </div>

                        {isActive && (
                          <div className={styles.pillarTabBody}>
                            <p className={styles.pillarShort}>{pillar.shortDesc}</p>
                            <p className={styles.pillarDetail}>{pillar.detail}</p>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Capability Matrix Badges */}
              <div className={styles.capsWrapper}>
                <div className={styles.capsHeader}>
                  <span className={styles.capsDot} />
                  <span className={styles.capsTitle}>Core Execution Capabilities</span>
                </div>
                <div className={styles.capsGrid}>
                  {capabilityTags.map((tag, i) => (
                    <span key={i} className={styles.capChip}>
                      <span className={styles.capCheck}>✓</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Proof Strip & CTA */}
              <div className={styles.storyFooter}>
                <Link href="/contact" className={styles.storyPrimaryBtn}>
                  <span>Start Your Growth Journey</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>

                <div className={styles.trustMetric}>
                  <span className={styles.trustScore}>4.9/5</span>
                  <span className={styles.trustLabel}>Client Rating Across 50+ Engagements</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════
              RIGHT PANE: WORKING PROCESS & VIDEO SHOWCASE
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={120}>
            <div className={styles.videoPane}>
              {/* Header Box */}
              <div className={styles.processHeader}>
                <div className={styles.processEyebrow}>
                  <span className={styles.processPulse} />
                  <span>OUR WORKING PROCESS · BEHIND THE SCENES</span>
                </div>

                <h3 className={styles.processTitle}>
                  See How We Turn Ideas Into Results
                </h3>

                <p className={styles.processDesc}>
                  Take an inside look at how our multidisciplinary team moves from diagnostic strategy and creative sprints into live omnichannel execution and measurable commercial impact.
                </p>
              </div>

              {/* Luxury Video Player Container */}
              <div
                className={styles.videoCard}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowControls(true)}
              >
                {/* Outer Ambient Glowing Backlight */}
                <div className={styles.videoBacklight} />

                {/* Inner Player Bezel */}
                <div className={styles.playerFrame}>
                  {/* Top Glass Header Bar */}
                  <div className={styles.playerTopBar}>
                    <div className={styles.topBarLive}>
                      <span className={styles.liveDot} />
                      <span className={styles.liveText}>NOVA SPARK FILM · BEHIND THE SCENES</span>
                    </div>
                    <div className={styles.topBarQuality}>
                      <span>4K UHD</span>
                      <span className={styles.fpsBadge}>60 FPS</span>
                    </div>
                  </div>

                  {/* HTML5 Video Element with Fallback Poster */}
                  <div className={styles.videoViewport} onClick={handlePlayPause}>
                    <video
                      ref={videoRef}
                      className={styles.videoElement}
                      src="/videos/agency-story.mp4"
                      poster="/images/team_office.jpg"
                      autoPlay
                      loop
                      playsInline
                      muted={isMuted}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleLoadedMetadata}
                      onEnded={() => setIsPlaying(false)}
                      onError={() => setVideoError(true)}
                    />

                    {/* Fallback image when video hasn't loaded / error */}
                    {videoError && (
                      <div className={styles.posterFallback}>
                        <Image
                          src="/images/team_office.jpg"
                          alt="Nova Spark team collaborating on strategy and creative campaigns"
                          fill
                          className={styles.fallbackImg}
                        />
                        <div className={styles.fallbackOverlay} />
                      </div>
                    )}

                    {/* Centered Large Floating Glass Play/Pause Action Button */}
                    {(!isPlaying || showControls) && (
                      <button
                        type="button"
                        className={`${styles.centerPlayBtn} ${isPlaying ? styles.centerPlayBtnPlaying : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayPause();
                        }}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        <span className={styles.playBtnAura} />
                        {isPlaying ? (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1.5" />
                            <rect x="14" y="4" width="4" height="16" rx="1.5" />
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '3px' }}>
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>
                    )}

                    {/* Bottom Custom Glass Control Bar */}
                    <div className={`${styles.bottomControlBar} ${showControls || !isPlaying ? styles.controlsVisible : ''}`}>
                      {/* Scrubbable Progress Line */}
                      <div className={styles.progressBarWrap} onClick={(e) => { e.stopPropagation(); handleSeek(e); }}>
                        <div className={styles.progressTrack}>
                          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                        </div>
                      </div>

                      {/* Control Bar Actions */}
                      <div className={styles.controlsRow}>
                        <div className={styles.controlsLeft}>
                          <button
                            type="button"
                            className={styles.miniCtrlBtn}
                            onClick={(e) => { e.stopPropagation(); handlePlayPause(); }}
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                          >
                            {isPlaying ? (
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            ) : (
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </button>

                          <button
                            type="button"
                            className={styles.miniCtrlBtn}
                            onClick={handleMuteToggle}
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                          >
                            {isMuted ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <line x1="23" y1="9" x2="17" y2="15" />
                                <line x1="17" y1="9" x2="23" y2="15" />
                              </svg>
                            ) : (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                              </svg>
                            )}
                          </button>

                          <span className={styles.timeDisplay}>
                            {currentTime} / {duration === '0:00' ? '01:24' : duration}
                          </span>
                        </div>

                        <div className={styles.controlsRight}>
                          <button
                            type="button"
                            className={styles.miniCtrlBtn}
                            onClick={handleFullscreen}
                            aria-label="Fullscreen"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Floating Glassmorphic Founder Badge (Inspired by Reference) */}
                    <div className={styles.founderBadge}>
                      <div className={styles.quoteIconBox}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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

              {/* 3 Process Micro-Proof Chips */}
              <div className={styles.processChips}>
                <div className={styles.processChip}>
                  <span className={styles.chipIcon}>⚡</span>
                  <div className={styles.chipContent}>
                    <span className={styles.chipTitle}>100% In-House</span>
                    <span className={styles.chipSub}>No outsourcing delays</span>
                  </div>
                </div>

                <div className={styles.processChip}>
                  <span className={styles.chipIcon}>🎯</span>
                  <div className={styles.chipContent}>
                    <span className={styles.chipTitle}>Data-Backed Sprints</span>
                    <span className={styles.chipSub}>Agile bi-weekly testing</span>
                  </div>
                </div>

                <div className={styles.processChip}>
                  <span className={styles.chipIcon}>📊</span>
                  <div className={styles.chipContent}>
                    <span className={styles.chipTitle}>Compounding ROI</span>
                    <span className={styles.chipSub}>Transparent metrics</span>
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
