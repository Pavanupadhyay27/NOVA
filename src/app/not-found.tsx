import Link from 'next/link';
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
          <Link href="/" className="btn btn-primary">
            Back to Home →
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
