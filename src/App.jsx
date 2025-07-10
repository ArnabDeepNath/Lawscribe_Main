import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import USPSection from './components/sections/USPSection';
import EditorSection from './components/sections/EditorSection';
import PricingSection from './components/sections/PricingSection';
import AboutSection from './components/sections/AboutSection';
import './App.css';
import './styles/editor.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <USPSection />
        <EditorSection />
        <PricingSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
