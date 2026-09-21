export interface CaseStudyItem {
  id: string;
  client: string;
  category: 'SEO' | 'Paid Ads' | 'Web Development' | 'E-commerce' | 'Social Media';
  service: string;
  industry: string;
  location: string;
  headline: string;
  desc: string;
  challenge: string;
  solution: string;
  color: string;
  tagColor: string;
  image: string;
  featured?: boolean;
  stats: { val: string; label: string }[];
  deliverables: string[];
}

export const spotlightProject: CaseStudyItem = {
  id: 'bhubaneswar-real-estate',
  client: 'Utkal Heights & Luxury Villas',
  category: 'SEO',
  service: 'Hyperlocal SEO + Google Search Ads',
  industry: 'Real Estate & Infrastructure',
  location: 'Patia & Khandagiri, Bhubaneswar',
  headline: 'Dominating Luxury Property Search in Bhubaneswar — 3X Qualified Leads in 90 Days',
  desc: 'Engineered a full-funnel organic search and Google Ads infrastructure targeting high-net-worth homebuyers across Patia, Khandagiri, and Cuttack. Captured #1 ranking for 28 high-intent property queries and slashed lead acquisition costs by 60%.',
  challenge: 'Relying heavily on costly third-party real estate portals with low lead intent and zero organic Google search presence against established national builders.',
  solution: 'Conducted a deep technical site overhaul, built 35+ hyper-localized project and neighborhood guides, and executed hyper-targeted Google Search radius bidding with WhatsApp CRM automations.',
  color: '#0B2093',
  tagColor: '#0B2093',
  image: '/images/work_realestate.jpg',
  featured: true,
  stats: [
    { val: '+287%', label: 'Organic Inbound Leads' },
    { val: '6.2X', label: 'Verified Google Ads ROAS' },
    { val: '#1 Rank', label: '28 Property Keywords' },
    { val: '-60%', label: 'Cost Per Qualified Lead' },
  ],
  deliverables: [
    'Technical SEO & Core Web Vitals Optimization',
    'High-Intent Google Ads Radius Funnels',
    '35+ Localized Micro-Neighborhood Guides',
    'Direct WhatsApp Lead Routing Automation',
  ],
};

export const caseStudiesList: CaseStudyItem[] = [
  {
    id: 'multi-specialty-clinic',
    client: 'CareFirst Multi-Speciality Clinic',
    category: 'SEO',
    service: 'Local SEO + Google Maps 3-Pack',
    industry: 'Healthcare & Wellness',
    location: 'Saheed Nagar, Bhubaneswar',
    headline: 'Ranked #1 on Google Maps 3-Pack Across 14 High-Intent Medical Queries',
    desc: 'Google Business Profile audit, review acceleration system, and localized citation architecture that drove 190% more direct patient calls.',
    challenge: 'Invisible on Google Maps 3-pack despite being a premier clinic; losing walk-in and emergency inquiries to distant hospitals.',
    solution: 'Optimized local schema markup, cleaned 120+ directory citations, and launched automated SMS review acceleration generating 450+ 5-star ratings.',
    color: '#10B981',
    tagColor: '#10B981',
    image: '/images/work_healthcare.jpg',
    stats: [
      { val: '#1 Rank', label: 'Google Maps 3-Pack' },
      { val: '+190%', label: 'Patient Phone Inquiries' },
    ],
    deliverables: ['Google Business Profile Mastery', 'Local Geo-Citation Cleanup', 'Automated Patient Review Engine'],
  },
  {
    id: 'coaching-institute',
    client: 'Apex National Academy',
    category: 'Paid Ads',
    service: 'Meta Ads + Lead Automation',
    industry: 'Education & Coaching',
    location: 'Acharya Vihar, Bhubaneswar',
    headline: '400+ Enrolled Student Admissions in 60 Days via Precision Social Ads',
    desc: 'Full-funnel Meta Ads strategy targeting competitive exam aspirants and parents across Odisha, directly connected to automated WhatsApp counseling.',
    challenge: 'High cost per lead (>₹450) with low counseling attendance and high drop-off on generic landing page forms.',
    solution: 'Engineered native Meta instant lead forms integrated instantly with automated WhatsApp counseling sequences and hyper-targeted parent cohorts.',
    color: '#7C3AED',
    tagColor: '#7C3AED',
    image: '/images/work_edtech.jpg',
    stats: [
      { val: '400+', label: 'Admissions Closed' },
      { val: '₹140', label: 'Cost Per Lead (CPL)' },
    ],
    deliverables: ['High-Intent Parent Targeting', 'WhatsApp Counselor Routing', 'Dynamic Creative Retargeting'],
  },
  {
    id: 'odisha-handicrafts-d2c',
    client: 'Utkala Heritage Crafts',
    category: 'E-commerce',
    service: 'E-commerce Growth + Performance Ads',
    industry: 'Retail & D2C',
    location: 'Master Canteen, Bhubaneswar',
    headline: 'Scaling an Authentic Odia Handloom Brand to ₹50L/Month Online',
    desc: 'Google Shopping, Meta Dynamic Catalog ads, and automated WhatsApp abandoned cart recovery expanding brand sales nationwide.',
    challenge: 'High cart abandonment (78%) and difficulty scaling online sales outside Odisha without blowing ad spend.',
    solution: 'Implemented dynamic catalog retargeting, localized language creative hooks, and automated WhatsApp cart recovery with 1-click checkout.',
    color: '#F59E0B',
    tagColor: '#F59E0B',
    image: '/images/work_ecommerce.jpg',
    stats: [
      { val: '₹50L+', label: 'Monthly Online Revenue' },
      { val: '4.8X', label: 'Blended Ad ROAS' },
    ],
    deliverables: ['Dynamic Product Catalog Ads', 'WhatsApp Abandoned Cart Flow', 'Shopify Speed Optimization'],
  },
  {
    id: 'fine-dining-restobar',
    client: 'The Urban Bistro & Lounge',
    category: 'Social Media',
    service: 'Social Media + Food Creator Drops',
    industry: 'Hospitality & Dining',
    location: 'Infocity & Patia, Bhubaneswar',
    headline: '50K Local Followers & 100% Weekend Table Bookings',
    desc: 'Cinematic food Reels production, menu redesign, and local food creator drops making it the most sought-after weekend reservation hotspot.',
    challenge: 'Stagnant weekday footfall and reliance on discount aggregator apps eroding profit margins.',
    solution: 'Produced viral cinematic Reels showcasing chef specials, organized exclusive food creator tasting nights, and built a VIP reservation funnel.',
    color: '#EC4899',
    tagColor: '#EC4899',
    image: '/images/work_restaurant.jpg',
    stats: [
      { val: '50K+', label: 'Local Foodie Followers' },
      { val: '+320%', label: 'Weekend Table Footfall' },
    ],
    deliverables: ['Cinematic 4K Food Reels', 'Creator Tasting Campaigns', 'VIP WhatsApp Table Bookings'],
  },
  {
    id: 'commercial-infrastructure',
    client: 'Kalinga Steel & Infrastructure',
    category: 'Web Development',
    service: 'Next.js Web Portal + B2B SEO',
    industry: 'Engineering & Construction',
    location: 'Chandrasekharpur, Bhubaneswar',
    headline: 'Sub-Second Next.js Web Portal Drove 180% More Commercial RFQs',
    desc: 'Engineered a modern web platform with interactive project showcase and technical SEO foundations dominating B2B construction queries.',
    challenge: 'A slow 7-year-old WordPress website with a 5.2s load time that failed to capture corporate and government contract RFQs.',
    solution: 'Architected a lightning-fast sub-second Next.js web application with interactive specs, case studies, and instant RFQ quoting forms.',
    color: '#0B2093',
    tagColor: '#0B2093',
    image: '/images/Medallion house.jpg',
    stats: [
      { val: '+180%', label: 'Commercial RFQ Leads' },
      { val: '< 0.7s', label: 'Page Load Speed' },
    ],
    deliverables: ['Sub-Second Next.js Architecture', 'Interactive Project Estimator', 'B2B Technical SEO Schema'],
  },
  {
    id: 'weekend-bhraman-tours',
    client: 'Weekend Bhraman Tour Planner',
    category: 'Paid Ads',
    service: 'Meta Ads + Google Business Profile',
    industry: 'Tourism & Travel',
    location: 'Bhubaneswar & Puri',
    headline: '7+ Tour Circuits Scaled with Consistent ₹25–30 Booking Leads',
    desc: 'Restructured ad funnels around high-intent travel cohorts and verified Google Business Profile for regional travel dominance.',
    challenge: 'Low booking inquiry volume and unverified local Google search listings for premium weekend circuit packages.',
    solution: 'Targeted high-intent corporate cohorts in Bhubaneswar, Cuttack, and Kolkata with video testimonials and 1-click WhatsApp tour booking.',
    color: '#0D007F',
    tagColor: '#0D007F',
    image: '/images/Weekend Bhraman Tour Planner.jpg',
    stats: [
      { val: '7+ Circuits', label: 'Active Tour Packages' },
      { val: '₹25–30', label: 'Cost Per Booking Lead' },
    ],
    deliverables: ['Video Testimonial Funnels', 'Google Maps Verification', 'Automated Tour Itinerary Bot'],
  },
];

export const proofMetrics = [
  { val: '₹65 Cr+', label: 'Client Revenue Generated', sub: 'Audited commercial returns' },
  { val: '5.8X', label: 'Average Campaign ROAS', sub: 'Across paid search & social' },
  { val: '85+', label: 'Google #1 SERP Rankings', sub: 'Dominated local keywords' },
  { val: '94%', label: 'Client Retention Rate', sub: 'Long-term compounding growth' },
  { val: '< 24hr', label: 'Campaign Launch Speed', sub: 'Rapid sprint execution' },
];

export const transformationData = [
  {
    icon: '🚀',
    metric: 'Monthly Qualified Leads',
    before: '12 – 18 leads / mo',
    after: '95 – 130 leads / mo',
    gain: '+680%',
    timeframe: 'Achieved in 60 Days',
    desc: 'Shifted from passive referrals to active high-intent Google search capture and precision Meta Ads funnels.',
    lever: 'Full-funnel intent keyword mapping & WhatsApp 60-second instant lead routing.',
  },
  {
    icon: '💰',
    metric: 'Customer Acquisition Cost (CAC)',
    before: '₹750 – ₹1,200 / lead',
    after: '₹180 – ₹260 / lead',
    gain: '-74%',
    timeframe: 'Achieved in 45 Days',
    desc: 'Eliminated wasted broad ad spend with hyper-local radius bidding, negative keyword pruning, and lookalike cohorts.',
    lever: 'Algorithmic bid pacing and high-converting native instant lead forms.',
  },
  {
    icon: '📍',
    metric: 'Google Maps 3-Pack Visibility',
    before: 'Position #12 (Invisible)',
    after: 'Position #1 Across Clusters',
    gain: 'Top 3-Pack',
    timeframe: 'Achieved in 30 Days',
    desc: 'Localized citation architecture, geo-tagged photo uploads, and automated SMS review acceleration engine.',
    lever: 'Structured local schema markup and 450+ verified 5-star Google reviews.',
  },
  {
    icon: '⚡',
    metric: 'Website Page Load Speed',
    before: '4.8s (High Bounce Rate)',
    after: '0.65s (Sub-Second Next.js)',
    gain: '7.3X Faster',
    timeframe: 'Achieved in 14 Days',
    desc: 'Engineered sub-second Next.js responsive web platform with Core Web Vitals score of 99/100.',
    lever: 'Server-side rendering, WebP image optimization, and zero heavy WordPress plugins.',
  },
];

export const revenueProcessSteps = [
  {
    num: '01',
    title: 'Forensic Growth & Ad Audit',
    badge: 'Day 1 – 3',
    desc: 'We conduct a deep forensic audit of your historical ad spend, conversion tracking pixels, SEO keyword gaps, and competitor vulnerabilities in Bhubaneswar.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Conversion Architecture',
    badge: 'Day 4 – 7',
    desc: 'We engineer high-converting landing pages, instant WhatsApp routing funnels, and tracking attribution before spending a single rupee on ads.',
    icon: '⚡',
  },
  {
    num: '03',
    title: 'High-Velocity Creative Testing',
    badge: 'Day 8 – 21',
    desc: 'We launch 20+ visual and copy variations across Google Search and Meta Ads to identify the winning combination with the lowest acquisition cost.',
    icon: '🎯',
  },
  {
    num: '04',
    title: 'Compounding Scale & Automation',
    badge: 'Day 22+',
    desc: 'We scale winning ad sets, amplify organic SEO rankings, and automate lead nurture workflows to compound monthly revenue predictably.',
    icon: '📈',
  },
];

export const geoImpactLocations = [
  {
    area: 'Patia / Infocity',
    coords: '20.3533° N, 85.8197° E',
    vertical: 'Real Estate & Tech Startups',
    stat: '+320% Leads',
    tag: 'High-Intent Search',
    searches: '48,000+ monthly searches',
    cpl: '₹140 CPL avg',
    leadShare: '94% Top-of-Page Share',
    landmarks: ['Infocity IT Hub', 'KIIT Square', 'Silicon Corridor', 'Patia Station Road'],
    clientSnippet: 'Utkal Heights & 3 Tech Brands Active',
  },
  {
    area: 'Saheed Nagar',
    coords: '20.2917° N, 85.8453° E',
    vertical: 'Healthcare & Specialized Clinics',
    stat: '#1 Google Pack',
    tag: 'Local Maps SEO',
    searches: '36,000+ medical queries',
    cpl: '₹190 per appointment',
    leadShare: '#1 Across 14 Keywords',
    landmarks: ['Janpath Corridor', 'Vani Vihar Rd', 'Bhawani Mall', 'Hospital Row'],
    clientSnippet: 'CareFirst Multi-Speciality Clinic',
  },
  {
    area: 'Chandrasekharpur',
    coords: '20.3241° N, 85.8169° E',
    vertical: 'B2B & Commercial Infrastructure',
    stat: '+180% RFQ Lift',
    tag: 'Next.js Web & B2B SEO',
    searches: '22,000+ B2B contract queries',
    cpl: '₹420 B2B RFQ lead',
    leadShare: 'Top 3 Commercial Results',
    landmarks: ['Damana Square', 'CS Pur Housing', 'Sailashree Vihar', 'Industrial Area'],
    clientSnippet: 'Kalinga Steel & Infrastructure',
  },
  {
    area: 'Khandagiri & Cuttack Rd',
    coords: '20.2588° N, 85.7869° E',
    vertical: 'Education, Academies & Colleges',
    stat: '400+ Admissions',
    tag: 'Meta & WhatsApp Ads',
    searches: '54,000+ student searches',
    cpl: '₹140 per enrolled lead',
    leadShare: '88% Parent Reach',
    landmarks: ['Khandagiri Square', 'Baramunda Bus Stand', 'Jagannath Temple Rd', 'Cuttack Highway'],
    clientSnippet: 'Apex National Academy',
  },
  {
    area: 'Jaydev Vihar & Nayapalli',
    coords: '20.2974° N, 85.8249° E',
    vertical: 'Events, Luxury Decor & Retail',
    stat: '5X View Velocity',
    tag: 'Social Media & Branding',
    searches: '28,000+ event searches',
    cpl: '₹250 per booking inquiry',
    leadShare: '72% Video Reel Viral Share',
    landmarks: ['Jaydev Vihar Overbridge', 'IRC Village', 'Pal Heights Area', 'Mayfair Circle'],
    clientSnippet: 'Ekatraa Bespoke Events',
  },
  {
    area: 'Puri & Konark Highway',
    coords: '19.8135° N, 85.8312° E',
    vertical: 'Tourism, Resorts & Hospitality',
    stat: '100% Bookings',
    tag: 'Google Travel & Retargeting',
    searches: '65,000+ tourist queries',
    cpl: '₹28 per tour booking lead',
    leadShare: '92% Weekend Occupancy',
    landmarks: ['Marine Drive Puri', 'Golden Beach', 'Konark Sun Temple Corridor', 'Pipili Bypass'],
    clientSnippet: 'Weekend Bhraman Tour Planner',
  },
];

export const industryVerticals = [
  {
    id: 'real-estate',
    name: 'Real Estate & Builders',
    icon: '🏢',
    headline: 'High-Ticket Buyer Inquiries with Zero Portal Dependency',
    focus: 'Hyperlocal SEO, Google Search Ads, 3D Virtual Tour Landing Pages, and direct WhatsApp buyer qualification funnels.',
    metric: '6.2X ROAS',
    channels: ['Google Search Radius Ads', 'Hyperlocal Location SEO', 'WhatsApp CRM Automations'],
    benchmarks: [
      { label: 'Avg. CPL', val: '₹140 – ₹220' },
      { label: 'Booking Conversion', val: '18.4%' },
      { label: 'Time to #1 SERP', val: '60 – 90 Days' },
    ],
    clientProof: { client: 'Utkal Heights', location: 'Patia, Bhubaneswar', outcome: '3X Lead Volume in 90 Days' },
  },
  {
    id: 'healthcare',
    name: 'Clinics & Healthcare',
    icon: '🏥',
    headline: 'Google Maps 3-Pack Dominance for High-Intent Medical Queries',
    focus: 'Local Pack SEO, Review Acceleration, Doctor Authority Videos, and instant WhatsApp appointment routing.',
    metric: '#1 Maps Rank',
    channels: ['Google Business Profile Mastery', 'Local Geo-Citations', 'SMS Review Acceleration'],
    benchmarks: [
      { label: 'Direct Patient Calls', val: '+190%' },
      { label: 'Local 3-Pack Rank', val: 'Position #1' },
      { label: 'Review Velocity', val: '450+ 5-Star' },
    ],
    clientProof: { client: 'CareFirst Clinic', location: 'Saheed Nagar', outcome: '#1 on Google Maps 3-Pack' },
  },
  {
    id: 'education',
    name: 'Coaching & Colleges',
    icon: '🎓',
    headline: 'Batch Admissions at Predictable Cost-Per-Lead',
    focus: 'Parent Targeting Meta Ads, Automated WhatsApp Counseling, and Exam Countdown Campaign Sprints.',
    metric: '400+ Enrolled',
    channels: ['Meta Instant Lead Forms', 'WhatsApp Counselor Sequences', 'Dynamic Exam Retargeting'],
    benchmarks: [
      { label: 'Cost Per Enrolled Lead', val: '₹140 CPL' },
      { label: 'Counseling Attendance', val: '82%' },
      { label: 'Batch Fill Speed', val: '60 Days' },
    ],
    clientProof: { client: 'Apex Academy', location: 'Acharya Vihar', outcome: '400+ Enrolled Students' },
  },
  {
    id: 'ecommerce',
    name: 'D2C & Retail Brands',
    icon: '🛍️',
    headline: 'Scaling Nationwide Sales with Compounding ROAS',
    focus: 'Meta Dynamic Catalogs, Google Shopping Ads, WhatsApp Abandoned Cart Funnels, and sub-second Next.js speed.',
    metric: '₹50L+/mo Sales',
    channels: ['Meta Dynamic Ads', 'Google Shopping P-Max', 'WhatsApp Abandoned Cart'],
    benchmarks: [
      { label: 'Blended ROAS', val: '4.8X ROAS' },
      { label: 'Cart Recovery Rate', val: '38%' },
      { label: 'Monthly Revenue', val: '₹50L+ Online' },
    ],
    clientProof: { client: 'Utkala Heritage', location: 'Master Canteen', outcome: 'Scaled to ₹50L/mo Online' },
  },
  {
    id: 'hospitality',
    name: 'Hotels, Dining & Travel',
    icon: '🍽️',
    headline: 'Full Weekend Tables & Direct Guest Bookings',
    focus: 'Cinematic Food Reels, Creator Tasting Drops, Google Travel SEO, and VIP WhatsApp reservation funnels.',
    metric: '+320% Footfall',
    channels: ['4K Cinematic Reels', 'Creator Tasting Drops', 'VIP WhatsApp Table Bookings'],
    benchmarks: [
      { label: 'Local Followers', val: '50K+ Foodies' },
      { label: 'Weekend Table Bookings', val: '100% Full' },
      { label: 'Footfall Surge', val: '+320%' },
    ],
    clientProof: { client: 'The Urban Bistro', location: 'Infocity & Patia', outcome: '50K Followers & Full Bookings' },
  },
  {
    id: 'commercial',
    name: 'Commercial & B2B',
    icon: '🏗️',
    headline: 'High-Value Corporate RFQs and Tender Visibility',
    focus: 'Sub-second Next.js Web Portals, B2B Organic Search, and LinkedIn Executive Thought Leadership.',
    metric: '+180% RFQs',
    channels: ['Next.js High-Speed Platform', 'B2B Technical SEO Schema', 'Interactive RFQ Estimator'],
    benchmarks: [
      { label: 'Commercial RFQs', val: '+180% Lift' },
      { label: 'Page Load Speed', val: '< 0.7s' },
      { label: 'Organic SERP', val: 'Top 3 B2B Rank' },
    ],
    clientProof: { client: 'Kalinga Steel', location: 'Chandrasekharpur', outcome: '180% More Commercial RFQs' },
  },
];

export const clientTestimonials = [
  {
    quote: 'Marketing Copilot transformed our property sales in Patia. Within 90 days, we were ranking #1 for high-ticket apartment searches and generating 90+ verified buyer leads every month without relying on expensive aggregators.',
    author: 'Rajesh Mohapatra',
    role: 'Director of Marketing, Utkal Heights',
    location: 'Patia, Bhubaneswar',
    stat: '3X Inbound Buyers',
    avatar: '🏢',
  },
  {
    quote: 'Our clinic went from page 2 on Google Maps to #1 in Saheed Nagar. The phone calls from patients looking for specialized treatments nearly doubled in our first 6 weeks of partnering with them.',
    author: 'Dr. S. K. Patnaik',
    role: 'Medical Director, CareFirst Clinic',
    location: 'Saheed Nagar, Bhubaneswar',
    stat: '+190% Direct Calls',
    avatar: '🩺',
  },
  {
    quote: 'We enrolled over 400 students for our competitive batches at an unheard-of ₹140 CPL. Their WhatsApp counselor automation ensured no parent inquiry was left waiting.',
    author: 'Anita Das',
    role: 'Academic Head, Apex Academy',
    location: 'Acharya Vihar, Bhubaneswar',
    stat: '400+ Admissions',
    avatar: '🎓',
  },
];

export const auditChecklist = [
  {
    id: 'q1',
    title: 'Does your business appear in the top 3 on Google Maps when searched on mobile in Bhubaneswar?',
    warning: 'Over 72% of high-intent local customers call one of the top 3 map results without scrolling down.',
  },
  {
    id: 'q2',
    title: 'Are your Meta & Google Ads leads connected to an instant WhatsApp reply within 60 seconds?',
    warning: 'Leads contacted within 5 minutes are 9X more likely to convert than leads contacted after 30 minutes.',
  },
  {
    id: 'q3',
    title: 'Does your website load in under 1.5 seconds on a mobile 4G connection in Odisha?',
    warning: 'Every extra second of load time increases mobile visitor drop-off by up to 32%.',
  },
  {
    id: 'q4',
    title: 'Do you have verified attribution tracking separating paid ad conversions from organic traffic?',
    warning: 'Without server-side tracking (CAPI), ad platforms misallocate up to 40% of your budget to useless clicks.',
  },
];

export const engagementModels = [
  {
    title: 'Full-Funnel Growth Partnership',
    badge: 'Most Popular',
    desc: 'Complete end-to-end growth execution including SEO, Google Ads, Meta Ads, and automated CRM funnels.',
    features: [
      'Dedicated Senior Growth Strategist & Media Buyer',
      'Continuous Conversion Rate Optimization (CRO)',
      'Weekly Sprint Cadence & Real-Time KPI Dashboard',
      'Zero 12-Month Lock-in Contracts (Performance First)',
    ],
  },
  {
    title: 'Specialized Channel Sprint',
    badge: 'Targeted Growth',
    desc: 'Laser-focused optimization on a single bottleneck: Local SEO domination, Meta Ads recovery, or Next.js web build.',
    features: [
      'In-Depth Forensic Audit & 30-Day Fix Roadmap',
      'Complete Tracking Architecture & Pixel Reconnection',
      'High-Converting Creative Production & Copywriting',
      'Knowledge Transfer & SOP Handover for Internal Teams',
    ],
  },
];
