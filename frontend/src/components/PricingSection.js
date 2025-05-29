import React, { useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const PricingSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      icon: Star,
      description: "Perfect for getting started with AI mental health support",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "5 AI conversations per month",
        "Basic mood tracking",
        "Community support",
        "Mobile app access",
        "Educational resources"
      ],
      limitations: [
        "Limited conversation length",
        "Basic analytics only"
      ],
      cta: "Get Started Free",
      popular: false,
      color: "from-neutral-500 to-neutral-600"
    },
    {
      name: "Pro",
      icon: Zap,
      description: "For individuals serious about their mental health journey",
      monthlyPrice: 29,
      annualPrice: 25,
      features: [
        "Unlimited AI conversations",
        "Advanced mood analytics",
        "Personalized therapy programs", 
        "Progress tracking & insights",
        "Priority support",
        "Custom coping strategies",
        "Weekly progress reports",
        "Goal setting & tracking"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
      color: "from-primary-500 to-secondary-500"
    },
    {
      name: "Plus",
      icon: Crown,
      description: "Premium features for comprehensive mental wellness",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Everything in Pro",
        "1-on-1 human therapist sessions",
        "Family plan (up to 4 members)",
        "Advanced crisis intervention",
        "Custom AI personality",
        "Integration with wearables",
        "White-label options",
        "API access for developers"
      ],
      limitations: [],
      cta: "Get Plus Access",
      popular: false,
      color: "from-secondary-500 to-healing-500"
    }
  ];

  const savings = {
    Pro: Math.round(((29 - 25) / 29) * 100),
    Plus: Math.round(((49 - 39) / 49) * 100)
  };

  return (
    <section id="pricing" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Choose Your 
            <span className="gradient-text"> Mental Health Plan</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12">
            Flexible pricing options designed to support your mental wellness journey, 
            from getting started to comprehensive care.
          </p>

          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-neutral-100 rounded-2xl p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                !isAnnual 
                  ? 'bg-white text-primary-600 shadow-md' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                isAnnual 
                  ? 'bg-white text-primary-600 shadow-md' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Save up to 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-500 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50 shadow-xl scale-105' 
                  : 'border-neutral-200 bg-white hover:border-primary-200 hover:shadow-lg'
              } ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} p-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-neutral-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-neutral-600 ml-2">
                    {plan.monthlyPrice === 0 ? '' : '/month'}
                  </span>
                </div>
                {isAnnual && plan.monthlyPrice > 0 && (
                  <div className="mt-2">
                    <span className="text-neutral-400 line-through text-lg">
                      ${plan.monthlyPrice}/month
                    </span>
                    <span className="ml-2 text-green-600 font-semibold">
                      Save {savings[plan.name]}%
                    </span>
                  </div>
                )}
                {isAnnual && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-neutral-500 mt-1">
                    Billed annually (${(isAnnual ? plan.annualPrice : plan.monthlyPrice) * 12}/year)
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-start space-x-3 opacity-60">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-neutral-400 rounded-full"></div>
                    </div>
                    <span className="text-neutral-500">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-glow'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800'
              }`}>
                {plan.cta}
              </button>

              {/* Money Back Guarantee */}
              {plan.monthlyPrice > 0 && (
                <p className="text-center text-sm text-neutral-500 mt-4">
                  30-day money-back guarantee
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className={`mt-20 text-center transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-neutral-600 mb-6">
              All plans include our core AI therapy features, HIPAA compliance, and 24/7 support. 
              Upgrade or downgrade anytime with no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Compare Features
              </button>
              <button className="btn-primary">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;