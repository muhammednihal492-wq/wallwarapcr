import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Projects from './Projects';
import Guarantees from './Guarantees';
import Materials from './Materials';
import Services from './Services';
import LatestWorks from './LatestWorks';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <motion.div 
            className={styles.heroText}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.heroEyebrow}>
              Luxury Interior Transformations
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.title}>
              Transform Your Interiors with <span className="text-highlight">Premium</span> Wall Wrapping
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.subtitle}>
              Upgrade your walls, furniture, and interiors without expensive renovation.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href="#services" className={`btn btn-primary ${styles.heroBtn}`}>
                Explore Our Services <ArrowRight className={styles.btnIcon} size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className={`container ${styles.aboutGrid}`}>
          <motion.div 
            className={styles.aboutImageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageBackdrop}></div>
            <img src="/assets/about_wrap.png" alt="Premium interior wrap application" className={styles.aboutImage} />
            <div className={styles.floatingBadge}>
              <span className={styles.badgeNumber}>10+</span>
              <span className={styles.badgeText}>Years<br/>Experience</span>
            </div>
          </motion.div>

          <motion.div 
            className={styles.aboutTextContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.sectionTag}>About WallWrap</div>
            <h2 className={styles.sectionTitle}>Precision, Quality, and <span className="text-highlight">Modern Design</span></h2>
            <div className="gold-divider"></div>
            <p className="mb-3">
              WallWrap specializes in transforming interiors using advanced wrapping technology. Our solutions allow you to upgrade kitchens, bathrooms, wardrobes, doors, floors, and other interior surfaces without demolition or expensive renovations.
            </p>
            <p className="mb-4">
              We use highly durable, premium materials to deliver stylish and long-lasting interior finishes for homes and offices. Save time and money while achieving a high-end luxury look.
            </p>
            
            <ul className={styles.featuresList}>
              <li><CheckCircle className="text-highlight" size={20} /> Zero Demolition Required</li>
              <li><CheckCircle className="text-highlight" size={20} /> Heat & Water Resistant</li>
              <li><CheckCircle className="text-highlight" size={20} /> Fraction of Renovation Costs</li>
            </ul>

            <Link to="/contact" className={`btn btn-dark mt-4`}>
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <div id="services">
        <Services />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="guarantees">
        <Guarantees />
      </div>
      
      <div id="materials">
        <Materials />
      </div>

      <div id="latest-works">
        <LatestWorks />
      </div>
    </div>
  );
}
