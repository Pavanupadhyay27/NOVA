'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import styles from './Header.module.css';

const services = [
  { href: '/services/seo', label: 'SEO Services', desc: 'Rank #1 on Google in Bhubaneswar' },
  { href: '/services/google-ads', label: 'Google Ads / PPC', desc: 'High-ROI paid search campaigns' },
  { href: '/services/meta-ads', label: 'Meta Ads', desc: 'Facebook & Instagram growth ads' },
  { href: '/services/social-media', label: 'Social Media Marketing', desc: 'Build community & brand presence' },
  { href: '/services/web-development', label: 'Website Development', desc: 'Conversion-engineered websites' },
  { href: '/services/creative-branding', label: 'Branding & Creative Services', desc: 'Make your brand unforgettable' },
  { href: '/services/local-seo', label: 'Local SEO', desc: 'Dominate Bhubaneswar local search' },
  { href: '/services/ecommerce-marketing', label: 'E-commerce Marketing', desc: 'Scale your online store revenue' },
  { href: '/services/performance-marketing', label: 'Performance Marketing', desc: 'Turn ad spend into predictable revenue' },
  { href: '/services/ai-automation', label: 'Content Marketing', desc: 'Content that ranks and converts' },
];

const mobileLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/industries', label: 'Industries' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(true);
  }

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo Lockup (Stacked) */}
        <Link href="/" className={styles.logo} aria-label="Marketing Copilot Homepage">
          <Image
            src="/images/marketing-copilot-brand.png"
            alt="Marketing Copilot — Digital Marketing Agency Bhubaneswar"
            width={200}
            height={68}
            priority
            style={{ width: 'auto', height: '32px' }}
            className={styles.logoImg}
          />
          <div className={styles.brandTaglineCol}>
            <span className={styles.brandPrimaryText}>Your Business, Our Strategies</span>
            <span className={styles.brandSubText}>
              <span className={styles.brandSparkle}>✦</span> Powered by NovaSpark
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {/* Home */}
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' ? styles.engravedActive : ''}`}
          >
            Home
          </Link>

          {/* Services with dropdown */}
          <div
            className={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              className={`${styles.navLink} ${pathname.startsWith('/services') ? styles.engravedActive : ''}`}
            >
              Services
              <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor" style={{ marginLeft: 4 }}>
                <path d="M6 8L2 4h8L6 8z" />
              </svg>
            </Link>

            {servicesOpen && (
              <div
                className={styles.dropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.dropdownGrid}>
                  {services.map(s => (
                    <Link key={s.href} href={s.href} className={styles.dropdownItem}>
                      <span className={styles.dropdownLabel}>{s.label}</span>
                      <span className={styles.dropdownDesc}>{s.desc}</span>
                    </Link>
                  ))}
                </div>
                <div className={styles.dropdownFooter}>
                  <Link href="/services" className={styles.dropdownAll}>
                    Explore all 10 growth services <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Us */}
          <Link
            href="/about"
            className={`${styles.navLink} ${pathname.startsWith('/about') ? styles.engravedActive : ''}`}
          >
            About Us
          </Link>

          {/* Portfolio */}
          <Link
            href="/portfolio"
            className={`${styles.navLink} ${pathname.startsWith('/portfolio') ? styles.engravedActive : ''}`}
          >
            Portfolio
          </Link>

          {/* Industries */}
          <Link
            href="/industries"
            className={`${styles.navLink} ${pathname.startsWith('/industries') ? styles.engravedActive : ''}`}
          >
            Industries
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            className={`${styles.navLink} ${pathname.startsWith('/blog') ? styles.engravedActive : ''}`}
          >
            Blog
          </Link>

          {/* FAQ */}
          <Link
            href="/faq"
            className={`${styles.navLink} ${pathname === '/faq' ? styles.engravedActive : ''}`}
          >
            FAQ
          </Link>
        </nav>

        {/* CTA Button with revolving border beam (Strictly hidden on mobile) */}
        <BeamButton
          href="/contact"
          label="Let's Talk"
          size="md"
          wrapperClassName={styles.borderBeamWrapper}
        />

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => {
            const next = !menuOpen;
            setMenuOpen(next);
            if (next) setMobileServicesOpen(true);
          }}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Tactile Skeuomorphic Mobile Menu Pop Card */}
      {menuOpen && (
        <>
          <div
            className={styles.mobileBackdrop}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className={styles.mobileMenu}>
            {/* Skeuomorphic Glass Lip */}
            <span className={styles.menuGlassGloss} />

            {/* Cute Card Header Bar */}
            <div className={styles.mobileCardHeader}>
              <div className={styles.mobileMenuBadge}>
                <span className={styles.mobileBadgeDot} />
                <span>EXPLORE COPILOT</span>
              </div>
              <button
                type="button"
                className={styles.mobileCloseBtn}
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation card"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className={styles.mobileNav}>
              {mobileLinks.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                // Services Accordion Dropdown
                if (item.href === '/services') {
                  return (
                    <div key="services-accordion" className={styles.mobileAccordionWrapper}>
                      <button
                        type="button"
                        className={`${styles.mobileLink} ${styles.mobileAccordionBtn} ${isActive ? styles.mobileLinkActive : ''}`}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-expanded={mobileServicesOpen}
                      >
                        <div className={styles.mobileLabelGroup}>
                          <span className={styles.mobileLinkLabel}>Services</span>
                          <span className={styles.servicesCountPill}>10 Services</span>
                        </div>
                        <span className={`${styles.mobileChevronIcon} ${mobileServicesOpen ? styles.mobileChevronRotated : ''}`}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>

                      {/* Expandable Services Grid */}
                      {mobileServicesOpen && (
                        <div className={styles.mobileServicesSubmenu}>
                          <div className={styles.mobileServicesList}>
                            {services.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className={`${styles.mobileServiceItem} ${pathname === s.href ? styles.mobileServiceItemActive : ''}`}
                                onClick={() => setMenuOpen(false)}
                              >
                                <span className={styles.serviceDotIndicator} />
                                <div className={styles.serviceItemInfo}>
                                  <span className={styles.serviceItemLabel}>{s.label}</span>
                                  <span className={styles.serviceItemDesc}>{s.desc}</span>
                                </div>
                                <span className={styles.serviceSubArrow}>→</span>
                              </Link>
                            ))}
                          </div>
                          <Link
                            href="/services"
                            className={styles.mobileAllServicesBtn}
                            onClick={() => setMenuOpen(false)}
                          >
                            <span>Explore all 10 services hub</span>
                            <span>→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                // Standard Nav Links
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.mobileLinkLabel}>{item.label}</span>
                    <span className={styles.mobileLinkArrow}>→</span>
                  </Link>
                );
              })}
            </nav>

            {/* Tactile Skeuomorphic CTA Card Footer */}
            <div className={styles.mobileCTA}>
              <BeamButton
                href="/contact"
                label="Let's Talk — Free Consultation"
                size="md"
                fullWidth
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
