import React from 'react';

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Anupriya Poddar',
      role: 'CEO & Co-founder',
      bio: 'Litigation attorney with 3 years experience in legal domain',
      image: 'https://placehold.co/200x200?text=Anupriya'
    },
    {
      name: 'Arnab Deep Nath',
      role: 'CTO & Co-founder',
      bio: 'AI expert with background in NLP and legal document processing',
      image: 'https://placehold.co/200x200?text=Arnab'
    },
    // {
    //   name: 'Elena Rodriguez',
    //   role: 'Chief Legal Officer',
    //   bio: '20+ years of experience in compliance and regulatory law',
    //   image: 'https://placehold.co/200x200?text=Elena'
    // },
    // {
    //   name: 'David Park',
    //   role: 'Head of Product',
    //   bio: 'Veteran product manager specializing in legal software solutions',
    //   image: 'https://placehold.co/200x200?text=David'
    // }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About LawScribe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to transform legal document creation with AI, making it faster, more accurate, and accessible to all legal professionals.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="text-gray-600 mb-4">
                LawScribe was founded in 2025 to reimagine the way legal professionals draft and manage documents. The idea was born out of frustration with outdated tools and time-consuming manual processes that no longer served the pace of modern legal work.
                </p>
                <p className="text-gray-600 mb-4">
                With deep roots in both legal practice and software development, our team set out to build an intelligent assistant—one that could combine the nuance of legal knowledge with the speed and adaptability of AI.
                </p>
                <p className="text-gray-600">
                Today, LawScribe empowers legal professionals across the globe to draft faster, collaborate smarter, and focus on high-impact work—with technology that keeps up with their pace and precision.
                </p>
            </div>

            <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative z-10">
                <blockquote className="text-gray-600 italic mb-6">
                    "We didn’t just want to automate text—we wanted to amplify legal expertise. LawScribe lets professionals focus on strategy while AI handles the repetitive drafting work."
                </blockquote>
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                    <div>
                    <p className="font-semibold">Founding Team</p>
                    <p className="text-gray-500 text-sm">LawScribe</p>
                    </div>
                </div>
                </div>
                <div className="absolute top-5 left-5 w-full h-full bg-blue-100 rounded-lg -z-10"></div>
            </div>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold mb-1">{member.name}</h4>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
            ))}
            </div>

            <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to transform your legal document workflow?</h3>
            <div className="flex justify-center space-x-4">
                <a href="#editor" className="btn btn-primary">Try It Now</a>
                <a href="#" className="btn btn-outline-primary">Contact Us</a>
            </div>
            </div>
        </div>
        </section>

  );
};

export default AboutSection;
