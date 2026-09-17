import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Branding & Creative Services in Bhubaneswar — Brand Identity & Design | Marketing Copilot',
  description: 'Elevate your business with world-class branding & creative services in Bhubaneswar by Marketing Copilot. Logo design, brand systems, packaging & ad creatives.',
};

export default function CreativeBrandingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Branding & Creative — Bhubaneswar"
      title={`Build a Bhubaneswar<br />brand that's<br /><span class='accent-gradient'>impossible to forget.</span>`}
      subtitle="Complete brand identity systems, packaging design & conversion-focused ad creatives."
      description="We craft brand identities for Bhubaneswar businesses that command premium positioning and instant market trust. From memorable logo marks and bespoke typography to tactile physical packaging and scroll-stopping digital campaigns — every visual asset engineered to make your business the first name customers choose."
      emoji="🎨"
      color="#EC4899"
      heroImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '100+', label: 'Brands Transformed' },
        { val: '4.9★', label: 'Client Satisfaction' },
        { val: '2.5X', label: 'Pricing Power Lift' },
      ]}
      localAdvantages={[
        {
          badge: 'Escape Price Wars',
          title: 'Premium Market Positioning',
          desc: 'Stop competing on the lowest price in Bhubaneswar. A premium visual identity lets you command 30% to 50% higher fees for the exact same service.',
        },
        {
          badge: 'Omnichannel Consistency',
          title: 'Unified Digital & Offline Systems',
          desc: 'From your Bhubaneswar office signboards and vehicle livery to your website, brochures, and Instagram grid — consistent visual prestige everywhere.',
        },
        {
          badge: 'Complete Brand Ownership',
          title: 'Full Vector IP & Trademark Readiness',
          desc: 'You receive 100% intellectual property ownership, editable vector files, typography licenses, and trademark-ready documentation.',
        },
      ]}
      services={[
        {
          title: 'Complete Visual Brand Identity',
          desc: 'Primary logo, secondary marks, custom color system, typographic hierarchy, and visual rules that establish instant distinction.',
          deliverables: ['Vector Logo Formats (SVG, EPS, AI)', 'Bespoke Color Palette', 'Typography Pairing Rules', 'Favicon & App Icons'],
        },
        {
          title: 'Comprehensive Brand Style Guidelines',
          desc: 'A 30+ page authoritative brand book defining exact usage rules, clear spaces, photo art direction, and tone of voice for your team.',
          deliverables: ['Digital Brand Manual PDF', 'Logo Misuse Rules', 'Photography Art Direction', 'Tone of Voice Guide'],
        },
        {
          title: 'Packaging & FMCG Box Design',
          desc: 'Eye-catching product labels, retail pouches, cartons, and boxes designed with die-cut specifications ready for high-volume commercial printing.',
          deliverables: ['3D Photorealistic Mockups', 'Print-Ready Vector Dielines', 'CMYK / Pantone Specifications', 'Barcode & Compliance Layouts'],
        },
        {
          title: 'Corporate Stationery & Marketing Collateral',
          desc: 'Premium tactile business cards, letterheads, invoice templates, presentation folders, and investor pitch deck presentations.',
          deliverables: ['Tactile Business Cards', 'Letterhead & Envelopes', 'Foil & Emboss Directives', 'Keynote & PowerPoint Pitch Decks'],
        },
        {
          title: 'High-Converting Digital Ad Creatives',
          desc: 'Static and carousel ad graphics engineered with psychological color theory, contrast ratios, and clear value proposition typography.',
          deliverables: ['1:1 Feed Assets', '9:16 Story/Reels Templates', 'Google Display Banners', 'Performance A/B Test Variants'],
        },
        {
          title: 'Retail Signage & Environmental Graphics',
          desc: 'High-impact outdoor hoardings, showroom facade 3D acrylic signage, reception backdrops, and exhibition trade show booth graphics.',
          deliverables: ['Large Format Vector Graphics', '3D Facade Signage Specs', 'Exhibition Booth Layouts', 'Directional Signage Kits'],
        },
      ]}
      caseHighlight={{
        client: 'Aura Heritage Luxury Ayurvedic Spa & Resort',
        location: 'Jaydev Vihar & Puri-Bhubaneswar Highway',
        metric: '2.4X Price Lift',
        metricLabel: 'Average Transaction Value Increased by 140%',
        summary: 'Marketing Copilot redesigned their complete visual identity, packaging line, and guest welcome brochures with gold foiling and earth tones. Established them as the #1 luxury wellness destination in Odisha.',
      }}
      process={[
        { step: '01', title: 'Positioning & Audience Discovery', desc: 'Analyzing local competitive positioning in Bhubaneswar, customer aspirations, and brand core values.' },
        { step: '02', title: 'Creative Concepts Exploration', desc: 'Presenting 3 distinct visual directions with moodboards, logo lockups, and real-world mockups.' },
        { step: '03', title: 'Collaborative Iteration', desc: 'Refining chosen concept details, typography kerning, and color harmonies based on your feedback.' },
        { step: '04', title: 'Asset Handoff & Brand Manual', desc: 'Delivering full print-ready and web vector asset packages along with complete brand guidelines.' },
      ]}
      platforms={['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'After Effects', 'Canva Pro']}
      faqs={[
        {
          q: 'Why should a Bhubaneswar business invest in professional branding?',
          a: 'Customers form an opinion about your business in under 50 milliseconds. A professional, premium brand identity builds immediate trust, signals superior quality, and allows you to charge premium prices without hesitation.',
        },
        {
          q: 'What do I receive at the end of the brand identity project?',
          a: 'You receive all original vector master files (AI, EPS, SVG, PDF, PNG), typography font licenses, 3D mockups, print-ready files, and a comprehensive Brand Identity Guidelines PDF.',
        },
        {
          q: 'Can you work with our local Bhubaneswar printers?',
          a: 'Yes! We coordinate directly with your chosen local printing press or packaging manufacturers in Bhubaneswar to review paper weights, color proofs, and die-cut alignments.',
        },
        {
          q: 'How long does a full brand identity project take?',
          a: 'A typical branding engagement takes 2 to 3 weeks. This includes initial research, presentation of distinct creative directions, collaborative refinements, and final asset packaging.',
        },
      ]}
    />
  );
}
