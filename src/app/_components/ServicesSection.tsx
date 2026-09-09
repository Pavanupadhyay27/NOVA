'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './ServicesSection.module.css';

interface ServiceItem {
  num: string;
  category: string;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  href: string;
  color: string;
  stat: string;
  statLabel: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    num: '01',
    category: 'Paid & Performance',
    title: 'Performance Marketing',
    tagline: 'Predictable Customer Acquisition Engine',
    desc: 'Turn ad spend into compounding revenue. High-converting acquisition campaigns across Google, Meta, and Programmatic networks with proprietary bidding models and server-side tracking.',
    tags: ['Google Search & Shopping', 'Meta Advantage+', 'LinkedIn B2B Ads', 'YouTube Ads', 'Smart Retargeting'],
    href: '/services/performance-marketing',
    color: '#0284C7',
    stat: '+142%',
    statLabel: 'Avg Revenue Lift',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
  {
    num: '02',
    category: 'SEO & Organic',
    title: 'SEO & Organic Growth',
    tagline: 'Compounding Search Engine Authority',
    desc: 'Dominate high-intent search rankings with technical indexing architecture, local Map Pack dominance, programmatic content engines, and high-authority backlink moats.',
    tags: ['Technical SEO', 'Local Map Pack', 'Entity Semantic Search', 'Programmatic Content', 'High-DA Backlinks'],
    href: '/services/seo',
    color: '#6366F1',
    stat: '+187%',
    statLabel: 'Organic Traffic Lift',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    num: '03',
    category: 'Social & Content',
    title: 'Social Media & Content',
    tagline: 'High-Retention Viral Community Loops',
    desc: 'Transform attention into brand advocates. High-converting short-form video hooks, creator collaboration funnels, daily brand storytelling, and high-retention community loops.',
    tags: ['Reels & TikTok Engines', 'Influencer Funnels', 'Community Management', 'Short-Form Video', 'DM Automation'],
    href: '/services/social-media',
    color: '#EC4899',
    stat: '10M+',
    statLabel: 'Monthly Impressions',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    num: '04',
    category: 'Brand & Creative',
    title: 'Creative & Branding',
    tagline: 'Distinctive Market Positioning & Identity',
    desc: 'Make your brand impossible to ignore. Complete visual identity systems, motion graphics, high-converting ad creatives, and conversion copywriting that commands category leadership.',
    tags: ['Brand Guidelines', '3D & Motion Graphics', 'Packaging Design', 'Conversion Copy', 'Creative Sprints'],
    href: '/services/creative-branding',
    color: '#F59E0B',
    stat: '100+',
    statLabel: 'Brands Scaled',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
      </svg>
    ),
  },
  {
    num: '05',
    category: 'Engineering & Web',
    title: 'Web & Technology',
    tagline: 'High-Converting Digital Flagship Platforms',
    desc: 'Digital storefronts engineered for speed and conversion. Blazing-fast Next.js architectures, headless checkouts, sub-second load times, and frictionless mobile conversion funnels.',
    tags: ['Next.js & React 19', 'Headless E-Commerce', 'CRO A/B Testing', 'Tactile UI/UX', 'Performance Audits'],
    href: '/services/web-development',
    color: '#10B981',
    stat: '99/100',
    statLabel: 'Lighthouse Score',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    num: '06',
    category: 'Autonomous AI',
    title: 'AI & Automation',
    tagline: 'Autonomous Revenue Operations Infrastructure',
    desc: 'Scale revenue operations without adding headcount. Agentic lead scoring, automated WhatsApp nurturing funnels, intelligent CRM sync, and real-time revenue analytics dashboards.',
    tags: ['Lead Qualification AI', 'WhatsApp AI Bots', 'Autonomous CRM', 'Attribution Engine', 'Automated Pipelines'],
    href: '/services/ai-automation',
    color: '#06B6D4',
    stat: '-60%',
    statLabel: 'Operating Overhead',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
        <rect x="4" y="8" width="16" height="12" rx="2"></rect>
        <path d="M9 13v2"></path>
        <path d="M15 13v2"></path>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section className={`section ${styles.section}`} id="services-section">
      <div className={styles.bgGlow} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal direction="up">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              What We Do · Specialized Growth Practices
            </div>
            <h2 className="display-lg" style={{ marginTop: 14 }}>
              Everything your revenue needs<br />
              <span className="accent-gradient">to compound and dominate.</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: 580, marginTop: 12 }}>
              Six specialized growth disciplines engineered into one synchronized vertical engine — eliminating silos so every campaign compounds in ROI.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} direction="left">
            <Link href="/services" className="btn btn-secondary">
              Explore All 6 Practices →
            </Link>
          </ScrollReveal>
        </div>

        {/* Vertical Stream of Growth Practices (4 by default with View More toggle) */}
        <div className={styles.verticalStream}>
          {displayedServices.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <ScrollReveal key={service.num} delay={idx * 0.05}>
                <div
                  className={`${styles.streamRow} ${isHovered ? styles.rowHovered : ''}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{ '--row-color': service.color } as React.CSSProperties}
                >
                  {/* Left Column: Number & 3D Embossed Icon */}
                  <div className={styles.rowLeftCol}>
                    <span className={styles.numBadge}>{service.num}</span>
                    <div 
                      className={styles.iconPlate}
                      style={{ 
                        color: service.color,
                        borderColor: isHovered ? `${service.color}60` : '#E2E8F0',
                        background: isHovered ? `${service.color}15` : '#F8FAFC'
                      }}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Middle Column: Title, Tagline, Desc, & Capability Chips */}
                  <div className={styles.rowMidCol}>
                    <div className={styles.titleMetaRow}>
                      <span 
                        className={styles.categoryTag}
                        style={{ color: service.color, borderColor: `${service.color}35`, background: `${service.color}10` }}
                      >
                        {service.category}
                      </span>
                    </div>

                    <h3 className={styles.practiceTitle}>{service.title}</h3>
                    <p className={styles.practiceTagline} style={{ color: service.color }}>{service.tagline}</p>
                    <p className={styles.practiceDesc}>{service.desc}</p>

                    {/* Capability Tags */}
                    <div className={styles.chipsRow}>
                      {service.tags.map((tag) => (
                        <span key={tag} className={styles.chipPill}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Metric Callout & Action Link */}
                  <div className={styles.rowRightCol}>
                    <div className={styles.statBox}>
                      <div className={styles.statNumber} style={{ color: service.color }}>
                        {service.stat}
                      </div>
                      <div className={styles.statLabel}>{service.statLabel}</div>
                    </div>

                    <Link href={service.href} className={styles.exploreBtn} style={{ color: service.color }}>
                      <span>Explore Practice</span>
                      <span className={styles.arrowIcon}>→</span>
                    </Link>
                  </div>
                </div>

                {/* Subtle Divider (except last in displayed list) */}
                {idx < displayedServices.length - 1 && <div className={styles.streamDivider} />}
              </ScrollReveal>
            );
          })}
        </div>

        {/* View More / View Less Tactile Skeuomorphic Button */}
        <div className={styles.toggleWrapper}>
          <button
            type="button"
            onClick={() => {
              if (showAll) {
                const sectionEl = document.getElementById('services-section');
                if (sectionEl) {
                  sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
              setShowAll(prev => !prev);
            }}
            className={styles.toggleBtn}
            aria-expanded={showAll}
          >
            <span>{showAll ? 'Show Less Practices' : 'View More Practices (2 More)'}</span>
            <span className={styles.toggleCount}>{showAll ? '↑' : '↓'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
