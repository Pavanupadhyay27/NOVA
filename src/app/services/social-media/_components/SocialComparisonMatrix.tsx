'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SocialComparisonMatrix.module.css';

interface ComparisonRow {
  feature: string;
  traditional: string;
  copilot: string;
  advantage: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Production Quality',
    traditional: 'Low-effort Canva static flyers and downloaded generic stock photos',
    copilot: 'Sony FX3 4K cinema cameras, studio lighting, pro lapels & DaVinci color grades',
    advantage: 'Elevates brand prestige and pricing power',
  },
  {
    feature: 'Creative Scripting',
    traditional: 'Random generic festival greetings with zero commercial relevance',
    copilot: '3-second psychological pattern interrupts and transformation storytelling',
    advantage: '85%+ video watch completion rate',
  },
  {
    feature: 'Regional Odia Resonance',
    traditional: 'Generic corporate English copied from American agency templates',
    copilot: 'Bilingual Odia & English colloquial hooks resonant with Bhubaneswar buyers',
    advantage: '3.4X higher local share and comment velocity',
  },
  {
    feature: 'Direct Lead Generation',
    traditional: 'No lead funnel; posts generate 12 vanity likes and zero customer calls',
    copilot: 'ManyChat automated DM triggers routing comments into WhatsApp sales chats',
    advantage: '60–180+ verified monthly leads',
  },
  {
    feature: 'Attribution & Tracking',
    traditional: 'Vanity monthly PDF reports with zero revenue or lead correlation',
    copilot: '24/7 transparent client dashboard tracking follower-to-lead velocity and ROI',
    advantage: 'Direct accountability tied to bank deposits',
  },
];

export default function SocialComparisonMatrix() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.compDot} />
            <span>The Social Media Standard</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Generic Agency Posting vs.{' '}
            <span className="accent-gradient">Marketing Copilot Studio</span>
          </h2>
          <p className={styles.subhead}>
            Why Bhubaneswar’s most ambitious businesses abandon static Canva flyers for our cinematic commercial video engine.
          </p>
        </ScrollReveal>

        {/* Matrix Table */}
        <div className={styles.matrixContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.colFeature}>Execution Dimension</div>
            <div className={styles.colTraditional}>Traditional Local Agencies</div>
            <div className={styles.colCopilot}>Marketing Copilot Studio</div>
            <div className={styles.colAdvantage}>Commercial Outcome</div>
          </div>

          <div className={styles.tableBody}>
            {comparisonRows.map((row, idx) => (
              <div key={idx} className={styles.tableRow}>
                <div className={styles.colFeature}>
                  <span className={styles.featureTitle}>{row.feature}</span>
                </div>
                <div className={styles.colTraditional}>
                  <span className={styles.crossIcon}>✕</span>
                  <span>{row.traditional}</span>
                </div>
                <div className={styles.colCopilot}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{row.copilot}</span>
                </div>
                <div className={styles.colAdvantage}>
                  <span className={styles.advantagePill}>{row.advantage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
