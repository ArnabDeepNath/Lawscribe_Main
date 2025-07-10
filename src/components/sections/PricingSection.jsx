import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Free',
      price: 'Rs.0',
      period: 'forever',
      description: 'Basic features for individuals',
      features: [
        '10 AI-powered document generations/month',
        'Basic editor features',
        'Export to PDF, DOCX',
        'Access to 5 templates',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-outline-primary',
      popular: false
    },
    {
      name: 'Professional',
      price: 'Rs.250',
      period: 'per month',
      description: 'For legal professionals',
      features: [
        'Unlimited AI-powered document generations',
        'Advanced editor features',
        'Export to all formats',
        'Access to 50+ templates',
        'Priority email support',
        'Document version history',
        'Custom branding'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-primary',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Rs.999',
      period: 'per year',
      description: 'For law firms and legal departments',
      features: [
        'Everything in Professional',
        'Unlimited users',
        'Team collaboration tools',
        'Custom AI training with your documents',
        'Admin console',
        'Dedicated account manager',
        'API access',
        'HIPAA & SOC 2 compliance'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'btn-outline-primary',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core AI document drafting technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`rounded-xl overflow-hidden shadow-sm border ${plan.popular ? 'border-blue-500 shadow-lg transform md:-translate-y-4' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2">
                  <p className="font-medium">Most Popular</p>
                </div>
              )}
              
              <div className="p-6 md:p-8 bg-white">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="bi bi-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`btn ${plan.buttonClass} w-full`}>{plan.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans come with a 14-day money-back guarantee. No credit card required for free trial.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            View full plan comparison <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
