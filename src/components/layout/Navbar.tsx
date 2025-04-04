
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Courses & Fees', href: '#courses' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Famous Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full',
        isScrolled 
          ? 'bg-blue-800/90 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-blue-900 py-4 md:py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center space-x-2 font-display font-bold text-white"
        >
          {/* Small Logo */}
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
            {/* Replace the src above with your actual logo URL */}
          </div>
          <span className="text-base md:text-xl truncate max-w-[160px] md:max-w-none">MAHANT LAL DAS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white hover:text-white/90 font-medium transition-smooth px-2 py-1 lg:px-3 lg:py-2 rounded-full hover:bg-blue-700 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 transition-smooth" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out bg-blue-800/95 backdrop-blur-lg border-b",
          mobileMenuOpen 
            ? "top-[57px] opacity-100 pointer-events-auto" 
            : "top-[-100%] opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col py-4 px-4 space-y-4">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-base font-medium text-white hover:text-white/90 transition-smooth px-3 py-2 text-center rounded-full hover:bg-blue-700",
                mobileMenuOpen && "animate-fade-in"
              )}
              style={{ animationDelay: `${100 + i * 50}ms` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
