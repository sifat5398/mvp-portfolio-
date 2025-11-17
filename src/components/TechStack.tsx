import * as React from 'react';
import { siteContent } from '@/data/content';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiAmazon,
  SiVercel,
  SiOpenai
} from 'react-icons/si';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  supabase: SiSupabase,
  postgresql: SiPostgresql,
  aws: SiAmazon,
  vercel: SiVercel,
  openai: SiOpenai,
};

export const TechStack = () => {
  const { title, technologies } = siteContent.techStack;

  return (
    <section id="tech-stack" className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        {title}
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = iconMap[tech.icon] || SiReact;
            
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="group flex items-center justify-center p-6 bg-card rounded-2xl border border-border/50 hover:border-border transition-all duration-300 hover:scale-110 cursor-pointer">
                    <IconComponent className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300 grayscale group-hover:grayscale-0" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </section>
  );
};

