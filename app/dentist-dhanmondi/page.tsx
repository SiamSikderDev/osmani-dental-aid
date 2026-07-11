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
  { icon: "🦷", title: "Root Canal Treatment", desc: "Gentle, pain-free root canal treatment in Dhanmondi. Save your natural tooth with modern techniques under Prof. Dr. Osmani's care." },
  { icon: "🪥", title: "Dental Scaling & Cleaning", desc: "Professional dental scaling to remove plaque, tartar, and stains. A cleaner, healthier smile in one visit at our Dhanmondi clinic." },
  { icon: "🦾", title: "Dental Implants", desc: "Permanent, natural-feeling tooth replacement by Prof. Dr. Osmani. Dental implants that look and function just like your real tooth." },
  { icon: "👑", title: "Dental Crown & Cap", desc: "Restore and protect damaged teeth with precision-fitted dental crowns. Long-lasting, natural-looking results in Dhanmondi." },
  { icon: "💎", title: "Veneers & Cosmetic Dentistry", desc: "Transform your smile with veneers, whitening, and complete smile design. Expert cosmetic dentistry right here in Dhanmondi." },
  { icon: "🚨", title: "Emergency Dental Care", desc: "Same-day emergency dental care in Dhanmondi. Call or WhatsApp anytime for urgent tooth pain, broken tooth, or dental abscess." },
];

const reviews = [
  { stars: "★★★★★", text: "Best dental clinic in Dhanmondi. Prof. Dr. Osmani explained everything before starting. His expertise as a Professor really shows. Prices are very fair. My whole family comes here now.", name: "Kamal Uddin", area: "📍 Dhanmondi, Dhaka", avatar: "K" },
  { stars: "★★★★★", text: "I've been going to Osmani Dental Aid for years. The Professor is the best dentist in Dhanmondi — hands down. Always professional, always caring.", name: "Sabrina Haque", area: "📍 Dhanmondi 27, Dhaka", avatar: "S" },
  { stars: "★★★★★", text: "Got my root canal done here. Pain-free and quick. The clinic is very clean and modern. Highly recommend for anyone in Dhanmondi looking for a dentist.", name: "Tanvir Ahmed", area: "📍 Dhanmondi, Dhaka", avatar: "T" },
];

const faqItems = [
  { q: "Which is the best dental clinic in Dhanmondi?", a: "Osmani Dental Aid is one of the most trusted and highly-rated dental clinics in Dhanmondi — led by Professor Dr. Shibbir Osmani with 30+ years of experience. We serve patients from all across Dhanmondi." },
  { q: "Where is Osmani Dental Aid located in Dhanmondi?", a: "Our clinic is located in the heart of Dhanmondi, Dhaka. It's easily reachable from Dhanmondi 27, Dhanmondi Road 27, and all nearby areas. View on Google Maps for exact directions." },
  { q: "Do you offer emergency dental care in Dhanmondi?", a: "Yes! We provide same-day emergency dental care. Call +880 1819-219435 or WhatsApp immediately for urgent cases — tooth pain, broken tooth, dental abscess, or any dental emergency." },
  { q: "What services does your Dhanmondi clinic offer?", a: "We offer complete dental care including root canal, dental implants, crowns, bridges, veneers, scaling, tooth filling, wisdom tooth removal, braces, cosmetic dentistry, and emergency dental care." },
];

const areaTags = [
  "📍 Dhanmondi", "📍 Dhanmondi 27", "📍 Dhanmondi Road 27",
  "📍 Dhanmondi R/A", "📍 Dhanmondi Residential Area", "📍 Jigatola",
  "📍 Elephant Road", "📍 Katabon", "📍 New Market", "📍 Mirpur Road",
];

export default function DentistDhanmondi() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section id="hero">
        <div className="hero-bg-orb orb1" />
        <div className="hero-bg-orb orb2" />

        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="badge-dot" />
            Dhanmondi&apos;s Most Trusted Dental Clinic — 30+ Years of Excellence
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            Best <span>Dentist in Dhanmondi</span><br />— Pain-Free Treatment
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Looking for a trusted <strong style={{ color: "var(--white)" }}>dentist in Dhanmondi</strong>? Led by <strong style={{ color: "var(--white)" }}>Professor Dr. Shibbir Osmani</strong>, Ex Vice Principal of Dhaka Dental College — Osmani Dental Aid has served Dhanmondi residents for over 30 years with expert, compassionate dental care.
          </motion.p>
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            <a href="tel:+8801819219435" className="btn-primary">📞 Call Now</a>
            <a href="https://wa.me/8801819219435" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Appointment</a>
            <a href="https://maps.app.goo.gl/2c8s5e1Lxg1YU9579" className="btn-outline" target="_blank" rel="noopener noreferrer">📍 Get Directions</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-doctor"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="doctor-card">
            <div className="doc-glow" />
            <img src="/doctor.jpg" alt="Professor Dr. Shibbir Osmani — Best Dentist in Dhanmondi" />
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

      {/* ═══ SERVICES ═══ */}
      <section id="services">
        <Reveal className="section-header">
          <span className="section-eyebrow">Dental Services in Dhanmondi</span>
          <h2 className="section-title">Complete Dental Care<br /><span>in Dhanmondi</span></h2>
          <p className="section-sub">All dental services under one roof in Dhanmondi — led by Prof. Dr. Shibbir Osmani with 30+ years of expertise.</p>
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

      {/* ═══ REVIEWS ═══ */}
      <section id="reviews">
        <Reveal className="section-header">
          <span className="section-eyebrow">Dhanmondi Patient Reviews</span>
          <h2 className="section-title">What Dhanmondi Patients<br /><span>Say About Us</span></h2>
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

      {/* ═══ FAQ ═══ */}
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

      {/* ═══ AREAS ═══ */}
      <section id="areas">
        <Reveal className="areas-content">
          <span className="section-eyebrow">Areas We Serve</span>
          <h2 className="section-title">Trusted Dental Care Across<br /><span>Dhanmondi & Nearby</span></h2>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>Patients from across Dhanmondi visit Osmani Dental Aid for trusted dental treatment by Prof. Dr. Shibbir Osmani.</p>
          <div className="area-tags">
            {areaTags.map((tag, i) => (
              <span key={i} className="area-tag">{tag}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact">
        <Reveal className="section-header">
          <span className="section-eyebrow">Visit Us in Dhanmondi</span>
          <h2 className="section-title">Visit <span>Osmani Dental Aid</span></h2>
          <p className="section-sub">Located in the heart of Dhanmondi — easily reachable from all nearby areas.</p>
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

      <Footer areaName="Dhanmondi" />
      <StickyButtons />
    </>
  );
}
