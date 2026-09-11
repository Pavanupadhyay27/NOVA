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
    category: 'SEO & Organic Growth',
    title: 'Search Engine Optimization',
    tagline: 'Higher Google Visibility & In-Market Searchers',
    desc: 'Improve how often people see your business on Google and connect with customers who are looking for the things you offer or the services you provide. No matter if you are trying to attract customers who live nearby or people from away, we create search engine optimization plans that match what your business wants to achieve and how people are searching online.',
    tags: [
      'Technical SEO',
      'On-page SEO',
      'Local SEO',
      'Keyword Research',
      'Content Optimization',
      'Google Business Profile Optimization',
      'AEO & GEO Strategies',
      'SEO Performance Tracking',
    ],
    href: '/services/seo',
    color: '#0B2093',
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
    num: '02',
    category: 'Paid Search & PPC',
    title: 'Google Ads Management',
    tagline: 'Targeted High-Intent Searchers Ready to Buy',
    desc: 'Get in touch with people who are looking for products and services similar to what you have. We pay attention to the people, send messages that work well, make sure the website pages people land on are useful, and keep making things better over time.',
    tags: [
      'Search Ads',
      'Performance Max',
      'Display Ads',
      'Shopping Ads',
      'YouTube Ads',
      'Lead Generation Campaigns',
      'Conversion Tracking',
      'Campaign Optimization',
    ],
    href: '/services/performance-marketing',
    color: '#0D007F',
    stat: '4.8x',
    statLabel: 'Average ROAS',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
  {
    num: '03',
    category: 'Meta & Paid Social',
    title: 'Facebook & Instagram Ads',
    tagline: 'Precision Audience Targeting & High-Converting Campaigns',
    desc: 'Get closer to the people you want to reach by planning and running Meta advertising campaigns. Our goal is to make the traffic from paid media turn into real results for your business, not just make more people see your ads.',
    tags: [
      'Facebook Advertising',
      'Instagram Advertising',
      'Lead Generation',
      'Remarketing',
      'Conversion Campaigns',
      'Creative Testing',
      'Audience Targeting',
      'Campaign Optimization',
    ],
    href: '/services/performance-marketing',
    color: '#EC4899',
    stat: '+142%',
    statLabel: 'Revenue Lift',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    num: '04',
    category: 'Social Media & Content',
    title: 'Social Media Marketing',
    tagline: 'Brand Presence & Engaging Community Content',
    desc: 'Make sure your business is always present and interesting on social media by creating content that shows who you are and connects with the people you want to reach. We develop social strategies based on your industry, audience, objectives, and brand identity.',
    tags: [
      'Content Strategy',
      'Social Media Management',
      'Creative Posts',
      'Reels & Videos',
      'Brand Communication',
      'Audience Engagement',
      'Campaign Planning',
    ],
    href: '/services/social-media',
    color: '#F59E0B',
    stat: '10M+',
    statLabel: 'Monthly Impressions',
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
    category: 'Local Search & Map Dominance',
    title: 'Local SEO & Google Business Profile',
    tagline: 'Reach Nearby Customers Looking for Local Services',
    desc: 'Reach customers searching for businesses near them. Our local marketing services help make your business easier to find on Google Search and Google Maps. For businesses that want to attract customers in Bhubaneswar and the areas around it, being easy to find can help bring in more phone calls, questions, visits and leads.',
    tags: [
      'Local SEO',
      'Google Business Profile Optimization',
      'Local Keyword Targeting',
      'Citation Building',
      'Review Strategy',
      'Location-Based Content',
      'Maps Optimization',
    ],
    href: '/services/seo',
    color: '#10B981',
    stat: '#1 Rank',
    statLabel: 'Local Map Pack',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    num: '06',
    category: 'Web & Conversion Solutions',
    title: 'Website Design & Conversion Solutions',
    tagline: 'High-Converting Digital Storefronts & Platforms',
    desc: 'Your website is usually the first time people interact with your business. We design websites that look good, are easy to use, include search engine optimization basics and help people take the actions you want them to take.',
    tags: [
      'Business Websites',
      'Landing Pages',
      'Conversion-Focused Page Design',
      'Website Content',
      'User Experience Improvements',
      'SEO-Friendly Website Structure',
    ],
    href: '/services/web-development',
    color: '#06B6D4',
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
];

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section className={`section ${styles.section}`} id="services-section">
      <div className={styles.bgGlow} />

      <div className="container">
        {/* Section Header (Centered, Symmetrical, High-Impact UX) */}
        <div className={styles.header}>
          <ScrollReveal direction="up" className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              What We Do · Specialized Growth Practices
            </div>
            <h2 className={`display-lg ${styles.headline}`}>
              Digital Marketing Services{' '}
              <span className="accent-gradient">in Bhubaneswar.</span>
            </h2>
            <p className={`body-lg ${styles.subText}`}>
              Your business needs more than isolated marketing efforts. We build integrated strategies across search visibility, performance advertising, social media, and conversion-focused web solutions designed to generate qualified leads and drive real business growth.
            </p>
            <div className={styles.headerPills}>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> Full-Funnel Strategy
              </span>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> Qualified Lead Generation
              </span>
              <span className={styles.headerPill}>
                <span className={styles.pillDot} /> Measurable ROI
              </span>
            </div>
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

        {/* Bottom Actions: View More / View Less & Link to All Services */}
        <div className={styles.bottomActions}>
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
            <span>{showAll ? 'Show Fewer Practices' : 'View All 6 Practices'}</span>
            <span className={styles.toggleCount}>{showAll ? '↑' : '↓'}</span>
          </button>

          <Link href="/services" className={styles.allServicesLink}>
            <span>View Full Service Catalog</span>
            <span className={styles.allServicesArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
