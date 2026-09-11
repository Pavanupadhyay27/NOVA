'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  iconSrc: string;
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
    iconSrc: '/images/icons/seo.svg',
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
    iconSrc: '/images/icons/google-ads.svg',
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
    iconSrc: '/images/icons/meta-ads.svg',
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
    iconSrc: '/images/icons/social-media.svg',
  },
  {
    num: '05',
    category: 'Integrated Growth & Funnels',
    title: 'Digital Marketing & Content Strategy',
    tagline: 'Compounding Lead Generation & Local Dominance',
    desc: 'Reach customers searching for businesses near them and build a compounding digital footprint. Our integrated digital marketing and content strategy solutions help businesses generate qualified leads, strengthen visibility, and achieve measurable growth.',
    tags: [
      'Digital Marketing Strategy',
      'Content Strategy',
      'Local SEO & Maps',
      'Brand Positioning',
      'Lead Funnels',
      'Conversion Rate Optimization',
    ],
    href: '/services/seo',
    color: '#10B981',
    stat: '#1 Rank',
    statLabel: 'Local Map Pack',
    iconSrc: '/images/icons/digital-marketing.svg',
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
    iconSrc: '/images/icons/web-development.svg',
  },
  {
    num: '07',
    category: 'Brand Identity & Visual Design',
    title: 'Creative Branding & Logo Design',
    tagline: 'Distinctive Visual Identity & Market Positioning',
    desc: 'Transform your business into a recognizable, trusted brand with custom logo design, comprehensive visual identity systems, typography, color palettes, and brand guidelines that captivate your target audience.',
    tags: [
      'Logo Design',
      'Brand Identity',
      'Typography & Palettes',
      'Brand Guidelines',
      'Visual Assets',
      'Packaging & Print',
    ],
    href: '/services/creative-branding',
    color: '#8B5CF6',
    stat: '100+',
    statLabel: 'Brands Designed',
    iconSrc: '/images/icons/branding.svg',
  },
  {
    num: '08',
    category: 'Creator & Influence Growth',
    title: 'Influencer Marketing & Creator Campaigns',
    tagline: 'High-Authority Endorsements & Viral Brand Reach',
    desc: 'Leverage hyper-relevant regional and national influencers to amplify your product or service. We identify, negotiate, and execute ROI-focused creator campaigns that drive immediate credibility and surge conversions.',
    tags: [
      'Influencer Sourcing',
      'Creator Campaign Management',
      'UGC Production',
      'ROI Tracking',
      'Regional Creator Outreach',
    ],
    href: '/services/social-media',
    color: '#D97706',
    stat: '50M+',
    statLabel: 'Campaign Views',
    iconSrc: '/images/icons/influencer-marketing.svg',
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
              What We Do · Integrated Growth Practices
            </div>
            <h3 className={`display-lg ${styles.headline}`}>
              Best Digital Marketing Services{' '}
              <span className="accent-gradient">in Bhubaneswar</span>
            </h3>
            <p className={`body-lg ${styles.subText}`}>
              As a trusted digital marketing company in Bhubaneswar, we are able to provide you with integrated digital marketing services, including SEO, online marketing services, paid advertising, social media, and web solutions. Our digital marketing solutions help businesses generate qualified leads, strengthen visibility, and achieve measurable growth through strategic campaigns.
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
                      <Image
                        src={service.iconSrc}
                        alt={`${service.title} icon`}
                        width={30}
                        height={30}
                        className={styles.practiceIcon}
                      />
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

                    <h4 className={styles.practiceTitle}>{service.title}</h4>
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

        {/* View More / View Less Toggle Button */}
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
            <span>{showAll ? 'Show Fewer Practices' : `View All ${services.length} Practices`}</span>
            <span className={styles.toggleCount}>{showAll ? '↑' : '↓'}</span>
          </button>
        </div>

        {/* Centered High-Impact Skeuomorphic CTA Card */}
        <div className={styles.ctaCardWrapper}>
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <div className={styles.ctaCardGlow} />
              <div className={styles.ctaCardMesh} />

              {/* Centered Top Badge */}
              <div className={styles.ctaBadgeWrap}>
                <div className={styles.ctaBadge}>
                  <span className={styles.badgeDot} />
                  <span>Tailored Growth Strategy · Bhubaneswar &amp; Beyond</span>
                </div>
              </div>

              {/* Centered Typography (Concise & High Impact) */}
              <div className={styles.ctaHeadline}>
                Your Business Deserves a <span className="accent-gradient">Strategy That Delivers</span>
              </div>

              <p className={styles.ctaSubtext}>
                Create a tailored growth plan across Search, Paid Media, and web solutions, built to strengthen your online presence, convert more visitors, and maximize the return on your marketing investment.
              </p>

              {/* Centered Feature Capability Pills */}
              <div className={styles.ctaPillsRow}>
                <div className={styles.ctaPill}>
                  <span className={styles.pillIcon}>📊</span>
                  <span>Full-Funnel &amp; SERP Audit</span>
                </div>
                <div className={styles.ctaPill}>
                  <span className={styles.pillIcon}>🎯</span>
                  <span>High-Intent Lead Pipelines</span>
                </div>
                <div className={styles.ctaPill}>
                  <span className={styles.pillIcon}>📈</span>
                  <span>Compounding ROAS Scaling</span>
                </div>
              </div>

              {/* Centered Skeuomorphic Button & Trust Verification (At the Bottom of Card) */}
              <div className={styles.ctaBottomCenter}>
                <div className={styles.borderBeamWrapper}>
                  <div className={styles.borderGlowAmbient} />
                  <div className={styles.borderBeamSpin} />

                  <Link href="/contact" className={styles.btnCtaMain}>
                    <span className={styles.btnShimmer} />
                    <span className={styles.btnGlassGloss} />
                    <span className={styles.btnLabel}>Book Free Strategy Consultation</span>
                    <span className={styles.btnArrow}>→</span>
                  </Link>
                </div>

                <div className={styles.ctaTrustStrip}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustCheck}>✓</span>
                    <span>100% Free 30-Min Call</span>
                  </div>
                  <span className={styles.trustSep}>•</span>
                  <div className={styles.trustItem}>
                    <span className={styles.trustCheck}>✓</span>
                    <span>Custom Growth Blueprint</span>
                  </div>
                  <span className={styles.trustSep}>•</span>
                  <div className={styles.trustItem}>
                    <span className={styles.trustCheck}>✓</span>
                    <span>Zero Obligation</span>
                  </div>
                </div>

                <div className={styles.catalogLinkRow}>
                  <Link href="/services" className={styles.catalogLink}>
                    <span>Or Explore Complete Service Directory</span>
                    <span className={styles.catalogArrow}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
