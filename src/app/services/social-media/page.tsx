import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Media Marketing in Bhubaneswar — Instagram, Facebook & YouTube | Marketing Copilot',
  description: 'Build an unforgettable social media brand in Bhubaneswar with Marketing Copilot. High-engagement Reels, local influencer partnerships, and viral content strategies.',
};

export default function SocialMediaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Social Media Marketing — Bhubaneswar"
      title={`Build a brand<br />Bhubaneswar<br /><span class='accent-gradient'>cannot ignore.</span>`}
      subtitle="Viral social media strategy, Reels production & community growth for Bhubaneswar brands."
      description="We craft social media channels for Bhubaneswar businesses that people actually follow, share, and talk about. From high-retention video Reels to local influencer activations across Odisha and direct message lead funnels — we turn social engagement into measurable revenue."
      emoji="📱"
      color="#F59E0B"
      heroImage="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '+450%', label: 'Organic Reel Reach' },
        { val: '200K+', label: 'Local Followers Built' },
        { val: '3.8X', label: 'Inbound DM Inquiries' },
      ]}
      localAdvantages={[
        {
          badge: 'Odisha Creators',
          title: 'Verified Local Influencer Network',
          desc: 'Partner directly with authentic Bhubaneswar and Cuttack food, lifestyle, tech, and fitness creators who have genuine local audience trust.',
        },
        {
          badge: 'High-Retention Reels',
          title: 'Viral Short-Form Video Production',
          desc: 'End-to-end scripting, shooting direction, and dynamic motion editing tailored for Instagram Reels and YouTube Shorts algorithms.',
        },
        {
          badge: 'Turn DM to Cash',
          title: 'Direct Message Lead Generation',
          desc: 'We don’t just accumulate passive likes. We build automated DM workflows that send pricing guides, booking links, and phone consultations.',
        },
      ]}
      services={[
        {
          title: 'Instagram Reels & Short-Form Video',
          desc: 'High-energy, value-packed vertical videos designed for the modern attention span with custom typography, sound design, and viral hooks.',
          deliverables: ['Weekly Video Scripts', 'Bhubaneswar Studio Filming Support', 'Sound & Motion Graphics', 'Trending Audio Curation'],
        },
        {
          title: 'Local Influencer & Creator Collaborations',
          desc: 'Source, vet, and execute collaborative brand partnerships with trusted Odisha content creators that deliver genuine word-of-mouth authority.',
          deliverables: ['Creator Vetting & Contracts', 'Campaign Briefs', 'Deliverables Quality Control', 'Attribution Tracking'],
        },
        {
          title: 'Brand Aesthetic & Visual Design',
          desc: 'Elevate your feed with bespoke grid design, carousel slide-decks, storytelling infographics, and tactile skeuomorphic digital flyers.',
          deliverables: ['Grid Layout Architecture', 'Carousel Slide Decks', 'Custom Highlight Icons', 'Brand Typography Kit'],
        },
        {
          title: 'Bhubaneswar Event & Festival Activations',
          desc: 'Capitalize on Odisha cultural calendar highlights — Raja, Durga Puja, Ratha Yatra, Dot Fest — with timely viral campaigns and interactive polls.',
          deliverables: ['Festival Campaign Calendars', 'Contests & Giveaways', 'Local Geotagged Stories', 'User-Generated Content Prompts'],
        },
        {
          title: 'Daily Community & DM Management',
          desc: 'Turn casual commenters into paying clients with prompt, professional comment replies, FAQ answers, and direct message lead qualification.',
          deliverables: ['Under 15-Min Response SLA', 'Automated DM Funnels', 'Spam/Troll Filtering', 'Customer Inquiry Escalation'],
        },
        {
          title: 'LinkedIn Thought Leadership for Executives',
          desc: 'Position founders and directors in Bhubaneswar as respected industry authorities with ghostwritten thought-leadership posts and case studies.',
          deliverables: ['Founder Profile Optimization', 'Weekly Strategic Articles', 'B2B Network Outreach', 'Engagement Pod Architecture'],
        },
      ]}
      caseHighlight={{
        client: 'Noir Fine Dining & Restobar',
        location: 'Infocity Road, Patia, Bhubaneswar',
        metric: '+400% Footfall',
        metricLabel: 'Generated Over 2.4 Million Organic Reel Impressions',
        summary: 'Marketing Copilot produced cinematic food preparation Reels and orchestrated an exclusive weekend creator tasting drop. Resulted in 100% weekend table reservations booked 3 weeks in advance.',
      }}
      process={[
        { step: '01', title: 'Brand Voice & Social Audit', desc: 'Analyzing your current social footprint, target customer age brackets, and local competitor weaknesses.' },
        { step: '02', title: 'Content Pillar Blueprint', desc: 'Defining 4 core content buckets (Education, Entertainment, Social Proof, Direct Offers) for high consistency.' },
        { step: '03', title: 'Scripting & Creative Production', desc: 'Producing monthly content in efficient batch shoots with high-definition cinematography and crisp audio.' },
        { step: '04', title: 'Publishing & Engagement Amplification', desc: 'Scheduling at peak Bhubaneswar browsing hours and actively engaging followers to trigger algorithm boosts.' },
      ]}
      platforms={['Instagram', 'YouTube Shorts', 'Facebook', 'LinkedIn', 'WhatsApp Business', 'Canva Pro', 'CapCut Pro', 'Meta Business Suite']}
      faqs={[
        {
          q: 'Do you come to our Bhubaneswar location to shoot videos?',
          a: 'Yes, our production team coordinates on-location shooting sprints at your clinic, restaurant, showroom, or office in Bhubaneswar to capture authentic, high-definition content.',
        },
        {
          q: 'How many posts and Reels do you publish each month?',
          a: 'Depending on your package, we typically produce and publish 12 to 20 high-quality assets per month (including 8–12 cinematic vertical Reels, educational carousels, and daily interactive Stories).',
        },
        {
          q: 'Can social media marketing actually generate sales, or is it just brand awareness?',
          a: 'When done correctly, social media is a direct sales channel. We include direct calls-to-action, automated DM funnels, and click-to-WhatsApp links that regularly convert viewers into booked appointments and orders.',
        },
        {
          q: 'How do you pick which Odisha influencers to collaborate with?',
          a: 'We strictly audit creator metrics to identify fake followers and engagement pods. We only partner with authentic creators whose followers match your target Bhubaneswar buyer demographic.',
        },
      ]}
    />
  );
}
