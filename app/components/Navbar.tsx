"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Who We Are", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "News & Resources", href: "/news" },
    { name: "Opportunities", href: "/opportunities" },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-4" 
          : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        
        {/* LOGO */}
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img 
            src="/images/primexpertlogo.webp" 
            alt="Prime Expertise Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </a>

        {/* NAV LINKS PAMOJA NA BUTTON YA CONTACT US */}
        <div className="hidden lg:flex items-center space-x-8">
          
          {/* Menu Links (Sasa zote zinafanana mwanzo mwisho) */}
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[15px] font-bold text-gray-500 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Contact Us Button */}
          <a 
            href="/contact" 
            className="border-2 border-gray-900 bg-transparent text-gray-900 px-6 py-2 text-[15px] font-bold hover:bg-primary hover:text-white transition-colors duration-300 ml-2 hover:border-none"
          >
            Contact Us
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="lg:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`lg:hidden absolute w-full bg-white border-b border-gray-200 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-bold text-gray-500 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/contact" 
            className="border-2 border-gray-900 bg-gray-900 text-white px-6 py-3 text-base font-bold text-center w-fit"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}