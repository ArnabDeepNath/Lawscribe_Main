import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-400">Law</span>
              <span className="text-blue-200">Scribe</span>
            </h3>
            <p className="text-gray-400">
              Empowering legal professionals with AI-powered document drafting and management solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#editor" className="text-gray-400 hover:text-white">Editor</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Legal Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@lawscribe.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Legal Avenue, Suite 100, New York, NY 10001</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} LawScribe. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
