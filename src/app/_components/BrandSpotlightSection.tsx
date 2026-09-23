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

interface BrandSpotlightData {
  id: string;
  name: string;
  shortName: string;
  category: string;
  logo: string;
  hasVideo: boolean;
  videoSrc?: string;
  videoPoster?: string;
  videoTitle?: string;
  videoTag?: string;
  headlineHighlight: string;
  narrative: string;
  metrics: { value: string; label: string }[];
  slides: CarouselSlide[];
  deliverables: string[];
  editorial?: {
    tag: string;
    title: string;
    subtitle: string;
    challenge: string;
    solution: string;
    quote: string;
    author: string;
    stats: { number: string; label: string }[];
  };
}

const spotlightBrands: BrandSpotlightData[] = [
  {
    id: 'ekatraa',
    name: 'Ekatraa',
    shortName: 'Ekatraa',
    category: 'Luxury Bridal & Ethnic Fashion',
    logo: '/images/clients/ekatraa.png',
    hasVideo: true,
    videoSrc: '/videos/VID20260910130432_9.mp4',
    videoPoster: '/images/ekatraa_poster.jpg',
    videoTitle: 'Ekatraa Wedding & Event Reel',
    videoTag: '9:16 CINEMA REEL',
    headlineHighlight: 'Ekatraa',
    narrative:
      'From brand visual architecture and cinema-grade videography to full-funnel ad campaigns and local search dominance — explore how Marketing Copilot partnered with Ekatraa to convert market attention into verified commercial growth.',
    metrics: [
      { value: '+340%', label: 'Reach & Footfall Lift' },
      { value: '5.2X', label: 'Measured ROAS' },
      { value: '100%', label: 'Attributed Pipeline' },
    ],
    slides: [
      {
        id: 'ekatraa-1',
        src: '/images/Carousel4_01.jpg.jpeg',
        fallback: '/images/Ekatraa.jpg',
        title: 'Brand Identity & Visual Architecture',
        tag: 'Creative Direction',
      },
      {
        id: 'ekatraa-2',
        src: '/images/Carousel4_02.jpg.jpeg',
        fallback: '/images/work_ecommerce.jpg',
        title: 'Commercial Campaign Production',
        tag: 'Cinematic Videography',
      },
      {
        id: 'ekatraa-3',
        src: '/images/Carousel4_03.jpg.jpeg',
        fallback: '/images/work_fashion.jpg',
        title: 'High-Converting Social Creatives',
        tag: 'Meta & Instagram Ads',
      },
      {
        id: 'ekatraa-4',
        src: '/images/Carousel4_04.jpg.jpeg',
        fallback: '/images/work_edtech.jpg',
        title: 'Omnichannel Digital Presence',
        tag: 'Web & Growth Engine',
      },
      {
        id: 'ekatraa-5',
        src: '/images/Carousel4_05.jpg.jpeg',
        fallback: '/images/work_realestate.jpg',
        title: 'Hyperlocal Search Dominance',
        tag: 'Local SEO & Maps',
      },
      {
        id: 'ekatraa-6',
        src: '/images/Carousel4_06.jpg.jpeg',
        fallback: '/images/work_healthcare.jpg',
        title: 'Predictable Revenue Scale',
        tag: 'Full-Funnel Acquisition',
      },
    ],
    deliverables: [
      'Brand Visual Architecture',
      'Cinema Videography',
      'High-Intent Social Funnels',
      'Wedding & Event Geo-Grid',
      'Conversion Optimization',
    ],
  },
  {
    id: 'zue-studio',
    name: 'Zue Studio',
    shortName: 'Zue Studio',
    category: 'Creative Studio & Production',
    logo: '/images/clients/Zue-Studio-Logo-color (1).png',
    hasVideo: true,
    videoSrc: '/videos/zue_studio_reel.mp4',
    videoPoster: '/images/zue1.png',
    videoTitle: 'Zue Studio Visual Production Reel',
    videoTag: '9:16 CINEMA REEL',
    headlineHighlight: 'Zue Studio',
    narrative:
      'Engineering high-aesthetic creative production, dynamic 9:16 vertical video reels, and high-converting Meta acquisition funnels that scaled studio bookings and premium brand recognition across Bhubaneswar.',
    metrics: [
      { value: '+420%', label: 'Reels Engagement Lift' },
      { value: '4.8X', label: 'Meta Ad ROAS' },
      { value: '120+', label: 'Verified Studio Inquiries' },
    ],
    slides: [
      {
        id: 'zue-1',
        src: '/images/zue1.png',
        fallback: '/images/work_fashion.jpg',
        title: 'Visual Identity & Creative Studio Branding',
        tag: 'Creative Direction',
      },
      {
        id: 'zue-2',
        src: '/images/zue3.webp',
        fallback: '/images/work_ecommerce.jpg',
        title: 'High-Impact Editorial Photography',
        tag: 'Visual Production',
      },
      {
        id: 'zue-3',
        src: '/images/Carousel4_02.jpg.jpeg',
        fallback: '/images/work_fashion.jpg',
        title: 'Commercial Visual Campaign Production',
        tag: 'Reel Campaigns',
      },
      {
        id: 'zue-4',
        src: '/images/Carousel4_03.jpg.jpeg',
        fallback: '/images/work_edtech.jpg',
        title: 'Full-Funnel Meta Ad Creatives & Scaling',
        tag: 'Performance Ads',
      },
    ],
    deliverables: [
      'Visual Identity Architecture',
      '9:16 Cinematic Videography',
      'Meta Performance Ads',
      'Studio Booking Funnels',
      'Bhubaneswar Creative Geo-Grid',
    ],
  },
  {
    id: 'heed',
    name: 'Heed',
    shortName: 'Heed',
    category: 'Health, Wellness & Lifestyle',
    logo: '/images/clients/heed.png',
    hasVideo: false,
    headlineHighlight: 'Heed',
    narrative:
      'Transforming health & wellness discovery into compounding patient consultations and retail footfall through technical local search dominance, Google Maps 3-pack engineering, and high-intent CRO funnels.',
    metrics: [
      { value: '+280%', label: 'Inbound Patient Enquiries' },
      { value: '98+', label: 'Core Web Vitals Speed' },
      { value: '18', label: 'Top #1 Google Rankings' },
    ],
    editorial: {
      tag: 'VERIFIED HEALTHCARE CASE STUDY',
      title: 'Heed Wellness & Lifestyle Center',
      subtitle: 'Saheed Nagar & Patia, Bhubaneswar',
      challenge:
        'Heed struggled with digital visibility in high-competition health searches across Bhubaneswar, losing organic appointment demand to legacy aggregators.',
      solution:
        'Marketing Copilot engineered sub-second Next.js local service pages, hyper-targeted Google Maps geo-grids, and structured JSON-LD schemas that placed Heed into the top 3 within 45 days.',
      quote:
        '"Marketing Copilot transformed our digital acquisition pipeline. We achieved top 3 Google Maps rankings in 45 days, and patient appointments tripled with zero wasted spend."',
      author: '— Operations Director, Heed',
      stats: [
        { number: '+280%', label: 'Inbound Appointments' },
        { number: '#1', label: 'Google Maps 3-Pack' },
        { number: '45 Days', label: 'To Market Dominance' },
      ],
    },
    slides: [
      {
        id: 'heed-1',
        src: '/images/work_healthcare.jpg',
        fallback: '/images/work_healthcare.jpg',
        title: 'Modern Clinic Digital Patient Experience',
        tag: 'Technical UX & Platform',
      },
      {
        id: 'heed-2',
        src: '/images/Carousel4_04.jpg.jpeg',
        fallback: '/images/work_edtech.jpg',
        title: 'Local Google 3-Pack & Maps Domination',
        tag: 'Hyperlocal SEO',
      },
      {
        id: 'heed-3',
        src: '/images/Carousel4_05.jpg.jpeg',
        fallback: '/images/work_realestate.jpg',
        title: 'Patient Conversion Architecture & CRO',
        tag: 'Conversion Funnel',
      },
      {
        id: 'heed-4',
        src: '/images/Carousel4_06.jpg.jpeg',
        fallback: '/images/work_healthcare.jpg',
        title: '24/7 Verified Inbound Lead Telemetry',
        tag: 'Growth Engine',
      },
    ],
    deliverables: [
      'Google Maps 3-Pack Optimization',
      'Technical Next.js SEO Platform',
      'High-Intent Topic Clusters',
      'Patient Appointment Funnels',
      'Call Tracking & Lead Telemetry',
    ],
  },
  {
    id: 'sree-panduranga',
    name: 'Sree Panduranga Divine Fresh',
    shortName: 'Sree Panduranga',
    category: 'Organic Agrotech & Fresh Groceries',
    logo: '/images/clients/sri-pandurangan-divine-fresh.png',
    hasVideo: false,
    headlineHighlight: 'Sree Panduranga Divine',
    narrative:
      'Scaling direct-to-consumer farm-fresh deliveries with Click-to-WhatsApp 1-tap ordering, localized micro-geo Meta ad clusters, and automated repeat purchase retention funnels across Bhubaneswar.',
    metrics: [
      { value: '+510%', label: 'Monthly D2C Orders' },
      { value: '₹14', label: 'Lowest WhatsApp CAC' },
      { value: '68%', label: 'Repeat Customer Retention' },
    ],
    editorial: {
      tag: 'AGROTECH & RETAIL CASE STUDY',
      title: 'Sree Panduranga Divine Fresh',
      subtitle: 'Bhubaneswar & Cuttack Twin-City Network',
      challenge:
        'Fresh organic produce requires rapid daily stock rotation and frictionless ordering. Traditional web forms were creating drop-off and failing to generate daily repeat household subscriptions.',
      solution:
        'Marketing Copilot architected Click-to-WhatsApp direct catalog ads combined with morning flash delivery broadcasts, geo-fenced Patia & Nayapalli clusters, and Server-Side CAPI tracking.',
      quote:
        '"Our daily household orders grew from 30 to over 200 within two months. The Click-to-WhatsApp sales system built by Marketing Copilot runs like clockwork."',
      author: '— Managing Partner, Sree Panduranga Divine Fresh',
      stats: [
        { number: '+510%', label: 'Order Growth' },
        { number: '₹14', label: 'Sub-₹20 WhatsApp CAC' },
        { number: '2.5 hrs', label: 'Morning Delivery SLA' },
      ],
    },
    slides: [
      {
        id: 'pnd-1',
        src: '/images/sri_pandurangan_divine_fresh.webp',
        fallback: '/images/Sri Pandurangan Divine Fresh.png',
        title: 'Farm-Fresh D2C Digital Storefront',
        tag: 'Visual Branding',
      },
      {
        id: 'pnd-2',
        src: '/images/Sri Pandurangan Divine Fresh.png',
        fallback: '/images/sri_pandurangan_divine_fresh.webp',
        title: 'Click-to-WhatsApp Direct Ordering Flow',
        tag: 'Conversion Funnel',
      },
      {
        id: 'pnd-3',
        src: '/images/Carousel4_01.jpg.jpeg',
        fallback: '/images/work_ecommerce.jpg',
        title: 'Household Subscription Campaigns',
        tag: 'Retention Ads',
      },
      {
        id: 'pnd-4',
        src: '/images/Carousel4_03.jpg.jpeg',
        fallback: '/images/work_fashion.jpg',
        title: 'Twin-City Fast Dispatch Geo-Grid',
        tag: 'Regional Scale',
      },
    ],
    deliverables: [
      'Click-to-WhatsApp Catalog Ads',
      'Meta Server-Side CAPI',
      'Patia & Nayapalli Micro-Clusters',
      'Automated Broadcast Funnels',
      'Customer Lifetime Retention',
    ],
  },
];

export default function BrandSpotlightSection() {
  const [activeBrandId, setActiveBrandId] = useState(spotlightBrands[0].id);
  const activeBrand = spotlightBrands.find((b) => b.id === activeBrandId) || spotlightBrands[0];

  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Touch swipe handling for mobile
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Switch Brand Handler
  const handleSelectBrand = (brandId: string) => {
    if (brandId === activeBrandId) return;

    // Pause current video if playing
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setIsControlsVisible(true);
    setCurrentSlide(0);
    setActiveBrandId(brandId);
  };

  // Video reload when brand changes
  useEffect(() => {
    if (activeBrand.hasVideo && videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
      setIsControlsVisible(true);
    }
  }, [activeBrandId, activeBrand.hasVideo]);

  // Video play/pause toggle
  const handlePlayToggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      if (video.currentTime <= 0.8) {
        video.currentTime = 0;
      }
      video.muted = false;
      video.volume = 0.9;
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsControlsVisible(false);
        })
        .catch(() => {
          video.muted = true;
          video.play().catch(() => {});
          setIsPlaying(true);
          setIsControlsVisible(false);
        });
    } else {
      video.pause();
      setIsPlaying(false);
      setIsControlsVisible(true);
    }
  }, []);

  const handleVideoMouseMove = () => {
    if (!isPlaying) {
      setIsControlsVisible(true);
      return;
    }
    setIsControlsVisible(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setIsControlsVisible(false);
      }
    }, 2200);
  };

  const handleVideoMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      setIsControlsVisible(false);
    } else {
      setIsControlsVisible(true);
    }
  };

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
          setIsControlsVisible(true);
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
      setCurrentSlide((prev) => (prev + 1) % activeBrand.slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, activeBrand.slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeBrand.slides.length) % activeBrand.slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeBrand.slides.length);
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

            {/* Interactive Multi-Brand Filter Tabs */}
            <div className={styles.brandFilterWrapper}>
              <div className={styles.brandFilterTrack}>
                {spotlightBrands.map((brand) => {
                  const isActive = brand.id === activeBrandId;
                  return (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => handleSelectBrand(brand.id)}
                      className={`${styles.brandFilterBtn} ${
                        isActive ? styles.brandFilterBtnActive : ''
                      }`}
                      aria-pressed={isActive}
                    >
                      <div className={styles.brandFilterLogoWrap}>
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          width={20}
                          height={20}
                          className={styles.brandFilterLogo}
                        />
                      </div>
                      <span>{brand.shortName}</span>
                      <span className={styles.brandBadgePill}>
                        {brand.hasVideo ? '🎬 Reel' : '📸 Case Study'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <h2 className={`display-lg ${styles.headline}`}>
              Engineering Compounding Scale for{' '}
              <span className="accent-gradient">{activeBrand.headlineHighlight}</span>
            </h2>

            <p className={`body-lg ${styles.subText}`}>
              {activeBrand.narrative}
            </p>

            {/* Impact Metric Pills */}
            <div className={styles.headerPills}>
              {activeBrand.metrics.map((m) => (
                <span key={m.label} className={styles.headerPill}>
                  <span className={styles.pillDot} /> {m.value} {m.label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ══════════════════════════════════════════════════
            DYNAMIC SHOWCASE CONTAINER BASED ON BRAND TYPE
           ══════════════════════════════════════════════════ */}
        {activeBrand.hasVideo ? (
          /* MODE A: 9:16 SMARTPHONE VIDEO + 1:1 SLIDING CAROUSEL */
          <div className={styles.showcaseGrid}>
            {/* Card 1: Mobile Phone Reel Mockup */}
            <ScrollReveal direction="up" className={styles.videoCol}>
              <div className={styles.videoDeviceCard}>
                <div className={styles.videoDeviceGlow} />

                {/* Smartphone Top Notch */}
                <div className={styles.deviceNotch}>
                  <span className={styles.speakerPill} />
                  <span className={styles.cameraDot} />
                </div>

                {/* 9:16 Video Wrapper inside Phone Frame */}
                <div
                  className={styles.videoWrapper}
                  onClick={handlePlayToggle}
                  onMouseMove={handleVideoMouseMove}
                  onMouseEnter={handleVideoMouseMove}
                  onMouseLeave={handleVideoMouseLeave}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      handlePlayToggle();
                    }
                  }}
                  aria-label={isPlaying ? `Pause ${activeBrand.name} reel` : `Play ${activeBrand.name} reel with sound`}
                >
                  <video
                    ref={videoRef}
                    key={activeBrand.videoSrc}
                    className={styles.videoPlayer}
                    src={activeBrand.videoSrc}
                    poster={activeBrand.videoPoster}
                    loop
                    muted={!isPlaying}
                    playsInline
                    preload="auto"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* 3D Tactile Orange Play Controller */}
                  <div
                    className={`${styles.playOverlay3D} ${
                      isControlsVisible ? styles.overlayVisible : styles.overlayHidden
                    }`}
                  >
                    {!isPlaying && (
                      <div className={styles.radarWavesWrapper}>
                        <span className={styles.radarRing1} />
                        <span className={styles.radarRing2} />
                        <span className={styles.radarRing3} />
                      </div>
                    )}

                    <div className={styles.buttonOnlyWrap}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayToggle();
                        }}
                        className={`${styles.playBtn3D} ${
                          isPlaying ? styles.playBtn3DActive : ''
                        }`}
                        aria-label={isPlaying ? `Pause film` : `Play film with audio`}
                        title={isPlaying ? 'Click to pause film' : 'Click to play film with sound'}
                      >
                        <span className={styles.specularGlareArc} />
                        <span className={styles.bevelRimGlow} />

                        {isPlaying ? (
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1.5" />
                            <rect x="14" y="4" width="4" height="16" rx="1.5" />
                          </svg>
                        ) : (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ marginLeft: '4px' }}
                          >
                            <path d="M5 3l14 9-14 9V3z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Phone Bottom Device Footer */}
                <div className={styles.deviceFooter}>
                  <div className={styles.deviceFooterText}>
                    <span className={styles.deviceTag}>{activeBrand.videoTag}</span>
                    <h4 className={styles.deviceTitle}>{activeBrand.videoTitle}</h4>
                  </div>

                  <button
                    type="button"
                    onClick={handlePlayToggle}
                    className={styles.deviceActionBtn}
                  >
                    <span>{isPlaying ? 'Pause' : 'Play Audio'}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: 1:1 Sliding Carousel Showcase */}
            <ScrollReveal direction="up" delay={0.1} className={styles.carouselCol}>
              <div
                className={styles.carouselCard}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={styles.cardBackdrop} />

                {/* Card Header */}
                <div className={styles.carouselHeader}>
                  <div className={styles.cardTagWrap}>
                    <span className={styles.cardTagDot} />
                    <span className={styles.cardTag}>1:1 BRAND CREATIVES</span>
                  </div>
                  <div className={styles.counterBadge}>
                    <span>Slide {String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className={styles.counterDivider}>/</span>
                    <span>{String(activeBrand.slides.length).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Media Viewport */}
                <div
                  className={styles.carouselViewport}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className={styles.sliderTrack}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {activeBrand.slides.map((slide) => {
                      const imageSrc = imgErrors[slide.id] ? slide.fallback : slide.src;
                      return (
                        <div key={slide.id} className={styles.sliderSlide}>
                          <Image
                            src={imageSrc}
                            alt={slide.title}
                            fill
                            sizes="(max-width: 960px) 100vw, 680px"
                            quality={100}
                            priority
                            className={styles.carouselImage}
                            onError={() => {
                              setImgErrors((prev) => ({ ...prev, [slide.id]: true }));
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Nav Arrow Buttons */}
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className={`${styles.navBtn} ${styles.navBtnPrev}`}
                    aria-label="Previous slide"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className={`${styles.navBtn} ${styles.navBtnNext}`}
                    aria-label="Next slide"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* Slide Indicators Dots */}
                  <div className={styles.slideDotsWrap}>
                    {activeBrand.slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`${styles.slideDot} ${
                          idx === currentSlide ? styles.slideDotActive : ''
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Footer with Thumbnails */}
                <div className={styles.carouselFooter}>
                  <div className={styles.footerTextWrap}>
                    <span className={styles.footerTag}>{activeBrand.slides[currentSlide]?.tag}</span>
                    <h4 className={styles.footerTitle}>{activeBrand.slides[currentSlide]?.title}</h4>
                  </div>

                  <div className={styles.thumbStrip}>
                    {activeBrand.slides.map((slide, idx) => {
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
                            sizes="60px"
                            className={styles.thumbImage}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        ) : (
          /* MODE B: DUAL-PANE (EDITORIAL NARRATIVE ON LEFT, 1:1 SLIDER ON RIGHT) */
          <div className={styles.dualPaneEditorialGrid}>
            {/* Left Pane: Editorial Impact Card */}
            <ScrollReveal direction="up" className={styles.editorialCol}>
              <div className={styles.editorialCard}>
                <div>
                  <div className={styles.editorialTopBadgeRow}>
                    <div className={styles.editorialVerifiedBadge}>
                      <span className={styles.editorialVerifiedDot} />
                      <span>{activeBrand.editorial?.tag || 'VERIFIED CASE STUDY'}</span>
                    </div>

                    <div className={styles.editorialClientLogoWrap}>
                      <Image
                        src={activeBrand.logo}
                        alt={`${activeBrand.name} logo`}
                        width={80}
                        height={26}
                        className={styles.editorialClientLogo}
                      />
                    </div>
                  </div>

                  <h3 className={styles.editorialTitle}>{activeBrand.editorial?.title}</h3>
                  <div className={styles.editorialSubtitle}>
                    📍 {activeBrand.editorial?.subtitle}
                  </div>

                  <div className={styles.editorialChallengeSolution}>
                    <div className={styles.editorialBlock}>
                      <span className={styles.editorialBlockLabel}>The Strategic Challenge</span>
                      <p className={styles.editorialBlockText}>{activeBrand.editorial?.challenge}</p>
                    </div>

                    <div className={`${styles.editorialBlock} ${styles.editorialBlockAmber}`}>
                      <span className={styles.editorialBlockLabel}>The Copilot Solution</span>
                      <p className={styles.editorialBlockText}>{activeBrand.editorial?.solution}</p>
                    </div>
                  </div>

                  {/* 3-Metric KPI Strip */}
                  <div className={styles.editorialKpiStrip}>
                    {activeBrand.editorial?.stats.map((s) => (
                      <div key={s.label} className={styles.editorialKpiItem}>
                        <span className={styles.editorialKpiNum}>{s.number}</span>
                        <span className={styles.editorialKpiLbl}>{s.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verified Client Quote */}
                  <div className={styles.editorialQuoteBox}>
                    <p className={styles.editorialQuoteText}>{activeBrand.editorial?.quote}</p>
                    <span className={styles.editorialQuoteAuthor}>{activeBrand.editorial?.author}</span>
                  </div>
                </div>

                <div style={{ marginTop: '12px' }}>
                  <BeamButton href="/portfolio" label={`View Complete ${activeBrand.shortName} Case Study`} size="sm" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right Pane: 1:1 Sliding Carousel Showcase */}
            <ScrollReveal direction="up" delay={0.1} className={styles.carouselCol}>
              <div
                className={styles.carouselCard}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={styles.cardBackdrop} />

                {/* Card Header */}
                <div className={styles.carouselHeader}>
                  <div className={styles.cardTagWrap}>
                    <span className={styles.cardTagDot} />
                    <span className={styles.cardTag}>BRAND CREATIVES</span>
                  </div>
                  <div className={styles.counterBadge}>
                    <span>Slide {String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className={styles.counterDivider}>/</span>
                    <span>{String(activeBrand.slides.length).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Media Viewport */}
                <div
                  className={styles.carouselViewport}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className={styles.sliderTrack}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {activeBrand.slides.map((slide) => {
                      const imageSrc = imgErrors[slide.id] ? slide.fallback : slide.src;
                      return (
                        <div key={slide.id} className={styles.sliderSlide}>
                          <Image
                            src={imageSrc}
                            alt={slide.title}
                            fill
                            sizes="(max-width: 960px) 100vw, 680px"
                            quality={100}
                            priority
                            className={styles.carouselImage}
                            onError={() => {
                              setImgErrors((prev) => ({ ...prev, [slide.id]: true }));
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Nav Arrow Buttons */}
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className={`${styles.navBtn} ${styles.navBtnPrev}`}
                    aria-label="Previous slide"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className={`${styles.navBtn} ${styles.navBtnNext}`}
                    aria-label="Next slide"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* Slide Indicators Dots */}
                  <div className={styles.slideDotsWrap}>
                    {activeBrand.slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`${styles.slideDot} ${
                          idx === currentSlide ? styles.slideDotActive : ''
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Footer with Thumbnails */}
                <div className={styles.carouselFooter}>
                  <div className={styles.footerTextWrap}>
                    <span className={styles.footerTag}>{activeBrand.slides[currentSlide]?.tag}</span>
                    <h4 className={styles.footerTitle}>{activeBrand.slides[currentSlide]?.title}</h4>
                  </div>

                  <div className={styles.thumbStrip}>
                    {activeBrand.slides.map((slide, idx) => {
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
                            sizes="60px"
                            className={styles.thumbImage}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* Bottom Deliverables & CTA Strip */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className={styles.bottomBar}>
            <div className={styles.deliverables}>
              <span className={styles.deliverableLabel}>
                Executed for {activeBrand.shortName}:
              </span>
              <div className={styles.tagsWrap}>
                {activeBrand.deliverables.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
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
