import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Industries We Serve in Bhubaneswar — Digital Marketing by Sector | Marketing Copilot',
  description: 'Industry-specific digital marketing solutions for Bhubaneswar businesses by Marketing Copilot. Real estate, healthcare, education, retail, hospitality, manufacturing and more.',
};

const industries = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    color: '#0B2093',
    title: 'Real Estate & Builders',
    desc: 'Generate high-intent apartment and villa buyers across Patia, Khandagiri, and Jaydev Vihar. Local SEO, Google Ads, and high-converting virtual tour landing pages that fill your sales pipeline with serious buyers.',
    services: ['Local SEO', 'Google Search Ads', 'Meta Lead Ads', 'Next.js Landing Pages'],
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    color: '#10B981',
    title: 'Healthcare, Clinics & Diagnostics',
    desc: 'Attract patients in Bhubaneswar with Google Maps 3-Pack dominance, patient review velocity, and doctor appointment booking funnels for hospitals, dental clinics, and diagnostic chains in Odisha.',
    services: ['Google Maps 3-Pack', 'GBP Optimization', 'WhatsApp Appointment Bot', 'Patient CRO'],
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    color: '#7C3AED',
    title: 'Education, Universities & Coaching',
    desc: 'Fill your classrooms with qualified student admissions from Bhubaneswar, Cuttack, and across Odisha. High-converting Meta ads, YouTube video storytelling, and automated counseling follow-ups.',
    services: ['Meta Lead Ads', 'YouTube Video Ads', 'Admission SEO', 'WhatsApp Counseling CRM'],
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    color: '#F59E0B',
    title: 'Retail & E-commerce D2C',
    desc: 'Drive walk-ins to your Bhubaneswar showroom and scale your online store nationwide. Google Shopping feeds, Instagram dynamic catalog ads, and automated WhatsApp abandoned cart recovery.',
    services: ['E-commerce SEO', 'Google Shopping Ads', 'Catalog Retargeting', 'WhatsApp Cart Recovery'],
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    color: '#EC4899',
    title: 'Hospitality, Dining & Cafes',
    desc: 'Turn your Bhubaneswar restaurant, cafe, or boutique resort into the city’s most viral weekend destination. Cinematic food Reels, local creator drops, and Google Maps local dominance.',
    services: ['Instagram Reels Production', 'Odisha Food Creator Drops', 'Google Maps Reviews', 'Table Booking Funnels'],
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
    color: '#34D399',
    title: 'Construction & Infrastructure',
    desc: 'Win commercial contracts, government tenders, and private infrastructure projects in Odisha. B2B LinkedIn marketing, authority web engineering, and commercial keyword rankings.',
    services: ['B2B SEO', 'Corporate Web Portals', 'LinkedIn Account B2B', 'RFQ Lead Architecture'],
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    color: '#6366F1',
    title: 'Professional Services & Law',
    desc: 'Generate high-ticket advisory and corporate inquiries for CA firms, corporate lawyers, and enterprise consultants in Bhubaneswar with thought-leadership content and search ads.',
    services: ['Local Search Intent', 'Google Ads', 'LinkedIn Thought Leadership', 'High-Trust UX'],
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    color: '#64748B',
    title: 'Manufacturing & Industrial Export',
    desc: 'Expand customer reach from Mancheswar and Rasulgarh industrial estates to pan-India and global buyers. Technical B2B catalog SEO, IndiaMart optimization, and corporate pitch materials.',
    services: ['B2B Search Marketing', 'Export Directory SEO', 'Digital Pitch Decks', 'Global Web Inquiries'],
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    color: '#F97316',
    title: 'Automotive & Dealerships',
    desc: 'Drive showroom footfall and test-drive bookings across Bhubaneswar with precision geo-fenced Google Ads and Meta campaigns for automotive dealers and aftermarket service centers.',
    services: ['Geo-Fenced Ads', 'Test-Drive Booking Forms', 'Local 3-Pack Rank', 'Dynamic Remarketing'],
    href: '/contact',
  },
];

const whyStats = [
  { val: '150+', label: 'Bhubaneswar Clients Scaled', color: '#0B2093' },
  { val: '9+', label: 'Specialized Industry Verticals', color: '#F59E0B' },
  { val: '98%', label: 'Long-Term Client Retention', color: '#10B981' },
  { val: '₹25Cr+', label: 'Revenue Generated in Odisha', color: '#7C3AED' },
];

export default function IndustriesPage() {
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
                  Tailored Sector Expertise
                </div>
                <h1 className={`display-xl ${styles.heroTitle}`}>
                  Bhubaneswar Digital Marketing<br />
                  <span className="accent-gradient">Built for Your Industry.</span>
                </h1>
                <p className={`body-lg ${styles.heroSub}`}>
                  Generic marketing fails because every industry has unique customer psychology, sales cycles, and pricing dynamics. We build bespoke acquisition engines tailored specifically to your sector in Bhubaneswar.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className={styles.industriesSection}>
          <div className="container">
            <div className={styles.grid}>
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.title} delay={i * 60}>
                  <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
                    {/* Real Unsplash Photography Banner */}
                    <div style={{ position: 'relative', width: '100%', height: 180 }}>
                      <Image
                        src={ind.image}
                        alt={`${ind.title} marketing in Bhubaneswar — Marketing Copilot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.75) 100%)'
                      }} />
                      <span style={{
                        position: 'absolute',
                        bottom: 12,
                        left: 16,
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: 18,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {ind.title}
                      </span>
                    </div>

                    <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1, gap: 14 }}>
                      <p className={styles.cardDesc}>{ind.desc}</p>
                      
                      <div className={styles.services}>
                        {ind.services.map((s) => (
                          <span key={s} className={styles.serviceTag}>
                            {s}
                          </span>
                        ))}
                      </div>

                      <div style={{ marginTop: 'auto', paddingTop: 10 }}>
                        <Link href="/contact" className={styles.cardCta}>
                          <span>Get {ind.title.split(' ')[0]} Growth Plan</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Marketing Copilot */}
        <section className={styles.whySection}>
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
                <span className="eyebrow-dot" />
                Why Marketing Copilot
              </div>
              <h2 className="display-md">
                Bhubaneswar&apos;s most trusted<br />
                <span className="accent-gradient">digital growth partner.</span>
              </h2>
            </ScrollReveal>
            <div className={styles.whyGrid}>
              {whyStats.map((w, i) => (
                <ScrollReveal key={w.label} delay={i * 80}>
                  <div className={styles.whyCard}>
                    <div className={styles.whyStat} style={{ color: w.color, fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900, marginBottom: 6 }}>
                      {w.val}
                    </div>
                    <div className={styles.whyLabel} style={{ fontSize: 13, color: '#64748B', fontWeight: 600 }}>
                      {w.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
