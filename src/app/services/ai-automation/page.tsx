'use strict';

import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ai-automation-page.module.css';

import AiAgentWorkflowSimulator from './_components/AiAgentWorkflowSimulator';
import AiAutomationWorkstation from './_components/AiAutomationWorkstation';
import AiSavingsCalculator from './_components/AiSavingsCalculator';
import AiAutomationComparisonMatrix from './_components/AiAutomationComparisonMatrix';
import AiAutomationRoadmap from './_components/AiAutomationRoadmap';

export const metadata: Metadata = {
  title: 'AI & Workflow Automation Services in Bhubaneswar | WhatsApp Bots & CRM Pipelines',
  description: 'Deploy enterprise multi-agent AI systems, official WhatsApp Cloud API conversational bots, and zero-latency CRM pipelines. Turn inbound inquiries into booked revenue in < 2 seconds.',
  keywords: [
    'AI automation Bhubaneswar',
    'WhatsApp Cloud API automation',
    'CRM workflow integration Odisha',
    'Conversational AI chatbots',
    'Lead qualification bots India',
    'Voice AI phone agents'
  ]
};

const FAQ_ITEMS = [
  {
    q: 'Will AI conversational bots sound robotic or alienate our high-ticket clients?',
    a: 'Not at all. We build on custom-tuned LLMs infused with your distinct brand personality, colloquial nuances, and regional language understanding (Odia, Hindi, and Indian English). The bots speak with executive polish and naturally know when to transfer complex negotiations to your senior sales team.',
    takeaway: 'Key Takeaway: Indistinguishable from a polite, hyper-knowledgeable human concierge.'
  },
  {
    q: 'Can the AI bot update our CRM (HubSpot, Zoho, or Google Sheets) automatically?',
    a: 'Yes. Every conversation is parsed for lead parameters (budget, timeframe, decision maker contact, specific product interest) and automatically dispatched via webhooks directly to your CRM, notifying the assigned salesperson in under 2 seconds.',
    takeaway: 'Key Takeaway: 100% elimination of manual data entry and zero missed leads.'
  },
  {
    q: 'Is there a risk of our WhatsApp number getting banned by Meta?',
    a: 'Zero risk. We only deploy via the Official Meta WhatsApp Cloud API (Business Solution Provider framework) with green-tick badge verification. We never use unofficial scrapers or illegal automation scripts.',
    takeaway: 'Key Takeaway: Compliant, secure, and officially authorized by Meta.'
  },
  {
    q: 'How long does it take to train and launch our custom AI automation system?',
    a: 'Our structured 4-phase sprint takes exactly 30 days. Within week 1 we ingest your knowledge base, by week 2 the agent is hooked to webhooks, week 3 is adversarial stress testing, and week 4 is live production rollout.',
    takeaway: 'Key Takeaway: Live, generating qualified pipeline within 30 calendar days.'
  },
  {
    q: 'What happens if a customer asks a question outside the bot’s knowledge base?',
    a: 'Our strict RAG (Retrieval-Augmented Generation) guardrails prevent hallucinations. If a query falls outside verified company documents, the bot gracefully admits it and immediately initiates a warm handoff to a live specialist.',
    takeaway: 'Key Takeaway: Zero hallucinations and safe enterprise brand protection.'
  }
];

export default function AiAutomationPage() {
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
              Enterprise AI &amp; Workflow Infrastructure &middot; Bhubaneswar
            </div>
            <h1 className={styles.heroTitle}>
              Turn Inbound Inquiries Into Booked Revenue in &lt; 2 Seconds.
            </h1>
            <p className={styles.heroSub}>
              We architect autonomous WhatsApp conversational agents, self-healing CRM pipelines, and voice dispatchers
              that qualify leads 24/7, eliminate sales friction, and 3.8x your close rates.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryCta}>
                Deploy AI Automation Stack
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="#simulator" className={styles.secondaryCta}>
                Test Live Simulator &darr;
              </a>
            </div>

            <div className={styles.heroTrustBadges}>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Meta Cloud API Partner
              </div>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Zero Hallucination Guarantee
              </div>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                HubSpot &amp; Zoho Certified
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
              <div className={styles.telemetryVal}>&lt; 1.8s</div>
              <div className={styles.telemetryLabel}>Avg. First Response Time</div>
            </div>
            <div className={styles.telemetryCard}>
              <div className={styles.telemetryVal}>3.8x</div>
              <div className={styles.telemetryLabel}>Lead-to-Booking Lift</div>
            </div>
            <div className={styles.telemetryCard}>
              <div className={styles.telemetryVal}>100%</div>
              <div className={styles.telemetryLabel}>24/7/365 After-Hours Coverage</div>
            </div>
            <div className={styles.telemetryCard}>
              <div className={styles.telemetryVal}>240+ hrs</div>
              <div className={styles.telemetryLabel}>Human Rep Time Saved / Mo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 3: INTERACTIVE AGENT WORKFLOW SIMULATOR
      ══════════════════════════════════════════════════ */}
      <section id="simulator" className="container">
        <AiAgentWorkflowSimulator />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 4: WORKSTATION / 4 AUTOMATION ENGINES
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AiAutomationWorkstation />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 5: SAVINGS & REVENUE CALCULATOR
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AiSavingsCalculator />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 6: COMPARISON MATRIX
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AiAutomationComparisonMatrix />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 7: 30-DAY IMPLEMENTATION ROADMAP
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AiAutomationRoadmap />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 8: EDITORIAL CLIENT CASE STUDY
      ══════════════════════════════════════════════════ */}
      <section className={styles.caseStudySection}>
        <div className="container">
          <div className={styles.caseStudyCard}>
            <div className={styles.caseStudyMedia}>
              <Image
                src="/images/Weekend Bhraman Tour Planner.jpg"
                alt="Weekend Bhraman Tour Planner automated booking engine"
                width={800}
                height={600}
              />
              <div className={styles.clientBadgeOverlay}>
                Client Spotlight &middot; Experiential Travel
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.caseKicker}>Odisha Travel &amp; Hospitality Automation</div>
              <h3 className={styles.caseTitle}>
                How Weekend Bhraman Automated 82% of Group Tour Bookings via WhatsApp
              </h3>
              <p className={styles.caseSummary}>
                Weekend Bhraman was drowning in weekend inquiry spikes across Instagram and WhatsApp. By deploying
                our custom multi-agent tour qualifier and dynamic itinerary dispatch engine, they dropped response times
                from 5 hours to 1.4 seconds, booking ₹42 Lakhs in premium travel packages without adding a single headcount.
              </p>

              <div className={styles.metricPillsRow}>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>1.4s</span>
                  <span className={styles.metricPillDesc}>Avg Bot Latency</span>
                </div>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>+310%</span>
                  <span className={styles.metricPillDesc}>Qualified Pipeline</span>
                </div>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>0</span>
                  <span className={styles.metricPillDesc}>Missed Midnight Leads</span>
                </div>
              </div>

              <div className={styles.caseQuote}>
                &ldquo;Before Copilot, 40% of our weekend ad leads went cold because our staff couldn&apos;t reply until Monday morning. Now, the AI sends the exact villa photos, custom itineraries, and takes the advance deposit in under two minutes.&rdquo;
                <span className={styles.quoteAuthor}>— Debashis M., Operations Director, Weekend Bhraman</span>
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
              Enterprise Infrastructure Stack
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>
              Built on Industrial-Grade AI Platforms
            </h2>
          </div>

          <div className={styles.arsenalGrid}>
            <div className={styles.arsenalCard}>
              <div className={styles.arsenalIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                </svg>
              </div>
              <h4>Meta Cloud API</h4>
              <p>Direct official Meta Business Platform webhooks for 100% deliverability &amp; green checkmark security.</p>
            </div>

            <div className={styles.arsenalCard}>
              <div className={styles.arsenalIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h4>OpenAI &amp; Anthropic</h4>
              <p>GPT-4o &amp; Claude 3.5 Sonnet reasoning engines fine-tuned with domain-specific few-shot prompting.</p>
            </div>

            <div className={styles.arsenalCard}>
              <div className={styles.arsenalIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                </svg>
              </div>
              <h4>Pinecone &amp; Chroma</h4>
              <p>High-density vector databases delivering zero-hallucination document search in under 120ms.</p>
            </div>

            <div className={styles.arsenalCard}>
              <div className={styles.arsenalIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/>
                </svg>
              </div>
              <h4>HubSpot &amp; Make.com</h4>
              <p>Enterprise orchestration connecting real-time leads to SMS, WhatsApp, Slack, and Google Sheets.</p>
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
            <div className={styles.faqKicker}>Straight Answers</div>
            <h2 className={styles.faqTitle}>Frequently Asked Questions About AI Automation</h2>
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
            <div className={styles.terminalKicker}>Stop Leaking Inbound Revenue</div>
            <h2 className={styles.terminalTitle}>
              Ready to Automate Your Inbound Sales Workflow in 30 Days?
            </h2>
            <p className={styles.terminalDesc}>
              Schedule an executive AI architecture audit. We will evaluate your current response latency,
              demo a live prototype with your product catalog, and present an exact deployment plan.
            </p>
            <div className={styles.terminalCtaGroup}>
              <Link href="/contact" className={styles.terminalPrimaryBtn}>
                Schedule AI Architecture Audit &rarr;
              </Link>
              <Link href="/services" className={styles.terminalSecondaryBtn}>
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
