'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './QuickConnectMapSection.module.css';

export default function QuickConnectMapSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const phone = '+91 98765 43210';
  const rawPhone = '+919876543210';
  const email = 'hello@novaspark.in';
  const whatsappUrl = 'https://wa.me/919876543210?text=Hi%20Nova%20Spark%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20brand.';
  const address = 'Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001';
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001';
  const mapsEmbedUrl = 'https://maps.google.com/maps?q=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const copyToClipboard = (text: string, fieldId: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    }
  };

  return (
    <section className={styles.section} id="direct-connect">
      {/* Ambient background glows for 3D depth */}
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        {/* Skeuomorphic Section Header */}
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulseDot} />
              <span className={styles.eyebrowText}>Direct Access & Headquarters</span>
            </div>

            <h2 className={styles.title}>
              Connect with us directly.<br />
              <span className={styles.titleAccent}>Zero wait times. Real human conversations.</span>
            </h2>

            <p className={styles.subtitle}>
              Reach our senior growth partners directly or visit our studio in Kharvela Nagar. No automated switchboards or gatekeepers.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Panel Grid */}
        <div className={styles.grid}>
          {/* ══════════════════════════════════════════════════
              LEFT PANEL: Tactile Skeuomorphic Channel Hub
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={80} direction="left">
            <div className={styles.skeuoCard}>
              {/* Card Top Header */}
              <div className={styles.cardHeader}>
                <div className={styles.channelBadge}>
                  <span className={styles.sparkle}>⚡</span>
                  <span>Direct Channels</span>
                </div>
                <div className={styles.slaBadge}>
                  <span className={styles.slaDot} />
                  <span>24-Hour SLA Guaranteed</span>
                </div>
              </div>

              {/* Rows List with Perfectly Aligned Action Columns */}
              <div className={styles.rowsList}>
                {/* Row 1: Direct Phone */}
                <div className={styles.rowItem}>
                  <div className={`${styles.iconBox} ${styles.iconPhone}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>

                  <div className={styles.rowDetails}>
                    <div className={styles.rowLabelRow}>
                      <span className={styles.rowTag}>Direct Phone</span>
                      <span className={styles.rowTiming}>Mon – Sat · 9:30 AM – 7:30 PM</span>
                    </div>
                    <a href={`tel:${rawPhone}`} className={styles.rowPrimaryVal}>
                      {phone}
                    </a>
                  </div>

                  {/* Aligned 2-Button Column */}
                  <div className={styles.rowActions}>
                    <a href={`tel:${rawPhone}`} className={`${styles.btnTactile} ${styles.btnBlue}`}>
                      <span>Call</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(phone, 'phone')}
                      className={`${styles.btnTactileIcon} ${copiedField === 'phone' ? styles.copiedActive : ''}`}
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'phone' ? (
                        <span className={styles.copiedBadge}>✓</span>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Row 2: WhatsApp Chat */}
                <div className={`${styles.rowItem} ${styles.rowWhatsApp}`}>
                  <div className={`${styles.iconBox} ${styles.iconWhatsApp}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.69.45-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.14-1.19-.07-.09-.23-.15-.48-.28z"/>
                    </svg>
                  </div>

                  <div className={styles.rowDetails}>
                    <div className={styles.rowLabelRow}>
                      <span className={styles.rowTag}>WhatsApp Chat</span>
                      <span className={styles.replyChip}>🟢 ~10 min reply</span>
                    </div>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.rowPrimaryVal}>
                      {phone}
                    </a>
                  </div>

                  {/* Aligned 2-Button Column */}
                  <div className={styles.rowActions}>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btnTactile} ${styles.btnGreen}`}>
                      <span>WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(phone, 'whatsapp')}
                      className={`${styles.btnTactileIcon} ${copiedField === 'whatsapp' ? styles.copiedActive : ''}`}
                      title="Copy WhatsApp number"
                      aria-label="Copy WhatsApp number"
                    >
                      {copiedField === 'whatsapp' ? (
                        <span className={styles.copiedBadge}>✓</span>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Row 3: Official Email */}
                <div className={styles.rowItem}>
                  <div className={`${styles.iconBox} ${styles.iconEmail}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>

                  <div className={styles.rowDetails}>
                    <div className={styles.rowLabelRow}>
                      <span className={styles.rowTag}>Official Email</span>
                      <span className={styles.rowTiming}>Proposals & RFPs</span>
                    </div>
                    <a href={`mailto:${email}`} className={styles.rowPrimaryVal}>
                      {email}
                    </a>
                  </div>

                  {/* Aligned 2-Button Column */}
                  <div className={styles.rowActions}>
                    <a href={`mailto:${email}`} className={`${styles.btnTactile} ${styles.btnBlue}`}>
                      <span>Email</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(email, 'email')}
                      className={`${styles.btnTactileIcon} ${copiedField === 'email' ? styles.copiedActive : ''}`}
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedField === 'email' ? (
                        <span className={styles.copiedBadge}>✓</span>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Row 4: Studio Headquarters */}
                <div className={styles.rowItem}>
                  <div className={`${styles.iconBox} ${styles.iconLocation}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <div className={styles.rowDetails}>
                    <div className={styles.rowLabelRow}>
                      <span className={styles.rowTag}>Studio Headquarters</span>
                      <span className={styles.rowTiming}>Unit 3 · Kharvela Nagar</span>
                    </div>
                    <p className={styles.rowAddress}>
                      {address}
                    </p>
                  </div>

                  {/* Aligned 2-Button Column */}
                  <div className={styles.rowActions}>
                    <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btnTactile} ${styles.btnAmber}`}>
                      <span>Directions</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(address, 'address')}
                      className={`${styles.btnTactileIcon} ${copiedField === 'address' ? styles.copiedActive : ''}`}
                      title="Copy office address"
                      aria-label="Copy office address"
                    >
                      {copiedField === 'address' ? (
                        <span className={styles.copiedBadge}>✓</span>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Card Tactile Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.footerInfo}>
                  <span className={styles.footerDot} />
                  <span>In-person consultations available by appointment</span>
                </div>
                <Link href="/contact" className={styles.footerActionBtn}>
                  <span>Start a Project</span>
                  <span className={styles.arrowIcon}>→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════
              RIGHT PANEL: Tactile Skeuomorphic Map Showcase
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={160} direction="right">
            <div className={styles.skeuoMapCard}>
              {/* Top Map Header */}
              <div className={styles.mapTopBar}>
                <div className={styles.mapLocationInfo}>
                  <div className={styles.mapPinEmboss}>📍</div>
                  <div className={styles.mapTextWrap}>
                    <strong className={styles.mapTitle}>Nova Spark Studio & Lab</strong>
                    <span className={styles.mapSubtitle}>Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar</span>
                  </div>
                </div>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnTactile} ${styles.btnBlue} ${styles.mapTopBtn}`}
                >
                  <span>Get Directions</span>
                  <span className={styles.arrowDiagonal}>↗</span>
                </a>
              </div>

              {/* Embedded Google Maps Container */}
              <div className={styles.mapViewport}>
                <iframe
                  title="Nova Spark Studio Location Map"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapIframe}
                />

                {/* Floating Skeuomorphic Overlay Badge inside Map */}
                <div className={styles.mapFloatingBadge}>
                  <div className={styles.floatingBadgeLeft}>
                    <span className={styles.floatingPulseDot} />
                    <span className={styles.floatingTitle}>Kharvela Nagar HQ</span>
                    <span className={styles.floatingSep}>•</span>
                    <span className={styles.floatingParking}>✓ Free Visitor Parking</span>
                  </div>
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.floatingMapLink}
                  >
                    Open in Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
