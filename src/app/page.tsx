import type { Metadata } from 'next';
import HeroSection from './_components/HeroSection';
import ClientsSection from './_components/ClientsSection';
import MetricsSection from './_components/MetricsSection';
import ServicesSection from './_components/ServicesSection';
import StrategySection from './_components/StrategySection';
import FeaturedWork from './_components/FeaturedWork';
import QuotesSection from './_components/QuotesSection';
import TeamPreview from './_components/TeamPreview';
import WhyChooseSection from './_components/WhyChooseSection';
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
      <FeaturedWork />
      <QuotesSection />
      <TeamPreview />
      <WhyChooseSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
