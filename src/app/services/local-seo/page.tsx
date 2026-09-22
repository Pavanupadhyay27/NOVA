import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Amazon Marketing & PPC Services — Scale Sales & Lower ACoS | Marketing Copilot',
  description: 'Scale your Amazon store revenue with Marketing Copilot. High-ROAS Amazon PPC campaigns, Sponsored Products, Sponsored Brands, A+ Content & listing CRO.',
};

export default function AmazonMarketingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Amazon Marketing & PPC"
      title={`Scale every<br />Amazon listing into a<br /><span class='accent-gradient'>profit engine.</span>`}
      subtitle="High-ROAS Amazon PPC, Sponsored Ads & Brand Store optimization engineered for e-commerce brands."
      description="Stop burning ad budget on wasted clicks. We engineer high-performing Amazon Sponsored Products, Sponsored Brands, Sponsored Display, and DSP funnels while optimizing your product listings with compelling A+ Content and Buy Box dominance to maximize organic and paid sales."
      emoji="📦"
      color="#FF9900"
      heroImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
      spotlightImage="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=80"
      metrics={[
        { val: '4.8X', label: 'Average Amazon ROAS' },
        { val: '-34%', label: 'Average ACoS Reduction' },
        { val: '98.2%', label: 'Buy Box Win Rate' },
      ]}
      localAdvantages={[
        {
          badge: 'Algorithm Mastery',
          title: 'Amazon A9 & COSMO Algorithm Indexing',
          desc: 'High-intent keyword indexing, backend search term optimization, listing relevancy, and sales velocity engineering that push your ASINs to Page 1 rank.',
        },
        {
          badge: 'Profit Engineering',
          title: 'Precision Bid & ACoS Management',
          desc: 'Granular campaign structure segmenting Exact, Phrase, Broad, and ASIN product targeting with negative keyword harvesting to slash wasted ad spend.',
        },
        {
          badge: 'High Conversion',
          title: 'A+ Content & Brand Storefronts',
          desc: 'Cinema-grade lifestyle imagery, interactive comparison tables, and immersive brand store architectures that double listing conversion rates.',
        },
      ]}
      services={[
        {
          title: 'Amazon Sponsored Products (PPC)',
          desc: 'Target competitor ASINs, category placements, and high-converting commercial keywords with granular bidding and budget automation.',
          deliverables: ['Exact / Broad Match Harvests', 'Competitor ASIN Conquesting', 'Negative Keyword Blacklisting', 'Daily Bid Optimization'],
        },
        {
          title: 'Amazon Sponsored Brands & Video Ads',
          desc: 'Dominate top-of-search placements with custom headline ads, 3-product collections, and short-form video ads that stop the scroll.',
          deliverables: ['Headline Banner Creatives', 'Auto-Playing Video Ads', 'Storefront Sub-Page Routing', 'Brand Defense Campaigns'],
        },
        {
          title: 'A+ Content (EBC) & Brand Store Architecture',
          desc: 'Design and upload conversion-engineered Enhanced Brand Content modules, brand story carousels, and multi-page Amazon storefronts.',
          deliverables: ['Premium A+ Graphic Modules', 'Brand Story Carousel', 'Custom Store Navigation', 'Cross-Sell Comparison Tables'],
        },
        {
          title: 'Listing Optimization & Organic ASIN Ranking',
          desc: 'Craft compelling keyword-rich titles, 5 benefit-driven bullet points, backend search terms (250 bytes), and high-CTR main product photos.',
          deliverables: ['Helium 10 / Jungle Scout Research', 'Benefit-Driven Bullet Points', 'Backend Search Term Audit', 'Main Image CTR Split Testing'],
        },
        {
          title: 'Buy Box Protection & Hijacker Suppression',
          desc: 'Monitor price fluctuations, rogue sellers, MAP pricing violations, and counterfeiters to ensure your brand retains 98%+ Buy Box share.',
          deliverables: ['24/7 Buy Box Monitoring', 'Rogue Reseller Cease & Des', 'Brand Registry Brand Gating', 'Price Elasticity Tracking'],
        },
        {
          title: 'Amazon DSP & Retargeting Funnels',
          desc: 'Re-engage cart abandoners, previous purchasers, and viewers of competing products across Amazon and premium third-party web apps.',
          deliverables: ['Off-Amazon Audience Retargeting', 'Cross-Sell to Past Buyers', 'Lifetime Value (LTV) Funnels', 'Attribution Pixel Reporting'],
        },
      ]}
      caseHighlight={{
        client: 'D2C Consumer Goods Brand',
        location: 'Amazon India & Global Marketplaces',
        metric: '5.2X ROAS',
        metricLabel: 'Monthly Amazon Revenue Scaled from ₹4.2L to ₹28.5L',
        summary: 'Marketing Copilot restructured the brand’s Amazon PPC architecture into isolated single-keyword ad groups, redesigned all product listings with custom A+ Content, and defended the Buy Box against 6 unauthorized resellers.',
      }}
      process={[
        { step: '01', title: 'ASIN & ACoS Profitability Audit', desc: 'Analyzing existing campaign performance, TACoS, search term reports, and listing conversion leakages.' },
        { step: '02', title: 'Listing & A+ Content Redesign', desc: 'Overhauling copy, backend search terms, lifestyle infographics, and submitting brand store approvals.' },
        { step: '03', title: 'Segmented Campaign Launch', desc: 'Deploying isolated Exact match, competitor conquesting, and video ads with aggressive negative keyword lists.' },
        { step: '04', title: 'Compounding Scale & Bid AI', desc: 'Scaling top-performing ASINs, lowering bid costs, maintaining Page 1 organic rank, and expanding to DSP.' },
      ]}
      platforms={['Amazon Seller Central', 'Amazon Vendor Central', 'Amazon Ads Console', 'Helium 10', 'Jungle Scout', 'Amazon Brand Analytics', 'Data Dive', 'Sellerboard']}
      faqs={[
        {
          q: 'What is a good ACoS (Advertising Cost of Sales) for Amazon PPC?',
          a: 'A healthy ACoS typically ranges between 15% and 25% for mature products, and up to 35% during aggressive product launch phases. More importantly, we focus on TACoS (Total Advertising Cost of Sales) to ensure your overall blended margins are highly profitable.',
        },
        {
          q: 'How does Amazon PPC improve organic search rankings?',
          a: 'Amazon’s algorithm rewards sales velocity and conversion rate. When paid ads drive consistent sales on specific keywords, Amazon recognizes the ASIN as relevant and boosts its organic Page 1 ranking, creating a compounding sales flywheel.',
        },
        {
          q: 'Do you design custom A+ Content and Brand Stores?',
          a: 'Yes! Our in-house creative team designs cinema-grade lifestyle graphics, informative comparison tables, and cohesive brand stores that educate shoppers and significantly elevate listing conversion rates.',
        },
        {
          q: 'How quickly will we see improvements in Amazon sales and PPC efficiency?',
          a: 'Immediate waste reduction (stopping non-converting search terms) occurs in the first 7 to 14 days. Substantial scaling in ROAS and organic ranking gains typically compound within 30 to 60 days of campaign restructuring.',
        },
      ]}
    />
  );
}
