
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Programs from '@/components/home/Programs';
import Faculty from '@/components/home/Faculty';
import News from '@/components/home/News';
import Contact from '@/components/home/Contact';

const Index = () => {
  // Add smooth intersection animation effects on page load
  useEffect(() => {
    const handleInitialAnimations = () => {
      // This ensures that any elements already in view get animated
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    };

    // Slight delay to ensure DOM is fully loaded
    setTimeout(handleInitialAnimations, 100);

    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Programs />
      <Faculty />
      <News />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
