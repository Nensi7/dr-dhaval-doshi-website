'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Heart, AlertCircle, CheckCircle, TrendingDown, Droplets } from 'lucide-react';

export default function HealthEducation() {
  const riskFactors = {
    nonModifiable: [
      'Gender - Male',
      'Post-menopausal women',
      'Heredity (Family history of Heart Disease - Male ≤ 55 years, Female less than 65 years)',
      'Stress',
      'Type-A Personality (Impatience, Aggressive & Jealous Nature)',
    ],
    modifiable: [
      'Sedentary lifestyle',
      'Improper & High fat Diet',
      'Smoking / Tobacco',
      'Dyslipidaemia (Bad Cholesterol)',
      'Diabetes',
      'High Blood Pressure',
      'Obesity',
    ],
  };

  const healthyHeartGoals = [
    { category: 'Smoking', goal: 'No exposure to tobacco in any form' },
    { category: 'Diet', goal: 'Low in saturated fat with focus on wholegrain products, more vegetables and fruits' },
    { category: 'Physical activity', goal: '30 minutes for 5 days/week' },
    { category: 'Body weight', goal: 'BMI (Body Mass Index) 20-25 kg/m²' },
    { category: 'Waist circumference', goal: 'Male less than 90 cm, Female less than 80 cm' },
    { category: 'Blood Pressure', goal: 'Less than 140/90 mm Hg' },
    { category: 'HbA1c (Diabetes)', goal: 'Less than 7%' },
    { category: 'LDL (bad cholesterol)', goal: 'Heart Patients: less than 70mg/dL, General Population: less than 100mg/dL' },
    { category: 'HDL (Good Cholesterol)', goal: 'Male greater than 40mg/dL, Female greater than 45mg/dL' },
    { category: 'Triglycerides', goal: 'Less than 150 mg/dL' },
  ];

  const holisticSteps = [
    {
      letter: 'H',
      title: 'Healthy Heart Choices',
      description: 'Healthy heart choices for everyone, everywhere. Make conscious decisions for your cardiovascular health.',
      icon: '❤️',
    },
    {
      letter: 'O',
      title: 'Optimistic & Positive Attitude',
      description: 'Develop optimistic and positive attitude to life. Everything is possible if you BELIEVE. Proper planning and doing one thing at a time.',
      icon: '😊',
    },
    {
      letter: 'L',
      title: 'Live Happy & Stress Free',
      description: 'Live happy and stress free. Enjoy life in every second of it. You can\'t change others, but you can change yourself.',
      icon: '🌟',
    },
    {
      letter: 'I',
      title: 'Inhibit Smoking/Tobacco',
      description: 'Inhibit smoking and tobacco intake. This will decrease your heart attack risk by 50%.',
      icon: '🚫',
    },
    {
      letter: 'S',
      title: 'Shavasana & Meditation',
      description: 'Practice Shavasana and meditation daily for 20 minutes. Try Universal Healing Program. Train your heart to see good in everything.',
      icon: '🧘',
    },
    {
      letter: 'T',
      title: 'Take Adequate Sleep',
      description: 'Take adequate sleep - minimum 6-8 hours per night. Good sleep is essential for heart health.',
      icon: '😴',
    },
    {
      letter: 'I',
      title: 'Include Physical Activity',
      description: 'Include 30 minutes of physical activity daily and manage your weight. 30 mins/day for 6 days a week (Walk, Swim, Cycle).',
      icon: '🚴',
    },
    {
      letter: 'C',
      title: 'Cardiac Diet',
      description: 'Follow cardiac diet on your plate. High in fruits, vegetables, pulses and fibres. Avoid unhealthy fats and processed foods.',
      icon: '🥗',
    },
  ];

  const diabetesInfo = {
    definition: 'Diabetes is part of a larger global epidemic of non-communicable diseases. It has become a major public health challenge globally. India is home to 40.9 million people with diabetes - nearly 15% of the global diabetes burden. It results mainly due to bad lifestyle and genetic predisposition.',
    criteria: [
      { test: 'Fasting Blood Sugar (FBS)', value: 'greater than or equal to 126 mg/dl' },
      { test: 'Post Prandial Blood Sugar (PPBS)', value: 'greater than or equal to 200 mg/dl' },
      { test: 'Random Blood Sugar (RBS)', value: 'greater than 200 mg/dl' },
      { test: 'HbA1c', value: 'greater than or equal to 6.0%' },
    ],
    symptoms: [
      'Increased appetite and thirst',
      'Increased frequency of urination',
      'Weakness',
      'Unexplained weight loss',
    ],
    preventiveSteps: [
      'Monitoring of Fasting Blood sugar/HbA1C levels',
      'Low calorie, low fat diet',
      'Weight Control',
      'Physical activity',
      'Regular Medication',
    ],
  };

  const cardiacDiet = {
    definition: 'A cardiac diet is an unofficial term for a heart-healthy diet. This is a plan to eat plenty of nutrient-rich foods - fruits and veggies, whole grains, legumes and pulses. It also means avoiding saturated fats, trans fats, and excess sodium and sugar.',
    includedFoods: [
      'Fruits and vegetables',
      'Legumes and pulses',
      'Whole grains',
      'Nuts (walnuts, almonds, cashews, peanuts)',
      'Healthy oils (corn oil, soybean oil, sunflower oil, peanut oil, olive oil)',
    ],
    whoShouldFollow: 'Following a heart healthy diet would be recommended to someone who has high blood pressure, high cholesterol or any other history of heart disease, or to someone who has a family history of heart disease.',
    goodFats: [
      'Avocados, Eggs, Olive Oil, Raw Nuts',
      'Salmon, Flaxseed, Leafy Green Vegetables',
      'Organic Butter, Organic Nut Oils',
      'Sesame seeds, Roasted soy beans',
    ],
    badFats: [
      'Margarine, French Fries, Doughnuts',
      'Cookies, Pastries, Crackers',
      'Processed Meats, Canola Oil',
      'High fat dairy foods, Tropical oils (coconut, palm oil)',
    ],
  };

  const foodGuide = [
    { food: 'Fresh fruits', goal: '3 cups fruit per day' },
    { food: 'Vegetables', goal: '3+ cups vegetables per day' },
    { food: 'Legumes', goal: '3 cups/week' },
    { food: 'Oils (PUFA)', goal: 'At least 1 tablespoon/day (Sunflower, corn, soybean oils)' },
    { food: 'Nuts', goal: 'At least 3/4 cup/week' },
    { food: 'Starches/Complex Carbohydrates', goal: '3-6 servings/day' },
    { food: 'Dairy and eggs', goal: 'Limit cheese to 3 servings per week, no limit on egg whites' },
    { food: 'Baked goods & desserts', goal: 'Only home-made, less than 3 times/week' },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg-health.jpg)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Heart Health Education</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Understanding risk factors, prevention strategies, and lifestyle modifications for optimal heart health
          </p>
        </div>
      </section>

      {/* Risk Factors Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Risk Factors for Heart Disease</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Non-Modifiable Risk Factors</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">These factors cannot be changed, but knowing them helps with better management:</p>
              <ul className="space-y-3">
                {riskFactors.nonModifiable.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground text-sm">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Modifiable Risk Factors</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">You can control these through lifestyle changes and management:</p>
              <ul className="space-y-3">
                {riskFactors.modifiable.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground text-sm">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Heart Goals */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Goals for a Healthy Heart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {healthyHeartGoals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-primary/20">
                <h4 className="font-bold text-primary mb-2">{goal.category}</h4>
                <p className="text-muted-foreground text-sm">{goal.goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOLISTIC Approach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">The HOLISTIC Approach to Heart Health</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Rule of 20: 20 Minutes of Exercise, 20 Minutes of Meditation & Yoga, 20 Minutes of Recreation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {holisticSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-primary">{step.letter}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diabetes Education */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Understanding Diabetes</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What is Diabetes?</h3>
              <p className="text-muted-foreground leading-relaxed">
                {diabetesInfo.definition}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-foreground mb-4">Diagnostic Criteria</h4>
                <div className="space-y-3">
                  {diabetesInfo.criteria.map((criterion, index) => (
                    <div key={index} className="border-b border-border pb-3">
                      <p className="text-sm font-semibold text-foreground">{criterion.test}</p>
                      <p className="text-primary font-bold">{criterion.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-foreground mb-4">Symptoms of Diabetes</h4>
                <ul className="space-y-3">
                  {diabetesInfo.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-foreground mb-4">Preventive Steps for Diabetes Management</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {diabetesInfo.preventiveSteps.map((step, index) => (
                  <div key={index} className="text-center p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardiac Diet Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Cardiac Diet Guide</h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">What is a Cardiac Diet?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{cardiacDiet.definition}</p>
              <div className="bg-white p-4 rounded border border-primary/10 mt-4">
                <p className="text-sm text-foreground"><span className="font-bold">Who should follow?</span> {cardiacDiet.whoShouldFollow}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-500">
                <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Good Fats (Heart Healthy)
                </h4>
                <ul className="space-y-2">
                  {cardiacDiet.goodFats.map((fat, index) => (
                    <li key={index} className="text-sm text-foreground">• {fat}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-500">
                <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Bad Fats (Avoid)
                </h4>
                <ul className="space-y-2">
                  {cardiacDiet.badFats.map((fat, index) => (
                    <li key={index} className="text-sm text-foreground">• {fat}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h4 className="font-bold text-foreground mb-6">Daily Food Serving Goals</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {foodGuide.map((item, index) => (
                  <div key={index} className="flex justify-between items-start p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground text-sm">{item.food}</span>
                    <span className="text-primary font-bold text-sm">{item.goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-lg text-white text-center">
            <h3 className="text-xl font-bold mb-3">Healthy Diet Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-bold">Carbohydrates</p>
                <p>{'Refined < 30%, Whole grains 50%'}</p>
              </div>
              <div>
                <p className="font-bold">Fats & Fiber</p>
                <p>Saturated 5%, Poly-unsaturated 15%, Fiber 30-45g</p>
              </div>
              <div>
                <p className="font-bold">Vegetables & Salt</p>
                <p>{'Fruits & Veg > 400g/day, Salt < 1g/day'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
