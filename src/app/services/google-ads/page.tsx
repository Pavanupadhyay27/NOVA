import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Google Ads & PPC Services in Bhubaneswar — Marketing Copilot',
  description: 'Dominate Google Search in Bhubaneswar with high-ROI PPC campaigns by Marketing Copilot. Exact geo-targeting, low Cost-Per-Lead, and verified phone calls.',
};

export default function GoogleAdsPage() {
  return (
    <ServicePageTemplate
      eyebrow="Google Ads / PPC — Bhubaneswar"
      title={`Show up first<br />when Bhubaneswar<br /><span class='accent-gradient'>searches for you.</span>`}
      subtitle="High-converting Google Ads campaigns built specifically for Bhubaneswar businesses."
      description="We build precision-targeted Google Ads campaigns that place your brand in front of Bhubaneswar customers at the exact second they are ready to purchase. Every click audited, negative keywords tuned, and every rupee accounted for with transparent ROAS."
      emoji="🎯"
      color="#0B2093"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '6.4X', label: 'Average ROAS' },
        { val: '-42%', label: 'Cost Per Lead' },
        { val: '<48 hrs', label: 'Launch to First Leads' },
      ]}
      localAdvantages={[
        {
          badge: 'Pin-Code Precision',
          title: 'Hyperlocal Geo-Fencing',
          desc: 'Target audiences located strictly within 5–15 km of your Bhubaneswar showroom, clinic, or office (Patia, Saheed Nagar, Nayapalli, Khandagiri).',
        },
        {
          badge: 'Zero Budget Leakage',
          title: 'Negative Keyword Filtering',
          desc: 'We aggressively eliminate irrelevant clicks and accidental student queries to ensure 100% of your ad spend targets genuine paying buyers.',
        },
        {
          badge: 'High Quality Scores',
          title: 'Landing Pages that Convert',
          desc: 'Pairing tailored ads with custom Next.js landing pages ensures 9/10 Quality Scores, meaning lower CPCs than your local competitors.',
        },
      ]}
      services={[
        {
          title: 'Google Search PPC Campaigns',
          desc: 'Capture active buyers searching for your exact services in Bhubaneswar with high-converting responsive search ads.',
          deliverables: ['Exact Match Keywords', 'Negative Keyword Lists', 'Ad Copy A/B Testing', 'Call Extensions & Assets'],
        },
        {
          title: 'Google Shopping & Performance Max',
          desc: 'Showcase product inventory with live pricing directly in search results to drive high-margin online sales across Odisha.',
          deliverables: ['Google Merchant Center Feed', 'PMax Asset Groups', 'ROAS Bidding Strategy', 'Dynamic Remarketing'],
        },
        {
          title: 'Local Service Ads (Google Guaranteed)',
          desc: 'Appear right at the top of Google mobile search with verified badges that trigger immediate phone calls from local customers.',
          deliverables: ['Direct Call Ads', 'Location Extension Sync', 'Schedule-based Bidding', 'Verified Lead Recording'],
        },
        {
          title: 'YouTube Video Ad Campaigns',
          desc: 'Build massive brand recognition and trust across Bhubaneswar with non-skippable bumpers and high-impact in-feed video ads.',
          deliverables: ['Hyperlocal Audience Layering', 'Custom Video Hooks', 'Retargeting Pools', 'View-Through Attribution'],
        },
        {
          title: 'Display & Remarketing Networks',
          desc: 'Keep your brand top-of-mind by showing relevant visual ads to previous website visitors as they browse local news and portals.',
          deliverables: ['Dynamic Retargeting Pixels', 'Custom Display Banners', 'Frequency Capping', 'Exclusion Placements'],
        },
        {
          title: 'Conversion Tracking & GA4 Auditing',
          desc: 'Server-side conversion tracking ensures zero data loss from iOS updates, tracking phone calls, form fills, and WhatsApp chats.',
          deliverables: ['GA4 Event Configuration', 'Google Tag Manager Server Container', 'CallRail Integration', 'Live Looker Dashboard'],
        },
      ]}
      caseHighlight={{
        client: 'Elite Dental & Maxillofacial Super-Speciality Clinic',
        location: 'Saheed Nagar, Bhubaneswar',
        metric: '-48% CPL',
        metricLabel: 'Cost Per Inbound Patient Lead Reduced From ₹680 to ₹353',
        summary: 'Marketing Copilot restructured the search account, added 400+ negative keywords, and deployed high-converting mobile click-to-call landing pages. Resulted in 130+ confirmed monthly consultations.',
      }}
      process={[
        { step: '01', title: 'Competitor & Keyword Recon', desc: 'Analyzing existing Bhubaneswar Google Ads auction insights, CPC rates, and competitor ad copy.' },
        { step: '02', title: 'High-Converting Landing Pages', desc: 'Crafting dedicated fast-loading landing pages tailored for mobile visitors in Odisha.' },
        { step: '03', title: 'Precision Launch & Tracking', desc: 'Configuring conversion pixels, setting manual/smart bidding thresholds, and launching verified campaigns.' },
        { step: '04', title: 'Daily Bid Tuning & Scaling', desc: 'Trimming non-converting search terms, adjusting dayparting for Bhubaneswar business hours, and scaling ROI.' },
      ]}
      platforms={['Google Search Ads', 'Google Performance Max', 'Google Merchant Center', 'YouTube Ads', 'Google Tag Manager', 'Google Analytics 4', 'Looker Studio']}
      faqs={[
        {
          q: 'What monthly Google Ads budget is recommended for Bhubaneswar businesses?',
          a: 'We typically recommend starting with a minimum monthly ad spend of ₹25,000 to ₹60,000 depending on your industry competition. This allows enough daily click volume to test keywords, capture ready buyers, and optimize bidding algorithms effectively.',
        },
        {
          q: 'How fast do Google Ads start generating leads in Bhubaneswar?',
          a: 'Because Google Ads targets active search intent, campaigns usually start driving qualified phone calls and form submissions within 24 to 48 hours of campaign activation.',
        },
        {
          q: 'How do you prevent money being wasted on accidental clicks?',
          a: 'We implement strict negative keyword lists, disable broad match runaway spend, exclude international/out-of-state IP traffic, and set exact geo-target boundaries strictly around Bhubaneswar and surrounding target locations.',
        },
        {
          q: 'Do I get ownership of the Google Ads account?',
          a: '100% yes. You always retain complete administrative ownership of your Google Ads account, billing, and pixel data. Marketing Copilot operates transparently as your authorized manager.',
        },
      ]}
    />
  );
}
