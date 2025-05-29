import React from 'react';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FounderSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const credentials = [
    {
      icon: GraduationCap,
      title: "PhD in Computer Science",
      description: "Specialization in AI/ML and Natural Language Processing from Stanford University"
    },
    {
      icon: Heart,
      title: "Healthcare Compliance Expert", 
      description: "15+ years experience in healthcare technology and HIPAA-compliant systems"
    },
    {
      icon: Award,
      title: "Published Researcher",
      description: "20+ peer-reviewed papers in AI, mental health, and digital therapeutics"
    },
    {
      icon: Users,
      title: "Clinical Advisory Board",
      description: "Partnered with licensed therapists and psychiatrists for clinical validation"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years in AI Research" },
    { number: "50k+", label: "Users Helped" },
    { number: "20+", label: "Research Publications" },
    { number: "98%", label: "Clinical Accuracy" }
  ];

  return (
    <section id="founder" ref={ref} className="py-24 bg-gradient-to-br from-healing-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-secondary-200/30 to-healing-200/30 rounded-full blur-2xl floating"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl floating" style={{animationDelay: '3s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Built by 
            <span className="gradient-text"> Clinical Experts</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            HealMind AI is founded by leading experts in AI research and healthcare compliance, 
            ensuring clinically validated and ethically responsible mental health support.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Info */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="glass rounded-3xl p-8">
              <div className="flex items-start space-x-6">
                <img
                  src="https://images.pexels.com/photos/9221770/pexels-photo-9221770.jpeg"
                  alt="Dr. Alex Chen - Founder & CEO"
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Dr. Alex Chen
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    Founder & CEO, Neuralyn LLC
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    "My mission is to democratize access to mental health care through AI that genuinely understands 
                    human emotions. After seeing the mental health crisis firsthand, I dedicated my career to creating 
                    technology that bridges the gap between human empathy and artificial intelligence."
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Our Mission</h4>
              <p className="text-neutral-700 leading-relaxed text-lg">
                "To make emotional healing accessible, intelligent, and deeply human — powered by AI."
              </p>
            </div>

            {/* Company Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <Heart className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                <h5 className="font-semibold text-neutral-900">Empathy First</h5>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <Award className="h-8 w-8 text-secondary-500 mx-auto mb-3" />
                <h5 className="font-semibold text-neutral-900">Clinical Excellence</h5>
              </div>
            </div>
          </div>

          {/* Credentials & Achievements */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Credentials */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-neutral-900 mb-6">
                Clinical & Technical Expertise
              </h4>
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 glass rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                    <credential.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-900 mb-2">
                      {credential.title}
                    </h5>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-neutral-600 text-sm font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advisory Board */}
        <div className={`mt-20 transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Clinical Advisory Board
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our clinical advisory board ensures that every feature is grounded in evidence-based practices 
              and validated by licensed mental health professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-healing-400 to-primary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Dr. Sarah Martinez</h4>
              <p className="text-neutral-600 text-sm">Licensed Clinical Psychologist</p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Dr. Michael Thompson</h4>
              <p className="text-neutral-600 text-sm">Board-Certified Psychiatrist</p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-400 to-healing-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Dr. Lisa Wong</h4>
              <p className="text-neutral-600 text-sm">Cognitive Behavioral Therapist</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Experience Clinically-Validated AI Therapy
            </h3>
            <p className="text-neutral-600 mb-6">
              Join thousands who trust HealMind AI for their mental health journey.
            </p>
            <button className="btn-primary text-lg">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;