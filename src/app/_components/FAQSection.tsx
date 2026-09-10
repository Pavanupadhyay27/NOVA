'use client';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './FAQSection.module.css';

const faqs = [
  {
    q: 'What makes Nova Spark different from other agencies?',
    a: 'We don\'t offer services in silos. We build integrated growth systems — combining strategy, creative, performance, and technology — so every effort compounds. We treat your brand like our own.',
  },
  {
    q: 'Which industries do you work with?',
    a: 'We have deep experience in IT products & app marketing, e-commerce & D2C, yoga & wellness, travel agencies, interior design, edutech, real estate, healthcare, and professional services. Our frameworks adapt to any industry where digital growth matters.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Quick wins (like improved ad performance) can appear in 2-4 weeks. Organic growth like SEO compounds over 3-6 months. We set realistic expectations from day one and share weekly reports.',
  },
  {
    q: 'Do you work with businesses outside Bhubaneswar?',
    a: 'Yes — we work with clients across India and internationally. Our Bhubaneswar roots give us local market depth; our technology and processes give us global reach.',
  },
  {
    q: 'What does engagement look like?',
    a: 'Every engagement starts with a discovery session. We then build a custom strategy, execute, and measure. You get a dedicated team, regular reporting, and direct access to decision-makers.',
  },
  {
    q: 'What\'s your minimum engagement?',
    a: 'Project-based work starts from ₹50,000. Monthly retainers typically range from ₹1.5L–₹5L+ depending on scope. We believe in fitting the engagement to the opportunity, not the other way around.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container-sm">
        <ScrollReveal className="text-center">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            FAQ & Answers
          </div>
          <h2 className="display-lg" style={{ marginTop: 16 }}>
            Questions we get<br />
            <span className="accent-gradient">asked often.</span>
          </h2>
        </ScrollReveal>

        <div className={styles.list}>
          {faqs.map((f, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className={`${styles.item} ${open === i ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{f.q}</span>
                  <span className={styles.icon}>{open === i ? '−' : '+'}</span>
                </button>
                <div className={styles.answer} style={{
                  maxHeight: open === i ? '400px' : '0',
                }}>
                  <p className={styles.answerText}>{f.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
