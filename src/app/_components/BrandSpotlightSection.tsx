'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './BrandSpotlightSection.module.css';

interface CarouselSlide {
  id: string;
  src: string;
  fallback: string;
  title: string;
  tag: string;
}

const ekatraaSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    src: '/images/Carousel4_01.jpg.jpeg',
    fallback: '/images/Ekatraa.jpg',
    title: 'Brand Identity & Visual Architecture',
    tag: 'Creative Direction',
  },
  {
    id: 'slide-2',
    src: '/images/Carousel4_02.jpg.jpeg',
    fallback: '/images/work_ecommerce.jpg',
    title: 'Commercial Campaign Production',
    tag: 'Cinematic Videography',
  },
  {
    id: 'slide-3',
    src: '/images/Carousel4_03.jpg.jpeg',
    fallback: '/images/work_fashion.jpg',
    title: 'High-Converting Social Creatives',
    tag: 'Meta & Instagram Ads',
  },
  {
    id: 'slide-4',
    src: '/images/Carousel4_04.jpg.jpeg',
    fallback: '/images/work_edtech.jpg',
    title: 'Omnichannel Digital Presence',
    tag: 'Web & Growth Engine',
  },
  {
    id: 'slide-5',
    src: '/images/Carousel4_05.jpg.jpeg',
    fallback: '/images/work_realestate.jpg',
    title: 'Hyperlocal Search Dominance',
    tag: 'Local SEO & Maps',
  },
  {
    id: 'slide-6',
    src: '/images/Carousel4_06.jpg.jpeg',
    fallback: '/images/work_healthcare.jpg',
    title: 'Predictable Revenue Scale',
    tag: 'Full-Funnel Acquisition',
  },
];

export default function BrandSpotlightSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Touch swipe handling for mobile
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Video play/pause & audio toggle
  const handlePlayToggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.volume = 0.85;
      video.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(() => {
        video.muted = true;
        video.play().catch(() => {});
        setIsPlaying(true);
      });
    } else {
      if (isMuted) {
        video.muted = false;
        video.volume = 0.85;
        setIsMuted(false);
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [isMuted]);

  // Pause video when out of viewport
  useEffect(() => {
    const el = sectionRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Carousel auto-advance (every 4.5s, pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ekatraaSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ekatraaSlides.length) % ekatraaSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ekatraaSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
  };

  return (
    <section className={styles.section} id="brand-spotlight" ref={sectionRef}>
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal direction="up" className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              CLIENT SPOTLIGHT &bull; CASE STUDY IN ACTION
            </div>

            <h2 className={`display-lg ${styles.headline}`}>
              Engineering Compounding Scale for{' '}
              <span className="accent-gradient">Ekatraa</span>
            </h2>

            <p className={`body-lg ${styles.subText}`}>
              From brand identity and cinema-grade videography to full-funnel ad campaigns and local search dominance — explore how Marketing Copilot partnered with <strong>Ekatraa</strong> to convert market attention into verified commercial growth.
            </p>

            {/* Impact Metric Pills */}
            <div className={styles.headerPills}>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> +340% Reach &amp; Footfall Lift
              </span>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> 5.2X Measured ROAS
              </span>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> 100% Attributed Pipeline
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Dual-Pane Showcase: 9:16 Reel Video + 1:1 Carousel */}
        <div className={styles.showcaseGrid}>
          {/* ══════════════════════════════════════════════════
              LEFT PANE: 9:16 SMARTPHONE REEL PLAYER (NO CROPPING)
             ══════════════════════════════════════════════════ */}
          <ScrollReveal direction="up" className={styles.videoCol}>
            <div className={styles.videoDeviceCard}>
              <div className={styles.videoDeviceGlow} />

              {/* Top Smartphone Speaker & Camera Notch */}
              <div className={styles.deviceNotch}>
                <span className={styles.cameraDot} />
                <span className={styles.speakerPill} />
              </div>

              <div
                className={styles.videoWrapper}
                onClick={handlePlayToggle}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handlePlayToggle();
                  }
                }}
                aria-label={isPlaying && !isMuted ? 'Pause Ekatraa film' : 'Play Ekatraa film with sound'}
              >
                <video
                  ref={videoRef}
                  className={styles.videoPlayer}
                  src="/videos/VID20260910130432_9.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Floating Live Badge */}
                <div className={styles.videoBadge}>
                  <span className={styles.badgeDot} />
                  <span>Ekatraa &bull; Viral Reel</span>
                </div>

                {/* 3D Tactile Orange Play / Pause Controller */}
                <div
                  className={`${styles.playOverlay3D} ${
                    isPlaying && !isMuted ? styles.overlayPlaying : styles.overlayVisible
                  }`}
                >
                  {/* Concentric Orange Acoustic Radar Waves */}
                  {(!isPlaying || isMuted) && (
                    <div className={styles.radarWavesWrapper}>
                      <span className={styles.radarRing1} />
                      <span className={styles.radarRing2} />
                      <span className={styles.radarRing3} />
                    </div>
                  )}

                  <div className={styles.buttonAndPillWrap}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayToggle();
                      }}
                      className={`${styles.playBtn3D} ${
                        isPlaying && !isMuted ? styles.playBtn3DActive : ''
                      }`}
                      aria-label={isPlaying && !isMuted ? 'Pause Ekatraa film' : 'Play film with audio'}
                      title={isPlaying && !isMuted ? 'Click to pause film' : 'Click to play film with sound'}
                    >
                      <span className={styles.specularGlareArc} />
                      <span className={styles.bevelRimGlow} />

                      {isPlaying && !isMuted ? (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1.5" />
                          <rect x="14" y="4" width="4" height="16" rx="1.5" />
                        </svg>
                      ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px' }}>
                          <path d="M5 3l14 9-14 9V3z" />
                        </svg>
                      )}
                    </button>

                    {/* Audio Status Pill */}
                    <div className={styles.soundPill}>
                      <div className={styles.equalizerBars}>
                        <span className={`${styles.eqBar} ${isPlaying && !isMuted ? styles.eqBarActive : ''}`} />
                        <span className={`${styles.eqBar} ${isPlaying && !isMuted ? styles.eqBarActive : ''}`} />
                        <span className={`${styles.eqBar} ${isPlaying && !isMuted ? styles.eqBarActive : ''}`} />
                      </div>
                      <span className={styles.soundPillText}>
                        {isPlaying && !isMuted ? 'Audio Active' : 'Click for Sound'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info Footer */}
              <div className={styles.videoFooter}>
                <div>
                  <span className={styles.footerLabel}>Campaign Reel</span>
                  <h4 className={styles.footerTitle}>Ekatraa Cinematic Story</h4>
                </div>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot} /> 9:16 Reel
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════
              RIGHT PANE: 1:1 SQUARE CAROUSEL (NO CROPPING)
             ══════════════════════════════════════════════════ */}
          <ScrollReveal direction="up" delay={0.1} className={styles.carouselCol}>
            <div
              className={styles.carouselCard}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={styles.carouselBackdrop} />

              {/* Carousel Header Bar */}
              <div className={styles.carouselHeader}>
                <div className={styles.carouselTagWrap}>
                  <span className={styles.carouselTagDot} />
                  <span className={styles.carouselTag}>CAMPAIGN SLIDESHOW</span>
                </div>
                <div className={styles.counterBadge}>
                  <span>{String(currentSlide + 1).padStart(2, '0')}</span>
                  <span className={styles.counterDivider}>/</span>
                  <span>{String(ekatraaSlides.length).padStart(2, '0')}</span>
                </div>
              </div>

              {/* 1:1 Square Viewport — Zero Image Cropping */}
              <div
                className={styles.carouselViewport}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {ekatraaSlides.map((slide, idx) => {
                  const imageSrc = imgErrors[slide.id] ? slide.fallback : slide.src;
                  return (
                    <div
                      key={slide.id}
                      className={`${styles.carouselSlide} ${
                        idx === currentSlide ? styles.slideActive : ''
                      }`}
                    >
                      <Image
                        src={imageSrc}
                        alt={`Ekatraa Showcase - ${slide.title}`}
                        fill
                        sizes="(max-width: 960px) 100vw, 560px"
                        quality={95}
                        className={styles.carouselImage}
                        onError={() => {
                          setImgErrors((prev) => ({ ...prev, [slide.id]: true }));
                        }}
                      />
                    </div>
                  );
                })}

                {/* Left & Right Nav Buttons */}
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className={`${styles.navBtn} ${styles.navBtnPrev}`}
                  aria-label="Previous slide"
                  title="Previous slide"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNextSlide}
                  className={`${styles.navBtn} ${styles.navBtnNext}`}
                  aria-label="Next slide"
                  title="Next slide"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Clean Slide Caption Below Image (Does Not Obscure Artwork) */}
              <div className={styles.captionBar}>
                <span className={styles.slideTag}>{ekatraaSlides[currentSlide]?.tag}</span>
                <h4 className={styles.slideTitle}>{ekatraaSlides[currentSlide]?.title}</h4>
              </div>

              {/* 6 Thumbnail Selector Strip */}
              <div className={styles.thumbStrip}>
                {ekatraaSlides.map((slide, idx) => {
                  const thumbSrc = imgErrors[slide.id] ? slide.fallback : slide.src;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`${styles.thumbBtn} ${
                        idx === currentSlide ? styles.thumbBtnActive : ''
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <Image
                        src={thumbSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="90px"
                        className={styles.thumbImage}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Deliverables & CTA Strip */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className={styles.bottomBar}>
            <div className={styles.deliverables}>
              <span className={styles.deliverableLabel}>Executed for Ekatraa:</span>
              <div className={styles.tagsWrap}>
                <span className={styles.tag}>Brand Visual Architecture</span>
                <span className={styles.tag}>Cinema Videography</span>
                <span className={styles.tag}>High-Intent Social Funnels</span>
                <span className={styles.tag}>Wedding &amp; Event Geo-Grid</span>
                <span className={styles.tag}>Conversion Optimization</span>
              </div>
            </div>

            <div className={styles.bottomCta}>
              <BeamButton
                href="/contact"
                label="Partner with Marketing Copilot"
                size="md"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
