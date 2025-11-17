import { siteContent } from '@/data/content';
import { Rocket, Bot, Zap } from 'lucide-react';

const iconMap = {
  rocket: Rocket,
  robot: Bot,
  zap: Zap,
};

export const Features = () => {
  const { features } = siteContent;

  return (
    <section id="features" className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        What I Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Rocket;
          
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
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

