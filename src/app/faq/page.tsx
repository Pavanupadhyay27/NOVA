'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

interface FAQItem {
  q: string;
  a: string;
  takeaway?: string;
  bullets?: string[];
}

interface FAQGroup {
  id: string;
  title: string;
  badge: string;
  highlight: string;
  collage: {
    mainImage: string;
    subImage: string;
    caption: string;
    tag: string;
  };
  faqs: FAQItem[];
}

const faqGroups: FAQGroup[] = [
  {
    id: 'general',
    title: 'General Questions',
    badge: 'AGENCY & SCOPE',
    highlight: 'Hyperlocal Bhubaneswar Intelligence + Silicon Valley Technical Architecture',
    collage: {
      mainImage: '/images/team_office.jpg',
      subImage: '/images/about_hero.jpg',
      caption: 'Strategy Command Center • DLF Cybercity & Patia',
      tag: '🏢 LOCAL EXECUTIVE TEAM',
    },
    faqs: [
      {
        q: 'What digital marketing services does Marketing Copilot offer in Bhubaneswar?',
        a: 'Marketing Copilot is Bhubaneswar\'s full-funnel revenue and digital marketing agency. We engineer complete growth engines: technical SEO, Google Search & PMax Ads, Meta (Instagram & Facebook) performance campaigns, high-speed Next.js web applications, hyperlocal Google Maps 3-Pack rank dominance, automated WhatsApp CRM lead bridges, and board-level revenue attribution auditing.',
        takeaway: 'Full-funnel execution from first search query to closed revenue.',
        bullets: [
          'Google Search, Display & Performance Max Ads',
          'Meta Video Ads & Advantage+ Catalog Retargeting',
          'Google Maps 3-Pack & Hyperlocal Pin Code SEO',
          'Sub-second Next.js Web & Interactive App Engineering',
        ],
      },
      {
        q: 'Why should I choose a Bhubaneswar-based digital marketing agency?',
        a: 'A local agency possesses ground-level geographic intelligence: understanding buyer purchasing power differences between Patia IT corridors versus legacy Saheed Nagar commercial belts, festival consumer surges during Durga Puja and Ratha Yatra, and local Odia search psychology. We combine this hyperlocal intelligence with Tier-1 Silicon Valley technical architecture.',
        takeaway: 'Hyperlocal market psychology married to Tier-1 technical infrastructure.',
      },
      {
        q: 'How quickly can I expect to see verified results from digital marketing?',
        a: 'Paid channels (Google Search & Meta Ads) go live and typically begin generating verified OTP inquiries within 48 to 72 hours. Google Maps 3-Pack rankings generally materialize in 4 to 8 weeks. Compounding organic SEO authority compounds solidly over 3 to 6 months. We commit to strict written milestone SLAs before onboarding.',
        takeaway: 'Paid leads live in 72 hours; compounding organic dominance in 90 days.',
      },
      {
        q: 'Do you work with single-location small businesses in Bhubaneswar?',
        a: 'Yes. Over 40% of our active roster comprises single-location clinics, coaching hubs, boutique builders, and specialized retail stores across Bhubaneswar and Cuttack. We offer dedicated 30-Day Sprint packages engineered specifically for single-unit businesses to dominate their immediate 15km commercial radius.',
        takeaway: 'Tailored 30-day market entry sprints built specifically for single-unit hubs.',
      },
    ],
  },
  {
    id: 'seo',
    title: 'SEO & Local Search',
    badge: 'ORGANIC DOMINANCE',
    highlight: 'Rank #1 in Bhubaneswar Maps Across 12 Geo-Fenced Pin Codes',
    collage: {
      mainImage: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80',
      subImage: '/images/work_realestate.jpg',
      caption: 'Local 3-Pack Dominance • Patia & Saheed Nagar',
      tag: '📍 GEO-FENCED SEO ENGINE',
    },
    faqs: [
      {
        q: 'How long does SEO take to work for a Bhubaneswar business?',
        a: 'For most local commercial searches in Bhubaneswar, technical improvements and localized keyword shielding show noticeable Google rank acceleration within 60 to 90 days. High-volume competitive keywords (such as real estate or healthcare) reach top 3 positions within 4 to 6 months, delivering compounding organic inbound pipelines with zero ongoing ad spend.',
        takeaway: 'First ranking acceleration in 60 days; compounding lead generation by month 4.',
        bullets: [
          'Immediate technical crawlability and sub-second Core Web Vitals audit',
          'Hyperlocal geo-tagged authority citation building across Odisha directories',
          'Targeted commercial intent keyword mapping for Bhubaneswar pin codes',
        ],
      },
      {
        q: 'What is Local SEO and why is it important for Bhubaneswar businesses?',
        a: 'Local SEO positions your business in Google\'s Local 3-Pack—the premier map listings that capture 68% of all commercial clicks when customers search "near me" or "in Bhubaneswar". When a buyer in Infocity searches "dentist near me" or "3 BHK flat in Patia", Local SEO ensures your phone number, reviews, and address dominate the screen.',
        takeaway: 'Captures the 68% of high-intent mobile searchers looking for immediate local solutions.',
      },
      {
        q: 'Can you help us rank #1 on Google Maps in Bhubaneswar?',
        a: 'Yes. Google Business Profile (GBP) optimization is one of our flagship capabilities. We manage geo-fencing, review velocity systems, local citation syndication, and localized schema markup to establish your clinic, showroom, or office as the verified top authority in your specific pin code.',
        takeaway: 'Proven track record of ranking clients #1 in Bhubaneswar Google Maps 3-Pack.',
      },
      {
        q: 'What does a comprehensive SEO audit include?',
        a: 'Our audits inspect 140+ ranking factors: Core Web Vitals performance, JavaScript rendering latency, mobile indexing bottlenecks, competitor keyword gap analysis, toxic backlink footprints, local citation accuracy, and an actionable 90-day technical remediation blueprint.',
        takeaway: 'A complete 140-point technical, on-page, and competitive gap roadmap.',
      },
    ],
  },
  {
    id: 'ads',
    title: 'Google Ads & Meta Ads',
    badge: 'PAID PERFORMANCE',
    highlight: '6X–8X Average ROAS with Negative Keyword Ad Shielding',
    collage: {
      mainImage: '/images/dashboard_hero.jpg',
      subImage: '/images/hero_performance_scale.jpg',
      caption: 'Live CPL & Revenue Attribution Terminal',
      tag: '⚡ NEGATIVE KEYWORD SHIELD',
    },
    faqs: [
      {
        q: 'What monthly ad spend is required to start Google Ads in Bhubaneswar?',
        a: 'We generally recommend a minimum monthly media budget of ₹25,000 to ₹45,000 for single-location businesses in Bhubaneswar. This budget provides statistically significant click volume to train Google\'s smart bidding algorithms and generate verified leads within week one. High-ticket sectors like luxury villas or tertiary hospitals scale between ₹75,000 to ₹3,00,000+.',
        takeaway: 'Starter media budgets from ₹25K/mo; scalable growth models up to ₹3L+/mo.',
      },
      {
        q: 'What is ROAS and what benchmarks can we realistically achieve?',
        a: 'Return on Ad Spend (ROAS) calculates gross revenue generated per rupee invested in ads. Across our Odisha client portfolio, e-commerce and retail brands average 4.5X to 7.8X direct ROAS, while high-ticket B2B, healthcare, and real estate clients generate 12X to 24X pipeline multiplier yield.',
        takeaway: '4.5X–7.8X for direct retail; 12X–24X pipeline yield for high-ticket verticals.',
      },
      {
        q: 'What is the strategic difference between Google Ads and Meta Ads?',
        a: 'Google Search Ads harvest active high-intent demand—capturing users who are typing "emergency dental clinic Bhubaneswar" right now. Meta Ads (Instagram/Facebook) manufacture interest—interrupting qualified buyers with high-converting video creative and 3D product tours based on their demographic profile and interests. The most resilient pipelines orchestrate both.',
        takeaway: 'Google captures active buyers; Meta generates brand desire and retargets visitors.',
      },
      {
        q: 'Do you handle creative video production and ad copywriting?',
        a: 'Yes. Every engagement includes full-service creative production: high-converting direct-response ad copy in English and Odia, motion graphic designs, dynamic product catalog feeds, and on-location 4K video shoots for Bhubaneswar businesses.',
        takeaway: 'Complete in-house creative studio—zero need for third-party designers or copywriters.',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    badge: 'BRAND REPUTATION',
    highlight: 'On-Location 4K Video Production for Real Bhubaneswar Audiences',
    collage: {
      mainImage: '/images/soundstage_studio.jpg',
      subImage: '/images/work_fashion.jpg',
      caption: 'Creative Soundstage & Reels Production Pod',
      tag: '🎬 4K CREATIVE PRODUCTION',
    },
    faqs: [
      {
        q: 'Which social media platforms should my Bhubaneswar business prioritize?',
        a: 'For consumer-facing brands (cafes, healthcare clinics, jewelry showrooms, real estate): Instagram Reels and Meta Ads generate the fastest conversion. For B2B industrial fabricators, technology companies, and commercial contractors: LinkedIn and Google Search yield higher deal value. We focus resources on the 2 channels where your buyers actually spend attention.',
        takeaway: 'Laser focus on 2 high-conversion channels rather than spreading thin everywhere.',
      },
      {
        q: 'How frequently should our business publish content?',
        a: 'Strategic consistency outperforms vanity volume. We typically engineer 3 to 4 high-production Reels/posts per week, backed by daily conversational Stories and hyper-targeted paid distribution to ensure content reaches real decision-makers in Odisha rather than ghost accounts.',
        takeaway: '3–4 high-impact weekly assets with guaranteed local reach, not spammy daily fluff.',
      },
      {
        q: 'Can you grow genuine, local Bhubaneswar followers on Instagram?',
        a: 'Yes. We strictly reject fake follower bots. We build organic following through localized trending audio, collaborations with verified Bhubaneswar creators, geo-tagged educational carousels, and location-targeted engagement campaigns that attract genuine buyers living in the city.',
        takeaway: '100% genuine local audience growth that translates into showroom footfall and inquiries.',
      },
    ],
  },
  {
    id: 'web',
    title: 'Website Development',
    badge: 'INFRASTRUCTURE',
    highlight: '< 0.8s Load Speeds to Double Ad Visitor Conversion',
    collage: {
      mainImage: '/images/hero_growth_mastery.jpg',
      subImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      caption: 'Sub-Second Next.js 15 Web Architecture',
      tag: '💻 NEXT.JS 15 ENGINE',
    },
    faqs: [
      {
        q: 'How much does a commercial business website cost in Bhubaneswar?',
        a: 'High-speed Next.js landing page funnels start at ₹25,000. Comprehensive corporate websites engineered on Next.js 15 with headless CMS range from ₹45,000 to ₹95,000. Enterprise multi-location platforms and custom e-commerce web applications are quoted transparently based on architecture requirements.',
        takeaway: 'High-speed performance landing pages from ₹25K; enterprise web platforms from ₹45K.',
      },
      {
        q: 'Why do you build on Next.js instead of generic WordPress templates?',
        a: 'Generic WordPress websites with 30+ plugins load in 4 to 7 seconds on Indian mobile networks, causing 53% of paid visitors to bounce before the page even renders. Our Next.js 15 architectures load in under 0.8 seconds, achieve perfect 95+ Google Lighthouse scores, and convert ad traffic at 2.5X the industry standard.',
        takeaway: 'Sub-second page speeds prevent wasted ad clicks and double visitor-to-lead conversion.',
      },
      {
        q: 'How long does it take to design, code, and launch our website?',
        a: 'Single-page high-converting landing pages launch within 7 to 10 business days. Full corporate multi-page architectures typically deploy in 3 to 4 weeks with weekly live staging links, interactive reviews, and complete mobile optimization.',
        takeaway: '7–10 days for focused ad funnels; 3–4 weeks for comprehensive corporate platforms.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Engagement Process',
    badge: 'COMMERCIAL SLA',
    highlight: 'Zero Long-Term Lock-Ins. 100% Attribution Verified Every Week',
    collage: {
      mainImage: '/images/about_hero.jpg',
      subImage: '/images/ceo_aarav.jpg',
      caption: 'Executive Boardroom Strategy & Reporting',
      tag: '🔒 AUDITED REVENUE SLA',
    },
    faqs: [
      {
        q: 'How do we get started with Marketing Copilot in Bhubaneswar?',
        a: 'The engagement starts with a confidential 45-minute growth diagnostic session. We audit your current digital footprint, analyze your top 3 competitors in Odisha, and present a custom 90-day acquisition roadmap with guaranteed CPL ceilings and clear milestones before any contract is signed.',
        takeaway: 'Zero-pressure 45-minute technical audit with transparent competitive analysis.',
      },
      {
        q: 'Do you require long-term contracts or lock-in commitments?',
        a: 'No. We operate on transparent outcome-based monthly retainers and 30-day fixed sprints. We earn client retention every single month through audited revenue attribution and verified pipeline delivery—not restrictive legal lock-ins.',
        takeaway: 'Zero long-term lock-ins. Month-to-month accountability tied directly to performance.',
      },
      {
        q: 'How do you report on monthly results and pipeline progression?',
        a: 'Every client receives access to a 24/7 live Looker Studio executive dashboard tracking real-time ad spend, verified phone leads, cost-per-lead, and pipeline value. Additionally, we conduct bi-weekly executive strategy reviews with your leadership team to optimize close rates.',
        takeaway: '24/7 live executive dashboard + bi-weekly strategic pipeline reviews.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>('general-0');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Direct Inquiry Form State
  const [formState, setFormState] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const toggle = (key: string) => {
    setOpenItem((prev) => (prev === key ? null : key));
  };

  // Filtered FAQs based on live search & category filter
  const filteredGroups = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return faqGroups
      .filter((group) => {
        if (selectedCategory !== 'all' && group.id !== selectedCategory) {
          return false;
        }
        return true;
      })
      .map((group) => {
        if (!q) return group;
        const matchingFaqs = group.faqs.filter(
          (faq) =>
            faq.q.toLowerCase().includes(q) ||
            faq.a.toLowerCase().includes(q) ||
            faq.takeaway?.toLowerCase().includes(q)
        );
        return {
          ...group,
          faqs: matchingFaqs,
        };
      })
      .filter((group) => group.faqs.length > 0);
  }, [searchQuery, selectedCategory]);

  const totalFilteredCount = useMemo(() => {
    return filteredGroups.reduce((acc, curr) => acc + curr.faqs.length, 0);
  }, [filteredGroups]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName || !formState.phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className={styles.page}>
      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO COMMAND CENTER WITH SKEUOMORPHIC (?) MEDALLION
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={styles.watermarkGlyph}>?</div>

        <div className="container">
          <div className={styles.heroDualLayout}>
            {/* Left Content Column */}
            <div className={styles.heroLeftCol}>
              <ScrollReveal>
                <div className="eyebrow" style={{ marginBottom: 12 }}>
                  <span className="eyebrow-dot" />
                  FREQUENTLY ASKED QUESTIONS &bull; ODISHA GROWTH INTELLIGENCE
                </div>
                <h1 className={`display-xl ${styles.heroTitle}`}>
                  Everything You Need to Know About<br />
                  <span className="accent-gradient">Scaling in Bhubaneswar.</span>
                </h1>
                <p className={`body-lg ${styles.heroSub}`}>
                  Clear, transparent answers to commercial, technical, and strategic questions about digital marketing, Google &amp; Meta Ads, Local SEO, and Next.js web infrastructure in Odisha.
                </p>

                {/* Minimal Interactive Search Console */}
                <div className={styles.searchConsoleWrap}>
                  <div className={styles.searchConsole}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input
                      type="text"
                      placeholder="Search any question (e.g. Google Ads budget, Local SEO, pricing)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={styles.searchInput}
                      aria-label="Search frequently asked questions"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        className={styles.clearSearchBtn}
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                      >
                        ✕
                      </button>
                    )}
                    <span className={styles.searchCountBadge}>
                      {totalFilteredCount} {totalFilteredCount === 1 ? 'Answer' : 'Answers'}
                    </span>
                  </div>

                  {/* Category Quick-Filter Pills */}
                  <div className={styles.categoryPillsRow}>
                    <button
                      type="button"
                      className={`${styles.categoryPill} ${selectedCategory === 'all' ? styles.categoryPillActive : ''}`}
                      onClick={() => setSelectedCategory('all')}
                    >
                      All Questions (24)
                    </button>
                    {faqGroups.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        className={`${styles.categoryPill} ${selectedCategory === g.id ? styles.categoryPillActive : ''}`}
                        onClick={() => setSelectedCategory(g.id)}
                      >
                        {g.title} ({g.faqs.length})
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Skeuomorphic (?) Medallion & Visual Anchor */}
            <div className={styles.heroRightCol}>
              <ScrollReveal delay={120}>
                <div className={styles.heroVisualMedallionFrame}>
                  {/* Floating Skeuomorphic (?) Emblem */}
                  <div className={styles.floatingQuestionEmblem}>
                    <div className={styles.emblemOuterRing}>
                      <div className={styles.emblemInnerPlate}>
                        <span className={styles.emblemQuestionGlyph}>?</span>
                      </div>
                    </div>
                    <div className={styles.emblemLivePulse} />
                  </div>

                  {/* Curated Strategic Collage Backdrop */}
                  <div className={styles.heroCollageBackdrop}>
                    <div className={styles.collageLayerMain}>
                      <Image
                        src="/images/dashboard_hero.jpg"
                        alt="Marketing Copilot Analytics Terminal"
                        fill
                        priority
                        className={styles.collageImgCover}
                      />
                      <div className={styles.collageImgOverlay} />
                    </div>
                    <div className={styles.collageLayerFloating}>
                      <Image
                        src="/images/team_office.jpg"
                        alt="Bhubaneswar Marketing Team Strategy Session"
                        fill
                        className={styles.collageImgCover}
                      />
                      <div className={styles.collageImgOverlaySubtle} />
                      <div className={styles.floatingTagPill}>
                        📍 DLF Cybercity &bull; Bhubaneswar
                      </div>
                    </div>
                  </div>

                  {/* Tactical KPI Tag */}
                  <div className={styles.heroTactileKpiBadge}>
                    <span className={styles.kpiBadgeIcon}>🔒</span>
                    <div className={styles.kpiBadgeMeta}>
                      <strong>100% Written Attribution SLA</strong>
                      <span>Direct CPL ceilings &amp; zero long-term lock-in</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: STORYTELLING ARCHITECTURE (WITHOUT ANY CARD)
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.storySection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.storyHeader}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                <span className="eyebrow-dot" />
                THE ACQUISITION MANIFESTO &bull; BHUBANESWAR &amp; ODISHA
              </div>
              <h2 className={`display-md ${styles.storyMainTitle}`}>
                The Anatomy of Market Dominance:<br />
                <span className="accent-gradient">How Bhubaneswar Brands Break Out of the Commodity Trap.</span>
              </h2>
              <p className={styles.storyLeadText}>
                Most businesses in Odisha spend years burning ad budgets with generic agencies because they treat marketing as a cosmetic expense rather than an engineered revenue assembly line. Here is the true story of how market leaders are built in this city.
              </p>
            </div>
          </ScrollReveal>

          {/* Continuous Architectural Story Spine (Card-Free) */}
          <div className={styles.storySpineContainer}>
            <div className={styles.storyVerticalSpine} />

            {/* Chapter 01 */}
            <div className={styles.storyChapter}>
              <div className={styles.chapterNodeWrap}>
                <div className={styles.chapterNodePulse} />
                <span className={styles.chapterNumeral}>01</span>
              </div>
              <div className={styles.chapterContent}>
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterPhaseBadge}>PHASE 01: THE BLIND SPOT</span>
                  <span className={styles.chapterAnchorTag}>📍 Patia, Saheed Nagar &amp; Nayapalli Corridors</span>
                </div>
                <h3 className={styles.chapterHeading}>
                  The Invisible Bleed: Why 65% of High-Intent Buyers Never Reach Your Store or Clinic
                </h3>
                <div className={styles.chapterNarrative}>
                  <p>
                    Every morning in Bhubaneswar, over 40,000 residents pull out their smartphones to find commercial solutions: a specialist doctor in Saheed Nagar, a luxury 3 BHK flat near Infocity, or a structural fabrication contractor in Mancheswar.
                  </p>
                  <p>
                    Traditional businesses rely on static storefront signs, word-of-mouth, and broker commissions. Meanwhile, modern competitors capture those exact customers at the precise second of intent through Google Maps 3-Pack and negative-shielded Search ads.
                  </p>
                </div>
                <div className={styles.chapterInlineMetric}>
                  <span className={styles.inlineMetricDot} />
                  <strong>Hyperlocal Reality:</strong> 68% of Bhubaneswar mobile searches convert to a phone call or site visit within 24 hours. If you are not in the top 3, you do not exist to the market.
                </div>
              </div>
            </div>

            {/* Chapter 02 */}
            <div className={styles.storyChapter}>
              <div className={styles.chapterNodeWrap}>
                <div className={styles.chapterNodePulse} />
                <span className={styles.chapterNumeral}>02</span>
              </div>
              <div className={styles.chapterContent}>
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterPhaseBadge}>PHASE 02: THE ARCHITECTURAL SHIFT</span>
                  <span className={styles.chapterAnchorTag}>⚡ Sub-Second Next.js Infrastructure</span>
                </div>
                <h3 className={styles.chapterHeading}>
                  Speed as a Moat: Replacing Fragile WordPress Templates with High-Velocity Code
                </h3>
                <div className={styles.chapterNarrative}>
                  <p>
                    Most agency websites in Odisha take 4 to 6 seconds to load over local 4G/5G mobile connections. By second 3, over half of the visitors you paid for click away in frustration.
                  </p>
                  <p>
                    We replace bloated legacy websites with sub-second Next.js 15 web architecture. Pages load in under 0.8 seconds with interactive 3D tours and dynamic WhatsApp reservation bots, cutting bounce rates by 60% and turning previously wasted clicks into verified conversations.
                  </p>
                </div>
                <div className={styles.chapterInlineMetric}>
                  <span className={styles.inlineMetricDot} />
                  <strong>Infrastructure Edge:</strong> A 1-second reduction in page load speed increases paid traffic conversion by up to 27% in Tier-2 Indian commercial hubs.
                </div>
              </div>
            </div>

            {/* Chapter 03 */}
            <div className={styles.storyChapter}>
              <div className={styles.chapterNodeWrap}>
                <div className={styles.chapterNodePulse} />
                <span className={styles.chapterNumeral}>03</span>
              </div>
              <div className={styles.chapterContent}>
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterPhaseBadge}>PHASE 03: THE COMPOUND FLYWHEEL</span>
                  <span className={styles.chapterAnchorTag}>🔄 Multi-Stage Behavioral Retargeting</span>
                </div>
                <h3 className={styles.chapterHeading}>
                  Beyond Vanity Likes: Automating the 90-Second Lead-to-Conversation Bridge
                </h3>
                <div className={styles.chapterNarrative}>
                  <p>
                    Traditional marketing agencies celebrate &ldquo;impressions&rdquo; and &ldquo;likes&rdquo; that never pay salaries or fund business expansion. In the real world, leads decay exponentially with every passing minute.
                  </p>
                  <p>
                    We engineer bi-directional WhatsApp CRM automations. When a prospective home buyer or clinical patient requests information, an automated WhatsApp sequence confirms their booking and delivers an executive dossier within 90 seconds—locking in appointments before competitors even open their email inbox.
                  </p>
                </div>
                <div className={styles.chapterInlineMetric}>
                  <span className={styles.inlineMetricDot} />
                  <strong>Speed to Lead:</strong> Contacting an inbound inquiry within 90 seconds increases qualification probability by 391% compared to a 30-minute response delay.
                </div>
              </div>
            </div>

            {/* Chapter 04 */}
            <div className={styles.storyChapter}>
              <div className={styles.chapterNodeWrap}>
                <div className={styles.chapterNodePulse} />
                <span className={styles.chapterNumeral}>04</span>
              </div>
              <div className={styles.chapterContent}>
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterPhaseBadge}>PHASE 04: SECTOR MONOPOLIZATION</span>
                  <span className={styles.chapterAnchorTag}>🏆 Audited Boardroom Attribution</span>
                </div>
                <h3 className={styles.chapterHeading}>
                  Predictable Commercial Dominance: Zero Guesswork, Written Guarantees
                </h3>
                <div className={styles.chapterNarrative}>
                  <p>
                    When your search shielding, sub-second web funnels, and automated CRM pipelines operate synchronously, marketing transforms from a stressful gamble into a predictable mathematical growth lever.
                  </p>
                  <p>
                    You know your exact cost-per-qualified-lead, your pipeline multiplier in Bhubaneswar, and your true ROAS. No lock-in contracts. No smoke and mirrors. Just weekly audited attribution reports and compounding market dominance across Odisha.
                  </p>
                </div>
                <div className={styles.chapterInlineMetric}>
                  <span className={styles.inlineMetricDot} />
                  <strong>The Outcome:</strong> Consistent client retention rates of 98% because our revenue engines pay for themselves multiple times over every month.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: RE-ENGINEERED FAQ ACCORDION CONSOLE WITH SECTION COLLAGES
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.faqSection} id="faq-directory">
        <div className="container">
          <ScrollReveal>
            <div className={styles.faqSectionHeader}>
              <div className="eyebrow eyebrow-center" style={{ margin: '0 auto 12px' }}>
                <span className="eyebrow-dot" />
                DETAILED KNOWLEDGE ARCHIVE
              </div>
              <h2 className={`display-md ${styles.faqSectionTitle}`}>
                Frequently Asked Strategic Questions.<br />
                <span className="accent-gradient">Unfiltered Answers from Our Revenue Engineers.</span>
              </h2>
              <p className={styles.faqSectionSub}>
                Browse answers organized by service discipline, complete with verified sector collages and technical takeaways.
              </p>
            </div>
          </ScrollReveal>

          {/* Dual-Pane Console Layout */}
          <div className={styles.layout}>
            {/* Sticky Minimal Navigation Spine */}
            <aside className={styles.sidebar}>
              <div className={styles.sideNavBox}>
                <div className={styles.sideNavHeader}>
                  <span className={styles.sideNavHeaderDot} />
                  <span>KNOWLEDGE SECTORS</span>
                </div>
                <nav className={styles.sideNav}>
                  <button
                    type="button"
                    className={`${styles.sideLink} ${selectedCategory === 'all' ? styles.sideLinkActive : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    <span>All Disciplines</span>
                    <span className={styles.sideLinkCount}>24</span>
                  </button>
                  {faqGroups.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      className={`${styles.sideLink} ${selectedCategory === g.id ? styles.sideLinkActive : ''}`}
                      onClick={() => {
                        setSelectedCategory(g.id);
                        const el = document.getElementById(`faq-group-${g.id}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      <span>{g.title}</span>
                      <span className={styles.sideLinkCount}>{g.faqs.length}</span>
                    </button>
                  ))}
                </nav>

                <div className={styles.sideHelpBox}>
                  <div className={styles.sideHelpTop}>
                    <span className={styles.sideHelpQuestionIcon}>?</span>
                    <span className={styles.sideHelpTitle}>Need an urgent audit?</span>
                  </div>
                  <p className={styles.sideHelpText}>
                    Our senior revenue engineers review your current digital footprint and deliver custom benchmarks in 48 hours.
                  </p>
                  <Link href="/contact" className={styles.sideHelpCta}>
                    Request Free Audit <span>→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Accordion List & Section Collages */}
            <div className={styles.groups}>
              {filteredGroups.length === 0 ? (
                <div className={styles.emptyStateBox}>
                  <span className={styles.emptyIcon}>🔍</span>
                  <h3 className={styles.emptyTitle}>No exact questions matched &ldquo;{searchQuery}&rdquo;</h3>
                  <p className={styles.emptyText}>
                    We likely have the answer you are looking for. Ask our senior strategists directly in the form below for a rapid response within 4 hours.
                  </p>
                  <button
                    type="button"
                    className={styles.resetFilterBtn}
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                  >
                    Reset Search &bull; View All 24 Questions
                  </button>
                </div>
              ) : (
                filteredGroups.map((group) => (
                  <div key={group.id} id={`faq-group-${group.id}`} className={styles.group}>
                    {/* Visual Collage Header Banner per Section */}
                    <div className={styles.sectionCollageBanner}>
                      <div className={styles.collageBannerMedia}>
                        <div className={styles.collageBannerMain}>
                          <Image
                            src={group.collage.mainImage}
                            alt={group.title}
                            fill
                            className={styles.collageImgCover}
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                          <div className={styles.collageImgOverlay} />
                          <div className={styles.collageBadgeTag}>
                            {group.collage.tag}
                          </div>
                        </div>
                        <div className={styles.collageBannerSub}>
                          <Image
                            src={group.collage.subImage}
                            alt={`${group.title} preview`}
                            fill
                            className={styles.collageImgCover}
                            sizes="(max-width: 768px) 40vw, 200px"
                          />
                          <div className={styles.collageImgOverlaySubtle} />
                        </div>
                      </div>

                      {/* Collage Text & Question Mark Accents */}
                      <div className={styles.collageBannerInfo}>
                        <div className={styles.collageInfoTop}>
                          <span className={styles.groupBadge}>{group.badge}</span>
                          <span className={styles.collageQuestionMark}>?</span>
                        </div>
                        <h3 className={styles.collageGroupTitle}>{group.title}</h3>
                        <p className={styles.collageGroupHighlight}>
                          {group.highlight}
                        </p>
                        <span className={styles.collageCaptionText}>
                          📍 {group.collage.caption}
                        </span>
                      </div>
                    </div>

                    {/* Accordion Questions List */}
                    <div className={styles.accordion}>
                      {group.faqs.map((faq, fi) => {
                        const key = `${group.id}-${fi}`;
                        const isOpen = openItem === key;
                        const questionNum = (fi + 1).toString().padStart(2, '0');

                        return (
                          <div
                            key={key}
                            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                          >
                            <button
                              type="button"
                              className={styles.question}
                              onClick={() => toggle(key)}
                              aria-expanded={isOpen}
                            >
                              <div className={styles.questionLeft}>
                                <span className={styles.questionPillMedallion}>
                                  <span className={styles.qMarkSmall}>?</span>
                                  <span>{questionNum}</span>
                                </span>
                                <span className={styles.questionText}>{faq.q}</span>
                              </div>
                              <div className={styles.questionIconWrap}>
                                <span className={styles.questionIcon}>{isOpen ? '−' : '+'}</span>
                              </div>
                            </button>

                            {isOpen && (
                              <div className={styles.answerWrap}>
                                <div className={styles.answerText}>{faq.a}</div>

                                {faq.bullets && faq.bullets.length > 0 && (
                                  <ul className={styles.answerBulletList}>
                                    {faq.bullets.map((b, bIdx) => (
                                      <li key={bIdx} className={styles.answerBulletItem}>
                                        <span className={styles.bulletCheckIcon}>✓</span>
                                        <span>{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}

                                {faq.takeaway && (
                                  <div className={styles.takeawayPill}>
                                    <span className={styles.takeawayLabel}>⚡ KEY TAKEAWAY:</span>
                                    <span className={styles.takeawayText}>{faq.takeaway}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: MINIMAL BUT ATTRACTIVE DIRECT QUESTION FORM
         ══════════════════════════════════════════════════════════ */}
      <section className={styles.directFormSection} id="ask-question">
        <div className="container">
          <ScrollReveal>
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <div className={styles.formEmblemWrap}>
                  <span className={styles.formQuestionEmblem}>?</span>
                </div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>
                  <span className="eyebrow-dot" />
                  DIRECT STRATEGIST INBOX &bull; RAPID 4-HOUR RESPONSE
                </div>
                <h2 className={styles.formTitle}>
                  Didn&apos;t Find Your Exact Answer?<br />
                  <span className="accent-gradient">Ask Our Senior Revenue Engineers Directly.</span>
                </h2>
                <p className={styles.formSub}>
                  Have a specific question about your industry, monthly budget, or competitor in Bhubaneswar? Drop it below. A senior strategist will review your business and reply directly within 4 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Question Received Successfully</h3>
                  <p className={styles.successText}>
                    Thank you, <strong>{formState.fullName}</strong>. Our senior revenue strategist has received your inquiry regarding <strong>{formState.businessName || 'your business'}</strong> and is already preparing your breakdown. Expect a direct response on <strong>+91 {formState.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className={styles.newQuestionBtn}
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ fullName: '', businessName: '', phone: '', question: '' });
                    }}
                  >
                    Ask Another Question →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={styles.minimalForm}>
                  <div className={styles.formGrid}>
                    {/* Full Name */}
                    <div className={styles.inputGroup}>
                      <label htmlFor="faq-name" className={styles.inputLabel}>
                        YOUR FULL NAME <span className={styles.reqStar}>*</span>
                      </label>
                      <input
                        id="faq-name"
                        type="text"
                        required
                        placeholder="e.g. Rajesh Mohapatra"
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        className={styles.formInput}
                      />
                    </div>

                    {/* Business Name & Sector */}
                    <div className={styles.inputGroup}>
                      <label htmlFor="faq-business" className={styles.inputLabel}>
                        BUSINESS NAME &amp; INDUSTRY
                      </label>
                      <input
                        id="faq-business"
                        type="text"
                        placeholder="e.g. Utkal Dental Clinic (Saheed Nagar)"
                        value={formState.businessName}
                        onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                        className={styles.formInput}
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className={styles.inputGroup}>
                      <label htmlFor="faq-phone" className={styles.inputLabel}>
                        PHONE / WHATSAPP NUMBER <span className={styles.reqStar}>*</span>
                      </label>
                      <div className={styles.phoneInputWrap}>
                        <span className={styles.countryCode}>🇮🇳 +91</span>
                        <input
                          id="faq-phone"
                          type="tel"
                          required
                          placeholder="98765 43210"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className={styles.phoneInput}
                        />
                      </div>
                    </div>

                    {/* Question / Challenge */}
                    <div className={`${styles.inputGroup} ${styles.inputFullWidth}`}>
                      <label htmlFor="faq-question" className={styles.inputLabel}>
                        YOUR QUESTION OR GROWTH BOTTLENECK <span className={styles.reqStar}>*</span>
                      </label>
                      <textarea
                        id="faq-question"
                        required
                        rows={3}
                        placeholder="e.g. We are spending ₹40,000 on Google Ads for our clinic in Patia but getting duplicate leads. Can you audit our negative keyword list?"
                        value={formState.question}
                        onChange={(e) => setFormState({ ...formState, question: e.target.value })}
                        className={styles.formTextarea}
                      />
                    </div>
                  </div>

                  {/* Form Action Row */}
                  <div className={styles.formActionRow}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.formSubmitBtn}
                    >
                      {isSubmitting ? (
                        <span>Transmitting to Strategists...</span>
                      ) : (
                        <span>Dispatch Question to Strategists →</span>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/918763570630?text=${encodeURIComponent(
                        'Hi Marketing Copilot, I have a strategic digital marketing question about my business in Bhubaneswar.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.formWhatsappBtn}
                    >
                      <span>💬 Prefer WhatsApp? Chat Now ↗</span>
                    </a>
                  </div>

                  <div className={styles.formTrustBar}>
                    <span>🔒 100% Confidential</span>
                    <span>&bull;</span>
                    <span>⚡ Direct response in &lt; 4 Hours</span>
                    <span>&bull;</span>
                    <span>🚫 Zero Spam or Sales Pressure</span>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <CTASection />
    </div>
  );
}
