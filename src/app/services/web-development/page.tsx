import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Development in Bhubaneswar — Next.js, Fast & SEO Ready | Marketing Copilot',
  description: 'Bespoke web development in Bhubaneswar by Marketing Copilot. Blazing-fast Next.js, conversion-focused UI/UX, and technical SEO built to scale your business.',
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      eyebrow="Website Development — Bhubaneswar"
      title={`Websites built<br />for Bhubaneswar<br /><span class='accent-gradient'>businesses to win.</span>`}
      subtitle="Conversion-engineered websites, Next.js web applications & e-commerce stores."
      description="We design and build bespoke websites for Bhubaneswar enterprises that don't just look stunning — they convert visitors into paying clients. Blazing-fast Next.js architecture, tactile skeuomorphic UI/UX, mobile-first responsiveness, and built-in technical SEO."
      emoji="💻"
      color="#10B981"
      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '< 0.8s', label: 'Mobile Load Time' },
        { val: '+240%', label: 'Form Conversion Lift' },
        { val: '100%', label: 'SEO & Mobile Ready' },
      ]}
      localAdvantages={[
        {
          badge: 'Speed & Core Web Vitals',
          title: 'Sub-Second Load Times on Mobile',
          desc: 'Over 80% of Bhubaneswar visitors browse on mobile phones. Our Next.js code loads in under 800ms, preventing bounce rates on mobile networks.',
        },
        {
          badge: 'High Conversion Design',
          title: 'Conversion-Engineered Layouts',
          desc: 'Tactile buttons, instant WhatsApp floating buttons, and click-to-call banners designed to turn Bhubaneswar web visitors into immediate consultations.',
        },
        {
          badge: 'Built-in Google Ranking',
          title: 'Native SEO & Structured Schema',
          desc: 'We bake local business schema, clean semantic HTML5, XML sitemaps, and OpenGraph social preview tags into the core code from day one.',
        },
      ]}
      services={[
        {
          title: 'Custom Next.js & React Web Apps',
          desc: 'Modern server-rendered web applications built with Next.js and TypeScript for blazing performance, ironclad security, and limitless scale.',
          deliverables: ['Next.js App Router', 'TypeScript Architecture', 'Vercel / Cloudflare Edge Hosting', 'Zero Legacy Code Bloat'],
        },
        {
          title: 'High-Converting Campaign Landing Pages',
          desc: 'Dedicated single-page sales funnels built specifically to maximize Google Ads and Meta Ads conversion rates in Bhubaneswar.',
          deliverables: ['A/B Split Test Setup', 'Sticky Mobile CTAs', 'Dynamic Form Routing', 'Heatmap Behavioral Tracking'],
        },
        {
          title: 'E-Commerce Stores (Shopify & Custom)',
          desc: 'Seamless digital storefronts with integrated Indian payment gateways (Razorpay, UPI, Cashfree), multi-currency, and fast checkout flows.',
          deliverables: ['1-Page UPI Checkout', 'Inventory Synchronization', 'Abandoned Cart Automation', 'Mobile Speed Optimization'],
        },
        {
          title: 'Corporate & Enterprise Portals',
          desc: 'Comprehensive multi-page websites for healthcare chains, real estate builders, educational institutions, and manufacturers in Odisha.',
          deliverables: ['Lead Management Integration', 'Career & Job Portals', 'Investor Relations Pages', 'Multi-Location Map Locators'],
        },
        {
          title: 'UI/UX Design & Interactive Prototypes',
          desc: 'High-fidelity Figma wireframes and design systems crafted with modern typography, glassmorphic accents, and intuitive user journeys.',
          deliverables: ['Figma Design Files', 'Interactive Clickable Prototype', 'Component Design System', 'Mobile Responsive Layouts'],
        },
        {
          title: 'Website Maintenance, Security & Speed Tuning',
          desc: 'Ongoing 24/7 uptime monitoring, daily cloud backups, SSL certification, core updates, and continuous Core Web Vitals maintenance.',
          deliverables: ['99.9% Uptime Guarantee', 'Automated Daily Backups', 'Malware & Firewall Protection', 'Monthly Speed Audits'],
        },
      ]}
      caseHighlight={{
        client: 'MediCare Diagnostics & Super-Specialty Clinic',
        location: 'Khandagiri & Patia, Bhubaneswar',
        metric: '3.8X Bookings',
        metricLabel: 'Online Patient Test Bookings Increased by 280%',
        summary: 'Marketing Copilot replaced their slow 7-second WordPress site with a lightning-fast custom Next.js web application featuring one-click WhatsApp appointment booking and test report downloads.',
      }}
      process={[
        { step: '01', title: 'Architecture & Wireframing', desc: 'Mapping user journeys, key conversion funnels, and mobile layout wireframes in Figma.' },
        { step: '02', title: 'High-Fidelity Visual Design', desc: 'Crafting bespoke design system tokens, color harmonies, typography, and interactive components.' },
        { step: '03', title: 'Modern Clean Code Development', desc: 'Building on Next.js with optimized assets, server components, and native API integrations.' },
        { step: '04', title: 'Speed QA, Launch & Handover', desc: 'Running cross-device testing, Core Web Vitals checks, GA4 tracking verification, and client training.' },
      ]}
      platforms={['Next.js', 'React', 'TypeScript', 'Shopify', 'WordPress', 'Figma', 'Vercel', 'Tailwind/CSS Modules']}
      faqs={[
        {
          q: 'Why does Marketing Copilot recommend Next.js over traditional WordPress?',
          a: 'Next.js delivers near-instant page loads (under 1 second), scores 95+ on Google PageSpeed, offers superior security against malware, and ranks significantly better on Google compared to bloated, plugin-heavy WordPress sites.',
        },
        {
          q: 'Will my website work perfectly on all mobile phones in Bhubaneswar?',
          a: 'Yes! Every website we build is designed mobile-first. We test on dozens of screen resolutions to ensure smooth navigation, legible fonts, and instant tap targets on 4G and 5G connections.',
        },
        {
          q: 'Can I easily edit text and images after the website is launched?',
          a: 'Absolutely. We configure user-friendly content management systems (CMS) or intuitive admin dashboards so your internal team can add blog posts, update prices, and edit text without needing to write any code.',
        },
        {
          q: 'How long does it take to design and launch a custom website?',
          a: 'High-converting landing pages take 5 to 7 business days. Full multi-page corporate websites or e-commerce stores typically take 3 to 5 weeks from initial wireframes to production deployment.',
        },
      ]}
    />
  );
}
