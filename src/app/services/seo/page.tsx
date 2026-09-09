import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'SEO & Organic Growth — Search Engine Optimization',
  description: 'Dominate search results and build authority that compounds. Technical SEO, local SEO, and content strategy in Bhubaneswar.',
};

export default function SEOPage() {
  return (
    <ServicePageTemplate
      eyebrow="SEO & Organic Growth"
      title="Get found.<br />Get trusted.<br /><span class='accent-gradient'>Get chosen.</span>"
      subtitle="Organic search dominance that compounds over time."
      description="We build search authority that works while you sleep. Technical excellence, content strategy, and link building that makes you the obvious choice in your market."
      emoji="🔍"
      color="#7C3AED"
      metrics={[
        { val: '+187%', label: 'Average Traffic Growth' },
        { val: '+94%', label: 'Qualified Leads' },
        { val: '#1', label: 'Google Ranking' },
      ]}
      services={[
        { title: 'Technical SEO', desc: 'Fix the foundation. Speed, crawlability, Core Web Vitals, structured data — everything search engines need to love your site.' },
        { title: 'Local SEO', desc: 'Own your city. Dominate Google Maps, local packs, and location-based searches that drive foot traffic and calls.' },
        { title: 'Content Strategy', desc: 'Content that ranks AND converts. Keyword research, topic clusters, and editorial planning built for authority.' },
        { title: 'Link Building', desc: 'Earn authority from the web\'s best sources. Ethical, sustainable link acquisition that moves rankings.' },
        { title: 'Keyword Intelligence', desc: 'Find the exact terms your customers use and build a strategy around capturing that intent.' },
        { title: 'Conversion Optimization', desc: 'Traffic without conversion is just vanity. We optimize the journey from click to customer.' },
      ]}
      process={[
        { step: '01', title: 'SEO Audit', desc: 'Full technical, on-page, and competitive analysis to find your biggest opportunities.' },
        { step: '02', title: 'Strategy Build', desc: 'Custom roadmap prioritized by impact, effort, and your business goals.' },
        { step: '03', title: 'Execute', desc: 'Technical fixes, content production, and link acquisition working in parallel.' },
        { step: '04', title: 'Track & Compound', desc: 'Monthly reporting, continuous refinement, and expanding to new opportunities.' },
      ]}
      platforms={['Google Search', 'Google Maps', 'Bing', 'Ahrefs', 'Semrush', 'Search Console', 'Google Analytics 4', 'Screaming Frog']}
    />
  );
}
