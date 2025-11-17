import { siteContent } from '@/data/content';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials } = siteContent;

  return (
    <section id="testimonials" className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        Founder Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border hover:-translate-y-1"
          >
            <Quote className="w-10 h-10 text-primary/60 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              “{testimonial.quote}”
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border border-border/60"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== window.location.origin + '/placeholder.svg') {
                    target.src = '/placeholder.svg';
                  }
                }}
              />
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


