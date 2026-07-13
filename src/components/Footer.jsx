import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerAbout}>
          <p className={styles.footerText}>
            WallWrap Creations (Veespo) is the best interior wrapping company in Dubai, providing premium kitchen cabinet wrapping, wardrobe wrapping, and surface wrapping across the UAE with zero demolition.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://wa.me/971589944602" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} /></a>
            <a href="https://www.instagram.com/wallwrapcreations?igsh=MTMydDUydzMyNGxlbg==" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="tel:+971589944602" aria-label="Phone Call"><Phone size={20} /></a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Bespoke Projects</Link></li>
            <li><Link to="/materials">Material Finishes</Link></li>
            <li><Link to="/faq">FAQ Support</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h4 className={styles.footerTitle}>Service Areas</h4>
          <ul>
            <li><Link to="/locations/dubai">Dubai</Link></li>
            <li><Link to="/locations/abu-dhabi">Abu Dhabi</Link></li>
            <li><Link to="/locations/sharjah">Sharjah</Link></li>
            <li><Link to="/locations/ajman">Ajman</Link></li>
            <li><Link to="/locations/al-ain">Al Ain</Link></li>
            <li><Link to="/guarantees" style={{ color: 'var(--gold-soft)', fontWeight: 500 }}>Our Guarantees</Link></li>
          </ul>
          <div style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--gold-soft)', marginTop: '15px' }}>
            * Serving all Emirates of UAE
          </div>
        </div>

        <div className={styles.footerContact}>
          <h4 className={styles.footerTitle}>Contact Us</h4>
          <ul>
            <li>
              <Phone size={18} className={styles.footerIcon} />
              <span>+971589944602</span>
            </li>
            <li>
              <Mail size={18} className={styles.footerIcon} />
              <span>contact@wallwrapcreations.com</span>
            </li>
            <li>
              <MapPin size={18} className={styles.footerIcon} />
              <span>SHAMS, U.A.E</span>
            </li>
          </ul>
          <div className={styles.developerLinkWrapper}>
            <a href="https://www.instagram.com/intellex.web?igsh=MXc4Z2Uwd243OHpqdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.highlightLink}>
              Meet the Developers <span className={styles.pulse}></span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Wallwrap Creations LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
