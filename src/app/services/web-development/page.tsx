import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Web Development & Design — Websites Built to Convert',
  description: 'Digital experiences engineered to convert. Web design, development, e-commerce, and CRO for ambitious brands.',
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      eyebrow="Web & Technology"
      title="Websites that look good.<br /><span class='accent-gradient'>And make money.</span>"
      subtitle="Digital experiences built to convert and compound."
      description="We design and build web experiences that look exceptional and perform even better. Fast, accessible, beautiful, and engineered to turn visitors into customers."
      emoji="💻"
      color="#34D399"
      metrics={[
        { val: '+256%', label: 'Average Conversion Rate' },
        { val: '+78%', label: 'Avg Traffic Growth' },
        { val: '< 2s', label: 'Page Load Time' },
      ]}
      services={[
        { title: 'Web Design & UI/UX', desc: 'Premium design that balances aesthetics and conversion — every pixel earns its place on the screen.' },
        { title: 'Frontend Development', desc: 'Fast, accessible, and maintainable code. Next.js, React, and modern web standards.' },
        { title: 'E-commerce', desc: 'Online stores built to sell. Shopify, WooCommerce, and custom solutions optimized for conversion.' },
        { title: 'Landing Pages', desc: 'High-converting landing pages for your campaigns. Built and A/B tested for maximum performance.' },
        { title: 'CRO & A/B Testing', desc: 'Find the exact changes that move the needle. Data-driven optimization that compounds over time.' },
        { title: 'Analytics & Tracking', desc: 'GA4, Meta Pixel, GTM — full attribution so you know exactly what\'s driving growth.' },
      ]}
      process={[
        { step: '01', title: 'Discovery & Wireframes', desc: 'Understand your goals, users, and competitors before writing a line of code.' },
        { step: '02', title: 'Design', desc: 'High-fidelity designs in Figma with your feedback before development.' },
        { step: '03', title: 'Build', desc: 'Clean, fast development with weekly progress updates and previews.' },
        { step: '04', title: 'Launch & Optimize', desc: 'QA, performance optimization, launch, and ongoing improvements.' },
      ]}
      platforms={['Next.js', 'React', 'Shopify', 'WordPress', 'Figma', 'Webflow', 'Framer', 'Vercel']}
    />
  );
}
