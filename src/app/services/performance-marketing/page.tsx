'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import PerformanceOmnichannelSimulator from './_components/PerformanceOmnichannelSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import PerformanceWorkstation from './_components/PerformanceWorkstation';
import PerformanceRoiCalculator from './_components/PerformanceRoiCalculator';
import PerformanceComparisonMatrix from './_components/PerformanceComparisonMatrix';
import PerformanceScaleRoadmap from './_components/PerformanceScaleRoadmap';

import styles from './performance-marketing-page.module.css';

const performanceArsenal = [
  {
    name: 'Meta Advantage+ AI Engine',
    category: 'Full-Funnel Demand Creation',
    desc: 'Algorithmic dynamic creative testing serving tailored angles across Facebook and Instagram feeds.',
    status: 'AI DRIVEN',
    icon: '⚡',
  },
  {
    name: 'Google PMax & Search Capture',
    category: 'High-Intent Harvest',
    desc: 'Capturing active searchers who have seen your social awareness ads and are ready to buy.',
    status: 'EXACT INTENT',
    icon: '🎯',
  },
  {
    name: 'Server-Side Cloud Attribution',
    category: 'BigQuery Data Pipeline',
    desc: 'Unified sGTM and BigQuery pipeline reconciliating Meta CAPI and Google signals with zero data drops.',
    status: 'CLOUD ATTRIB',
    icon: '🛡️',
  },
  {
    name: 'Klaviyo & WhatsApp Lifecycle',
    category: 'Post-Acquisition Retention',
    desc: 'Automated 1-to-1 customer nurture sequences driving repeat purchases and multiplying customer LTV.',
    status: 'RETENTION 38%',
    icon: '✉️',
  },
  {
    name: 'Next.js Edge CRO Funnels',
    category: 'Sub-Second Conversion Stacks',
    desc: 'Dedicated mobile landing pages loading under 800ms with direct WhatsApp chat closing flows.',
    status: 'SUB-800MS',
    icon: '🚀',
  },
  {
    name: 'Looker Studio Executive Cockpit',
    category: 'Real Contribution Margin Telemetry',
    desc: 'Live profit-on-ad-spend (POAS) and blended MER telemetry updated 24/7 without platform bias.',
    status: 'LIVE MER',
    icon: '📊',
  },
];

const performanceFaqs = [
  {
    q: 'What is the difference between single-channel ads and Performance Marketing?',
    a: 'Single-channel agencies run Facebook or Google in isolated silos with separate budgets and zero shared intelligence. Performance Marketing orchestrates your entire customer journey: Meta creates demand, Google captures search intent, and automated WhatsApp funnels close the sale, resulting in 40%+ lower customer acquisition costs.',
    takeaway: 'Cross-channel orchestration stops platform budget competition and lowers blended CAC.',
  },
  {
    q: 'What is Blended MER and why is it superior to platform-reported ROAS?',
    a: 'Platform-reported ROAS is often misleading because Meta and Google both claim credit for the same customer transaction. Blended Marketing Efficiency Ratio (MER) divides your Total Gross Revenue by your Total Ad Spend across all channels, giving you the only true metric of real business profitability.',
    takeaway: 'Blended MER eliminates attribution double-counting and guides safe, profitable ad budget scaling.',
  },
  {
    q: 'How much marketing budget should our Odisha business commit to scale?',
    a: 'We generally partner with companies spending at least ₹50,000 to ₹1,50,000 per month across paid channels. This ensures enough data volume to run rapid weekly creative tests, train conversion algorithms, and establish a predictable pipeline.',
    takeaway: 'Consistent weekly spend allows machine learning algorithms to locate high-LTV repeat buyers.',
  },
  {
    q: 'How frequently do you rotate ad creatives to prevent audience fatigue?',
    a: 'We operate weekly 7-day creative sprints. Our team scripts, films, and edits 6 to 10 new vertical video hooks, carousels, and landing page angles every month so your cost per click never spikes from ad fatigue.',
    takeaway: 'Continuous creative rotation keeps audience interest fresh and maintains low acquisition costs.',
  },
  {
    q: 'Can performance marketing generate high-ticket B2B and industrial leads in Odisha?',
    a: 'Yes! We have scaled industrial solar manufacturers, real estate developers, healthcare networks, and B2B corporate suppliers across Bhubaneswar and Cuttack by pairing high-authority video explainers with verified WhatsApp lead routing.',
    takeaway: 'High-ticket B2B buyers respond strongly to transparent video authority and frictionless WhatsApp closing.',
  },
];

export default function PerformanceMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
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
                <span>#1 Performance Marketing &amp; Full-Funnel Scaling Agency in Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Scale Revenue Predictably With{' '}
                <span className="accent-gradient">Omnichannel Performance</span>
              </h1>

              <p className={styles.heroSub}>
                Stop relying on single-channel ad silos. We orchestrate Meta Advantage+, Google Performance Max, server-side attribution, and high-speed CRO landing pages to lower your blended CAC and drive profitable pipeline across Odisha.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Request Performance Audit" size="lg" />
                <a href="#omnichannel-simulator" className={styles.heroSecondaryBtn}>
                  <span>Explore Omnichannel Simulator</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>KS</span>
                  <span className={styles.trustAvatar}>ED</span>
                  <span className={styles.trustAvatar}>ZS</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+55</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Managing Over ₹1.8 Cr+ Quarterly Ad Capital Across Odisha
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>5.4X</span>
                <span className={styles.tLabel}>Blended MER</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>-42%</span>
                <span className={styles.tLabel}>Blended CAC Reduction</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>98%</span>
                <span className={styles.tLabel}>Cloud Attribution Match</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>7 Days</span>
                <span className={styles.tLabel}>Creative Sprint Cadence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. INTERACTIVE OMNICHANNEL SIMULATOR
         ══════════════════════════════════════════════════ */}
      <PerformanceOmnichannelSimulator />

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. ARCHITECTURE WORKSTATION
         ══════════════════════════════════════════════════ */}
      <PerformanceWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE ROI & MER CALCULATOR
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              PROFIT &amp; CAC MODELING
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Calculate Your Full-Funnel Growth Yield
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Adjust your monthly multi-channel ad budget, customer acquisition cost, and average contract size to simulate blended MER and net profit expansion.
            </p>
          </div>
          <PerformanceRoiCalculator />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. THE PERFORMANCE STANDARD (COMPARISON MATRIX)
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              THE MARKETING COPILOT DIFFERENCE
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Siloed Agencies vs. Our Performance Engine
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Why leading high-growth brands in Odisha transition away from disconnected freelancer retainers to our unified growth architecture.
            </p>
          </div>
          <PerformanceComparisonMatrix />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. 30-DAY PERFORMANCE SCALE ROADMAP
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              EXECUTION ROADMAP
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              The 30-Day Multi-Channel Scale Sprint
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              A battle-tested phased sprint to eliminate attribution blind spots, launch high-ROAS creative angles, and scale customer pipeline.
            </p>
          </div>
          <PerformanceScaleRoadmap />
        </div>
      </section>

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
                  <span>Verified Performance Case Study · Industrial &amp; Clean Energy</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Kalinga Solar &amp; Renewable Energy
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Mancheswar Industrial Estate, Bhubaneswar &amp; Cuttack
                </div>

                <p className={styles.editorialDesc}>
                  Kalinga Solar was struggling with expensive B2B lead generation using disconnected LinkedIn and Google search campaigns. Marketing Copilot orchestrated Meta video authority explainers with Google search capture and automated WhatsApp brochure qualification, generating ₹1.4 Cr in commercial pipeline in 60 days.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Marketing Copilot transformed our digital marketing from a cost center into our largest source of high-margin factory rooftop solar contracts across Odisha. Our sales team closed 14 commercial projects in the last quarter alone.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Chief Commercial Officer, Kalinga Solar Odisha
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="/images/services_performance.jpg"
                    alt="Kalinga Solar Commercial Installation"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>₹1.4 Cr Commercial Pipeline · 60 Days</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>5.4X</div>
                    <div className={styles.kpiSub}>Blended MER</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>-44%</div>
                    <div className={styles.kpiSub}>Blended CAC Reduction</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>14</div>
                    <div className={styles.kpiSub}>Signed Industrial Contracts</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. ENTERPRISE PLATFORMS & STACK ARSENAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              OUR PERFORMANCE STACK
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Enterprise Performance Growth Infrastructure
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              We partner with industry-leading marketing technology providers to guarantee reliable tracking and rapid scaling.
            </p>
          </div>

          <div className={styles.arsenalGrid}>
            {performanceArsenal.map((spec, idx) => (
              <div key={idx} className={styles.specCard}>
                <div className={styles.specCardHeader}>
                  <div className={styles.specIconBox}>{spec.icon}</div>
                  <span className={styles.specStatus}>{spec.status}</span>
                </div>
                <h4 className={styles.specTitle}>{spec.name}</h4>
                <div className={styles.specCategory}>{spec.category}</div>
                <p className={styles.specDesc}>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. MINIMALIST HAIRLINE FAQ LIST
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Everything You Need to Know About Performance Marketing
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Clear answers on attribution modeling, multi-channel budgets, and scaling velocity.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {performanceFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={styles.faqRow}>
                  <button
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqPane}>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                      <div className={styles.faqTakeaway}>
                        <span>💡</span>
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
          11. EXECUTIVE BOTTOM CONVERSION TERMINAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection} id="executive-terminal">
        <div className="container">
          <div className={styles.executiveTerminal}>
            <div className={styles.termGlow} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span className={styles.termPill}>CONFIDENTIAL FULL-FUNNEL PERFORMANCE AUDIT</span>
              <h2 className={styles.termTitle}>
                Ready to Scale Your Acquisition Engine?
              </h2>
              <p className={styles.termSub}>
                Get an objective audit of your cross-channel CAC, ad creative fatigue, and attribution blind spots. Our growth directors will build a customized 30-day scaling model for your business.
              </p>
              <div className={styles.termContact}>
                <span>Direct Line:</span>
                <a href="tel:+919876543210" className={styles.termPhone}>
                  +91 98765 43210
                </a>
                <span>·</span>
                <span>Bhubaneswar HQ (Patia Technology Corridor)</span>
              </div>
            </div>

            <div className={styles.termActions}>
              <a href="/contact" className={styles.termAuditBtn}>
                <span>Claim Your Performance Audit</span>
                <span>→</span>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Marketing%20Copilot,%20I%20want%20to%20audit%20our%20performance%20marketing%20funnels."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.termWhatsAppBtn}
              >
                <span>💬 WhatsApp Growth Director</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
