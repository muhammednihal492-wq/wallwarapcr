import { motion } from 'framer-motion';
import styles from './LatestWorks.module.css';

export default function LatestWorks() {
  const works = [
    {
      id: 1,
      name: "Luxury Penthouse Kitchen",
      description: "Complete transformation of a dated kitchen using premium dark marble textures. Completed in 2 days without demolition.",
      image: "/assets/after_kitchen.png"
    },
    {
      id: 2,
      name: "Corporate Office Doors",
      description: "Upgraded 50 office doors with durable wood grain vinyl to match the new interior design aesthetic.",
      image: "/assets/hero_interior.png" // placeholder
    },
    {
      id: 3,
      name: "Residential Bathroom",
      description: "Waterproof wrapping over old tiles to create a seamless, contemporary spa-like bathroom experience.",
      image: "/assets/about_wrap.png" // placeholder
    }
  ];

  return (
    <div className={styles.worksPage}>
      <div className={styles.pageHeader}>
        <div className={`container text-center`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest <span className="text-highlight">Works</span>
          </motion.h1>
          <motion.p 
            className={styles.pageSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our newest interior transformations.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className={`container ${styles.worksContainer}`}>
          {works.map((work, index) => (
            <motion.div 
              className={styles.workCard}
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <img src={work.image} alt={work.name} className={styles.workImage} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.workInfo}>
                <h3 className={styles.workTitle}>{work.name}</h3>
                <p className={styles.workDescription}>{work.description}</p>
                <button className={`btn ${styles.viewBtn}`}>View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
