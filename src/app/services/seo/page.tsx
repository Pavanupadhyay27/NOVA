'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
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

const seoHeroSlides = [
  {
    id: 'seo-slide-1',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Marketing Copilot organic SEO performance analytics and Bhubaneswar Google keyword rankings',
    caption: 'Algorithmic Organic Search Architecture',
  },
  {
    id: 'seo-slide-2',
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    alt: 'Senior SEO search strategists planning Google 3-Pack rankings and local search dominance',
    caption: 'Local Google 3-Pack & Map Pack Domination',
  },
  {
    id: 'seo-slide-3',
    src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Core Web Vitals speed optimization and keyword cluster ranking dashboard',
    caption: 'High-Intent Commercial Keyword Clusters',
  },
];

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
    category: 'Keyword & Competitor Authority Gaps',
    desc: 'Deep forensic tracking of competitor backlinks, regional content gaps, and high-converting commercial search queries in Odisha.',
    status: 'DATA ENGINE',
    icon: '🔍',
  },
  {
    name: 'Screaming Frog Spider',
    category: 'Technical Crawl & Error Eradication',
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % seoHeroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. HERO COMMAND CENTER
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
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
                  We make Bhubaneswar businesses impossible to ignore on Google. Technical Next.js SEO, Google Maps 3-pack dominance, and hyperlocal search architectures across Patia, Saheed Nagar, Infocity, and Cuttack that drive compounding phone calls and revenue.
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
                    <span className={`${styles.trustAvatar} ${styles.trustAvatarLast}`}>+50</span>
                  </div>
                  <div className={styles.trustTextCol}>
                    <div className={styles.trustStars}>★★★★★</div>
                    <div className={styles.trustLabel}>Rated 4.9/5 by 50+ Bhubaneswar &amp; Odisha Brands</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className={styles.heroVisualStage}>
              <div className={styles.visualGlowBackdrop} />
              <div className={styles.heroCardContainer}>
                <div className={styles.heroSliderViewport}>
                  {seoHeroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: idx === currentSlide ? 1 : 0,
                        transition: 'opacity 0.6s ease-in-out',
                      }}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 768px) 100vw, 480px"
                        className={styles.heroSlideImg}
                      />
                      <div className={styles.slideOverlayGradient} />
                    </div>
                  ))}

                  <div className={styles.floatingTopPill}>
                    <span className={styles.emeraldPulseDot} />
                    <span>Live Rank: #1 Google 3-Pack Verified</span>
                  </div>

                  <div className={styles.floatingBottomCaption}>
                    <span>{seoHeroSlides[currentSlide]?.caption}</span>
                    <div className={styles.dotsWrapper}>
                      {seoHeroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`${styles.dotBtn} ${idx === currentSlide ? styles.dotBtnActive : ''}`}
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.telemetryGrid}>
                  <div className={styles.telemetryCard}>
                    <span className={styles.tVal}>+240%</span>
                    <span className={styles.tLabel}>Organic Inquiries</span>
                  </div>
                  <div className={styles.telemetryCard}>
                    <span className={styles.tVal}>Top 3</span>
                    <span className={styles.tLabel}>Map 3-Pack Rank</span>
                  </div>
                  <div className={styles.telemetryCard}>
                    <span className={styles.tVal}>90 Days</span>
                    <span className={styles.tLabel}>Avg Page 1 Traction</span>
                  </div>
                  <div className={styles.telemetryCard}>
                    <span className={styles.tVal}>0 Spam</span>
                    <span className={styles.tLabel}>White-Hat SLA</span>
                  </div>
                </div>
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
          5. INTERACTIVE TRAFFIC & REVENUE ROI YIELD ENGINE
         ══════════════════════════════════════════════════ */}
      <SEORoiCalculator />

      {/* ══════════════════════════════════════════════════
          6. THE COMMERCIAL IMPACT MATRIX
         ══════════════════════════════════════════════════ */}
      <SEORankComparisonMatrix />

      {/* ══════════════════════════════════════════════════
          7. 4-PHASE GROWTH ENGINEERING ROADMAP
         ══════════════════════════════════════════════════ */}
      <SEORankingRoadmap />

      {/* ══════════════════════════════════════════════════
          8. FLAGSHIP TRANSFORMATION SHOWCASE (CASE STUDY)
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.caseSkeuoCard}>
              <div className={styles.caseAtmosphereGlow} />

              <div className={styles.caseTopBar}>
                <div className={styles.caseStatusBadge}>
                  <span className={styles.caseStatusPulse} />
                  <span>VERIFIED BHUBANESWAR SEARCH CASE STUDY</span>
                </div>
                <div className={styles.caseSectorPill}>
                  <span>Patia &amp; Chandrasekharpur Corridor</span>
                </div>
              </div>

              <div className={styles.caseSplitGrid}>
                <div className={styles.caseInfoCol}>
                  <h3 className={styles.caseClientTitle}>
                    Utkal Royal Living &amp; Residences
                  </h3>
                  <div className={styles.caseLocBadge}>
                    <span>📍 Near KIIT Square, Patia, Bhubaneswar</span>
                  </div>

                  <p className={styles.caseExecSummary}>
                    Utkal Royal Living had zero organic search visibility, relying entirely on expensive offline hoardings. Marketing Copilot engineered a high-intent topic cluster architecture, localized schema JSON-LD, and Next.js Core Web Vitals optimization.
                  </p>

                  <div className={styles.caseStrategyChips}>
                    <span className={styles.stratChip}>✓ Local Business Geo-Schema</span>
                    <span className={styles.stratChip}>✓ Patia Micro-Market Authority</span>
                    <span className={styles.stratChip}>✓ High-Intent Buyer Intent Clusters</span>
                  </div>

                  <div className={styles.caseQuoteCallout}>
                    <p className={styles.caseQuoteText}>
                      &quot;Marketing Copilot transformed our digital pipeline. We went from completely unranked to owning the top spot across all luxury real estate queries in Bhubaneswar. We now generate 90+ verified HNI inquiries every month.&quot;
                    </p>
                    <div className={styles.caseQuoteAuthor}>
                      — Commercial Sales Directorate, Utkal Royal Residences
                    </div>
                  </div>

                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>

                <div className={styles.caseVisualCol}>
                  <div className={styles.caseVisualWindow}>
                    <Image
                      src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                      alt="Utkal Royal Living Luxury Architecture Bhubaneswar"
                      fill
                      sizes="(max-width: 768px) 100vw, 440px"
                      className={styles.caseWindowImg}
                    />
                    <div className={styles.caseWindowBadge}>
                      <span>G #1 Rank on Google Search &amp; Maps</span>
                    </div>
                  </div>

                  <div className={styles.caseKpiRow}>
                    <div className={styles.caseKpiTile}>
                      <span className={styles.kpiNumber}>#1 Rank</span>
                      <span className={styles.kpiTitle}>18 Keywords</span>
                      <span className={styles.kpiSub}>High-Ticket Commercial</span>
                    </div>
                    <div className={styles.caseKpiTile}>
                      <span className={styles.kpiNumber}>+340%</span>
                      <span className={styles.kpiTitle}>Buyer Inquiries</span>
                      <span className={styles.kpiSub}>90+ HNI Leads/Mo</span>
                    </div>
                    <div className={styles.caseKpiTile}>
                      <span className={styles.kpiNumber}>90 Days</span>
                      <span className={styles.kpiTitle}>To Page 1</span>
                      <span className={styles.kpiSub}>Zero Penalties</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. BHUBANESWAR COMMERCIAL HUBS & GEO-CORRIDORS
         ══════════════════════════════════════════════════ */}
      <SEOCorridorExplorer />

      {/* ══════════════════════════════════════════════════
          10. ALGORITHMIC ARSENAL & TOOL TELEMETRY
         ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Enterprise Toolchains</span>
            </div>
            <h3 className="display-md" style={{ color: '#0F172A', marginBottom: 10 }}>
              Algorithmic Arsenal &amp; <span className="accent-gradient">Search Infrastructure</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 640, margin: '0 auto' }}>
              Enterprise-grade telemetry platforms deployed across all Bhubaneswar client search campaigns.
            </p>

            <div className={styles.arsenalGrid}>
              {algorithmicArsenal.map((t) => (
                <div key={t.name} className={styles.toolCard}>
                  <div className={styles.toolHeader}>
                    <div className={styles.toolIconBox}>{t.icon}</div>
                    <span className={styles.toolStatusPill}>{t.status}</span>
                  </div>
                  <h4 className={styles.toolName}>{t.name}</h4>
                  <span className={styles.toolCategory}>{t.category}</span>
                  <p className={styles.toolDesc}>{t.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          11. DEEP KNOWLEDGE & SEARCH FAQ VAULT
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
            <p className="body-md" style={{ color: '#64748B', maxWidth: 620, margin: '0 auto' }}>
              Everything Bhubaneswar founders need to know about organic search rankings, timelines, and commercial ROI.
            </p>
          </ScrollReveal>

          <div className={styles.faqAccordion}>
            {seoFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestionBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQText}>{faq.q}</span>
                    <span className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`}>
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqAnswerPane}>
                      <p className={styles.faqAText}>{faq.a}</p>
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
          12. EXECUTIVE BOTTOM CONVERSION STATION
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.conversionConsole}>
              <div className={styles.consoleLeft}>
                <span className={styles.consolePill}>SCHEDULE STRATEGY AUDIT</span>
                <h3 className={styles.consoleTitle}>
                  Ready to Monopolize Google Search in Bhubaneswar?
                </h3>
                <p className={styles.consoleSub}>
                  Claim your free 30-minute forensic search audit. We will analyze your current rankings, crawl health, and keyword opportunities across Patia, Saheed Nagar, and Cuttack.
                </p>
                <div className={styles.consoleContactRow}>
                  <a href="tel:+919437168434" className={styles.phoneHotline}>
                    <span>📞 Direct Line:</span>
                    <span>+91 94371 68434</span>
                  </a>
                  <span style={{ color: '#6366F1' }}>·</span>
                  <span style={{ fontSize: 13, color: '#A5B4FC' }}>HQ: Kharvela Nagar, Unit 3, Bhubaneswar</span>
                </div>
              </div>

              <div className={styles.consoleActionsCol}>
                <Link href="/contact" className={styles.consoleAuditBtn}>
                  <span>Claim Free Forensic SEO Audit</span>
                  <span>→</span>
                </Link>

                <a
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20audit%20my%20business%20Google%20rankings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.consoleWhatsAppBtn}
                >
                  <span>💬 WhatsApp Our Senior Strategist</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
