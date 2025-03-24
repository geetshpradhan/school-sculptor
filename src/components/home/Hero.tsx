
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-blue-900 to-blue-600 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-6 space-y-6">
            <div className="flex flex-col items-center md:items-start mb-6">
              {/* School Logo */}
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full p-2 mb-4 shadow-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="School Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Replace the src above with your actual logo URL */}
              </div>
              <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in">
                Welcome to Our School
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-balance animate-fade-in animate-delay-200 text-center md:text-left">
              Mahant Lal Das Uchchatar Madhyamik Vidyalaya
              <span className="block text-2xl md:text-3xl mt-2">Nardha</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 max-w-lg animate-fade-in animate-delay-300 text-center md:text-left">
              Providing quality education from KG-1 to 12th grade with the best facilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in animate-delay-400 justify-center md:justify-start">
              <a 
                href="#admissions" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-smooth hover-lift"
              >
                Apply Now
                <ArrowRight size={16} className="ml-2" />
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-smooth"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="md:col-span-6 animate-fade-in animate-delay-500 mt-8 md:mt-0">
            <div className="relative">
              <div className="bg-white/30 rounded-2xl w-full aspect-[4/3] transform rotate-3 animate-pulse opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Students in a classroom" 
                className="absolute inset-0 rounded-2xl object-cover w-full h-full transform -rotate-3 hover:rotate-0 transition-all duration-500 shadow-xl hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
