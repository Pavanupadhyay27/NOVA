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

        {/* Tactile Skeuomorphic Button */}
        <Link href="/contact" className={styles.ctaBtn}>
          Let&apos;s Talk
          <span className={styles.btnArrow}>→</span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileLink}>Home</Link>
            <Link href="/services" className={styles.mobileLink}>Services & Practices</Link>
            <Link href="/work" className={styles.mobileLink}>Work & Case Studies</Link>
            <Link href="/about" className={styles.mobileLink}>About Nova Spark</Link>
            <Link href="/about/team" className={styles.mobileLink}>Leadership & Team</Link>
            <Link href="/process" className={styles.mobileLink}>Growth Process</Link>
            <Link href="/insights" className={styles.mobileLink}>Insights & Articles</Link>
          </nav>
          <div className={styles.mobileCTA}>
            <Link href="/contact" className="btn btn-primary w-full" style={{ justifyContent: 'center' }}>
              Start a Conversation →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
