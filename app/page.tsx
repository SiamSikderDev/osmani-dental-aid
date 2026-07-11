"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons";

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

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}+
    </span>
  );
}

const trustStats = [
  { icon: "😊", count: 5000, label: "Happy Patients" },
  { icon: "✅", count: 8000, label: "Successful Treatments" },
  { icon: "🏅", count: 30, label: "Years of Experience" },
  { icon: "⭐", count: 500, label: "5-Star Reviews" },
  { icon: "🎓", count: 1, label: "Professor-Led Clinic" },
];

const specialties = [
  { icon: "🦾", text: "Dental Implants — permanent, natural-feeling tooth replacement" },
  { icon: "👑", text: "Dental Crowns (Cap) — full tooth restoration & protection" },
  { icon: "🌉", text: "Dental Bridges — replace missing teeth with fixed solutions" },
  { icon: "💎", text: "Veneers, Inlay & Onlay — precision cosmetic restorations" },
  { icon: "😁", text: "Full or Partial Dentures — comfortable, natural-looking" },
  { icon: "✨", text: "Smile Design & Aesthetic Dentistry — transform your smile" },
];

const services = [
  { icon: "🦷", title: "Root Canal Treatment", desc: "Severe tooth pain? Our gentle root canal treatment in Dhanmondi relieves pain and saves your natural tooth — with minimal discomfort using modern techniques.", link: "/root-canal-treatment-panthapath", linkText: "Learn More →" },
  { icon: "🪥", title: "Dental Scaling & Cleaning", desc: "Remove plaque, tartar, and stains with professional dental scaling near you. Cleaner, healthier smile in one visit — trusted by thousands across Green Road area.", link: "/dental-scaling-dhanmondi", linkText: "Learn More →" },
  { icon: "🦾", title: "Dental Implants", desc: "Missing a tooth? Prof. Dr. Osmani specialises in dental implants — a permanent, natural-feeling solution that looks and functions just like your real tooth.", link: "https://wa.me/8801819219435", linkText: "Book Appointment →" },
  { icon: "👑", title: "Dental Crown & Cap", desc: "Restore and protect damaged teeth with precision-fitted dental crowns. Long-lasting, natural-looking results — a specialty of Prof. Dr. Shibbir Osmani.", link: "https://wa.me/8801819219435", linkText: "Book Appointment →" },
  { icon: "🌉", title: "Dental Bridge", desc: "Replace one or more missing teeth with a fixed dental bridge. Restore your bite, speech, and smile — expertly fitted at our Dhanmondi clinic.", link: "https://wa.me/8801819219435", linkText: "Book Appointment →" },
  { icon: "💎", title: "Veneers, Inlay & Onlay", desc: "Precision cosmetic restorations to correct shape, colour, and chips. Veneers, inlays, and onlays offer a minimally invasive path to a perfect smile.", link: "https://wa.me/8801819219435", linkText: "Book Appointment →" },
  { icon: "😁", title: "Full & Partial Dentures", desc: "Replace multiple missing teeth with comfortable, natural-looking full or partial dentures. Custom-fitted at our Dhanmondi clinic for maximum comfort and function.", link: "https://wa.me/8801819219435", linkText: "Book Appointment →" },
  { icon: "✨", title: "Cosmetic Dentistry & Smile Design", desc: "Transform your smile with veneers, whitening, and complete smile design. Our cosmetic dentistry in Dhaka helps patients look and feel their absolute best.", link: "https://wa.me/8801819219435", linkText: "Book Appointment →" },
  { icon: "🔵", title: "Tooth Filling (Composite)", desc: "Natural-looking composite tooth filling in Dhanmondi. Quick, durable, and pain-free — restore your tooth to full function the same day.", link: "/tooth-filling-dhanmondi", linkText: "Learn More →" },
  { icon: "😬", title: "Wisdom Tooth Removal", desc: "Safe and comfortable wisdom tooth extraction for patients in Hatirpool and nearby Dhaka areas. Quick recovery with expert, gentle technique.", link: "https://wa.me/8801819219435", linkText: "Book Appointment →" },
  { icon: "📐", title: "Orthodontic Braces", desc: "Straighten misaligned teeth with modern braces or aligners. Affordable orthodontic treatment in Dhanmondi for children, teens, and adults.", link: "https://wa.me/8801819219435", linkText: "Book Appointment →" },
  { icon: "🚨", title: "Emergency Dental Care", desc: "Sudden tooth pain or dental emergency? Call us now. Same-day emergency dental care for patients in Dhanmondi, Kolabagan, and all surrounding areas.", link: "/tooth-pain-treatment-green-road", linkText: "Learn More →" },
];

const outcomes = [
  { icon: "🔧", title: "Repair Badly Damaged Teeth", desc: "Even severely broken, cracked, or decayed teeth can often be saved and restored to full strength — with crowns, inlays, onlays, or root canal treatment at our Dhanmondi clinic." },
  { icon: "🦷", title: "Replace Missing Teeth", desc: "Lost a tooth? We offer dental implants, bridges, and dentures to replace missing teeth permanently — restoring your full smile, function, and confidence naturally." },
  { icon: "⚙️", title: "Improve Your Bite, Aesthetics & Speech", desc: "Misaligned teeth or bite issues affect how you eat, speak, and feel about yourself. Our orthodontic and restorative treatments correct all of this effectively." },
  { icon: "🦴", title: "Correct TMJ Issues", desc: "Jaw pain, clicking, or difficulty opening your mouth? TMJ disorders are treatable. Prof. Dr. Osmani provides diagnosis and effective treatment for TMJ and jaw-related problems." },
  { icon: "😌", title: "Relieve Mouth & Facial Pain", desc: "Persistent facial pain, mouth pain, or headaches linked to dental issues should not be ignored. We identify the dental root cause and treat it — bringing lasting relief." },
  { icon: "🌟", title: "Boost Your Confidence in Your Smile", desc: "A beautiful smile changes everything. Whether it's whitening, veneers, smile design, or straightening — we help you achieve the smile you deserve, right here in Dhanmondi." },
];

const locations = [
  { icon: "🏥", name: "Dentist in Dhanmondi", desc: "Our main clinic. Trusted dental care — scaling, root canal, cosmetic dentistry, implants — for all Dhanmondi residents. 30+ years of neighbourhood excellence.", link: "/dentist-dhanmondi", linkText: "View Dhanmondi Page →" },
  { icon: "🌿", name: "Dental Clinic near Green Road", desc: "Serving Green Road patients with teeth scaling, whitening, and emergency dental care. Just minutes away — easily accessible from Green Road.", link: "/dental-clinic-green-road", linkText: "View Green Road Page →" },
  { icon: "🛣️", name: "Dentist near Panthapath", desc: "Root canal, tooth filling, and emergency dental care for Panthapath patients. Conveniently located just off Panthapath main road.", link: "/dentist-panthapath", linkText: "View Panthapath Page →" },
  { icon: "🌊", name: "Dental Care in Hatirpool", desc: "Trusted dental services for Hatirpool area — wisdom tooth removal, braces, scaling and more. Affordable and hygienic care just nearby.", link: "/dental-care-hatirpool", linkText: "View Hatirpool Page →" },
  { icon: "🌳", name: "Best Dentist near Kolabagan", desc: "Premium dental care for Kolabagan residents — cosmetic dentistry, implants, and regular check-ups. Your trusted neighbourhood dental partner.", link: "/best-dentist-kolabagan", linkText: "View Kolabagan Page →" },
];

const whyItems = [
  { icon: "🎓", title: "Professor-Led Dental Care", desc: "Led by Prof. Dr. Shibbir Osmani, Ex Vice Principal of Dhaka Dental College — you receive academic-level expertise with personal, compassionate care." },
  { icon: "🏅", title: "30+ Years of Dental Excellence", desc: "Over three decades of trusted care. Thousands of patients treated. Generations of Dhanmondi families have trusted us with their smiles." },
  { icon: "📍", title: "Conveniently Located in Dhanmondi", desc: "Easily reachable from Green Road, Panthapath, Kolabagan, Hatirpool — no long commute for world-class dental care." },
  { icon: "🔬", title: "Modern Dental Technology", desc: "Latest equipment for accurate diagnosis and comfortable treatment. We invest in technology so your visits are faster and more effective." },
  { icon: "💚", title: "Strictly Hygienic Environment", desc: "Full sterilization and infection control — always. Your safety is never negotiated at our Dhanmondi clinic." },
  { icon: "🚨", title: "Emergency Dental Care Available", desc: "Tooth pain doesn't wait. Reach us anytime via WhatsApp or phone for emergency dental appointments." },
];

const reviews = [
  { stars: "★★★★★", text: "I came from Green Road with terrible tooth pain at night. Prof. Dr. Osmani saw me the same day — root canal was so comfortable. I couldn't believe how painless it was. Highly recommend.", name: "Rafiqul Islam", area: "📍 Green Road, Dhaka", avatar: "R" },
  { stars: "★★★★★", text: "Found Osmani Dental Aid searching for dental scaling near Panthapath. The clinic is spotlessly clean and very professional. The Professor himself checked me. Scaling results were amazing.", name: "Shirin Akter", area: "📍 Panthapath, Dhaka", avatar: "S" },
  { stars: "★★★★★", text: "Had my dental implant done here. The procedure was thorough and the result looks completely natural. Prof. Dr. Osmani is truly a specialist. Worth every taka.", name: "Mahmud Hasan", area: "📍 Hatirpool, Dhaka", avatar: "M" },
  { stars: "★★★★★", text: "Got a complete smile makeover — veneers, whitening, everything. Came from Kolabagan and it was absolutely worth it. The cosmetic dentistry expertise here is outstanding. Confidence transformed.", name: "Nadia Rahman", area: "📍 Kolabagan, Dhaka", avatar: "N" },
  { stars: "★★★★★", text: "Best dental clinic in Dhanmondi. Prof. Dr. Osmani explained everything before starting. His expertise as a Professor really shows. Prices are very fair. My whole family comes here now.", name: "Kamal Uddin", area: "📍 Dhanmondi, Dhaka", avatar: "K" },
  { stars: "★★★★★", text: "Emergency appointment on a weekend — they responded on WhatsApp within minutes. The care and professionalism here is genuinely outstanding. So grateful for this clinic.", name: "Farhana Begum", area: "📍 Central Road, Dhaka", avatar: "F" },
];

const faqItems = [
  { q: "Who is Prof. Dr. Shibbir Osmani?", a: "Prof. Dr. Shibbir Osmani is a highly experienced dental specialist and the founder of Osmani Dental Aid in Dhanmondi. He served as Professor and Ex Vice Principal of Dhaka Dental College. He specialises in dental implants, crowns, bridges, veneers, cosmetic dentistry, and full mouth restoration with over 30 years of clinical experience." },
  { q: "Which is the best dental clinic in Dhanmondi?", a: "Osmani Dental Aid is one of the most trusted and highly-rated dental clinics in Dhanmondi — led by a Professor-level specialist with 30+ years of experience. We serve patients from Green Road, Panthapath, Hatirpool, Kolabagan, and all nearby areas." },
  { q: "Do you provide emergency dental care in Dhanmondi?", a: "Yes! We provide same-day emergency dental care. Call +880 1819-219435 or WhatsApp immediately for urgent cases — tooth pain, broken tooth, dental abscess, or any dental emergency." },
  { q: "What does Prof. Dr. Osmani specialise in?", a: "Prof. Dr. Osmani specialises in aesthetic and cosmetic restoration — including dental implants, dental crowns, bridges, veneers, inlay, onlay, full and partial dentures, smile design, and the complete restoration of damaged or missing teeth." },
  { q: "Is root canal treatment painful?", a: "With modern techniques and proper local anesthesia, root canal treatment at Osmani Dental Aid is virtually pain-free. Most patients are surprised at how comfortable it is. The goal is to relieve your pain — not add to it." },
  { q: "Can I book an appointment through WhatsApp?", a: "Absolutely! WhatsApp is our preferred booking method. Message us at +880 1819-219435 with your name, preferred time, and service needed — and our team will confirm your appointment quickly." },
  { q: "Which areas near Dhanmondi do you serve?", a: "We regularly serve patients from Dhanmondi, Green Road, Panthapath, Kolabagan, Hatirpool, Central Road, Elephant Road, Katabon, Jigatola, Farmgate, Shahbag, and all surrounding Dhaka neighbourhoods." },
];

const areaTags = [
  "📍 Dhanmondi", "📍 Green Road", "📍 Panthapath", "📍 Kolabagan",
  "📍 Hatirpool", "📍 Central Road", "📍 Elephant Road", "📍 Katabon",
  "📍 Jigatola", "📍 Mirpur Road", "📍 Farmgate", "📍 Shahbag",
  "📍 New Market", "📍 Dhanmondi 27",
];

export default function Home() {
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
            Best <span>Dental Clinic</span><br />in Dhanmondi —<br />Pain-Free Treatment
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Led by <strong style={{ color: "var(--white)" }}>Professor Dr. Shibbir Osmani</strong>, Ex Vice Principal of Dhaka Dental College — Osmani Dental Aid has served patients from Dhanmondi, Green Road, Panthapath, Hatirpool, and Kolabagan for over 30 years with expert, compassionate dental care.
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
            <img src="/doctor.jpg" alt="Professor Dr. Shibbir Osmani — Dental Specialist, Osmani Dental Aid Dhanmondi" />
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

      {/* ═══ TRUST STATS ═══ */}
      <section id="trust">
        <div className="trust-grid">
          {trustStats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="trust-card">
                <span className="trust-icon">{s.icon}</span>
                <div className="trust-num">
                  <CountUp target={s.count} />
                </div>
                <div className="trust-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ DOCTOR EXPERTISE ═══ */}
      <section id="expertise">
        <div className="expertise-wrap">
          <div className="expertise-grid">
            <Reveal className="expert-photo">
              <img src="/doctor.jpg" alt="Professor Dr. Shibbir Osmani — Cosmetic & Restorative Dental Specialist Dhanmondi Dhaka" />
              <div className="expert-photo-badge">🎓 Professor & Ex Vice Principal — Dhaka Dental College</div>
            </Reveal>
            <div className="expert-content">
              <span className="expert-label">Meet Your Specialist</span>
              <div className="expert-name">Prof. Dr. Shibbir<br /><span>Osmani</span></div>
              <div className="expert-role"><strong>Professor &amp; Ex Vice Principal</strong> · Dhaka Dental College<br />Dental Specialist · Dhanmondi, Dhaka</div>
              <p className="expert-desc">Professor Dr. Shibbir Osmani is a highly accomplished dental specialist dedicated to the aesthetic, cosmetic restoration and replacement of lost teeth. With over 30 years of clinical and academic excellence, he brings world-class dental expertise directly to patients in Dhanmondi and across Dhaka.</p>
              <div className="expert-specialties">
                {specialties.map((sp, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="expert-spc">
                      <span className="expert-spc-icon">{sp.icon}</span>
                      <span className="expert-spc-text">{sp.text}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+8801819219435" className="btn-primary">📞 Book with the Professor</a>
                <a href="https://wa.me/8801819219435" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services">
        <Reveal className="section-header">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">Complete Dental Care<br /><span>Under One Roof</span></h2>
          <p className="section-sub">From routine scaling to advanced implants and smile design — all at our trusted Dhanmondi clinic, led by Prof. Dr. Shibbir Osmani.</p>
        </Reveal>
        <div className="services-grid">
          {services.map((svc, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="svc-card">
                <span className="svc-icon">{svc.icon}</span>
                <div className="svc-title">{svc.title}</div>
                <p className="svc-desc">{svc.desc}</p>
                <a className="svc-link" href={svc.link} target={svc.link.startsWith("http") ? "_blank" : undefined} rel={svc.link.startsWith("http") ? "noopener noreferrer" : undefined}>{svc.linkText}</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ PATIENT OUTCOMES ═══ */}
      <section id="outcomes">
        <Reveal className="section-header">
          <span className="section-eyebrow">What We Can Do For You</span>
          <h2 className="section-title">Real Problems We <span>Solve Every Day</span></h2>
          <p className="section-sub">Whatever is bothering your teeth, bite, or smile — Professor Dr. Osmani and our team have a solution for you.</p>
        </Reveal>
        <div className="outcomes-grid">
          {outcomes.map((o, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="outcome-card">
                <span className="outcome-icon">{o.icon}</span>
                <div className="outcome-title">{o.title}</div>
                <p className="outcome-desc">{o.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ LOCATION PAGES ═══ */}
      <section id="location-pages">
        <Reveal className="section-header">
          <span className="section-eyebrow">Serving Your Neighbourhood</span>
          <h2 className="section-title">Dental Care for Every<br /><span>Corner of Dhaka</span></h2>
          <p className="section-sub">We have dedicated pages for each neighbourhood — find care close to where you live.</p>
        </Reveal>
        <div className="loc-grid">
          {locations.map((loc, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Link className="loc-card" href={loc.link}>
                <span className="loc-icon">{loc.icon}</span>
                <div className="loc-name">{loc.name}</div>
                <p className="loc-desc">{loc.desc}</p>
                <span className="loc-link">{loc.linkText}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section id="why">
        <Reveal className="section-header">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">Why Thousands Choose<br /><span>Osmani Dental Aid</span></h2>
          <p className="section-sub">30 years of trust. Thousands of smiles. A Professor-led clinic — right here in Dhanmondi.</p>
        </Reveal>
        <div className="why-grid">
          <div className="why-features">
            {whyItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="why-item">
                  <span className="why-icon">{item.icon}</span>
                  <div className="why-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="why-visual">
            <img src="/doctor.jpg" alt="Prof. Dr. Shibbir Osmani at Osmani Dental Aid Dhanmondi" />
            <h3>Your Comfort is Our Priority</h3>
            <p>Prof. Dr. Osmani and our entire team are dedicated to making every patient feel calm, heard, and cared for — from the moment you walk through our door.</p>
            <div className="availability-chip"><span className="avail-dot" /> Emergency Appointments Available</div>
            <a href="tel:+8801819219435" className="btn-primary" style={{ justifyContent: "center", marginTop: 12 }}>📞 +880 1819-219435</a>
            <a href="https://wa.me/8801819219435" className="btn-whatsapp" style={{ justifyContent: "center" }} target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          </Reveal>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section id="reviews">
        <Reveal className="section-header">
          <span className="section-eyebrow">Patient Reviews</span>
          <h2 className="section-title">What Patients Say About<br /><span>Osmani Dental Aid</span></h2>
          <p className="section-sub">Real experiences from real patients across Dhanmondi and nearby Dhaka areas.</p>
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
          <span className="section-eyebrow">Service Areas</span>
          <h2 className="section-title">Serving Patients Across<br /><span>Dhanmondi & Nearby Dhaka</span></h2>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>Patients regularly visit Osmani Dental Aid from across Dhaka for trusted dental treatment by Prof. Dr. Shibbir Osmani.</p>
          <div className="area-tags">
            {areaTags.map((tag, i) => (
              <span key={i} className="area-tag">{tag}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ CONTACT & MAP ═══ */}
      <section id="contact">
        <Reveal className="section-header">
          <span className="section-eyebrow">Find Us</span>
          <h2 className="section-title">Visit <span>Osmani Dental Aid</span></h2>
          <p className="section-sub">Located in the heart of Dhanmondi — easily reachable from Green Road, Panthapath, and nearby areas.</p>
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

      <Footer />
      <StickyButtons />
    </>
  );
}
