import type { Metadata } from 'next';
import HeroSection from './_components/HeroSection';
import QuickConnectMapSection from './_components/QuickConnectMapSection';
import ClientsSection from './_components/ClientsSection';
import MetricsSection from './_components/MetricsSection';
import ServicesSection from './_components/ServicesSection';
import StrategySection from './_components/StrategySection';
import QuotesSection from './_components/QuotesSection';
import TeamPreview from './_components/TeamPreview';
import WhyChooseSection from './_components/WhyChooseSection';
import RealGrowthSection from './_components/RealGrowthSection';
import FAQSection from './_components/FAQSection';
import CTASection from './_components/CTASection';

export const metadata: Metadata = {
  title: 'Digital Marketing company in Bhubaneswar | Nova Spark',
  description: 'Discover top-notch digital marketing company in Bhubaneswar. From SEO to social media, we help you connect with your audience and increase sales!',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <QuickConnectMapSection />
      <MetricsSection />
      <ServicesSection />
      <StrategySection />
      <QuotesSection />
      <TeamPreview />
      <WhyChooseSection />
      <RealGrowthSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
