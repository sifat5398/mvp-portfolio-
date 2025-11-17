import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 lg:px-8">
        <Hero />
        <Features />
        <About />
        <TechStack />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
