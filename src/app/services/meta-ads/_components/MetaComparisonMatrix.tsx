'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetaComparisonMatrix.module.css';

export default function MetaComparisonMatrix() {
  const [activeModel, setActiveModel] = useState<'copilot' | 'boosted'>('copilot');

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>Commercial Difference</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Boosting Instagram Posts vs. <span className="accent-gradient">Full-Funnel Performance</span>
          </h2>
          <p className={styles.subhead}>
            Why hitting &quot;Boost Post&quot; burns marketing capital in Bhubaneswar, while an algorithmic conversion architecture scales predictable revenue.
          </p>
        </ScrollReveal>

        {/* Toggle Controls */}
        <div className={styles.toggleRow}>
          <div className={styles.segmentedToggle}>
            <button
              type="button"
              className={`${styles.segmentBtn} ${activeModel === 'copilot' ? styles.segmentCopilotActive : ''}`}
              onClick={() => setActiveModel('copilot')}
            >
              <span className={styles.greenDot} />
              <span>Marketing Copilot Performance Engine</span>
            </button>
            <button
              type="button"
              className={`${styles.segmentBtn} ${activeModel === 'boosted' ? styles.segmentBoostedActive : ''}`}
              onClick={() => setActiveModel('boosted')}
            >
              <span className={styles.redDot} />
              <span>Hitting &quot;Boost Post&quot; (DIY Trap)</span>
            </button>
          </div>
        </div>

        {/* Specification Cards Grid */}
        <div className={styles.comparisonGrid}>
          {/* Tile 1: Creative Production */}
          <div className={`${styles.specCard} ${activeModel === 'copilot' ? styles.specWin : styles.specLoss}`}>
            <div className={styles.specHeader}>
              <span className={styles.specIcon}>🎬</span>
              <span className={styles.specLabel}>Creative Velocity</span>
            </div>
            {activeModel === 'copilot' ? (
              <div className={styles.specContent}>
                <div className={styles.specMetricBadge}>6–8 NEW ANGLES / WEEK</div>
                <h4 className={styles.specTitle}>Weekly Video &amp; Reel Sprints</h4>
                <p className={styles.specDesc}>
                  We test 8 vertical video variations weekly with unique 3-second psychological hooks, eliminating ad fatigue and driving down acquisition costs.
                </p>
              </div>
            ) : (
              <div className={styles.specContent}>
                <div className={styles.specMetricLoss}>1 STATIC IMAGE FOR MONTHS</div>
                <h4 className={styles.specTitle}>Severe Creative Fatigue</h4>
                <p className={styles.specDesc}>
                  Audiences see the same graphic 15+ times. Cost per click doubles every week while engagement drops to zero.
                </p>
              </div>
            )}
          </div>

          {/* Tile 2: Targeting Architecture */}
          <div className={`${styles.specCard} ${activeModel === 'copilot' ? styles.specWin : styles.specLoss}`}>
            <div className={styles.specHeader}>
              <span className={styles.specIcon}>🎯</span>
              <span className={styles.specLabel}>Audience Modeling</span>
            </div>
            {activeModel === 'copilot' ? (
              <div className={styles.specContent}>
                <div className={styles.specMetricBadge}>ADVANTAGE+ &amp; LOOKALIKES</div>
                <h4 className={styles.specTitle}>HNI &amp; High-Intent Cohorts</h4>
                <p className={styles.specDesc}>
                  Trained on your top 1% highest-spending Bhubaneswar buyers, targeting high-disposable-income neighborhoods like Patia and Saheed Nagar.
                </p>
              </div>
            ) : (
              <div className={styles.specContent}>
                <div className={styles.specMetricLoss}>GENERIC RADIUS BOOST</div>
                <h4 className={styles.specTitle}>Wasted Broad Impressions</h4>
                <p className={styles.specDesc}>
                  Shows ads to non-buyers, fake profiles, and accidental scrollers who never intend to purchase your product or service.
                </p>
              </div>
            )}
          </div>

          {/* Tile 3: Conversion Path */}
          <div className={`${styles.specCard} ${activeModel === 'copilot' ? styles.specWin : styles.specLoss}`}>
            <div className={styles.specHeader}>
              <span className={styles.specIcon}>💬</span>
              <span className={styles.specLabel}>Lead Conversion</span>
            </div>
            {activeModel === 'copilot' ? (
              <div className={styles.specContent}>
                <div className={styles.specMetricBadge}>WHATSAPP IN 1 TAP</div>
                <h4 className={styles.specTitle}>Instant Human Closing</h4>
                <p className={styles.specDesc}>
                  Pre-filled WhatsApp inquiries land directly in your team&apos;s chat with automated qualification, achieving 28%+ closing velocity.
                </p>
              </div>
            ) : (
              <div className={styles.specContent}>
                <div className={styles.specMetricLoss}>UNMONITORED DM INBOX</div>
                <h4 className={styles.specTitle}>Slow &amp; Lost Inquiries</h4>
                <p className={styles.specDesc}>
                  Potential buyers send messages into an unmanaged Instagram DM folder, going cold within 20 minutes before anyone responds.
                </p>
              </div>
            )}
          </div>

          {/* Tile 4: Tracking & CAPI */}
          <div className={`${styles.specCard} ${activeModel === 'copilot' ? styles.specWin : styles.specLoss}`}>
            <div className={styles.specHeader}>
              <span className={styles.specIcon}>⚡</span>
              <span className={styles.specLabel}>Signal Tracking</span>
            </div>
            {activeModel === 'copilot' ? (
              <div className={styles.specContent}>
                <div className={styles.specMetricBadge}>SERVER-SIDE CAPI 9.2/10</div>
                <h4 className={styles.specTitle}>iOS 18 Proof Attribution</h4>
                <p className={styles.specDesc}>
                  Every phone inquiry, WhatsApp lead, and online order is fed back to Meta&apos;s neural bidding engine for continuous ROAS optimization.
                </p>
              </div>
            ) : (
              <div className={styles.specContent}>
                <div className={styles.specMetricLoss}>35% SIGNAL BLIND SPOT</div>
                <h4 className={styles.specTitle}>Broken Attribution</h4>
                <p className={styles.specDesc}>
                  Ad blockers and Apple privacy protocols block conversion reporting, forcing Meta algorithms to bid completely in the dark.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.matrixFooter}>
          <div className={styles.guaranteeBox}>
            <span className={styles.guaranteeIcon}>🛡️</span>
            <span>All Meta ad accounts, creatives, and custom audience assets remain 100% owned by your company.</span>
          </div>
          <Link href="/contact" className={styles.matrixCtaBtn}>
            <span>Switch to the Performance Model</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
