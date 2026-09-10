'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const services = [
  { href: '/services/performance-marketing', label: 'Performance Marketing' },
  { href: '/services/seo', label: 'SEO & Organic Growth' },
  { href: '/services/social-media', label: 'Social Media & Creators' },
  { href: '/services/creative-branding', label: 'Creative & Branding' },
  { href: '/services/web-development', label: 'Next.js & Web Tech' },
  { href: '/services/ai-automation', label: 'AI & Workflows' },
];

const company = [
  { href: '/about', label: 'About Nova Spark' },
  { href: '/work', label: 'Selected Case Studies' },
  { href: '/about/team', label: 'Executive Leadership' },
  { href: '/process', label: 'Our 5-Step Process' },
  { href: '/insights', label: 'Growth Intelligence' },
  { href: '/contact', label: 'Contact & RFPs' },
];

const industries = [
  { label: 'D2C & E-Commerce Brands' },
  { label: 'Real Estate Developers' },
  { label: 'Healthcare & Specialized Clinics' },
  { label: 'EdTech & Knowledge Platforms' },
  { label: 'Premium Hospitality & F&B' },
  { label: 'Funded Tech & B2B Startups' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {/* Top Pre-Footer Banner / Quick Connect */}
      <div className={styles.preFooter}>
        <div className="container">
          <div className={styles.preFooterCard}>
            <div className={styles.preFooterLeft}>
              <div className={styles.statusBadge}>
                <span className={styles.statusDot} />
                <span>Available for New Projects · Q3/Q4 2026</span>
              </div>
              <h3 className={styles.preFooterTitle}>
                Ready to engineer predictable, profitable growth?
              </h3>
              <p className={styles.preFooterSub}>
                Talk directly with our growth partners and get an audited preliminary roadmap for your brand within 24 hours.
              </p>
            </div>
            <div className={styles.preFooterRight}>
              <Link href="/contact" className={`btn btn-primary ${styles.primaryCta}`}>
                Start a Project
                <span className={styles.ctaArrow}>→</span>
              </Link>
              <a href="tel:+918280788689" className={styles.phoneChip}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+91 82807 88689</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Col 1: Brand & Identity */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/logo.png"
                  alt="Nova Spark — Digital Marketing Agency"
                  width={168}
                  height={44}
                  style={{ width: 'auto', height: '42px' }}
                  className={styles.footerLogoImg}
                />
              </Link>
              <p className={styles.brandDesc}>
                Full-funnel digital growth agency engineering predictable revenue engines, high-converting creative campaigns, and automated acquisition systems.
              </p>

              <div className={styles.locationPill}>
                <span className={styles.locPin}>📍</span>
                <span>Growth Lab: Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar — 751001</span>
              </div>

              <div className={styles.socials}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="YouTube">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Twitter / X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Growth Services</h4>
              <ul className={styles.links}>
                {services.map(s => (
                  <li key={s.href}>
                    <Link href={s.href} className={styles.link}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company & Work</h4>
              <ul className={styles.links}>
                {company.map(c => (
                  <li key={c.href}>
                    <Link href={c.href} className={styles.link}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Industries We Scale */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Industries</h4>
              <ul className={styles.industriesList}>
                {industries.map(ind => (
                  <li key={ind.label} className={styles.industryItem}>
                    <span className={styles.indBullet}>›</span>
                    <span>{ind.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Contact & SLA */}
            <div className={`${styles.col} ${styles.contactCol}`}>
              <h4 className={styles.colTitle}>Direct Connect</h4>
              <div className={styles.contactCard}>
                <div className={styles.contactRow}>
                  <span className={styles.contactTag}>Partnership Email</span>
                  <a href="mailto:connect@novasparkdigitalmarketingagency.com" className={styles.contactEmail}>
                    connect@novasparkdigitalmarketingagency.com
                  </a>
                </div>

                <div className={styles.contactRow}>
                  <span className={styles.contactTag}>Direct Phone</span>
                  <a href="tel:+918280788689" className={styles.contactPhone}>
                    +91 82807 88689
                  </a>
                </div>

                <div className={styles.slaBadge}>
                  <span className={styles.slaDot} />
                  <span>24-Hour Guaranteed Proposal SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <div className={styles.bottomLeft}>
              <p className={styles.copy}>
                © 2026 Nova Spark Digital Technologies Pvt. Ltd. All rights reserved.
              </p>
              <div className={styles.certBadge}>
                <span className={styles.certDot} />
                <span>Enterprise Growth Studio · Bhubaneswar, India</span>
              </div>
            </div>

            <div className={styles.bottomRight}>
              <div className={styles.legal}>
                <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
                <span className={styles.legalSep}>·</span>
                <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
                <span className={styles.legalSep}>·</span>
                <Link href="/contact" className={styles.legalLink}>Support & SLAs</Link>
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                className={styles.backToTop}
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <span className={styles.arrowUp}>↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
