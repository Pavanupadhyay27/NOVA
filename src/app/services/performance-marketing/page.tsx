import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Performance Marketing — Google, Meta & YouTube Ads',
  description: 'Turn advertising into predictable, scalable growth. We build campaigns that generate measurable ROAS across Google, Meta, LinkedIn, and YouTube.',
};

export default function PerformanceMarketingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Performance Marketing"
      title="Don&apos;t buy clicks.<br /><span class='accent-gradient'>Buy growth.</span>"
      subtitle="Full-funnel performance campaigns that convert."
      description="We engineer paid campaigns that transform your ad budget into predictable revenue. Every rupee tracked, every conversion optimized, every channel mastered."
      emoji="📊"
      color="#00D4FF"
      metrics={[
        { val: '+142%', label: 'Average Revenue Growth' },
        { val: '4.8X', label: 'Average ROAS' },
        { val: '-32%', label: 'Cost Per Acquisition' },
      ]}
      services={[
        { title: 'Google Search Ads', desc: 'Capture demand with precision. Be there when your customers are searching — with campaigns that convert intent into revenue.' },
        { title: 'Meta Advertising', desc: 'Facebook and Instagram campaigns that stop the scroll and drive meaningful action at scale.' },
        { title: 'LinkedIn B2B Ads', desc: 'Reach decision-makers at exactly the right moment with targeted B2B campaigns that generate qualified leads.' },
        { title: 'YouTube & Video', desc: 'Video ads that tell your brand story, build trust, and drive action at every stage of the funnel.' },
        { title: 'Retargeting & Remarketing', desc: 'Win back lost opportunities with intelligent retargeting that keeps your brand top of mind.' },
        { title: 'Programmatic & Display', desc: 'Premium inventory across the web. Automated buying that finds your audience wherever they are.' },
      ]}
      process={[
        { step: '01', title: 'Audit & Research', desc: 'Deep analysis of your current performance, competitors, and market opportunity.' },
        { step: '02', title: 'Strategy & Structure', desc: 'Custom campaign architecture aligned to your specific growth goals.' },
        { step: '03', title: 'Launch & Monitor', desc: 'Precision launch with daily monitoring and real-time optimization.' },
        { step: '04', title: 'Scale & Compound', desc: 'Double down on what works. Build systems that scale efficiently.' },
      ]}
      platforms={['Google Ads', 'Meta Ads', 'LinkedIn', 'YouTube', 'Twitter/X', 'Programmatic DSP', 'Amazon Ads', 'Snapchat']}
    />
  );
}
