import BeamButton from '@/components/BeamButton';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <h1 className={`display-lg ${styles.title}`}>
          Looks like this page<br />took a wrong turn.
        </h1>
        <p className={`body-lg ${styles.sub}`}>
          We can&apos;t find what you&apos;re looking for. Let&apos;s get you back on track.
        </p>
        <div className={styles.actions}>
          <BeamButton href="/" label="Back to Home" size="md" />
          <BeamButton href="/contact" label="Contact Us" size="md" />
        </div>
      </div>
    </div>
  );
}
