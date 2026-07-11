"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setNavShadow(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav style={{ boxShadow: navShadow ? "0 8px 40px rgba(0,0,0,0.5)" : "none" }}>
        <Link className="nav-logo" href="/">
          <div className="logo-icon">🦷</div>
          <div className="logo-text">
            <span className="logo-name">Osmani Dental Aid</span>
            <span className="logo-sub">Prof. Dr. Shibbir Osmani</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#services">Services</Link></li>
          <li className={`nav-dropdown${dropdownOpen ? " open" : ""}`} ref={dropdownRef}>
            <button
              className="nav-dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              Areas
            </button>
            <div
              className="dropdown-menu"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/dentist-dhanmondi" onClick={() => setDropdownOpen(false)}><span>🏥</span> Dentist in Dhanmondi</Link>
              <Link href="/dental-clinic-green-road" onClick={() => setDropdownOpen(false)}><span>🌿</span> Dental Clinic Green Road</Link>
              <Link href="/dentist-panthapath" onClick={() => setDropdownOpen(false)}><span>🛣️</span> Dentist near Panthapath</Link>
              <Link href="/dental-care-hatirpool" onClick={() => setDropdownOpen(false)}><span>🌊</span> Dental Care Hatirpool</Link>
              <Link href="/best-dentist-kolabagan" onClick={() => setDropdownOpen(false)}><span>🌳</span> Best Dentist Kolabagan</Link>
            </div>
          </li>
          <li><Link href="/#expertise">Our Doctor</Link></li>
          <li><Link href="/#reviews">Reviews</Link></li>
          <li><Link href="/#faq">FAQ</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><a href="https://wa.me/8801819219435" className="nav-cta" target="_blank" rel="noopener noreferrer">📅 Book Now</a></li>
        </ul>
        <button
          className={`nav-mobile-toggle${mobileMenuOpen ? " active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="ham" /><span className="ham" /><span className="ham" />
        </button>
      </nav>

      <div className={`nav-mobile-menu${mobileMenuOpen ? " open" : ""}`}>
        <Link href="/#services" onClick={closeMobileMenu}>Our Services</Link>
        <Link href="/#expertise" onClick={closeMobileMenu}>Our Doctor</Link>
        <Link href="/#reviews" onClick={closeMobileMenu}>Reviews</Link>
        <Link href="/#faq" onClick={closeMobileMenu}>FAQ</Link>
        <Link href="/#contact" onClick={closeMobileMenu}>Contact</Link>
        <span className="mobile-section-label">📍 Areas We Serve</span>
        <Link className="area-link" href="/dentist-dhanmondi" onClick={closeMobileMenu}>🏥 Dentist in Dhanmondi</Link>
        <Link className="area-link" href="/dental-clinic-green-road" onClick={closeMobileMenu}>🌿 Dental Clinic near Green Road</Link>
        <Link className="area-link" href="/dentist-panthapath" onClick={closeMobileMenu}>🛣️ Dentist near Panthapath</Link>
        <Link className="area-link" href="/dental-care-hatirpool" onClick={closeMobileMenu}>🌊 Dental Care Hatirpool</Link>
        <Link className="area-link" href="/best-dentist-kolabagan" onClick={closeMobileMenu}>🌳 Best Dentist Kolabagan</Link>
        <a href="https://wa.me/8801819219435" target="_blank" rel="noopener noreferrer" style={{ color: "#25d366", marginTop: 4 }}>💬 WhatsApp Appointment</a>
        <a href="tel:+8801819219435" style={{ color: "var(--cyan)" }}>📞 Call Now</a>
      </div>
    </>
  );
}
