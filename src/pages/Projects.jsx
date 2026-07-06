import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Projects.module.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      before: "/assets/before_kitchen_new.png",
      after: "/assets/after_kitchen_wrapped.png",
      gallery: [
        "/assets/modern/1000381235.jpg",
        "/assets/modern/1000381236.jpg",
        "/assets/modern/1000381239.jpg",
        "/assets/modern/1000381240.jpg",
        "/assets/modern/1000381241.jpg",
        "/assets/modern/1000381242.jpg"
      ]
    },
    // Using the same placeholder for others or could use hero
    {
      id: 2,
      title: "Luxury Living Room Wrap",
      before: "/assets/hero_interior.png",
      after: "/assets/after_living_room_wrapped.png",
      gallery: [
        "/assets/hero_interior.png",
        "/assets/after_living_room_wrapped.png"
      ]
    },
    {
      id: 3,
      title: "Wardrobe Update",
      before: "/assets/before_wardrobe.png",
      after: "/assets/after_wardrobe.png",
      gallery: [
        "/assets/before_wardrobe.png",
        "/assets/after_wardrobe.png"
      ]
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handlePrevImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => 
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => 
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className={styles.projectsPage}>
      <div className={styles.pageHeader}>
        <div className={`container text-center`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Completed <span className="text-highlight">Projects</span>
          </motion.h1>
          <motion.p 
            className={styles.pageSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how we transform ordinary interiors into stunning spaces.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div 
                className={styles.projectCard}
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.sliderContainer}>
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={project.before} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={project.after} alt="After" />}
                    className={styles.slider}
                  />
                  <div className={styles.labels}>
                    <span className={styles.labelBefore}>Before</span>
                    <span className={styles.labelAfter}>After</span>
                  </div>
                  <button 
                    className={styles.zoomButton} 
                    onClick={() => handleCardClick(project)}
                    title="View Full Gallery"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
                <div className={styles.projectInfo} onClick={() => handleCardClick(project)}>
                  <div className={styles.projectHeaderRow}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    {project.gallery && (
                      <span className={styles.galleryBadge}>{project.gallery.length} Images</span>
                    )}
                  </div>
                  <p className={styles.projectSubtitle}>Fully custom premium wrap</p>
                  {project.gallery && (
                    <button className={styles.exploreButton}>
                      Explore Gallery
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <motion.div 
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <button className={styles.closeButton} onClick={closeModal}>
                  <X size={24} />
                </button>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.mainImageContainer}>
                  <button className={styles.navButton} onClick={handlePrevImage} title="Previous Image">
                    <ChevronLeft size={24} />
                  </button>
                  
                  <div className={styles.imagePresenter}>
                    <img 
                      src={selectedProject.gallery[activeImageIndex]} 
                      alt={`Gallery view ${activeImageIndex + 1}`} 
                      className={styles.modalImage} 
                    />
                  </div>

                  <button className={styles.navButton} onClick={handleNextImage} title="Next Image">
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className={styles.imageCounter}>
                  Image {activeImageIndex + 1} of {selectedProject.gallery.length}
                </div>

                <div className={styles.thumbnailsRow}>
                  {selectedProject.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className={`${styles.thumbnailWrapper} ${activeImageIndex === index ? styles.activeThumbnail : ''}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className={styles.thumbnailImage} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
