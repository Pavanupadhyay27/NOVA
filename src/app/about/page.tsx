import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Nova Spark — Digital Growth Agency in Bhubaneswar',
  description: 'We believe growth should be designed, not hoped for. Learn about our story, philosophy, and the team behind the work.',
};

const timeline = [
  { year: '2021', title: 'The Beginning', desc: 'Founded in Bhubaneswar with a simple belief: marketing should be measurable, predictable, and transparent.' },
  { year: '2022', title: 'First Major Wins', desc: 'Delivered 5X ROAS for our first multi-category e-commerce client. Word spread across Odisha and Eastern India.' },
  { year: '2023', title: 'Growing the Full Stack Team', desc: 'Brought in senior specialists for technical SEO, high-converting creative, and modern full-stack web tech.' },
  { year: '2024', title: 'Expanding Capabilities', desc: 'Launched our AI & Automation practice. Engineered intelligent workflows that lowered customer acquisition costs.' },
  { year: '2025', title: 'Technology-First Agency', desc: '₹25Cr+ in campaign value managed. 50+ partner brands with a 98% long-term client retention rate.' },
  { year: 'TODAY', title: 'Building What\'s Next', desc: 'Doubling down on AI-augmented growth systems and high-velocity digital marketing for ambitious brands.' },
];

const values = [
  { title: 'Think Deeper', desc: 'We never accept the obvious answer. We analyze data and consumer psychology until we find the real leverage points.' },
  { title: 'Create Better', desc: 'Good enough isn\'t good enough. Premium visual aesthetics and crisp messaging for every client, every single time.' },
  { title: 'Move Faster', desc: 'Speed is a decisive competitive advantage. We test, measure, and iterate faster than traditional slow agencies.' },
];

export default function AboutPage() {
  return (
    <>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <ScrollReveal>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                About Us
              </div>
              <h1 className={`display-xl ${styles.title}`}>
                We believe growth<br />
                <span className="accent-gradient">should be engineered.</span>
              </h1>
              <p className={`body-lg ${styles.sub}`}>
                Nova Spark is a premier digital growth agency based in Bhubaneswar. We combine strategy, creativity, technology, and performance marketing to build revenue engines that make brands scale.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Hero Image Showcase */}
        <div className="container">
          <ScrollReveal>
            <div className={styles.imageShowcase}>
              <div className={styles.imageBox}>
                <Image
                  src="/images/about_hero.jpg"
                  alt="Nova Spark Studio and Growth Hub"
                  fill
                  priority
                  className={styles.image}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className={styles.imageOverlay} />
                <div className={styles.imageCaption}>
                  <span className={styles.imageDot} />
                  <span>Headquarters & Growth Lab • Bhubaneswar, Odisha</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Philosophy */}
        <section className={styles.philosophySection} style={{ background: 'var(--bg-light)' }}>
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ background: 'rgba(0,212,255,0.1)', borderColor: 'rgba(0,212,255,0.2)', margin: '0 auto 16px' }}>
                <span className="eyebrow-dot" />
                Core Principles
              </div>
              <h2 className="display-md" style={{ color: 'var(--text-dark)' }}>
                Our philosophy.
              </h2>
            </ScrollReveal>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 100}>
                  <div className={styles.valueCard}>
                    <span className={styles.valueNum}>0{i + 1}</span>
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story / Timeline */}
        <section className={styles.timelineSection}>
          <div className="container">
            <ScrollReveal>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Our Journey
              </div>
              <h2 className="display-md" style={{ marginTop: 16 }}>
                How we got here.
              </h2>
            </ScrollReveal>
            <div className={styles.timeline}>
              {timeline.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 80}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineYear}>{t.year}</div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.timelineTitle}>{t.title}</h3>
                      <p className={styles.timelineDesc}>{t.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Banner */}
        <section className={styles.teamSection}>
          <div className="container">
            <ScrollReveal>
              <div className={styles.teamBanner}>
                <div className={styles.teamBannerImgBox}>
                  <Image
                    src="/images/team_office.jpg"
                    alt="Nova Spark Team"
                    fill
                    className={styles.teamBannerImg}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div className={styles.teamOverlay} />
                </div>
                <div className={styles.teamBannerContent}>
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    Our Team
                  </div>
                  <h2 className="display-md" style={{ color: '#fff', margin: '16px 0' }}>
                    25+ Specialists.<br />One Shared Obsession.
                  </h2>
                  <p className="body-md" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
                    From growth hackers and technical SEO engineers to motion designers and AI architects — we bring world-class digital expertise to every project.
                  </p>
                  <Link href="/contact" className="btn btn-primary">
                    Work With Us →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
