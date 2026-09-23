'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import SERPSimulator from './_components/SERPSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import SEOCapabilitiesWorkstation from './_components/SEOCapabilitiesWorkstation';
import SEORoiCalculator from './_components/SEORoiCalculator';
import SEORankComparisonMatrix from './_components/SEORankComparisonMatrix';
import SEORankingRoadmap from './_components/SEORankingRoadmap';
import SEOCorridorExplorer from './_components/SEOCorridorExplorer';

import styles from './seo-page.module.css';

const algorithmicArsenal = [
  {
    name: 'Google Search Console',
    category: 'SERP Indexing & Crawl Diagnostics',
    desc: 'Live telemetry tracking indexing status, Core Web Vitals mobile metrics, and exact Bhubaneswar keyword impressions.',
    status: 'ACTIVE TELEMETRY',
    icon: '📊',
  },
  {
    name: 'Google Business Profile',
    category: 'Local 3-Pack Proximity API',
    desc: 'Micro-market optimization managing geo-citations, review velocity, and Google Maps pin positioning across Patia and Saheed Nagar.',
    status: 'GEO-FENCED',
    icon: '📍',
  },
  {
    name: 'Ahrefs & SEMrush Intelligence',
    category: 'Keyword & Authority Intelligence',
    desc: 'Deep forensic tracking of competitor backlinks, regional content gaps, and high-converting commercial search queries in Odisha.',
    status: 'DATA ENGINE',
    icon: '🔍',
  },
  {
    name: 'Screaming Frog Spider',
    category: 'Technical Crawl Diagnostics',
    desc: 'Automated 1,000+ page scans finding 404s, broken canonicals, redirect loops, and schema JSON-LD discrepancies.',
    status: 'DEEP CRAWL',
    icon: '🕷️',
  },
  {
    name: 'Next.js 15 Speed Architecture',
    category: 'Sub-Second Edge Rendering',
    desc: 'Static site generation with Edge CDN caching delivering 98+ PageSpeed scores that Google algorithms prioritize permanently.',
    status: 'LIGHTHOUSE 98+',
    icon: '⚡',
  },
  {
    name: 'Looker Studio Executive Suite',
    category: 'Real-Time Pipeline Attribution',
    desc: 'Transparent live client dashboards directly measuring phone calls, WhatsApp leads, and commercial inquiries.',
    status: 'LIVE CLIENT SYNC',
    icon: '📈',
  },
];

const seoFaqs = [
  {
    q: 'How long does it realistically take to rank #1 on Google in Bhubaneswar?',
    a: 'For local Google 3-Pack map rankings and localized long-tail searches (e.g. in Patia, Saheed Nagar, or Infocity), our clients typically see top 3 positions within 45 to 75 days. Broad, high-competition industry keywords compound sustainably over 3 to 6 months of disciplined Next.js technical optimization and regional link building.',
    takeaway: 'Map 3-Pack traction in 45–75 days; high-competition search terms compound over 3–6 months.',
  },
  {
    q: 'What is the concrete difference between Local SEO and Standard National SEO?',
    a: 'National SEO targets broad search queries across all regions where physical location is irrelevant. Hyperlocal SEO targets Google Maps and proximity-based searches ("best interior designer in Patia", "dental clinic near me Saheed Nagar"). Local SEO drives direct phone calls, Google Maps directions, and immediate high-intent foot traffic.',
    takeaway: 'Local SEO captures buyers within your exact geographic service radius.',
  },
  {
    q: 'Do you guarantee #1 rankings on Google?',
    a: 'Google’s official webmaster guidelines strictly forbid anyone from guaranteeing a permanent #1 spot because search algorithms update continuously. However, Marketing Copilot guarantees 100% white-hat engineering, transparent weekly ranking velocity, PageSpeed scores above 95, and a proven track record of placing dozens of Bhubaneswar businesses in the top 3.',
    takeaway: 'Zero risky black-hat shortcuts; measurable ranking velocity and PageSpeed guaranteed.',
  },
  {
    q: 'Will ranking on Google actually generate revenue, or just vanity clicks?',
    a: 'We strictly ignore vanity traffic. Our topic cluster methodology focuses exclusively on commercial and transactional intent searches—queries made by buyers who are ready to book, visit, or buy. Furthermore, we optimize on-page conversion rate optimization (CRO) so visitors convert into phone calls and WhatsApp inquiries.',
    takeaway: 'Targeting commercial intent queries that convert directly into qualified customer revenue.',
  },
  {
    q: 'What reporting and transparency do we receive during the campaign?',
    a: 'You receive a 24/7 live Google Looker Studio dashboard connected directly to Google Search Console and CallRail. You can inspect exact keyword position changes, organic impressions, click-through rates, and verified lead form submissions in real time.',
    takeaway: '24/7 live Looker Studio dashboard with verified call and lead attribution.',
  },
];

export default function SEOPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. CENTERED CINEMATIC HERO
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>Real-Time Google 3-Pack Telemetry · Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Rank #1 on Google in Bhubaneswar.{' '}
                <span className="accent-gradient">Get Chosen First.</span>
              </h1>

              <p className={styles.heroSub}>
                We make Bhubaneswar businesses impossible to ignore on Google. Technical Next.js SEO, Google Maps 3-pack dominance, and hyperlocal search architectures that drive compounding phone calls and customer revenue.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Claim Free Technical Audit" size="lg" />
                <a href="#serp-simulator" className={styles.heroSecondaryBtn}>
                  <span>Inspect Live SERP Telemetry</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>UR</span>
                  <span className={styles.trustAvatar}>ED</span>
                  <span className={styles.trustAvatar}>NC</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+50</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Rated 4.9/5 by 50+ Bhubaneswar &amp; Odisha Brands
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>#1</span>
                <span className={styles.tLabel}>Organic Ranking</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>+280%</span>
                <span className={styles.tLabel}>Inbound Phone Calls</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>98+</span>
                <span className={styles.tLabel}>Core Web Vitals</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>45 Days</span>
                <span className={styles.tLabel}>3-Pack Traction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. LIVE SERP & GOOGLE 3-PACK SIMULATOR
         ══════════════════════════════════════════════════ */}
      <div id="serp-simulator">
        <SERPSimulator />
      </div>

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. TECHNICAL & STRATEGIC CAPABILITIES WORKSTATION
         ══════════════════════════════════════════════════ */}
      <SEOCapabilitiesWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE TRAFFIC & REVENUE ROI ENGINE
         ══════════════════════════════════════════════════ */}
      <SEORoiCalculator />

      {/* ══════════════════════════════════════════════════
          6. THE COMMERCIAL IMPACT MATRIX
         ══════════════════════════════════════════════════ */}
      <SEORankComparisonMatrix />

      {/* ══════════════════════════════════════════════════
          7. 4-PHASE GROWTH ROADMAP
         ══════════════════════════════════════════════════ */}
      <SEORankingRoadmap />

      {/* ══════════════════════════════════════════════════
          8. EDITORIAL CASE STUDY SHOWCASE
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.editorialContainer}>
              <div className={styles.editorialContent}>
                <div className={styles.editorialBadge}>
                  <span className={styles.badgeDot} />
                  <span>Verified SEO Case Study · Luxury Real Estate</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Utkal Royal Prestige Real Estate
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Patia &amp; Chandrasekharpur, Bhubaneswar
                </div>

                <p className={styles.editorialDesc}>
                  Utkal Royal was invisible on Google Maps and losing high-net-worth villa buyers to aggregators. Marketing Copilot deployed Next.js schema architecture, local 3-pack geo-grids, and high-intent commercial keyword clusters.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Marketing Copilot took us from nowhere on Google to the #1 spot on Google Maps for luxury apartments in Bhubaneswar within 60 days. Our inbound buyer inquiries tripled.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Marketing Director, Utkal Royal Prestige
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                    alt="Utkal Royal Luxury Real Estate Bhubaneswar"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>#1 Google 3-Pack Verified · Patia Hub</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiNum}>+340%</span>
                    <span className={styles.kpiLbl}>Organic Traffic</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiNum}>18</span>
                    <span className={styles.kpiLbl}>Top #1 Keywords</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiNum}>45 Days</span>
                    <span className={styles.kpiLbl}>To Google 3-Pack</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. BHUBANESWAR REGIONAL SEARCH CORRIDORS
         ══════════════════════════════════════════════════ */}
      <SEOCorridorExplorer />

      {/* ══════════════════════════════════════════════════
          10. ARCHITECTURAL ALGORITHMIC ARSENAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Algorithmic Toolchain</span>
            </div>
            <h3 className="display-md" style={{ color: '#0F172A', marginBottom: 10 }}>
              Search Tech Arsenal &amp; <span className="accent-gradient">Data Infrastructure</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 600, margin: '0 auto' }}>
              Enterprise-grade search software toolchains deployed across all Bhubaneswar SEO campaigns.
            </p>

            <div className={styles.arsenalSpecGrid}>
              {algorithmicArsenal.map((t) => (
                <div key={t.name} className={styles.specRow}>
                  <div className={styles.specTopBar}>
                    <span className={styles.specIcon}>{t.icon}</span>
                    <span className={styles.specStatus}>{t.status}</span>
                  </div>
                  <h4 className={styles.specTitle}>{t.name}</h4>
                  <span className={styles.specCategory}>{t.category}</span>
                  <p className={styles.specDesc}>{t.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          11. MINIMALIST HAIRLINE FAQ LIST
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Direct Answers</span>
            </div>
            <h3 className="display-md" style={{ color: '#0F172A', marginBottom: 10 }}>
              Frequently Asked <span className="accent-gradient">SEO Questions</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 580, margin: '0 auto' }}>
              Clear, transparent answers on timeline, guarantees, ranking velocity, and ROI for Bhubaneswar business owners.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {seoFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.faqIcon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqPane}>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                      <div className={styles.faqTakeaway}>
                        <span>💡 Strategic Takeaway:</span>
                        <span>{faq.takeaway}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          12. EXECUTIVE BOTTOM CONVERSION TERMINAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.executiveTerminal}>
              <div className={styles.termGlow} />
              <div>
                <span className={styles.termPill}>SCHEDULE EXECUTIVE AUDIT</span>
                <h3 className={styles.termTitle}>
                  Ready to Capture #1 Market Share on Google in Bhubaneswar?
                </h3>
                <p className={styles.termSub}>
                  Claim your free 30-minute forensic search audit. We will crawl your Core Web Vitals, analyze competitor backlink gaps, and model your Google Maps 3-Pack growth path across Odisha.
                </p>
                <div className={styles.termContact}>
                  <span>📞 Direct Hotline:</span>
                  <a href="tel:+919437168434" className={styles.termPhone}>
                    +91 94371 68434
                  </a>
                  <span>·</span>
                  <span>HQ: Kharvela Nagar, Unit 3, Bhubaneswar</span>
                </div>
              </div>

              <div className={styles.termActions}>
                <Link href="/contact" className={styles.termAuditBtn}>
                  <span>Claim Free Technical SEO Audit</span>
                  <span>→</span>
                </Link>

                <a
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20audit%20my%20business%20Google%20rankings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.termWhatsAppBtn}
                >
                  <span>💬 WhatsApp Our Principal Strategist</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
