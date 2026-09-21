'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/app/_components/FAQSection';
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
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const [activeHudIndex, setActiveHudIndex] = useState(0);
  const [activeGeoIndex, setActiveGeoIndex] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(industryVerticals[0].id);
  const [openedAudits, setOpenedAudits] = useState<Record<string, boolean>>({ q1: true, q2: false, q3: false, q4: false });
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Filtered case studies
  const filteredCases = caseStudiesList.filter((item) => {
    return activeFilter === 'All' || item.category === activeFilter;
  });

  // Auto-sliding cards mechanism
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!isPaused && el) {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const slideManual = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const currentHud = transformationData[activeHudIndex] || transformationData[0];
  const currentGeo = geoImpactLocations[activeGeoIndex] || geoImpactLocations[0];
  const currentIndustryData = industryVerticals.find((v) => v.id === activeIndustry) || industryVerticals[0];

  const toggleAudit = (id: string) => {
    setOpenedAudits((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={styles.page}>
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: DUAL-PANE HERO WITH GUARANTEED IMAGE
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Pane: High-Converting Text */}
            <div className={styles.heroTextPane}>
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
            </div>

            {/* Right Pane: High-Impact Visual Showcase */}
            <div className={styles.heroVisualPane}>
              <div className={styles.heroVisualFrame}>
                <Image
                  src="/images/hero_growth_mastery.jpg"
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
                  <span>Patia &amp; Saheed Nagar — #1 SERP Dominated</span>
                </div>

                <div className={styles.heroVisualBadgeBottom}>
                  <span className={styles.floatingVal}>+320% Inbound Leads</span>
                  <span className={styles.floatingLabel}>Verified Commercial Return • 6.2X ROAS</span>
                </div>
              </div>
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
          SECTION 3: FEATURED COMMERCIAL MILESTONE
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
                Luxury Real Estate: <span className="accent-gradient">3X Lead Volume in 90 Days</span>
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

                {/* Centered CTA Button */}
                <div className={styles.centerCtaWrap}>
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
          SECTION 4: AUTO-SLIDING CASE STUDIES SHOWCASE
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
                Auto-sliding showcase of client campaigns across Odisha. Hover to pause, click arrows to browse, or click any card to inspect the full case study.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Bar & Carousel Controls */}
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

            <div className={styles.carouselControls}>
              <button
                className={styles.carouselArrowBtn}
                onClick={() => slideManual('left')}
                aria-label="Previous case studies"
              >
                ←
              </button>
              <button
                className={styles.carouselArrowBtn}
                onClick={() => slideManual('right')}
                aria-label="Next case studies"
              >
                →
              </button>
            </div>
          </div>

          {/* Auto-Sliding Track Container */}
          <div
            className={styles.sliderTrackContainer}
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={styles.sliderTrack}>
              {filteredCases.map((c) => (
                <div
                  key={c.id}
                  className={styles.slidingCard}
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
                      sizes="(max-width: 640px) 100vw, 380px"
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
              ))}
            </div>
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
          SECTION 5: AUDITED COMMERCIAL DELTAS (ELEVATED VELOCITY COCKPIT)
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
                Select any benchmark to inspect the tangible shift from legacy agency retainers to revenue engineering.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className={styles.velocityCockpit}>
              {/* Metric Selector Tabs */}
              <div className={styles.velocityTabsRow}>
                {transformationData.map((t, idx) => (
                  <button
                    key={t.metric}
                    className={`${styles.velocityTabBtn} ${activeHudIndex === idx ? styles.velocityTabBtnActive : ''}`}
                    onClick={() => setActiveHudIndex(idx)}
                  >
                    <span>{t.icon}</span>
                    <span>{t.metric}</span>
                  </button>
                ))}
              </div>

              {/* Velocity Display Area */}
              <div className={styles.velocityDisplayArea}>
                <div className={styles.velocityComparisonGrid}>
                  {/* Left: Before Card */}
                  <div className={styles.velocityCardBefore}>
                    <span className={styles.velocityTagBefore}>❌ Legacy Agency Retainer (Before)</span>
                    <div className={styles.velocityBigNum}>{currentHud.before}</div>
                    <p className={styles.velocityStateDesc}>Low intent traffic, high bounce rates, and broad untargeted ad spend.</p>
                  </div>

                  {/* Center: Growth Vector Badge */}
                  <div className={styles.velocityCenterBadge}>
                    <span className={styles.velocityGainText}>{currentHud.gain}</span>
                    <span className={styles.velocityTimeText}>{currentHud.timeframe}</span>
                  </div>

                  {/* Right: After Card */}
                  <div className={styles.velocityCardAfter}>
                    <span className={styles.velocityTagAfter}>✅ Marketing Copilot Revenue Engine (After)</span>
                    <div className={styles.velocityBigNum}>{currentHud.after}</div>
                    <p className={styles.velocityStateDesc}>{currentHud.desc}</p>
                  </div>
                </div>

                {/* Tactical Lever Banner */}
                <div className={styles.velocityLeverStrip}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 18 }}>🛠️</span>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Strategic Growth Lever Applied:
                      </span>
                      <p className={styles.velocityLeverText}>{currentHud.lever}</p>
                    </div>
                  </div>
                </div>

                {/* Centered CTA Button */}
                <div className={styles.centerCtaWrap}>
                  <BeamButton href="/contact" label="Audit Your Business Benchmarks →" size="md" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: OUR SCIENTIFIC METHODOLOGY (CONNECTED ROADMAP)
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
                A connected, audit-backed execution pipeline designed to eliminate ad spend waste and scale conversion speed systematically.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className={styles.pipelineRoadmap}>
              {revenueProcessSteps.map((step) => (
                <div key={step.num} className={styles.pipelineStep}>
                  <div className={styles.pipelineStepHeader}>
                    <span className={styles.pipelineNumBadge}>{step.num}</span>
                    <span className={styles.pipelineDuration}>{step.badge}</span>
                  </div>
                  <div className={styles.pipelineIcon}>{step.icon}</div>
                  <h3 className={styles.pipelineTitle}>{step.title}</h3>
                  <p className={styles.pipelineDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: REGIONAL FOOTPRINT (TERRITORY COMMAND MATRIX)
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
                Click any key commercial cluster to inspect our live search dominance and lead generation metrics in that micro-market.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className={styles.commandCockpit}>
              {/* Left Side: Territory Selector & Data Rows */}
              <div className={styles.commandLeft}>
                <div className={styles.commandAreaSelector}>
                  {geoImpactLocations.map((geo, idx) => (
                    <button
                      key={geo.area}
                      className={`${styles.commandAreaChip} ${activeGeoIndex === idx ? styles.commandAreaChipActive : ''}`}
                      onClick={() => setActiveGeoIndex(idx)}
                    >
                      {geo.area}
                    </button>
                  ))}
                </div>

                <div className={styles.commandDataRows}>
                  <div className={styles.commandDataRow}>
                    <span className={styles.commandDataLabel}>Primary Commercial Focus</span>
                    <span className={styles.commandDataVal}>{currentGeo.vertical}</span>
                  </div>
                  <div className={styles.commandDataRow}>
                    <span className={styles.commandDataLabel}>Active Tactical Channel</span>
                    <span style={{ fontWeight: 700, color: 'var(--accent-blue)', fontSize: 14 }}>{currentGeo.tag}</span>
                  </div>
                  <div className={styles.commandDataRow}>
                    <span className={styles.commandDataLabel}>Estimated Monthly Local Search</span>
                    <span className={styles.commandDataVal}>{currentGeo.searches}</span>
                  </div>
                  <div className={styles.commandDataRow}>
                    <span className={styles.commandDataLabel}>Verified Lead Acquisition Lift</span>
                    <span style={{ color: '#10B981', fontWeight: 800, fontSize: 16 }}>{currentGeo.stat}</span>
                  </div>
                </div>

                {/* Centered Action Button */}
                <div className={styles.centerCtaWrap}>
                  <BeamButton href="/contact" label={`Dominate ${currentGeo.area} Market →`} size="md" />
                </div>
              </div>

              {/* Right Side: High-Tech Territory Terminal Card */}
              <div className={styles.commandRightTerminal}>
                <div className={styles.terminalTopHeader}>
                  <div className={styles.terminalSignalBadge}>
                    <div className={styles.terminalSignalDot} />
                    <span>Live Signal • {currentGeo.area}</span>
                  </div>
                  <span className={styles.terminalCoords}>{currentGeo.coords}</span>
                </div>

                <div className={styles.terminalMainInfo}>
                  <h3 className={styles.terminalAreaTitle}>{currentGeo.area}</h3>
                  <div className={styles.terminalGridStats}>
                    <div className={styles.terminalStatBox}>
                      <span className={styles.terminalStatVal}>{currentGeo.cpl}</span>
                      <span className={styles.terminalStatLabel}>Average Qualified CPL</span>
                    </div>
                    <div className={styles.terminalStatBox}>
                      <span className={styles.terminalStatVal}>{currentGeo.leadShare}</span>
                      <span className={styles.terminalStatLabel}>SERP Impression Share</span>
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, display: 'block', marginBottom: 6 }}>
                      Key Commercial Landmarks:
                    </span>
                    <div className={styles.terminalLandmarksList}>
                      {currentGeo.landmarks.map((lm) => (
                        <span key={lm} className={styles.terminalLandmarkTag}>
                          📍 {lm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px 16px', borderRadius: 'var(--radius-md)', fontSize: 12, color: '#E2E8F0' }}>
                  🏆 Active Client: <strong style={{ color: '#FFB800' }}>{currentGeo.clientSnippet}</strong>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: TAILORED VERTICAL PLAYBOOKS (3-COLUMN BENTO STYLE)
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
                Digital marketing isn&apos;t one-size-fits-all. Select your sector to explore our dedicated playbook, commercial benchmarks, and verified client outcomes.
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
            <div className={styles.industryBentoGrid}>
              {/* Card 1: Core Strategy & Channels */}
              <div className={styles.bentoCard}>
                <div className={styles.bentoCardHeader}>
                  <span>🎯</span>
                  <span>Strategic Playbook</span>
                </div>
                <h3 className={styles.bentoTitle}>{currentIndustryData.headline}</h3>
                <p className={styles.bentoText}>{currentIndustryData.focus}</p>
                <div className={styles.bentoChannelsList}>
                  {currentIndustryData.channels.map((ch) => (
                    <div key={ch} className={styles.bentoChannelItem}>
                      <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Commercial Performance Benchmarks */}
              <div className={styles.bentoCard}>
                <div className={styles.bentoCardHeader}>
                  <span>📊</span>
                  <span>Industry Benchmarks</span>
                </div>
                <div className={styles.bentoBenchmarkList}>
                  {currentIndustryData.benchmarks.map((b) => (
                    <div key={b.label} className={styles.bentoBenchmarkRow}>
                      <span className={styles.bentoBenchLabel}>{b.label}</span>
                      <span className={styles.bentoBenchVal}>{b.val}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>* Audited across Bhubaneswar client accounts</span>
                </div>
              </div>

              {/* Card 3: Verified Client Case in This Vertical */}
              <div className={styles.bentoCard}>
                <div className={styles.bentoCardHeader}>
                  <span>🏆</span>
                  <span>Verified Client Case</span>
                </div>
                <div className={styles.bentoProofBox}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                    {currentIndustryData.clientProof.client}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{currentIndustryData.clientProof.location}</span>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#000000', marginTop: 4 }}>
                    {currentIndustryData.clientProof.outcome}
                  </div>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 11, color: '#10B981', fontWeight: 700 }}>✓ 100% Attribution Verified</span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Sprint Model: Continuous Scale</span>
                </div>
              </div>
            </div>

            {/* Centered CTA Button */}
            <div className={styles.centerCtaWrap}>
              <BeamButton
                href="/contact"
                label={`Schedule ${currentIndustryData.name} Growth Session →`}
                size="md"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: FOUNDER TESTIMONIALS (EQUAL-HEIGHT & BOTTOM-ALIGNED)
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
                  <div>
                    <div className={styles.starsRow}>
                      <span className={styles.starsText}>★★★★★</span>
                      <span className={styles.verifiedReviewBadge}>★ 5.0 Google Review</span>
                    </div>
                    <p className={styles.quoteText} style={{ marginTop: 14 }}>&ldquo;{t.quote}&rdquo;</p>
                  </div>

                  {/* Bottom-Aligned Author Row */}
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

          <div className={styles.centerCtaWrap} style={{ paddingTop: 32 }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
              Trusted by 50+ ambitious businesses across Bhubaneswar, Cuttack, and Odisha.
            </p>
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

            {/* Centered CTA Button */}
            <div className={styles.centerCtaWrap}>
              <BeamButton
                href="/contact"
                label="Request a Free Forensic Marketing Audit →"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: ELEVATED PARTNERSHIP STRUCTURE
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
                <div className={`${styles.engagementCard} ${idx === 0 ? styles.engagementCardHighlight : ''}`}>
                  <span className={`${styles.engagementBadge} ${idx === 0 ? styles.engagementBadgeGold : ''}`}>
                    {m.badge}
                  </span>
                  <h3 className={styles.engagementTitle}>{m.title}</h3>
                  <p className={styles.engagementDesc}>{m.desc}</p>
                  <div className={styles.engagementFeatures}>
                    {m.features.map((f) => (
                      <div key={f} className={styles.featureItem}>
                        <span style={{ color: idx === 0 ? '#B45309' : '#0B2093', fontWeight: 800 }}>✦</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.centerCtaWrap}>
                    <BeamButton href="/contact" label="Discuss This Model →" size="sm" fullWidth />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Trust Guarantees Strip */}
          <div className={styles.partnershipTrustStrip}>
            <div className={styles.trustItemPill}>
              <span style={{ color: '#10B981' }}>✓</span>
              <span>100% Attribution Transparency</span>
            </div>
            <div className={styles.trustItemPill}>
              <span style={{ color: '#10B981' }}>✓</span>
              <span>Zero 12-Month Lock-in Contracts</span>
            </div>
            <div className={styles.trustItemPill}>
              <span style={{ color: '#10B981' }}>✓</span>
              <span>Direct Senior Strategist Access</span>
            </div>
            <div className={styles.trustItemPill}>
              <span style={{ color: '#10B981' }}>✓</span>
              <span>Weekly Sprint Deliverables</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FAQ SECTION (PLACED JUST ABOVE BOTTOM FOOTER CTA CARD)
          ───────────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12: BESPOKE BOTTOM CTA CARD (CENTERED & POLISHED)
          ───────────────────────────────────────────────────────────── */}
      <section className={styles.bespokeCtaSection}>
        <div className="container">
          <div className={styles.bespokeCtaCardCentered}>
            <div className={styles.ctaGlowCircle} />

            <div className={styles.eyebrowBadge} style={{ background: 'rgba(255,255,255,0.1)', color: '#FFB800', borderColor: 'rgba(255,255,255,0.2)' }}>
              <span>✨ NEXT SUCCESS STORY</span>
            </div>

            <h2 className={styles.bespokeCtaTitleCentered}>
              Ready to Turn Your Marketing into a{' '}
              <span style={{ color: '#FFB800' }}>Predictable Revenue Engine?</span>
            </h2>

            <p className={styles.bespokeCtaDescCentered}>
              Book a complimentary 30-minute growth roadmap session. We will audit your current search visibility, ad funnels, and conversion bottlenecks with actionable steps.
            </p>

            <div className={styles.ctaPerksRow}>
              <div className={styles.ctaPerkItem}>
                <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                <span>SEO &amp; Google Maps Audit</span>
              </div>
              <div className={styles.ctaPerkItem}>
                <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                <span>Meta &amp; Google Ads Account Review</span>
              </div>
              <div className={styles.ctaPerkItem}>
                <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                <span>Conversion Rate Diagnostic</span>
              </div>
              <div className={styles.ctaPerkItem}>
                <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                <span>90-Day Custom Revenue Blueprint</span>
              </div>
            </div>

            {/* Centered Action Buttons */}
            <div className={styles.ctaCenteredActions}>
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

            <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 4 }}>
              ⚡ No obligation • Direct strategy session with senior lead • 100% confidential
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
