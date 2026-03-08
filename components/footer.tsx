import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-accent/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Pgqfe4GAezgU9Sh9OzLuALkfXYqXXo.png" alt="Holistic Heart Care" className="h-8 w-auto" />
              <h3 className="font-bold text-primary">Holistic Heart Care</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Expert Cardiac Care by Dhaval Doshi, Consultant & Interventional Cardiologist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Primary Prevention</li>
              <li>Heart Checkups</li>
              <li>Cardiac Rehabilitation</li>
              <li>Advanced Diagnostics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-2 text-sm">
                <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">+91 99099 10435</p>
                  <p className="text-muted-foreground">+91 99099 10436</p>
                </div>
              </div>
              <div className="flex gap-2 text-sm">
                <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">drdoshidhaval@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 Holistic Heart Care. All rights reserved. @2026
          </p>
          {/* <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
