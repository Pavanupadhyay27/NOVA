'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './EcommerceWorkstation.module.css';

interface EcomStage {
  id: string;
  stageName: string;
  stagePill: string;
  headline: string;
  subhead: string;
  objective: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
  specCode: string;
}

const ecomStages: EcomStage[] = [
  {
    id: 'pmax',
    stageName: '01. Multi-Channel Scaling',
    stagePill: 'PMAX & ADVANTAGE+',
    headline: 'High-Margin Commercial Feed Scaling',
    subhead: 'We synchronize your full Shopify or custom catalog with Google Merchant Center and Meta Advantage+, targeting verified online buyers across India.',
    objective: 'Achieve 5.0X+ blended ROAS while keeping customer acquisition cost (CAC) strictly below your gross profit threshold.',
    deliverables: [
      'Google Merchant Center feed optimization with custom attribute labels',
      'Meta Advantage+ Shopping campaigns with dynamic catalog overlays',
      'Negative keyword shielding eliminating non-buying informational searches',
      'Dynamic remarketing loops targeting cart abandoners within 2 hours',
    ],
    specs: [
      { label: 'Blended ROAS Target', value: '5.2X–6.5X' },
      { label: 'Catalog Feed Sync', value: 'Hourly API' },
      { label: 'CAC Efficiency', value: '-38% Lower' },
    ],
    specCode: `// Advantage+ Shopping API Configuration
const advantagePlusConfig = {
  optimizationGoal: "PURCHASE_VALUE_MAXIMIZATION",
  catalogId: "ODISHA_HANDLOOM_CATALOG_MASTER",
  targetRoas: 5.5,
  audienceType: "BROAD_PLUS_FIRST_PARTY_SEED"
};`,
  },
  {
    id: 'rto',
    stageName: '02. RTO & COD Defense',
    stagePill: 'PROFIT PROTECTION',
    headline: 'Automated Cash-on-Delivery Protection & WhatsApp Verification',
    subhead: 'Cash-on-delivery RTO rates of 30%+ destroy D2C profit margins. We build automated WhatsApp verification and pre-payment incentives that protect your cash flow.',
    objective: 'Slash RTO return rates to under 8% and convert 40%+ of COD orders into non-cancelable prepaid UPI payments.',
    deliverables: [
      'Automated WhatsApp bot verifying buyer address & intent before order dispatch',
      '1-click instant UPI pre-payment discount incentives (e.g., "Pay now & save ₹150")',
      'High-risk RTO customer database scoring blocking chronic order returners',
      'Courier partner API integration (Shiprocket, Bluedart, Delhivery) with live tracking',
    ],
    specs: [
      { label: 'RTO Rate SLA', value: '< 8% Target' },
      { label: 'Prepaid Conversion', value: '44% of COD' },
      { label: 'Courier Sync', value: 'Real-Time' },
    ],
    specCode: `// RTO Verification & COD Risk Scoring
const handleCodOrder = async (order) => {
  const riskScore = await evaluateRtoRisk(order.pinCode, order.phone);
  if (riskScore === 'HIGH') {
    return dispatchWhatsAppPrepayOffer(order, { discount: '5%' });
  }
  return sendWhatsAppConfirmation(order.id);
};`,
  },
  {
    id: 'retention',
    stageName: '03. Post-Purchase Retention',
    stagePill: 'LTV MULTIPLIER',
    headline: 'Automated WhatsApp Retention Loops & Repeat Purchases',
    subhead: 'Profitable D2C brands make their real money on the second and third order. We build automated WhatsApp retention sequences that drive repeat sales.',
    objective: 'Generate 35%+ repeat purchase rates within 60 days, increasing customer Lifetime Value (LTV) with zero ad spend.',
    deliverables: [
      'Live WhatsApp dispatch and delivery updates with direct customer support',
      'Automated photo and video review collection sequences offering loyalty points',
      'Replenishment and cross-sell recommendations triggered at optimal re-order days',
      'VIP customer early-access drops for seasonal and festive launches',
    ],
    specs: [
      { label: 'Repeat Order Rate', value: '38% in 60d' },
      { label: 'Review Response', value: '28% Verified' },
      { label: 'Zero-CAC Revenue', value: '35% of GMV' },
    ],
    specCode: `// Automated 30-Day WhatsApp Retention Sequence
const retentionWorkflow = [
  { trigger: "DELIVERY_COMPLETED + 2_DAYS", action: "PHOTO_REVIEW_REQUEST" },
  { trigger: "DELIVERY_COMPLETED + 21_DAYS", action: "VIP_REORDER_DISCOUNT" }
];`,
  },
  {
    id: 'storefront',
    stageName: '04. Fast Storefront Engine',
    stagePill: 'SUB-SECOND E-COM',
    headline: 'Sub-Second Next.js & Shopify Headless Storefronts',
    subhead: 'Slow mobile product pages kill sales. We build headless e-commerce stores that load in under 800ms, with instant search and 1-click UPI checkout.',
    objective: 'Provide a luxury mobile shopping experience that increases add-to-cart rates and eliminates checkout bounce.',
    deliverables: [
      'Next.js 15 or Shopify Plus headless custom storefront development',
      'Instant catalog filtering and search without page reloads',
      'Razorpay & Cashfree 1-click UPI checkout integration',
      'Mobile 98+ PageSpeed SLA on 4G/5G connections',
    ],
    specs: [
      { label: 'Page Load SLA', value: '< 0.8s' },
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Add-to-Cart Lift', value: '+42%' },
    ],
    specCode: `// Headless Fast-Catalog Static Edge Filter
export const revalidate = 600;
export async function generateStaticParams() {
  return await getTrendingOdishaCollections();
}`,
  },
];

export default function EcommerceWorkstation() {
  const [activeStage, setActiveStage] = useState<string>('pmax');
  const current = ecomStages.find((s) => s.id === activeStage) || ecomStages[0];

  return (
    <section className={styles.section} id="workstation">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.stageDot} />
            <span>D2C Commercial Architecture</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            The System Behind <span className="accent-gradient">High-Margin D2C Brands</span>
          </h2>
          <p className={styles.subhead}>
            From Google Shopping demand capture to automated RTO defense and post-purchase WhatsApp retention loops.
          </p>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className={styles.tabBar}>
          {ecomStages.map((stage) => {
            const isActive = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                type="button"
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveStage(stage.id)}
              >
                <span className={styles.tabName}>{stage.stageName}</span>
                <span className={styles.tabPill}>{stage.stagePill}</span>
              </button>
            );
          })}
        </div>

        {/* Console Stage */}
        <div className={styles.consoleStage}>
          {/* Details Column */}
          <div className={styles.detailsCol}>
            <div className={styles.badgeRow}>
              <span className={styles.stagePillHighlight}>{current.stagePill}</span>
              <span className={styles.verifiedDot}>● PROVEN D2C PROFIT SYSTEM</span>
            </div>

            <h3 className={styles.stageHeadline}>{current.headline}</h3>
            <p className={styles.stageSubhead}>{current.subhead}</p>

            <div className={styles.objectiveBox}>
              <span className={styles.objLabel}>COMMERCIAL OBJECTIVE:</span>
              <p className={styles.objText}>{current.objective}</p>
            </div>

            <div className={styles.tacticsList}>
              <span className={styles.tacticsTitle}>Execution Specifications:</span>
              {current.deliverables.map((item, idx) => (
                <div key={idx} className={styles.tacticItem}>
                  <span className={styles.tacticIcon}>✓</span>
                  <span className={styles.tacticText}>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.kpiRow}>
              {current.specs.map((spec) => (
                <div key={spec.label} className={styles.kpiBox}>
                  <span className={styles.kpiVal}>{spec.value}</span>
                  <span className={styles.kpiLabel}>{spec.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.workstationCta}>
                <span>Claim Free D2C Scale Audit</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Code Spec Column */}
          <div className={styles.terminalCol}>
            <div className={styles.codeTerminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.macDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.terminalTitle}>d2c-growth-spec.ts · Marketing Copilot</div>
                <span className={styles.edgeBadge}>REVENUE ENGINE</span>
              </div>
              <div className={styles.codeBody}>
                <pre>
                  <code>{current.specCode}</code>
                </pre>
              </div>
              <div className={styles.terminalFooter}>
                <span className={styles.footItem}>🛍️ Google PMax &amp; Meta CAPI</span>
                <span className={styles.footItem}>🛡️ RTO &lt; 8%</span>
                <span className={styles.footItem}>⚡ Sub-Second Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
