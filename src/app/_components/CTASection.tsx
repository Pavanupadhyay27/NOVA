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
              Get Started
            </div>
            <h2 className={`display-xl ${styles.headline}`}>
              Ready to Scale <span className="accent-gradient">With a Dedicated Growth Partner?</span>
            </h2>
            <p className={`body-lg ${styles.sub}`} style={{ maxWidth: 760, margin: '0 auto 32px' }}>
              Whether you want to improve search engine rankings, generate leads, connect with more customers using paid ads, or create a stronger online presence, Marketing Copilot can help you build a plan that matches your business goals.<br /><br />
              Understand where your business stands online and find chances to grow.
            </p>
            <div className={styles.actions}>
              {/* Primary CTA with Navbar Revolving Border Beam Style */}
              <div className={styles.borderBeamWrapper}>
                <div className={styles.borderGlowAmbient} />
                <div className={styles.borderBeamSpin} />
                <Link href="/contact" className={styles.btnStartPrimary}>
                  <span className={styles.btnShimmer} />
                  <span className={styles.btnGlassGloss} />
                  <span>Claim Free Growth Audit</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>
              </div>

              {/* Secondary CTA (Empty / White with Revolving Border Beam) */}
              <div className={`${styles.borderBeamWrapper} ${styles.borderBeamWrapperSecondary}`}>
                <div className={styles.borderGlowAmbientSecondary} />
                <div className={styles.borderBeamSpin} />
                <Link href="/portfolio" className={styles.btnExploreSecondary}>
                  <span className={styles.exploreIcon}>✦</span>
                  <span className={styles.exploreLabel}>View Our Work</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>
              </div>
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
