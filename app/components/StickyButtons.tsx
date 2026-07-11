export default function StickyButtons() {
  return (
    <>
      <a href="https://wa.me/8801819219435" className="sticky-wa" target="_blank" rel="noopener noreferrer" title="WhatsApp Appointment">💬</a>
      <a href="tel:+8801819219435" className="sticky-call" title="Call Now">📞</a>
      <div className="mobile-cta-bar">
        <a href="tel:+8801819219435" className="mcta-call">📞 Call Now</a>
        <a href="https://wa.me/8801819219435" className="mcta-wa" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
      </div>
    </>
  );
}
