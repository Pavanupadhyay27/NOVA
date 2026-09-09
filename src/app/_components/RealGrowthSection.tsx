'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './RealGrowthSection.module.css';

interface CaseStudy {
  id: string;
  client: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  color: string;
  statBadge: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'medallion-house',
    client: 'Medallion House',
    category: 'Meta Ads + Amazon Store + Web Platform',
    overview: 'An established offline retail brand seeking nationwide digital expansion, recovery from Meta Ads suspension, and end-to-end e-commerce infrastructure.',
    challenge: 'Conduct a forensic audit, resolve complex Meta Ads account suspensions, and establish an authoritative multichannel presence across Amazon Brand Store and a custom digital flagship.',
    solution: 'Conducted a deep-dive policy audit and resolved account compliance directly with Meta Human Support. Architected a custom high-converting Amazon Brand Store and built a lightning-fast direct-to-consumer web platform.',
    results: [
      'Resolved Meta Ads suspension and scaled qualified leads at ₹15–20 CPL',
      'Designed & launched a dedicated Amazon Brand Store with A+ Content',
      'Engineered and deployed the brand’s custom modern e-commerce platform',
    ],
    image: '/images/about_hero.jpg',
    color: '#0284C7',
    statBadge: '₹15–20 CPL',
  },
  {
    id: 'weekend-bhraman',
    client: 'Weekend Bhraman Tour Planner',
    category: 'Meta Ads + Google Business Profile (GBP)',
    overview: 'A premier travel and pilgrimage tour operator struggling with low inquiry volume and unverified local Google search listings for high-ticket packages.',
    challenge: 'Pinpoint targeting bottlenecks in Meta Ads, improve high-intent lead qualification, and resolve complex Google Business Profile verification roadblocks.',
    solution: 'Restructured Meta Ads funnels around high-intent regional travel cohorts. Deployed high-converting video creatives and successfully verified and optimized their Google Business Profile for local search dominance.',
    results: [
      'Generated high-converting qualified booking leads at ₹25–30',
      'Successfully verified and optimized Google Business Profile ranking',
      'Rapidly expanded offerings from 1 pilot package to 7+ active tour circuits',
    ],
    image: '/images/dashboard_hero.jpg',
    color: '#6366F1',
    statBadge: '7+ Tour Packages',
  },
  {
    id: 'ekatraa',
    client: 'Ekatraa',
    category: '360° Digital Marketing & SEO Growth',
    overview: 'A bespoke event services brand originating in Bhubaneswar needing complete brand positioning, organic local search presence, and multi-platform customer acquisition.',
    challenge: 'Formulate an end-to-end market entry strategy, establish localized search authority, and fix cross-channel Meta Ads pixel connectivity.',
    solution: 'Executed in-depth technical SEO and Geo-targeted keyword architecture. Streamlined multi-platform Meta Ads tracking, launched viral video reel funnels, and captured local SERP pack rankings.',
    results: [
      'Dominated local SEO rankings across Google SERP and Geo queries',
      'Resolved Meta Ads pixel tracking and initiated automated lead pipelines',
      'Accelerated organic weekly engagement from 200+ to over 1,000+ views',
    ],
    image: '/images/work_restaurant.jpg',
    color: '#EC4899',
    statBadge: '5X View Velocity',
  },
  {
    id: 'sri-pandurangan',
    client: 'Sri Pandurangan Divine Fresh',
    category: 'SEO Strategy + Meta Ads & WhatsApp Funnel',
    overview: 'A premium fresh products enterprise needing an automated high-velocity inbound call and direct WhatsApp ordering funnel for daily consumer inquiries.',
    challenge: 'Overcome stagnant inquiry volume, configure seamless direct WhatsApp lead routing, and eliminate ad spend wastage on broad targeting.',
    solution: 'Re-engineered Meta Ads targeting with hyper-local geographic radius bidding. Integrated direct 1-click WhatsApp order automations and established a compounding organic local SEO funnel.',
    results: [
      'Generated consistent qualified direct customer orders at under ₹20 CPL',
      'Engineered a compounding SEO-driven organic search acquisition engine',
      'Integrated instant WhatsApp ordering routing with zero lead leakage',
    ],
    image: '/images/team_office.jpg',
    color: '#10B981',
    statBadge: '<₹20 Inbound Leads',
  },
];

export default function RealGrowthSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Meta Ads', 'SEO & GBP', 'E-Commerce'];

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category.toLowerCase().includes(activeFilter.toLowerCase().replace('&', '')));

  return (
    <section className={`section ${styles.section}`}>
      {/* Background ambient lighting */}
      <div className={styles.bgLight1} />
      <div className={styles.bgLight2} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal>
            <div className={styles.headerTop}>
              <div className="eyebrow">
                <span className={styles.trophyIcon}>🏆</span>
                <span>Proven Results & Case Studies</span>
              </div>
              <Link href="/work" className={`btn btn-secondary ${styles.topDownloadBtn}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download All Case Studies</span>
              </Link>
            </div>

            <div className={styles.headerMain}>
              <h2 className={`display-lg ${styles.headline}`}>
                Real Growth. <span className="accent-gradient">Real Businesses.</span>
              </h2>
              <p className={`body-lg ${styles.sub}`}>
                Every business has unique challenges. Here&apos;s how Nova Spark transformed digital presence into measurable business growth.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 2x2 Grid of Detailed Case Study Cards */}
        <div className={styles.grid}>
          {filteredStudies.map((study, idx) => (
            <ScrollReveal key={study.id} delay={idx * 80}>
              <div className={styles.card} style={{ '--accent-color': study.color } as React.CSSProperties}>
                {/* Visual Header with Image & Badges */}
                <div className={styles.cardVisual}>
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className={styles.cardImg}
                    sizes="(max-width: 900px) 100vw, 600px"
                  />
                  <div className={styles.imgOverlay} />
                  
                  <div className={styles.badgeWrap}>
                    <span className={styles.catBadge}>{study.category}</span>
                    <span className={styles.statPill} style={{ borderColor: study.color, color: study.color }}>
                      {study.statBadge}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className={styles.cardContent}>
                  <h3 className={styles.clientTitle}>{study.client}</h3>
                  <p className={styles.overviewText}>{study.overview}</p>

                  {/* Challenge Block */}
                  <div className={styles.specBox}>
                    <div className={styles.specHeader}>
                      <span className={styles.challengeTag}>⚡ Challenge</span>
                    </div>
                    <p className={styles.specText}>{study.challenge}</p>
                  </div>

                  {/* Solution Block */}
                  <div className={styles.specBox}>
                    <div className={styles.specHeader}>
                      <span className={styles.solutionTag}>🚀 Nova Spark Solution</span>
                    </div>
                    <p className={styles.specText}>{study.solution}</p>
                  </div>

                  {/* Results Box (Tactile Mint Highlight) */}
                  <div className={styles.resultsBox}>
                    <div className={styles.resultsHeader}>
                      <span className={styles.resultsTitle}>Verified Commercial Results</span>
                    </div>
                    <ul className={styles.resultsList}>
                      {study.results.map((res, i) => (
                        <li key={i} className={styles.resultItem}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action */}
                  <Link href="/contact" className={`btn btn-primary ${styles.cardBtn}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download Case Study</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
