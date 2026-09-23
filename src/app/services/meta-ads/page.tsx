'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import MetaAdStudioSimulator from './_components/MetaAdStudioSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import MetaFunnelWorkstation from './_components/MetaFunnelWorkstation';
import MetaRoasCalculator from './_components/MetaRoasCalculator';
import MetaComparisonMatrix from './_components/MetaComparisonMatrix';
import MetaSprintRoadmap from './_components/MetaSprintRoadmap';
import MetaDemographicRadar from './_components/MetaDemographicRadar';

import styles from './meta-ads-page.module.css';

const metaHeroSlides = [
  {
    id: 'meta-slide-1',
    src: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop',
    alt: 'High-converting vertical Instagram Reels ad creative production studio in Bhubaneswar',
    caption: 'Dynamic 9:16 Vertical Reel Production',
  },
  {
    id: 'meta-slide-2',
    src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop',
    alt: 'Social media growth analytics and Meta Conversions API real-time ROAS dashboard',
    caption: 'Full-Funnel Attribution & Meta CAPI',
  },
  {
    id: 'meta-slide-3',
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    alt: 'Creative strategy team analyzing Bhubaneswar buyer cohorts and ad fatigue cycles',
    caption: 'Weekly Creative Testing & Rotation Sprints',
  },
];

const metaAdTechArsenal = [
  {
    name: 'Meta Conversions API (CAPI)',
    category: 'Server-Side Cloud Attribution',
    desc: 'Direct server-to-server event pipeline delivering unblocked signal data to Meta AI algorithms regardless of iOS 18 privacy blocks.',
    status: 'EVENT MATCH 9.2/10',
    icon: '⚡',
  },
  {
    name: 'Meta Advantage+ AI Engine',
    category: 'Neural Budget & Creative Distribution',
    desc: 'Algorithmic machine learning matching dynamic creative angles to high-probability buyers across Instagram Explore and Reels.',
    status: 'ALGORITHMIC',
    icon: '🤖',
  },
  {
    name: 'WhatsApp Business API',
    category: 'Click-to-Chat Lead Pipeline',
    desc: 'Instant human closing funnels routing Instagram and Facebook ad clicks directly into automated WhatsApp qualification chats.',
    status: 'SUB-60S DISPATCH',
    icon: '💬',
  },
  {
    name: 'Triple Whale & Looker Studio',
    category: 'First-Party ROAS Telemetry',
    desc: 'Real-time client analytics dashboard tracking blended ROAS, new customer acquisition cost (nCAC), and gross sales pipeline.',
    status: 'LIVE ATTRIBUTION',
    icon: '📊',
  },
  {
    name: 'Meta Pixel & Offline Events',
    category: 'Omnichannel Conversion Tracking',
    desc: 'Syncing in-store Bhubaneswar showroom walk-ins and offline phone closings back into ad accounts to train bidding algorithms.',
    status: 'OMNICHANNEL',
    icon: '📍',
  },
  {
    name: 'Dynamic Creative Testing (DCT)',
    category: 'Creative Fatigue Elimination',
    desc: 'Automated modular testing of 6 headlines, 8 video hooks, and 4 audio tracks every single week to sustain low acquisition costs.',
    status: 'WEEKLY ROTATION',
    icon: '🎬',
  },
];

const metaFaqs = [
  {
    q: 'Should my Bhubaneswar business invest in Google Ads or Meta Ads?',
    a: 'Both channels serve complementary functions in a complete growth architecture. Google Ads captures active demand from people searching for your service right now. Meta Ads creates new demand and builds massive brand authority by introducing your visual story into people’s daily Instagram and Facebook feeds.',
    takeaway: 'Google captures active intent; Meta creates new demand and drives direct WhatsApp sales.',
  },
  {
    q: 'Why are Click-to-WhatsApp ads so effective for Odisha businesses?',
    a: 'Odisha consumers strongly prefer instant, human communication over filling out tedious web forms or waiting hours for an email response. Click-to-WhatsApp ads eliminate friction, allowing your sales team to answer questions, share photos, and close transactions in real time.',
    takeaway: 'WhatsApp ads eliminate form friction and achieve 28%+ lead-to-conversation conversion rates.',
  },
  {
    q: 'How does Marketing Copilot prevent ad fatigue from increasing our costs?',
    a: 'When audiences in Bhubaneswar see the same ad creative multiple times, cost per click increases dramatically. We run 7-day creative sprints, producing 6 to 8 new vertical video cuts, static carousels, and fresh psychological hooks weekly so your campaigns never fatigue.',
    takeaway: 'Weekly creative sprint rotations test fresh hooks before audience fatigue sets in.',
  },
  {
    q: 'What starting budget do we need for Meta Ads in Bhubaneswar?',
    a: 'We typically recommend a testing budget between ₹25,000 and ₹60,000 for the first 30-day algorithmic sprint. This generates sufficient impression data to identify winning creative hooks and establish your baseline Cost Per Lead (CPL) before scaling.',
    takeaway: 'Initial ₹25k–₹60k testing budget calibrates Meta’s AI algorithms with verified local data.',
  },
  {
    q: 'Do you handle the entire video shooting, scripting, and editing process?',
    a: 'Yes. Marketing Copilot operates a complete in-house performance creative studio. We write psychological 3-second hook scripts, record voiceovers in Odia and English, edit fast-paced 9:16 vertical video reels, and design high-converting carousels.',
    takeaway: 'End-to-end creative production including scripting, editing, voiceovers, and motion graphics.',
  },
];

export default function MetaAdsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % metaHeroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. HERO STUDIO CANVAS
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <ScrollReveal>
                <div className={styles.heroEyebrowPill}>
                  <span className={styles.pinkPulseDot} />
                  <span>Verified 4.8X Blended ROAS · Bhubaneswar &amp; Odisha</span>
                </div>

                <h1 className={styles.heroTitle}>
                  Stop the Scroll. Start the Sale.{' '}
                  <span className="accent-gradient">In Bhubaneswar.</span>
                </h1>

                <p className={styles.heroSub}>
                  We engineer high-converting Meta ad campaigns tailored for Odisha consumers. From Reels hooks that stop the thumb to Click-to-WhatsApp direct sales funnels and Server-Side CAPI tracking, we turn social attention into predictable revenue.
                </p>

                <div className={styles.heroActions}>
                  <BeamButton href="/contact" label="Launch Meta Growth Sprint" size="lg" />
                  <a href="#ad-studio" className={styles.heroSecondaryBtn}>
                    <span>Inspect Live Ad Formats</span>
                    <span>↓</span>
                  </a>
                </div>

                <div className={styles.trustStrip}>
                  <div className={styles.trustAvatars}>
                    <span className={styles.trustAvatar}>VH</span>
                    <span className={styles.trustAvatar}>ED</span>
                    <span className={styles.trustAvatar}>SM</span>
                    <span className={`${styles.trustAvatar} ${styles.trustAvatarPink}`}>+45</span>
                  </div>
                  <div className={styles.trustTextCol}>
                    <div className={styles.trustStars}>★★★★★</div>
                    <div className={styles.trustLabel}>4.8X Avg ROAS across 45+ Bhubaneswar &amp; Odisha Brands</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className={styles.heroVisualStage}>
              <div className={styles.visualGlowBackdrop} />
              <div className={styles.heroCardContainer}>
                <div className={styles.heroSliderViewport}>
                  {metaHeroSlides.map((slide, idx) => (
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
                    <span className={styles.pinkPulseDot} />
                    <span>Average ROAS: 4.8X Verified Return</span>
                  </div>

                  <div className={styles.floatingBottomCaption}>
                    <span>{metaHeroSlides[currentSlide]?.caption}</span>
                    <div className={styles.dotsWrapper}>
                      {metaHeroSlides.map((_, idx) => (
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
                    <span className={styles.tVal}>4.8X</span>
                    <span className={styles.tLabel}>Average ROAS</span>
                  </div>
                  <div className={styles.telemetryCard}>
                    <span className={styles.tVal}>+340%</span>
                    <span className={styles.tLabel}>Qualified Leads</span>
                  </div>
                  <div className={styles.telemetryCard}>
                    <span className={styles.tVal}>₹14</span>
                    <span className={styles.tLabel}>Lowest CPL</span>
                  </div>
                  <div className={styles.telemetryCard}>
                    <span className={styles.tVal}>72 Hrs</span>
                    <span className={styles.tLabel}>Creative Sprint</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. INTERACTIVE AD STUDIO & FORMAT SIMULATOR
         ══════════════════════════════════════════════════ */}
      <div id="ad-studio">
        <MetaAdStudioSimulator />
      </div>

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. FULL-FUNNEL PERFORMANCE WORKSTATION
         ══════════════════════════════════════════════════ */}
      <MetaFunnelWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE ROAS & CPL PROFIT SIMULATOR
         ══════════════════════════════════════════════════ */}
      <MetaRoasCalculator />

      {/* ══════════════════════════════════════════════════
          6. THE PERFORMANCE MATRIX (BOOSTED POSTS VS COPILOT)
         ══════════════════════════════════════════════════ */}
      <MetaComparisonMatrix />

      {/* ══════════════════════════════════════════════════
          7. 4-WEEK CREATIVE SPRINT ROADMAP
         ══════════════════════════════════════════════════ */}
      <MetaSprintRoadmap />

      {/* ══════════════════════════════════════════════════
          8. FLAGSHIP D2C TRANSFORMATION SHOWCASE (CASE STUDY)
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.caseSkeuoCard}>
              <div className={styles.caseAtmosphereGlow} />

              <div className={styles.caseTopBar}>
                <div className={styles.caseStatusBadge}>
                  <span className={styles.caseStatusPulse} />
                  <span>VERIFIED BHUBANESWAR D2C CASE STUDY</span>
                </div>
                <div className={styles.caseSectorPill}>
                  <span>Chandrasekharpur &amp; Pan-Odisha Dispatch</span>
                </div>
              </div>

              <div className={styles.caseSplitGrid}>
                <div className={styles.caseInfoCol}>
                  <h3 className={styles.caseClientTitle}>
                    Velour Handcrafted D2C Fashion
                  </h3>
                  <div className={styles.caseLocBadge}>
                    <span>📍 Chandrasekharpur, Bhubaneswar</span>
                  </div>

                  <p className={styles.caseExecSummary}>
                    Velour Handcrafted was struggling with boosted posts that yielded zero attributable revenue. Marketing Copilot engineered a high-velocity 9:16 vertical video Reels strategy coupled with instant WhatsApp checkout funnels and Meta Conversions API (CAPI) tracking.
                  </p>

                  <div className={styles.caseStrategyChips}>
                    <span className={styles.stratChip}>✓ 9:16 Vertical Video Reels</span>
                    <span className={styles.stratChip}>✓ Click-to-WhatsApp Direct Checkout</span>
                    <span className={styles.stratChip}>✓ Server-Side CAPI Event Attribution</span>
                  </div>

                  <div className={styles.caseQuoteCallout}>
                    <p className={styles.caseQuoteText}>
                      &quot;Marketing Copilot transformed our brand economics. We sold out our entire seasonal collection in 72 hours with sub-₹250 customer acquisition costs. Their Reels creative testing system is light years ahead of any agency in Odisha.&quot;
                    </p>
                    <div className={styles.caseQuoteAuthor}>
                      — Founder &amp; Creative Director, Velour Fashion
                    </div>
                  </div>

                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>

                <div className={styles.caseVisualCol}>
                  <div className={styles.caseVisualWindow}>
                    <Image
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                      alt="Velour Handcrafted D2C Fashion Bhubaneswar"
                      fill
                      sizes="(max-width: 768px) 100vw, 440px"
                      className={styles.caseWindowImg}
                    />
                    <div className={styles.caseWindowBadge}>
                      <span>4.8X Verified ROAS · Meta CAPI Validated</span>
                    </div>
                  </div>

                  <div className={styles.caseKpiRow}>
                    <div className={styles.caseKpiTile}>
                      <span className={styles.kpiNumber}>4.8X</span>
                      <span className={styles.kpiTitle}>Blended ROAS</span>
                      <span className={styles.kpiSub}>High Profitability</span>
                    </div>
                    <div className={styles.caseKpiTile}>
                      <span className={styles.kpiNumber}>₹42L</span>
                      <span className={styles.kpiTitle}>Gross Revenue</span>
                      <span className={styles.kpiSub}>In 30 Days</span>
                    </div>
                    <div className={styles.caseKpiTile}>
                      <span className={styles.kpiNumber}>72 Hrs</span>
                      <span className={styles.kpiTitle}>Collection Sold</span>
                      <span className={styles.kpiSub}>Sub-₹250 CAC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. BHUBANESWAR DEMOGRAPHIC & TARGETING RADAR
         ══════════════════════════════════════════════════ */}
      <MetaDemographicRadar />

      {/* ══════════════════════════════════════════════════
          10. AD TECH & ATTRIBUTION ARSENAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Attribution Stack</span>
            </div>
            <h3 className="display-md" style={{ color: '#0F172A', marginBottom: 10 }}>
              Ad Tech Arsenal &amp; <span className="accent-gradient">Data Infrastructure</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 640, margin: '0 auto' }}>
              Advanced server-to-server tracking toolchains deployed across all Meta campaigns.
            </p>

            <div className={styles.arsenalGrid}>
              {metaAdTechArsenal.map((t) => (
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
          11. TACTICAL META ADS FAQ VAULT
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Direct Answers</span>
            </div>
            <h3 className="display-md" style={{ color: '#0F172A', marginBottom: 10 }}>
              Frequently Asked <span className="accent-gradient">Meta Ads Questions</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 620, margin: '0 auto' }}>
              Everything Bhubaneswar founders need to know about Instagram Reels, Facebook Ads, WhatsApp funnels, and ROAS.
            </p>
          </ScrollReveal>

          <div className={styles.faqAccordion}>
            {metaFaqs.map((faq, idx) => {
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
          12. EXECUTIVE AD ACCOUNT AUDIT & CONVERSION STATION
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.conversionConsole}>
              <div className={styles.consoleLeft}>
                <span className={styles.consolePill}>SCHEDULE AD ACCOUNT AUDIT</span>
                <h3 className={styles.consoleTitle}>
                  Ready to Turn Social Feeds into a Predictable Revenue Engine?
                </h3>
                <p className={styles.consoleSub}>
                  Claim your free 30-minute forensic Meta ad account audit. We will analyze your past ROAS, creative fatigue rate, and WhatsApp conversion path across Bhubaneswar and Odisha.
                </p>
                <div className={styles.consoleContactRow}>
                  <a href="tel:+919437168434" className={styles.phoneHotline}>
                    <span>📞 Direct Line:</span>
                    <span>+91 94371 68434</span>
                  </a>
                  <span style={{ color: '#F472B6' }}>·</span>
                  <span style={{ fontSize: 13, color: '#FCE7F3' }}>HQ: Kharvela Nagar, Unit 3, Bhubaneswar</span>
                </div>
              </div>

              <div className={styles.consoleActionsCol}>
                <Link href="/contact" className={styles.consoleAuditBtn}>
                  <span>Claim Free Meta Account Audit</span>
                  <span>→</span>
                </Link>

                <a
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20audit%20my%20business%20Meta%20Ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.consoleWhatsAppBtn}
                >
                  <span>💬 WhatsApp Our Senior Media Buyer</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
