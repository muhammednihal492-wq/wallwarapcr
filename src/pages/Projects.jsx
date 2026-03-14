import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      before: "/assets/before_kitchen.png",
      after: "/assets/after_kitchen.png"
    },
    // Using the same placeholder for others or could use hero
    {
      id: 2,
      title: "Luxury Bathroom Wrap",
      before: "/assets/before_kitchen.png",
      after: "/assets/hero_interior.png" // using hero as a placeholder 'after'
    },
    {
      id: 3,
      title: "Wardrobe Update",
      before: "/assets/before_kitchen.png",
      after: "/assets/about_wrap.png"
    }
  ];

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
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSubtitle}>Fully custom premium wrap</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
