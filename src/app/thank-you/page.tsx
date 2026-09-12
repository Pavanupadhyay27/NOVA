import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Thank You | Nova Spark — Digital Marketing Agency',
  description: 'Inquiry received. Our growth strategists will be in touch with your custom roadmap.',
};

export default function ThankYouPage() {
  return (
    <main className={styles.container}>
      {/* Radiant Background Mesh & Ambient Glows */}
      <div className={styles.bgGlowEmerald} />
      <div className={styles.bgGlowGold} />
      <div className={styles.bgGlowBlue} />
      <div className={styles.meshPattern} />

      <div className={styles.wrapper}>
        {/* Animated Bouncing 3D Green Checkmark Element */}
        <div className={styles.checkStage}>
          <div className={styles.pulseRing1} />
          <div className={styles.pulseRing2} />
          <div className={styles.pulseRing3} />
          
          {/* Decorative floating sparkle stars */}
          <span className={`${styles.sparkle} ${styles.sparkle1}`}>✦</span>
          <span className={`${styles.sparkle} ${styles.sparkle2}`}>★</span>
          <span className={`${styles.sparkle} ${styles.sparkle3}`}>✦</span>

          <div className={styles.checkSphere}>
            <div className={styles.sphereHighlight} />
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" className={styles.checkStroke} />
            </svg>
          </div>
          <div className={styles.sphereShadow} />
        </div>

        {/* Minimalist, Ultra-Attractive Brand Copy */}
        <div className={styles.statusBadge}>
          <span className={styles.statusDot} />
          <span>REQUEST CONFIRMED</span>
        </div>

        <h1 className={styles.title}>
          We&apos;ve Got It.
        </h1>

        <p className={styles.subtitle}>
          Our growth strategists are reviewing your brief. We&apos;ll be in touch within <strong>2 hours</strong> with your growth roadmap.
        </p>

        {/* 3 Value Assurance Pills */}
        <div className={styles.pillRow}>
          <div className={styles.assurancePill}>
            <span className={styles.pillIcon}>⚡</span>
            <span>2h Response SLA</span>
          </div>
          <div className={styles.assurancePill}>
            <span className={styles.pillIcon}>🎯</span>
            <span>Tailored Growth Audit</span>
          </div>
          <div className={styles.assurancePill}>
            <span className={styles.pillIcon}>🔒</span>
            <span>Zero Spam &amp; Confidential</span>
          </div>
        </div>

        {/* High-End Action CTAs */}
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            <span>Back to Homepage</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <Link href="/work" className={styles.secondaryBtn}>
            Explore Case Studies
          </Link>

          <a
            href="https://wa.me/918280788689?text=Hi%20Nova%20Spark%2C%20I%20just%20submitted%20a%20project%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <span className={styles.waLiveDot} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
