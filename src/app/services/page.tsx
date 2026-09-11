import type { Metadata } from 'next';
import Link from 'next/link';
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'SEO & Organic Growth',
    desc: 'Dominate search results and build authority that compounds. Technical excellence, content strategy, and local SEO to make you impossible to ignore.',
    features: ['Technical SEO Audits', 'Local SEO & Maps', 'Content Strategy', 'Link Building', 'Keyword Intelligence', 'Conversion Optimization'],
    stat: '+187% Avg Traffic',
    color: '#0D007F',
    href: '/services/seo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Social Media & Content',
    desc: 'Build an audience that chooses you. Strategy, content creation, community management, and influencer partnerships across all platforms.',
    features: ['Social Strategy', 'Content Production', 'Community Management', 'Influencer Marketing', 'Reels & Short Form', 'Analytics & Reporting'],
    stat: '+320% Avg Reach',
    color: '#F59E0B',
    href: '/services/social-media',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Creative & Branding',
    desc: 'Make your brand impossible to forget. Identity, campaigns, motion graphics, and creative production that demands attention and builds recall.',
    features: ['Brand Identity & Logo', 'Campaign Creatives', 'Motion & Animation', 'Packaging Design', 'Social Creatives', 'Visual Guidelines'],
    stat: '100+ Brands Built',
    color: '#EC4899',
    href: '/services/creative-branding',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Web & Technology',
    desc: 'Digital experiences engineered to convert. From landing pages to full web applications — fast, beautiful, and built to grow.',
    features: ['Web Design & UI/UX', 'Frontend Development', 'E-commerce Stores', 'Landing Pages', 'CRO & A/B Testing', 'Analytics Setup'],
    stat: '+256% Avg Conversion',
    color: '#34D399',
    href: '/services/web-development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'AI & Automation',
    desc: 'Scale smarter with intelligent workflows. AI-powered content, lead automation, customer support, and marketing intelligence systems.',
    features: ['AI Content Generation', 'Lead Qualification AI', 'CRM Automation', 'Chatbot Systems', 'Workflow Automation', 'Predictive Analytics'],
    stat: '-60% Operational Cost',
    color: '#60A5FA',
    href: '/services/ai-automation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
        <rect x="4" y="8" width="16" height="12" rx="2"></rect>
        <path d="M9 13v2"></path>
        <path d="M15 13v2"></path>
      </svg>
    ),
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
                  We combine six disciplines into one coherent growth system — so every effort compounds and every rupee spent works harder.
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
                      <div className={styles.cardIcon} style={{ background: `${s.color}18`, color: s.color }}>
                        {s.icon}
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
