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
    id: 'leads',
    metric: 'Monthly Qualified Leads',
    shortLabel: 'Lead Velocity',
    before: '12 – 18 leads / mo',
    after: '95 – 130 leads / mo',
    gain: '+680%',
    timeframe: '60-Day Sprint',
    desc: 'Shifted from passive referrals to active high-intent Google search capture and precision Meta Ads funnels.',
    lever: 'Full-funnel intent keyword mapping & WhatsApp 60-second instant lead routing.',
  },
  {
    id: 'cac',
    metric: 'Customer Acquisition Cost (CAC)',
    shortLabel: 'Acquisition Cost',
    before: '₹750 – ₹1,200 / lead',
    after: '₹180 – ₹260 / lead',
    gain: '-74%',
    timeframe: '45-Day Sprint',
    desc: 'Eliminated wasted broad ad spend with hyper-local radius bidding, negative keyword pruning, and lookalike cohorts.',
    lever: 'Algorithmic bid pacing and high-converting native instant lead forms.',
  },
  {
    id: 'maps',
    metric: 'Google Maps 3-Pack Visibility',
    shortLabel: 'Local 3-Pack Rank',
    before: 'Position #12 (Invisible)',
    after: 'Position #1 Across Clusters',
    gain: 'Top 3-Pack',
    timeframe: '30-Day Sprint',
    desc: 'Localized citation architecture, geo-tagged photo uploads, and automated SMS review acceleration engine.',
    lever: 'Structured local schema markup and 450+ verified 5-star Google reviews.',
  },
  {
    id: 'speed',
    metric: 'Website Page Load Speed',
    shortLabel: 'Site Load Speed',
    before: '4.8s (High Bounce Rate)',
    after: '0.65s (Sub-Second Next.js)',
    gain: '7.3X Faster',
    timeframe: '14-Day Sprint',
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
  },
  {
    num: '02',
    title: 'Conversion Architecture',
    badge: 'Day 4 – 7',
    desc: 'We engineer high-converting landing pages, instant WhatsApp routing funnels, and tracking attribution before spending a single rupee on ads.',
  },
  {
    num: '03',
    title: 'High-Velocity Creative Testing',
    badge: 'Day 8 – 21',
    desc: 'We launch 20+ visual and copy variations across Google Search and Meta Ads to identify the winning combination with the lowest acquisition cost.',
  },
  {
    num: '04',
    title: 'Compounding Scale & Automation',
    badge: 'Day 22+',
    desc: 'We scale winning ad sets, amplify organic SEO rankings, and automate lead nurture workflows to compound monthly revenue predictably.',
  },
];

export interface GeoLocationItem {
  code: string;
  area: string;
  shortArea: string;
  coords: string;
  vertical: string;
  shortVertical: string;
  stat: string;
  tag: string;
  searches: string;
  searchesVal: string;
  searchesLabel: string;
  cpl: string;
  cplVal: string;
  cplLabel: string;
  leadShare: string;
  leadShareVal: string;
  leadShareLabel: string;
  liftVal: string;
  liftLabel: string;
  landmarks: string[];
  clientSnippet: string;
  dominantKeywords: string[];
}

export const geoImpactLocations: GeoLocationItem[] = [
  {
    code: '01',
    area: 'Patia / Infocity',
    shortArea: 'Patia',
    coords: '20.3533° N, 85.8197° E',
    vertical: 'Real Estate & Tech Startups',
    shortVertical: 'Real Estate & Tech',
    stat: '+320% Leads',
    tag: 'High-Intent Search',
    searches: '48,000+ monthly searches',
    searchesVal: '48,000+',
    searchesLabel: 'Monthly Search Queries',
    cpl: '₹140 CPL avg',
    cplVal: '₹140',
    cplLabel: 'Average Qualified CPL',
    leadShare: '94% Top-of-Page Share',
    leadShareVal: '94%',
    leadShareLabel: 'Top-of-Page SERP Share',
    liftVal: '+320%',
    liftLabel: 'Verified Inbound Leads',
    landmarks: ['Infocity IT Hub', 'KIIT Square', 'Silicon Corridor', 'Patia Station Road'],
    clientSnippet: 'Utkal Heights & 3 Tech Brands Active',
    dominantKeywords: ['flats in patia', 'it offices bhubaneswar', 'luxury villas patia'],
  },
  {
    code: '02',
    area: 'Saheed Nagar',
    shortArea: 'Saheed Nagar',
    coords: '20.2917° N, 85.8453° E',
    vertical: 'Healthcare & Specialized Clinics',
    shortVertical: 'Healthcare & Clinics',
    stat: '#1 Google Pack',
    tag: 'Local Maps SEO',
    searches: '36,000+ medical queries',
    searchesVal: '36,000+',
    searchesLabel: 'Medical Queries / mo',
    cpl: '₹190 per appointment',
    cplVal: '₹190',
    cplLabel: 'Per Appointment Booking',
    leadShare: '#1 Across 14 Keywords',
    leadShareVal: '#1 Rank',
    leadShareLabel: 'Across 14 Specialties',
    liftVal: '5.0★',
    liftLabel: 'Google 3-Pack Verified',
    landmarks: ['Janpath Corridor', 'Vani Vihar Rd', 'Bhawani Mall', 'Hospital Row'],
    clientSnippet: 'CareFirst Multi-Speciality Clinic',
    dominantKeywords: ['clinic saheed nagar', 'best doctor bhubaneswar', 'diagnostic centre'],
  },
  {
    code: '03',
    area: 'Chandrasekharpur',
    shortArea: 'CS Pur',
    coords: '20.3241° N, 85.8169° E',
    vertical: 'B2B & Commercial Infrastructure',
    shortVertical: 'B2B & Infrastructure',
    stat: '+180% RFQ Lift',
    tag: 'Next.js Web & B2B SEO',
    searches: '22,000+ B2B contract queries',
    searchesVal: '22,000+',
    searchesLabel: 'B2B Contract Inquiries',
    cpl: '₹420 B2B RFQ lead',
    cplVal: '₹420',
    cplLabel: 'Verified B2B RFQ Lead',
    leadShare: 'Top 3 Commercial Results',
    leadShareVal: 'Top 3',
    leadShareLabel: 'Commercial SERP Results',
    liftVal: '+180%',
    liftLabel: 'Verified RFQ Deal Lift',
    landmarks: ['Damana Square', 'CS Pur Housing', 'Sailashree Vihar', 'Industrial Area'],
    clientSnippet: 'Kalinga Steel & Infrastructure',
    dominantKeywords: ['steel supplier odisha', 'commercial contractor', 'b2b infrastructure'],
  },
  {
    code: '04',
    area: 'Khandagiri & Cuttack Rd',
    shortArea: 'Khandagiri',
    coords: '20.2588° N, 85.7869° E',
    vertical: 'Education, Academies & Colleges',
    shortVertical: 'Education & Academies',
    stat: '400+ Admissions',
    tag: 'Meta & WhatsApp Ads',
    searches: '54,000+ student searches',
    searchesVal: '54,000+',
    searchesLabel: 'Student & Parent Searches',
    cpl: '₹140 per enrolled lead',
    cplVal: '₹140',
    cplLabel: 'Per Enrolled Lead',
    leadShare: '88% Parent Reach',
    leadShareVal: '88%',
    leadShareLabel: 'Parent Cohort Reach',
    liftVal: '400+',
    liftLabel: 'Verified Admissions',
    landmarks: ['Khandagiri Square', 'Baramunda Bus Stand', 'Jagannath Temple Rd', 'Cuttack Highway'],
    clientSnippet: 'Apex National Academy',
    dominantKeywords: ['coaching bhubaneswar', 'exam batch', 'jee coaching'],
  },
  {
    code: '05',
    area: 'Jaydev Vihar & Nayapalli',
    shortArea: 'Jaydev Vihar',
    coords: '20.2974° N, 85.8249° E',
    vertical: 'Events, Luxury Decor & Retail',
    shortVertical: 'Events & Luxury Retail',
    stat: '5X View Velocity',
    tag: 'Social Media & Branding',
    searches: '28,000+ event searches',
    searchesVal: '28,000+',
    searchesLabel: 'Luxury Event Searches',
    cpl: '₹250 per booking inquiry',
    cplVal: '₹250',
    cplLabel: 'Per Booking Inquiry',
    leadShare: '72% Video Reel Viral Share',
    leadShareVal: '72%',
    leadShareLabel: 'Video Reel Viral Reach',
    liftVal: '5X',
    liftLabel: 'Inquiry View Velocity',
    landmarks: ['Jaydev Vihar Overbridge', 'IRC Village', 'Pal Heights Area', 'Mayfair Circle'],
    clientSnippet: 'Ekatraa Bespoke Events',
    dominantKeywords: ['wedding decorator bhubaneswar', 'event planner odisha', 'luxury decor'],
  },
  {
    code: '06',
    area: 'Puri & Konark Highway',
    shortArea: 'Puri Circuit',
    coords: '19.8135° N, 85.8312° E',
    vertical: 'Tourism, Resorts & Hospitality',
    shortVertical: 'Tourism & Resorts',
    stat: '100% Bookings',
    tag: 'Google Travel & Retargeting',
    searches: '65,000+ tourist queries',
    searchesVal: '65,000+',
    searchesLabel: 'Tourist Circuit Searches',
    cpl: '₹28 per tour booking lead',
    cplVal: '₹28',
    cplLabel: 'Per Tour Booking Lead',
    leadShare: '92% Weekend Occupancy',
    leadShareVal: '92%',
    leadShareLabel: 'Weekend Occupancy Share',
    liftVal: '100%',
    liftLabel: 'Tour Circuit Bookings',
    landmarks: ['Marine Drive Puri', 'Golden Beach', 'Konark Sun Temple', 'Pipili Bypass'],
    clientSnippet: 'Weekend Bhraman Tour Planner',
    dominantKeywords: ['puri tour package', 'resort in puri', 'weekend trips from bhubaneswar'],
  },
];

export const industryVerticals = [
  {
    id: 'real-estate',
    name: 'Real Estate & Builders',
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
    role: 'Director of Marketing',
    company: 'Utkal Heights Real Estate',
    location: 'Patia, Bhubaneswar',
    stat: '3X Inbound Buyers',
    image: '/images/team/exec_4.jpg',
  },
  {
    quote: 'Our clinic went from page 2 on Google Maps to #1 in Saheed Nagar. The phone calls from patients looking for specialized treatments nearly doubled in our first 6 weeks of partnering with them.',
    author: 'Dr. S. K. Patnaik',
    role: 'Medical Director',
    company: 'CareFirst Multi-Speciality Clinic',
    location: 'Saheed Nagar, Bhubaneswar',
    stat: '+190% Direct Calls',
    image: '/images/team/exec_2.png',
  },
  {
    quote: 'We enrolled over 400 students for our competitive batches at an unheard-of ₹140 CPL. Their WhatsApp counselor automation ensured no parent inquiry was left waiting.',
    author: 'Anita Das',
    role: 'Academic Head',
    company: 'Apex National Academy',
    location: 'Acharya Vihar, Bhubaneswar',
    stat: '400+ Admissions',
    image: '/images/coo_priya.jpg',
  },
];

export const roiTiers = [
  {
    id: 'starter',
    tier: 'Starter Local',
    spendLabel: '₹25,000 / mo',
    monthlySpend: 25000,
    projectedLeads: '45 – 65 Leads',
    projectedRevenue: '₹1.8L – ₹2.5L',
    roas: '5.2X ROAS',
    channels: '50% Google Search • 30% Meta Ads • 20% WhatsApp Funnel',
    turnaround: 'First Leads in 72 Hours',
    recommendedFor: 'Local clinics, boutique builders, single-location retail',
  },
  {
    id: 'growth',
    tier: 'Growth Accelerator',
    spendLabel: '₹50,000 / mo',
    monthlySpend: 50000,
    projectedLeads: '110 – 160 Leads',
    projectedRevenue: '₹4.5L – ₹6.2L',
    roas: '5.8X ROAS',
    channels: '40% Google Search • 40% Meta Ads • 20% Retargeting & WhatsApp',
    turnaround: 'First Leads in 48 Hours',
    recommendedFor: 'Multi-speciality clinics, coaching institutes, D2C brands',
  },
  {
    id: 'scale',
    tier: 'Scale Tier',
    spendLabel: '₹1,00,000 / mo',
    monthlySpend: 100000,
    projectedLeads: '240 – 340 Leads',
    projectedRevenue: '₹9.8L – ₹14.5L',
    roas: '6.4X ROAS',
    channels: '45% Google Search & Shopping • 35% Meta Ads • 20% Automated WhatsApp',
    turnaround: 'Immediate 24-Hour Launch',
    recommendedFor: 'Real estate developers, regional colleges, e-commerce scale',
  },
  {
    id: 'dominator',
    tier: 'Market Dominator',
    spendLabel: '₹2,50,000+ / mo',
    monthlySpend: 250000,
    projectedLeads: '650+ Leads',
    projectedRevenue: '₹26L – ₹42L',
    roas: '7.1X ROAS',
    channels: 'Omnichannel: Google Search + Meta Ads + Local SEO + Next.js Platform',
    turnaround: 'Dedicated Senior Growth Pod',
    recommendedFor: 'Large enterprise builders, hospitals, statewide brands',
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
