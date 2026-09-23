'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SocialMediaWorkstation.module.css';

interface SocialStage {
  id: string;
  stageName: string;
  stagePill: string;
  headline: string;
  subhead: string;
  objective: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
  framework: string;
}

const socialStages: SocialStage[] = [
  {
    id: 'scripting',
    stageName: '01. High-Hook Scripting',
    stagePill: 'RETENTION PSYCHOLOGY',
    headline: 'Psychological 3-Second Pattern Interrupts',
    subhead: 'Most local business videos get skipped in 1.5 seconds. We script viral hooks that freeze thumbs and demand immediate attention.',
    objective: 'Achieve 38%+ 3-second hook retention and build qualified retargeting audiences across Odisha.',
    deliverables: [
      'Weekly batch of 8 bespoke video scripts tailored for your exact niche',
      'Dual-language copywriting: colloquial Odia resonance + polished English authority',
      'High-converting CTAs driving comments and direct WhatsApp message triggers',
      'Competitor viral hook benchmarking across Bhubaneswar & national leaders',
    ],
    specs: [
      { label: '3-Sec Hook Rate', value: '38%–45%' },
      { label: 'Weekly Scripts', value: '8 Concepts' },
      { label: 'Audience Focus', value: 'Odisha HNI' },
    ],
    framework: `// Hook Architecture: Pattern Interrupt
const hookFormula = {
  first3Seconds: "Visual Break + Contrarian Truth",
  body15Seconds: "Tactile Transformation & Client Proof",
  closingCta: "Comment 'SCALE' for Direct WhatsApp Breakdown"
};`,
  },
  {
    id: 'production',
    stageName: '02. 4K On-Location Shoots',
    stagePill: 'CINEMATIC GEAR',
    headline: 'Full-Crew Studio Production at Your Office or Showroom',
    subhead: 'Our dedicated videography crew arrives at your Bhubaneswar location with cinema-grade cameras, wireless audio, and professional lighting.',
    objective: 'Capture high-ticket brand aesthetics that elevate your pricing power and completely outclass local competitors.',
    deliverables: [
      'Sony FX3 4K cinema cameras with prime G-Master lenses',
      'Sennheiser professional wireless audio recording (zero echo/noise)',
      'Aputure studio light kits creating crisp, flattering skin tones',
      'Guided on-camera coaching making founders and clinicians look natural and confident',
    ],
    specs: [
      { label: 'Resolution', value: '4K 10-Bit' },
      { label: 'Monthly Shoot', value: 'Dedicated Days' },
      { label: 'Audio Quality', value: 'Studio Lapel' },
    ],
    framework: `// On-Location Production Equipment SLA
const productionSetup = {
  camera: "Sony FX3 + Sony 24-70mm GM II",
  audio: "Dual Sennheiser EW-DP Wireless",
  lighting: "Aputure 300d II + Light Dome III",
  stabilization: "DJI RS3 Pro 3-Axis Gimbal"
};`,
  },
  {
    id: 'postprod',
    stageName: '03. Viral Post-Production',
    stagePill: 'KINETIC EDITING',
    headline: 'DaVinci Color Grading & Dynamic Subtitle Typography',
    subhead: 'Over 75% of social media users watch videos without sound. We engineer kinetic animated subtitles, sound design, and color grades.',
    objective: 'Maximize total video watch time and guarantee algorithmic distribution across Instagram Explore and Reels tabs.',
    deliverables: [
      'Kinetic animated word-by-word subtitles with dynamic brand color highlights',
      'Subtle audio sound design (whooshes, pops, risers) maintaining sensory engagement',
      'Bespoke cinematic color grading matching luxury brand aesthetics',
      'Re-formatting for multi-platform distribution (9:16 Reels, YouTube Shorts, LinkedIn)',
    ],
    specs: [
      { label: 'Avg Watch Time', value: '86%+' },
      { label: 'Editing Turnaround', value: '< 72 Hours' },
      { label: 'Sound Sync', value: 'Custom SFX' },
    ],
    framework: `// Post-Production Processing Pipeline
const editPipeline = {
  software: "DaVinci Resolve Studio & Premiere Pro",
  subtitles: "Hand-Crafted Kinetic Brand Captions",
  colorSpace: "ACES Rec.709 Color Transform",
  export: "ProRes 422 HQ -> Instagram Crisp Bitrate"
};`,
  },
  {
    id: 'distribution',
    stageName: '04. ManyChat & Lead Funnels',
    stagePill: 'AUTOMATED REVENUE',
    headline: 'Turning Comments Into Verified WhatsApp Sales Leads',
    subhead: 'Likes don’t pay salaries. We deploy automated DM funnels: when viewers comment on your Reels, our bots dispatch the offer to their DMs in under 15 seconds.',
    objective: 'Transform social attention into verified WhatsApp consultations, catalog downloads, and qualified phone appointments.',
    deliverables: [
      'ManyChat automated DM triggers responding to keyword comments (e.g., "PRICE", "BOOK")',
      'Instant WhatsApp Business routing passing prospect details directly to your sales team',
      '15-minute community management response SLA on incoming comments and DMs',
      'Weekly follower-to-lead conversion reporting and ROI retrospectives',
    ],
    specs: [
      { label: 'Lead Dispatch SLA', value: '< 15 Seconds' },
      { label: 'DM-to-Chat Rate', value: '32% Avg' },
      { label: 'CRM Sync', value: 'Instant API' },
    ],
    framework: `// ManyChat WhatsApp Lead Bridge
const leadBridge = {
  trigger: "COMMENT_KEYWORD_MATCH",
  botAction: "INSTANT_DM_WITH_DIRECT_WHATSAPP_LINK",
  leadHandover: "SMS_AND_WHATSAPP_NOTIFICATION_TO_SALES"
};`,
  },
];

export default function SocialMediaWorkstation() {
  const [activeStage, setActiveStage] = useState<string>('scripting');
  const current = socialStages.find((s) => s.id === activeStage) || socialStages[0];

  return (
    <section className={styles.section} id="workstation">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.stageDot} />
            <span>Commercial Content Architecture</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            The System Behind <span className="accent-gradient">High-Growth Social Brands</span>
          </h2>
          <p className={styles.subhead}>
            From scriptwriting to on-location cinema shoots to automated DM lead funnels — we manage your entire social media presence end-to-end.
          </p>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className={styles.tabBar}>
          {socialStages.map((stage) => {
            const isActive = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                type="button"
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveStage(stage.id)}
              >
                <span className={styles.tabName}>{stage.stageName}</span>
                <span className={styles.tabPill}>{stage.stagePill}</span>
              </button>
            );
          })}
        </div>

        {/* Console Stage */}
        <div className={styles.consoleStage}>
          {/* Details Column */}
          <div className={styles.detailsCol}>
            <div className={styles.badgeRow}>
              <span className={styles.stagePillHighlight}>{current.stagePill}</span>
              <span className={styles.verifiedDot}>● VERIFIED BHUBANESWAR PRODUCTION</span>
            </div>

            <h3 className={styles.stageHeadline}>{current.headline}</h3>
            <p className={styles.stageSubhead}>{current.subhead}</p>

            <div className={styles.objectiveBox}>
              <span className={styles.objLabel}>COMMERCIAL OBJECTIVE:</span>
              <p className={styles.objText}>{current.objective}</p>
            </div>

            <div className={styles.tacticsList}>
              <span className={styles.tacticsTitle}>Execution Deliverables:</span>
              {current.deliverables.map((item, idx) => (
                <div key={idx} className={styles.tacticItem}>
                  <span className={styles.tacticIcon}>✓</span>
                  <span className={styles.tacticText}>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.kpiRow}>
              {current.specs.map((spec) => (
                <div key={spec.label} className={styles.kpiBox}>
                  <span className={styles.kpiVal}>{spec.value}</span>
                  <span className={styles.kpiLabel}>{spec.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.workstationCta}>
                <span>Claim Free Brand Social Audit</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Code Framework Column */}
          <div className={styles.terminalCol}>
            <div className={styles.codeTerminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.macDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.terminalTitle}>production-spec.js · Marketing Copilot Studio</div>
                <span className={styles.edgeBadge}>STUDIO SPEC</span>
              </div>
              <div className={styles.codeBody}>
                <pre>
                  <code>{current.framework}</code>
                </pre>
              </div>
              <div className={styles.terminalFooter}>
                <span className={styles.footItem}>🎥 4K Sony FX3 Cinema</span>
                <span className={styles.footItem}>⚡ DaVinci Resolve</span>
                <span className={styles.footItem}>💬 ManyChat Automated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
