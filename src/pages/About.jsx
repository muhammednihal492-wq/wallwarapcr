import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, ClipboardCheck, Sparkles, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import styles from './About.module.css';

export default function About() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WallWrap Creations",
      "url": "https://veespo.ae",
      "logo": "https://veespo.ae/rr.png",
      "description": "WallWrap Creations is the premier local authority on luxury interior wrapping and architectural film installations in Dubai, Abu Dhabi, and Sharjah.",
      "sameAs": [
        "https://www.instagram.com/wallwrapcreations?igsh=MTMydDUydzMyNGxlbg=="
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://veespo.ae"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://veespo.ae/about"
        }
      ]
    }
  ];

  return (
    <div className={styles.aboutPage}>
      <SEO 
        title="About Us | Premium Interior Wrapping Company Dubai | WallWrap Creations"
        description="Learn about WallWrap Creations, Dubai's leading interior wrapping specialists. Discover our story, expert installation team, and premium certifications."
        keywords="about Veespo, interior wrapping company Dubai, best cabinet wrap UAE, vinyl wrapping installers, architectural film team"
        schema={aboutSchema}
      />

      {/* Hero Header Section */}
      <section className={styles.pageHeader}>
        <div className={`container text-center`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.headerTag}>Trust & Craftsmanship</span>
            <h1 className={styles.mainTitle}>About WallWrap Creations</h1>
            <p className={styles.pageSubtitle}>
              Dubai's premier authority on luxury interior wrapping and bespoke surface transformations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section">
        <div className={`container ${styles.storyGrid}`}>
          <motion.div 
            className={styles.storyContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionEyebrow}>Our History</span>
            <h2 className={styles.sectionTitle}>A Modern Renovation Alternative</h2>
            <div className="gold-divider"></div>
            <p className={styles.storyPara}>
              WallWrap Creations was established with a singular focus: to redefine how luxury interiors are updated in the United Arab Emirates. We recognized that homeowners and corporate businesses wanted to modernize their kitchens, wardrobes, and commercial areas, but dreaded the massive costs, noise, and weeks of dust associated with traditional demolition and cabinetry refitting.
            </p>
            <p className={styles.storyPara}>
              By combining high-performance architectural films with master-installer precision, we introduced a clean, dust-free refacing alternative. Today, Veespo delivers flawless wraps that emulate authentic wood grains, natural stone, industrial concrete, and sleek matte paint surfaces for luxury properties across Dubai, Abu Dhabi, and Sharjah.
            </p>
          </motion.div>

          <motion.div 
            className={styles.experienceCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.badgeWrapper}>
              <Award size={64} className={styles.badgeIcon} />
              <div className={styles.badgeText}>
                <h3>10+ Years</h3>
                <p>Collective UAE Wrapping Experience</p>
              </div>
            </div>
            <div className={styles.badgeDivider}></div>
            <ul className={styles.badgeList}>
              <li><Sparkles size={16} /> Certified Master Installers</li>
              <li><Sparkles size={16} /> LG Hausys & Bodaq Certified</li>
              <li><Sparkles size={16} /> 5.0 Google-Verified Rating</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Trust Pillars Grid */}
      <section className="section bg-dark-soft">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Our Commitments</span>
            <h2 className={styles.sectionTitle}>Why Choose Veespo?</h2>
            <p className={styles.sectionSub}>We build trust through high-quality materials, workmanship warranties, and complete transparency.</p>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <ShieldCheck className={styles.pillarIcon} size={40} />
              <h3>Premium Materials Only</h3>
              <p>We work exclusively with heavy-duty, fire-rated, non-toxic architectural wraps. We never use low-grade promotional vinyl.</p>
            </div>

            <div className={styles.pillarCard}>
              <Users className={styles.pillarIcon} size={40} />
              <h3>In-House Expert Installers</h3>
              <p>All Veespo installation teams are fully trained, in-house master craftsmen. We do not outsource your projects to third-party laborers.</p>
            </div>

            <div className={styles.pillarCard}>
              <ClipboardCheck className={styles.pillarIcon} size={40} />
              <h3>Transparent Pricing</h3>
              <p>No surprise costs or hidden fees. We provide detailed swatches and fixed quotations covering materials and installation labor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Installation Team */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Expertise</span>
            <h2 className={styles.sectionTitle}>Our Master Installation Team</h2>
            <p className={styles.sectionSub}>Highly skilled craftsmen dedicated to delivering flawless corner folds and seamless edge lines.</p>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.avatarPlaceholder}>MC</div>
              <h3>Master Craftsmen</h3>
              <span className={styles.teamRole}>Installation Specialists</span>
              <p>Responsible for surgical corner cuts, heat-aided stretching, and seamless edge-wraps on flat and paneled cabinetry.</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.avatarPlaceholder}>DS</div>
              <h3>Design Specialists</h3>
              <span className={styles.teamRole}>Visual Render Coordinator</span>
              <p>Generates high-precision digital renderings of your kitchen or wardrobe to help you confidently select the perfect finish.</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.avatarPlaceholder}>QC</div>
              <h3>Quality Coordinators</h3>
              <span className={styles.teamRole}>Project Supervisor</span>
              <p>Conducts post-installation checks, verifies hardware alignment, and registers your official warranty certificate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-dark-soft">
        <div className="container">
          <div className={styles.ctaBlock}>
            <h2>Experience the Veespo Difference</h2>
            <p>Request a site consultation, preview our physical material swatches, or book your free digital rendering today.</p>
            <div className={styles.btnRow}>
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation <ArrowRight size={18} className={styles.btnArrow} />
              </Link>
              <Link to="/projects" className="btn btn-outline">Explore Our Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
