import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-foreground">Chris</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-1">Auto</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premium automotive detailing services that bring out the true beauty of your vehicle. 
              Quality, precision, and care in every detail.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Chris-Expert-Car-Detailing/61558153484338/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {[
                'Premium Wash & Wax',
                'Paint Protection',
                'Interior Detailing',
                'Full Detail Package',
                'Maintenance Plans',
                'Luxury Concierge'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/place/7319+Mossborough+Ct,+Charlotte,+NC+28227,+USA/@35.1879606,-80.7153427,18.21z/data=!4m6!3m5!1s0x88542218bc75f7f3:0x1c02e9a54aef270e!8m2!3d35.1881469!4d-80.7148578!16s%2Fg%2F11sv04_fsn?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <div>7319 Mossborough Ct</div>
                  <div>Charlotte, NC 28227</div>
                  <div>United States</div>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+17548027658" className="text-muted-foreground text-sm hover:text-primary transition-colors">+1 (754) 802-7658</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@chrisexpertcardetailing.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">chrisexpertcardetailing.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>Saturday: 8AM-5PM</div>
                  <div>Sunday: 10AM-4PM</div>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 rounded-lg p-3 mt-4">
              <p className="text-accent text-sm font-medium">
                Emergency services available 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Chris Auto Detailing. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}