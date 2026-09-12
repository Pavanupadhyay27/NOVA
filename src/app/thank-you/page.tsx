import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Thank You — Request Received | Nova Spark Bhubaneswar',
  description: 'Thank you for connecting with Nova Spark, the leading digital marketing company in Bhubaneswar. We have received your project targets and will contact you within 2 hours.',
};

export default function ThankYouPage() {
  return (
    <main className={styles.container}>
      {/* Soft Radiant Ambient Glows */}
      <div className={styles.bgGlowEmerald} />
      <div className={styles.bgGlowGold} />
      <div className={styles.bgGlowBlue} />
      <div className={styles.meshPattern} />

      <div className={styles.card}>
        {/* Cute & Glossy 3D Bouncing Emerald Checkmark */}
        <div className={styles.checkStage}>
          <div className={styles.checkSphere}>
            <div className={styles.sphereGlossTop} />
            <div className={styles.sphereGlossCrescent} />
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" className={styles.checkStroke} />
            </svg>
          </div>
          {/* Dynamic Ground Contact Shadow */}
          <div className={styles.sphereShadow} />
        </div>

        {/* Cute & Brand Status Pill */}
        <div className={styles.statusBadge}>
          <span className={styles.statusDot} />
          <span>INQUIRY CONFIRMED • BHUBANESWAR</span>
        </div>

        <h1 className={styles.title}>
          We&apos;ve Got Your Brief!
        </h1>

        <p className={styles.subtitle}>
          Nova Spark&apos;s digital growth strategists in Bhubaneswar are analyzing your requirements. We&apos;ll be in touch within <strong>2 hours</strong> with your customized roadmap.
        </p>

        {/* Clean Skeuomorphic Trust Bar (No Emojis) */}
        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustLabel}>SLA</span>
            <span className={styles.trustVal}>2-Hour Response</span>
          </div>
          <div className={styles.trustDivider} />
          <a href="tel:+918280788689" className={styles.trustItemLink}>
            <span className={styles.trustLabel}>Direct Helpline</span>
            <span className={styles.trustVal}>+91 82807 88689</span>
          </a>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustLabel}>Growth Lab</span>
            <span className={styles.trustVal}>Kharvela Nagar, Bhubaneswar</span>
          </div>
        </div>

        {/* Skeuomorphic & Tactile Action Buttons */}
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            <span>Back to Homepage</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <Link href="/work" className={styles.secondaryBtn}>
            Explore Case Studies
          </Link>

          <a
            href="https://wa.me/918280788689?text=Hi%20Nova%20Spark%2C%20I%20just%20submitted%20my%20project%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <span className={styles.waDot} />
            <span>Fast-Track on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
