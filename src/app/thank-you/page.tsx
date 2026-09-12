import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Thank You | Nova Spark — Digital Marketing Agency',
  description: 'Thank you for reaching out to Nova Spark. We have received your inquiry and will be in touch with your custom roadmap.',
};

export default function ThankYouPage() {
  return (
    <main className={styles.container}>
      {/* Soft Ambient Radiant Glows */}
      <div className={styles.bgGlowEmerald} />
      <div className={styles.bgGlowGold} />
      <div className={styles.bgGlowBlue} />
      <div className={styles.meshPattern} />

      <div className={styles.card}>
        {/* Realistic Physics 3D Bouncing Emerald Checkmark */}
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

        {/* Minimalist Status Badge */}
        <div className={styles.statusBadge}>
          <span className={styles.statusDot} />
          <span>INQUIRY RECEIVED</span>
        </div>

        {/* Minimalist Clean Heading & Subtitle */}
        <h1 className={styles.title}>
          Let’s Get Growing
        </h1>

        <p className={styles.subtitle}>
          We’ve safely received your request. One of our expert growth strategists will be in touch with you through your custom roadmap.
        </p>

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
