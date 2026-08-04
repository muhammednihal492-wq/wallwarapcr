import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Determine active path logic to highlight current selection
    if (location.pathname === '/contact') {
      setActiveHash('/contact');
    } else {
      setActiveHash(location.hash || '/');
    }
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed manual hash listener as react-router useLocation handles it nicely

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Latest Works', path: '/#latest-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          Wall<span className="text-highlight">Wrap</span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.navLink} ${activeHash === (link.path.includes('#') ? link.path.split('/')[1] : link.path) ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>Get a Quote</Link>
        </div>

        {/* Mobile menu toggle */}
        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavLink} ${activeHash === (link.path.includes('#') ? link.path.split('/')[1] : link.path) ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`btn btn-primary ${styles.mobileCtaBtn}`}>Get a Quote</Link>
        </div>
      </div>
    </nav>
  );
}
