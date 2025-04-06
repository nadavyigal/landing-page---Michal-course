"use client";

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#333333] hover:text-[#d4a373] transition-colors">מיכל סלונים</Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 space-x-reverse items-center">
              <li><Link href="#about" className="text-gray-600 hover:text-[#d4a373] transition-colors font-medium">אודות</Link></li>
              <li><Link href="#course-content" className="text-gray-600 hover:text-[#d4a373] transition-colors font-medium">תוכן הקורס</Link></li>
              <li><Link href="#testimonials" className="text-gray-600 hover:text-[#d4a373] transition-colors font-medium">המלצות</Link></li>
              <li><Link href="#pricing" className="text-gray-600 hover:text-[#d4a373] transition-colors font-medium">מחיר</Link></li>
              <li><Link href="#faq" className="text-gray-600 hover:text-[#d4a373] transition-colors font-medium">שאלות נפוצות</Link></li>
              <li><Link href="#pricing" className="bg-[#d4a373] hover:bg-[#c4946a] text-white font-medium py-2 px-5 rounded-lg transition-colors">הרשמה לקורס</Link></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col space-y-4 pb-4">
            <li><Link href="#about" className="block text-gray-600 hover:text-[#d4a373] py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>אודות</Link></li>
            <li><Link href="#course-content" className="block text-gray-600 hover:text-[#d4a373] py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>תוכן הקורס</Link></li>
            <li><Link href="#testimonials" className="block text-gray-600 hover:text-[#d4a373] py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>המלצות</Link></li>
            <li><Link href="#pricing" className="block text-gray-600 hover:text-[#d4a373] py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>מחיר</Link></li>
            <li><Link href="#faq" className="block text-gray-600 hover:text-[#d4a373] py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>שאלות נפוצות</Link></li>
            <li><Link href="#pricing" className="block bg-[#d4a373] hover:bg-[#c4946a] text-white font-medium py-2 px-5 rounded-lg transition-colors text-center mt-2" onClick={() => setMobileMenuOpen(false)}>הרשמה לקורס</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

