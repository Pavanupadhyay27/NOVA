'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './WhyChooseSection.module.css';

export default function WhyChooseSection() {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  return (
    <section className={`section ${styles.section}`}>
      {/* Ambient background glows */}
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
              <span className={styles.sparkleIcon}>✨</span>
              <span>Why Choose Nova Spark</span>
            </div>
            <h2 className={`display-lg ${styles.headline}`}>
              Digital Growth Powered By<br />
              <span className="accent-gradient">Strategy, AI & Creativity</span>
            </h2>
            <p className={`body-lg ${styles.sub}`}>
              We bring together smart technology, creative thinking, and performance marketing to help brands grow faster, with results you can actually track.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Row 1: Card 1 (AI First Approach) + Card 2 (Dedicated Growth Team) */}
          <div className={styles.row1}>
            {/* Card 1: AI First Approach (Vibrant Deep Blue Card) */}
            <ScrollReveal delay={0} className={styles.colAi}>
              <div className={`${styles.bentoCard} ${styles.cardAi}`}>
                <div className={styles.cardAiMesh} />
                <div className={styles.cardHeader}>
                  <div className={styles.iconBoxAi}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="10" rx="3" />
                      <circle cx="8.5" cy="16" r="1.5" fill="currentColor" />
                      <circle cx="15.5" cy="16" r="1.5" fill="currentColor" />
                      <path d="M12 2v5" />
                      <circle cx="12" cy="2" r="1" />
                    </svg>
                  </div>
                  <span className={styles.badgeAiPulse}>
                    <span className={styles.pulseDot} />
                    <span>AI Autonomous</span>
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitleWhite}>AI First Approach</h3>
                  <p className={styles.cardTextWhite}>
                    We use AI-powered workflows, automation, and data insights to make sharper marketing decisions, faster.
                  </p>
                </div>

                <div className={styles.cardAiFooter}>
                  <div className={styles.aiTag}>
                    <span className={styles.aiTagDot} />
                    <span>Predictive Bidding</span>
                  </div>
                  <div className={styles.aiTag}>
                    <span className={styles.aiTagDot} />
                    <span>Server Signal Optimization</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Dedicated Growth Team */}
            <ScrollReveal delay={100} className={styles.colTeam}>
              <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardTeam}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconTeam}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className={styles.tagExpert}>OUR EXPERTS</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Dedicated Growth Team</h3>
                  <p className={styles.cardText}>
                    Marketers, designers, developers, and strategists working as one team behind your brand, not a rotating cast of freelancers.
                  </p>
                </div>

                <div className={styles.chipsRow}>
                  {['Marketing Experts', 'Creative Team', 'Growth Strategy', 'Full-Stack Developers'].map(chip => (
                    <button
                      key={chip}
                      type="button"
                      className={`${styles.chipPill} ${activeChip === chip ? styles.chipPillActive : ''}`}
                      onClick={() => setActiveChip(activeChip === chip ? null : chip)}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: 3 Cards (Transparent Reporting, Weekly Reviews, Performance Focus) */}
          <div className={styles.row2}>
            {/* Card 3: Transparent Reporting */}
            <ScrollReveal delay={120}>
              <div className={`${styles.bentoCard} ${styles.cardLight}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconReporting}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <span className={styles.metricTag}>Live Data</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Transparent Reporting</h3>
                  <p className={styles.cardText}>
                    Clear dashboards and honest campaign insights, so you always know exactly what your marketing spend is doing.
                  </p>
                </div>

                <div className={styles.cardFooterSimple}>
                  <span className={styles.footerNote}>100% Attribution Clarity · 0 Hidden Markups</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Weekly Reviews */}
            <ScrollReveal delay={180}>
              <div className={`${styles.bentoCard} ${styles.cardLight}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconReviews}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <span className={styles.metricTag}>Weekly Sprints</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Weekly Reviews</h3>
                  <p className={styles.cardText}>
                    Regular check-ins to track progress, flag what&apos;s working, and fix what isn&apos;t before it becomes a bigger problem.
                  </p>
                </div>

                <div className={styles.cardFooterSimple}>
                  <span className={styles.footerNote}>Weekly Sprint Syncs · Real-Time Slack Access</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 5: Performance Focus (Warm Coral/Orange Card) */}
            <ScrollReveal delay={240}>
              <div className={`${styles.bentoCard} ${styles.cardPerformance}`}>
                <div className={styles.cardPerfMesh} />
                <div className={styles.cardHeader}>
                  <div className={styles.iconBoxPerf}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <span className={styles.badgePerf}>ROAS Driven</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitleWhite}>Performance Focus</h3>
                  <p className={styles.cardTextWhite}>
                    Every campaign is built around leads, revenue, and growth you can measure, not vanity metrics.
                  </p>
                </div>

                <div className={styles.cardPerfFooter}>
                  <span className={styles.statCallout}>Target: 3.5X – 8X ROAS</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 3: Card 6 (Fast Execution) + Card 7 (Growth Strategy) */}
          <div className={styles.row3}>
            {/* Card 6: Fast Execution (Warm Golden Highlight) */}
            <ScrollReveal delay={200} className={styles.colExec}>
              <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardExec}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconExec}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <span className={styles.tagExec}>EXECUTION EXCELLENCE</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Fast Execution</h3>
                  <p className={styles.cardText}>
                    Quick campaign launches, rapid testing, and continuous optimisation to keep you ahead of competitors.
                  </p>
                </div>

                <div className={styles.chipsRow}>
                  {['Quick Launches', 'A/B Testing', 'Optimization'].map(chip => (
                    <span key={chip} className={styles.chipPill}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Card 7: Growth Strategy */}
            <ScrollReveal delay={280} className={styles.colStrategy}>
              <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardStrategy}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconStrategy}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <span className={styles.metricTag}>Compounding</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Growth Strategy</h3>
                  <p className={styles.cardText}>
                    Long-term roadmaps built for sustainable growth, not short bursts of activity that fade after a month.
                  </p>
                </div>

                <div className={styles.cardFooterSimple}>
                  <span className={styles.footerNote}>12-Month Compounding Roadmap</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 4: Card 8 (Long-Term Partnership Banner) */}
          <ScrollReveal delay={250}>
            <div className={`${styles.bentoCard} ${styles.cardPartnership}`}>
              <div className={styles.partnerGlow} />
              <div className={styles.partnerLeft}>
                <h3 className={styles.partnerTitle}>Long-Term Partnership</h3>
                <p className={styles.partnerText}>
                  We don&apos;t just run campaigns and disappear, we stay on as your growth partner and help build a stronger digital future.
                </p>
              </div>
              <div className={styles.partnerRight}>
                <Link href="/contact" className={styles.partnerBtn}>
                  <span>Get Started</span>
                  <span className={styles.partnerArrow}>→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
