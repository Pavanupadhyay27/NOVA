import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './ClientsSection.module.css';

const clientLogos = [
  { name: 'Weekend Bhraman', src: '/images/clients/weekend-bhraman.png' },
  { name: 'Travysys', src: '/images/clients/travysys.png' },
  { name: 'Sri Pandurangan Divine Fresh', src: '/images/clients/sri-pandurangan-divine-fresh.png' },
  { name: 'Praveen Electronics', src: '/images/clients/praveen-electronics.png' },
  { name: 'Medallion House', src: '/images/clients/medallion-house.png' },
  { name: 'HEED', src: '/images/clients/heed.png' },
  { name: 'EKATRAA', src: '/images/clients/ekatraa.png' },
];

export default function ClientsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>
        <span className={styles.labelDot} />
        <span>Trusted by Ambitious Brands &amp; Growing Enterprises</span>
      </div>

      {/* Slower, Smooth Infinite Marquee Carousel with High-Visibility Logos */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.marqueeTrack}>
          {/* Quadruple array for seamless, jitter-free continuous loop */}
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((c, i) => (
            <div key={i} className={styles.clientItem} title={c.name}>
              <div className={styles.logoCard}>
                <Image
                  src={c.src}
                  alt={`${c.name} brand logo`}
                  width={160}
                  height={52}
                  className={styles.logoImage}
                  priority={i < 7}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.fadeRight} />
      </div>

      {/* Premium Skeuomorphic Partnership CTA Card */}
      <div className="container" style={{ marginTop: 40 }}>
        <ScrollReveal>
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlowOrb} />
            <div className={styles.ctaCardMesh} />
            
            <div className={styles.ctaCardContent}>
              <div className={styles.ctaBadge}>
                <span className={styles.badgePulse} />
                <span>Limited Growth Slots · Strategic Partnership</span>
              </div>
              
              <h3 className={styles.ctaTitle}>
                Ready to Join Our Roster of <span className="accent-gradient">High-Growth Brands?</span>
              </h3>
              
              <p className={styles.ctaSubtitle}>
                Get an in-depth 360° digital marketing audit and a tailored growth roadmap across Search, Paid Media, and High-Converting Funnels.
              </p>

              <div className={styles.ctaFeatures}>
                <div className={styles.featurePill}>
                  <span className={styles.featureIcon}>📊</span>
                  <span>Competitor &amp; SERP Benchmark</span>
                </div>
                <div className={styles.featurePill}>
                  <span className={styles.featureIcon}>🎯</span>
                  <span>Paid Ads &amp; Lead Leakage Audit</span>
                </div>
                <div className={styles.featurePill}>
                  <span className={styles.featureIcon}>⚡</span>
                  <span>1-on-1 Growth Strategy Session</span>
                </div>
              </div>
            </div>

            <div className={styles.ctaActions}>
              {/* Continuous Revolving Glowing Border Beam Skeuomorphic Button */}
              <div className={styles.borderBeamWrapper}>
                <div className={styles.borderGlowAmbient} />
                <div className={styles.borderBeamSpin} />
                
                <Link href="/contact" className={styles.btnClaimAudit}>
                  <span className={styles.btnShimmer} />
                  <span className={styles.btnGlassGloss} />
                  <span className={styles.btnLabel}>Claim Free Growth Audit</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>
              </div>

              <div className={styles.ctaTrustCard}>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>100% Free Audit</span>
                </div>
                <span className={styles.trustSep}>•</span>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>24h Turnaround</span>
                </div>
                <span className={styles.trustSep}>•</span>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
