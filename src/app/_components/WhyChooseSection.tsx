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
        {/* Compact Side-by-Side Section Header */}
        <div className={styles.header}>
          <ScrollReveal>
            <div className={styles.headerGrid}>
              {/* Left Column: Eyebrow + Headline + Sub-pill */}
              <div className={styles.headerLeft}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>
                  <span className={styles.sparkleIcon}>✨</span>
                  <span>Why Choose Nova Spark</span>
                </div>
                <h2 className={styles.headline}>
                  Turning Ideas Into <br className={styles.hideMobile} />
                  <span className="accent-gradient">Measurable Business Growth.</span>
                </h2>
                <div className={styles.subHeadlinePill}>
                  <span className={styles.subHeadlineDot} />
                  <span>Digital Growth Powered by Strategy, AI &amp; Creativity</span>
                </div>
              </div>

              {/* Right Column: Concise Narrative + Brochure PDF Button */}
              <div className={styles.headerRight}>
                <p className={styles.subText}>
                  Every business has different goals and challenges. That&apos;s why we create customized marketing strategies instead of a one-size-fits-all approach—driving search visibility, qualified leads, and real business growth. Nova Spark brings together technology, creativity, strategy, and performance marketing to help your business grow.
                </p>
                <div className={styles.headerActions}>
                  <a
                    href="/brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.brochureBtn}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="12" y2="18" />
                      <line x1="15" y1="15" x2="12" y2="18" />
                    </svg>
                    <span>Download Company Brochure (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 6 Bento Grid Cards in Compact 3-Column Layout */}
        <div className={styles.bentoGrid}>
          {/* Card 1: AI-First Approach (Vibrant Deep Blue Card) */}
          <ScrollReveal delay={0}>
            <div className={`${styles.bentoCard} ${styles.cardAi}`}>
              <div className={styles.cardAiMesh} />
              <div className={styles.cardHeader}>
                <div className={styles.iconBoxAi}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                  <span>Data Insights &amp; Automation</span>
                </div>
                <div className={styles.aiTag}>
                  <span className={styles.aiTagDot} />
                  <span>Campaign Efficiency</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Dedicated Growth Team */}
          <ScrollReveal delay={80}>
            <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardTeam}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconBox} ${styles.iconTeam}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

          {/* Card 3: Reporting */}
          <ScrollReveal delay={140}>
            <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardReporting}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconBox} ${styles.iconReporting}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <span className={styles.tagReporting}>TRANSPARENT DATA</span>
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
                <span className={styles.badgePerf}>RESULTS DRIVEN</span>
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

          {/* Card 5: Fast Execution */}
          <ScrollReveal delay={220}>
            <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardExec}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconBox} ${styles.iconExec}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span className={styles.tagExec}>RAPID MOMENTUM</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Fast Execution</h3>
                <p className={styles.cardText}>
                  We focus on implementation, testing, optimization and continuous improvement to keep momentum.
                </p>
              </div>

              <div className={styles.chipsRow}>
                {['Implementation', 'Testing', 'Optimization', 'Improvement'].map(chip => (
                  <span key={chip} className={styles.chipPill}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 6: Long-Term Growth Strategy */}
          <ScrollReveal delay={260}>
            <div className={`${styles.bentoCard} ${styles.cardLight} ${styles.cardStrategy}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconBox} ${styles.iconStrategy}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <span className={styles.tagStrategy}>SUSTAINABLE SCALE</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Long-Term Growth Strategy</h3>
                <p className={styles.cardText}>
                  Our Online Marketing Services are designed to support growth, not just short-term wins.
                </p>
              </div>

              <div className={styles.cardFooterSimple}>
                <span className={styles.footerNote}>Compounding Revenue &amp; Scalability</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Row 4: Full-Width Partnership Banner */}
          <div className={styles.partnershipCol}>
            <ScrollReveal delay={300}>
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
      </div>
    </section>
  );
}
