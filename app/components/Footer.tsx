import Link from "next/link";

export default function Footer({ areaName }: { areaName?: string }) {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="nav-logo" href="/" style={{ marginBottom: 12 }}>
            <img src="/teeth_logo.jpeg" alt="Osmani Dental Aid" className="logo-icon" style={{ objectFit: "cover" }} />
            <div className="logo-text">
              <span className="logo-name">Osmani Dental Aid</span>
              <span className="logo-sub">Prof. Dr. Shibbir Osmani</span>
            </div>
          </Link>
          <p>
            Trusted dental clinic{areaName ? ` near ${areaName}` : ""} in Dhanmondi, Dhaka —
            led by Professor Dr. Shibbir Osmani with over 30 years of excellence
            in dental implants, cosmetic dentistry, and complete oral care.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/#services">Root Canal Treatment</Link></li>
            <li><Link href="/#services">Dental Scaling</Link></li>
            <li><Link href="/#services">Dental Implants</Link></li>
            <li><Link href="/#services">Cosmetic Dentistry</Link></li>
            <li><Link href="/#services">Emergency Care</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Areas We Serve</h4>
          <ul>
            <li><Link href="/dentist-dhanmondi">Dhanmondi</Link></li>
            <li><Link href="/dental-clinic-green-road">Green Road</Link></li>
            <li><Link href="/dentist-panthapath">Panthapath</Link></li>
            <li><Link href="/dental-care-hatirpool">Hatirpool</Link></li>
            <li><Link href="/best-dentist-kolabagan">Kolabagan</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+8801819219435">📞 +880 1819-219435</a></li>
            <li><a href="https://wa.me/8801819219435" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a></li>
            <li><a href="https://maps.app.goo.gl/2c8s5e1Lxg1YU9579" target="_blank" rel="noopener noreferrer">📍 Get Directions</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Osmani Dental Aid | Prof. Dr. Shibbir Osmani | Best Dentist in Dhanmondi, Dhaka</span>
        <span style={{ color: "var(--cyan)" }}>30+ Years of Excellence ❤️</span>
      </div>
    </footer>
  );
}
