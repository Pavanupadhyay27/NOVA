import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Thank You — Nova Spark',
  description: 'We have received your message and our growth strategists will be in touch within 24 hours.',
};

export default function ThankYouPage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGlow} />
      <div className="container">
        <ScrollReveal className="text-center">
          <div className={styles.card}>
            <div className={styles.checkWrap}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h1 className={`display-lg ${styles.title}`}>
              You&apos;re in. <span className="accent-gradient">✨</span>
            </h1>
            <p className={`body-lg ${styles.sub}`}>
              We&apos;ve received your inquiry. A senior growth strategist will review your brand details and reach out within 24 business hours with a custom preliminary roadmap.
            </p>
            <div className={styles.actionRow}>
              <Link href="/" className="btn btn-primary">
                Back to Homepage →
              </Link>
              <Link href="/work" className="btn btn-secondary">
                Explore Case Studies
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
