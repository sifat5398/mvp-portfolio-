import { siteContent } from '@/data/content';
import { Code, Brain, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap = {
  code: Code,
  brain: Brain,
  lightbulb: Lightbulb,
};

export const Services = () => {
  const { services } = siteContent;

  return (
    <section id="services" className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
          
          return (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full">
                    {service.cta}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

