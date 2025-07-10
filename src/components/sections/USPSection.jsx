import React from 'react';

const USPSection = () => {
  const features = [
    {
      icon: 'bi bi-lightning',
      title: 'AI-Powered Drafting',
      description: 'Generate professional legal documents in seconds with our advanced AI technology trained on millions of legal precedents.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Legal Compliance',
      description: 'Our system ensures your documents adhere to the latest legal standards and requirements across jurisdictions.'
    },
    {
      icon: 'bi bi-pencil-square',
      title: 'Intuitive Editor',
      description: 'Powerful yet simple-to-use editor with legal-specific formatting tools and collaborative features.'
    },
    {
      icon: 'bi bi-clock-history',
      title: 'Time Saving',
      description: 'Reduce document drafting time by up to 80%, allowing you to focus on high-value legal work.'
    },
    {
      icon: 'bi bi-file-earmark-text',
      title: 'Template Library',
      description: 'Access hundreds of pre-built legal templates for contracts, agreements, motions, and more.'
    },
    {
      icon: 'bi bi-lock',
      title: 'Bank-Level Security',
      description: 'Your sensitive legal documents are protected with enterprise-grade encryption and secure cloud storage.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LawScribe?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with legal expertise to deliver a document drafting solution that saves time, reduces errors, and improves compliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-md">
              <div className="inline-block p-4 bg-blue-50 rounded-lg text-blue-600 mb-4">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-blue-50 rounded-xl border border-blue-100 mb-6">
            <p className="text-blue-700 font-medium">
              90% of users report saving at least 5 hours per week on document drafting
            </p>
          </div>
          <div className="flex justify-center">
            <a href="#editor" className="btn btn-primary mx-2">Try Now</a>
            <a href="#" className="btn btn-outline-secondary mx-2">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
