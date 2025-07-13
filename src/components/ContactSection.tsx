import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail, Calendar } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["7319 Mossborough Ct", "Charlotte, NC 28227", "United States"],
    link: "https://www.google.com/maps/place/7319+Mossborough+Ct,+Charlotte,+NC+28227,+USA/@35.1879606,-80.7153427,18.21z/data=!4m6!3m5!1s0x88542218bc75f7f3:0x1c02e9a54aef270e!8m2!3d35.1881469!4d-80.7148578!16s%2Fg%2F11sv04_fsn?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (754) 802-7658"],
    link: "tel:+17548027658"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 8AM-6PM", "Saturday: 8AM-5PM", "Sunday: 10AM-4PM"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["chrisexpertcardetailing.com"],
    link: "mailto:info@chrisexpertcardetailing.com"
  }
];

export function ContactSection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-hero"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          hasIntersected ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> Your Vehicle?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch today to schedule your premium detailing service. 
            We're here to answer all your questions and provide expert care for your vehicle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <Card 
                key={item.title}
                className={`bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-700 hover:shadow-card ${
                  hasIntersected 
                    ? 'animate-fade-in-up opacity-100' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {item.details.map((detail) => (
                      item.link ? (
                        <a 
                          key={detail} 
                          href={item.link}
                          target={item.title === "Location" ? "_blank" : undefined}
                          rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      )
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`transition-all duration-1000 ${
            hasIntersected ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="bg-gradient-card border-primary/20 shadow-hero">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">
                  Book Your Detail Today
                </CardTitle>
                <p className="text-muted-foreground">
                  Experience the difference that professional automotive care makes. 
                  Call us now or use our online booking system to schedule your appointment.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Online
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1 border-border hover:bg-secondary/50"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </Button>
                </div>
                
                <div className="bg-muted/20 rounded-lg p-4 mt-6">
                  <p className="text-sm text-center text-muted-foreground">
                    <span className="text-accent font-semibold">Free estimates</span> • 
                    <span className="text-accent font-semibold"> Same-day service available</span> • 
                    <span className="text-accent font-semibold"> 100% satisfaction guarantee</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}