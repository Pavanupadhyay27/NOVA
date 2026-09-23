'use strict';

import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './amazon-marketing-page.module.css';

import AmazonPpcProfitSimulator from './_components/AmazonPpcProfitSimulator';
import AmazonWorkstation from './_components/AmazonWorkstation';
import AmazonPpcCalculator from './_components/AmazonPpcCalculator';
import AmazonComparisonMatrix from './_components/AmazonComparisonMatrix';
import AmazonSprintRoadmap from './_components/AmazonSprintRoadmap';

export const metadata: Metadata = {
  title: 'Amazon Marketing & PPC Agency in Bhubaneswar | ACoS Reduction & A+ Content',
  description: 'Scale your Amazon India brand with high-precision Sponsored Products PPC, luxury A+ Content, Brand Stores, and automated Buy Box defense. Reach Best Seller ranking.',
  keywords: [
    'Amazon marketing Bhubaneswar',
    'Amazon PPC agency Odisha',
    'Amazon A+ Content design',
    'Amazon Brand Registry India',
    'Seller Central account management',
    'Amazon TACoS optimization'
  ]
};

const FAQ_ITEMS = [
  {
    q: 'How quickly can Copilot reduce our Amazon ACoS without killing sales velocity?',
    a: 'Within the first 14 days, our negative keyword firewalls eliminate wasteful broad search terms (typically 25-40% of current ad spend). We redirect that saved capital into top-converting exact-match queries with top-of-search placement multipliers, lowering ACoS while preserving or increasing sales velocity.',
    takeaway: 'Key Takeaway: Typical 18-35% ACoS drop achieved within the first 30 days.'
  },
  {
    q: 'What is the difference between ACoS and TACoS, and why should I care?',
    a: 'ACoS (Advertising Cost of Sales) only measures paid ad efficiency. TACoS (Total Advertising Cost of Sales) measures ad spend against your total revenue (paid + organic). A successful Amazon strategy uses targeted PPC to propel organic ranking velocity, lowering TACoS to under 8-10% so your brand runs profitably on organic flywheel sales.',
    takeaway: 'Key Takeaway: We optimize for brand enterprise equity (TACoS), not just vanity ad metrics.'
  },
  {
    q: 'Do you design and write the A+ Content and Amazon Brand Storefront?',
    a: 'Yes. Our creative team handles photography curation, infographic typography, comparative ingredient charts, and modular Brand Store architecture that conforms strictly to Amazon Brand Registry guidelines.',
    takeaway: 'Key Takeaway: Turnkey, conversion-rate-optimized visual assets designed in-house.'
  },
  {
    q: 'How do you protect our listings from unauthorized resellers and hijackers?',
    a: 'We enroll your brand into Amazon Brand Registry, implement Project Zero / Transparency QR codes where applicable, and run automated 24/7 listing scrapers. Any unauthorized piggybacker is issued formal cease-and-desist notices and escalated to Amazon Seller Performance within hours.',
    takeaway: 'Key Takeaway: 99%+ Buy Box win rate and protected manufacturer pricing power.'
  },
  {
    q: 'Can you help with FBA restock limits and IPI inventory score health?',
    a: 'Yes. We build predictive 60-day velocity models that sync with your manufacturing timelines, preventing catastrophic stock-outs that cause permanent Best Seller rank decay while keeping your IPI score securely above 550.',
    takeaway: 'Key Takeaway: Bulletproof supply-chain synchronization with Amazon FBA warehouses.'
  }
];

export default function AmazonMarketingPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
         SECTION 1: HERO
      ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <div className={styles.heroEyebrowPill}>
              <div className={styles.emeraldPulseDot} />
              Amazon Brand Acceleration &middot; Bhubaneswar
            </div>
            <h1 className={styles.heroTitle}>
              Scale Your Amazon Brand to the #1 Best Seller Category Rank.
            </h1>
            <p className={styles.heroSub}>
              We architect high-precision Sponsored Ads, bespoke A+ brand storytelling, and algorithmic Buy Box defense
              that slashes ACoS bleed and unleashes compounding organic sales velocity.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryCta}>
                Accelerate Amazon Sales
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="#simulator" className={styles.secondaryCta}>
                Simulate PPC Margins &darr;
              </a>
            </div>

            <div className={styles.heroTrustBadges}>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Amazon Ads Verified Partner
              </div>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Sub-20% ACoS Guardrail
              </div>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                99%+ Buy Box Win Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 2: TELEMETRY STATS RIBBON
      ══════════════════════════════════════════════════ */}
      <section className={styles.telemetryRibbon}>
        <div className="container">
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryCard}>
              <div className={styles.telemetryVal}>18.4%</div>
              <div className={styles.telemetryLabel}>Average Portfolio ACoS</div>
            </div>
            <div className={styles.telemetryCard}>
              <div className={styles.telemetryVal}>99.4%</div>
              <div className={styles.telemetryLabel}>Buy Box Ownership</div>
            </div>
            <div className={styles.telemetryCard}>
              <div className={styles.telemetryVal}>+28%</div>
              <div className={styles.telemetryLabel}>A+ Content Conversion Lift</div>
            </div>
            <div className={styles.telemetryCard}>
              <div className={styles.telemetryVal}>₹14 Cr+</div>
              <div className={styles.telemetryLabel}>Amazon GMV Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 3: INTERACTIVE PPC PROFIT SIMULATOR
      ══════════════════════════════════════════════════ */}
      <section id="simulator" className="container">
        <AmazonPpcProfitSimulator />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 4: WORKSTATION / 4 ENGINES
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AmazonWorkstation />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 5: PPC & MARGIN CALCULATOR
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AmazonPpcCalculator />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 6: COMPARISON MATRIX
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AmazonComparisonMatrix />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 7: 30-DAY SPRINT ROADMAP
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AmazonSprintRoadmap />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 8: EDITORIAL CLIENT CASE STUDY
      ══════════════════════════════════════════════════ */}
      <section className={styles.caseStudySection}>
        <div className="container">
          <div className={styles.caseStudyCard}>
            <div className={styles.caseStudyMedia}>
              <Image
                src="/images/heed_1.png"
                alt="Heed Organics Ayurvedic product on Amazon India"
                width={800}
                height={600}
              />
              <div className={styles.clientBadgeOverlay}>
                Client Spotlight &middot; Ayurvedic Wellness
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.caseKicker}>D2C Brand Acceleration &middot; Amazon India</div>
              <h3 className={styles.caseTitle}>
                How Heed Organics Reached #1 Category Best Seller While Cutting ACoS by 44%
              </h3>
              <p className={styles.caseSummary}>
                Heed Organics had high-quality organic formulations but suffered from 42% ACoS bleed under an
                unsegmented auto-campaign agency. Copilot restructured their catalog into single-ASIN exact match silos,
                designed high-converting editorial A+ Content with lab certifications, and unlocked #1 Best Seller status.
              </p>

              <div className={styles.metricPillsRow}>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>16.2%</span>
                  <span className={styles.metricPillDesc}>Optimized ACoS</span>
                </div>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>#1 Rank</span>
                  <span className={styles.metricPillDesc}>Best Seller Badge</span>
                </div>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>+215%</span>
                  <span className={styles.metricPillDesc}>Monthly GMV Lift</span>
                </div>
              </div>

              <div className={styles.caseQuote}>
                &ldquo;Copilot completely transformed our Amazon presence. The new A+ design looks like a luxury global brand, and their negative keyword dayparting slashed our ad spend in half while tripling our monthly sales.&rdquo;
                <span className={styles.quoteAuthor}>— Pratik S., Founder, Heed Organics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 9: TECH ARSENAL
      ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 3rem' }}>
            <div style={{ color: '#0B2093', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Amazon Intelligence Stack
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>
              Powered by Enterprise E-Commerce Data Engines
            </h2>
          </div>

          <div className={styles.arsenalGrid}>
            <div className={styles.arsenalCard}>
              <div className={styles.arsenalIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                </svg>
              </div>
              <h4>Helium 10 Cerebro</h4>
              <p>Deep competitor reverse-ASIN indexing extracting high-velocity converting search queries.</p>
            </div>

            <div className={styles.arsenalCard}>
              <div className={styles.arsenalIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h4>Jungle Scout Cobalt</h4>
              <p>Category market-share tracking and algorithmic price elasticity modeling for Indian sellers.</p>
            </div>

            <div className={styles.arsenalCard}>
              <div className={styles.arsenalIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                </svg>
              </div>
              <h4>Amazon Ads API</h4>
              <p>Automated hourly dayparting bid adjustments syncing directly with Seller Central.</p>
            </div>

            <div className={styles.arsenalCard}>
              <div className={styles.arsenalIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/>
                </svg>
              </div>
              <h4>Keepa Price Tracker</h4>
              <p>Real-time Buy Box rotation surveillance and competitor stock-out exploitation tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 10: FAQ SECTION
      ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <div className={styles.faqKicker}>Clear Explanations</div>
            <h2 className={styles.faqTitle}>Frequently Asked Questions About Amazon Growth</h2>
          </div>

          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{item.q}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{item.a}</p>
                  <div className={styles.faqTakeaway}>{item.takeaway}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 11 & 12: EXECUTIVE CONVERSION TERMINAL
      ══════════════════════════════════════════════════ */}
      <section id="audit-form" className={styles.terminalSection}>
        <div className="container">
          <div className={styles.terminalCard}>
            <div className={styles.terminalKicker}>Stop Bleeding Ad Budget on Amazon</div>
            <h2 className={styles.terminalTitle}>
              Ready to Slash ACoS and Dominate the Amazon Buy Box?
            </h2>
            <p className={styles.terminalDesc}>
              Request an executive Amazon account audit. We will inspect your search term report for wasted spend,
              evaluate your A+ content conversion readiness, and project your 90-day Best Seller path.
            </p>
            <div className={styles.terminalCtaGroup}>
              <Link href="/contact" className={styles.terminalPrimaryBtn}>
                Request Seller Central Audit &rarr;
              </Link>
              <Link href="/services" className={styles.terminalSecondaryBtn}>
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
