import { siteContent } from '@/data/content';
import { Github, Linkedin, Twitter } from 'lucide-react';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
};

export const Footer = () => {
  const { name, links } = siteContent.footer;

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {links.map((link, index) => {
              const IconComponent = iconMap[link.label as keyof typeof iconMap] || Github;
              
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-card hover:bg-accent text-foreground rounded-full transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md border border-border/50"
                  aria-label={link.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

