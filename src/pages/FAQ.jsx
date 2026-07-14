import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Is wrapping better than traditional interior renovation?",
      a: "Yes, in many cases. Interior wrapping with premium architectural films is an excellent renovation alternative. It requires zero demolition (no dust, no noise, no building permits), takes days instead of weeks, is eco-friendly, and cost-effective (saving up to 70% compared to purchasing new cabinets or marble). It is perfect for upgrading kitchens, wardrobes, and walls in residential villas or commercial offices."
    },
    {
      q: "How long does interior wrapping take in Dubai?",
      a: "It depends on the size of the project. A standard kitchen wrap takes 1 to 2 days, a wardrobe wrap takes about 1 day, and individual doors take 2 to 3 hours. We schedule corporate office and commercial restaurant installations overnight or over weekends to guarantee zero business downtime."
    },
    {
      q: "Can architectural wrapping films be removed later?",
      a: "Yes. Our premium vinyl films are designed to be fully removable without leaving adhesive residue or damaging the underlying surface. This makes interior wrapping highly popular for both tenants looking to personalize their spaces and landlords in Dubai who want to protect the original materials."
    },
    {
      q: "Do you provide a free digital rendering of the project?",
      a: "Absolutely! We offer a free rendering service. You share a photo of your existing space, and our design team provides a digital mockup overlaying your chosen textures (wood, marble, concrete, etc.) so you can visualize the transformation before booking."
    },
    {
      q: "How much does interior wrapping cost in Dubai?",
      a: "The cost of interior wrapping is calculated per square meter and depends on the complexity of the surface and the architectural film collection selected. Overall, wrapping saves you 50% to 70% of the cost of a traditional replacement. Contact our team for a free quote."
    },
    {
      q: "What materials do you use for wrapping?",
      a: "We use only premium, commercial-grade architectural films from world-renowned brands like 3M, LG Hausys, Sangetsu, and Bodq. These films are thicker than standard sign vinyl, scratch-resistant, heat-resistant, waterproof, and feature tactile, realistic texture patterns (like wood grains, natural stone, leather, and metal)."
    },
    {
      q: "How long do vinyl wraps last in the UAE climate?",
      a: "When installed by our certified professionals, our premium wraps last between 7 to 10+ years. The heavy-duty adhesives are UV-stable and engineered to resist peeling, lifting, or bubbling even in the UAE's high temperatures and humidity levels."
    },
    {
      q: "Do you provide a warranty on your wrapping services?",
      a: "Yes. WallWrap Creations offers a comprehensive warranty on all professional installations covering peeling, bubbling, and material defects. We stand behind our precision workmanship and attention to detail."
    }
  ];

  // FAQ & Breadcrumb Schemas JSON-LD
  const faqSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
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
          "name": "FAQ",
          "item": "https://veespo.ae/faq"
        }
      ]
    }
  ];

  return (
    <div className={styles.faqPage}>
      <SEO 
        title="Frequently Asked Questions | Interior Wrapping Dubai | Veespo"
        description="Find answers to all your questions about kitchen, wardrobe, wall, and bathroom wrapping in Dubai. Learn about durability, cost, process, and free rendering."
        keywords="interior wrapping FAQ Dubai, vinyl wrap durability UAE, kitchen wrapping cost Dubai, wardrobe wrap warranty"
        schema={faqSchema}
      />

      {/* Header Section */}
      <div className={styles.pageHeader}>
        <div className={`container text-center`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle size={48} className={styles.headerIcon} />
            <h1 className={styles.mainTitle}>Frequently Asked Questions</h1>
            <p className={styles.pageSubtitle}>
              Find answers to common questions about kitchen cabinet wrapping, wardrobe wrapping, wall wrapping, and architectural films. Learn why Veespo is the best interior wrapping company in Dubai, UAE.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Accordion List Section */}
      <section className="section">
        <div className="container">
          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  className={`${styles.faqCard} ${isOpen ? styles.cardOpen : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <button 
                    className={styles.faqHeaderBtn} 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.iconWrapper}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        className={styles.faqBody}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className={styles.faqAnswer}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaWrapper}>
            <div className={styles.ctaGlow}></div>
            <h2>Have a Custom Project in Mind?</h2>
            <p>
              Get in touch with our team of surface design specialists. Let us show you how we can transform your space with zero demolition and absolute precision.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={`btn btn-primary ${styles.ctaPrimary}`}>
                Request Free Rendering
                <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/971589944602" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.ctaSecondary}`}>
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
