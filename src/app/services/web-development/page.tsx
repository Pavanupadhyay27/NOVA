'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import WebDevSpeedSimulator from './_components/WebDevSpeedSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import WebDevWorkstation from './_components/WebDevWorkstation';
import WebDevRoiCalculator from './_components/WebDevRoiCalculator';
import WebDevComparisonMatrix from './_components/WebDevComparisonMatrix';
import WebDevRoadmap from './_components/WebDevRoadmap';

import styles from './web-dev-page.module.css';

const webDevArsenal = [
  {
    name: 'Next.js 15 App Router',
    category: 'Sub-Second React Framework',
    desc: 'Server components, streaming SSR, and zero client hydration delays for sub-800ms loading across Bhubaneswar.',
    status: 'NEXT.JS 15 READY',
    icon: '⚡',
  },
  {
    name: 'TypeScript & React 19',
    category: 'Type-Safe Architecture',
    desc: 'Enterprise-grade code reliability, strict compile-time checks, and maintainable component hierarchies.',
    status: 'TYPE-SAFE',
    icon: '🛡️',
  },
  {
    name: 'Cloudflare Enterprise Edge',
    category: 'Global CDN & Security',
    desc: 'Edge caching in Mumbai & Hyderabad nodes delivering sub-40ms TTFB and automated DDoS mitigation.',
    status: 'EDGE DEPLOYED',
    icon: '🌐',
  },
  {
    name: 'Razorpay & Cashfree UPI',
    category: '1-Click Indian Payments',
    desc: 'Instant dynamic UPI QR codes, credit card, netbanking, and recurring subscription checkouts.',
    status: 'UPI NATIVE',
    icon: '💳',
  },
  {
    name: 'Google Core Web Vitals SLA',
    category: 'Search Ranking Moat',
    desc: 'Guaranteed 98+ PageSpeed, LCP under 0.8s, and CLS 0.00 ensuring direct organic ranking advantages.',
    status: '99/100 SLA',
    icon: '🚀',
  },
  {
    name: 'WhatsApp Business Webhooks',
    category: 'Instant Lead Dispatch',
    desc: 'Immediate routing of incoming form submissions and quote inquiries directly into executive WhatsApp chats.',
    status: 'SUB-30S ROUTING',
    icon: '💬',
  },
];

const webDevFaqs = [
  {
    q: 'Why does Marketing Copilot build custom Next.js websites instead of standard WordPress?',
    a: 'Next.js delivers near-instant page loads (under 800ms), scores 98+ on Google PageSpeed, offers zero vulnerability to PHP malware exploits, and ranks significantly better on Google. WordPress sites in Bhubaneswar typically suffer from plugin bloat, taking 4 to 7 seconds to load on mobile connections, causing 60%+ visitor bounce rates.',
    takeaway: 'Next.js preserves your ad spend and maximizes conversion velocity with sub-second page rendering.',
  },
  {
    q: 'How fast can our new website be designed, engineered, and launched?',
    a: 'Our standard production sprint takes 30 days from initial Figma wireframe approval to production deployment on Cloudflare Edge. For high-priority campaign landing pages or e-commerce catalog launches, we offer accelerated 14-day sprints.',
    takeaway: 'Disciplined agile milestone delivery ensures you go live on time with zero technical debt.',
  },
  {
    q: 'Will our website work flawlessly across all mobile smartphones in Odisha?',
    a: 'Yes. Every interface is designed strictly mobile-first. We rigorously test across iPhone, Samsung, Xiaomi, and Vivo devices on 4G and 5G networks to ensure responsive typography, thumb-friendly tap targets, and zero horizontal scrolling.',
    takeaway: 'Over 82% of Bhubaneswar web traffic is mobile — our mobile-first ergonomics capture every visit.',
  },
  {
    q: 'Can our internal team easily update blog posts, prices, and team members?',
    a: 'Absolutely. We configure an intuitive headless Content Management System (Sanity, Strapi, or Supabase) with a clean dashboard, allowing your team to update content, publish case studies, and manage inquiries without writing any code.',
    takeaway: 'You maintain full independent control over your business content with zero agency lock-in.',
  },
  {
    q: 'Do you integrate Indian payment gateways like UPI and Razorpay?',
    a: 'Yes. We natively integrate Razorpay, Cashfree, and PayU with 1-click UPI (Google Pay, PhonePe, Paytm), dynamic QR codes, net banking, and automated WhatsApp order confirmations.',
    takeaway: 'Frictionless checkout flows increase purchase completion by up to 34% compared to standard cart forms.',
  },
];

export default function WebDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. CENTERED CINEMATIC HERO
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>#1 Web Engineering &amp; Next.js Studio in Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Websites Built for Bhubaneswar Brands to Win.{' '}
                <span className="accent-gradient">Sub-Second Speed. Max Conversions.</span>
              </h1>

              <p className={styles.heroSub}>
                We design and build bespoke Next.js web applications that don’t just look stunning — they convert mobile visitors into paying customers. 99/100 PageSpeed scores, 1-click UPI checkout, and hardcoded Google local SEO schema.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Claim Free Speed &amp; Code Audit" size="lg" />
                <a href="#speed-lab" className={styles.heroSecondaryBtn}>
                  <span>Explore Speed Lab &amp; Architecture</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>MC</span>
                  <span className={styles.trustAvatar}>BB</span>
                  <span className={styles.trustAvatar}>OD</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+50</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Rated 4.9/5 by 50+ Bhubaneswar &amp; Odisha Brands
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>&lt; 0.8s</span>
                <span className={styles.tLabel}>Mobile Load Speed</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>99/100</span>
                <span className={styles.tLabel}>Google PageSpeed SLA</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>+280%</span>
                <span className={styles.tLabel}>Lead Conversion Lift</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>99.99%</span>
                <span className={styles.tLabel}>Cloud Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. INTERACTIVE SPEED & ARCHITECTURE LAB
         ══════════════════════════════════════════════════ */}
      <WebDevSpeedSimulator />

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. TECHNICAL CAPABILITIES WORKSTATION
         ══════════════════════════════════════════════════ */}
      <WebDevWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE SPEED & REVENUE ENGINE
         ══════════════════════════════════════════════════ */}
      <WebDevRoiCalculator />

      {/* ══════════════════════════════════════════════════
          6. THE COPILOT ENGINEERING STANDARD (MATRIX)
         ══════════════════════════════════════════════════ */}
      <WebDevComparisonMatrix />

      {/* ══════════════════════════════════════════════════
          7. 30-DAY AGILE SPRINT ROADMAP
         ══════════════════════════════════════════════════ */}
      <WebDevRoadmap />

      {/* ══════════════════════════════════════════════════
          8. EDITORIAL CASE STUDY SHOWCASE
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.editorialContainer}>
              <div className={styles.editorialContent}>
                <div className={styles.editorialBadge}>
                  <span className={styles.badgeDot} />
                  <span>Verified Web Engineering Case Study · Healthcare Clinic</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  MediCare Diagnostics &amp; Super-Specialty Clinic
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Khandagiri &amp; Patia, Bhubaneswar
                </div>

                <p className={styles.editorialDesc}>
                  MediCare was losing over 65% of mobile patient inquiries due to an outdated, slow WordPress site that took 6.8 seconds to load. Marketing Copilot re-engineered their entire digital footprint on Next.js 15, adding one-click WhatsApp appointment booking and instant test report downloads.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Our website loading speed dropped from 7 seconds to under 0.7 seconds on mobile. Patient inquiries via WhatsApp and online booking increased by 280% within the first 30 days of launch.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Managing Director, MediCare Healthcare Group
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                    alt="MediCare Diagnostics Web Platform Bhubaneswar"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>PageSpeed 99/100 · Khandagiri Hub</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>0.6s</div>
                    <div className={styles.kpiSub}>Mobile Load Speed</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>+280%</div>
                    <div className={styles.kpiSub}>WhatsApp Bookings</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>100%</div>
                    <div className={styles.kpiSub}>Core Web Vitals Pass</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. ENTERPRISE TECH STACK ARSENAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Full-Stack Engineering</span>
            </div>
            <h3 className="display-sm" style={{ color: '#0F172A', marginBottom: 8 }}>
              Modern Web Technologies <span className="accent-gradient">Engineered for Scale</span>
            </h3>
            <p className="body-sm" style={{ color: '#64748B', maxWidth: 620, margin: '0 auto 28px' }}>
              Enterprise toolchains and sub-second web frameworks deployed across Bhubaneswar client platforms.
            </p>

            <div className={styles.arsenalGrid}>
              {webDevArsenal.map((t) => (
                <div key={t.name} className={styles.specCard}>
                  <div className={styles.specCardHeader}>
                    <div className={styles.specIconBox}>{t.icon}</div>
                    <span className={styles.specStatus}>{t.status}</span>
                  </div>
                  <h4 className={styles.specTitle}>{t.name}</h4>
                  <span className={styles.specCategory}>{t.category}</span>
                  <p className={styles.specDesc}>{t.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. MINIMALIST HAIRLINE FAQ LIST
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Direct Answers</span>
            </div>
            <h3 className="display-md" style={{ color: '#0F172A', marginBottom: 10 }}>
              Frequently Asked <span className="accent-gradient">Web Engineering Questions</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 580, margin: '0 auto' }}>
              Transparent answers on Next.js performance, development timelines, mobile responsiveness, and ROI for Bhubaneswar business owners.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {webDevFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.faqIcon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqPane}>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                      <div className={styles.faqTakeaway}>
                        <span>💡 Strategic Takeaway:</span>
                        <span>{faq.takeaway}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          11. EXECUTIVE BOTTOM CONVERSION TERMINAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.executiveTerminal}>
              <div className={styles.termGlow} />
              <div>
                <span className={styles.termPill}>SCHEDULE CODE AUDIT</span>
                <h3 className={styles.termTitle}>
                  Ready for a Sub-Second Website That Multiplies Your Inquiries?
                </h3>
                <p className={styles.termSub}>
                  Claim your free 30-minute forensic code and speed audit. We will analyze your Core Web Vitals, identify mobile conversion drop-off points, and model your Next.js growth roadmap across Odisha.
                </p>
                <div className={styles.termContact}>
                  <span>📞 Direct Hotline:</span>
                  <a href="tel:+919437168434" className={styles.termPhone}>
                    +91 94371 68434
                  </a>
                  <span>·</span>
                  <span>HQ: Kharvela Nagar, Unit 3, Bhubaneswar</span>
                </div>
              </div>

              <div className={styles.termActions}>
                <Link href="/contact" className={styles.termAuditBtn}>
                  <span>Claim Free Speed &amp; Code Audit</span>
                  <span>→</span>
                </Link>

                <a
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20audit%20my%20business%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.termWhatsAppBtn}
                >
                  <span>💬 WhatsApp Our Lead Web Engineer</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
