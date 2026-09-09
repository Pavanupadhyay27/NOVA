import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Media & Content Marketing — Instagram, LinkedIn, YouTube',
  description: 'Build an audience that chooses you. Social media strategy, content creation, and influencer marketing across all platforms.',
};

export default function SocialMediaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Social Media & Content"
      title="Make people<br />stop <span class='accent-gradient'>scrolling.</span>"
      subtitle="Content that captures and communities that convert."
      description="We build social media presences that people actually want to follow. From strategy to production to community — every post earns attention."
      emoji="📱"
      color="#F59E0B"
      metrics={[
        { val: '+320%', label: 'Average Reach Growth' },
        { val: '200K+', label: 'Followers Built' },
        { val: '3.2X', label: 'Sales Lift from Social' },
      ]}
      services={[
        { title: 'Social Media Strategy', desc: 'Platform-specific strategies built around your audience, competitors, and content pillars that actually work.' },
        { title: 'Content Production', desc: 'Photo, video, Reels, and graphics — professional production that looks premium without the agency price tag.' },
        { title: 'Community Management', desc: 'Daily engagement, DM handling, and community building that turns followers into loyal advocates.' },
        { title: 'Influencer Marketing', desc: 'Creator partnerships that align with your brand values and reach your target audience authentically.' },
        { title: 'Paid Social', desc: 'Amplify your best content with targeted paid promotion that expands reach and drives action.' },
        { title: 'Analytics & Optimization', desc: 'Weekly reporting on what\'s working, why, and what to do more of. Data-driven creative decisions.' },
      ]}
      process={[
        { step: '01', title: 'Audit & Strategy', desc: 'Analyze your presence, competitors, and audience to build a platform-specific growth plan.' },
        { step: '02', title: 'Content System', desc: 'Build a content calendar, brand voice guide, and production workflow.' },
        { step: '03', title: 'Create & Publish', desc: 'Consistent, high-quality content production and strategic posting.' },
        { step: '04', title: 'Grow & Optimize', desc: 'Analyze performance, engage community, and optimize the strategy monthly.' },
      ]}
      platforms={['Instagram', 'LinkedIn', 'YouTube', 'Facebook', 'Twitter/X', 'Pinterest', 'TikTok', 'WhatsApp Business']}
    />
  );
}
