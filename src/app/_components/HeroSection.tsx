'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const heroSlides = [
  {
    id: 'happy-clients-1',
    src: '/images/about_hero.jpg',
    alt: 'Happy enterprise clients celebrating growth milestones with Nova Spark',
    caption: 'Strategic Growth & Scaling',
  },
  {
    id: 'happy-clients-2',
    src: '/images/team_office.jpg',
    alt: 'Happy collaborative team and founders building digital revenue engines',
    caption: 'Creative & Performance Teams',
  },
  {
    id: 'happy-clients-3',
    src: '/images/work_fashion.jpg',
    alt: 'Happy customer faces and high-converting brand campaigns',
    caption: 'D2C & Consumer Brands',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Relaxed, ultra-smooth auto-slide interval (6.0 seconds per slide)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated Color Splashes that Bloom and Float on Page Load */}
      <div className={styles.splashCyan} />
      <div className={styles.splashViolet} />
      <div className={styles.splashAmber} />
      <div className={styles.ambientMesh} />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Digital Growth Studio · Bhubaneswar
          </div>

          <h1 className={`display-hero ${styles.headline}`}>
            Digital Marketing Company<br />
            <span className={`accent-gradient ${styles.heroAccent3d}`}>in Bhubaneswar.</span>
          </h1>

          <p className={`body-lg ${styles.sub}`}>
            Grow your business with digital marketing that focuses on visibility, getting the right leads, keeping customers engaged, and seeing real results. Nova Spark is a Digital marketing company based in Bhubaneswar. We offer SEO, Google Ads, Meta Ads, social media marketing, website solutions, and other services designed to deliver performance and growth.
          </p>

          <div className={styles.actions}>
            {/* CTA with Continuous Revolving Glowing Border Beam */}
            <div className={styles.borderBeamWrapper}>
              <div className={styles.borderGlowAmbient} />
              <div className={styles.borderBeamSpin} />

              <Link href="/contact" className={styles.btnStartProject}>
                <span className={styles.btnShimmer} />
                <span className={styles.btnGlassGloss} />
                <span className={styles.btnLabel}>Get Free Consultation</span>
                <span className={styles.btnArrow}>→</span>
              </Link>
            </div>

            {/* Explore Our Services CTA - Highlighted and tactile */}
            <Link href="/services" className={styles.btnExploreWork}>
              <span className={styles.exploreIcon}>✦</span>
              <span className={styles.exploreLabel}>Explore Our Services</span>
            </Link>
          </div>

          {/* Clean Skeuomorphic Trust Strip */}
          <div className={styles.trustStrip}>
            <div className={styles.trustItem}>
              <span className={styles.trustDot} />
              <span>₹25Cr+ Media Managed</span>
            </div>
            <span className={styles.trustSep}>•</span>
            <div className={styles.trustItem}>
              <span className={styles.star}>★</span>
              <span>4.9/5 Rating (50+ Brands)</span>
            </div>
          </div>
        </div>

        {/* Right — Large Luxury Cinematic Auto-Crossfade Image Frame */}
        <div className={styles.visual}>
          <div className={styles.imageCard}>
            <div className={styles.imageViewport}>
              {heroSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`${styles.slideItem} ${idx === current ? styles.slideActive : ''}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 900px) 100vw, 620px"
                    className={styles.slideImage}
                  />
                  <div className={styles.slideOverlay} />
                </div>
              ))}

              {/* Minimalist Floating Status Badge */}
              <div className={styles.floatingBadge}>
                <span className={styles.badgePulse} />
                <span className={styles.badgeText}>Real Client Growth</span>
              </div>

              {/* Minimalist Dot Indicators */}
              <div className={styles.dotsWrap}>
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Switch to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
