import { siteContent } from '@/data/content';
import { Button } from '@/components/ui/button';

export const CTA = () => {
  const { heading, subheading, button, link } = siteContent.cta;

  return (
    <section id="contact" className="mb-24">
      <div className="bg-card rounded-3xl p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {heading}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          {subheading}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="text-lg px-8 py-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
            {button}
          </Button>
        </a>
      </div>
    </section>
  );
};

