
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 uppercase mb-4">Contact Us</h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto">
            Get in touch with us for admissions or any other inquiries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[300px] md:h-[450px]">
            <iframe 
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641489322!3d18.562551287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Pune!5e0!3m2!1sen!2sin!4v1628505418168!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">Mahant Lal Das Uchchatar Madhyamik Vidyalaya<br />Nardha, XYZ Road, City, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">+91-XXXXXXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">contact@mahantlaldasschool.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-smooth"
              >
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                View on Google Maps
              </a>
              
              <a 
                href="https://wa.me/911234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 border border-blue-900 text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-smooth"
              >
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
