import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Local SEO Services in Bhubaneswar — Google Maps & 3-Pack | Marketing Copilot',
  description: 'Dominate Google Maps and local search in Bhubaneswar with Marketing Copilot. Google Business Profile optimization, local 3-pack dominance & high footfall.',
};

export default function LocalSEOPage() {
  return (
    <ServicePageTemplate
      eyebrow="Local SEO — Bhubaneswar"
      title={`Own every<br />Bhubaneswar<br /><span class='accent-gradient'>local search.</span>`}
      subtitle="Hyperlocal Google Maps & 3-Pack optimization engineered for Bhubaneswar businesses."
      description="When customers in Bhubaneswar search for your service 'near me' on their smartphones, you need to be the #1 result they see on Google Maps. We optimize your Google Business Profile, fix citation errors, build 5-star review velocity, and drive daily walk-ins and phone calls."
      emoji="📍"
      color="#7C3AED"
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '#1 Spot', label: 'Google Maps 3-Pack' },
        { val: '+380%', label: 'Phone Call Actions' },
        { val: '4.9★', label: 'Average Review Rating' },
      ]}
      localAdvantages={[
        {
          badge: 'Neighborhood Focus',
          title: 'Hyperlocal Micro-Targeting',
          desc: 'Dominate specific Bhubaneswar commercial hubs: Patia, Infocity, Saheed Nagar, Jaydev Vihar, Nayapalli, Rasulgarh, and Khandagiri.',
        },
        {
          badge: 'Verified Google Trust',
          title: 'Google Business Profile Authority',
          desc: '100% profile completeness, primary and secondary category precision, geo-tagged photo uploads, and weekly localized Google updates.',
        },
        {
          badge: '5-Star Social Proof',
          title: 'Ethical Review Velocity Engine',
          desc: 'Automated SMS and QR-code review collection systems that generate authentic 5-star reviews from your real satisfied Bhubaneswar clients.',
        },
      ]}
      services={[
        {
          title: 'Google Business Profile (GBP) Optimization',
          desc: 'Complete optimization of listing categories, operating hours, high-resolution geo-tagged photo uploads, product catalogs, and service menus.',
          deliverables: ['Primary/Secondary Category Audit', 'Weekly Geo-Tagged Posts', 'Product Catalog Integration', 'Direct Call Tracking'],
        },
        {
          title: 'Local Citation & NAP Consistency',
          desc: 'Clean up duplicate listings and synchronize Name, Address, and Phone (NAP) data across 50+ reputable Indian and local business directories.',
          deliverables: ['NAP Discrepancy Cleanup', 'Justdial & Sulekha Sync', 'Local Odisha Portal Citations', 'Duplicate Listing Purge'],
        },
        {
          title: 'Neighborhood & Geo-Targeted Landing Pages',
          desc: 'Build dedicated location-specific landing pages for key localities in Bhubaneswar with embedded schema coordinates and directions.',
          deliverables: ['Patia Location Page', 'Saheed Nagar Location Page', 'Embedded Google Maps', 'Local Schema JSON-LD'],
        },
        {
          title: '5-Star Review Generation Strategy',
          desc: 'Deploy contactless QR cards and automated WhatsApp follow-ups to systematically gather glowing reviews that elevate your Map pack rank.',
          deliverables: ['Custom Standee QR Codes', 'WhatsApp Review Follow-Up', 'Review Response Playbook', 'Negative Feedback Mitigation'],
        },
        {
          title: 'Competitor Map Spam Removal',
          desc: 'Identify and report illegal keyword-stuffed competitor listings and fake addresses in Bhubaneswar that unfairly steal your legitimate leads.',
          deliverables: ['Map Spam Audit', 'Google Redressal Complaint Filing', 'Competitor Proximity Analysis', 'Rank Preservation'],
        },
        {
          title: 'Local Call & Direction Analytics',
          desc: 'Monitor exact customer intent actions: phone calls generated, driving directions requested, and website visits originating from Google Maps.',
          deliverables: ['Call Tracking Numbers', 'Direction Request Heatmaps', 'Monthly GBP Insights Report', 'ROI Breakdown'],
        },
      ]}
      caseHighlight={{
        client: 'Advance Orthopedic & Sports Medicine Clinic',
        location: 'Jaydev Vihar & Nayapalli, Bhubaneswar',
        metric: '+420% Calls',
        metricLabel: 'Monthly Patient Inbound Calls Rose from 45 to 234',
        summary: 'Marketing Copilot claimed and verified their Google listing, purged 8 spam competitor listings, and collected 120+ verified 5-star patient reviews. The clinic now ranks #1 for "orthopedic doctor in Bhubaneswar".',
      }}
      process={[
        { step: '01', title: 'Local Grid Rank Audit', desc: 'Running geo-grid ranking scans across every 1km radius of Bhubaneswar to identify visibility blindspots.' },
        { step: '02', title: 'GBP Restructuring & Citations', desc: 'Overhauling your Google listing, correcting address errors, and submitting verified local citations.' },
        { step: '03', title: 'Review Velocity & Content Posts', desc: 'Launching contactless review capture and publishing weekly geo-optimized updates with photos.' },
        { step: '04', title: 'Map Pack Dominance & Monitoring', desc: 'Protecting your top-3 ranking with proactive spam reporting and continuous ranking maintenance.' },
      ]}
      platforms={['Google Business Profile', 'Google Maps', 'Apple Maps', 'Bing Places', 'Justdial', 'IndiaMart', 'BrightLocal', 'Whitespark']}
      faqs={[
        {
          q: 'Why is Google Maps ranking so critical for local businesses in Bhubaneswar?',
          a: 'When smartphone users in Bhubaneswar search for emergency services, doctors, restaurants, or salons, over 70% click on the Google Maps 3-Pack without ever visiting a traditional website.',
        },
        {
          q: 'How long does it take to rank in Bhubaneswar’s Google Map Pack?',
          a: 'Most businesses experience substantial improvements in call volume and map rankings within 30 to 60 days of resolving citation errors and optimizing their Google Business Profile.',
        },
        {
          q: 'What if competitors are using fake names with keywords in Bhubaneswar?',
          a: 'Keyword stuffing the business title violates Google guidelines. Marketing Copilot submits formal Google Business Profile Redressal complaints with photographic proof to remove spam competitor listings.',
        },
        {
          q: 'How do you help us get more positive customer reviews?',
          a: 'We design custom physical QR-code counter standees and automated WhatsApp post-service messages that make it effortless for your happy customers to leave a 5-star review in under 15 seconds.',
        },
      ]}
    />
  );
}
