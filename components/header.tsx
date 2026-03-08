'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/clinic', label: 'Our Facilities' },
    { href: '/health-education', label: 'Know your health' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Clinic Name */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Pgqfe4GAezgU9Sh9OzLuALkfXYqXXo.png" alt="Holistic Heart Care" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <div className="font-bold text-primary text-lg leading-tight">Holistic</div>
            <div className="font-bold text-accent text-lg leading-tight">Heart Care</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary font-medium transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-medium text-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary font-medium transition-colors py-2 px-4 rounded hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-secondary transition-colors font-medium text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
