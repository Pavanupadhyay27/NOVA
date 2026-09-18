'use client';
import { useState } from 'react';
import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

const faqGroups = [
  {
    id: 'general',
    title: 'General Questions',
    faqs: [
      {
        q: 'What digital marketing services does Marketing Copilot offer in Bhubaneswar?',
        a: 'Marketing Copilot is Bhubaneswar\'s full-service digital marketing agency. We offer SEO, Google Ads (PPC), Meta Ads (Facebook & Instagram), Social Media Marketing, Website Development, Local SEO, E-commerce Marketing, Performance Marketing, Branding & Creative Services, and Content Marketing — all designed specifically for the Bhubaneswar and Odisha market.',
      },
      {
        q: 'Why should I choose a Bhubaneswar-based digital marketing agency?',
        a: 'A local Bhubaneswar agency understands the local market dynamics, consumer behaviour, seasonal trends specific to Odisha, local competition, and hyperlocal targeting opportunities. Marketing Copilot combines this local expertise with national-level digital marketing best practices to give your business a genuine competitive edge.',
      },
      {
        q: 'How quickly can I expect to see results from digital marketing?',
        a: 'Results vary by service. Google Ads and Meta Ads can generate leads within 48–72 hours of launch. SEO typically shows measurable traction in 3–6 months, with compounding results beyond that. Social media builds momentum over 2–3 months. We set realistic timelines during your initial strategy session.',
      },
      {
        q: 'Do you work with small businesses in Bhubaneswar?',
        a: 'Absolutely. Many of our best-performing campaigns are for small and medium businesses across Bhubaneswar and Odisha — from local clinics and coaching institutes to retail shops and restaurants. We have packages designed for every stage of business growth.',
      },
    ],
  },
  {
    id: 'seo',
    title: 'SEO & Local Search',
    faqs: [
      {
        q: 'How long does SEO take to work for a Bhubaneswar business?',
        a: 'For most Bhubaneswar businesses, you\'ll start seeing meaningful ranking improvements in 3–4 months, with strong lead growth by month 6. Highly competitive industries may take 9–12 months to achieve top rankings. The key advantage of SEO is it compounds — unlike ads that stop when you stop paying.',
      },
      {
        q: 'What is Local SEO and why is it important for Bhubaneswar businesses?',
        a: 'Local SEO is the process of optimising your online presence to appear in Bhubaneswar-specific Google searches — especially the map pack that appears at the top of local results. When someone searches "dentist near me" or "digital marketing agency in Bhubaneswar", Local SEO determines if your business appears. It\'s critical because local searches convert 2–3X better than generic searches.',
      },
      {
        q: 'Can you help us rank on Google Maps in Bhubaneswar?',
        a: 'Yes — Google Maps (Google Business Profile) optimisation is a core part of our Local SEO service. We\'ve ranked Bhubaneswar businesses #1 in the local pack for competitive keywords in real estate, healthcare, education, and retail. The process involves GBP optimisation, review strategy, citation building, and local content.',
      },
      {
        q: 'What does an SEO audit include?',
        a: 'Our SEO audits cover: technical health (site speed, crawlability, Core Web Vitals, mobile usability), on-page optimisation (title tags, headings, content quality), backlink profile analysis, local citations review, Google Business Profile assessment, competitor keyword gap analysis, and a prioritised action roadmap.',
      },
    ],
  },
  {
    id: 'ads',
    title: 'Google Ads & Meta Ads',
    faqs: [
      {
        q: 'What budget do I need to start Google Ads in Bhubaneswar?',
        a: 'We typically recommend a minimum monthly ad spend of ₹15,000–₹25,000 for Google Ads in Bhubaneswar to gather enough data and drive meaningful results. Competitive industries like real estate or healthcare may need ₹50,000+. Our management fees are separate from your ad spend. We\'ll recommend the right budget during your strategy call based on your goals.',
      },
      {
        q: 'What is ROAS and what ROAS can I expect?',
        a: 'ROAS (Return on Ad Spend) measures how much revenue you earn for every rupee spent on ads. A 4X ROAS means every ₹1 in ads returns ₹4 in revenue. Our Bhubaneswar clients average 6–8X ROAS on Google Ads and 3–5X on Meta Ads, though this varies significantly by industry, offer, and landing page quality.',
      },
      {
        q: 'What is the difference between Google Ads and Meta Ads?',
        a: 'Google Ads (Search) captures people actively searching for your product or service — they have high buying intent. Meta Ads (Facebook/Instagram) interrupt people who may not be actively searching but fit your target audience profile — ideal for awareness, brand building, and demand generation. The best strategy usually combines both.',
      },
      {
        q: 'Do you handle the ad creatives too, or just the campaigns?',
        a: 'We handle everything — strategy, targeting, ad copy, creative production (static images, carousel, video), campaign structure, bidding management, and reporting. You don\'t need a separate creative agency. Our in-house creative team produces all ad assets.',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    faqs: [
      {
        q: 'Which social media platforms should my Bhubaneswar business be on?',
        a: 'It depends on your audience. For B2C businesses (retail, food, fashion, education): Instagram and Facebook are essential. For B2B (professional services, manufacturing): LinkedIn and Facebook work well. For younger audiences: Instagram Reels and YouTube Shorts are powerful. We help you focus on 2–3 platforms where your Bhubaneswar audience is most active rather than spreading thin across all.',
      },
      {
        q: 'How often should we post on social media?',
        a: 'Quality beats frequency. For Instagram, we recommend 4–5 posts per week (including Reels). For Facebook, 3–4 times per week. For LinkedIn, 3–4 times per week. Daily Stories can supplement main posts. We create full content calendars with a mix of educational, promotional, and engagement content tailored to your Bhubaneswar audience.',
      },
      {
        q: 'Can you grow our Instagram followers in Bhubaneswar?',
        a: 'Yes — but we focus on growing the right followers. We target Bhubaneswar-area audiences relevant to your business through organic content, Reels strategy, hashtag research, community engagement, collaborations with local influencers, and (optionally) paid promotion. We\'ve grown Bhubaneswar brand accounts from 0 to 50,000 followers in 6 months.',
      },
    ],
  },
  {
    id: 'web',
    title: 'Website Development',
    faqs: [
      {
        q: 'How much does a business website cost in Bhubaneswar?',
        a: 'Website costs range based on complexity. A professional brochure website for a Bhubaneswar business starts from ₹35,000–₹60,000. Landing pages for ad campaigns start from ₹15,000. E-commerce stores on Shopify or WooCommerce start from ₹75,000. Custom web applications are quoted based on scope. All our websites are mobile-first, fast, and SEO-ready from day one.',
      },
      {
        q: 'How long does it take to build a website?',
        a: 'A standard business website typically takes 3–5 weeks from project kick-off. A simple landing page can be done in 1–2 weeks. E-commerce stores with full product catalogues typically take 6–10 weeks. We provide weekly preview links so you can review progress at every stage.',
      },
      {
        q: 'Will my website rank on Google?',
        a: 'Every website we build is built with SEO foundations — proper URL structure, fast load times, schema markup, sitemap, meta tags, and mobile optimisation. This gives you the technical foundation to rank. Ongoing SEO content strategy is a separate service that builds on this foundation.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Process',
    faqs: [
      {
        q: 'How do I get started with Marketing Copilot in Bhubaneswar?',
        a: 'The easiest first step is to book a free strategy call. Our team will review your current digital presence, understand your business goals, and propose a customised growth plan. There\'s no obligation and no sales pressure — just honest recommendations from Bhubaneswar\'s digital marketing team.',
      },
      {
        q: 'Do you offer monthly retainer packages or project-based work?',
        a: 'Both. For ongoing digital marketing (SEO, social media, paid ads, content), we work on monthly retainers with flexible terms. For one-time projects (website builds, brand identity, ad campaign setup), we work on a project basis. Most growing Bhubaneswar businesses combine a project to get started with an ongoing retainer for sustained results.',
      },
      {
        q: 'How do you report on results and progress?',
        a: 'All clients get a dedicated account manager, monthly performance reports covering agreed KPIs, access to live dashboards (Google Data Studio / Looker Studio), and a monthly strategy call to review results and adjust plans. We don\'t believe in hiding behind jargon — our reports are clear, honest, and tied to your business goals.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenItem(prev => (prev === key ? null : key));
  };

  return (
    <>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <div className={styles.heroContent}>
              <ScrollReveal className="text-center">
                <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
                  <span className="eyebrow-dot" />
                  Frequently Asked Questions
                </div>
                <h1 className={`display-xl ${styles.heroTitle}`}>
                  Questions about<br />
                  digital marketing<br />
                  <span className="accent-gradient">in Bhubaneswar?</span>
                </h1>
                <p className={`body-lg ${styles.heroSub}`}>
                  Everything you need to know about working with Bhubaneswar&apos;s leading digital marketing agency. Can&apos;t find your answer? Just ask us directly.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.layout}>
              {/* Sidebar nav */}
              <aside className={styles.sidebar}>
                <ScrollReveal>
                  <nav className={styles.sideNav}>
                    {faqGroups.map((g) => (
                      <a key={g.id} href={`#${g.id}`} className={styles.sideLink}>
                        {g.title}
                      </a>
                    ))}
                  </nav>
                </ScrollReveal>
              </aside>

              {/* Accordion Groups */}
              <div className={styles.groups}>
                {faqGroups.map((group, gi) => (
                  <ScrollReveal key={group.id} delay={gi * 40}>
                    <div id={group.id} className={styles.group}>
                      <div className={styles.groupTitle}>
                        <span className={styles.groupTitleDot} />
                        {group.title}
                      </div>
                      <div className={styles.accordion}>
                        {group.faqs.map((faq, fi) => {
                          const key = `${group.id}-${fi}`;
                          const isOpen = openItem === key;
                          return (
                            <div
                              key={key}
                              className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                            >
                              <button
                                className={styles.question}
                                onClick={() => toggle(key)}
                                aria-expanded={isOpen}
                              >
                                <span>{faq.q}</span>
                                <span className={styles.questionIcon}>+</span>
                              </button>
                              {isOpen && (
                                <div className={styles.answer}>{faq.a}</div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}

                {/* Contact Strip */}
                <ScrollReveal>
                  <div className={styles.contactStrip}>
                    <p className={styles.contactStripTitle}>
                      Still have questions?
                    </p>
                    <p className={styles.contactStripSub}>
                      Our Bhubaneswar team is happy to answer any question about your business and digital marketing options — no obligation.
                    </p>
                    <div className={styles.contactActions}>
                      <BeamButton href="/contact" label="Talk to Our Team" size="md" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
