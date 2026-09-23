'use strict';
'use client';

import React from 'react';
import styles from './AiAutomationRoadmap.module.css';

interface Phase {
  phase: string;
  days: string;
  title: string;
  desc: string;
  deliverables: string[];
}

const PHASES: Phase[] = [
  {
    phase: 'Phase 01',
    days: 'Days 1 - 7',
    title: 'Knowledge Ingestion & Conversation Auditing',
    desc: 'Audit all historical customer conversations, FAQs, price sheets, and sales objections to create your proprietary knowledge corpus.',
    deliverables: [
      'Document chunking & vector indexing',
      'Tone-of-voice & compliance playbook',
      'Meta Cloud API account verification'
    ]
  },
  {
    phase: 'Phase 02',
    days: 'Days 8 - 14',
    title: 'Multi-Agent Prompting & Webhook Architecture',
    desc: 'Engineer specialized AI agents (Qualifier, Quoter, Calendar Booking) and establish low-latency webhooks into your CRM stack.',
    deliverables: [
      'Multi-prompt LLM orchestration',
      'HubSpot/Zoho 2-way data sync',
      'Interactive WhatsApp button templates'
    ]
  },
  {
    phase: 'Phase 03',
    days: 'Days 15 - 22',
    title: 'Stress Testing & Human-in-the-Loop Safeguards',
    desc: 'Execute 500+ simulated edge case inquiries in Odia, Hindi, and English. Calibrate hallucination firewalls and escalation protocols.',
    deliverables: [
      'Edge-case stress testing report',
      'Zero-hallucination validation test',
      'Warm transfer routing to sales phones'
    ]
  },
  {
    phase: 'Phase 04',
    days: 'Days 23 - 30',
    title: 'Production Go-Live & Staff Cockpit Training',
    desc: 'Deploy to live ad traffic and customer touchpoints. Train internal sales teams on the live agent hand-off dashboard.',
    deliverables: [
      'Live Meta WhatsApp & web deployment',
      'Real-time analytics & alert setup',
      'Staff handoff training & SOPs'
    ]
  }
];

export default function AiAutomationRoadmap() {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.header}>
        <div className={styles.kicker}>Deployment Protocol</div>
        <h2 className={styles.title}>30-Day Autonomous AI Implementation Roadmap</h2>
        <p className={styles.subtitle}>
          How we architect, train, test, and deploy enterprise conversational agents and automated pipelines into your business in 4 weeks.
        </p>
      </div>

      <div className={styles.timeline}>
        {PHASES.map((p) => (
          <div key={p.phase} className={styles.timelineCard}>
            <span className={styles.phaseBadge}>{p.phase}</span>
            <div className={styles.phaseDays}>{p.days}</div>
            <h3 className={styles.phaseTitle}>{p.title}</h3>
            <p className={styles.phaseDesc}>{p.desc}</p>

            <ul className={styles.deliverablesList}>
              {p.deliverables.map((item, i) => (
                <li key={i} className={styles.deliverableItem}>
                  <div className={styles.bulletDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
