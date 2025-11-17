import { siteContent } from '@/data/content';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const { title, subtitle, description, cta, ctaLink } = siteContent.hero;

  return (
    <header id="hero" className="text-center pt-20 pb-16 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
        <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
        {subtitle}
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-8">
        {description}
      </p>
      <a href={ctaLink}>
        <Button size="lg" className="text-lg px-8 py-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
          {cta}
        </Button>
      </a>
    </header>
  );
};

