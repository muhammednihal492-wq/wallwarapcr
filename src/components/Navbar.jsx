import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Reset menu open state on route/hash location change during render to prevent cascading render effects
  const [prevLocationKey, setPrevLocationKey] = useState(location.key);
  if (location.key !== prevLocationKey) {
    setPrevLocationKey(location.key);
    setIsOpen(false);
  }

  // Determine active path logic to highlight current selection dynamically during render
  const activeHash = location.hash || location.pathname;

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (location.pathname === '/') {
        const isMobile = window.innerWidth <= 768;
        const multiplier = isMobile ? 1.5 : 2.5;
        const threshold = window.innerHeight * multiplier;
        setShowNavbar(window.scrollY >= threshold);
      } else {
        setShowNavbar(true);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.includes('#') && location.pathname === '/' && location.hash === path.substring(path.indexOf('#'))) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (path === '/' && location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Materials', path: '/materials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${!showNavbar ? styles.hidden : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" onClick={() => handleNavClick('/')} className={styles.logo}>
          <img src="/rr.png" alt="Wallwrap Logo" className={styles.logoImage} />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`${styles.navLink} ${activeHash === (link.path.includes('#') ? link.path.split('/')[1] : link.path) ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
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
              onClick={() => handleNavClick(link.path)}
              className={`${styles.mobileNavLink} ${activeHash === (link.path.includes('#') ? link.path.split('/')[1] : link.path) ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
