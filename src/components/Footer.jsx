import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerAbout}>
          <Link to="/" className={styles.logo}>
            <img src="/rr.png" alt="Wallwrap Logo" className={styles.logoImage} />
          </Link>
          <p className={styles.footerText}>
            Transforming interiors with advanced wrapping technology. High-quality materials for stylish, durable interior finishes without demolition.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#guarantees">Guarantees</Link></li>
            <li><Link to="/#materials">Materials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h4 className={styles.footerTitle}>Contact Us</h4>
          <ul>
            <li>
              <Phone size={18} className={styles.footerIcon} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <Mail size={18} className={styles.footerIcon} />
              <span>hello@wallwrap.com</span>
            </li>
            <li>
              <MapPin size={18} className={styles.footerIcon} />
              <span>123 Design Avenue, Modern City, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} WallWrap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
