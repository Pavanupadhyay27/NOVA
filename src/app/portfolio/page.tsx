'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import {
  spotlightProject,
  caseStudiesList,
  proofMetrics,
  transformationData,
  revenueProcessSteps,
  geoImpactLocations,
  industryVerticals,
  clientTestimonials,
  auditChecklist,
  engagementModels,
  CaseStudyItem,
} from './data';
import styles from './page.module.css';

const filterCategories = ['All', 'SEO', 'Paid Ads', 'Web Development', 'E-commerce', 'Social Media'];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(industryVerticals[0].id);
  const [openedAudits, setOpenedAudits] = useState<Record<string, boolean>>({ q1: true, q2: false, q3: false, q4: false });

  // Filter & Search Logic
  const filteredCases = caseStudiesList.filter((item) => {
    const matchesCategory = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentIndustryData = industryVerticals.find((v) => v.id === activeIndustry) || industryVerticals[0];

  const toggleAudit = (id: string) => {
    setOpenedAudits((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={styles.page}>
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: DUAL-PANE HERO
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Pane: High-Converting Text */}
            <div className={styles.heroTextPane}>
              <ScrollReveal>
                <div className={styles.eyebrowBadge}>
                  <span className={styles.sparkleDot} />
                  <span>Verified Client Outcomes • 12 Proof Pillars</span>
                </div>

                <h1 className={styles.heroTitle}>
                  Engineering Compounding{' '}
                  <span className="accent-gradient">Revenue &amp; Growth</span>{' '}
                  for Ambitious Brands.
                </h1>

                <p className={styles.heroDesc}>
                  We don&apos;t sell vanity metrics or vague promises. Browse our portfolio of audited client campaigns with verified commercial outcomes across Bhubaneswar, Odisha, and nationwide markets.
                </p>

                {/* Quick Trust Strip */}
                <div className={styles.heroTrustStrip}>
                  <div className={styles.heroTrustItem}>
                    <span className={styles.heroTrustVal}>₹65Cr+</span>
                    <span className={styles.heroTrustLabel}>Client Revenue</span>
                  </div>
                  <div className={styles.heroTrustDivider} />
                  <div className={styles.heroTrustItem}>
                    <span className={styles.heroTrustVal}>5.8X</span>
                    <span className={styles.heroTrustLabel}>Average ROAS</span>
                  </div>
                  <div className={styles.heroTrustDivider} />
                  <div className={styles.heroTrustItem}>
                    <span className={styles.heroTrustVal}>85+</span>
                    <span className={styles.heroTrustLabel}>#1 Google Rankings</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.heroActions}>
                  <BeamButton href="#showcase" label="Explore Case Studies ↓" size="md" />
                  <Link href="/contact" className={styles.secondaryBtn}>
                    <span>Request Custom Audit</span>
                    <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Pane: High-Impact Visual Showcase */}
            <div className={styles.heroVisualPane}>
              <ScrollReveal direction="right" delay={150}>
                <div className={styles.heroVisualFrame}>
                  <Image
                    src="/images/dashboard_hero.jpg"
                    alt="Marketing Copilot Verified Campaign Analytics Dashboard"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 550px"
                    className={styles.heroVisualImg}
                  />
                  <div className={styles.heroVisualOverlay} />

                  {/* Floating Micro-Badges */}
                  <div className={styles.heroVisualBadgeTop}>
                    <span>📍</span>
                    <span>Patia, Bhubaneswar — #1 Local SERP</span>
                  </div>

                  <div className={styles.heroVisualBadgeBottom}>
                    <span className={styles.floatingVal}>+320% Inbound Leads</span>
                    <span className={styles.floatingLabel}>Verified Commercial Return</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: LIVE PROOF METRICS STRIP
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.proofSection}>
        <div className="container">
          <div className={styles.proofGrid}>
            {proofMetrics.map((m, idx) => (
              <ScrollReveal key={m.label} delay={idx * 60}>
                <div className={styles.proofCard}>
                  <span className={styles.proofVal}>{m.val}</span>
                  <span className={styles.proofLabel}>{m.label}</span>
                  <span className={styles.proofSub}>{m.sub}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: FLAGSHIP SPOTLIGHT CASE STUDY
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.spotlightSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Featured Commercial Milestone</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Flagship Case Study: <span className="accent-gradient">Luxury Real Estate</span>
              </h2>
              <p className={styles.sectionSub}>
                How we helped a premier builder dominate organic Google search in Bhubaneswar and generate 90+ verified buyer leads monthly without portal dependency.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={100}>
            <div className={styles.spotlightCard}>
              {/* Visual Side */}
              <div className={styles.spotlightVisual}>
                <Image
                  src={spotlightProject.image}
                  alt={spotlightProject.client}
                  fill
                  sizes="(max-width: 900px) 100vw, 600px"
                  className={styles.spotlightVisualImg}
                />
                <div className={styles.spotlightOverlay} />

                <div className={styles.spotlightPillRow}>
                  <span className={styles.spotlightTag}>{spotlightProject.service}</span>
                  <span className={styles.spotlightLocation}>{spotlightProject.location}</span>
                </div>

                <div className={styles.spotlightVisualStats}>
                  {spotlightProject.stats.map((s) => (
                    <div key={s.label} className={styles.spotlightStatBox}>
                      <div className={styles.spotlightStatVal}>{s.val}</div>
                      <div className={styles.spotlightStatLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className={styles.spotlightContent}>
                <span className={styles.spotlightClient}>{spotlightProject.client}</span>
                <h3 className={styles.spotlightHeadline}>{spotlightProject.headline}</h3>
                <p className={styles.spotlightDesc}>{spotlightProject.desc}</p>

                <div className={styles.spotlightDeliverables}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Key Deliverables Executed:
                  </span>
                  {spotlightProject.deliverables.map((item) => (
                    <div key={item} className={styles.deliverableItem}>
                      <span className={styles.checkDot}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ paddingTop: 12 }}>
                  <BeamButton
                    onClick={() => setSelectedCase(spotlightProject)}
                    label="View Full Strategic Breakdown →"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CURATED FILTERABLE CASE STUDIES & QUICK DETAIL DRAWER
          ───────────────────────────────────────────────────────────── */}
      <section id="showcase" className={styles.showcaseSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Verified Client Portfolio</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Curated Results Across <span className="accent-gradient">Key Channels</span>
              </h2>
              <p className={styles.sectionSub}>
                Filter by practice area or search by industry. Click any case study to inspect the challenge, execution timeline, and verified outcomes.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Bar & Search */}
          <div className={styles.filterBar}>
            <div className={styles.filters}>
              {filterCategories.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by industry or keyword..."
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Curated Grid */}
          <div className={styles.curatedGrid}>
            {filteredCases.map((c, i) => (
              <ScrollReveal key={c.id} delay={i * 60}>
                <div
                  className={styles.caseCard}
                  onClick={() => setSelectedCase(c)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setSelectedCase(c);
                  }}
                >
                  <div className={styles.cardImgWrap}>
                    <Image
                      src={c.image}
                      alt={c.headline}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.cardImg}
                    />
                    <div className={styles.cardImgOverlay} />
                    <span className={styles.cardTopPill} style={{ color: c.color }}>
                      {c.industry}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardTag} style={{ background: `${c.tagColor}15`, color: c.tagColor }}>
                        {c.service}
                      </span>
                      <span className={styles.cardLocation}>{c.location}</span>
                    </div>

                    <h3 className={styles.cardTitle}>{c.headline}</h3>
                    <p className={styles.cardDesc}>{c.desc}</p>

                    <div className={styles.cardStatsRow}>
                      {c.stats.map((s) => (
                        <div key={s.label} className={styles.cardStat}>
                          <span className={styles.cardStatVal} style={{ color: c.color }}>{s.val}</span>
                          <span className={styles.cardStatLabel}>{s.label}</span>
                        </div>
                      ))}
                      <div className={styles.cardActionBtn}>
                        <span>Inspect</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Slide-over Quick Detail Drawer */}
      {selectedCase && (
        <div className={styles.drawerBackdrop} onClick={() => setSelectedCase(null)}>
          <div className={styles.drawerModal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.drawerClose}
              onClick={() => setSelectedCase(null)}
              aria-label="Close details"
            >
              ✕
            </button>

            <div className={styles.drawerImgWrap}>
              <Image
                src={selectedCase.image}
                alt={selectedCase.client}
                fill
                sizes="(max-width: 600px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className={styles.cardTag} style={{ background: `${selectedCase.tagColor}15`, color: selectedCase.tagColor }}>
                {selectedCase.service}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, margin: '10px 0 6px' }}>
                {selectedCase.client}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{selectedCase.location} • {selectedCase.industry}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {selectedCase.stats.map((s) => (
                <div key={s.label} style={{ background: 'var(--bg-surface)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: selectedCase.color }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800 }}>⚡ The Challenge</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{selectedCase.challenge}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800 }}>🚀 Marketing Copilot Solution</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{selectedCase.solution}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800 }}>🛠️ Deliverables Executed</h4>
              {selectedCase.deliverables.map((d) => (
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                  <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 16 }}>
              <BeamButton
                href="/contact"
                label="Get Similar Results for Your Business"
                size="md"
                fullWidth
              />
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: BEFORE & AFTER TRANSFORMATION MATRIX
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.transformSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Audited Commercial Deltas</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Before vs. After <span className="accent-gradient">Marketing Copilot</span>
              </h2>
              <p className={styles.sectionSub}>
                Real performance benchmarks demonstrating the tangible shift from legacy agency retainers to revenue engineering.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.transformGrid}>
            {transformationData.map((t, idx) => (
              <ScrollReveal key={t.metric} delay={idx * 70}>
                <div className={styles.transformCard}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={styles.transformMetricTitle}>{t.metric}</span>
                    <span className={styles.transformGainPill}>{t.gain}</span>
                  </div>

                  <div className={styles.comparisonRow}>
                    <div className={styles.beforeBox}>
                      <span className={styles.compTagRed}>❌ Before Copilot</span>
                      <span className={styles.compVal}>{t.before}</span>
                    </div>

                    <div className={styles.afterBox}>
                      <span className={styles.compTagGreen}>✅ After Copilot</span>
                      <span className={styles.compVal}>{t.after}</span>
                    </div>
                  </div>

                  <p className={styles.transformDesc}>{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: 4-STAGE REVENUE ENGINEERING PROCESS
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Our Scientific Methodology</span>
              </div>
              <h2 className={styles.sectionTitle}>
                How We Engineer <span className="accent-gradient">Predictable Growth</span>
              </h2>
              <p className={styles.sectionSub}>
                Every successful campaign follows our disciplined, audit-backed framework designed to eliminate ad waste and maximize conversion speed.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.processGrid}>
            {revenueProcessSteps.map((step, idx) => (
              <ScrollReveal key={step.num} delay={idx * 70}>
                <div className={styles.processCard}>
                  <div className={styles.processHeader}>
                    <span className={styles.processNum}>{step.num}</span>
                    <span className={styles.processBadge}>{step.badge}</span>
                  </div>
                  <div className={styles.processIcon}>{step.icon}</div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: GEO-IMPACT LOCAL DOMINATION MAP
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.geoSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Regional Footprint</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Hyperlocal Dominance Across <span className="accent-gradient">Bhubaneswar &amp; Odisha</span>
              </h2>
              <p className={styles.sectionSub}>
                From Patia tech hubs to Saheed Nagar medical corridors, explore our localized campaign results in high-intent micro-markets.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.geoGrid}>
            {geoImpactLocations.map((geo, idx) => (
              <ScrollReveal key={geo.area} delay={idx * 60}>
                <div className={styles.geoCard}>
                  <div className={styles.geoTop}>
                    <span className={styles.geoArea}>{geo.area}</span>
                    <span className={styles.geoStat}>{geo.stat}</span>
                  </div>
                  <span className={styles.geoVertical}>{geo.vertical}</span>
                  <span className={styles.geoTag}>{geo.tag}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: INDUSTRY VERTICALS BREAKDOWN
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.industrySection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Tailored Vertical Playbooks</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Strategies Built for <span className="accent-gradient">Your Industry</span>
              </h2>
              <p className={styles.sectionSub}>
                Digital marketing isn&apos;t one-size-fits-all. Select your sector to see how we configure audience funnels specifically for your business model.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.industryTabs}>
            {industryVerticals.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveIndustry(v.id)}
                className={`${styles.industryTabBtn} ${activeIndustry === v.id ? styles.industryTabBtnActive : ''}`}
              >
                <span>{v.icon}</span>
                <span>{v.name}</span>
              </button>
            ))}
          </div>

          <ScrollReveal>
            <div className={styles.industryDetailCard}>
              <div className={styles.industryDetailHeader}>
                <h3 className={styles.industryHeadline}>{currentIndustryData.headline}</h3>
                <span className={styles.industryMetricBadge}>{currentIndustryData.metric}</span>
              </div>

              <div>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  Strategic Growth Focus:
                </span>
                <p className={styles.industryFocusText}>{currentIndustryData.focus}</p>
              </div>

              <div style={{ paddingTop: 12 }}>
                <BeamButton
                  href="/contact"
                  label={`Schedule ${currentIndustryData.name} Strategy Session`}
                  size="md"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: FOUNDER TESTIMONIALS
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Verified Client Endorsements</span>
              </div>
              <h2 className={styles.sectionTitle}>
                What Odisha Founders <span className="accent-gradient">Say About Us</span>
              </h2>
              <p className={styles.sectionSub}>
                Unfiltered feedback from business owners who trusted us with their core growth and revenue infrastructure.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.testimonialGrid}>
            {clientTestimonials.map((t, idx) => (
              <ScrollReveal key={t.author} delay={idx * 70}>
                <div className={styles.testimonialCard}>
                  <div className={styles.starsRow}>★★★★★</div>
                  <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles.authorRow}>
                    <div className={styles.avatarIcon}>{t.avatar}</div>
                    <div className={styles.authorMeta}>
                      <span className={styles.authorName}>{t.author}</span>
                      <span className={styles.authorRole}>{t.role}</span>
                      <span style={{ fontSize: 10, color: '#10B981', fontWeight: 700 }}>{t.stat}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: MARKETING HEALTH & LEAKAGE AUDIT CHECKLIST
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.auditSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Diagnostic Self-Check</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Is Your Marketing <span className="accent-gradient">Leaking Revenue?</span>
              </h2>
              <p className={styles.sectionSub}>
                Click each checkpoint to discover the 4 most common blindspots where Bhubaneswar businesses lose qualified leads.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.auditBox}>
            {auditChecklist.map((item) => {
              const isOpen = !!openedAudits[item.id];
              return (
                <div
                  key={item.id}
                  className={styles.auditItem}
                  onClick={() => toggleAudit(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') toggleAudit(item.id);
                  }}
                >
                  <div className={styles.auditItemTitle}>
                    <span>{isOpen ? '▼' : '▶'}</span>
                    <span>{item.title}</span>
                  </div>
                  {isOpen && <div className={styles.auditWarning}>⚠️ Risk: {item.warning}</div>}
                </div>
              );
            })}

            <div style={{ textAlign: 'center', paddingTop: 14 }}>
              <BeamButton
                href="/contact"
                label="Request a Free Forensic Marketing Audit"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: TRANSPARENT ENGAGEMENT MODELS
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.engagementSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge} style={{ margin: '0 auto 12px' }}>
                <span className={styles.sparkleDot} />
                <span>Partnership Structure</span>
              </div>
              <h2 className={styles.sectionTitle}>
                How We Partner with <span className="accent-gradient">Growing Brands</span>
              </h2>
              <p className={styles.sectionSub}>
                Simple, transparent, performance-focused agreements without restrictive annual contracts.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.engagementGrid}>
            {engagementModels.map((m, idx) => (
              <ScrollReveal key={m.title} delay={idx * 80}>
                <div className={styles.engagementCard}>
                  <span className={styles.engagementBadge}>{m.badge}</span>
                  <h3 className={styles.engagementTitle}>{m.title}</h3>
                  <p className={styles.engagementDesc}>{m.desc}</p>
                  <div className={styles.engagementFeatures}>
                    {m.features.map((f) => (
                      <div key={f} className={styles.featureItem}>
                        <span style={{ color: '#0B2093', fontWeight: 800 }}>✦</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ paddingTop: 14 }}>
                    <BeamButton href="/contact" label="Discuss This Model →" size="sm" fullWidth />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12: BESPOKE GROWTH AUDIT CONSULTATION (PORTFOLIO CTA)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.bespokeCtaSection}>
        <div className="container">
          <div className={styles.bespokeCtaCard}>
            <div className={styles.ctaGlowCircle} />

            <div className={styles.bespokeCtaLeft}>
              <div className={styles.eyebrowBadge} style={{ background: 'rgba(255,255,255,0.1)', color: '#FFB800', borderColor: 'rgba(255,255,255,0.2)' }}>
                <span>✨ NEXT SUCCESS STORY</span>
              </div>
              <h2 className={styles.bespokeCtaTitle}>
                Ready to Turn Your Marketing into a{' '}
                <span style={{ color: '#FFB800' }}>Predictable Revenue Engine?</span>
              </h2>
              <p className={styles.bespokeCtaDesc}>
                Book a complimentary 30-minute growth roadmap session. We will audit your current search visibility, ad funnels, and conversion bottlenecks with actionable steps.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', paddingTop: 8 }}>
                <BeamButton href="/contact" label="Claim Free 30-Min Growth Audit" size="lg" />
                <a
                  href="https://wa.me/918260709689?text=Hi%20Marketing%20Copilot,%20I%20would%20like%20to%20audit%20my%20business%20growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <span>💬 Direct WhatsApp Connect</span>
                </a>
              </div>
            </div>

            <div className={styles.bespokeCtaRight}>
              <div className={styles.ctaPerk}>
                <span className={styles.ctaPerkCheck}>✓</span>
                <span>Complete SEO &amp; Google Maps Audit</span>
              </div>
              <div className={styles.ctaPerk}>
                <span className={styles.ctaPerkCheck}>✓</span>
                <span>Meta &amp; Google Ads Account Review</span>
              </div>
              <div className={styles.ctaPerk}>
                <span className={styles.ctaPerkCheck}>✓</span>
                <span>Conversion Rate &amp; Speed Diagnostic</span>
              </div>
              <div className={styles.ctaPerk}>
                <span className={styles.ctaPerkCheck}>✓</span>
                <span>Custom 90-Day Revenue Blueprint</span>
              </div>
              <div style={{ paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: '#94A3B8' }}>
                ⚡ No obligation • Direct strategy session with senior lead
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
