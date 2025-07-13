import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import heroCarImage from '@/assets/hero-car.jpg';

export function HeroSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCarImage}
          alt="Luxury car detailing"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className={`transition-all duration-1000 ${
            hasIntersected ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground">Premium Auto Detailing</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Chris Auto</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
                Detailing
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Premium automotive care that brings out the <span className="text-accent font-semibold">true beauty</span> of your vehicle. 
              Professional detailing services with unmatched attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-lg px-8 py-6"
              >
                Book Your Detail
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a href="#services" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-border hover:bg-secondary/50 text-lg px-8 py-6 w-full"
                >
                  View Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className={`animate-bounce ${hasIntersected ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1000`}>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}