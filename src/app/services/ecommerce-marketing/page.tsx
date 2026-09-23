'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import EcommerceGrowthSimulator from './_components/EcommerceGrowthSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import EcommerceWorkstation from './_components/EcommerceWorkstation';
import EcommerceRoasCalculator from './_components/EcommerceRoasCalculator';
import EcommerceComparisonMatrix from './_components/EcommerceComparisonMatrix';
import EcommerceScaleRoadmap from './_components/EcommerceScaleRoadmap';

import styles from './ecommerce-page.module.css';

const ecommerceArsenal = [
  {
    name: 'Shopify Plus & Hydrogen',
    category: 'High-Converting Storefronts',
    desc: 'Sub-second mobile checkout load times, localized UPI 1-click buy buttons, and dynamic currency switching.',
    status: 'SUB-1S LOAD',
    icon: '🛍️',
  },
  {
    name: 'Meta Advantage+ Shopping (ASC)',
    category: 'AI-Powered Broad Acquisition',
    desc: 'Machine-learning catalog campaigns optimized for highest incremental conversion value and minimum CPA.',
    status: 'ASC OPTIMIZED',
    icon: '⚡',
  },
  {
    name: 'Google Performance Max & Merchant',
    category: 'High-Intent Search & Shopping',
    desc: 'Clean SKU feed syndication with automated negative keyword lists capturing active in-market buyers.',
    status: 'FEED SYNCED',
    icon: '🎯',
  },
  {
    name: 'Klaviyo Retention & VIP Flows',
    category: 'Lifecycle & LTV Acceleration',
    desc: 'Automated post-purchase repurchase triggers, replenishment reminders, and cart abandonment win-backs.',
    status: '38% LTV BOOT',
    icon: '✉️',
  },
  {
    name: 'WhatsApp RTO Defense Firewalls',
    category: 'Logistics Margin Protection',
    desc: 'Automated COD phone number verification via OTP and address correction before dispatching inventory.',
    status: '-55% RTO LEAK',
    icon: '🛡️',
  },
  {
    name: 'Looker Studio POAS Dashboard',
    category: 'Real Contribution Margin Telemetry',
    desc: 'Live profit-on-ad-spend tracking factoring product COGS, payment gateway fees, and shipping costs.',
    status: 'TRUE MARGIN',
    icon: '📊',
  },
];

const ecommerceFaqs = [
  {
    q: 'How do you reduce high RTO (Return to Origin) rates for Cash on Delivery (COD) orders?',
    a: 'We deploy automated WhatsApp OTP verification and AI address scrubbing before your warehouse dispatches an order. Customers confirm their delivery slot, and risky or incomplete addresses are flagged. This reduces COD return rates from 30%+ down to 10-14%, saving lakhs in reverse logistics.',
    takeaway: 'Address scrubbing and automated order verification stop logistics profit drain before dispatches occur.',
  },
  {
    q: 'What is the minimum monthly ad budget needed to scale profitably with your team?',
    a: 'We typically partner with D2C brands spending at least ₹50,000 to ₹1,00,000 per month on paid acquisition (Meta + Google). This provides sufficient data volume for rapid creative testing and algorithmic learning.',
    takeaway: 'Adequate ad spend velocity allows ad platform AI algorithms to identify high-value repeat buyers quickly.',
  },
  {
    q: 'How do you overcome the iOS 14.5 and third-party cookie tracking loss?',
    a: 'We implement Meta Conversions API (CAPI) and Google Enhanced Conversions directly through server-side GTM containers. This bypasses browser ad-blockers and privacy drops, maintaining a 95%+ event match quality score.',
    takeaway: 'Server-side attribution gives ad algorithms true transaction data to find higher-spending purchasers.',
  },
  {
    q: 'Can you help increase our store’s Average Order Value (AOV)?',
    a: 'Yes! We redesign your cart drawer with 1-click tiered volume discounts ("Buy 2 Get 10% Off"), intelligent product bundles, and post-purchase thank-you page upsells that increase basket size by 24% to 38% without inflating CAC.',
    takeaway: 'Elevating AOV allows you to bid more aggressively than competitors while remaining strictly profitable.',
  },
  {
    q: 'Do you work with local Bhubaneswar and Odisha artisanal & manufacturing brands?',
    a: 'Extensively. We have helped Odisha handloom brands like Ektraa Sambalpuri Sarees, organic food producers, and regional apparel manufacturers scale into nationwide multi-crore D2C powerhouses with nationwide delivery.',
    takeaway: 'Deep regional manufacturing authenticity paired with global performance marketing creates unbeatable brand moat.',
  },
];

export default function EcommerceMarketingPage() {
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
                <span>#1 E-Commerce &amp; D2C Growth Agency in Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Scale Your D2C Brand Beyond ₹50L/Month With{' '}
                <span className="accent-gradient">High Blended ROAS</span>
              </h1>

              <p className={styles.heroSub}>
                No vanity screenshots. We deploy high-converting Meta Advantage+ shopping funnels, Google Performance Max campaigns, CAPI server-side tracking, and automated WhatsApp RTO reduction for India’s fastest-growing consumer brands.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Book a D2C Growth Audit" size="lg" />
                <a href="#growth-simulator" className={styles.heroSecondaryBtn}>
                  <span>Explore Growth Simulator &amp; ROAS</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>EK</span>
                  <span className={styles.trustAvatar}>ZS</span>
                  <span className={styles.trustAvatar}>SP</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+45</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Trusted by 45+ D2C Brands Across India &amp; Odisha
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>₹4.2 Cr+</span>
                <span className={styles.tLabel}>Monthly D2C GMV</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>4.8x</span>
                <span className={styles.tLabel}>Avg Blended ROAS</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>-55%</span>
                <span className={styles.tLabel}>COD RTO Reduction</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>98%</span>
                <span className={styles.tLabel}>CAPI Match Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. INTERACTIVE ECOMMERCE GROWTH SIMULATOR
         ══════════════════════════════════════════════════ */}
      <EcommerceGrowthSimulator />

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. ARCHITECTURE WORKSTATION
         ══════════════════════════════════════════════════ */}
      <EcommerceWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE ROAS & PROFIT CALCULATOR
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              UNIT ECONOMICS &amp; PROFIT ENGINE
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Calculate Your True Net Profit &amp; RTO Savings
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Adjust your monthly ad budget, current ROAS, and return rate to simulate how our creative testing and automated order verification firewalls elevate net contribution margin.
            </p>
          </div>
          <EcommerceRoasCalculator />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. THE E-COMMERCE STANDARD (COMPARISON MATRIX)
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              THE MARKETING COPILOT DIFFERENCE
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Traditional Agencies vs. Our D2C Growth Engine
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Why Indian brands scaling beyond ₹10L/month fire generic digital agencies and switch to full-funnel unit economics engineering.
            </p>
          </div>
          <EcommerceComparisonMatrix />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. 30-DAY D2C SCALE ROADMAP
         ══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              EXECUTION BLUEPRINT
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              The 30-Day D2C Scale Roadmap
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              A systematic, phased sprint to eliminate attribution blind spots, launch high-ROAS creative angles, and build resilient recurring revenue.
            </p>
          </div>
          <EcommerceScaleRoadmap />
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
                  <span>Verified D2C Case Study · Artisanal Handloom</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Ektraa Handloom &amp; Ethnic Wear
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Janpath Road Corridor &amp; Bhubaneswar Hub
                </div>

                <p className={styles.editorialDesc}>
                  Ektraa possessed exquisite authentic Sambalpuri handloom collections but was held back by a 31% COD return rate and unpredictable ad performance. Marketing Copilot implemented server-side CAPI tracking, automated WhatsApp order confirmations, and UGC unboxing videos that scaled orders nationwide.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Marketing Copilot restructured our entire unit economics. From server-side tracking to automated WhatsApp order verification, our Sambalpuri handloom collections are now selling across Mumbai, Bangalore, and Delhi at peak profitability.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Founder, Ektraa Handloom Bhubaneswar
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="/images/Ekatraa.jpg"
                    alt="Ektraa Handloom Brand Bhubaneswar"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>₹38.5L Monthly GMV · Pan-India Reach</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>4.6x</div>
                    <div className={styles.kpiSub}>Blended ROAS</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>11.8%</div>
                    <div className={styles.kpiSub}>COD RTO (Down from 31%)</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>+240%</div>
                    <div className={styles.kpiSub}>Repeat Customer Rate</div>
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
              OUR E-COMMERCE STACK
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', lineHeight: 1.2 }}>
              Battle-Tested E-Commerce Technology
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              We partner with industry-leading e-commerce infrastructure providers to ensure high conversion rates and bulletproof attribution.
            </p>
          </div>

          <div className={styles.arsenalGrid}>
            {ecommerceArsenal.map((spec, idx) => (
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
              Everything You Need to Know About D2C Scaling
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>
              Clear answers on ROAS expectations, logistics protection, and campaign management.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {ecommerceFaqs.map((faq, index) => {
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
              <span className={styles.termPill}>CONFIDENTIAL D2C PERFORMANCE AUDIT</span>
              <h2 className={styles.termTitle}>
                Ready to Scale Your D2C Brand Profitably?
              </h2>
              <p className={styles.termSub}>
                Get a comprehensive review of your store’s unit economics, ad creative fatigue, and RTO leaks. Our growth directors will deliver an actionable 30-day scaling plan tailored for your brand.
              </p>
              <div className={styles.termContact}>
                <span>Direct Line:</span>
                <a href="tel:+919876543210" className={styles.termPhone}>
                  +91 98765 43210
                </a>
                <span>·</span>
                <span>Bhubaneswar HQ (Patia Corridor)</span>
              </div>
            </div>

            <div className={styles.termActions}>
              <a href="/contact" className={styles.termAuditBtn}>
                <span>Claim Your Free D2C Audit</span>
                <span>→</span>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Marketing%20Copilot,%20I%20would%20like%20to%20audit%20our%20D2C%20store%20unit%20economics."
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
