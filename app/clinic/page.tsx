'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function ClinicPage() {
  const galleryItems = [
    {
      id: 1,
      title: 'Reception Area',
      description: 'Modern and welcoming reception desk where patients are registered and scheduled',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rn50L2EeHSG8Ey3N9MPhJ6TrBC4xDD.png',
    },
    {
      id: 3,
      title: 'Doctor\'s Consultation Room',
      description: 'Professional office with modern amenities and certifications displaying expertise',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a9fVVSbaQlFX6tq5PtvgiG7fUHBP2t.png',
    },
    {
      id: 4,
      title: 'TMT Machine Room',
      description: 'Treadmill Stress Test (TMT) room with advanced equipment for cardiac stress testing and patient monitoring',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9SmNEfAvEjJHg0sOZRjbnJikE1p9E1.png',
    },
    {
      id: 5,
      title: 'Patient Education & Counseling',
      description: 'Community health education and preventive cardiology awareness sessions with patients',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CCXOiKdAbF6mcgLciYhJJkf7wZ6eEb.png',
    },
    {
      id: 6,
      title: 'ECG Machine Room',
      description: 'Advanced ECG diagnostic equipment for comprehensive cardiac assessment and monitoring',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2P6eD9j7QB87qsyz4B0C2wHw7hqXhw.png',
    },
  ];

  const facilities = [
    {
      icon: '🏥',
      title: 'Modern Clinic Setup',
      description: 'State-of-the-art facility with professional infrastructure and comfortable environment',
    },
    {
      icon: '📊',
      title: 'Advanced Diagnostics',
      description: 'ECG, 2D-Echo, TMT, and other advanced cardiac diagnostic equipment available',
    },
    {
      icon: '👨‍⚕️',
      title: 'Expert Consultation',
      description: 'Personalized consultation rooms for one-on-one patient care and counseling',
    },
    {
      icon: '📚',
      title: 'Health Education',
      description: 'Educational materials and awareness programs for preventive cardiology',
    },
    {
      icon: '🪑',
      title: 'Patient Comfort',
      description: 'Comfortable waiting areas with modern amenities for patient convenience',
    },
    {
      icon: '👥',
      title: 'Professional Staff',
      description: 'Dedicated and trained medical professionals for seamless patient experience',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rn50L2EeHSG8Ey3N9MPhJ6TrBC4xDD.png)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Facilities</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A modern, welcoming healthcare facility dedicated to comprehensive cardiac care
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">World-Class Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-linear-to-br from-primary/5 to-accent/5 p-6 rounded-lg border border-primary/20 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{facility.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Clinic Tour</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and professional environment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">About Our Clinic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Location</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Holistic Heart Care</strong><br />
                403, Sankalp Square-II<br />
                Near Chirag Motors-Jalaram Crossroads<br />
                Paldi, Ahmedabad, Gujarat, India<br />
                Pin - 380016
              </p>
              <h4 className="font-semibold text-foreground mb-2">Contact</h4>
              <p className="text-muted-foreground">
                Phone: +91 9909910435<br />
                Appointment: 079-48900771<br />
                Mobile: 9724394226<br />
                Email: drdoshidhaval@gmail.com<br />
                holisticheartcare@gmail.com
              </p>
            </div>
            <div className="bg-linear-to-br from-accent/5 to-secondary/5 p-8 rounded-lg border border-accent/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Consultation Hours</h3>
              <p className="text-muted-foreground mb-6">
                <strong>Monday - Saturday</strong><br />
                Morning: 10:00 AM - 1:30 PM<br />
                Evening: 4:00 PM - 7:30 PM<br />
                <span className="text-sm mt-2 block text-primary font-semibold">Prior appointment is compulsory</span>
              </p>
              <h4 className="font-semibold text-foreground mb-2">Services Available</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Primary Prevention Programs</li>
                <li>✓ Preventive Heart Disease Checkups</li>
                <li>✓ Cardiac Rehabilitation</li>
                <li>✓ Advanced Diagnostics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-linear-to-r from-primary to-accent">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Visit Us?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Schedule your appointment today for comprehensive cardiac care
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-muted transition-colors font-semibold inline-block"
          >
            Book Appointment Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
