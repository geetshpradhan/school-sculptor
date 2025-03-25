
// import React, { useEffect } from 'react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
// import Hero from '@/components/home/Hero';
// import About from '@/components/home/About';
// import Courses from '@/components/home/Courses';
// import Admissions from '@/components/home/Admissions';
// import Events from '@/components/home/Events';
// import Gallery from '@/components/home/Gallery';
// import Contact from '@/components/home/Contact';

// const Index = () => {
//   // Add smooth intersection animation effects on page load
//   useEffect(() => {
//     const handleInitialAnimations = () => {
//       // This ensures that any elements already in view get animated
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add('in-view');
//               observer.unobserve(entry.target);
//             }
//           });
//         },
//         { threshold: 0.1 }
//       );

//       document.querySelectorAll('.animate-on-scroll').forEach((el) => {
//         observer.observe(el);
//       });
//     };

//     // Slight delay to ensure DOM is fully loaded
//     setTimeout(handleInitialAnimations, 100);

//     // Smooth scroll to anchor links
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         if (!targetId) return;
        
//         const targetElement = document.querySelector(targetId);
//         if (!targetElement) return;
        
//         window.scrollTo({
//           top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
//           behavior: 'smooth',
//         });
//       });
//     });
//   }, []);

//   return (
//     <main className="min-h-screen bg-background text-foreground">
//       <Navbar />
//       <Hero />
//       <About />
//       <Courses />
//       <Admissions />
//       <Events />
//       <Gallery />
//       <Contact />
//       <Footer />
//     </main>
//   );
// };

// export default Index;




import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Courses from '@/components/home/Courses';
import Admissions from '@/components/home/Admissions';
import Events from '@/components/home/Events';
import Gallery from '@/components/home/Gallery';
import Contact from '@/components/home/Contact';

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth animations on scroll
  useEffect(() => {
    const handleInitialAnimations = () => {
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

    setTimeout(handleInitialAnimations, 100);

    // Smooth scrolling
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
      <section className={`px-4 ${isMobile ? 'py-10' : 'py-20'}`}>
        <Hero />
      </section>
      <section className="container mx-auto px-4 sm:px-8 md:px-12">
        <About />
      </section>
      <section className="container mx-auto px-4 sm:px-8 md:px-12">
        <Courses />
      </section>
      <section className="container mx-auto px-4 sm:px-8 md:px-12">
        <Admissions />
      </section>
      <section className="container mx-auto px-4 sm:px-8 md:px-12">
        <Events />
      </section>
      <section className="container mx-auto px-4 sm:px-8 md:px-12">
        <Gallery />
      </section>
      <section className="container mx-auto px-4 sm:px-8 md:px-12">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
