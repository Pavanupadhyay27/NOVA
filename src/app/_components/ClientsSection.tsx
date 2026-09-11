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
      <div className="container" style={{ marginTop: 36 }}>
        <ScrollReveal>
          <div className={styles.ctaCard}>
            <div className={styles.ctaCardMesh} />
            
            <div className={styles.ctaCardContent}>
              <div className={styles.ctaBadge}>
                <span className={styles.badgePulse} />
                <span>Strategic Growth Partnership</span>
              </div>
              
              <h3 className={styles.ctaTitle}>
                Ready to Join Our Roster of <span className="accent-gradient">High-Growth Brands?</span>
              </h3>
              
              <p className={styles.ctaSubtitle}>
                Get a comprehensive 360° digital growth audit and customized roadmap tailored to your market, competitors, and revenue goals.
              </p>
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

              <div className={styles.ctaTrustTag}>
                <span className={styles.trustCheck}>✓</span>
                <span>100% Free · No Obligation · 24h Response</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
