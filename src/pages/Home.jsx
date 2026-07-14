import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
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
      <SEO 
        title="WallWrap Creations | Premium Interior Wrapping Dubai, UAE"
        description="WallWrap Creations offers luxury interior wrapping in Dubai, UAE. Transform kitchens, wardrobes, offices, and walls with zero demolition."
        keywords="Interior Wrapping Dubai, Best Interior Wrapping Company Dubai, Premium Interior Wrapping Dubai, Kitchen Wrapping Dubai, Wardrobe Wrapping Dubai, Bathroom Wrapping Dubai, Door Wrapping Dubai, Office Wrapping Dubai, Commercial Wrapping Dubai, Vinyl Wrapping Dubai, Architectural Film Dubai"
      />
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
            <div className={styles.sectionTag}>Best Interior Wrapping Company Dubai</div>
            <h2 className={styles.sectionTitle}>Bespoke Surface Transformations in <span className="text-highlight">Dubai, UAE</span></h2>
            <div className="gold-divider"></div>
            <p className="mb-3">
              WallWrap Creations is recognized as the best interior wrapping company in Dubai, specializing in premium interior wrapping, wall wrap, and luxury architectural film installations across the UAE. We help homeowners, corporate offices, and commercial establishments elevate outdated cabinets, walls, and furniture without the high cost and mess of demolition.
            </p>
            <p className="mb-4">
              With years of local experience in Dubai, Abu Dhabi, and Sharjah, we are the leading renovation alternative for kitchen cabinet wrapping, wardrobe wrapping, and bathroom vanity refacing. Our expert team uses high-performance vinyl wrapping materials to deliver durable, waterproof surface transformations with precision workmanship and premium craftsmanship.
            </p>
            
            <ul className={styles.featuresList}>
              <li><CheckCircle className="text-highlight" size={20} /> Zero Demolition & No Mess Refacing</li>
              <li><CheckCircle className="text-highlight" size={20} /> Heat, Moisture & Slam-Resistant Films</li>
              <li><CheckCircle className="text-highlight" size={20} /> Save up to 70% Compared to Traditional Renovations</li>
              <li><CheckCircle className="text-highlight" size={20} /> Commercial Grade Fire-Rated Materials</li>
            </ul>

            <Link to="/contact" className={`btn btn-dark mt-4`}>
              Request a Free Rendering & Consultation
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
