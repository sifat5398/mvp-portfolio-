import { siteContent } from '@/data/content';

// Image paths to try in order - add your image to one of these locations
const IMAGE_PATHS = [
  '/lovable-uploads/about-image.jpg',
  '/lovable-uploads/about-image.png',
  '/lovable-uploads/about-image.webp',
  '/about-image.jpg',
  '/about-image.png',
  '/about-image.webp'
];

export const About = () => {
  const { bio, stats } = siteContent.about;
  
  // Use the first path as default
  const imagePath = IMAGE_PATHS[0];

  return (
    <section id="about" className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        About Me
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-md">
              <img
                src={imagePath}
                alt="Muyedur Rahman"
                className="w-full h-auto rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 object-cover"
                data-path-index="0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const currentIndex = parseInt(target.getAttribute('data-path-index') || '0', 10);
                  
                  // Try next image path in the list
                  if (currentIndex < IMAGE_PATHS.length - 1) {
                    const nextIndex = currentIndex + 1;
                    target.setAttribute('data-path-index', nextIndex.toString());
                    target.src = IMAGE_PATHS[nextIndex];
                  } else {
                    // All paths failed, use placeholder
                    if (target.src !== window.location.origin + '/placeholder.svg') {
                      target.src = '/placeholder.svg';
                    }
                  }
                }}
              />
            </div>
          </div>
          
          {/* Bio */}
          <div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {bio}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border hover:-translate-y-1 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

