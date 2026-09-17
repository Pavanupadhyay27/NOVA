import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'SEO Services in Bhubaneswar — Rank #1 on Google | Marketing Copilot',
  description: 'Dominate Google search in Bhubaneswar with expert SEO services from Marketing Copilot. Technical SEO, local 3-pack rankings & high-converting content across Odisha.',
};

export default function SEOPage() {
  return (
    <ServicePageTemplate
      eyebrow="SEO Services — Bhubaneswar"
      title={`Rank #1 on Google<br />in Bhubaneswar.<br /><span class='accent-gradient'>Get Chosen.</span>`}
      subtitle="SEO that builds compounding organic customer acquisition for Bhubaneswar businesses."
      description="We make Bhubaneswar businesses impossible to ignore on Google. Technical SEO, Google Maps 3-pack dominance, and hyperlocal search strategies across Patia, Saheed Nagar, Infocity, and Cuttack that drive qualified phone calls, visits, and sales."
      emoji="🔍"
      color="#7C3AED"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '+240%', label: 'Organic Inquiries' },
        { val: 'Top 3', label: 'Google 3-Pack Rank' },
        { val: '90 Days', label: 'Average Traction' },
      ]}
      localAdvantages={[
        {
          badge: 'Hyperlocal Map Pack',
          title: 'Google 3-Pack & Map Dominance',
          desc: 'Rank in top 3 results when customers in Patia, Jaydev Vihar, Saheed Nagar, and Nayapalli search for your services near them.',
        },
        {
          badge: 'High-Intent Keywords',
          title: 'Bhubaneswar Commercial Keywords',
          desc: 'Target buyers actively searching "best clinic in Bhubaneswar", "interior designer in Patia", "flats near Infocity", and local enterprise queries.',
        },
        {
          badge: 'White-Hat Compounding',
          title: 'Durable Search Authority',
          desc: 'Zero risky shortcuts or spam links. Ethical, authoritative link building and fast Next.js Core Web Vitals that Google rewards permanently.',
        },
      ]}
      services={[
        {
          title: 'Hyperlocal & Google Maps SEO',
          desc: 'Complete Google Business Profile optimization, review architecture, local citations, and geo-tagged signals for total city dominance.',
          deliverables: ['Google Business Profile Setup', 'Local Citation Building', 'Geo-tagged Content', 'Local Map Pack Monitoring'],
        },
        {
          title: 'Technical Core Web Vitals SEO',
          desc: 'Eliminate crawl errors, optimize page load speed under 1.2s, structure schema JSON-LD, and ensure seamless mobile indexing.',
          deliverables: ['PageSpeed Insights 95+', 'Mobile First Audit', 'Schema & Rich Snippets', 'Crawl Error Elimination'],
        },
        {
          title: 'High-Intent Content Strategy',
          desc: 'Target high-converting commercial intent keywords with topic clusters and authoritative landing pages that convert browsers into inquiries.',
          deliverables: ['Commercial Keyword Map', 'Topic Clusters', 'Conversion-First Copy', 'Meta Tag Optimization'],
        },
        {
          title: 'Authoritative Regional Link Building',
          desc: 'Earn trusted backlinks from reputable Odisha news portals, business directories, and regional industry blogs to boost domain rating.',
          deliverables: ['Regional PR Placements', 'Contextual Backlinks', 'Competitor Gap Analysis', 'Zero Spam Assurance'],
        },
        {
          title: 'E-Commerce & Category SEO',
          desc: 'Structure online store taxonomy, optimize product schema, and drive organic buyers to high-margin collection pages.',
          deliverables: ['Product Schema Markup', 'Category Hierarchy Fixes', 'Faceted Navigation SEO', 'Internal Linking Mesh'],
        },
        {
          title: 'Conversion Rate Optimization (CRO)',
          desc: 'Organic search traffic without phone calls is a wasted investment. We optimize forms, CTAs, and user flow on every ranked page.',
          deliverables: ['Click-to-Call CTAs', 'Sticky WhatsApp Anchors', 'Heatmap Behavioral Tracking', 'Form Abandonment Fixes'],
        },
      ]}
      caseHighlight={{
        client: 'Utkal Royal Residences & Commercials',
        location: 'Patia & Chandrasekharpur, Bhubaneswar',
        metric: '#1 on Google',
        metricLabel: 'Dominated 18 High-Value Property Keywords in 90 Days',
        summary: 'Marketing Copilot implemented technical fixes, local schema markup, and geo-targeted neighborhood guides. Generated 90+ verified high-net-worth investor inquiries every single month.',
      }}
      process={[
        { step: '01', title: 'Bhubaneswar Market Audit', desc: 'In-depth review of your current Google visibility, competitor rankings in Odisha, and technical site health.' },
        { step: '02', title: 'Roadmap & Keyword Strategy', desc: 'Prioritized 90-day action plan targeting high-intent commercial keywords in Bhubaneswar and Cuttack.' },
        { step: '03', title: 'On-Page, Map & Technical Execution', desc: 'Speed fixes, metadata optimization, content cluster publishing, and local Google Business Profile acceleration.' },
        { step: '04', title: 'Weekly Tracking & Revenue Scale', desc: 'Transparent reporting dashboards tracking actual phone inquiries, form leads, and top-3 keyword positions.' },
      ]}
      platforms={['Google Search Console', 'Google Business Profile', 'Google Analytics 4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Looker Studio']}
      faqs={[
        {
          q: 'How long does it take to rank on Google in Bhubaneswar?',
          a: 'For local map packs and location-specific long-tail keywords in Bhubaneswar (e.g. in Patia or Saheed Nagar), our clients typically see top 3 rankings within 45 to 75 days. Highly competitive broad terms generally compound over 3 to 6 months of disciplined execution.',
        },
        {
          q: 'What is the difference between Local SEO and General SEO?',
          a: 'General SEO focuses on website rankings nationwide. Local SEO specifically targets the Google Maps 3-Pack and proximity-based searches made by people physically located in Bhubaneswar or searching for services in Bhubaneswar, resulting in immediate phone calls and foot traffic.',
        },
        {
          q: 'Do you guarantee #1 rankings on Google?',
          a: 'Google’s guidelines explicitly prohibit guaranteeing the #1 spot because search algorithms change constantly. However, Marketing Copilot guarantees strict white-hat methodologies, measurable keyword velocity, transparent weekly reporting, and a proven track record of securing top-3 rankings for dozens of local brands.',
        },
        {
          q: 'Will you provide monthly reports on keyword rankings and leads?',
          a: 'Yes, every client receives a dedicated live Looker Studio dashboard showing keyword positions, organic impressions, click-through rates, and verified lead form submissions and phone call events.',
        },
      ]}
    />
  );
}
