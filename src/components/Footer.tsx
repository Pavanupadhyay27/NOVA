import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const services = [
  { href: '/services/performance-marketing', label: 'Performance Marketing' },
  { href: '/services/seo', label: 'SEO & Organic Growth' },
  { href: '/services/social-media', label: 'Social Media' },
  { href: '/services/creative-branding', label: 'Creative & Branding' },
  { href: '/services/web-development', label: 'Web & Technology' },
  { href: '/services/ai-automation', label: 'AI & Automation' },
];

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/work', label: 'Our Work' },
  { href: '/about/team', label: 'Team' },
  { href: '/process', label: 'Process' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/logo.png"
                  alt="Nova Spark — Digital Marketing Agency"
                  width={160}
                  height={42}
                  style={{ width: 'auto', height: '42px' }}
                  className={styles.footerLogoImg}
                />
              </Link>
              <p className={styles.tagline}>
                Digital growth for<br />ambitious brands.
              </p>
              <div className={styles.socials}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Twitter/X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.links}>
                {services.map(s => (
                  <li key={s.href}>
                    <Link href={s.href} className={styles.link}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.links}>
                {company.map(c => (
                  <li key={c.href}>
                    <Link href={c.href} className={styles.link}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Get in Touch</h4>
              <div className={styles.contactInfo}>
                <a href="mailto:hello@novaspark.in" className={styles.contactLink}>
                  hello@novaspark.in
                </a>
                <p className={styles.address}>Bhubaneswar, Odisha<br />India — 751001</p>
                <p className={styles.hours}>Mon – Fri · 9:00 – 18:00 IST</p>
              </div>
              <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                Start a Project →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>© 2026 Nova Spark. All rights reserved.</p>
            <div className={styles.legal}>
              <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
              <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
