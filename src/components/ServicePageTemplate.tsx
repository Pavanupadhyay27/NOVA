import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import styles from './ServicePage.module.css';

interface ServicePageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  color: string;
  metrics: { val: string; label: string }[];
  services: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  platforms?: string[];
}

export default function ServicePageTemplate({
  eyebrow, title, subtitle, description, emoji, color,
  metrics, services, process, platforms,
}: ServicePageProps) {
  return (
    <>
      <div className={styles.page} style={{ '--accent': color } as React.CSSProperties}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <ScrollReveal>
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    {eyebrow}
                  </div>
                  <h1 className={`display-xl ${styles.heroTitle}`}
                    dangerouslySetInnerHTML={{ __html: title }} />
                  <p className={`body-lg ${styles.heroSub}`}>{description}</p>
                  <div className={styles.heroActions}>
                    <Link href="/contact" className="btn btn-primary">
                      Get Started <span className="btn-arrow">→</span>
                    </Link>
                    <Link href="/work" className="btn btn-secondary">
                      See Results
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
              <div className={styles.heroVisual}>
                <ScrollReveal delay={200}>
                  <div className={styles.visualCard}>
                    <div className={styles.visualEmoji}>{emoji}</div>
                    <div className={styles.visualMetrics}>
                      {metrics.map(m => (
                        <div key={m.label} className={styles.vMetric}>
                          <span className={styles.vVal} style={{ color }}>{m.val}</span>
                          <span className={styles.vLabel}>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Services offered */}
        <section className={`${styles.servicesSection}`} style={{ background: 'var(--bg-light)' }}>
          <div className="container">
            <ScrollReveal>
              <h2 className="display-md" style={{ color: 'var(--text-dark)' }}>{subtitle}</h2>
            </ScrollReveal>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 60}>
                  <div className={styles.serviceItem}>
                    <div className={styles.serviceBar} style={{ background: color }} />
                    <h3 className={styles.serviceTitle}>{s.title}</h3>
                    <p className={styles.serviceDesc}>{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        {platforms && (
          <section className={styles.platformsSection}>
            <div className="container">
              <ScrollReveal className="text-center">
                <p className="label" style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
                  Platforms we master
                </p>
                <div className={styles.platforms}>
                  {platforms.map(p => (
                    <span key={p} className={styles.platform}>{p}</span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Process */}
        <section className={`${styles.processSection}`} style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <ScrollReveal>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Our process
              </div>
              <h2 className="display-md" style={{ marginTop: 16 }}>
                How we deliver results.
              </h2>
            </ScrollReveal>
            <div className={styles.processSteps}>
              {process.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 80}>
                  <div className={styles.processStep}>
                    <div className={styles.stepNum} style={{ background: `${color}18`, color }}>
                      {p.step}
                    </div>
                    <h3 className={styles.stepTitle}>{p.title}</h3>
                    <p className={styles.stepDesc}>{p.desc}</p>
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
