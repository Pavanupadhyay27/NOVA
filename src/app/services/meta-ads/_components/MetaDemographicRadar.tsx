'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetaDemographicRadar.module.css';

interface DemographicCohort {
  id: string;
  name: string;
  ageBracket: string;
  reach: string;
  primaryChannel: string;
  topInterests: string[];
  winningCreativeStyle: string;
  conversionFunnel: string;
  exampleClientNiche: string;
}

const cohorts: DemographicCohort[] = [
  {
    id: 'patia-tech',
    name: 'Patia & Infocity Techies / Gen-Z',
    ageBracket: 'Ages 20–34',
    reach: '140,000+ Active Users',
    primaryChannel: 'Instagram Reels & Stories (85%)',
    topInterests: ['Tech Gadgets & Apple Ecosystem', 'Weekend Cafes & Dining', 'D2C Fashion & Athleisure', 'Gym & Fitness Memberships'],
    winningCreativeStyle: 'Fast-paced, high-aesthetic 9:16 vertical video with trending audio, direct humor, and punchy 3-second visual hooks.',
    conversionFunnel: 'Instagram Reel → Instant Landing Page or 1-Tap UPI WhatsApp Checkout.',
    exampleClientNiche: 'D2C Fashion brand achieved ₹42L revenue selling out streetwear collections in 72 hours.',
  },
  {
    id: 'saheed-hni',
    name: 'Saheed Nagar & Janpath HNI Buyers',
    ageBracket: 'Ages 32–55',
    reach: '95,000+ Active Users',
    primaryChannel: 'Facebook Feed & Instagram (50/50)',
    topInterests: ['Luxury Real Estate & Plots', 'Gold & Diamond Jewelry', 'Cosmetic Dental & Wellness', 'High-End Home Interiors'],
    winningCreativeStyle: 'Polished cinematic videography, high-contrast typography, verified customer transformations, and institutional prestige.',
    conversionFunnel: 'In-Feed Video Ad → Native Instant Lead Form → Instant WhatsApp VIP Concierge.',
    exampleClientNiche: 'Luxury interior studio generated 32 qualified villa appointments at sub-₹350 CPL.',
  },
  {
    id: 'nayapalli-family',
    name: 'Jaydev Vihar & Nayapalli Families',
    ageBracket: 'Ages 28–48',
    reach: '110,000+ Active Users',
    primaryChannel: 'Instagram (60%) & Facebook (40%)',
    topInterests: ['Pediatric & Family Healthcare', 'Premium Preschools & Academies', 'Automobile Upgrades', 'Fine Dining Buffets'],
    winningCreativeStyle: 'Heartwarming relatable family narratives, educational doctor/expert explainers, and seasonal festival offers.',
    conversionFunnel: 'Facebook/Instagram Feed → Direct WhatsApp Appointment Booking Flow.',
    exampleClientNiche: 'Multi-specialty clinic booked 180+ monthly patient consultations via Click-to-WhatsApp ads.',
  },
  {
    id: 'cuttack-trade',
    name: 'Khandagiri & Cuttack Twin-City Trade',
    ageBracket: 'Ages 35–60',
    reach: '80,000+ Active Users',
    primaryChannel: 'Facebook Feed & WhatsApp (75%)',
    topInterests: ['B2B Manufacturing Supplies', 'Building Materials & Hardware', 'Wholesale Consumer Goods', 'Commercial Vehicles'],
    winningCreativeStyle: 'Direct commercial product demos, catalog pricing transparency, bulk discount incentives, and Odia voiceovers.',
    conversionFunnel: 'Facebook Video Ad → WhatsApp Direct Catalog with Sales Rep Closing.',
    exampleClientNiche: 'Industrial fabrication firm closed 4 major wholesale distributor accounts in 60 days.',
  },
];

export default function MetaDemographicRadar() {
  const [activeCohortId, setActiveCohortId] = useState(cohorts[0].id);
  const activeCohort = cohorts.find((c) => c.id === activeCohortId) || cohorts[0];

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>Audience Intelligence</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Bhubaneswar Demographic &amp; <span className="accent-gradient">Targeting Radar</span>
          </h2>
          <p className={styles.subhead}>
            We engineer tailored Meta ad campaigns calibrated to the distinct buyer psychology and media consumption habits of each Bhubaneswar demographic cohort.
          </p>
        </ScrollReveal>

        {/* Radar Console */}
        <div className={styles.radarWrapper}>
          {/* Cohort Selector Tabs */}
          <div className={styles.cohortNav}>
            <div className={styles.cohortNavTitle}>Target Audience Cohorts:</div>
            {cohorts.map((cohort) => (
              <button
                key={cohort.id}
                type="button"
                className={`${styles.cohortBtn} ${activeCohortId === cohort.id ? styles.cohortBtnActive : ''}`}
                onClick={() => setActiveCohortId(cohort.id)}
              >
                <div className={styles.cohortBtnRow}>
                  <span className={styles.cohortName}>{cohort.name}</span>
                  <span className={styles.cohortAge}>{cohort.ageBracket}</span>
                </div>
                <span className={styles.cohortReach}>{cohort.reach}</span>
              </button>
            ))}
          </div>

          {/* Active Cohort Detail Pane */}
          <div className={styles.cohortDetailPane}>
            <div className={styles.detailHeader}>
              <div>
                <span className={styles.detailBadge}>{activeCohort.ageBracket}</span>
                <h3 className={styles.detailName}>{activeCohort.name}</h3>
                <span className={styles.detailChannel}>Dominant Media: {activeCohort.primaryChannel}</span>
              </div>
              <div className={styles.reachStatBadge}>
                <span className={styles.reachVal}>{activeCohort.reach}</span>
                <span className={styles.reachLbl}>Targetable in Meta Auction</span>
              </div>
            </div>

            <div className={styles.detailDivider} />

            <div className={styles.interestSection}>
              <span className={styles.sectionLabel}>Validated High-Intent Interest Clusters:</span>
              <div className={styles.interestsGrid}>
                {activeCohort.topInterests.map((interest) => (
                  <span key={interest} className={styles.interestPill}>
                    🎯 {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.creativeStyleBox}>
              <div className={styles.boxHeader}>
                <span>🎬 Winning Creative Blueprint:</span>
              </div>
              <p className={styles.boxDesc}>{activeCohort.winningCreativeStyle}</p>
            </div>

            <div className={styles.funnelBox}>
              <div className={styles.boxHeader}>
                <span>⚡ Conversion Funnel Path:</span>
              </div>
              <p className={styles.boxDesc}>{activeCohort.conversionFunnel}</p>
            </div>

            <div className={styles.caseBox}>
              <span className={styles.caseBadge}>VERIFIED IMPACT</span>
              <span className={styles.caseText}>{activeCohort.exampleClientNiche}</span>
            </div>

            <div className={styles.paneCtaWrapper}>
              <Link href="/contact" className={styles.paneActionBtn}>
                <span>Launch Campaigns for {activeCohort.name}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
