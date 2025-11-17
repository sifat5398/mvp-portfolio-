import { siteContent } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const { logo, nav, action } = siteContent.header;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          <div className="flex items-center gap-10">
            <a href="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-300">
              {logo}
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href={action.link} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="hidden sm:inline-flex">
                {action.label}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

