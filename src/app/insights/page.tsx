'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import styles from './page.module.css';

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
  featured?: boolean;
}

export const articles: Article[] = [
  { 
    slug: 'future-of-performance-marketing', 
    category: 'Marketing', 
    title: 'The future of performance marketing in an AI-first world.', 
    excerpt: 'AI is fundamentally reshaping how campaigns are created, targeted, and optimized. Here is what every high-growth brand and CMO needs to execute right now.', 
    readTime: '8 min read', 
    date: 'Sep 5, 2026', 
    image: '/images/dashboard_hero.jpg',
    author: 'Aarav Sharma',
    authorRole: 'CEO & Growth Strategist',
    featured: true 
  },
  { 
    slug: 'seo-in-2026', 
    category: 'SEO', 
    title: 'SEO in 2026: What actually works and what to completely ignore.', 
    excerpt: 'The technical fundamentals are stronger than ever, but LLM search and entity mapping have changed rank algorithms completely. A practical blueprint.', 
    readTime: '6 min read', 
    date: 'Aug 28, 2026', 
    image: '/images/work_realestate.jpg',
    author: 'Ananya Mishra',
    authorRole: 'Lead SEO Strategist',
    featured: false 
  },
  { 
    slug: 'building-brand-recall', 
    category: 'Branding', 
    title: 'How to build unbreakable brand recall in a world of infinite content.', 
    excerpt: 'With consumer attention fragmented across a thousand screens, here is how the most durable brands build emotional moats that stick in memory.', 
    readTime: '5 min read', 
    date: 'Aug 20, 2026', 
    image: '/images/about_hero.jpg',
    author: 'Sanjay Mohanty',
    authorRole: 'Chief Marketing Officer',
    featured: false 
  },
  { 
    slug: 'social-media-strategy-2026', 
    category: 'Social', 
    title: 'The short-form social strategy that drove 200K followers in 9 months.', 
    excerpt: 'A complete behind-the-scenes teardown of the creative hooks, production cadence, and community loops we used to scale an Indian D2C brand.', 
    readTime: '7 min read', 
    date: 'Aug 12, 2026', 
    image: '/images/work_fashion.jpg',
    author: 'Kavya Reddy',
    authorRole: 'Head of Social',
    featured: false 
  },
  { 
    slug: 'roas-myths', 
    category: 'Marketing', 
    title: '5 dangerous ROAS myths that are quietly burning your media budget.', 
    excerpt: 'High blended ROAS on dashboard does not guarantee commercial net profitability. Here is a scientific framework to evaluate true incremental return.', 
    readTime: '5 min read', 
    date: 'Aug 5, 2026', 
    image: '/images/services_performance.jpg',
    author: 'Sneha Nayak',
    authorRole: 'Head of Paid Media',
    featured: false 
  },
  { 
    slug: 'website-conversion-rate', 
    category: 'Technology', 
    title: 'Why your website converts at 1.2% and the 6 fixes to double it.', 
    excerpt: 'Most high-traffic websites leak money at friction points. Here are the exact UX architectures, speed boosts, and psychological triggers that turn visitors into customers.', 
    readTime: '6 min read', 
    date: 'Jul 28, 2026', 
    image: '/images/work_ecommerce.jpg',
    author: 'Rohan Senapati',
    authorRole: 'Head of Technology',
    featured: false 
  },
];

const cats = ['All', 'Marketing', 'SEO', 'Social', 'Branding', 'Technology'];

export default function InsightsPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active);
  const featured = articles.find(a => a.featured);

  return (
    <>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Growth Intelligence & Research
              </div>
              <h1 className={`display-xl ${styles.title}`}>
                Ideas worth<br />
                <span className="accent-gradient">thinking about.</span>
              </h1>
              <p className={`body-lg ${styles.sub}`}>
                Strategic playbooks, campaign breakdowns, and practical research from our senior operators.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="container">
          {/* Featured Article Card */}
          {active === 'All' && featured && (
            <ScrollReveal>
              <Link href={`/insights/${featured.slug}`} className={styles.featuredCard}>
                <div className={styles.featuredVisual}>
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className={styles.featuredImg}
                    sizes="(max-width: 900px) 100vw, 55vw"
                  />
                  <div className={styles.featuredOverlay} />
                  <span className={styles.featuredTag}>Featured Article</span>
                </div>
                <div className={styles.featuredInfo}>
                  <div className={styles.metaTop}>
                    <span className={styles.categoryChip}>{featured.category}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.readTime}>{featured.readTime}</span>
                  </div>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                  
                  <div className={styles.authorRow}>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{featured.author}</span>
                      <span className={styles.authorRole}>{featured.authorRole}</span>
                    </div>
                    <span className={styles.readMoreBtn}>
                      Read Article <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Clean Skeuomorphic Category Filter Tabs */}
          <div className={styles.filtersWrap}>
            <div className={styles.filters}>
              {cats.map(c => (
                <button
                  key={c}
                  className={`${styles.filterBtn} ${active === c ? styles.filterActive : ''}`}
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid with High-Res Images */}
          <div className={styles.grid}>
            {(active === 'All' ? articles.filter(a => !a.featured) : filtered).map((a, i) => (
              <ScrollReveal key={a.slug} delay={i * 80}>
                <Link href={`/insights/${a.slug}`} className={styles.card}>
                  <div className={styles.cardVisual}>
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className={styles.cardImg}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={styles.cardVisualOverlay} />
                    <span className={styles.cardCategory}>{a.category}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span>{a.date}</span>
                      <span>•</span>
                      <span>{a.readTime}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{a.title}</h3>
                    <p className={styles.cardExcerpt}>{a.excerpt}</p>
                    
                    <div className={styles.cardFooter}>
                      <span className={styles.cardAuthor}>{a.author}</span>
                      <span className={styles.cardArrow}>→</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
