'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import styles from './ServicePage.module.css';

export interface ServiceAdvantage {
  title: string;
  desc: string;
  badge?: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceCaseHighlight {
  client: string;
  location: string;
  metric: string;
  metricLabel: string;
  summary: string;
}

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  color: string;
  heroImage?: string;
  spotlightImage?: string;
  metrics: { val: string; label: string }[];
  services: { title: string; desc: string; deliverables?: string[] }[];
  process: { step: string; title: string; desc: string }[];
  platforms?: string[];
  localAdvantages?: ServiceAdvantage[];
  caseHighlight?: ServiceCaseHighlight;
  faqs?: ServiceFAQ[];
}

export default function ServicePageTemplate({
  eyebrow,
  title,
  subtitle,
  description,
  color,
  heroImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
  spotlightImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  metrics,
  services,
  process,
  platforms,
  localAdvantages,
  caseHighlight,
  faqs,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const defaultAdvantages: ServiceAdvantage[] = localAdvantages || [
    {
      badge: 'Hyperlocal Intelligence',
      title: 'Bhubaneswar Market Targeting',
      desc: 'Pinpoint precision across Patia, Saheed Nagar, Infocity, Nayapalli, Rasulgarh, and the Twin City Cuttack-Bhubaneswar growth corridor.',
    },
    {
      badge: 'Direct Accountability',
      title: 'In-Person Strategic Reviews',
      desc: 'Meet our growth leads face-to-face in Bhubaneswar for transparent sprint retrospectives, live dashboard reviews, and strategic roadmapping.',
    },
    {
      badge: 'Cultural Nuance',
      title: 'Bilingual Odisha Creative Angles',
      desc: 'Campaign angles, festival activations (Raja, Durga Puja, Ratha Yatra), and consumer psychology tailored specifically for Odisha audiences.',
    },
  ];

  const defaultCase: ServiceCaseHighlight = caseHighlight || {
    client: 'Bhubaneswar Enterprise Partner',
    location: 'Patia IT Corridor, Bhubaneswar',
    metric: '+340%',
    metricLabel: 'Qualified Inquiries & Organic Conversions',
    summary: 'Restructured full-funnel digital acquisition architecture, resulting in top-3 Google rankings across high-intent local searches and 4.2X customer acquisition efficiency in under 90 days.',
  };

  const defaultFaqs: ServiceFAQ[] = faqs || [
    {
      q: 'Why should my business choose a Bhubaneswar-based digital marketing team?',
      a: 'A local Bhubaneswar partner brings immediate boots-on-the-ground understanding of local consumer behavior, regional pricing tolerance, hyperlocal search habits, and seasonal buying cycles in Odisha that generic national agencies completely miss.',
    },
    {
      q: 'How fast will we see measurable leads and traffic?',
      a: 'Paid campaigns (Google Ads and Meta Ads) begin generating qualified phone calls and inquiries within 48 to 72 hours of going live. Organic SEO and content compounding typically demonstrate rank acceleration and inbound volume within 60 to 90 days.',
    },
    {
      q: 'What makes Marketing Copilot different from traditional agencies in Bhubaneswar?',
      a: 'Marketing Copilot eliminates agency bloat and vanity metrics. We operate with strict attribution modeling, live client reporting dashboards, and weekly performance sprints focused strictly on your bottom-line revenue and ROI.',
    },
    {
      q: 'Can Marketing Copilot handle our entire marketing stack end-to-end?',
      a: 'Yes. From high-speed Next.js web development and conversion-rate optimization to multi-channel paid ads, SEO, and local map pack dominance, our team acts as your dedicated fractional growth team in Bhubaneswar.',
    },
  ];

  const bhubaneswarCorridors = [
    {
      hub: 'Patia & Infocity',
      focus: 'Tech & B2B SaaS Ecosystem',
      desc: 'High-density tech corridor, IT campuses, startup incubators, and modern co-working hubs requiring sophisticated enterprise lead funnels.',
    },
    {
      hub: 'Saheed Nagar & Master Canteen',
      focus: 'Commercial Retail & High-Street',
      desc: 'High-footfall central retail strip, lifestyle brands, banks, and clinical centers driven by hyper-localized high-intent Google Maps searches.',
    },
    {
      hub: 'Jaydev Vihar & Nayapalli',
      focus: 'Hospitality & Luxury Real Estate',
      desc: 'Bhubaneswar’s prime residential developments, boutique hotels, high-end dining, and major commercial complexes requiring high-ticket buyer targeting.',
    },
    {
      hub: 'Rasulgarh & Mancheswar IE',
      focus: 'Industrial & B2B Distribution',
      desc: 'Heavy commercial warehousing, automotive dealerships, industrial equipment distributors, and state-wide supply chain enterprises.',
    },
    {
      hub: 'Khandagiri & Patrapada',
      focus: 'Healthcare & Higher Education',
      desc: 'Major multi-specialty hospitals, private universities, coaching academies, and dense residential communities seeking trusted services.',
    },
    {
      hub: 'Twin City Expressway (CTC-BBSR)',
      focus: 'Inter-City Regional Commerce',
      desc: 'The vital arterial lifeline linking Cuttack and Bhubaneswar, capturing statewide wholesale trade, transit commuters, and regional buyers.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Marketing Copilot, I am looking for ${eyebrow.replace(/[^a-zA-Z0-9 ]/g, '')} services in Bhubaneswar. Could we schedule a consultation?`
  );

  return (
    <div className={styles.page} style={{ '--accent': color } as React.CSSProperties}>
      {/* ══════════════════════════════════════════════════
          1. HERO SECTION (With Real Unsplash Photography)
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <ScrollReveal>
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  {eyebrow}
                </div>
                <h1
                  className={`display-xl ${styles.heroTitle}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p className={`body-lg ${styles.heroSub}`}>{description}</p>
                
                {/* Animated Revolving Border Beam CTA Button */}
                <div className={styles.heroActions}>
                  <div className={styles.borderBeamWrapper}>
                    <div className={styles.borderGlowAmbient} />
                    <div className={styles.borderBeamSpin} />
                    <Link href="/contact" className={styles.btnStartPrimary}>
                      <span className={styles.btnShimmer} />
                      <span className={styles.btnGlassGloss} />
                      <span>Claim Free Growth Audit</span>
                      <span className={styles.btnArrow}>→</span>
                    </Link>
                  </div>
                </div>

                {/* Trust Strip with Avatars and Ratings */}
                <div className={styles.heroTrustStrip}>
                  <div className={styles.trustAvatars}>
                    <span className={styles.trustAvatar}>MC</span>
                    <span className={styles.trustAvatar}>BB</span>
                    <span className={styles.trustAvatar}>OD</span>
                    <span className={styles.trustAvatar}>+50</span>
                  </div>
                  <div className={styles.trustText}>
                    <div className={styles.trustStars}>★★★★★</div>
                    <div className={styles.trustLabel}>Rated 4.9/5 by 50+ Bhubaneswar &amp; Odisha Brands</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className={styles.heroVisual}>
              <ScrollReveal delay={150}>
                <div className={styles.heroVisualStage}>
                  {/* Ambient Radiant Backdrop Glow */}
                  <div className={styles.visualBackdropGlow} />

                  {/* Skeuomorphic Glass Card with Real Photography */}
                  <div className={styles.heroVisualCard}>
                    <div className={styles.heroImageContainer}>
                      <Image
                        src={heroImage}
                        alt={`${eyebrow} in Bhubaneswar — Marketing Copilot`}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 480px"
                        className={styles.heroPhoto}
                      />
                      <div className={styles.heroPhotoOverlay} />

                      {/* Floating Glass 3D Badges */}
                      <div className={styles.floatingTopBadge}>
                        <span className={styles.badgeEmeraldDot} />
                        <span>Live Rank: #1 Google 3-Pack</span>
                      </div>

                      <div className={styles.floatingBottomBadge}>
                        <span className={styles.badgeEmeraldDot} />
                        <span>Marketing Copilot · Bhubaneswar</span>
                      </div>
                    </div>

                    {/* Tactile Extruded Metric Tiles */}
                    <div className={styles.visualMetricsGrid}>
                      {metrics.map((m) => (
                        <div key={m.label} className={styles.vMetric}>
                          <span className={styles.vVal} style={{ color }}>
                            {m.val}
                          </span>
                          <span className={styles.vLabel}>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. HYPERLOCAL BHUBANESWAR ADVANTAGE (3 Cards)
         ══════════════════════════════════════════════════ */}
      <section className={styles.advantageSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              Bhubaneswar Hyperlocal Edge
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              Why Bhubaneswar Brands Win With <span className="accent-gradient">Marketing Copilot</span>
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 640, margin: '10px auto 0' }}>
              We combine deep regional commercial insights across Odisha with cutting-edge national growth frameworks.
            </p>
          </ScrollReveal>

          <div className={styles.advantageGrid}>
            {defaultAdvantages.map((adv, idx) => (
              <ScrollReveal key={adv.title} delay={idx * 80}>
                <div className={styles.advantageCard}>
                  {adv.badge && <span className={styles.advantageBadge}>{adv.badge}</span>}
                  <h3 className={styles.advantageTitle}>{adv.title}</h3>
                  <p className={styles.advantageDesc}>{adv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. CORE SERVICES DELIVERABLES (Skeuomorphic Cards)
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Comprehensive Deliverables
            </div>
            <h2 className="display-md" style={{ color: '#0F172A', marginTop: 14 }}>
              {subtitle}
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 680, marginTop: 10 }}>
              Engineered for measurable commercial outcomes, predictable customer acquisition, and durable search dominance.
            </p>
          </ScrollReveal>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceBar} style={{ background: color }} />
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>

                  {s.deliverables && s.deliverables.length > 0 && (
                    <div className={styles.deliverablesList}>
                      {s.deliverables.map((item) => (
                        <span key={item} className={styles.deliverablePill}>
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link href="/contact" className={styles.serviceCtaLink}>
                    <span>Request Bhubaneswar Strategy</span>
                    <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. THE COPILOT DIFFERENCE (COMPARISON MATRIX)
         ══════════════════════════════════════════════════ */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              The Copilot Standard
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              Traditional Bhubaneswar Agencies vs. <span className="accent-gradient">Marketing Copilot</span>
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 660, margin: '10px auto 0' }}>
              Why forward-thinking brands in Odisha transition away from outdated retainers to our agile sprint performance model.
            </p>
          </ScrollReveal>

          <div className={styles.comparisonGrid}>
            {/* Traditional Agencies */}
            <ScrollReveal delay={60}>
              <div className={styles.comparisonCardBad}>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonTitle}>Traditional Agencies</div>
                  <div className={styles.comparisonSub}>Outdated agency retainers &amp; vanity reports</div>
                </div>
                <div className={styles.comparisonRows}>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Reports vanity impressions and superficial traffic with zero pipeline impact</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Account delegated to junior interns; opaque communication loops</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Slow monthly turnaround with zero rapid creative or bid iteration</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Generic national strategies that ignore Odisha consumer psychology</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Locked ad accounts; clients lose data when contracts end</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Marketing Copilot */}
            <ScrollReveal delay={120}>
              <div className={styles.comparisonCardGood}>
                <div className={styles.comparisonWinnerBadge}>★ RECOMMENDED CHOICE</div>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonTitle}>Marketing Copilot</div>
                  <div className={styles.comparisonSub}>Revenue-first fractional growth partner</div>
                </div>
                <div className={styles.comparisonRows}>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>Strict attribution tied directly to phone inquiries, booked visits, and sales</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>Senior growth strategists leading weekly sprints and direct Slack/WhatsApp access</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>Continuous daily campaign adjustments, bid pruning, and weekly creative tests</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>Hyperlocal Odisha intelligence (Raja, Puja seasons, pin code micro-targeting)</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>100% ad account, pixel, and creative IP ownership stays with your business</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. VISUAL SPOTLIGHT WITH REAL PHOTOGRAPHY
         ══════════════════════════════════════════════════ */}
      <section className={styles.spotlightSection}>
        <div className="container">
          <div className={styles.spotlightGrid}>
            <div className={styles.spotlightVisual}>
              <ScrollReveal>
                <div className={styles.spotlightImgBox}>
                  <Image
                    src={spotlightImage}
                    alt={`Strategic campaign execution in Bhubaneswar — Marketing Copilot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className={styles.spotlightImg}
                  />
                  <div className={styles.spotlightImgOverlay} />
                  <div className={styles.spotlightFloatingBadge}>
                    <span className={styles.spotlightBadgeIcon}>📊</span>
                    <div>
                      <div className={styles.spotlightBadgeTitle}>Real-time Growth Dashboards</div>
                      <div className={styles.spotlightBadgeSub}>Transparent reporting for Bhubaneswar clients</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className={styles.spotlightContent}>
              <ScrollReveal delay={150}>
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  Growth Execution
                </div>
                <h2 className={`display-md ${styles.spotlightTitle}`}>
                  Data-Driven Execution Built for the{' '}
                  <span className="accent-gradient">Bhubaneswar Market.</span>
                </h2>
                <p className={styles.spotlightLead}>
                  We don&apos;t just run tactics; we engineer integrated acquisition architectures. Every campaign is monitored daily, A/B tested continuously, and tied directly to qualified revenue.
                </p>

                <div className={styles.spotlightList}>
                  <div className={styles.spotlightItem}>
                    <span className={styles.spotlightItemIcon}>✓</span>
                    <span className={styles.spotlightItemText}>
                      <strong>Zero Vanity Metric Bias:</strong> We measure phone calls, showroom visits, verified form fills, and actual customer acquisitions.
                    </span>
                  </div>
                  <div className={styles.spotlightItem}>
                    <span className={styles.spotlightItemIcon}>✓</span>
                    <span className={styles.spotlightItemText}>
                      <strong>Hyperlocal Geographic Segmentation:</strong> Bid adjustments tuned by pin code across Patia, Saheed Nagar, Khandagiri, and Cuttack.
                    </span>
                  </div>
                  <div className={styles.spotlightItem}>
                    <span className={styles.spotlightItemIcon}>✓</span>
                    <span className={styles.spotlightItemText}>
                      <strong>Rapid Creative Testing Velocity:</strong> High-impact hooks, regional language creative variants, and dynamic ad copy rotations.
                    </span>
                  </div>
                </div>

                {/* Animated Glowing Border Beam Button */}
                <div className={styles.borderBeamWrapper} style={{ alignSelf: 'flex-start' }}>
                  <div className={styles.borderGlowAmbient} />
                  <div className={styles.borderBeamSpin} />
                  <Link href="/contact" className={styles.btnStartPrimary}>
                    <span className={styles.btnShimmer} />
                    <span className={styles.btnGlassGloss} />
                    <span>Book 1-on-1 Strategy Session</span>
                    <span className={styles.btnArrow}>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. HYPERLOCAL BHUBANESWAR GROWTH CORRIDORS (6 HUBS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.corridorsSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              Hyperlocal Reach
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              Dominating Key <span className="accent-gradient">Bhubaneswar Commercial Hubs</span>
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 640, margin: '10px auto 0' }}>
              We tailor audience segments, geo-fences, and search clusters across every major commercial micro-market.
            </p>
          </ScrollReveal>

          <div className={styles.corridorsGrid}>
            {bhubaneswarCorridors.map((c, idx) => (
              <ScrollReveal key={c.hub} delay={idx * 60}>
                <div className={styles.corridorCard}>
                  <span className={styles.corridorTag}>{c.focus}</span>
                  <h3 className={styles.corridorTitle}>{c.hub}</h3>
                  <p className={styles.corridorDesc}>{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. BHUBANESWAR CASE STUDY HIGHLIGHT (ROI Card)
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.caseCard}>
              <div className={styles.caseCardBgGlow} />
              <div>
                <div className={styles.caseEyebrow}>
                  <span>📍 Verified Bhubaneswar Case Result</span>
                </div>
                <h3 className={styles.caseTitle}>
                  {defaultCase.client}
                </h3>
                <p className={styles.caseStory}>
                  {defaultCase.summary}
                </p>
                <div style={{ fontSize: 13, color: '#FEF3C7', fontWeight: 600 }}>
                  Location: {defaultCase.location}
                </div>
              </div>

              <div className={styles.caseRightPane}>
                <div className={styles.caseMetricVal}>{defaultCase.metric}</div>
                <div className={styles.caseMetricLabel}>{defaultCase.metricLabel}</div>
                <div className={styles.borderBeamWrapper}>
                  <div className={styles.borderGlowAmbient} />
                  <div className={styles.borderBeamSpin} />
                  <Link href="/portfolio" className={styles.btnStartPrimary} style={{ padding: '12px 24px', fontSize: 13.5 }}>
                    <span className={styles.btnShimmer} />
                    <span className={styles.btnGlassGloss} />
                    <span>View All Case Studies</span>
                    <span className={styles.btnArrow}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. PLATFORMS WE MASTER
         ══════════════════════════════════════════════════ */}
      {platforms && platforms.length > 0 && (
        <section className={styles.platformsSection}>
          <div className="container">
            <ScrollReveal className="text-center">
              <p className="label" style={{ color: '#64748B', marginBottom: 20 }}>
                Enterprise Platforms &amp; Growth Technologies We Master
              </p>
              <div className={styles.platforms}>
                {platforms.map((p) => (
                  <span key={p} className={styles.platform}>
                    {p}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════
          9. PROVEN 4-STEP PROCESS (Numbered Cards)
         ══════════════════════════════════════════════════ */}
      <section className={styles.processSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              Predictable Roadmap
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              How Marketing Copilot Delivers In Bhubaneswar
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 620, margin: '10px auto 0' }}>
              A battle-tested 4-step framework engineered to eliminate guesswork and drive compounding ROI.
            </p>
          </ScrollReveal>

          <div className={styles.processSteps}>
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className={styles.processStep}>
                  <div
                    className={styles.stepNum}
                    style={{ background: `${color}18`, color }}
                  >
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

      {/* ══════════════════════════════════════════════════
          10. SERVICE-SPECIFIC FAQ ACCORDION (Bhubaneswar Focused)
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              Frequently Asked Questions
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              Answers for Bhubaneswar Business Leaders
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 600, margin: '10px auto 0' }}>
              Everything you need to know about our {eyebrow} services in Bhubaneswar.
            </p>
          </ScrollReveal>

          <div className={styles.faqList}>
            {defaultFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestionBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. GLOBAL CTA SECTION
         ══════════════════════════════════════════════════ */}
      <CTASection />
    </div>
  );
}
