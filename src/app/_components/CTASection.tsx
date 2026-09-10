import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.innerBox}>
          <ScrollReveal className="text-center">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Ready to Scale?
            </div>
            <h2 className={`display-xl ${styles.headline}`}>
              Ready to make your<br />
              <span className="accent-gradient">next growth story</span><br />
              unforgettable?
            </h2>
            <p className={`body-lg ${styles.sub}`}>
              Let&apos;s build a predictable, compounding revenue engine for your brand.
            </p>
            <div className={styles.actions}>
              {/* Primary CTA with Continuous Revolving Glowing Border Beam */}
              <div className={styles.borderBeamWrapper}>
                <div className={styles.borderGlowAmbient} />
                <div className={styles.borderBeamSpin} />
                <Link href="/contact" className={styles.btnStartPrimary}>
                  <span className={styles.btnShimmer} />
                  <span>Start the Conversation</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>
              </div>

              <Link href="/work" className={styles.btnExploreSecondary}>
                <span className={styles.exploreIcon}>✦</span>
                <span>View Our Work</span>
              </Link>
            </div>

            <div className={styles.proof}>
              <div className={styles.proofItem}>
                <span className={styles.proofNum}>50+</span>
                <span className={styles.proofLabel}>Ambitious Brands</span>
              </div>
              <div className={styles.proofDot} />
              <div className={styles.proofItem}>
                <span className={styles.proofNum}>98%</span>
                <span className={styles.proofLabel}>Retention Rate</span>
              </div>
              <div className={styles.proofDot} />
              <div className={styles.proofItem}>
                <span className={styles.proofNum}>24h</span>
                <span className={styles.proofLabel}>Response SLA</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
