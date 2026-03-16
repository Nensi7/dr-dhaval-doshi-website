'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');

    // Reset form
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Appointment: 079-48900771', 'Mobile: 9724394226'],
      color: 'primary',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['drdoshidhaval@gmail.com', 'holisticheartcare@gmail.com'],
      color: 'accent',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Holistic Heart Care',
        '403, Sankalp Square-II',
        'Near Chirag Motors-Jalaram Crossroads',
        'Paldi, Ahmedabad, Gujarat, India',
        'Pin - 380016',
      ],
      color: 'secondary',
    },
    {
      icon: Clock,
      title: 'Consultation Hours',
      details: [
        'Monday - Saturday',
        'Morning: 10:00 AM - 1:30 PM',
        'Evening: 4:00 PM - 7:30 PM',
        'Prior appointment is compulsory',
      ],
      color: 'primary',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg-contact.jpg)',
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Appointment</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Schedule your consultation with Dhaval Doshi for expert cardiac care
          </p>
        </div>
      </section>

      {/* Appointment Form Section - Primary Focus */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground mb-2">Quick and Easy Booking</p>
            <p className="text-muted-foreground">
              Fill out the form below and we will get back to you within 24 hours to confirm your appointment
            </p>
          </div>

          {submitted ? (
            <div className="bg-white p-12 rounded-lg shadow-md border-2 border-green-500/30">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-2">
                  Your appointment request has been submitted successfully.
                </p>
                <p className="text-muted-foreground">
                  We will contact you shortly at {formData.phone} to confirm your appointment details.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select a service</option>
                    <option value="primary-prevention">Primary Prevention Programs</option>
                    <option value="checkup">Preventive Heart Disease Checkups</option>
                    <option value="rehabilitation">Cardiac Rehabilitation</option>
                    <option value="diagnostics">Advanced Diagnostics</option>
                    <option value="general">General Consultation</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-base font-bold text-foreground mb-3">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    placeholder="DD/MM/YYYY"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select time slot</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                    <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                    <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
                    <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your cardiac health concerns or any specific questions"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-secondary transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Appointment Request
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We will contact you within 24 hours to confirm your appointment
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className={`bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-${info.color}/20 rounded-lg`}>
                      <Icon className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <h3 className="font-bold text-foreground">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Preferred Contact Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg text-center border border-primary/20">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">For urgent matters or quick inquiries</p>
              <a
                href="tel:+919909910435"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                +91 9909910435
              </a>
            </div>
            <div className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg text-center border border-accent/20">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For detailed inquiries or follow-ups</p>
              <a
                href="mailto:holisticheartcare@gmail.com"
                className="text-accent font-semibold hover:text-secondary transition-colors"
              >
                holisticheartcare@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Visit Our Clinic</h2>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-md border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5670651503334!2d72.52447357498289!3d23.021568484063435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fe8f9f9f9f%3A0x1234567890abcdef!2sAhmedabad!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Located in Paldi, Ahmedabad for easy access from all parts of the city
            </p>
            <a
              href="https://www.google.com/maps/search/Sankalp+Square+2+Paldi+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I book an appointment?',
                a: 'You can book an appointment through our online form above, by calling us at +91 9909910435, or by emailing holisticheartcare@gmail.com. We respond within 24 hours.',
              },
              {
                q: 'What documents should I bring?',
                a: 'Please bring your ID, insurance details, and any previous medical reports or test results related to your heart health.',
              },
              {
                q: 'How much does a consultation cost?',
                a: 'Consultation fees vary based on the service. Please contact us directly for detailed pricing information.',
              },
              {
                q: 'Do you offer online consultations?',
                a: 'Currently, we offer in-person consultations at our Ahmedabad clinic. Please contact us for information about future telemedicine services.',
              },
              {
                q: 'What if I need to reschedule?',
                a: 'Please notify us at least 24 hours in advance if you need to reschedule your appointment. Call us at +91 9909910435.',
              },
            ].map((faq, index) => (
              <details key={index} className="border border-border rounded-lg p-6 group">
                <summary className="font-semibold text-foreground cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
