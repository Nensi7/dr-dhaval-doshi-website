'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Stethoscope, Award, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
export default function Services() {
  const services = [
    {
      title: 'Primary Prevention Programs',
      icon: Heart,
      color: 'primary',
      description: 'Risk assessment and management for healthy young adults with family history of heart disease',
      features: [
        'Comprehensive cardiovascular risk assessment',
        'Genetic risk evaluation',
        'Family history analysis',
        'Personalized prevention strategies',
        'Lifestyle counseling and modification',
        'Regular follow-up and monitoring',
      ],
      details: 'Our primary prevention programs are designed to identify individuals at risk of developing heart disease before symptoms appear. We conduct thorough evaluations including family history, lifestyle factors, and genetic markers. Based on this assessment, we develop personalized prevention strategies that include diet modification, exercise recommendations, stress management, and appropriate medication when needed.',
    },
    {
      title: 'Preventive Heart Disease Checkups',
      icon: Stethoscope,
      color: 'accent',
      description: 'Comprehensive cardiac screening with advanced diagnostic tools',
      features: [
        'Complete Physical Examination',
        'Blood Pressure Monitoring',
        'Weight Management Counseling',
        'Blood Tests (Lipid Profile, Glucose, etc.)',
        'Electrocardiography (ECG)',
        '2D Echocardiography (Heart Ultrasound)',
        'Treadmill Stress Test (TMT)',
        'Lifestyle & Diet Counseling',
      ],
      details: 'Our comprehensive checkup packages provide a complete cardiac assessment using state-of-the-art diagnostic tools. We evaluate your heart structure, function, and electrical activity. Blood tests assess risk factors like cholesterol and blood sugar levels. Stress testing evaluates how your heart responds to physical activity. Based on findings, we provide personalized recommendations for heart health maintenance.',
    },
    {
      title: 'Cardiac Rehabilitation Programs',
      icon: CheckCircle,
      color: 'secondary',
      description: 'Specialized 3-phase rehabilitation for patients with Heart Attack, Angioplasty, and Cardiac Bypass Surgery',
      features: [
        'Special Counseling to decrease risk of secondary events',
        'Prevention of Heart Attack, Stent Blockage, Graft Blockage',
        'Individual Exercise Programs',
        'Stress Management Training',
        'Diet Counseling & Nutrition Management',
        'Medication Management & Compliance',
        'Supervised Exercise Programs',
        'Post-procedure Recovery & Support',
      ],
      details: 'Our specially designed 3-phase rehabilitation program is tailored for patients recovering from heart attacks, angioplasty, or cardiac bypass surgery. We provide specialized counseling to significantly decrease the risk of secondary cardiac events including stent blockage and graft blockage. Each patient receives an individual exercise program based on their cardiac capacity and progress. Our comprehensive approach includes stress management, dietary modifications, medication guidance, and continuous monitoring. We ensure safe recovery through supervised exercise sessions and regular follow-ups to maintain cardiac health.',
    },
    {
      title: 'Advanced Cardiac Diagnostics',
      icon: BookOpen,
      color: 'accent',
      description: 'Cutting-edge diagnostic tests for accurate cardiac assessment',
      features: [
        'Genetic Risk Markers Testing',
        'Advanced Blood Biomarkers',
        'Resting Electrocardiography (ECG)',
        '2D Echocardiography',
        'Transthoracic Echocardiography',
        'Treadmill Exercise Test (TMT)',
        'Holter Monitoring (24-hour ECG)',
        'Comprehensive Risk Factor Assessment',
      ],
      details: 'We utilize the latest diagnostic technologies to provide accurate assessment of cardiac health. Our advanced tests can detect subtle abnormalities that might not be apparent on routine examination. Genetic testing helps identify inherited risk factors. Biomarker testing provides information about heart stress and damage. Our experts interpret all findings and integrate them into a comprehensive assessment plan.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg-service.jpg)',
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive cardiac care from prevention to rehabilitation using advanced diagnostics and personalized treatment
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Comprehensive Approach to Cardiac Care</h2>
          <p className="text-lg text-foreground mb-4 leading-relaxed">
            Our mission is to build a happy and healthy heart, free from cardiovascular diseases by primary and secondary prevention. We focus on promoting good health through healthy lifestyle, stress management, positive attitude, and nutritious eating habits.
          </p>
          <p className="text-lg font-semibold text-primary mb-0">
            Prevention Strategies including Lifestyle Modification for Heart Attack leads to more than 50% reduction in Heart Disease related mortality
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`bg-linear-to-br from-${service.color}/10 to-${service.color}/5 p-6 border-b border-border`}>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-3 bg-${service.color}/20 rounded-lg`}>
                        <Icon className={`w-6 h-6 text-${service.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-foreground text-sm">{service.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`#service-${index}`}
                      className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const serviceImages = [
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rr1kiDxXKJTvh2exLeWaBhbDmDGlsn.png', // Primary Prevention Programs
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9SmNEfAvEjJHg0sOZRjbnJikE1p9E1.png', // Preventive Heart Disease Checkups (TMT)
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f9AP2QGWNeX33Bp2whyQCtIBW4tuU9.png', // Cardiac Rehabilitation Programs
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2P6eD9j7QB87qsyz4B0C2wHw7hqXhw.png', // Advanced Cardiac Diagnostics
        ];
        return (
          <section key={index} id={`service-${index}`} className={index % 2 === 0 ? 'bg-linear-to-br from-primary/5 to-accent/5' : 'bg-white'}>
            <div className="max-w-6xl mx-auto px-4 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-4 bg-${service.color}/10 rounded-lg`}>
                      <Icon className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">{service.details}</p>
                  <h4 className="font-bold text-foreground mb-4">Complete Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold inline-block"
                  >
                    Book Consultation for This Service
                  </Link>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-96">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Diagnostic Tools Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Diagnostic Equipment & Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Electrocardiography (ECG)',
                description: 'Records electrical activity of the heart to detect arrhythmias and ischemia',
              },
              {
                name: '2D Echocardiography',
                description: 'Ultrasound imaging of heart structure and function',
              },
              {
                name: 'Treadmill Stress Test (TMT)',
                description: 'Evaluates heart function during physical exercise',
              },
              {
                name: 'Blood Pressure Monitoring',
                description: 'Continuous monitoring of blood pressure levels',
              },
              {
                name: 'Advanced Blood Biomarkers',
                description: 'Specialized tests for cardiac stress and damage markers',
              },
              {
                name: 'Genetic Testing',
                description: 'Identifies inherited cardiovascular risk factors',
              },
            ].map((tool, index) => (
              <div key={index} className="p-6 border border-border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-foreground mb-2">{tool.name}</h3>
                <p className="text-foreground text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-linear-to-br from-primary/5 to-accent/5 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Service Process</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Comprehensive assessment of medical history, lifestyle, and cardiac risk factors',
              },
              {
                step: '02',
                title: 'Diagnostic Testing',
                description: 'Perform necessary tests based on individual risk profile and symptoms',
              },
              {
                step: '03',
                title: 'Analysis & Assessment',
                description: 'Expert interpretation of all findings to create accurate diagnosis',
              },
              {
                step: '04',
                title: 'Personalized Treatment Plan',
                description: 'Develop customized management strategy including medications and lifestyle changes',
              },
              {
                step: '05',
                title: 'Implementation & Support',
                description: 'Guide patient through treatment with regular monitoring and adjustments',
              },
              {
                step: '06',
                title: 'Follow-up & Prevention',
                description: 'Ongoing monitoring and preventive care to maintain heart health long-term',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Projects Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Research & Clinical Projects</h2>
          <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
            Dr. Doshi has undertaken multiple research projects advancing the field of preventive cardiology and cardiac care
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">International Observership (2017)</h3>
              <p className="text-foreground text-sm">Center for International Medical Education, Cleveland Clinic, Cleveland, USA</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Impact of Intensive Primary Prevention on Control of Risk Factors</h3>
              <p className="text-foreground text-sm">Study on coronary artery disease prevention with reduced medication requirements at U N Mehta Institute of Cardiology and Research Center</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Behaviour and Risk Factor Assessment in Young Population</h3>
              <p className="text-foreground text-sm">Using Risk algorithm to assess cardiovascular risk factors with implications for healthcare providers at U N Mehta Institute</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Premature Coronary Artery Disease Evaluation</h3>
              <p className="text-foreground text-sm">Clinical assessment of young population with premature CAD and associated risk factors at U N Mehta Institute</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Clinical Profile of Young ACS Patients</h3>
              <p className="text-foreground text-sm">Comprehensive analysis of clinical and risk factor profiles in acute coronary syndrome patients at U N Mehta Institute</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Preventive Cardiology Awareness Seminars</h3>
              <p className="text-foreground text-sm">Conducting educational seminars to spread awareness about preventive cardiology among general population across Gujarat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-primary to-accent py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the First Step?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Schedule your consultation and discover which service is best for your cardiac health
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-muted transition-colors font-semibold inline-block"
          >
            Schedule Consultation Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
