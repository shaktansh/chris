import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Shield, Droplets, Package, Car, Wrench } from 'lucide-react';
import servicesBg from '@/assets/services-bg.jpg';

const services = [
  {
    icon: Sparkles,
    title: "Auto Detailing Work",
    description: "Comprehensive automotive detailing services to restore and maintain your vehicle's appearance.",
    price: "From $199",
    features: ["Complete vehicle assessment", "Professional grade products", "Quality guarantee", "Expert technicians"]
  },
  {
    icon: Droplets,
    title: "Car Window Cleaning",
    description: "Crystal clear window cleaning for optimal visibility and pristine appearance.",
    price: "From $49",
    features: ["Interior & exterior cleaning", "Streak-free finish", "Professional squeegees", "Rain-X treatment available"]
  },
  {
    icon: Shield,
    title: "Interior Detailing",
    description: "Deep cleaning and conditioning of all interior surfaces for a like-new feel.",
    price: "From $149",
    features: ["Steam cleaning", "Leather conditioning", "Fabric protection", "Odor elimination"]
  },
  {
    icon: Package,
    title: "Full-Service Packages",
    description: "Complete interior and exterior transformation with premium products and techniques.",
    price: "From $399",
    features: ["Everything included", "Paint correction", "Interior protection", "Premium finish"]
  },
  {
    icon: Car,
    title: "Exterior Detailing",
    description: "Complete exterior restoration including wash, wax, and paint enhancement services.",
    price: "From $179",
    features: ["Hand wash & dry", "Clay bar treatment", "Paint correction", "Protective wax coating"]
  },
  {
    icon: Wrench,
    title: "Wheel and Rim Detailing",
    description: "Specialized cleaning and protection for wheels, rims, and tire enhancement.",
    price: "From $89",
    features: ["Brake dust removal", "Rim polishing", "Tire conditioning", "Protective coating"]
  }
];

export function ServicesSection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-card overflow-hidden"
      id="services"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={servicesBg}
          alt="Professional car detailing services"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          hasIntersected ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="bg-gradient-primary bg-clip-text text-transparent">Detailing Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic maintenance to complete transformations, we offer comprehensive automotive care 
            services designed to exceed your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                hasIntersected 
                  ? 'animate-fade-in-up opacity-100' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-accent">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}