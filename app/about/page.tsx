'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Award, Stethoscope, BookOpen, Globe, Briefcase, Heart, CheckCircle, FileText } from 'lucide-react';

export default function About() {
  const credentials = [
    { degree: 'D.M. (Cardiology)', institution: 'B. J. Medical College, Gujarat University, Ahmedabad, Gujarat', year: 'July 2014', medal: 'Gold Medalist with I division' },
    { degree: 'M.D. (General Medicine)', institution: 'B. J. Medical College, Gujarat University, Ahmedabad, Gujarat', year: 'July 2010', medal: 'I division' },
    { degree: 'M.B.B.S', institution: 'B. J. Medical College, Gujarat University, Ahmedabad, Gujarat', year: 'July 2006', medal: 'Gold Medalist with distinction' },
  ];

  const experience = [
    {
      role: 'Consultant and Interventional Cardiologist',
      company: 'Holistic Heart Care, Paldi, Ahmedabad, Gujarat, India',
      duration: 'April 2018 - Till date',
      details: 'Leading a private practice focused on preventive cardiology and interventional procedures',
    },
    {
      role: 'International Observer',
      company: 'Department of Preventive Cardiology, Center for International Medical Education, Cleveland Clinic, Cleveland, USA',
      duration: '2017',
      details: 'International observership for advanced training in preventive cardiology',
    },
    {
      role: 'Assistant Professor (Cardiology)',
      company: 'Department of Cardiology, U. N. Mehta Institute of Cardiology & Research Centre, (Affiliated to B J Medical College), Civil Hospital Campus, Asarva, Ahmedabad',
      duration: 'September 2014 - April 2018',
      details: 'Teaching and clinical practice in cardiology',
    },
    {
      role: 'DM Resident (Cardiology) and Senior Registrar',
      company: 'Department of Cardiology, U. N. Mehta Institute of Cardiology & Research Centre, (Affiliated to B J Medical College), Civil Hospital Campus, Asarva, Ahmedabad',
      duration: 'July 2011 - July 2014',
      details: 'Advanced training in cardiology',
    },
    {
      role: 'MD (Medicine) Resident and Senior Registrar',
      company: 'Department of Medicine, Civil Hospital Campus, Asarva, Ahmedabad, Gujarat, India',
      duration: 'July 2008 - June 2011',
      details: 'Training in general medicine',
    },
    {
      role: 'MBBS Internship',
      company: 'Civil Hospital Campus, Ahmedabad, and Civil Hospital, Bharuch, Gujarat, India',
      duration: 'July 2006 - June 2007',
      details: 'Clinical training during medical school',
    },
  ];

  const expertise = [
    'Preventive Cardiology',
    'Cardiac Rehabilitation',
    'Interventional Cardiology Procedures',
    'Coronary Artery Disease Management',
    'Myocardial Infarction Treatment',
    'Risk Factor Assessment',
    'Lifestyle Modification & Counseling',
    'Genetic Risk Evaluation',
  ];

  const awards = [
    'Gold Medalist with I division for DM (Cardiology), B. J. Medical College, Gujarat University, Ahmedabad, Gujarat - Jul 2014',
    'Gold Medalist with distinction in M.B.B.S, B. J. Medical College, Gujarat University, Ahmedabad, Gujarat - July 2006',
    'Shri D. M. Desai Gold Medal for Medicine in MBBS by Ahmedabad Medical Association, Ahmedabad, Gujarat',
    '"Medical Excellence Award", Certificate of Medical Excellence by Indian Solidarity Council',
    '"Best Student (Medical)" award by Shri Kutchi Jain Gurjar Samaj, Mumbai, Maharastra',
  ];

  const publications = [
    {
      title: 'The Young Myocardial Infarction Study of the Western Indians: YOUTH Registry',
      authors: 'Anand N. Shukla, Ashwal A. Jayaram, Dhaval Doshi, Priyanka Patel, Komal Shah, Alok Shinde, Harsh Ghoniya, Karthik Natarajan, Tarun Bansal',
      journal: 'Global Heart',
      date: 'Feb 2019',
      status: 'Published Online'
    },
    {
      title: 'Cardiovascular Disease Risk Factors and Socioeconomic Status: A Cross sectional Study of Children and Adolescents from Western India',
      authors: 'Nikhila Pachani, Gajendra Dubey, Komal H. Shah, Dhaval Doshi',
      journal: 'Journal of Cardiovascular Medicine and Surgery',
      date: 'Jan-Mar 2018',
      status: 'Vol 4:1'
    },
    {
      title: 'Modifiable Life Style Risk Factors for CAD in Young Dyslipidemic Gujarati\'s',
      authors: 'Dhaval Doshi, Karthik N, Priyanka P, Komal S',
      journal: 'Journal of Cardiovascular Medicine and Surgery',
      date: 'Jul-Dec 2017',
      status: 'Vol 3'
    },
    {
      title: 'Clinical study of incidence of significant major aorto pulmonary collateral arteries in patients of Tetralogy of Fallot and its correlation with pulmonary artery anatomy',
      authors: 'Doshi D, Oswal N, Shukla A, Patel P, Shah K',
      journal: 'Pediatric Review: International Journal of Pediatric Research',
      date: '2017',
      status: 'Published'
    },
    {
      title: 'Balloon dilatation of native coarctation of aorta in infants-short term clinical result',
      authors: 'Oswal N, Doshi D, Jadhav N, Humane D, Sharma K, Shah K',
      journal: 'Pediatric Review: International Journal of Pediatric Research',
      date: '2017',
      status: 'Published'
    },
    {
      title: 'Novel indexes for diagnosing metabolic syndrome in apparently healthy Gujarati Asian Indians: a cross-sectional study',
      authors: 'Joshi H, Shah K, Patel P, Prajapati J, Parmar M, Doshi D, Chaurushia S',
      journal: 'QJM: An International Journal of Medicine',
      date: '2016',
      status: 'Published'
    },
    {
      title: 'Study of Feasibility and Safety of Palliative RVOT Stenting in patients of Tetralogy of Fallot',
      authors: 'Asia Pacific Pediatric Cardiology Society',
      journal: 'Asia Pacific Pediatric Cardiology Society',
      date: '2014',
      status: 'Abstract'
    },
    {
      title: 'Study of Maintenance of Sinus Rhythm after BMV in patients of Rheumatic Mitral Stenosis with Atrial Fibrillation',
      authors: 'Various Authors',
      journal: 'Indian Heart Journal',
      date: '2013',
      status: 'Abstract'
    },
    {
      title: 'Study of clinical and etiological profile of 100 patients of pancytopenia at a tertiary care center in India',
      authors: 'Doshi D, Shah AN, Somani S, Jain A, Jivarajani H, Kothari P',
      journal: 'Hematology',
      date: '2012',
      status: 'Published'
    },
    {
      title: 'A study of clinical profile of HIV positive patients with neurological manifestations',
      authors: 'Rana HM, Doshi D A, Virpariya KM, Shah AN, Somani SS',
      journal: 'HIV & AIDS Review',
      date: '2011',
      status: 'Published'
    },
    {
      title: 'Study of Outbreak of Acute Hepatitis B in Sabakantha Dist. Of Gujarat',
      authors: 'Various Authors',
      journal: 'Indian Medical Gazette',
      date: '2010',
      status: 'Published'
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg-about.jpg)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Consultant & Interventional Cardiologist with expertise in preventive cardiology and cardiac rehabilitation
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Profile</h2>
              <p className="text-foreground mb-4 leading-relaxed">
                Dhaval Doshi, D.M. (Cardiology), M.D. (Medicine) is a Consultant and Interventional Cardiologist at Holistic Heart Care in Paldi, Ahmedabad. He is a Gold Medalist in D.M. (Cardiology) and MBBS from B. J. Medical College, Gujarat University.
              </p>
              <p className="text-foreground mb-4 leading-relaxed">
                In 2017, Dhaval worked as an International Observer at the Department of Preventive Cardiology, Center for International Medical Education, Cleveland Clinic, Cleveland, USA, gaining extensive exposure to advanced cardiac care and interventional techniques. Prior to establishing his private practice, he served as an Assistant Professor at U. N. Mehta Institute of Cardiology & Research Centre, affiliated to B J Medical College.
              </p>
              <p className="text-foreground leading-relaxed">
                Dhaval has undertaken multiple research projects focused on coronary artery disease, myocardial infarction, and preventive cardiology strategies. He conducts seminars to spread awareness about Preventive Cardiology amongst the general population across various locations in Gujarat.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden shadow-lg border-4 border-primary/20 w-full max-w-md h-80 bg-cover bg-center" style={{ backgroundImage: 'url(/doctor-image.jpeg)' , height: '600px' }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 px-4 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Education & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{cred.year}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{cred.degree}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cred.institution}</p>
                <p className="text-sm text-primary font-semibold">{cred.medal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-4 bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-accent font-semibold mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm">{exp.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Clinical Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Patient-Centered Care</h3>
              <p className="text-muted-foreground text-sm">
                Every patient receives personalized attention and customized treatment plans based on individual needs and risks.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-lg">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Preventive Focus</h3>
              <p className="text-muted-foreground text-sm">
                Prevention is better than cure. We focus on identifying risks early and implementing lifestyle modifications.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Evidence-Based Medicine</h3>
              <p className="text-muted-foreground text-sm">
                Treatment decisions are based on latest research and international guidelines for optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Awards & Recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="bg-linear-to-br from-primary/5 to-accent/5 p-6 rounded-lg border border-primary/20 flex gap-4">
                <div className="shrink-0">
                  <Award className="w-6 h-6 text-primary mt-1" />
                </div>
                <p className="text-sm text-foreground">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Experience */}
      <section className="py-16 px-4 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">International Exposure</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Cleveland Clinic Observer - 2017</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              International Observer at Department of Preventive Cardiology, Center for International Medical Education, Cleveland Clinic, Cleveland, USA. This international exposure has enhanced his expertise in:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-bold">•</span> Advanced interventional techniques
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-bold">•</span> Preventive cardiology strategies
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-bold">•</span> Cardiac imaging and diagnostics
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-bold">•</span> Global quality cardiac care standards
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Professional Memberships & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-linear-to-br from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Professional Memberships</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>Cardiological Society of India</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>Ahmedabad Medical Association</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>Medical Council of India</span>
                </li>
              </ul>
            </div>
            <div className="bg-linear-to-br from-accent/5 to-secondary/5 p-8 rounded-lg border border-accent/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Other Interests</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>Medical service camps</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>Medical education</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>Preventive Cardiology Research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-4 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Publications</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Peer-reviewed publications and research contributions in leading medical journals
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2 text-sm leading-relaxed">{pub.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{pub.authors}</p>
                    <div className="flex flex-wrap gap-3 items-center text-xs text-muted-foreground">
                      <span className="font-semibold text-accent">{pub.journal}</span>
                      <span className="text-primary font-medium">{pub.date}</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{pub.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
