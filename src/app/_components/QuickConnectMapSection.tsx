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
  const whatsappUrl = 'https://wa.me/919876543210?text=Hi%20Nova%20Spark%20team%2C%20I%20would%20like%20to%20discuss%20a%20growth%20strategy%20for%20my%20brand.';
  const address = 'Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001';
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001';
  const mapsEmbedUrl = 'https://maps.google.com/maps?q=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const copyToClipboard = (text: string, fieldId: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => {
        setCopiedField(null);
      }, 2400);
    }
  };

  return (
    <section className={styles.section} id="direct-connect">
      {/* Subtle ambient lighting */}
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <div className={styles.headerTop}>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Direct Access & Headquarters
              </div>
              <div className={styles.statusChip}>
                <span className={styles.pulseDot} />
                <span className={styles.statusText}>Growth Lab Active · Fast Direct Response</span>
              </div>
            </div>

            <h2 className={`display-lg ${styles.title}`}>
              Connect Directly.<br />
              <span className="accent-gradient">Zero Wait Times. Instant Reach.</span>
            </h2>
            <p className={`body-lg ${styles.subtitle}`}>
              Talk with our senior growth partners directly or visit our Bhubaneswar studio. No automated switchboards or gatekeepers.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Panel Grid */}
        <div className={styles.dualPanelGrid}>
          {/* ══════════════════════════════════════════════════
              LEFT PANEL: Direct Channels & Office Info
             ══════════════════════════════════════════════════ */}
          <div className={styles.leftPanel}>
            <ScrollReveal delay={100} direction="left">
              <div className={styles.panelCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardBadge}>
                    <span className={styles.cardBadgeIcon}>⚡</span>
                    <span>Direct Channels</span>
                  </div>
                  <span className={styles.slaBadge}>24-Hour SLA Guaranteed</span>
                </div>

                <div className={styles.channelList}>
                  {/* Phone Channel */}
                  <div className={styles.channelCard}>
                    <div className={styles.channelIconWrap} style={{ background: 'rgba(2, 132, 199, 0.08)', color: '#0284C7' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>

                    <div className={styles.channelInfo}>
                      <div className={styles.channelMeta}>
                        <span className={styles.channelLabel}>Direct Phone & Discovery</span>
                        <span className={styles.channelHours}>Mon – Sat · 9:30 AM – 7:30 PM</span>
                      </div>
                      <a href={`tel:${rawPhone}`} className={styles.channelValue}>
                        {phone}
                      </a>
                    </div>

                    <div className={styles.channelActions}>
                      <a
                        href={`tel:${rawPhone}`}
                        className={`${styles.actionBtn} ${styles.actionPrimary}`}
                        title="Call Now"
                        aria-label="Call Direct Phone Number"
                      >
                        <span className={styles.btnIcon}>📞</span>
                        <span className={styles.btnText}>Call</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(phone, 'phone')}
                        className={`${styles.actionBtn} ${styles.actionSecondary}`}
                        title="Copy Phone Number"
                        aria-label="Copy Phone Number to Clipboard"
                      >
                        {copiedField === 'phone' ? (
                          <span className={styles.copiedState}>✓ Copied</span>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span className={styles.btnText}>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* WhatsApp Channel */}
                  <div className={`${styles.channelCard} ${styles.channelWhatsApp}`}>
                    <div className={styles.channelIconWrap} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.69.45-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.14-1.19-.07-.09-.23-.15-.48-.28z"/>
                      </svg>
                    </div>

                    <div className={styles.channelInfo}>
                      <div className={styles.channelMeta}>
                        <span className={styles.channelLabel}>Instant WhatsApp Chat</span>
                        <span className={styles.fastReplyBadge}>🟢 ~10 Min Response</span>
                      </div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.channelValue}
                      >
                        {phone}
                      </a>
                    </div>

                    <div className={styles.channelActions}>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionBtn} ${styles.actionWhatsApp}`}
                        title="Chat on WhatsApp"
                        aria-label="Start WhatsApp Chat"
                      >
                        <span className={styles.btnIcon}>💬</span>
                        <span className={styles.btnText}>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Email Channel */}
                  <div className={styles.channelCard}>
                    <div className={styles.channelIconWrap} style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#6366F1' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>

                    <div className={styles.channelInfo}>
                      <div className={styles.channelMeta}>
                        <span className={styles.channelLabel}>Partnership & RFPs</span>
                        <span className={styles.channelHours}>Official Growth Inquiries</span>
                      </div>
                      <a href={`mailto:${email}`} className={styles.channelValue}>
                        {email}
                      </a>
                    </div>

                    <div className={styles.channelActions}>
                      <a
                        href={`mailto:${email}`}
                        className={`${styles.actionBtn} ${styles.actionPrimary}`}
                        title="Send Email"
                        aria-label="Send Email"
                      >
                        <span className={styles.btnIcon}>✉️</span>
                        <span className={styles.btnText}>Email</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(email, 'email')}
                        className={`${styles.actionBtn} ${styles.actionSecondary}`}
                        title="Copy Email Address"
                        aria-label="Copy Email Address to Clipboard"
                      >
                        {copiedField === 'email' ? (
                          <span className={styles.copiedState}>✓ Copied</span>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span className={styles.btnText}>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Studio Address Card */}
                  <div className={`${styles.channelCard} ${styles.channelAddress}`}>
                    <div className={styles.channelIconWrap} style={{ background: 'rgba(245, 158, 11, 0.09)', color: '#D97706' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>

                    <div className={styles.channelInfo}>
                      <div className={styles.channelMeta}>
                        <span className={styles.channelLabel}>Official Studio & Lab</span>
                        <span className={styles.channelHours}>Unit 3 · Kharvela Nagar</span>
                      </div>
                      <p className={styles.addressText}>
                        {address}
                      </p>
                    </div>

                    <div className={styles.channelActions}>
                      <a
                        href={mapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionBtn} ${styles.actionDirections}`}
                        title="Open in Google Maps"
                        aria-label="Open Office Address in Google Maps"
                      >
                        <span className={styles.btnIcon}>🗺️</span>
                        <span className={styles.btnText}>Directions</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Row */}
                <div className={styles.panelFooter}>
                  <div className={styles.quickStat}>
                    <span className={styles.statDot} />
                    <span>In-person consultations available by appointment</span>
                  </div>
                  <Link href="/contact" className={styles.proposalLink}>
                    Full Project Inquiry Form <span>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ══════════════════════════════════════════════════
              RIGHT PANEL: Interactive Map Showcase
             ══════════════════════════════════════════════════ */}
          <div className={styles.rightPanel}>
            <ScrollReveal delay={200} direction="right">
              <div className={styles.mapContainer}>
                {/* Top Glass Header Bar */}
                <div className={styles.mapTopBar}>
                  <div className={styles.mapLocationBadge}>
                    <span className={styles.mapPinIcon}>📍</span>
                    <div className={styles.mapBadgeText}>
                      <strong className={styles.mapBadgeTitle}>Nova Spark Studio</strong>
                      <span className={styles.mapBadgeSub}>Mallick Complex, Unit 3, Kharvela Nagar</span>
                    </div>
                  </div>

                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapDirectionsBtn}
                  >
                    <span>Get Directions</span>
                    <span className={styles.arrowIcon}>↗</span>
                  </a>
                </div>

                {/* Embedded Interactive Google Map */}
                <div className={styles.iframeWrapper}>
                  <iframe
                    title="Nova Spark Growth Studio Location Map"
                    src={mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.mapIframe}
                  />

                  {/* Floating Bottom Info Pill inside Map */}
                  <div className={styles.mapFloatingCard}>
                    <div className={styles.cardIndicator}>
                      <span className={styles.activePulse} />
                      <span className={styles.cardHeaderSmall}>Nova Spark HQ</span>
                    </div>
                    <p className={styles.floatingAddress}>
                      Unit 3, Kharvela Nagar, Bhubaneswar
                    </p>
                    <div className={styles.floatingActions}>
                      <span className={styles.parkingBadge}>✓ Visitor Parking</span>
                      <a
                        href={mapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.floatingLink}
                      >
                        Open in Maps ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
