import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Meta Ads Services in Bhubaneswar — Facebook & Instagram Ads | Marketing Copilot',
  description: 'Scale your Bhubaneswar brand with high-converting Facebook, Instagram, and WhatsApp ad campaigns by Marketing Copilot. High ROAS, scroll-stopping creative.',
};

export default function MetaAdsPage() {
  return (
    <ServicePageTemplate
      eyebrow="Meta Ads — Bhubaneswar"
      title={`Stop the scroll.<br />Start the sale.<br /><span class='accent-gradient'>In Bhubaneswar.</span>`}
      subtitle="Facebook, Instagram & WhatsApp ad campaigns that convert attention into customers."
      description="We engineer high-converting Meta ad campaigns tailored for Bhubaneswar audiences. From Reels hooks that stop the scroll to WhatsApp click-to-chat funnels and Server-side Conversions API integration, we turn social feeds into predictable revenue engines."
      emoji="📱"
      color="#EC4899"
      heroImage="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '4.8X', label: 'Average ROAS' },
        { val: '+340%', label: 'Qualified Inquiries' },
        { val: '₹14', label: 'Lowest Cost per Lead' },
      ]}
      localAdvantages={[
        {
          badge: 'WhatsApp Funnels',
          title: 'Click-to-WhatsApp Direct Chat Ads',
          desc: 'Odisha consumers love messaging before buying. We route Instagram and Facebook ads directly into WhatsApp Business with automated greeting flows.',
        },
        {
          badge: 'Regional Creative Hooks',
          title: 'Bilingual Reels & Visual Copy',
          desc: 'High-performing video reels, native voiceovers, and Odia/English cultural hooks that generate organic shares and high engagement.',
        },
        {
          badge: 'iOS 18 Proof',
          title: 'Meta Conversions API (CAPI)',
          desc: 'Server-to-server event tracking that circumvents ad-blockers and privacy restrictions, ensuring accurate attribution on every conversion.',
        },
      ]}
      services={[
        {
          title: 'High-Converting Instagram Reels Ads',
          desc: 'Full-screen 9:16 vertical video creatives with thumb-stopping 3-second hooks designed for Bhubaneswar’s dynamic youth and millennial demographics.',
          deliverables: ['Reels Creative Direction', 'Fast-Paced Video Editing', 'Voiceover Synchronization', 'Soundtrack Licensing'],
        },
        {
          title: 'Click-to-WhatsApp Conversion Campaigns',
          desc: 'Cut out slow form fills. Direct targeted Bhubaneswar buyers straight into WhatsApp for instant customer interaction and high closing rates.',
          deliverables: ['WhatsApp API Connection', 'Quick Reply Prompts', 'Lead Routing Rules', 'CRM Contact Sync'],
        },
        {
          title: 'Hyperlocal Facebook Lead Generation',
          desc: 'Seamless in-app instant forms pre-populated with user data to collect high-intent leads for real estate, education, and healthcare in Bhubaneswar.',
          deliverables: ['Native Instant Forms', 'Conditional Lead Logic', 'Instant SMS/Email Alerts', 'Lead Quality Qualification'],
        },
        {
          title: 'Dynamic Catalog & D2C Carousel Ads',
          desc: 'Automatically show relevant product carousels to shoppers who viewed specific collections on your website, driving repeat orders.',
          deliverables: ['Commerce Manager Sync', 'Product Feed Optimization', 'Abandoned Cart Retargeting', 'Volume Discount Promotions'],
        },
        {
          title: 'Lookalike & Customer Match Audiences',
          desc: 'Upload your highest-spending Bhubaneswar customers to train Meta’s AI algorithms to find identical high-net-worth buyers in Odisha.',
          deliverables: ['VIP Customer List Matching', 'Top 1% Value Lookalikes', 'Engagement Retargeting Pools', 'Frequency Capping'],
        },
        {
          title: 'Weekly Creative Fatigue Refresh',
          desc: 'Ad performance decays when audiences see the same image repeatedly. We rotate 4–6 new creative angles every single week to sustain low CPA.',
          deliverables: ['Weekly Creative Sprints', 'Angle Diversification', 'Statics & Carousels', 'Copy Variation Testing'],
        },
      ]}
      caseHighlight={{
        client: 'Velour Handcrafted D2C Fashion',
        location: 'Chandrasekharpur, Bhubaneswar & Odisha Dispatch',
        metric: '4.8X ROAS',
        metricLabel: 'Generated ₹42 Lakhs in Revenue with Meta Ads',
        summary: 'Marketing Copilot implemented high-velocity Reels ads and WhatsApp direct-checkout flows. Resulted in entire seasonal collections selling out in 72 hours with sub-₹250 customer acquisition costs.',
      }}
      process={[
        { step: '01', title: 'Target Audience Modeling', desc: 'Isolating Bhubaneswar interest nodes, behavioral cohorts, and high-disposable-income neighborhoods.' },
        { step: '02', title: 'Creative Production Sprint', desc: 'Producing 8–12 static and vertical video variations with distinct visual hooks and clear calls-to-action.' },
        { step: '03', title: 'CAPI & Pixel Setup', desc: 'Configuring Meta Conversions API for full-funnel attribution and verified conversion tracking.' },
        { step: '04', title: 'Algorithmic Scaling', desc: 'Scaling budget on winning ad sets, eliminating ad fatigue, and expanding into lookalike audiences.' },
      ]}
      platforms={['Instagram Ads', 'Facebook Ads', 'WhatsApp Business API', 'Meta Business Suite', 'Conversions API (CAPI)', 'Meta Pixel', 'Looker Studio']}
      faqs={[
        {
          q: 'Should my Bhubaneswar business run Google Ads or Meta Ads?',
          a: 'Both serve complementary functions. Google Ads captures active demand (people searching right now for what you offer). Meta Ads creates new demand and builds massive local brand awareness through visual storytelling on Instagram and Facebook.',
        },
        {
          q: 'Why are Click-to-WhatsApp ads so effective in Bhubaneswar?',
          a: 'In Odisha, customers prefer instant, human interactions rather than waiting hours for an email response. Click-to-WhatsApp ads eliminate friction and allow your sales team to answer questions and close orders immediately.',
        },
        {
          q: 'How do you handle ad creatives and video editing?',
          a: 'Marketing Copilot handles the entire creative pipeline. We script high-converting hooks, design graphics, edit vertical video reels, write persuasive copy, and test multiple variations weekly.',
        },
        {
          q: 'What is Meta Conversions API (CAPI) and why is it essential?',
          a: 'Browser-based pixels lose up to 30% of conversion data due to Safari and iOS privacy updates. Meta Conversions API sends purchase and lead events directly from our server to Meta, restoring 100% data tracking and lowering ad costs.',
        },
      ]}
    />
  );
}
