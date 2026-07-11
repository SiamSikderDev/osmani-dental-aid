"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import StickyButtons from "@/app/components/StickyButtons";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  { icon: "🦷", title: "Root Canal Treatment", desc: "Gentle, pain-free root canal treatment near Kolabagan. Save your natural tooth with modern techniques under Prof. Dr. Osmani's care." },
  { icon: "🪥", title: "Dental Scaling & Cleaning", desc: "Professional dental scaling to remove plaque, tartar, and stains. A cleaner, healthier smile in one visit — just minutes from Kolabagan." },
  { icon: "🦾", title: "Dental Implants", desc: "Permanent, natural-feeling tooth replacement by Prof. Dr. Osmani. Dental implants that look and function just like your real tooth." },
  { icon: "💎", title: "Veneers & Cosmetic Dentistry", desc: "Transform your smile with veneers, whitening, and complete smile design. Expert cosmetic dentistry easily accessible from Kolabagan." },
  { icon: "👑", title: "Dental Crown & Cap", desc: "Restore and protect damaged teeth with precision-fitted dental crowns. Long-lasting, natural-looking results near Kolabagan." },
  { icon: "🚨", title: "Emergency Dental Care", desc: "Same-day emergency dental care near Kolabagan. Call or WhatsApp anytime for urgent tooth pain, broken tooth, or dental abscess." },
];

const reviews = [
  { stars: "★★★★★", text: "Got a complete smile makeover — veneers, whitening, everything. Came from Kolabagan and it was absolutely worth it. The cosmetic dentistry expertise here is outstanding. Confidence transformed.", name: "Nadia Rahman", area: "📍 Kolabagan, Dhaka", avatar: "N" },
  { stars: "★★★★★", text: "Premium dental care for Kolabagan residents. Prof. Dr. Osmani is the best dentist I've ever visited. His attention to detail is remarkable. My whole family comes here now.", name: "Imran Hossain", area: "📍 Kolabagan, Dhaka", avatar: "I" },
  { stars: "★★★★★", text: "Just a short drive from Kolabagan. Got my dental implants done here — completely natural looking. Prof. Dr. Osmani is truly a specialist. Worth every taka.", name: "Sabrina Haque", area: "📍 Kolabagan, Dhaka", avatar: "S" },
];

const faqItems = [
  { q: "Is there a good dental clinic near Kolabagan?", a: "Yes! Osmani Dental Aid is located in Dhanmondi, just a short drive from Kolabagan. Led by Professor Dr. Shibbir Osmani with 30+ years of experience, it's one of the most trusted dental clinics near Kolabagan." },
  { q: "How far is Osmani Dental Aid from Kolabagan?", a: "Our clinic in Dhanmondi is easily accessible from Kolabagan — just a short drive or auto-rickshaw ride away. View on Google Maps for exact directions." },
  { q: "Do you offer cosmetic dentistry for Kolabagan patients?", a: "Yes! We specialise in cosmetic dentistry — veneers, whitening, smile design, and complete smile makeovers. Patients from Kolabagan regularly visit us for cosmetic treatments." },
  { q: "Do you offer emergency dental care for Kolabagan patients?", a: "Yes! We provide same-day emergency dental care. Call +880 1819-219435 or WhatsApp immediately for urgent cases." },
];

const areaTags = [
  "📍 Kolabagan", "📍 Dhanmondi", "📍 Green Road", "📍 Panthapath",
  "📍 Hatirpool", "📍 Elephant Road", "📍 Katabon", "📍 New Market",
  "📍 Farmgate", "📍 Shahbag",
];

export default function BestDentistKolabagan() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      <Navbar />

      <section id="hero">
        <div className="hero-bg-orb orb1" />
        <div className="hero-bg-orb orb2" />
        <div className="hero-content">
          <motion.div className="hero-badge" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="badge-dot" />
            Trusted Dental Clinic Near Kolabagan — 30+ Years
          </motion.div>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <span>Best Dentist</span> Near<br />Kolabagan —<br />Pain-Free Treatment
          </motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Looking for the <strong style={{ color: "var(--white)" }}>best dentist near Kolabagan</strong>? Led by <strong style={{ color: "var(--white)" }}>Professor Dr. Shibbir Osmani</strong>, Ex Vice Principal of Dhaka Dental College — Osmani Dental Aid is just a short drive from Kolabagan, serving patients for over 30 years.
          </motion.p>
          <motion.div className="hero-btns" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}>
            <a href="tel:+8801819219435" className="btn-primary">📞 Call Now</a>
            <a href="https://wa.me/8801819219435" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Appointment</a>
            <a href="https://maps.app.goo.gl/2c8s5e1Lxg1YU9579" className="btn-outline" target="_blank" rel="noopener noreferrer">📍 Get Directions</a>
          </motion.div>
        </div>
        <motion.div className="hero-doctor" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <div className="doctor-card">
            <div className="doc-glow" />
            <img src="/doctor.jpg" alt="Professor Dr. Shibbir Osmani — Best Dentist near Kolabagan" />
            <div className="doctor-overlay">
              <div className="doctor-name">Prof. Dr. Shibbir <span>Osmani</span></div>
              <div className="doctor-title">Professor &amp; Ex Vice Principal<br />Dhaka Dental College</div>
              <div className="doctor-tags">
                <span className="doctor-tag">Dental Implants</span>
                <span className="doctor-tag">Cosmetic Dentistry</span>
                <span className="doctor-tag">30+ Years</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services">
        <Reveal className="section-header">
          <span className="section-eyebrow">Dental Services Near Kolabagan</span>
          <h2 className="section-title">Complete Dental Care<br /><span>Near Kolabagan</span></h2>
          <p className="section-sub">All dental services just a short drive from Kolabagan — led by Prof. Dr. Shibbir Osmani with 30+ years of expertise.</p>
        </Reveal>
        <div className="services-grid">
          {services.map((svc, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="svc-card">
                <span className="svc-icon">{svc.icon}</span>
                <div className="svc-title">{svc.title}</div>
                <p className="svc-desc">{svc.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="reviews">
        <Reveal className="section-header">
          <span className="section-eyebrow">Patient Reviews</span>
          <h2 className="section-title">What Kolabagan Patients<br /><span>Say About Us</span></h2>
        </Reveal>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="review-card">
                <div className="review-stars">{r.stars}</div>
                <p className="review-text">&quot;{r.text}&quot;</p>
                <div className="review-author">
                  <div className="review-avatar">{r.avatar}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-area">{r.area}</div>
                    <div className="google-badge">🔵 Google Review</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq">
        <Reveal className="section-header">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Frequently Asked<br /><span>Questions</span></h2>
        </Reveal>
        <div className="faq-wrap">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`faq-item${openFaq === i ? " open" : ""}`}>
                <div className="faq-q" onClick={() => toggleFaq(i)}>
                  {item.q}
                  <i className="faq-icon">+</i>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="areas">
        <Reveal className="areas-content">
          <span className="section-eyebrow">Areas We Serve</span>
          <h2 className="section-title">Trusted Dental Care Across<br /><span>Kolabagan & Nearby</span></h2>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>Patients from Kolabagan and nearby areas visit Osmani Dental Aid for trusted dental treatment.</p>
          <div className="area-tags">
            {areaTags.map((tag, i) => (
              <span key={i} className="area-tag">{tag}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="contact">
        <Reveal className="section-header">
          <span className="section-eyebrow">Visit Us</span>
          <h2 className="section-title">Visit <span>Osmani Dental Aid</span></h2>
          <p className="section-sub">Easily accessible from Kolabagan — just a short drive away.</p>
        </Reveal>
        <div className="contact-wrap">
          <div className="contact-info">
            <Reveal><div className="contact-detail"><span className="contact-detail-icon">👨‍⚕️</span><div><h4>Lead Specialist</h4><p>Prof. Dr. Shibbir Osmani<br />Professor &amp; Ex Vice Principal, Dhaka Dental College</p></div></div></Reveal>
            <Reveal><div className="contact-detail"><span className="contact-detail-icon">📍</span><div><h4>Address</h4><p>Dhanmondi, Dhaka, Bangladesh</p><a href="https://maps.app.goo.gl/2c8s5e1Lxg1YU9579" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cyan)", fontSize: "0.8rem", fontWeight: 600, marginTop: 5, display: "inline-block" }}>View on Google Maps →</a></div></div></Reveal>
            <Reveal><div className="contact-detail"><span className="contact-detail-icon">📞</span><div><h4>Phone</h4><a href="tel:+8801819219435">+880 1819-219435</a></div></div></Reveal>
            <Reveal><div className="contact-detail"><span className="contact-detail-icon">💬</span><div><h4>WhatsApp Appointment</h4><a href="https://wa.me/8801819219435" target="_blank" rel="noopener noreferrer">+880 1819-219435</a></div></div></Reveal>
            <Reveal><div className="contact-detail"><span className="contact-detail-icon">🕐</span><div><h4>Opening Hours</h4><p>Saturday – Thursday: 9:00 AM – 9:00 PM</p><p>Friday: By Appointment</p></div></div></Reveal>
            <Reveal>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+8801819219435" className="btn-primary" style={{ flex: 1, justifyContent: "center", minWidth: 130 }}>📞 Call Now</a>
                <a href="https://wa.me/8801819219435" className="btn-whatsapp" style={{ flex: 1, justifyContent: "center", minWidth: 130 }} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              </div>
            </Reveal>
          </div>
          <Reveal className="map-container">
            <iframe src="https://maps.google.com/maps?q=Osmani+Dental+Aid+Dhanmondi+Dhaka&output=embed&z=16" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </section>

      <Footer areaName="Kolabagan" />
      <StickyButtons />
    </>
  );
}
