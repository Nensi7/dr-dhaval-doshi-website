'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  HeartPulse,
  ShieldCheck,
  Activity,
  Stethoscope,
  Microscope,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    setError('');
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
      setSubmitted(false);
    }, 5000);
  };

  const services = [
    {
      icon: ShieldCheck,
      label: 'Primary Prevention Programs',
      desc: 'Risk assessment & management for individuals with family history of heart disease',
      colorIcon: 'text-primary',
      colorBg: 'bg-primary/10',
    },
    {
      icon: HeartPulse,
      label: 'Preventive Heart Disease Checkups',
      desc: 'Comprehensive cardiac screening with ECG, Echo, TMT & blood biomarkers',
      colorIcon: 'text-accent',
      colorBg: 'bg-accent/10',
    },
    {
      icon: Activity,
      label: 'Cardiac Rehabilitation Programs',
      desc: '3-phase rehab for patients post Heart Attack, Angioplasty & Bypass Surgery',
      colorIcon: 'text-secondary',
      colorBg: 'bg-secondary/10',
    },
    {
      icon: Microscope,
      label: 'Advanced Cardiac Diagnostics',
      desc: 'Holter monitoring, Genetic risk markers, Echocardiography & more',
      colorIcon: 'text-primary',
      colorBg: 'bg-primary/10',
    },
    {
      icon: Stethoscope,
      label: 'General Cardiac Consultation',
      desc: 'Personalised expert consultation for all cardiac health concerns',
      colorIcon: 'text-accent',
      colorBg: 'bg-accent/10',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg-contact.jpg)' }}
      >
        <div className="absolute inset-0 bg-primary/60" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Dhaval A. Doshi for expert cardiac care
          </p>
        </div>
      </section>

      {/* Two-Column Info Cards */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT — Get in Touch Today */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch Today</h2>
            <div className="divide-y divide-border">

              {/* Phone */}
              <div className="flex items-start gap-4 py-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">Phone</p> 
                  <a href="tel:+919724394226" className="block font-medium text-primary hover:text-secondary transition-colors">
                    +91 9724394226
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    Kindly mention your contact number and appointment slot when calling for an appointment
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 py-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">Email</p>
                  <a href="mailto:drdoshidhaval@gmail.com" className="block font-medium text-primary hover:text-secondary transition-colors">
                    drdoshidhaval@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 py-5">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">Physical Office</p>
                  <p className="text-foreground text-sm leading-relaxed">
                    Holistic Heart Care<br />
                    403, Sankalp Square-II<br />
                    Near Chirag Motors – Jalaram Crossroads<br />
                    Paldi, Ahmedabad, Gujarat – 380016
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 py-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">Consultation Hours</p>
                  <p className="text-foreground font-medium text-sm">Monday – Saturday</p>
                  <p className="text-muted-foreground text-sm">Morning: 10:00 AM – 1:30 PM</p>
                  <p className="text-muted-foreground text-sm">Evening: 4:00 PM – 7:30 PM</p>
                  <p className="text-xs font-semibold text-accent mt-2">Prior appointment is compulsory</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Response Time + How We Can Help */}
          <div className="flex flex-col gap-6">

            {/* Response Time */}
            <div className="bg-white rounded-2xl shadow-sm border border-border p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Response Time</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'We typically respond to appointment requests within 24 hours',
                  'For urgent matters, please call us directly on +91 9724394226',
                  'We are available Monday to Saturday, 10:00 AM – 7:30 PM',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Can Help */}
            <div className="bg-white rounded-2xl shadow-sm border border-border p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">How We Can Help</h3>
              </div>
              <div className="space-y-4">
                {services.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${svc.colorBg}`}>
                        <Icon className={`w-4 h-4 ${svc.colorIcon}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-snug">{svc.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{svc.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Visit Our Clinic</h2>
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-sm border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5670651503334!2d72.52447357498289!3d23.021568484063435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fe8f9f9f9f%3A0x1234567890abcdef!2sAhmedabad!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="mt-6 text-center">
            <p className="text-muted-foreground mb-3">
              Located in Paldi, Ahmedabad for easy access from all parts of the city
            </p>
            <a href="https://www.google.com/maps/search/Sankalp+Square+2+Paldi+Ahmedabad"
              target="_blank" rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-secondary transition-colors">
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {[
              { q: 'How do I book an appointment?', a: 'You can book an appointment through our online form above, by calling us at +91 9724394226, or by emailing holisticheartcare@gmail.com. We respond within 24 hours.' },
              { q: 'What documents should I bring?', a: 'Please bring your ID, insurance details, and any previous medical reports or test results related to your heart health.' },
              { q: 'How much does a consultation cost?', a: 'Consultation fees vary based on the service. Please contact us directly for detailed pricing information.' },
              { q: 'Do you offer online consultations?', a: 'Currently, we offer in-person consultations at our Ahmedabad clinic. Please contact us for information about future telemedicine services.' },
              { q: 'What if I need to reschedule?', a: 'Please notify us at least 24 hours in advance if you need to reschedule your appointment. Call us at +91 9724394226.' },
            ].map((faq, index) => (
              <details key={index} className="border border-border rounded-xl p-6 bg-gradient-to-br from-primary/5 to-accent/5 group">
                <summary className="font-semibold text-foreground cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform ml-4 text-xl leading-none">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}