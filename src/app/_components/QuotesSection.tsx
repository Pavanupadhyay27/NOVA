'use client';
import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './QuotesSection.module.css';

const testimonials = [
  {
    id: 1,
    quote: "Nova Spark didn't just manage our ads — they completely re-engineered our customer acquisition architecture. Scaling from ₹5L/month to over ₹2Cr+ monthly revenue in under six months was something we didn't think was possible in our category.",
    author: 'Sameer Meher',
    role: 'Co-Founder & CEO',
    company: 'UrbanDrape E-Commerce',
    stat: '+142% Net Revenue',
    subStat: '4.8X Blended ROAS',
    avatarInitials: 'SM',
    color: '#0284C7',
    stars: 5,
    tag: 'E-Commerce Scale'
  },
  {
    id: 2,
    quote: "Finding an agency that truly understands high-ticket buyer psychology and technical SEO is rare. Nova Spark positioned our luxury properties at #1 on Google and generated 90+ high-net-worth inquiries every single month.",
    author: 'Alok Mohanty',
    role: 'Managing Director',
    company: 'Utkal Royal Residences',
    stat: '#1 on Google',
    subStat: '+187% Organic Inquiries',
    avatarInitials: 'AM',
    color: '#6366F1',
    stars: 5,
    tag: 'Real Estate Growth'
  },
  {
    id: 3,
    quote: "Their creative team is unstoppable. They helped us build an engaged 200,000+ organic Instagram community from scratch. Our signature seasonal collection sold out within 72 hours solely from their content hooks.",
    author: 'Tanvi Agarwal',
    role: 'Founder & Creative Head',
    company: 'Velour D2C Fashion',
    stat: '200K+ Community',
    subStat: '+320% Social Reach',
    avatarInitials: 'TA',
    color: '#EC4899',
    stars: 5,
    tag: 'D2C Brand Velocity'
  },
  {
    id: 4,
    quote: "In the luxury hospitality space, timing and hype are everything. Nova Spark's local SEO and influencer drop campaigns made our dining locations the most sought-after weekend reservation spots across the state.",
    author: 'Chef Debashish Roy',
    role: 'Chief Culinary Officer',
    company: 'Noir Dining Experience',
    stat: '+400% Footfall',
    subStat: '4.9★ Google Rating',
    avatarInitials: 'DR',
    color: '#10B981',
    stars: 5,
    tag: 'Hospitality & Dining'
  },
];

export default function QuotesSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth Auto-Slide every 5 seconds (pauses on mouse hover)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section 
      className={styles.section}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.bgGlow} />
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Client Endorsements & Quotes
          </div>
          <h2 className="display-lg" style={{ marginTop: 14 }}>
            Trusted by the leaders<br />
            <span className="accent-gradient">shaping tomorrow.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 540, margin: '14px auto 0' }}>
            Real experiences from founders, managing directors, and CMOs who transformed their market reach with Nova Spark.
          </p>
        </ScrollReveal>

        <div className={styles.carouselContainer}>
          <ScrollReveal delay={100}>
            <div className={styles.quoteCard}>
              {/* Top Row: Stars + Category Tag */}
              <div className={styles.cardHeader}>
                <div className={styles.starsRow}>
                  {[...Array(active.stars)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                  <span className={styles.verifiedBadge}>● Verified Partner</span>
                </div>
                <span className={styles.categoryTag} style={{ color: active.color }}>
                  {active.tag}
                </span>
              </div>

              {/* Fixed Height Quote Body (Zero CLS layout shift) */}
              <div className={styles.quoteViewport}>
                <div className={styles.contentBody} key={active.id}>
                  <div className={styles.quoteTextWrap}>
                    <p className={styles.quoteText}>
                      &ldquo;{active.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author & Verified Metrics */}
                  <div className={styles.footerRow}>
                    <div className={styles.authorInfo}>
                      <div 
                        className={styles.avatar} 
                        style={{ background: `linear-gradient(135deg, ${active.color} 0%, #0F172A 100%)` }}
                      >
                        {active.avatarInitials}
                      </div>
                      <div>
                        <h4 className={styles.authorName}>{active.author}</h4>
                        <p className={styles.authorRole}>
                          {active.role} • <span className={styles.companyName}>{active.company}</span>
                        </p>
                      </div>
                    </div>

                    <div className={styles.metricsBadge}>
                      <div className={styles.statPrimary} style={{ color: active.color }}>
                        {active.stat}
                      </div>
                      <div className={styles.statSecondary}>{active.subStat}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Pagination & Auto-Slide Controls */}
              <div className={styles.controlsRow}>
                <div className={styles.dots}>
                  {testimonials.map((t, idx) => (
                    <button
                      key={t.id}
                      className={`${styles.navDot} ${idx === current ? styles.activeDot : ''}`}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className={styles.navButtons}>
                  <button 
                    onClick={handlePrev} 
                    className={styles.navBtn}
                    aria-label="Previous quote"
                  >
                    ←
                  </button>
                  <span className={styles.counter}>0{current + 1} / 0{testimonials.length}</span>
                  <button 
                    onClick={handleNext} 
                    className={styles.navBtn}
                    aria-label="Next quote"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
