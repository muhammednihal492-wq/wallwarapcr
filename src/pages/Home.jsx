import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Projects from './Projects';
import Guarantees from './Guarantees';
import Materials from './Materials';
import Services from './Services';
import ScrollShowcase from './ScrollShowcase';
import TransformationJourney from './TransformationJourney';
import ClientExperiences from './ClientExperiences';

export default function Home() {


  return (
    <div className={styles.homeContainer}>
      <ScrollShowcase />

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
              <span className={styles.badgeNumber}>5+</span>
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

      <TransformationJourney />

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

      <ClientExperiences />
    </div>
  );
}
