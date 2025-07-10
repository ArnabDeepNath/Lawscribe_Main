import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              AI-Powered Legal Document Drafting
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your legal workflow with LawScribe's intelligent document drafting assistant. Create, edit, and manage legal documents with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#editor" className="btn btn-primary btn-lg">Try It Now</a>
              <a href="#pricing" className="btn btn-outline-primary btn-lg">View Pricing</a>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-500 mb-4">Trusted by top legal professionals</p>
              <div className="flex flex-wrap items-center gap-8">
                <img src="https://placehold.co/100x30?text=LawFirm" alt="Client logo" className="h-6 grayscale opacity-70" />
                <img src="https://placehold.co/100x30?text=LegalCo" alt="Client logo" className="h-6 grayscale opacity-70" />
                <img src="https://placehold.co/100x30?text=JusticeLLP" alt="Client logo" className="h-6 grayscale opacity-70" />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 border border-gray-100 relative z-10">
                <div className="bg-blue-50 rounded-md p-4 mb-4 border border-blue-100">
                  <p className="text-blue-700 font-medium">AI-Generated Contract</p>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                  <div className="h-8 bg-blue-500 rounded w-24"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -right-8 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-200 rounded-full opacity-50 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
