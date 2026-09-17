import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'E-commerce Marketing Services in Bhubaneswar — Scale Your Online Store | Marketing Copilot',
  description: 'Scale your e-commerce revenue in Bhubaneswar and Pan-India with Marketing Copilot. Google Shopping, Meta dynamic catalogs, WhatsApp cart recovery, and high ROAS.',
};

export default function EcommerceMarketingPage() {
  return (
    <ServicePageTemplate
      eyebrow="E-commerce Marketing — Bhubaneswar"
      title={`Your online store.<br />Maximum revenue.<br /><span class='accent-gradient'>Zero guesswork.</span>`}
      subtitle="Full-funnel e-commerce growth architecture scaling stores from Bhubaneswar to Pan-India."
      description="We scale e-commerce brands operating from Bhubaneswar to nationwide profitability. From high-ROAS Google Shopping and Meta Catalog ads to automated WhatsApp abandoned cart recovery and conversion rate optimization — we turn first-time shoppers into compounding repeat buyers."
      emoji="🛒"
      color="#10B981"
      heroImage="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '5.2X', label: 'Average Blended ROAS' },
        { val: '+180%', label: 'Repeat Customer Rate' },
        { val: '-32%', label: 'Customer Acquisition Cost' },
      ]}
      localAdvantages={[
        {
          badge: 'Odisha to Pan-India',
          title: 'Scaling from Bhubaneswar Hub',
          desc: 'We help brands headquartered in Bhubaneswar optimize fulfillment operations, courier integrations (Shiprocket, Delhivery), and nationwide acquisition.',
        },
        {
          badge: 'Cash on Delivery Safety',
          title: 'Automated COD to Prepaid Conversion',
          desc: 'Reduce RTO (Return to Origin) losses with automated WhatsApp verification prompts that offer 5% instant discounts to switch COD orders to UPI.',
        },
        {
          badge: 'High Conversion Checkouts',
          title: '1-Click UPI Mobile Checkout',
          desc: 'Streamline checkout with phone number autofill and direct GPay, PhonePe, and Paytm buttons that lift mobile checkout completion by 34%.',
        },
      ]}
      services={[
        {
          title: 'Google Shopping & Performance Max Campaigns',
          desc: 'Feed-optimized product shopping ads showing high-resolution product photography, review stars, and pricing directly on Google.',
          deliverables: ['Merchant Center Feed Audit', 'Title & Attribute Optimization', 'Negative Keyword Segmentation', 'Smart Bidding Strategy'],
        },
        {
          title: 'Dynamic Meta Product Catalog Ads',
          desc: 'Show personalized product carousels to shoppers who browsed your store on Facebook and Instagram, recovering abandoned carts instantly.',
          deliverables: ['Catalog Dynamic Ads (DPA)', 'Cross-Sell & Upsell Rules', 'High-Value Audience Sets', 'Creative Overlay Templates'],
        },
        {
          title: 'Automated WhatsApp & SMS Cart Recovery',
          desc: 'Recover up to 28% of abandoned shopping carts with automated 15-minute and 2-hour conversational WhatsApp checkout links.',
          deliverables: ['Cart Abandonment Flows', 'Automated Discount Triggers', 'One-Click Checkout Links', 'Order Status Notifications'],
        },
        {
          title: 'E-Commerce SEO & Category Hierarchy',
          desc: 'Structure your online store for search dominance, ranking category pages for high-volume commercial keywords with zero ad spend.',
          deliverables: ['Product Schema Markup', 'Faceted Navigation Rules', 'Collection Page Copywriting', 'Internal Linking Architecture'],
        },
        {
          title: 'Checkout & Landing Page CRO Auditing',
          desc: 'Eliminate friction in the buying journey through heatmaps, user session recordings, and structured A/B split tests on product pages.',
          deliverables: ['Mobile UX Optimization', 'Trust Badge Placements', 'Social Proof Widgets', 'Sticky Add-to-Cart Buttons'],
        },
        {
          title: 'Marketplace Advertising (Amazon & Flipkart)',
          desc: 'Maximize product rank and revenue on India’s largest marketplaces with Sponsored Products, Brand Stores, and A+ content design.',
          deliverables: ['Amazon Sponsored Ads', 'Flipkart PLA Management', 'A+ Brand Story Design', 'Listing Keyword Optimization'],
        },
      ]}
      caseHighlight={{
        client: 'UrbanDrape Handwoven Textiles & Home D2C',
        location: 'Kharvela Nagar & Rasulgarh, Bhubaneswar',
        metric: '8.4X Growth',
        metricLabel: 'Scaled Monthly Online Revenue from ₹5L to ₹42L',
        summary: 'Marketing Copilot restructured their Google Merchant Center feed, configured dynamic Instagram catalog retargeting, and launched automated WhatsApp COD verification. Cut Return-to-Origin by 42%.',
      }}
      process={[
        { step: '01', title: 'Store Health & Funnel Audit', desc: 'Auditing analytics tracking, cart drop-off rates, product margins, and existing ROAS metrics.' },
        { step: '02', title: 'Feed & Pixel Architecture', desc: 'Configuring flawless Google Merchant Center feeds and Meta Conversions API for 100% data tracking.' },
        { step: '03', title: 'Full-Funnel Campaign Launch', desc: 'Deploying prospecting, retargeting, and retention ad sets with tailored creative hooks.' },
        { step: '04', title: 'LTV & Repeat Revenue Compounding', desc: 'Implementing email and WhatsApp automations to maximize customer lifetime value and net profitability.' },
      ]}
      platforms={['Shopify', 'WooCommerce', 'Google Shopping', 'Meta Catalog', 'Amazon Ads', 'Flipkart Ads', 'Klaviyo', 'Razorpay']}
      faqs={[
        {
          q: 'Can an e-commerce brand based in Bhubaneswar successfully sell Pan-India?',
          a: 'Absolutely! Many of our most successful e-commerce partners manufacture or warehouse their inventory in Bhubaneswar while selling to customers across Mumbai, Delhi, Bengaluru, and tier-2 cities using streamlined logistics.',
        },
        {
          q: 'How do you reduce high RTO (Return to Origin) on COD orders in India?',
          a: 'We implement automated WhatsApp verification workflows that require customers to confirm their delivery address, detect bogus phone numbers, and incentivize shoppers with small discounts to switch from COD to instant UPI payment.',
        },
        {
          q: 'What is a good benchmark ROAS for e-commerce stores?',
          a: 'Depending on your gross profit margins, a healthy blended Return on Ad Spend (ROAS) ranges from 3.5X to 6.5X. We calculate your exact break-even ROAS before launching any campaigns.',
        },
        {
          q: 'Do you manage e-commerce stores on both Shopify and WooCommerce?',
          a: 'Yes, our engineering team has deep technical expertise in Shopify Liquid development as well as WordPress / WooCommerce speed optimization.',
        },
      ]}
    />
  );
}
