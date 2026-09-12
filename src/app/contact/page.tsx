'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: '₹1.5L – ₹5L / month',
    services: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Performance Marketing',
    'SEO & Organic',
    'Social Media & Content',
    'Creative & Branding',
    'Web Development',
    'AI & Automation',
  ];

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      company: '',
      budget: '₹1.5L – ₹5L / month',
      services: [],
      message: '',
    });
    setIsSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Nova Spark, I would like to discuss a project. Name: ${form.name || 'Client'}, Company: ${form.company || 'N/A'}, Services: ${form.services.join(', ') || 'All Services'}, Budget: ${form.budget}.`
  );

  return (
    <div className={styles.page}>
      <div className={styles.heroBg} />
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        <div className={styles.grid}>
          {/* ══════════════════════════════════════════════════
              LEFT INFO PANE
             ══════════════════════════════════════════════════ */}
          <div className={styles.left}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>START A PROJECT</span>
              </div>

              <h1 className={`display-hero ${styles.title}`}>
                Build a Stronger Digital{' '}
                <span className="accent-gradient">Presence in Bhubaneswar</span>
              </h1>

              <div className={styles.sub}>
                <p className={styles.subLead}>
                  Have a business goal, a marketing challenge, or a new idea? Tell us about it.
                </p>
                <p className={styles.subBody}>
                  Nova Spark is a Digital Marketing Company in Bhubaneswar helping brands grow through strategic SEO, performance marketing, social media, web development, and AI-driven digital solutions.
                </p>
              </div>

              {/* Compact Contact Badges */}
              <div className={styles.contactDetails}>
                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>✉</div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Direct Email</span>
                    <a href="mailto:connect@novasparkdigitalmarketingagency.com" className={styles.detailVal}>
                      connect@novasparkdigitalmarketingagency.com
                    </a>
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>📍</div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Growth Lab Location</span>
                    <span className={styles.detailVal}>Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar</span>
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>⚡</div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Direct Phone &amp; SLA</span>
                    <a href="tel:+918280788689" className={styles.detailVal}>
                      +91 82807 88689 <span className={styles.slaPill}>24h SLA</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.socials}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.social}>LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social}>Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.social}>YouTube</a>
              </div>
            </ScrollReveal>
          </div>

          {/* ══════════════════════════════════════════════════
              RIGHT PANE: FORM & BOUNCING CHECKMARK SUCCESS STATE
             ══════════════════════════════════════════════════ */}
          <div className={styles.right}>
            <ScrollReveal delay={120}>
              {!isSubmitted ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>Request a Growth Consultation</h3>
                    <p className={styles.formSubtitle}>Fill in your project targets below. No spam, zero obligation.</p>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Full Name *</label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="e.g. Rahul Sharma"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Work Email / Phone *</label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="e.g. rahul@brand.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Company Name</label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="e.g. Acme Brands"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Monthly Growth Budget</label>
                      <select
                        className={styles.select}
                        value={form.budget}
                        onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                      >
                        <option value="₹50K – ₹1.5L / month">₹50K – ₹1.5L / month</option>
                        <option value="₹1.5L – ₹5L / month">₹1.5L – ₹5L / month</option>
                        <option value="₹5L – ₹15L / month">₹5L – ₹15L / month</option>
                        <option value="₹15L+ / month">₹15L+ / month</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>What services do you need?</label>
                    <div className={styles.serviceGrid}>
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`${styles.serviceBtn} ${
                            form.services.includes(s) ? styles.serviceBtnActive : ''
                          }`}
                          onClick={() => toggleService(s)}
                        >
                          {form.services.includes(s) ? '✓ ' : '+ '}
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Tell us about your project &amp; goals</label>
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Share your target revenue, current bottlenecks, ad channels, or key timelines..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  <div className={styles.submitWrapper}>
                    <div className={styles.borderBeamWrapper}>
                      <div className={styles.borderGlowAmbient} />
                      <div className={styles.borderBeamSpin} />
                      <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                      >
                        <span className={styles.btnShimmer} />
                        <span className={styles.btnGlassGloss} />
                        <span className={styles.btnLabel}>
                          {isSubmitting ? 'Sending Request...' : 'Start the Conversation →'}
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                /* ══════════════════════════════════════════════════
                   BOUNCING GREEN CHECKMARK SUCCESS CARD
                   ══════════════════════════════════════════════════ */
                <div className={styles.successCard}>
                  <div className={styles.confettiMesh} />

                  {/* Bouncing Green Ball Animation */}
                  <div className={styles.ballContainer}>
                    <div className={styles.pulseRing1} />
                    <div className={styles.pulseRing2} />
                    <div className={styles.bouncingBall}>
                      <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>

                  <div className={styles.successBadge}>
                    <span className={styles.successDot} />
                    <span>CONSULTATION INITIATED</span>
                  </div>

                  <h3 className={styles.successTitle}>
                    Consultation Request <span className="accent-gradient">Received!</span>
                  </h3>

                  <p className={styles.successDesc}>
                    Thank you{form.name ? `, ${form.name}` : ''}! Our senior growth team in Bhubaneswar has received your project details. We will analyze your requirements and reach out within <strong>24 business hours</strong> with a bespoke preliminary growth blueprint.
                  </p>

                  {/* Summary Tags */}
                  {(form.services.length > 0 || form.budget) && (
                    <div className={styles.summaryBox}>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>Selected Focus</span>
                        <span className={styles.summaryVal}>
                          {form.services.length > 0 ? form.services.join(' · ') : 'Integrated Digital Marketing'}
                        </span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>Growth Budget</span>
                        <span className={styles.summaryVal}>{form.budget}</span>
                      </div>
                    </div>
                  )}

                  {/* Quick Action Buttons */}
                  <div className={styles.successActions}>
                    <a
                      href={`https://wa.me/918280788689?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappBtn}
                    >
                      <span>💬 Instant WhatsApp Fast-Track</span>
                      <span>→</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className={styles.resetBtn}
                    >
                      <span>↻ Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
