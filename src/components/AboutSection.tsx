import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';

const stats = [
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Clock, value: "24hr", label: "Turnaround" },
  { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" }
];

export function AboutSection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-muted/20"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${
            hasIntersected ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            <Badge variant="outline" className="mb-6 text-accent border-accent/30">
              About Chris Auto Detailing
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Passion for <span className="bg-gradient-primary bg-clip-text text-transparent">Perfection</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over 8 years of experience in premium automotive care, Chris Auto Detailing 
                has built a reputation for excellence in the automotive detailing industry. Our passion 
                for perfection drives us to deliver results that exceed expectations every time.
              </p>
              
              <p>
                We use only the finest products and cutting-edge techniques to ensure your vehicle 
                receives the care it deserves. From classic cars to modern luxury vehicles, 
                we treat every car as if it were our own.
              </p>
              
              <p className="text-foreground font-semibold">
                "Your vehicle is more than transportation – it's an investment, and we're here to protect it."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center transition-all duration-700 ${
                    hasIntersected 
                      ? 'animate-scale-in opacity-100' 
                      : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 ${
            hasIntersected ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img 
                src={aboutBg}
                alt="Professional car detailing craftsmanship"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            
            {/* Floating quality badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-card p-6 rounded-xl shadow-card border border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">A+</div>
                <div className="text-sm text-muted-foreground">Quality Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}