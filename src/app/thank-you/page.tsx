import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Thank You | Nova Spark',
  description: 'Inquiry received. Our growth strategists will be in touch with you shortly.',
};

export default function ThankYouPage() {
  return (
    <main className={styles.container}>
      {/* Ambient background glows */}
      <div className={styles.bgGlowGreen} />
      <div className={styles.bgGlowBlue} />
      <div className={styles.gridOverlay} />

      <div className={styles.wrapper}>
        {/* Animated Bouncing Green Checkmark Element */}
        <div className={styles.bounceArea}>
          <div className={styles.pulseRingOuter} />
          <div className={styles.pulseRingInner} />
          <div className={styles.checkSphere}>
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" className={styles.checkStroke} />
            </svg>
          </div>
        </div>

        {/* Minimalist, Attractive Content */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>INQUIRY RECEIVED</span>
        </div>

        <h1 className={styles.title}>
          We&apos;ve Got It.
        </h1>

        <p className={styles.subtitle}>
          Our team is reviewing your brief. We&apos;ll reach out within <strong>2 hours</strong> with your growth blueprint.
        </p>

        {/* Minimalist Action Buttons */}
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            <span>Back to Home</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
            <span className={styles.waDot} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
