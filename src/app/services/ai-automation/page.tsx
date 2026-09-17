import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Content Marketing Services in Bhubaneswar — SEO Content & Digital Strategy | Marketing Copilot',
  description: 'Authority-building content marketing services in Bhubaneswar by Marketing Copilot. Hyperlocal SEO articles, video scripts, and high-converting storytelling.',
};

export default function ContentMarketingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Content Marketing — Bhubaneswar"
      title={`Content that ranks.<br />Content that converts.<br /><span class='accent-gradient'>In Bhubaneswar.</span>`}
      subtitle="Strategic SEO editorial, founder storytelling & high-converting content for Bhubaneswar brands."
      description="We create and distribute strategic content that establishes your Bhubaneswar business as the undisputed leader in your industry. From technical SEO topic clusters to video scripts and founder thought leadership — content that attracts high-intent readers and converts them into customers."
      emoji="✍️"
      color="#3B82F6"
      heroImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '+310%', label: 'Organic Inbound Readers' },
        { val: 'Top 3', label: 'Commercial Snippets' },
        { val: '4.2X', label: 'Lead Velocity Lift' },
      ]}
      localAdvantages={[
        {
          badge: 'Odisha Audience Nuance',
          title: 'Bilingual Copy & Regional Tone',
          desc: 'We write in authentic, culturally resonant language (English and Odia) that matches how real people in Bhubaneswar, Cuttack, and Odisha think and buy.',
        },
        {
          badge: 'High-Intent Topic Clusters',
          title: 'Hyperlocal Informational Clusters',
          desc: 'Answering specific search queries like "cost of living in Patia", "best CBSE schools in Bhubaneswar", and "real estate property trends in Odisha".',
        },
        {
          badge: 'Generative Search Ready',
          title: 'Google AI Overviews & SGE Proof',
          desc: 'Authoritative data, expert quotes, and structured markup engineered to appear directly inside Google’s AI Overviews and ChatGPT citations.',
        },
      ]}
      services={[
        {
          title: 'SEO Long-Form Articles & Topic Clusters',
          desc: 'Comprehensive 1,500+ word authority guides that answer customer questions thoroughly and rank across dozens of long-tail search terms.',
          deliverables: ['Editorial Keyword Research', 'Topic Clustering Architecture', 'Custom Infographics', 'On-Page SEO Optimization'],
        },
        {
          title: 'Founder Thought Leadership & Ghostwriting',
          desc: 'Position your managing director or CEO as a prominent industry voice with ghostwritten LinkedIn articles and regional press commentary.',
          deliverables: ['Weekly LinkedIn Thought Posts', 'Op-Ed Media Submissions', 'Executive Voice Guidelines', 'B2B Authority Building'],
        },
        {
          title: 'Video & Podcast Scriptwriting',
          desc: 'Compelling scripts for YouTube explainers, corporate brand films, customer video case studies, and short-form social Reels.',
          deliverables: ['Video Hooks & Structures', 'B-Roll Visual Directives', 'Teleprompter Formatting', 'Call-to-Action Endscreens'],
        },
        {
          title: 'Case Study & Whitepaper Production',
          desc: 'Turn client success stories into persuasive sales collateral with audited metrics, customer quotes, and sleek downloadable PDF formats.',
          deliverables: ['Client Interview Transcripts', 'Proof Point Architecture', 'Designed PDF Lead Magnets', 'Gated Landing Page Copy'],
        },
        {
          title: 'High-Converting Email Newsletters',
          desc: 'Weekly value-driven email newsletters and automated drip sequences that nurture cold prospects into warm consultation bookings.',
          deliverables: ['Welcome Drip Sequences', 'Segmented Email Campaigns', 'Click-Through Rate Optimization', 'Spam Compliance Audits'],
        },
        {
          title: 'Website Copywriting & Value Propositions',
          desc: 'Transform confusing technical jargon into punchy, persuasive copy that communicates your unique value proposition clearly in seconds.',
          deliverables: ['Hero Headline Formulas', 'Feature-Benefit Matrix', 'Objection-Handling Copy', 'Micro-Copy & Button Text'],
        },
      ]}
      caseHighlight={{
        client: 'TechEduca Institute of Data & Cloud Technologies',
        location: 'Infocity Road, Patia, Bhubaneswar',
        metric: '85,000+ Readers',
        metricLabel: 'Monthly Inbound Organic Search Traffic Across Odisha',
        summary: 'Marketing Copilot published 24 comprehensive career guide clusters and tech syllabus roadmaps. Generated over 650 verified student counseling inquiries per quarter without running a single paid advertisement.',
      }}
      process={[
        { step: '01', title: 'Content Gap Analysis', desc: 'Auditing what questions your Bhubaneswar prospects search that competitors have left unanswered.' },
        { step: '02', title: 'Editorial Architecture', desc: 'Structuring 90-day content calendar organized around high-converting pillar topics.' },
        { step: '03', title: 'Drafting & Editorial Polish', desc: 'Writing insightful, expert-level articles incorporating proprietary data and regional nuances.' },
        { step: '04', title: 'Distribution & Conversion', desc: 'Amplifying content across search, social channels, and email to trigger inbound leads.' },
      ]}
      platforms={['Google Search', 'Semrush', 'Grammarly Business', 'WordPress CMS', 'Substack / Mailchimp', 'Canva Pro', 'SurferSEO']}
      faqs={[
        {
          q: 'Why is content marketing important for businesses in Bhubaneswar?',
          a: 'Bhubaneswar consumers research extensively online before making decisions — whether choosing a school, buying an apartment, or picking a doctor. Providing helpful, authoritative answers builds trust and makes your brand the obvious first choice.',
        },
        {
          q: 'Do you use AI tools like ChatGPT to write our content?',
          a: 'We use AI strictly for deep research, competitor outline analysis, and idea generation. Every single article, script, and copy asset is written and polished by human marketing strategists to ensure factual accuracy, personality, and local Odisha relevance.',
        },
        {
          q: 'How do you measure the ROI of content marketing?',
          a: 'We track organic search impressions, average reading time, newsletter signups, and most importantly — conversion events like form fills and WhatsApp inquiries originating from content pages.',
        },
        {
          q: 'Can you help us publish articles in Odia as well as English?',
          a: 'Yes. Our team includes native Odia copywriters who can craft culturally nuanced content, social scripts, and festival campaigns tailored for regional audiences across Odisha.',
        },
      ]}
    />
  );
}
