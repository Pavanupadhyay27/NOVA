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
              Turning Ideas Into<br />
              <span className="accent-gradient">Measurable Business Growth.</span>
            </h2>
            <p className={styles.subHeadline}>
              Digital Growth Powered by Strategy, AI &amp; Creativity
            </p>
            <p className={`body-lg ${styles.sub}`} style={{ maxWidth: 760 }}>
              Every business has different goals and challenges. That&apos;s why we create customized marketing strategies instead of using a one-size-fits-all approach.<br /><br />
              From improving search visibility and generating leads to increasing brand awareness and online sales, our team focuses on marketing activities that contribute to real business growth. Choosing the agency can make a real difference in your online growth. Nova Spark brings together technology, creativity, strategy and performance marketing to help your business grow.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Row 1: Card 1 (AI-First Approach) + Card 2 (Dedicated Growth Team) */}
          <div className={styles.row1}>
            {/* Card 1: AI-First Approach (Vibrant Deep Blue Card) */}
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
                  <h3 className={styles.cardTitleWhite}>AI-First Approach</h3>
                  <p className={styles.cardTextWhite}>
                    We use AI-powered tools, automation and data insights to make marketing decisions and boost campaign efficiency.
                  </p>
                </div>

                <div className={styles.cardAiFooter}>
                  <div className={styles.aiTag}>
                    <span className={styles.aiTagDot} />
                    <span>Data Insights & Automation</span>
                  </div>
                  <div className={styles.aiTag}>
                    <span className={styles.aiTagDot} />
                    <span>Campaign Efficiency</span>
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
                  <span className={styles.tagExpert}>DEDICATED TEAM</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Dedicated Growth Team</h3>
                  <p className={styles.cardText}>
                    Our team includes marketers, designers, developers and strategists who work closely together to support your business goals.
                  </p>
                </div>

                <div className={styles.chipsRow}>
                  {['Marketers', 'Designers', 'Developers', 'Strategists'].map(chip => (
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

          {/* Row 2: 2 Cards (Reporting & Performance Focus) */}
          <div className={styles.row2}>
            {/* Card 3: Reporting */}
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
                  <span className={styles.metricTag}>Transparent Data</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Reporting</h3>
                  <p className={styles.cardText}>
                    You get clear reports and campaign insights so you always know how your marketing is performing.
                  </p>
                </div>

                <div className={styles.cardFooterSimple}>
                  <span className={styles.footerNote}>Clear Dashboards · Actionable Insights</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Performance Focus (Warm Coral/Orange Card) */}
            <ScrollReveal delay={180}>
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
                  <span className={styles.badgePerf}>Results Driven</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitleWhite}>Performance Focus</h3>
                  <p className={styles.cardTextWhite}>
                    Our campaigns are built to deliver results—leads, sales, visibility and long-term business growth.
                  </p>
                </div>

                <div className={styles.cardPerfFooter}>
                  <span className={styles.statCallout}>Leads · Sales · Real Visibility</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 3: Card 5 (Fast Execution) + Card 6 (Long-Term Growth Strategy) */}
          <div className={styles.row3}>
            {/* Card 5: Fast Execution */}
            <ScrollReveal delay={200} className={styles.colExec}>
              <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardExec}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconExec}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <span className={styles.tagExec}>CONTINUOUS MOMENTUM</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Fast Execution</h3>
                  <p className={styles.cardText}>
                    We focus on implementation, testing, optimization and continuous improvement to keep momentum.
                  </p>
                </div>

                <div className={styles.chipsRow}>
                  {['Implementation', 'Rapid Testing', 'Optimization', 'Continuous Improvement'].map(chip => (
                    <span key={chip} className={styles.chipPill}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Card 6: Long-Term Growth Strategy */}
            <ScrollReveal delay={280} className={styles.colStrategy}>
              <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardStrategy}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles.iconStrategy}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <span className={styles.metricTag}>Sustainable Scale</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Long-Term Growth Strategy</h3>
                  <p className={styles.cardText}>
                    Our Online Marketing Services are designed to support growth, not just short-term wins.
                  </p>
                </div>

                <div className={styles.cardFooterSimple}>
                  <span className={styles.footerNote}>Sustainable Growth Architecture</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 4: Partnership Banner */}
          <ScrollReveal delay={250}>
            <div className={`${styles.bentoCard} ${styles.cardPartnership}`}>
              <div className={styles.partnerGlow} />
              <div className={styles.partnerLeft}>
                <h3 className={styles.partnerTitle}>Ready to Scale Your Business?</h3>
                <p className={styles.partnerText}>
                  Partner with Nova Spark and turn your marketing into a predictable, compounding revenue engine.
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
