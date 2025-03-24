
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-36 md:pb-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in">
                Shaping the future of education
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance animate-fade-in animate-delay-200">
              Where minds are <span className="text-gradient">sculpted</span> and futures are crafted
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-300">
              Our educational approach blends tradition with innovation, preparing students 
              to excel in a rapidly changing world through personalized learning experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in animate-delay-400">
              <a 
                href="#programs" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-smooth hover-lift"
              >
                Explore Programs
                <ArrowRight size={16} className="ml-2" />
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-foreground font-medium rounded-lg hover:bg-gray-50 transition-smooth"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="md:col-span-6 animate-fade-in animate-delay-500">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl w-full aspect-[4/3] transform rotate-3 animate-pulse opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Students in a modern classroom" 
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
