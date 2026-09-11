import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services — Digital Marketing, SEO, Performance & Creative',
  description: 'Comprehensive digital growth services: Performance Marketing, SEO, Social Media, Creative & Branding, Web Development, and AI Automation.',
};

const services = [
  {
    num: '01',
    title: 'Performance Marketing',
    desc: 'Turn advertising into predictable, scalable growth. We engineer campaigns across Google, Meta, LinkedIn, and YouTube that generate measurable ROAS.',
    features: ['Google Search & Display', 'Meta Ads (Facebook/Instagram)', 'LinkedIn B2B Campaigns', 'YouTube & Video Ads', 'Retargeting & Remarketing', 'Programmatic Advertising'],
    stat: '8X Avg ROAS',
    color: '#0B2093',
    href: '/services/performance-marketing',
    iconSrc: '/images/icons/google-ads.svg',
  },
  {
    num: '02',
    title: 'SEO & Organic Growth',
    desc: 'Dominate search results and build authority that compounds. Technical excellence, content strategy, and local SEO to make you impossible to ignore.',
    features: ['Technical SEO Audits', 'Local SEO & Maps', 'Content Strategy', 'Link Building', 'Keyword Intelligence', 'Conversion Optimization'],
    stat: '+187% Avg Traffic',
    color: '#0D007F',
    href: '/services/seo',
    iconSrc: '/images/icons/seo.svg',
  },
  {
    num: '03',
    title: 'Social Media & Content',
    desc: 'Build an audience that chooses you. Strategy, content creation, community management, and influencer partnerships across all platforms.',
    features: ['Social Strategy', 'Content Production', 'Community Management', 'Influencer Marketing', 'Reels & Short Form', 'Analytics & Reporting'],
    stat: '+320% Avg Reach',
    color: '#F59E0B',
    href: '/services/social-media',
    iconSrc: '/images/icons/social-media.svg',
  },
  {
    num: '04',
    title: 'Creative & Branding',
    desc: 'Make your brand impossible to forget. Identity, campaigns, motion graphics, and creative production that demands attention and builds recall.',
    features: ['Brand Identity & Logo', 'Campaign Creatives', 'Motion & Animation', 'Packaging Design', 'Social Creatives', 'Visual Guidelines'],
    stat: '100+ Brands Built',
    color: '#EC4899',
    href: '/services/creative-branding',
    iconSrc: '/images/icons/branding.svg',
  },
  {
    num: '05',
    title: 'Web & Technology',
    desc: 'Digital experiences engineered to convert. From landing pages to full web applications — fast, beautiful, and built to grow.',
    features: ['Web Design & UI/UX', 'Frontend Development', 'E-commerce Stores', 'Landing Pages', 'CRO & A/B Testing', 'Analytics Setup'],
    stat: '+256% Avg Conversion',
    color: '#34D399',
    href: '/services/web-development',
    iconSrc: '/images/icons/web-development.svg',
  },
  {
    num: '06',
    title: 'Digital Marketing & Strategy',
    desc: 'Scale smarter with integrated full-funnel digital marketing, omnichannel tracking, automated bidding systems, and compounding growth funnels.',
    features: ['Digital Marketing Strategy', 'Lead Qualification Automation', 'CRM Integration', 'Omnichannel Attribution', 'Conversion Funnels', 'Growth Auditing'],
    stat: '-60% Cost Per Lead',
    color: '#10B981',
    href: '/services/ai-automation',
    iconSrc: '/images/icons/digital-marketing.svg',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className={styles.page}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <div className={styles.heroContent}>
              <ScrollReveal className="text-center">
                <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
                  <span className="eyebrow-dot" />
                  Services & Capabilities
                </div>
                <h1 className={`display-xl ${styles.heroTitle}`}>
                  Growth doesn&apos;t happen<br />
                  <span className="accent-gradient">by accident.</span>
                </h1>
                <p className={`body-lg ${styles.heroSub}`}>
                  We combine integrated disciplines into one coherent growth system — so every effort compounds and every rupee spent works harder.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className={styles.servicesSection}>
          <div className="container">
            <div className={styles.grid}>
              {services.map((s, i) => (
                <ScrollReveal key={s.num} delay={i * 80}>
                  <Link href={s.href} className={`${styles.card} card`} style={{ '--c': s.color } as React.CSSProperties}>
                    <div className={styles.cardTop}>
                      <div className={styles.cardIcon} style={{ background: `${s.color}18`, borderColor: `${s.color}35` }}>
                        <Image
                          src={s.iconSrc}
                          alt={`${s.title} icon`}
                          width={28}
                          height={28}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <span className={styles.cardNum}>{s.num}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{s.title}</h2>
                    <p className={styles.cardDesc}>{s.desc}</p>
                    <ul className={styles.features}>
                      {s.features.map(f => (
                        <li key={f} className={styles.feature}>
                          <span className={styles.featureDot} style={{ background: s.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.cardFooter}>
                      <span className={styles.stat} style={{ color: s.color }}>{s.stat}</span>
                      <span className={styles.cardArrow}>→</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
