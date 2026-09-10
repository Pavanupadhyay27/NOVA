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
  title: 'Nova Spark — Digital Growth Agency in Bhubaneswar',
  description: 'We build brands that move people. Strategy, creativity, technology and performance marketing engineered to turn attention into measurable growth.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <MetricsSection />
      <ServicesSection />
      <StrategySection />
      <QuotesSection />
      <TeamPreview />
      <WhyChooseSection />
      <RealGrowthSection />
      <QuickConnectMapSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
