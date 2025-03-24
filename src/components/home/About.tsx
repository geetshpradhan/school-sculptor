
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 uppercase mb-4">About Us</h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-6">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="School campus"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
          
          <div className="md:col-span-6 space-y-5 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-800">Our Vision & Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our school is dedicated to excellence in education, fostering holistic development of students through a balanced approach to academics, sports, arts, and character building.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              At Mahant Lal Das Uchchatar Madhyamik Vidyalaya, we believe in creating an environment where students can discover their potential and grow into responsible citizens. Our experienced faculty and modern facilities ensure that students receive the best education possible.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-1 md:mb-2">30+</h4>
                <p className="text-sm md:text-base text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-1 md:mb-2">500+</h4>
                <p className="text-sm md:text-base text-gray-600">Students</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-1 md:mb-2">50+</h4>
                <p className="text-sm md:text-base text-gray-600">Faculty Members</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-1 md:mb-2">100%</h4>
                <p className="text-sm md:text-base text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
