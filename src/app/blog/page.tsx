'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

const categories = ['All', 'SEO', 'Google Ads', 'Social Media', 'Web Development', 'Branding', 'Case Studies'];

const featured = {
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  category: 'SEO',
  title: 'How We Ranked a Bhubaneswar Real Estate Brand #1 on Google in 90 Days',
  excerpt: 'A step-by-step breakdown of the exact SEO strategy we used — technical fixes, hyperlocal content, and link building — to dominate Bhubaneswar property searches across Patia and Khandagiri.',
  author: 'Marketing Copilot Team',
  date: 'September 2025',
  readTime: '8 min read',
  href: '/contact',
};

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    color: '#0B2093',
    tagBg: 'rgba(11, 32, 147, 0.1)',
    category: 'Google Ads',
    title: 'The Complete Google Ads Guide for Bhubaneswar Local Businesses in 2025',
    excerpt: 'Everything you need to know about running profitable Google Ads campaigns targeting Bhubaneswar customers — from keyword research to smart bidding and negative lists.',
    readTime: '6 min read',
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    color: '#EC4899',
    tagBg: 'rgba(236, 72, 153, 0.1)',
    category: 'Social Media',
    title: '10 Instagram Reel Ideas for Bhubaneswar Restaurants & Cafes',
    excerpt: 'Proven short-form video hooks that drove 50,000+ views for dining brands in Patia and Saheed Nagar — with repeatable templates you can deploy immediately.',
    readTime: '4 min read',
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    color: '#10B981',
    tagBg: 'rgba(16, 185, 129, 0.1)',
    category: 'SEO',
    title: 'Local SEO Checklist for Bhubaneswar Businesses: 25 Actions That Work',
    excerpt: 'The exact local SEO checklist we execute for every new Bhubaneswar client — covering GBP verification, citation sync, on-page schema, and review acceleration.',
    readTime: '7 min read',
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    color: '#D97706',
    tagBg: 'rgba(245, 158, 11, 0.1)',
    category: 'Case Studies',
    title: 'From ₹0 to ₹50L/Month: How We Scaled an Odisha E-commerce Brand Online',
    excerpt: 'Inside the 12-month growth strategy combining Google Shopping, Meta Catalogue ads, and SEO for a Bhubaneswar handicrafts and handloom brand.',
    readTime: '10 min read',
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    color: '#059669',
    tagBg: 'rgba(52, 211, 153, 0.1)',
    category: 'Web Development',
    title: 'Why Your Bhubaneswar Business Website Is Losing You Leads (And How to Fix It)',
    excerpt: '7 critical website mistakes we see on 90% of Bhubaneswar business websites — and the exact speed and UX fixes that improved conversion rates by 180%.',
    readTime: '5 min read',
    href: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    color: '#6366F1',
    tagBg: 'rgba(99, 102, 241, 0.1)',
    category: 'Branding',
    title: 'Brand Identity for Bhubaneswar Startups: What Actually Matters in 2025',
    excerpt: 'The essential brand elements Bhubaneswar startups need before spending a single rupee on advertising. Logo systems, typography rules, and psychological pricing power.',
    readTime: '5 min read',
    href: '/contact',
  },
];

const topics = [
  { name: 'SEO in Bhubaneswar', count: 18 },
  { name: 'Google Ads Strategy', count: 12 },
  { name: 'Meta Ads & Facebook', count: 9 },
  { name: 'Social Media Marketing', count: 15 },
  { name: 'Website Conversion & UX', count: 7 },
  { name: 'Odisha Market Trends', count: 11 },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

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
                  Growth Insights &amp; Guides
                </div>
                <h1 className={`display-xl ${styles.heroTitle}`}>
                  Digital Marketing Insights<br />
                  <span className="accent-gradient">for Bhubaneswar Leaders.</span>
                </h1>
                <p className={`body-lg ${styles.heroSub}`}>
                  No theory, no agency jargon. Practical, data-backed playbooks on SEO, Google Ads, Meta Ads, and web conversion written specifically for businesses in Odisha by Marketing Copilot.
                </p>

                {/* Category Pills */}
                <div className={styles.categories}>
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c)}
                      className={`${styles.catBtn} ${activeCategory === c ? styles.catActive : ''}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className={styles.blogSection}>
          <div className="container">
            <div className={styles.layout}>
              {/* Main Content */}
              <div>
                {/* Featured Post */}
                <div className={styles.featured}>
                  <ScrollReveal>
                    <Link href={featured.href} className={styles.featuredCard} style={{ textDecoration: 'none' }}>
                      <div className={styles.featuredImg} style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 420px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className={styles.featuredBody}>
                        <span className={styles.featuredBadge}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
                          Featured • {featured.category}
                        </span>
                        <h2 className={styles.featuredTitle}>{featured.title}</h2>
                        <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                        <div className={styles.postMeta}>
                          <span>{featured.author}</span>
                          <span className={styles.postMetaDot} />
                          <span>{featured.date}</span>
                          <span className={styles.postMetaDot} />
                          <span>{featured.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                </div>

                {/* Posts Grid */}
                <div className={styles.postsGrid}>
                  {filteredPosts.map((p, i) => (
                    <ScrollReveal key={p.title} delay={i * 60}>
                      <Link href={p.href} className={styles.postCard} style={{ textDecoration: 'none' }}>
                        <div className={styles.postImg} style={{ position: 'relative', overflow: 'hidden' }}>
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 360px"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className={styles.postBody}>
                          <span
                            className={styles.postTag}
                            style={{ background: p.tagBg, color: p.color }}
                          >
                            {p.category}
                          </span>
                          <h3 className={styles.postTitle}>{p.title}</h3>
                          <p className={styles.postExcerpt}>{p.excerpt}</p>
                          <div className={styles.postFooter}>
                            <span className={styles.readTime}>{p.readTime}</span>
                            <span className={styles.readMore}>Read article →</span>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                {/* Topics */}
                <div className={styles.sideCard}>
                  <h3 className={styles.sideTitle}>Popular Topics</h3>
                  <div className={styles.topicList}>
                    {topics.map(t => (
                      <div key={t.name} className={styles.topicItem}>
                        <span>{t.name}</span>
                        <span className={styles.topicCount}>{t.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card in Sidebar */}
                <div className={styles.sideCtaCard}>
                  <div className={styles.sideCtaBadge}>Free Bhubaneswar Audit</div>
                  <h3 className={styles.sideCtaTitle}>
                    Wondering where your competitors outrank you?
                  </h3>
                  <p className={styles.sideCtaText}>
                    Get a personalized 15-minute Google search &amp; ad analysis for your business.
                  </p>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Request Free Audit →
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
