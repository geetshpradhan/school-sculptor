
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">MAHANT LAL DAS SCHOOL</h2>
            <p className="text-white/80 max-w-md">
              Providing quality education from KG-1 to 12th grade with the best facilities
              to shape the future of our students and nurture them into responsible citizens.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Courses & Fees', 'Admissions', 'Events', 'Gallery', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="text-white/80 hover:text-white transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">School Hours</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <span className="block font-medium">Monday - Friday</span>
                <span>8:00 AM - 3:30 PM</span>
              </li>
              <li>
                <span className="block font-medium">Saturday</span>
                <span>8:00 AM - 12:30 PM</span>
              </li>
              <li>
                <span className="block font-medium">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            © {currentYear} Mahant Lal Das Uchchatar Madhyamik Vidyalaya, Nardha. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
