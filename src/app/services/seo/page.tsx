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
    category: 'Keyword Rankings & Search Performance',
    desc: 'Tracks exact Google keyword positions, daily customer clicks, and search impressions from people in Bhubaneswar.',
    status: 'LIVE TRACKING',
    icon: '📊',
  },
  {
    name: 'Google Business Profile',
    category: 'Google Maps Top 3 Optimization',
    desc: 'Optimizes your map location, customer reviews, and local pin visibility across Patia, Saheed Nagar, Nayapalli, and Cuttack.',
    status: 'MAP PACK TOP 3',
    icon: '📍',
  },
  {
    name: 'Ahrefs & SEMrush Market Intel',
    category: 'Competitor Intelligence',
    desc: 'Analyzes what your top competitors in Bhubaneswar are doing and identifies high-converting searches to target.',
    status: 'MARKET INTEL',
    icon: '🔍',
  },
  {
    name: 'Website Health Auditor',
    category: 'Site Speed & Health Audit',
    desc: 'Scans your entire website to fix broken links, slow loading pages, and missing Google tags immediately.',
    status: 'HEALTH CHECK',
    icon: '⚡',
  },
  {
    name: 'High-Speed Mobile Platform',
    category: 'Under 1-Second Loading Speed',
    desc: 'Delivers lightning-fast 98+ PageSpeed loading on 4G and 5G networks so visitors never bounce.',
    status: 'SPEED 99/100',
    icon: '🚀',
  },
  {
    name: 'Live Client Growth Dashboard',
    category: 'Transparent Reporting',
    desc: '24/7 transparent dashboard showing your incoming phone calls, WhatsApp inquiries, and keyword rankings.',
    status: 'LIVE REPORTS',
    icon: '📈',
  },
];

const seoFaqs = [
  {
    q: 'How long does it realistically take to rank #1 on Google in Bhubaneswar?',
    a: 'For local Google Maps 3-Pack rankings and localized searches (such as in Patia, Saheed Nagar, or Infocity), our clients typically see top 3 positions within 45 to 75 days. Competitive industry-wide keywords build steadily over 3 to 6 months of disciplined optimization and high-authority local mentions.',
    takeaway: 'Google Maps top 3 in 45–75 days; competitive search terms compound over 3–6 months.',
  },
  {
    q: 'What is the concrete difference between Local SEO and Standard National SEO?',
    a: 'National SEO targets broad search queries across the country where physical location does not matter. Local SEO targets Google Maps and nearby searches in Bhubaneswar ("best interior designer in Patia", "dental clinic near me Saheed Nagar"). Local SEO drives direct phone calls, map directions, and immediate customer visits.',
    takeaway: 'Local SEO captures buyers within your exact geographic service radius in Bhubaneswar.',
  },
  {
    q: 'Do you guarantee #1 rankings on Google?',
    a: 'Google’s official guidelines forbid anyone from guaranteeing a permanent #1 spot because search algorithms update constantly. However, Marketing Copilot guarantees transparent weekly ranking progress, mobile load speeds under 1 second, and a proven track record of ranking dozens of Bhubaneswar businesses in the top 3.',
    takeaway: 'Zero risky shortcuts; measurable ranking velocity and guaranteed mobile speed.',
  },
  {
    q: 'Will ranking on Google actually generate revenue, or just vanity clicks?',
    a: 'We strictly ignore vanity traffic. We focus exclusively on commercial and transactional searches—searches made by buyers in Bhubaneswar who are ready to book, visit, or buy. We also optimize your website pages so visitors easily convert into phone calls and WhatsApp inquiries.',
    takeaway: 'Targeting commercial intent queries that convert directly into qualified customer revenue.',
  },
  {
    q: 'What reporting and transparency do we receive during the campaign?',
    a: 'You receive a 24/7 live dashboard showing exact keyword positions, organic visitors, phone calls, and verified customer leads in real time. No confusing spreadsheets—only clear metrics that matter to your business.',
    takeaway: '24/7 live dashboard with verified call and customer lead tracking.',
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
                <span>#1 SEO &amp; Google Growth Agency in Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Rank #1 on Google in Bhubaneswar.{' '}
                <span className="accent-gradient">Turn Searches Into Customers.</span>
              </h1>

              <p className={styles.heroSub}>
                When customers in Bhubaneswar search for your services on Google and Google Maps, do they find you or your competitors? We get your business to the top of Google, driving daily phone calls, store visits, and revenue across Bhubaneswar and Odisha.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Get Free Bhubaneswar SEO Audit" size="lg" />
                <a href="#serp-simulator" className={styles.heroSecondaryBtn}>
                  <span>See Live Google Rankings</span>
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
                <span className={styles.tLabel}>Google Ranking</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>+280%</span>
                <span className={styles.tLabel}>More Customer Calls</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>&lt; 1s</span>
                <span className={styles.tLabel}>Mobile Load Speed</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>45 Days</span>
                <span className={styles.tLabel}>To Google Top 3</span>
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
              <span>PROVEN SEO PLATFORMS</span>
            </div>
            <h3 className="display-md" style={{ color: '#0F172A', marginBottom: 10 }}>
              The Professional Search Tools We Use to <span className="accent-gradient">Grow Your Business</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 640, margin: '0 auto' }}>
              We track your rankings, analyze competitors, and measure incoming phone calls using the world&apos;s most trusted search platforms.
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
