'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetaFunnelWorkstation.module.css';

interface FunnelStage {
  id: string;
  stageName: string;
  stagePill: string;
  headline: string;
  subhead: string;
  objective: string;
  tactics: string[];
  kpis: { label: string; value: string; note: string }[];
  attributionSpec: string;
}

const funnelStages: FunnelStage[] = [
  {
    id: 'tof',
    stageName: '01. Top of Funnel (TOF)',
    stagePill: 'DEMAND GENERATION & HOOKS',
    headline: 'Capturing Broad Bhubaneswar Attention with 3-Second Hooks',
    subhead: 'We don&apos;t wait for customers to search; we introduce your offer directly into their daily Instagram Reels and Facebook feeds using bold visual pattern interrupts.',
    objective: 'Generate low-cost, high-retention video views and build massive retargeting pools across Bhubaneswar.',
    tactics: [
      'Visual pattern interrupt: fast cuts, dynamic text animations, and motion graphics',
      'Hyperlocal cultural hooks: Odia colloquialisms, Bhubaneswar landmarks, and seasonal resonance',
      'Broad Advantage+ audience modeling combined with pin code radius geo-fences',
      '3-second and 15-second video retention tracking to isolate high-intent prospects',
    ],
    kpis: [
      { label: '3-Sec Hook Rate', value: '38%+', note: 'Industry Avg is 18%' },
      { label: 'Cost Per 1,000 Impressions (CPM)', value: '₹45–₹90', note: 'Optimized Bidding' },
      { label: 'Video ThruPlays', value: '250,000+', note: 'Monthly Reach' },
    ],
    attributionSpec: `// Meta Advantage+ TOF Event Configuration
const tofCampaign = {
  optimizationGoal: "THRUPLAY_OR_LANDING_PAGE_VIEWS",
  bidStrategy: "LOWEST_COST_WITHOUT_CAP",
  creativeRotation: "6_VARIANTS_PER_WEEK",
  geoFencing: ["Bhubaneswar + 15km", "Cuttack Twin City"],
};`,
  },
  {
    id: 'mof',
    stageName: '02. Mid Funnel (MOF)',
    stagePill: 'CONSIDERATION & SOCIAL PROOF',
    headline: 'Eliminating Skepticism with UGC & Verified Transformations',
    subhead: 'Once prospects watch your videos, our automated retargeting system immediately shows them real customer reviews, before/after case studies, and transparent pricing demos.',
    objective: 'Transform casual video viewers into warm, qualified prospects ready to evaluate your offer.',
    tactics: [
      'Dynamic product carousels tailored to products the user previously viewed',
      'User-Generated Content (UGC) creator style reviews with authentic Odisha customer reactions',
      'Founder story and behind-the-scenes production videos establishing trust',
      'Frequency capping (maximum 3 impressions per week) to prevent ad fatigue',
    ],
    kpis: [
      { label: 'Click-Through Rate (CTR)', value: '3.4%', note: '2.5x Above Benchmark' },
      { label: 'Engagement Rate', value: '8.2%', note: 'Shares & Saves' },
      { label: 'Retargeting Pool Size', value: '45,000+', note: 'Warm Prospects' },
    ],
    attributionSpec: `// Custom Audience Retention Rules
const mofAudience = {
  source: "VIDEO_ENGAGEMENT_75_PERCENT",
  lookbackWindow: "30_DAYS",
  frequencyCap: "3_PER_7_DAYS",
  creativeAngles: ["Social Proof", "Price Justification", "Risk-Free Guarantee"],
};`,
  },
  {
    id: 'bof',
    stageName: '03. Bottom of Funnel (BOF)',
    stagePill: 'CONVERSION & WHATSAPP CLOSING',
    headline: 'Closing High-Value Sales with Direct WhatsApp Checkout',
    subhead: 'The final nudge. We route high-intent warm prospects into automated WhatsApp Business conversations, limited-time inventory drops, or native instant quote forms.',
    objective: 'Turn warm prospects into paying clients, booked showroom visits, and immediate orders.',
    tactics: [
      'Click-to-WhatsApp direct routing with pre-filled buyer inquiry prompts',
      'Urgency and scarcity triggers: limited seasonal batches, early-bird incentives',
      'Automated sales notifications to your team within 30 seconds of lead arrival',
      'Seamless 1-click UPI and payment link integration within WhatsApp chat',
    ],
    kpis: [
      { label: 'Lead-to-Chat Conversion', value: '28.4%', note: 'Instant WhatsApp Entry' },
      { label: 'Cost Per Qualified Lead (CPL)', value: '₹14–₹45', note: 'Depends on Sector' },
      { label: 'Average ROAS', value: '4.8X', note: 'Verified Return' },
    ],
    attributionSpec: `// BOF Conversion Telemetry
const bofFunnel = {
  conversionEvent: "PURCHASE_OR_WHATSAPP_LEAD",
  attributionWindow: "7_DAY_CLICK_1_DAY_VIEW",
  crmWebhook: "INSTANT_ZAPIER_OR_MAKE_DISPATCH",
  targetCPA: "SUB_RUPEE_250_PER_ORDER",
};`,
  },
  {
    id: 'capi',
    stageName: '04. Server-Side Tracking (CAPI)',
    stagePill: 'DATA RESILIENCE & ATTRIBUTION',
    headline: 'Meta Conversions API: 100% Signal Capture Despite iOS 18 Privacy',
    subhead: 'Browser pixels miss up to 35% of conversions due to ad-blockers and Apple privacy protections. We connect Meta Conversions API (CAPI) server-to-server for full-funnel attribution.',
    objective: 'Provide Meta’s AI machine learning algorithms with complete, unblocked conversion data for aggressive scaling.',
    tactics: [
      'Server-to-server event streaming directly from Next.js server to Meta Graph API',
      'Event Quality Match Score maintained above 8.5/10 for top-tier ad auction pricing',
      'Offline conversion tracking: syncing in-store cash sales and phone closings back into Meta',
      'Zero reliance on vulnerable third-party browser cookies',
    ],
    kpis: [
      { label: 'Event Match Quality', value: '9.2 / 10', note: 'Top 5% Globally' },
      { label: 'Attribution Recovery', value: '+34%', note: 'Unreported Sales Found' },
      { label: 'Algorithm Learning Speed', value: '3x Faster', note: 'Quicker Bid Calibration' },
    ],
    attributionSpec: `// Next.js Server-Side Meta CAPI Event Dispatcher
import { EventRequest, UserData, ServerEvent } from 'facebook-nodejs-business-sdk';

export async function sendServerEvent(eventName, userData, customData) {
  const event = new ServerEvent()
    .setEventName(eventName)
    .setEventTime(Math.floor(Date.now() / 1000))
    .setUserData(new UserData().setEmail(userData.email).setPhone(userData.phone))
    .setCustomData(customData);
  return await new EventRequest(accessToken, pixelId).setEvents([event]).execute();
}`,
  },
];

export default function MetaFunnelWorkstation() {
  const [activeStageId, setActiveStageId] = useState(funnelStages[0].id);
  const activeStage = funnelStages.find((s) => s.id === activeStageId) || funnelStages[0];

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>Full-Funnel Acquisition Engine</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            The 4-Stage Meta Performance <span className="accent-gradient">Architecture</span>
          </h2>
          <p className={styles.subhead}>
            We don’t treat Meta Ads as an isolated &quot;boost button&quot;. We engineer a progressive full-funnel pipeline that turns casual scrollers into repeat paying customers.
          </p>
        </ScrollReveal>

        {/* Workstation Container */}
        <div className={styles.workstationWrapper}>
          {/* Stage Step Tabs */}
          <div className={styles.stageTabsNav}>
            {funnelStages.map((stage) => (
              <button
                key={stage.id}
                type="button"
                className={`${styles.stageTabBtn} ${activeStageId === stage.id ? styles.stageTabActive : ''}`}
                onClick={() => setActiveStageId(stage.id)}
              >
                <span className={styles.stageTabTitle}>{stage.stageName}</span>
                <span className={styles.stageTabSub}>{stage.stagePill}</span>
              </button>
            ))}
          </div>

          {/* Active Workstation Stage Grid */}
          <div className={styles.stageStageGrid}>
            {/* Left: Strategy & Tactics */}
            <div className={styles.strategyCol}>
              <div className={styles.stageBadgeRow}>
                <span className={styles.stagePillBadge}>{activeStage.stagePill}</span>
                <span className={styles.slaBadge}>CAPI Verified Pipeline</span>
              </div>

              <h3 className={styles.stageHeadline}>{activeStage.headline}</h3>
              <p className={styles.stageSubhead}>{activeStage.subhead}</p>

              <div className={styles.objectiveBox}>
                <span className={styles.objectiveLabel}>🎯 Primary Commercial Objective:</span>
                <p className={styles.objectiveText}>{activeStage.objective}</p>
              </div>

              {/* Execution Tactics */}
              <div className={styles.tacticsList}>
                <span className={styles.tacticsTitle}>Core Campaign Deliverables:</span>
                {activeStage.tactics.map((tactic) => (
                  <div key={tactic} className={styles.tacticItem}>
                    <span className={styles.tacticIcon}>✓</span>
                    <span className={styles.tacticText}>{tactic}</span>
                  </div>
                ))}
              </div>

              {/* 3 Metric KPI Blocks */}
              <div className={styles.kpiRow}>
                {activeStage.kpis.map((kpi) => (
                  <div key={kpi.label} className={styles.kpiCard}>
                    <span className={styles.kpiValue}>{kpi.value}</span>
                    <span className={styles.kpiLabel}>{kpi.label}</span>
                    <span className={styles.kpiNote}>{kpi.note}</span>
                  </div>
                ))}
              </div>

              <div className={styles.actionRow}>
                <Link href="/contact" className={styles.actionBtn}>
                  <span>Audit Your Current Meta Funnel</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: Technical Spec & Code Terminal */}
            <div className={styles.terminalCol}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <span className={styles.terminalTitle}>Meta Ads Engine · Configuration Spec</span>
                <span className={styles.liveBadge}>ACTIVE</span>
              </div>
              <pre className={styles.terminalCode}>
                <code>{activeStage.attributionSpec}</code>
              </pre>
              <div className={styles.terminalFooter}>
                <span className={styles.footerStatus}>● Event Quality Score: 9.2/10 · Direct Meta Conversions API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
