import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export function Gallery() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  // Use images from public folder
  const galleryImages = Array.from({ length: 12 }, (_, i) => {
    const imgNumber = i + 1;
    // Skip image 2
    if (imgNumber === 2) {
      return {
        id: imgNumber,
        title: `Gallery Image ${imgNumber}`,
        description: "Professional car detailing work",
        src: null,
      };
    }
    // Only images 1, 3, 4, 5, 6, 7 exist in public
    const src = [1, 3, 4, 5, 6, 7].includes(imgNumber) ? `/${imgNumber}.jpg` : null;
    return {
      id: imgNumber,
      title: `Gallery Image ${imgNumber}`,
      description: "Professional car detailing work",
      src,
    };
  });

  // Modal state for lightbox
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  // Placeholder element for reuse
  const Placeholder = ({ title }: { title: string }) => (
    <div className="aspect-square bg-gradient-subtle border-2 border-dashed border-border/50 flex flex-col items-center justify-center text-muted-foreground hover:border-primary/30 transition-colors group-hover:bg-muted/20">
      <Plus className="w-12 h-12 mb-2 opacity-50" />
      <p className="text-sm font-medium">Add Image</p>
      <p className="text-xs opacity-70">{title}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our premium automotive detailing work. 
              See the transformation and attention to detail that sets us apart.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={image.id}
                className={`group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-700 hover:shadow-card ${
                  hasIntersected 
                    ? 'animate-fade-in-up opacity-100' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {image.src ? (
                    <img
                      src={image.src}
                      alt={image.title}
                      className="aspect-square object-cover w-full h-full cursor-pointer"
                      onClick={() => setLightbox({ src: image.src!, title: image.title })}
                      onError={e => {
                        // Hide broken image, show placeholder
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Placeholder for image or fallback */}
                  <div style={{ display: image.src ? 'none' : 'flex' }}>
                    <Placeholder title={image.title} />
                  </div>
                  {/* Image info overlay */}
                  <div className="p-4">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                    <p className="text-xs text-muted-foreground">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 ${
            hasIntersected ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="bg-gradient-card border-primary/20 shadow-hero max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Vehicle?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today to schedule your premium detailing service and 
                  see your car join our gallery of satisfied customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      Book Your Detail
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-border hover:bg-secondary/50">
                    View Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setLightbox(null)}>
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-black text-2xl" onClick={() => setLightbox(null)}>&times;</button>
            <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto rounded" />
            <div className="mt-2 text-center font-semibold">{lightbox.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}