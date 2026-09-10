'use client';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './FAQSection.module.css';

const faqs = [
  {
    q: 'What does a digital marketing company do?',
    a: 'A digital marketing company helps businesses grow online through SEO, paid ads, social media, content marketing, websites, and other digital channels. Nova Spark creates strategies based on your goals, audience, industry, and competition.',
  },
  {
    q: 'What digital marketing services does Nova Spark offer in Bhubaneswar?',
    a: 'Nova Spark offers SEO, Google Ads, Meta Ads, social media marketing, local SEO, content marketing, AI content creation, website design and development, photography, videography, and performance marketing.',
  },
  {
    q: 'Can you help my business rank on Google in Bhubaneswar?',
    a: 'Yes. We use SEO strategies such as technical SEO, on-page optimization, local SEO, keyword targeting, content, Google Business Profile optimization, internal linking, and authority building to improve your Google visibility.',
  },
  {
    q: 'How long does digital marketing take to show results?',
    a: 'Results depend on your industry, competition, website, budget, and marketing strategy. Paid ads can bring results faster, while SEO usually takes consistent time and effort. We regularly track and optimize performance.',
  },
  {
    q: 'Do you provide online marketing services for small businesses?',
    a: 'Yes. Our services are suitable for startups, small businesses, local businesses, and established companies. We customize strategies according to your goals, target audience, and budget.',
  },
  {
    q: 'Why choose Nova Spark for digital marketing?',
    a: 'Nova Spark combines strategy, creativity, technology, and performance marketing to create customized solutions. We focus on improving online visibility, attracting the right audience, generating leads, and achieving measurable growth.',
  },
  {
    q: 'How can I get started with Nova Spark?',
    a: 'Contact Nova Spark for a consultation. We’ll understand your business goals, online presence, audience, and challenges, then recommend the right digital marketing services.',
  },
  {
    q: 'Which industries does Nova Spark work with?',
    a: `Nova Spark works with businesses across various industries, including:
• IT & App Marketing – Software, apps, SaaS, and technology brands.
• Yoga & Wellness – Yoga, fitness, and wellness businesses.
• Travel & Tourism – Travel agencies and tour operators.
• Interior Design – Design studios and local interior businesses.
• EdTech & Education – Courses, institutes, and education platforms.
• Real Estate – Property businesses and real estate professionals.
• E-commerce – Online stores and product-based businesses.
• Healthcare & Wellness – Relevant healthcare and wellness businesses.
• Hospitality & Restaurants – Hotels, restaurants, and hospitality brands.
• Events & Entertainment – Event companies, venues, and entertainers.

Our strategies are customized for each business based on its audience, competition, goals, and industry.`,
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
            FAQ &amp; Answers
          </div>
          <h2 className="display-lg" style={{ marginTop: 16 }}>
            Questions we get<br />
            <span className="accent-gradient">asked often.</span>
          </h2>
        </ScrollReveal>

        <div className={styles.list}>
          {faqs.map((f, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div className={`${styles.item} ${open === i ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{f.q}</span>
                  <span className={styles.icon}>{open === i ? '−' : '+'}</span>
                </button>
                <div
                  className={styles.answer}
                  style={{
                    maxHeight: open === i ? '600px' : '0',
                  }}
                >
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
