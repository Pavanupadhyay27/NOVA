'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetaAdStudioSimulator.module.css';

type AdFormat = 'reel' | 'whatsapp' | 'leadform';

export default function MetaAdStudioSimulator() {
  const [activeFormat, setActiveFormat] = useState<AdFormat>('reel');
  const [likesCount, setLikesCount] = useState(1482);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(likesCount + 1);
      setHasLiked(true);
    } else {
      setLikesCount(likesCount - 1);
      setHasLiked(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.studioPulse} />
            <span>Interactive Ad Creative Studio</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Simulate Your High-Converting <span className="accent-gradient">Meta Ad Funnel</span>
          </h2>
          <p className={styles.subhead}>
            Test the three highest-performing ad architectures deployed by Marketing Copilot across Instagram, Facebook, and WhatsApp in Bhubaneswar.
          </p>
        </ScrollReveal>

        {/* Format Switcher Tabs */}
        <div className={styles.formatSwitcher}>
          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'reel' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('reel')}
          >
            <span className={styles.btnIcon}>🎬</span>
            <span>9:16 Instagram Reel Ad</span>
            <span className={styles.formatBadge}>High Viral ROAS</span>
          </button>

          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'whatsapp' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('whatsapp')}
          >
            <span className={styles.btnIcon}>💬</span>
            <span>Click-to-WhatsApp Chat</span>
            <span className={styles.formatBadge}>Lowest CPA in Odisha</span>
          </button>

          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'leadform' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('leadform')}
          >
            <span className={styles.btnIcon}>📋</span>
            <span>Instant Lead Capture</span>
            <span className={styles.formatBadge}>Pre-Filled Forms</span>
          </button>
        </div>

        {/* Studio Canvas Showcase */}
        <div className={styles.canvasWrapper}>
          {/* Left: Interactive Simulated Smartphone Device */}
          <div className={styles.deviceCol}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneSpeaker} />
              
              {/* Phone Screen Screen Content */}
              <div className={styles.phoneScreen}>
                {/* Top Status Bar */}
                <div className={styles.phoneTopBar}>
                  <span>9:41</span>
                  <div className={styles.topIcons}>
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* VIEW 1: 9:16 INSTAGRAM REEL AD */}
                {activeFormat === 'reel' && (
                  <div className={styles.reelView}>
                    <div className={styles.reelBackgroundMockup}>
                      <div className={styles.reelHookBadge}>
                        <span>⚡ 3-SECOND VISUAL HOOK</span>
                      </div>
                      <div className={styles.reelVideoCenterText}>
                        &quot;How This Bhubaneswar Brand Made ₹42 Lakhs in 72 Hours With Meta Reels&quot;
                      </div>
                      <div className={styles.reelPlayIndicator}>▶ Video Playing (Reels Audio)</div>
                    </div>

                    {/* Right Engagement Floating Buttons */}
                    <div className={styles.reelSidebar}>
                      <button 
                        type="button" 
                        className={styles.reelActionBtn}
                        onClick={handleLike}
                      >
                        <span style={{ color: hasLiked ? '#EF4444' : '#FFFFFF', fontSize: 20 }}>
                          {hasLiked ? '❤️' : '🤍'}
                        </span>
                        <span>{likesCount}</span>
                      </button>

                      <div className={styles.reelActionBtn}>
                        <span style={{ fontSize: 20 }}>💬</span>
                        <span>184</span>
                      </div>

                      <div className={styles.reelActionBtn}>
                        <span style={{ fontSize: 20 }}>↗️</span>
                        <span>342</span>
                      </div>

                      <div className={styles.reelAudioDisc}>🎵</div>
                    </div>

                    {/* Bottom Reel Details */}
                    <div className={styles.reelBottomMeta}>
                      <div className={styles.reelProfileRow}>
                        <div className={styles.sponsorAvatar}>MC</div>
                        <span className={styles.sponsorName}>marketingcopilot.in</span>
                        <span className={styles.sponsoredTag}>Sponsored</span>
                      </div>
                      <p className={styles.reelCaption}>
                        Stop burning budget on boosted posts. We engineer performance Reels ads tailored for Odisha buyers... <strong>more</strong>
                      </p>
                      
                      {/* Swipe CTA Button */}
                      <Link href="/contact" className={styles.reelCtaButton}>
                        <span>Claim Growth Blueprint</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}

                {/* VIEW 2: CLICK-TO-WHATSAPP DIRECT CHAT AD */}
                {activeFormat === 'whatsapp' && (
                  <div className={styles.whatsappView}>
                    <div className={styles.waHeader}>
                      <div className={styles.waAvatar}>MC</div>
                      <div className={styles.waHeaderInfo}>
                        <span className={styles.waTitle}>Nova Spark Strategist</span>
                        <span className={styles.waStatus}>● Active in Bhubaneswar</span>
                      </div>
                      <span className={styles.waVerifyBadge}>✓ Verified</span>
                    </div>

                    <div className={styles.waChatBody}>
                      <div className={styles.chatBubbleAdContext}>
                        <span className={styles.chatAdSource}>Meta Ad · Bhubaneswar Campaign</span>
                        <p className={styles.chatAdHeadline}>
                          &quot;Book a 1-on-1 Meta Ads Strategy Session with Marketing Copilot&quot;
                        </p>
                      </div>

                      <div className={styles.chatBubbleIncoming}>
                        <p>
                          Namaskar! 👋 Welcome to Marketing Copilot Bhubaneswar. Which growth practice are you looking to scale?
                        </p>
                        <span className={styles.chatTime}>09:41 AM</span>
                      </div>

                      <div className={styles.chatBubbleOutgoing}>
                        <p>
                          Hi! I want to generate qualified leads and high-ROAS sales for my Bhubaneswar business via Instagram &amp; Facebook.
                        </p>
                        <span className={styles.chatTime}>09:42 AM ✓✓</span>
                      </div>

                      <div className={styles.chatBubbleIncoming}>
                        <p>
                          Fantastic! We have an ongoing sprint for Odisha brands. Here is our direct strategy scheduler:
                        </p>
                        <div className={styles.chatBookingCard}>
                          <span>📅 Select Strategy Slot</span>
                          <span className={styles.chatBookingSub}>30-min Zoom or Kharvela Nagar Office</span>
                        </div>
                        <span className={styles.chatTime}>09:42 AM</span>
                      </div>
                    </div>

                    <div className={styles.waInputBar}>
                      <span className={styles.waInputPlaceholder}>Type a message to our strategist...</span>
                      <span className={styles.waSendIcon}>➤</span>
                    </div>
                  </div>
                )}

                {/* VIEW 3: INSTANT LEAD CAPTURE FORM */}
                {activeFormat === 'leadform' && (
                  <div className={styles.leadFormView}>
                    <div className={styles.formHeader}>
                      <div className={styles.formLogoBadge}>MC</div>
                      <h4 className={styles.formTitle}>Exclusive Growth Plan</h4>
                      <p className={styles.formSub}>Marketing Copilot · Bhubaneswar</p>
                    </div>

                    <div className={styles.formBody}>
                      <div className={styles.formProgressRow}>
                        <span className={styles.stepActive}>Step 1: Contact Details</span>
                        <span className={styles.stepMuted}>Step 2: Business Info</span>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Full Name</label>
                        <div className={styles.inputMock}>Priyadarshi Mohapatra</div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>WhatsApp Phone Number</label>
                        <div className={styles.inputMock}>+91 94371 XXXXX</div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Bhubaneswar Location</label>
                        <div className={styles.inputMock}>Patia / Infocity Corridor</div>
                      </div>

                      <div className={styles.formGuaranteePill}>
                        <span>🔒 100% Privacy · No Spam Guarantee</span>
                      </div>

                      <Link href="/contact" className={styles.formSubmitBtn}>
                        <span>Submit &amp; Schedule Strategy Session</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Technical Explanation & Conversion Metrics */}
          <div className={styles.detailsCol}>
            {activeFormat === 'reel' && (
              <div className={styles.formatDetailCard}>
                <span className={styles.detailPill}>VIRAL ATTENTION ENGINE</span>
                <h3 className={styles.detailTitle}>
                  9:16 Vertical Video Reels That Stop the Thumb in 3 Seconds
                </h3>
                <p className={styles.detailLead}>
                  In Bhubaneswar, consumers scroll through 300+ feet of social content daily. Generic stock banners get ignored instantly. We script, shoot, and edit high-velocity Reels with psychological pattern interrupts that compel viewers to stop, watch, and take action.
                </p>

                <div className={styles.featureGrid}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>⚡</span>
                    <div>
                      <h4 className={styles.featureName}>First 3-Second Hook Architecture</h4>
                      <p className={styles.featureDesc}>Pattern interrupts, text overlays, and regional Odia/English relatable hooks that prevent drop-offs.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>🎬</span>
                    <div>
                      <h4 className={styles.featureName}>Weekly Creative Sprint Rotations</h4>
                      <p className={styles.featureDesc}>We test 6–8 new creative angles every week to eliminate ad fatigue and sustain low CPA.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>📈</span>
                    <div>
                      <h4 className={styles.featureName}>Advantage+ AI Algorithmic Scaling</h4>
                      <p className={styles.featureDesc}>Leveraging Meta’s neural budget optimization to find buyers across Instagram Explore &amp; Reels.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.statBoxRow}>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>4.8X</span>
                    <span className={styles.studioStatLabel}>Average ROAS</span>
                  </div>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>72 Hours</span>
                    <span className={styles.studioStatLabel}>Creative Turnaround</span>
                  </div>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>-45%</span>
                    <span className={styles.studioStatLabel}>Lower CPA vs Static</span>
                  </div>
                </div>
              </div>
            )}

            {activeFormat === 'whatsapp' && (
              <div className={styles.formatDetailCard}>
                <span className={styles.detailPill}>HIGHEST CONVERSION RATE IN ODISHA</span>
                <h3 className={styles.detailTitle}>
                  Click-to-WhatsApp Funnels That Bypass Slow Form Fills
                </h3>
                <p className={styles.detailLead}>
                  Odisha consumers prefer direct, human communication. Rather than making prospective clients fill out intimidating 10-field web forms, our ads route targeted buyers directly into WhatsApp with automated welcoming flows and instant appointment booking.
                </p>

                <div className={styles.featureGrid}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>💬</span>
                    <div>
                      <h4 className={styles.featureName}>Zero Friction Conversion</h4>
                      <p className={styles.featureDesc}>One tap launches the user&apos;s native WhatsApp app with pre-filled message prompts.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>🤖</span>
                    <div>
                      <h4 className={styles.featureName}>Automated Qualification &amp; Routing</h4>
                      <p className={styles.featureDesc}>Smart chatbot flows pre-qualify budget and service requirements before alerting your sales rep.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>🎯</span>
                    <div>
                      <h4 className={styles.featureName}>Verified Phone Number Retention</h4>
                      <p className={styles.featureDesc}>Every conversation captures an authentic WhatsApp contact for ongoing remarketing and nurture.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.statBoxRow}>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>₹14</span>
                    <span className={styles.studioStatLabel}>Lowest Cost Per Lead</span>
                  </div>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>84%</span>
                    <span className={styles.studioStatLabel}>Open / Reply Rate</span>
                  </div>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>3.2X</span>
                    <span className={styles.studioStatLabel}>Faster Sales Close</span>
                  </div>
                </div>
              </div>
            )}

            {activeFormat === 'leadform' && (
              <div className={styles.formatDetailCard}>
                <span className={styles.detailPill}>ENTERPRISE LEAD GENERATION</span>
                <h3 className={styles.detailTitle}>
                  Native In-App Instant Forms Pre-Filled by Meta AI
                </h3>
                <p className={styles.detailLead}>
                  Ideal for real estate developers, educational institutions, and luxury healthcare in Bhubaneswar. The form loads in 0.1 seconds inside Facebook/Instagram with the user&apos;s verified name, phone, and email pre-populated.
                </p>

                <div className={styles.featureGrid}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>⚡</span>
                    <div>
                      <h4 className={styles.featureName}>Instant Sub-Second Loading</h4>
                      <p className={styles.featureDesc}>Zero website loading lag; forms open instantly within the native social app.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>🔒</span>
                    <div>
                      <h4 className={styles.featureName}>Conditional Logic &amp; Filtering</h4>
                      <p className={styles.featureDesc}>Disqualifies low-budget tire-kickers with conditional questions (e.g. 3BHK budget &gt; ₹1.2 Cr).</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>🔄</span>
                    <div>
                      <h4 className={styles.featureName}>Direct CRM &amp; Telephony Sync</h4>
                      <p className={styles.featureDesc}>Instant webhook synchronization delivering lead alerts to your sales team in under 60 seconds.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.statBoxRow}>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>38%</span>
                    <span className={styles.studioStatLabel}>Form Completion Rate</span>
                  </div>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>&lt; 60s</span>
                    <span className={styles.studioStatLabel}>Sales Lead Dispatch</span>
                  </div>
                  <div className={styles.studioStat}>
                    <span className={styles.studioStatVal}>+220%</span>
                    <span className={styles.studioStatLabel}>Qualified Pipeline</span>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.studioLaunchBtn}>
                <span>Deploy This Ad System for Your Business</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
