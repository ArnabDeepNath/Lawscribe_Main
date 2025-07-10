import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary m-0">
              <span className="text-blue-700">Law</span>
              <span className="text-blue-900">Scribe</span>
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="#home" className="text-gray-800 hover:text-blue-700 font-medium">Home</a></li>
              <li><a href="#features" className="text-gray-800 hover:text-blue-700 font-medium">Features</a></li>
              <li><a href="#editor" className="text-gray-800 hover:text-blue-700 font-medium">Editor</a></li>
              <li><a href="#pricing" className="text-gray-800 hover:text-blue-700 font-medium">Pricing</a></li>
              <li><a href="#about" className="text-gray-800 hover:text-blue-700 font-medium">About Us</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <button className="btn btn-primary mr-2">Sign In</button>
            <button className="btn btn-outline-primary">Sign Up</button>
          </div>
          
          <div className="md:hidden">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="collapse navbar-collapse md:hidden" id="mobileMenu">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
          <li className="nav-item"><a className="nav-link" href="#editor">Editor</a></li>
          <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
        </ul>
        <div className="mt-3">
          <button className="btn btn-primary btn-sm me-2">Sign In</button>
          <button className="btn btn-outline-primary btn-sm">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
