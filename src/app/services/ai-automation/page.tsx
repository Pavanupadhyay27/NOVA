import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'AI & Automation — Scale Smarter with Intelligent Systems',
  description: 'AI-powered workflows and marketing automation that reduce costs and accelerate growth. Lead automation, AI content, and intelligent analytics.',
};

export default function AIAutomationPage() {
  return (
    <ServicePageTemplate
      eyebrow="AI & Automation"
      title="Work smarter.<br /><span class='accent-gradient'>Scale faster.</span>"
      subtitle="Intelligent systems that do more with less."
      description="We build AI-powered workflows that automate the repetitive, accelerate the strategic, and give you superpowers to grow without scaling headcount proportionally."
      emoji="🤖"
      color="#60A5FA"
      metrics={[
        { val: '-60%', label: 'Operational Cost' },
        { val: '+52%', label: 'Lead Response Speed' },
        { val: '+120%', label: 'Content Output' },
      ]}
      services={[
        { title: 'AI Content Generation', desc: 'AI-powered content workflows for blogs, ads, social media, and email — at scale without losing quality.' },
        { title: 'Lead Qualification AI', desc: 'Intelligent systems that score, qualify, and route leads before they reach your sales team.' },
        { title: 'CRM & Email Automation', desc: 'Smart sequences that nurture leads and customers based on behavior, not just time.' },
        { title: 'Chatbot & AI Support', desc: 'Conversational AI that handles FAQs, qualifies leads, and converts 24/7.' },
        { title: 'Workflow Automation', desc: 'Connect your tools and eliminate manual processes. Build → automate → scale.' },
        { title: 'Predictive Analytics', desc: 'AI that analyzes your data and tells you what to do next — before problems occur.' },
      ]}
      process={[
        { step: '01', title: 'Audit Workflows', desc: 'Map your current processes to find the highest-leverage automation opportunities.' },
        { step: '02', title: 'Design Systems', desc: 'Build the logic, flows, and integrations that power your automation.' },
        { step: '03', title: 'Build & Test', desc: 'Implement, test rigorously, and train your team on the new systems.' },
        { step: '04', title: 'Monitor & Improve', desc: 'Track performance, fix edge cases, and expand automation over time.' },
      ]}
      platforms={['OpenAI / GPT-4', 'Make.com', 'Zapier', 'HubSpot', 'Notion AI', 'Dify', 'n8n', 'Airtable AI']}
    />
  );
}
