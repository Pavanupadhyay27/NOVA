'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
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
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

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
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Marketing Copilot Homepage">
          <Image
            src="/images/marketing-copilot-transparent.png"
            alt="Marketing Copilot — Digital Marketing Agency Bhubaneswar"
            width={200}
            height={68}
            priority
            style={{ width: 'auto', height: '44px' }}
            className={styles.logoImg}
          />
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

        {/* CTA Button with revolving border beam */}
        <div className={styles.borderBeamWrapper}>
          <div className={styles.borderGlowAmbient} />
          <div className={styles.borderBeamSpin} />
          <Link href="/contact" className={styles.ctaBtn}>
            <span className={styles.btnShimmer} />
            <span className={styles.btnGlassGloss} />
            <span>Let&apos;s Talk</span>
            <span className={styles.btnArrow}>→</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className={styles.mobileBackdrop}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              {mobileLinks.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
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
            <div className={styles.mobileCTA}>
              <Link
                href="/contact"
                className="btn btn-primary w-full"
                style={{ justifyContent: 'center', width: '100%', padding: '13px 20px', fontSize: '14.5px' }}
                onClick={() => setMenuOpen(false)}
              >
                Start a Conversation →
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
