
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-gradient mb-4">SCULPTOR ACADEMY</h2>
            <p className="text-muted-foreground max-w-md">
              Shaping minds, crafting futures. Our educational philosophy combines 
              tradition with innovation to create a learning environment that prepares 
              students for the challenges of tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Programs', 'Admissions', 'Campus', 'Events', 'Alumni'].map(item => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'Careers', 'News', 'Support'].map(item => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Sculptor Academy. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
