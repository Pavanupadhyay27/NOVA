'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';

const services = [
  { href: '/services/performance-marketing', label: 'Performance Marketing', desc: 'Turn ad spend into predictable revenue' },
  { href: '/services/seo', label: 'SEO & Organic Growth', desc: 'Dominate search and build compounding reach' },
  { href: '/services/social-media', label: 'Social Media & Content', desc: 'Turn attention into loyal engaged community' },
  { href: '/services/creative-branding', label: 'Creative & Branding', desc: 'Make your brand impossible to forget' },
  { href: '/services/web-development', label: 'Web & Technology', desc: 'Digital experiences engineered to convert' },
  { href: '/services/ai-automation', label: 'AI & Automation', desc: 'Scale smarter with intelligent agentic systems' },
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
        {/* Official Brand Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Nova Spark — Digital Marketing Agency"
            width={148}
            height={38}
            priority
            style={{ width: 'auto', height: '38px' }}
            className={styles.logoImg}
          />
        </Link>

        {/* Seamless Skeuomorphic Nav Links with Home */}
        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/' ? styles.engravedActive : ''}`}
          >
            Home
          </Link>

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
                <path d="M6 8L2 4h8L6 8z"/>
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
                    Explore all 6 growth practices <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/work" 
            className={`${styles.navLink} ${pathname.startsWith('/work') ? styles.engravedActive : ''}`}
          >
            Work
          </Link>
          
          <Link 
            href="/about" 
            className={`${styles.navLink} ${pathname === '/about' ? styles.engravedActive : ''}`}
          >
            About
          </Link>
          
          <Link 
            href="/about/team" 
            className={`${styles.navLink} ${pathname === '/about/team' ? styles.engravedActive : ''}`}
          >
            Team
          </Link>
          
          <Link 
            href="/process" 
            className={`${styles.navLink} ${pathname === '/process' ? styles.engravedActive : ''}`}
          >
            Process
          </Link>
          
          <Link 
            href="/insights" 
            className={`${styles.navLink} ${pathname.startsWith('/insights') ? styles.engravedActive : ''}`}
          >
            Insights
          </Link>
        </nav>

        {/* Tactile Skeuomorphic Button with Revolving Glowing Border Beam */}
        <div className={styles.borderBeamWrapper}>
          <div className={styles.borderGlowAmbient} />
          <div className={styles.borderBeamSpin} />
          <Link href="/contact" className={styles.ctaBtn}>
            Let&apos;s Talk
            <span className={styles.btnArrow}>→</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer & Animated Backdrop */}
      {menuOpen && (
        <>
          <div 
            className={styles.mobileBackdrop} 
            onClick={() => setMenuOpen(false)}
            aria-hidden="true" 
          />
          <div className={styles.mobileMenu}>
            {/* Top Status Header */}
            <div className={styles.mobileHeader}>
              <div className={styles.mobileStatusBadge}>
                <span className={styles.mobileStatusDot} />
                <span>Growth Lab · Bhubaneswar</span>
              </div>
              <button 
                className={styles.mobileCloseBtn} 
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Navigation Links Grid with Micro-Badges */}
            <nav className={styles.mobileNav}>
              {[
                { href: '/', label: 'Home', badge: '01', icon: '🏠' },
                { href: '/services', label: 'Services & Practices', badge: '02', icon: '⚡' },
                { href: '/work', label: 'Work & Case Studies', badge: '03', icon: '🏆' },
                { href: '/about', label: 'About Nova Spark', badge: '04', icon: '💡' },
                { href: '/about/team', label: 'Leadership & Team', badge: '05', icon: '👥' },
                { href: '/process', label: 'Execution Process', badge: '06', icon: '🎯' },
                { href: '/insights', label: 'Insights & Articles', badge: '07', icon: '📚' },
              ].map((item, i) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                    style={{ animationDelay: `${i * 0.04}s` }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className={styles.mobileLinkLeft}>
                      <span className={styles.mobileLinkIcon}>{item.icon}</span>
                      <span className={styles.mobileLinkLabel}>{item.label}</span>
                    </div>
                    <span className={styles.mobileLinkBadge}>{item.badge}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Quick Direct Contact Strip */}
            <div className={styles.mobileContactStrip}>
              <a href="tel:+918280788689" className={styles.mobileContactBtn}>
                <span className={styles.phoneIcon}>📞</span>
                <span>+91 82807 88689</span>
              </a>
              <a href="mailto:connect@novasparkdigitalmarketingagency.com" className={styles.mobileContactBtn}>
                <span className={styles.emailIcon}>✉️</span>
                <span>Email Us</span>
              </a>
            </div>

            {/* Bottom High-Impact CTA */}
            <div className={styles.mobileCTA}>
              <div className={styles.borderBeamWrapper} style={{ width: '100%' }}>
                <div className={styles.borderGlowAmbient} />
                <div className={styles.borderBeamSpin} />
                <Link 
                  href="/contact" 
                  className={styles.ctaBtn} 
                  style={{ width: '100%', justifyContent: 'center', minHeight: '46px', fontSize: '14.5px' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Start a Conversation
                  <span className={styles.btnArrow}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
