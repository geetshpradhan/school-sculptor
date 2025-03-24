
import React from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import AnimatedImage from '../ui/AnimatedImage';

const programs = [
  {
    id: 1,
    title: 'Liberal Arts',
    description: 'A comprehensive foundation in humanities, social sciences, and natural sciences.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: ['Critical Thinking', 'Communication', 'Cultural Awareness'],
  },
  {
    id: 2,
    title: 'Engineering',
    description: 'Cutting-edge technical education with focus on creativity and problem-solving.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: ['Design Thinking', 'Technical Skills', 'Innovation'],
  },
  {
    id: 3,
    title: 'Business',
    description: 'Develop entrepreneurial mindset and learn modern business practices.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    features: ['Leadership', 'Strategy', 'Global Perspective'],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Academic Programs</h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={100}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Our diverse range of programs is designed to nurture talent, inspire curiosity, 
            and develop the skills needed for success in the modern world.
          </p>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <RevealOnScroll key={program.id} delay={200 + (index * 100)}>
              <div className="glass-card overflow-hidden hover:translate-y-[-5px] hover:shadow-lg group">
                <div className="h-52 overflow-hidden">
                  <AnimatedImage
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="text-xs font-medium bg-secondary px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#" 
                    className="text-primary font-medium inline-flex items-center group-hover:underline"
                  >
                    Learn more
                    <svg 
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
