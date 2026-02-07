import React from 'react';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import SignatureSection from './components/SignatureSection';
import GallerySection from './components/GallerySection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <SignatureSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
