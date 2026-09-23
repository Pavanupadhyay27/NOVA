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
  kpis: { label: string; value: string }[];
  attributionSpec: string;
}

const funnelStages: FunnelStage[] = [
  {
    id: 'tof',
    stageName: '01. Top of Funnel',
    stagePill: 'DEMAND CAPTURE',
    headline: 'Stop the Scroll with 3-Second Visual Hooks',
    subhead: 'We introduce your brand directly into Bhubaneswar Instagram Reels & Facebook feeds using high-energy pattern interrupts.',
    objective: 'Generate low-cost, high-retention video views and build massive retargeting pools across Odisha.',
    tactics: [
      'Visual pattern interrupt: fast cuts, dynamic text overlays, and sound design',
      'Hyperlocal hooks: Odia & English colloquialisms and Bhubaneswar landmark resonance',
      'Advantage+ broad audience modeling combined with pin code radius geo-fences',
      '15-second video retention tracking isolating high-intent prospective buyers',
    ],
    kpis: [
      { label: '3-Sec Hook Rate', value: '38%+' },
      { label: 'Average CPM', value: '₹45–₹90' },
      { label: 'Monthly ThruPlays', value: '250K+' },
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
    stageName: '02. Mid Funnel',
    stagePill: 'SOCIAL PROOF',
    headline: 'Eliminate Skepticism with Verified Transformations',
    subhead: 'Once prospects watch your videos, automated retargeting presents genuine reviews, video case studies, and transparent pricing demos.',
    objective: 'Transform casual viewers into warm, qualified prospects ready to evaluate your offer.',
    tactics: [
      'Dynamic product carousels based on specific collections viewed by the user',
      'UGC creator style reviews featuring authentic Odisha customer reactions',
      'Behind-the-scenes founder explainers establishing uncompromising brand trust',
      'Strict frequency capping (max 3 impressions/wk) preventing audience fatigue',
    ],
    kpis: [
      { label: 'Click-Through Rate', value: '3.4%' },
      { label: 'Engagement Rate', value: '8.2%' },
      { label: 'Retargeting Pool', value: '45K+' },
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
    stageName: '03. Bottom Funnel',
    stagePill: 'CONVERSION & CLOSING',
    headline: 'Close Sales Fast via Click-to-WhatsApp Checkout',
    subhead: 'Direct warm prospects into automated WhatsApp Business conversations or native instant forms for immediate closing.',
    objective: 'Convert warm prospects into paying clients, booked visits, and high-margin transactions.',
    tactics: [
      '1-tap Click-to-WhatsApp direct routing with pre-filled buyer inquiry prompts',
      'Urgency triggers: limited seasonal batches, early-bird incentives',
      'Instant SMS/Slack lead dispatch alerting your sales team in under 30 seconds',
      '1-click UPI and payment link integration within WhatsApp chat',
    ],
    kpis: [
      { label: 'Chat Conversion', value: '28.4%' },
      { label: 'Lowest CPL', value: '₹14–₹45' },
      { label: 'Blended ROAS', value: '4.8X' },
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
    stageName: '04. CAPI Attribution',
    stagePill: 'DATA RESILIENCE',
    headline: 'Server-Side Conversions API (iOS 18 Proof)',
    subhead: 'Browser pixels miss 35% of data. We connect Meta Conversions API (CAPI) server-to-server for complete attribution.',
    objective: 'Feed Meta’s neural bidding algorithms with 100% unblocked conversion data for aggressive scaling.',
    tactics: [
      'Server-to-server event streaming from Next.js server directly to Meta Graph API',
      'Event Quality Match Score maintained above 8.5/10 for lower auction CPMs',
      'Offline conversion tracking syncing in-store cash sales and phone orders',
      'Zero reliance on vulnerable third-party browser cookies',
    ],
    kpis: [
      { label: 'Event Match Score', value: '9.2 / 10' },
      { label: 'Signal Recovery', value: '+34%' },
      { label: 'Learning Speed', value: '3x Faster' },
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

        {/* Funnel Pipeline Ribbon (NO CARDS!) */}
        <div className={styles.funnelNavRibbon}>
          {funnelStages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              className={`${styles.funnelStepBtn} ${activeStageId === stage.id ? styles.funnelStepActive : ''}`}
              onClick={() => setActiveStageId(stage.id)}
            >
              <span className={styles.stageTitleText}>{stage.stageName}</span>
              <span className={styles.stageTagText}>{stage.stagePill}</span>
            </button>
          ))}
        </div>

        {/* Integrated Stage Detail View */}
        <div className={styles.stageDetailGrid}>
          {/* Strategy Details */}
          <div className={styles.strategyDetailsCol}>
            <div className={styles.badgeRow}>
              <span className={styles.categoryPill}>{activeStage.stagePill}</span>
              <span className={styles.verifiedTag}>● CAPI Signal Verified</span>
            </div>

            <h3 className={styles.stageTitle}>{activeStage.headline}</h3>
            <p className={styles.stageLead}>{activeStage.subhead}</p>

            <div className={styles.objectiveBar}>
              <span className={styles.objectiveBold}>Primary Objective:</span>
              <span className={styles.objectiveValue}>{activeStage.objective}</span>
            </div>

            <div className={styles.tacticsGrid}>
              {activeStage.tactics.map((tactic) => (
                <div key={tactic} className={styles.tacticRow}>
                  <span className={styles.tacticCheck}>✓</span>
                  <span>{tactic}</span>
                </div>
              ))}
            </div>

            <div className={styles.kpiRow}>
              {activeStage.kpis.map((kpi) => (
                <div key={kpi.label} className={styles.kpiBlock}>
                  <span className={styles.kpiVal}>{kpi.value}</span>
                  <span className={styles.kpiLbl}>{kpi.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.funnelAuditBtn}>
                <span>Audit Your Funnel Architecture</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Code Spec Console */}
          <div className={styles.codeConsoleCol}>
            <div className={styles.consoleBar}>
              <div className={styles.dotsGroup}>
                <span className={styles.cDot} />
                <span className={styles.cDot} />
                <span className={styles.cDot} />
              </div>
              <span className={styles.consoleTitle}>Meta Ads Engine · Pipeline Configuration</span>
              <span className={styles.statusPill}>ACTIVE</span>
            </div>
            <pre className={styles.codeView}>
              <code>{activeStage.attributionSpec}</code>
            </pre>
            <div className={styles.consoleFooter}>
              <span>● Match Quality: 9.2/10 · Meta Conversions API Graph Engine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
