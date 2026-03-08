'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Heart, CheckCircle, Users, Stethoscope } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: 'Primary Prevention',
      description: 'Proactive heart health programs to prevent cardiac diseases before they start.',
      link: '/services',
    },
    {
      icon: Stethoscope,
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art cardiac imaging and diagnostic tools for accurate assessment.',
      link: '/services',
    },
    {
      icon: CheckCircle,
      title: 'Cardiac Rehabilitation',
      description: 'Comprehensive recovery programs following cardiac procedures.',
      link: '/services',
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Personalized care from an experienced interventional cardiologist.',
      link: '/about',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative flex-1 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Keep Your Heart <span className="text-primary">Young Forever</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 text-balance">
              Expert Cardiac Care by Dr. Dhaval A. Doshi, Consultant & Interventional Cardiologist. Preventive care, rehabilitation, and advanced diagnostics for optimal heart health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold flex items-center justify-center gap-2"
              >
                Book Appointment
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-3xl"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ARJkMWDo8h8gDWzmFX3ivFdYuselvN.png"
                alt="Holistic Heart Care"
                className="relative w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Why Choose Holistic Heart Care?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">Gold Medalist</div>
              <p className="text-muted-foreground">
                D.M. (Cardiology) & MBBS
              </p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">15+ Years</div>
              <p className="text-muted-foreground">
                Experience in cardiology
              </p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">Cleveland Clinic</div>
              <p className="text-muted-foreground">
                International observer experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} href={feature.link}>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all h-full cursor-pointer">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2"
            >
              View All Services in Detail
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Our mission is to build a happy and a healthy heart, free from cardiovascular diseases by primary and secondary prevention. We primarily focus on promotion of good health by healthy lifestyle, stress management, positive attitude and nutritious eating habits.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="font-semibold text-primary">Prevention Strategies including Lifestyle Modification for Heart Attack leads to more than 50% reduction in Heart Disease related mortality</span>
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Healthy Heart = Healthy You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-4">Healthy Heart Choices for Everyone, Everywhere</h3>
              <p className="text-muted-foreground">
                We believe that heart health is achievable for all individuals regardless of their background. Our comprehensive programs and supportive environment make cardiac wellness accessible and sustainable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="text-xl font-bold text-foreground mb-4">Evidence-Based Prevention</h3>
              <p className="text-muted-foreground">
                Healthy lifestyle modifications including diet, exercise, stress management, and avoiding tobacco can reduce heart disease mortality by over 50%. Our programs are built on this proven evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Heart Health?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Schedule your consultation with Dr. Dhaval A. Doshi today
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-muted transition-colors font-semibold inline-block"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
