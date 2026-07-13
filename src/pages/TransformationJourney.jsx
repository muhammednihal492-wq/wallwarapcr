import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Wrench } from 'lucide-react';
import styles from './TransformationJourney.module.css';

export default function TransformationJourney() {
  // Section fades upward
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  // Heading fades in
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  // Connection line starts drawing
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.0, ease: 'easeInOut', delay: 0.5 }
    }
  };

  const lineVerticalVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.0, ease: 'easeInOut', delay: 0.5 }
    }
  };

  // Card 1
  const card1Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }
    }
  };

  // Card 2
  const card2Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  // Card 3
  const card3Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <motion.section
      className={styles.sectionWrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      <div className={styles.container}>
        <motion.div className={styles.headingContainer} variants={headingVariants}>
          <span className={styles.smallLabel}>YOUR TRANSFORMATION JOURNEY</span>
          <h2 className={styles.mainHeading}>Transform Your Space with the Best Interior Wrapping Company in Dubai</h2>
          <p className={styles.supportingText}>
            From your initial kitchen cabinet wrapping idea to final architectural film installation, we make the interior renovation alternative process simple, transparent, and luxury-finished.
          </p>
        </motion.div>

        <div className={styles.cardsContainer}>
          {/* Card 1 */}
          <motion.div className={`${styles.card} ${styles.card1}`} variants={card1Variants}>
            <div className={styles.iconWrapper}>
              <Layout size={40} strokeWidth={1.5} />
            </div>
            <div className={styles.accentLine}></div>
            <h3 className={styles.cardTitle}>FREE VISUAL RENDERING</h3>
            <p className={styles.cardDescription}>
              Upload photos of your kitchen, wardrobe, office, or interior walls, and our team will prepare a professional visual rendering. Experience how your luxury interior wrapping transformation will look before installation begins, allowing you to choose the perfect texture.
            </p>
            <span className={styles.badge}>Preview Before Installation</span>
            
            {/* Desktop Connector to Card 2 */}
            <motion.div
              className={styles.connectorLineHorizontal}
              variants={lineVariants}
              style={{ originX: 0 }}
            />
            {/* Mobile Connector to Card 2 */}
            <motion.div
              className={styles.connectorLineVertical}
              variants={lineVerticalVariants}
              style={{ originY: 0 }}
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div className={`${styles.card} ${styles.card2}`} variants={card2Variants}>
            <div className={styles.iconWrapper}>
              <Palette size={40} strokeWidth={1.5} />
            </div>
            <div className={styles.accentLine}></div>
            <h3 className={styles.cardTitle}>DESIGN & QUOTATION</h3>
            <p className={styles.cardDescription}>
              Our design specialists recommend the most durable architectural films and vinyl wrapping materials for your doors, cabinets, and walls. Receive a clear, transparent quotation covering materials, workmanship, and project scope with absolute clarity.
            </p>
            <span className={styles.badge}>Transparent Pricing</span>

            {/* Desktop Connector to Card 3 */}
            <motion.div
              className={styles.connectorLineHorizontal}
              variants={lineVariants}
              style={{ originX: 0 }}
            />
            {/* Mobile Connector to Card 3 */}
            <motion.div
              className={styles.connectorLineVertical}
              variants={lineVerticalVariants}
              style={{ originY: 0 }}
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div className={`${styles.card} ${styles.card3}`} variants={card3Variants}>
            <div className={styles.shimmerContainer}>
              <div className={styles.iconWrapper}>
                <Wrench size={40} strokeWidth={1.5} />
              </div>
              <div className={styles.shimmerOverlay}></div>
            </div>
            <div className={styles.accentLine}></div>
            <h3 className={styles.cardTitle}>PROFESSIONAL INSTALLATION</h3>
            <p className={styles.cardDescription}>
              Our experienced installation team carefully transforms your space using premium architectural films. As the leading provider of surface wrapping in Dubai, we ensure outstanding quality, slam-resistance, and attention to detail.
            </p>
            <span className={styles.badge}>Premium Craftsmanship</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
