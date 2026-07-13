import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ShieldCheck, ArrowLeft, ArrowRight, Quote, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './ClientExperiences.module.css';

export default function ClientExperiences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Benson",
      location: "Palm Jumeirah, Dubai",
      rating: 5,
      text: <>The team did an <strong className={styles.highlightText}>amazing transformation</strong> on our kitchen cabinets. Extremely <strong className={styles.highlightText}>professional</strong> from start to finish. The <strong className={styles.highlightText}>premium finish</strong> looks identical to high-end veneer, and their <strong className={styles.highlightText}>attention to detail</strong> was flawless. <strong className={styles.highlightText}>Highly recommended</strong>!</>,
      avatarInitials: "SB",
      avatarUrl: null
    },
    {
      id: 2,
      name: "Faisal Al-Mansoori",
      location: "Downtown Dubai",
      rating: 5,
      text: <>We wrapped our entire office reception desk and conference room doors. <strong className={styles.highlightText}>Excellent workmanship</strong> and completed over the weekend to avoid disruption. The architectural films are top tier. A <strong className={styles.highlightText}>highly recommended</strong> service.</>,
      avatarInitials: "FA",
      avatarUrl: null
    },
    {
      id: 3,
      name: "Elena Rostova",
      location: "Dubai Marina, Dubai",
      rating: 5,
      text: <>Simply incredible. Saved us a fortune compared to buying new wardrobes. The <strong className={styles.highlightText}>attention to detail</strong> is what stands out. True <strong className={styles.highlightText}>professional</strong> service and a gorgeous <strong className={styles.highlightText}>premium finish</strong>. Will use them again.</>,
      avatarInitials: "ER",
      avatarUrl: null
    },
    {
      id: 4,
      name: "Mark Thompson",
      location: "Jumeirah Golf Estates, Dubai",
      rating: 5,
      text: <>Outstanding customer service and wall wrapping. Their team was very punctual and paid great <strong className={styles.highlightText}>attention to detail</strong>. The walls look super modern now. An <strong className={styles.highlightText}>amazing transformation</strong>!</>,
      avatarInitials: "MT",
      avatarUrl: null
    }
  ];

  // Screen resize listener to adjust animations for desktop vs mobile
  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 1100);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Parallax Scroll logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yCard1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const yCard4 = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const parallaxOffsets = [yCard1, yCard2, yCard3, yCard4];

  // Slider handlers
  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(testimonials.length - 1, prev + 1));
  };

  // Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const cardEntranceVariants = {
    hidden: { opacity: 0, x: 80, y: 20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3 + index * 0.15
      }
    })
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <div ref={sectionRef}>
      <motion.section
        className={styles.sectionWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        id="client-experiences"
      >
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column */}
            <motion.div className={styles.leftColumn} variants={leftColumnVariants}>
              <span className={styles.smallLabel}>CLIENT EXPERIENCES</span>
              <h2 className={styles.mainHeading}>Trusted by Homeowners & Businesses Across the UAE</h2>
              <p className={styles.supportingText}>
                Discover how our premium interior wrapping services have helped homeowners, offices, and commercial spaces achieve a completely new look. As the best interior wrapping company in Dubai, Veespo guarantees precision craftsmanship.
              </p>

              {/* Google Trust Bar */}
              <div className={styles.trustBar}>
                <div className={styles.googleIconWrapper}>
                  {/* Subtle Google "G" Icon with premium check badge */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={styles.googleIcon}>
                    <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.8 0 3.43.68 4.67 1.8l2.4-2.4C17.47 1.76 14.99 1 12.24 1c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.73 0 9.87-3.9 9.87-9.7 0-.58-.06-1.15-.17-1.715H12.24z"/>
                  </svg>
                  <div className={styles.verificationDot}>
                    <ShieldCheck size={10} className={styles.verificationCheck} />
                  </div>
                </div>
                <div className={styles.trustInfo}>
                  <div className={styles.starsAndRating}>
                    <motion.div className={styles.starsRow} variants={starContainerVariants}>
                      {[...Array(5)].map((_, i) => (
                        <motion.div key={i} variants={starVariants}>
                          <Star size={14} fill="currentColor" className={styles.star} />
                        </motion.div>
                      ))}
                    </motion.div>
                    <span className={styles.ratingText}>5.0 Google Rating</span>
                  </div>
                  <span className={styles.ratingSubtext}>Verified Customer Reviews</span>
                  <span className={styles.trustCompanyBadge}>Premium Interior Wrapping Company</span>
                </div>
              </div>

              {/* CTA Button and Navigation Row */}
              <div className={styles.actionRow}>
                <a 
                  href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.readMoreBtn}
                >
                  <span className={styles.btnText}>Read More Google Reviews</span>
                  <ArrowRight size={16} className={styles.btnArrow} />
                  <span className={styles.btnSweep}></span>
                </a>

                <div className={styles.sliderControls}>
                  <button 
                    className={styles.sliderBtn} 
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    aria-label="Previous Slide"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button 
                    className={styles.sliderBtn} 
                    onClick={handleNext}
                    disabled={activeIndex === testimonials.length - 1}
                    aria-label="Next Slide"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Column / Testimonial Slider */}
            <div className={styles.sliderColumn}>
              <div className={styles.sliderViewport}>
                <motion.div
                  className={styles.sliderTrack}
                  animate={{ x: `calc(-${activeIndex} * (var(--card-width) + var(--card-gap)))` }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                >
                  {testimonials.map((review, index) => {
                    const cardStyle = isDesktop ? { y: parallaxOffsets[index] } : {};
                    return (
                      <motion.article
                        key={review.id}
                        className={styles.card}
                        custom={index}
                        variants={cardEntranceVariants}
                        style={cardStyle}
                        whileHover={{ y: isDesktop ? -8 : 0, scale: 1.015 }}
                      >
                        <Quote size={44} className={styles.quoteIcon} />
                        
                        <div className={styles.cardStars}>
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" className={styles.cardStar} />
                          ))}
                        </div>

                        <p className={styles.cardText}>{review.text}</p>
                        
                        <div className={styles.cardFooter}>
                          <div className={styles.avatarWrapper}>
                            {review.avatarUrl ? (
                              <img 
                                src={review.avatarUrl} 
                                alt={review.name} 
                                className={styles.avatarImage} 
                                loading="lazy"
                              />
                            ) : (
                              <div className={styles.avatarInitials}>
                                {review.avatarInitials}
                              </div>
                            )}
                          </div>

                          <div className={styles.clientDetails}>
                            <span className={styles.clientName}>{review.name}</span>
                            <span className={styles.clientLocation}>{review.location}</span>
                          </div>
                          
                          <div className={styles.verifiedBadgeContainer}>
                            <div className={styles.verifiedBadge}>
                              <ShieldCheck size={16} />
                            </div>
                            <span className={styles.tooltip}>Verified Google Review</span>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Conversion CTA Block Section */}
      <motion.section 
        className={styles.ctaSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={ctaVariants}
      >
        <div className={styles.container}>
          <div className={styles.ctaWrapper}>
            <div className={styles.ctaGlow}></div>
            <h2 className={styles.ctaHeadline}>Ready to Transform Your Space?</h2>
            <p className={styles.ctaDescription}>
              Experience the same quality, craftsmanship, and attention to detail our clients appreciate. Let us show you how your existing interiors can be transformed without major renovations.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.ctaPrimary}>
                <span className={styles.ctaPrimaryText}>Request Free Rendering</span>
                <ArrowRight size={16} className={styles.ctaArrow} />
                <span className={styles.ctaSweep}></span>
              </Link>
              <a 
                href="https://wa.me/971589944602" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.ctaSecondary}
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

