import Image from 'next/image';
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
        <span>Trusted by Ambitious Brands Worldwide</span>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.marqueeTrack}>
          {/* Quadruple array for seamless continuous loop */}
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((c, i) => (
            <div key={i} className={styles.clientItem} title={c.name}>
              <div className={styles.logoCard}>
                <Image
                  src={c.src}
                  alt={`${c.name} logo`}
                  width={140}
                  height={50}
                  className={styles.logoImage}
                  priority={i < 7}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.fadeRight} />
      </div>
    </section>
  );
}
