import styles from './ClientsSection.module.css';

const clientLogos = [
  { name: 'Spotify', logo: 'SPOTIFY' },
  { name: 'Google', logo: 'GOOGLE' },
  { name: 'Nike', logo: 'NIKE' },
  { name: 'Amazon', logo: 'AMAZON' },
  { name: 'Logitech', logo: 'LOGITECH' },
  { name: 'Airbnb', logo: 'AIRBNB' },
  { name: 'Razorpay', logo: 'RAZORPAY' },
  { name: 'CRED', logo: 'CRED' },
  { name: 'Flipkart', logo: 'FLIPKART' },
  { name: 'Swiggy', logo: 'SWIGGY' },
  { name: 'Zomato', logo: 'ZOMATO' },
  { name: 'Nykaa', logo: 'NYKAA' },
];

export default function ClientsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>
        <span>Trusted by Ambitious Brands Worldwide</span>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.marqueeTrack}>
          {/* Double array for seamless infinite loop */}
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((c, i) => (
            <div key={i} className={styles.clientItem}>
              <div className={styles.logoBadge}>
                <span className={styles.clientDot} />
                <span className={styles.clientName}>{c.logo}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.fadeRight} />
      </div>
    </section>
  );
}
