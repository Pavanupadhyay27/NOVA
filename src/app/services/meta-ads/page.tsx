'use client';

import { useState } from 'react';
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
    category: 'Neural Distribution',
    desc: 'Algorithmic machine learning matching dynamic creative angles to high-probability buyers across Instagram Explore and Reels.',
    status: 'ALGORITHMIC',
    icon: '🤖',
  },
  {
    name: 'WhatsApp Business API',
    category: 'Click-to-Chat Funnels',
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
    category: 'Omnichannel Tracking',
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
    a: 'Both channels serve complementary functions. Google Ads captures active search intent from people looking for your service right now. Meta Ads creates new demand and builds massive brand authority by introducing your visual story into people’s daily Instagram and Facebook feeds.',
    takeaway: 'Google captures active intent; Meta creates new demand and drives direct WhatsApp sales.',
  },
  {
    q: 'Why are Click-to-WhatsApp ads so effective for Odisha businesses?',
    a: 'Odisha consumers strongly prefer instant, human communication over filling out tedious web forms. Click-to-WhatsApp ads eliminate friction, allowing your sales team to answer questions, share photos, and close transactions in real time.',
    takeaway: 'WhatsApp ads eliminate form friction and achieve 28%+ lead-to-conversation conversion rates.',
  },
  {
    q: 'How does Marketing Copilot prevent ad fatigue from increasing our costs?',
    a: 'When audiences in Bhubaneswar see the same ad creative multiple times, cost per click increases dramatically. We run 7-day creative sprints, producing 6 to 8 new vertical video cuts, static carousels, and fresh psychological hooks weekly.',
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
                <span className={styles.bluePulseDot} />
                <span>Meta Verified Performance · Bhubaneswar &amp; Odisha</span>
              </div>

              <h1 className={styles.heroTitle}>
                Stop the Scroll. Start the Sale.{' '}
                <span className="accent-gradient">In Bhubaneswar.</span>
              </h1>

              <p className={styles.heroSub}>
                From thumb-stopping 9:16 Instagram Reels to Click-to-WhatsApp direct closing funnels and Server-Side CAPI tracking, we turn social attention into predictable customer revenue across Odisha.
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
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+45</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  4.8X Avg ROAS across 45+ Bhubaneswar &amp; Odisha Brands
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>4.8X</span>
                <span className={styles.tLabel}>Average ROAS</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>+340%</span>
                <span className={styles.tLabel}>Qualified Leads</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>₹14</span>
                <span className={styles.tLabel}>Lowest CPL</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>72 Hrs</span>
                <span className={styles.tLabel}>Creative Sprint</span>
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
          8. EDITORIAL CASE STUDY SHOWCASE
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.editorialContainer}>
              <div className={styles.editorialContent}>
                <div className={styles.editorialBadge}>
                  <span className={styles.badgeDot} />
                  <span>Verified D2C Case Study · Chandrasekharpur</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Velour Handcrafted D2C Fashion
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Chandrasekharpur, Bhubaneswar &amp; Pan-Odisha Dispatch
                </div>

                <p className={styles.editorialDesc}>
                  Velour was stuck with boosted posts yielding zero attributable revenue. Marketing Copilot engineered a high-velocity 9:16 vertical Reels system with WhatsApp checkout funnels and Server-Side CAPI tracking.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Marketing Copilot transformed our brand economics. We sold out our entire seasonal collection in 72 hours with sub-₹250 customer acquisition costs.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Founder &amp; Creative Director, Velour Fashion
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                    alt="Velour Handcrafted D2C Fashion Bhubaneswar"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>4.8X Verified ROAS · Meta CAPI Validated</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiNum}>4.8X</span>
                    <span className={styles.kpiLbl}>Blended ROAS</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiNum}>₹42L</span>
                    <span className={styles.kpiLbl}>Gross Revenue</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiNum}>72 Hrs</span>
                    <span className={styles.kpiLbl}>Collection Sold</span>
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
          10. ARCHITECTURAL AD TECH ARSENAL
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
            <p className="body-md" style={{ color: '#64748B', maxWidth: 600, margin: '0 auto' }}>
              Advanced server-to-server tracking toolchains deployed across all Meta campaigns.
            </p>

            <div className={styles.arsenalSpecGrid}>
              {metaAdTechArsenal.map((t) => (
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
              Frequently Asked <span className="accent-gradient">Meta Ads Questions</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 580, margin: '0 auto' }}>
              Everything Bhubaneswar founders need to know about Instagram Reels, Facebook Ads, WhatsApp funnels, and ROAS.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {metaFaqs.map((faq, idx) => {
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
          12. EXECUTIVE AD ACCOUNT AUDIT TERMINAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.executiveTerminal}>
              <div className={styles.termGlow} />
              <div>
                <span className={styles.termPill}>SCHEDULE AD ACCOUNT AUDIT</span>
                <h3 className={styles.termTitle}>
                  Ready to Turn Social Feeds into a Predictable Revenue Engine?
                </h3>
                <p className={styles.termSub}>
                  Claim your free 30-minute forensic Meta ad account audit. We will analyze your past ROAS, creative fatigue rate, and WhatsApp conversion path across Bhubaneswar and Odisha.
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
                  <span>Claim Free Meta Account Audit</span>
                  <span>→</span>
                </Link>

                <a
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20audit%20my%20business%20Meta%20Ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.termWhatsAppBtn}
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
