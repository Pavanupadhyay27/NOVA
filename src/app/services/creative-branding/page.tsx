import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Creative & Branding — Brand Identity, Campaigns & Design',
  description: 'Make your brand impossible to forget. Identity design, campaign creatives, motion graphics, and visual systems built to command attention.',
};

export default function CreativeBrandingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Creative & Branding"
      title="Your brand deserves<br />more than <span class='accent-gradient'>good design.</span>"
      subtitle="Creative that makes people feel something."
      description="We build visual identities and creative systems that command attention, build recognition, and make your brand the obvious choice in every market."
      emoji="🎨"
      color="#EC4899"
      metrics={[
        { val: '100+', label: 'Brands Built' },
        { val: '4.9★', label: 'Client Satisfaction' },
        { val: '2x', label: 'Brand Recall Lift' },
      ]}
      services={[
        { title: 'Brand Identity', desc: 'Logo, color system, typography, and the visual DNA that makes your brand unmistakable.' },
        { title: 'Campaign Creative', desc: 'Big ideas brought to life. Ad creatives, campaign visuals, and storytelling that converts.' },
        { title: 'Motion & Animation', desc: 'Animated logos, video ads, social content, and motion design that stops the scroll.' },
        { title: 'Social Creatives', desc: 'Templates and original designs for Instagram, LinkedIn, and every platform — premium and consistent.' },
        { title: 'Packaging & Print', desc: 'Physical brand experiences. Packaging, brochures, and print that feel as good as they look.' },
        { title: 'Brand Guidelines', desc: 'A comprehensive system your whole team can use to maintain brand consistency at scale.' },
      ]}
      process={[
        { step: '01', title: 'Discovery', desc: 'Brand workshops to uncover your positioning, audience, and visual direction.' },
        { step: '02', title: 'Concepts', desc: 'Multiple creative directions presented with strategic rationale.' },
        { step: '03', title: 'Refinement', desc: 'Collaborative iteration until the creative is exactly right.' },
        { step: '04', title: 'Delivery', desc: 'Final files, brand guide, and ongoing creative support.' },
      ]}
      platforms={['Adobe Illustrator', 'Figma', 'After Effects', 'Photoshop', 'Canva Pro', 'Premiere Pro', 'Midjourney', 'InDesign']}
    />
  );
}
