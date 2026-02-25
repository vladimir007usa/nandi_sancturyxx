import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sanctuary-forest text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">Nandi Sanctuary</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              A haven for rescued animals in the heart of Bengal. We believe every living being deserves love, care, and protection.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/peopleforanimalsinternational" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/nandi_sanctuary?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@NandiSanctuary?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/our-work" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Our Mission</Link>
              </li>
              <li>
                <Link to="/our-work" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">What We Do</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Support Us</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/donate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Donate Now</Link>
              </li>
              <li>
                <Link to="/donate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Sponsor an Animal</Link>
              </li>
              <li>
                <Link to="/donate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Monthly Giving</Link>
              </li>
              <li>
                <Link to="/stories" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Partner With Us</Link>
              </li>
              <li>
                <Link to="/animal-rights" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Animals legal rights</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-sanctuary-gold" />
                <span className="text-primary-foreground/80 text-sm">
                  Sri Dham Mayapur, Nadia,<br />West Bengal, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sanctuary-gold" />
                <span className="text-primary-foreground/80 text-sm">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sanctuary-gold" />
                <span className="text-primary-foreground/80 text-sm">pfa.care@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 Nandi Sanctuary. All rights reserved.</p>
            <p className="text-center md:text-right">
              Operated by People for Animals International • Protecting life with love
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;