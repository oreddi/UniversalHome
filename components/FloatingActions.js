export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <a
        href="https://wa.me/919398861612?text=Hello%20Universal%20Home,%20I%20want%20to%20know%20more%20about%20old%20age%20home%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-whatsapp"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="badge-count">1</span>
      </a>
      <a href="tel:+919398861612" className="float-btn float-call" title="Emergency Call">
        <i className="fas fa-phone-alt"></i>
      </a>
    </div>
  );
}
