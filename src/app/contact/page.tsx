'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '₹1.5L – ₹5L/mo', services: [] as string[], message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = ['Performance Marketing', 'SEO & Organic', 'Social Media & Content', 'Creative & Branding', 'Web Development', 'AI & Automation'];

  const toggleService = (s: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      router.push('/thank-you');
    }, 400);
  };

  return (
    <div className={styles.page}>
      <div className={styles.heroBg} />
      <div className="container">
        <div className={styles.grid}>
          {/* Left info column */}
          <div className={styles.left}>
            <ScrollReveal>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Start a Project
              </div>
              <h1 className={`display-xl ${styles.title}`}>
                Let&apos;s build<br />
                <span className="accent-gradient">something great.</span>
              </h1>
              <p className={`body-lg ${styles.sub}`}>
                Tell us about your brand, commercial targets, and timeline. Our partners will engineer a bespoke preliminary roadmap within 24 hours.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Direct Email</span>
                  <a href="mailto:connect@novasparkdigitalmarketingagency.com" className={styles.detailVal}>
                    connect@novasparkdigitalmarketingagency.com
                  </a>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Growth Lab Location</span>
                  <span className={styles.detailVal}>Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar — 751001</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Direct Contact</span>
                  <a href="tel:+918280788689" className={styles.detailVal}>+91 82807 88689</a>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Response SLA</span>
                  <span className={styles.detailVal}>Within 24 business hours</span>
                </div>
              </div>

              <div className={styles.socials}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.social}>LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social}>Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.social}>YouTube</a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right form */}
          <div className={styles.right}>
            <ScrollReveal delay={150}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Work Email *</label>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="e.g. rahul@brand.com"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
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
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Monthly Growth Budget</label>
                    <select
                      className={styles.input}
                      value={form.budget}
                      onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                    >
                      <option value="₹50K – ₹1.5L/mo">₹50K – ₹1.5L / month</option>
                      <option value="₹1.5L – ₹5L/mo">₹1.5L – ₹5L / month</option>
                      <option value="₹5L – ₹15L/mo">₹5L – ₹15L / month</option>
                      <option value="₹15L+/mo">₹15L+ / month</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>What services do you need?</label>
                  <div className={styles.serviceGrid}>
                    {services.map(s => (
                      <button
                        key={s}
                        type="button"
                        className={`${styles.serviceBtn} ${form.services.includes(s) ? styles.serviceBtnActive : ''}`}
                        onClick={() => toggleService(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Tell us about your project & goals</label>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Share your target revenue, current bottlenecks, ad channels, or key timelines..."
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Start the Conversation →'}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
