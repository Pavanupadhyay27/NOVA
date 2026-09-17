'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

const cases = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    color: '#0B2093',
    service: 'SEO + Google Ads',
    category: 'SEO',
    industry: 'Real Estate',
    title: 'Bhubaneswar Real Estate Developer — 3X Lead Volume in 90 Days',
    desc: 'Hyperlocal SEO and Google Ads campaigns targeting luxury property buyers across Patia, Khandagiri, and Cuttack. Dominated "flats in Bhubaneswar" and generated 90+ verified buyer leads monthly.',
    stats: [
      { val: '+287%', label: 'Organic Leads' },
      { val: '6.2X', label: 'Google Ads ROAS' },
    ],
    tagColor: '#0B2093',
  },
  {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    color: '#10B981',
    service: 'Local SEO',
    category: 'SEO',
    industry: 'Healthcare',
    title: 'Bhubaneswar Multi-Specialty Clinic — #1 on Google Maps 3-Pack',
    desc: 'Complete Google Business Profile optimization, review acceleration, and local citation cleanup. Ranked #1 across Bhubaneswar for 14 high-intent medical queries, growing patient phone calls by 190%.',
    stats: [
      { val: '#1 Rank', label: 'Google Maps 3-Pack' },
      { val: '+190%', label: 'Patient Phone Calls' },
    ],
    tagColor: '#10B981',
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    color: '#7C3AED',
    service: 'Meta Ads',
    category: 'Meta Ads',
    industry: 'Education',
    title: 'Bhubaneswar Coaching Institute — 400+ Admissions via Social Ads',
    desc: 'Full-funnel Meta Ads strategy targeting competitive exam aspirants and parents across Odisha. Native instant lead forms linked directly to automated WhatsApp counselors.',
    stats: [
      { val: '400+', label: 'Admissions Closed' },
      { val: '₹140', label: 'Cost Per Lead' },
    ],
    tagColor: '#7C3AED',
  },
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    color: '#F59E0B',
    service: 'E-commerce Marketing',
    category: 'E-commerce',
    industry: 'Retail & D2C',
    title: 'Odisha Handicrafts & Apparel Brand — Scaled to ₹50L/Month Online',
    desc: 'Google Shopping, Meta Dynamic Catalog ads, and automated WhatsApp abandoned cart recovery for a Bhubaneswar-based brand, expanding sales to tier-1 metro markets across India.',
    stats: [
      { val: '₹50L+', label: 'Monthly Revenue' },
      { val: '4.8X', label: 'Return on Ad Spend' },
    ],
    tagColor: '#F59E0B',
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    color: '#EC4899',
    service: 'Social Media + Branding',
    category: 'Social Media',
    industry: 'Hospitality & Dining',
    title: 'Bhubaneswar Fine Dining Restobar — 50K Followers & Full Bookings',
    desc: 'Cinematic food Reels production, menu redesign, and local food creator drops. Made their Patia and Saheed Nagar locations the most sought-after weekend reservation spots.',
    stats: [
      { val: '50K+', label: 'Local Followers' },
      { val: '+320%', label: 'Weekend Footfall' },
    ],
    tagColor: '#EC4899',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
    color: '#34D399',
    service: 'Web Development + SEO',
    category: 'Web Development',
    industry: 'Engineering & Infra',
    title: 'Commercial Infrastructure Firm — New Next.js Web Portal Drove 180% More RFQs',
    desc: 'Engineered a sub-second Next.js web application with interactive project showcases and technical SEO foundations. Ranked top-3 for all major Bhubaneswar B2B construction queries.',
    stats: [
      { val: '+180%', label: 'Commercial RFQ Leads' },
      { val: '< 0.8s', label: 'Page Load Speed' },
    ],
    tagColor: '#34D399',
  },
];

const filters = ['All', 'SEO', 'Meta Ads', 'Social Media', 'Web Development', 'E-commerce'];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCases = activeFilter === 'All'
    ? cases
    : cases.filter(c => c.category === activeFilter || c.service.includes(activeFilter));

  return (
    <>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <div className={styles.heroContent}>
              <ScrollReveal>
                <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
                  <span className="eyebrow-dot" />
                  Verified Case Studies
                </div>
                <h1 className={`display-xl ${styles.heroTitle}`}>
                  Real Results for Real<br />
                  <span className="accent-gradient">Bhubaneswar Businesses.</span>
                </h1>
                <p className={`body-lg ${styles.heroSub}`}>
                  We don&apos;t just talk about growth — we engineer it and audit it. Browse our portfolio of verified client campaigns with real revenue outcomes across Odisha.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Filter Tabs & Grid */}
        <div className="container">
          {/* Filter Tabs */}
          <ScrollReveal>
            <div className={styles.filterSection}>
              <div className={styles.filters}>
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className={styles.grid}>
            {filteredCases.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 70}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <div className={styles.card}>
                    {/* Real Non-AI Photography */}
                    <div className={styles.cardImg}>
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.6) 100%)'
                      }} />
                      <span style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(6px)',
                        padding: '4px 10px',
                        borderRadius: 100,
                        fontSize: 11,
                        fontWeight: 700,
                        color: c.color,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}>
                        {c.industry}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span
                          className={styles.tag}
                          style={{ background: `${c.tagColor}14`, color: c.tagColor }}
                        >
                          {c.service}
                        </span>
                        <span className={styles.industry}>Bhubaneswar, Odisha</span>
                      </div>
                      <h2 className={styles.cardTitle}>{c.title}</h2>
                      <p className={styles.cardDesc}>{c.desc}</p>
                      <div className={styles.stats}>
                        {c.stats.map(s => (
                          <div key={s.label} className={styles.stat}>
                            <span className={styles.statVal} style={{ color: c.color }}>{s.val}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                          </div>
                        ))}
                        <div style={{ flex: 1 }} />
                        <span className={styles.cardArrow}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal className="text-center" style={{ paddingBottom: 64 }}>
            <p className="body-lg" style={{ marginBottom: 24, color: '#475569' }}>
              Want predictable revenue results like these for your Bhubaneswar business?
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Book Free Bhubaneswar Strategy Session <span className="btn-arrow">→</span>
              </Link>
              <a
                href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20saw%20your%20case%20studies%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <CTASection />
    </>
  );
}
