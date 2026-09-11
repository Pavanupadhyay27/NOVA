import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './FeaturedWork.module.css';

const caseStudies = [
  {
    client: 'E-Commerce Brand',
    category: 'Performance Marketing',
    headline: 'From ₹5L/mo ad spend to ₹2Cr+ revenue in 6 months.',
    metrics: [
      { val: '+142%', label: 'Revenue Growth' },
      { val: '4.8X', label: 'ROAS' },
      { val: '+83%', label: 'Leads' },
    ],
    color: '#0B2093',
    image: '/images/work_ecommerce.jpg',
    href: '/work/ecommerce-brand',
  },
  {
    client: 'Real Estate Developer',
    category: 'SEO & Lead Generation',
    headline: 'Dominating Google search for luxury properties in Bhubaneswar.',
    metrics: [
      { val: '+187%', label: 'Organic Traffic' },
      { val: '+94%', label: 'Qualified Leads' },
      { val: '#1', label: 'Google Ranking' },
    ],
    color: '#0D007F',
    image: '/images/work_realestate.jpg',
    href: '/work/real-estate',
  },
  {
    client: 'D2C Fashion Brand',
    category: 'Social Media & Creative',
    headline: 'Building a 200K+ community from scratch in 9 months.',
    metrics: [
      { val: '200K+', label: 'Followers' },
      { val: '+320%', label: 'Engagement' },
      { val: '3.2X', label: 'Sales Lift' },
    ],
    color: '#F59E0B',
    image: '/images/work_fashion.jpg',
    href: '/work/d2c-fashion',
  },
];

export default function FeaturedWork() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Selected Case Studies
              </div>
              <h3 className="display-lg" style={{ marginTop: 16 }}>
                Real Work. Real Impact.{' '}
                <span className="accent-gradient">Real Growth.</span>
              </h3>
            </div>
            <Link href="/work" className="btn btn-secondary">
              View All Work →
            </Link>
          </div>
        </ScrollReveal>

        {/* Featured large card */}
        <ScrollReveal delay={100}>
          <Link href={caseStudies[0].href} className={styles.featured}>
            <div className={styles.featuredVisual}>
              <Image
                src={caseStudies[0].image}
                alt={caseStudies[0].client}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
                className={styles.featuredImg}
              />
              <div className={styles.featuredImgOverlay} style={{ '--c': caseStudies[0].color } as React.CSSProperties} />
            </div>
            <div className={styles.featuredInfo}>
              <span className={styles.featuredCat}>{caseStudies[0].category}</span>
              <h3 className={styles.featuredClient}>{caseStudies[0].client}</h3>
              <p className={styles.featuredHeadline}>{caseStudies[0].headline}</p>
              <div className={styles.featuredMetrics}>
                {caseStudies[0].metrics.map(m => (
                  <div key={m.label} className={styles.featuredMetric}>
                    <span className={styles.fmVal} style={{ color: caseStudies[0].color }}>{m.val}</span>
                    <span className={styles.fmLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.featuredCta}>
                View Case Study <span>→</span>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Smaller cards */}
        <div className={styles.smallGrid}>
          {caseStudies.slice(1).map((c, i) => (
            <ScrollReveal key={c.client} delay={i * 100 + 150}>
              <Link href={c.href} className={styles.smallCard}>
                <div className={styles.smallVisual}>
                  <Image
                    src={c.image}
                    alt={c.client}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className={styles.smallImg}
                  />
                  <div className={styles.smallImgOverlay} />
                </div>
                <div className={styles.smallInfo}>
                  <span className={styles.featuredCat}>{c.category}</span>
                  <h3 className={styles.smallClient}>{c.client}</h3>
                  <p className={styles.smallHeadline}>{c.headline}</p>
                  <div className={styles.smallMetrics}>
                    {c.metrics.map(m => (
                      <div key={m.label} className={styles.smallMetric}>
                        <span className={styles.smVal} style={{ color: c.color }}>{m.val}</span>
                        <span className={styles.smLabel}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
