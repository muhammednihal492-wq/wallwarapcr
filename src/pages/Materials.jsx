import { motion } from 'framer-motion';
import styles from './Materials.module.css';

export default function Materials() {
  const materials = [
    { name: "Common", image: "/assets/texture_common.png" },
    { name: "Leather", image: "/assets/texture_leather.png" },
    { name: "Big Marble", image: "/assets/texture_big_marble.png" },
    { name: "Metal", image: "/assets/texture_metal.png" },
    { name: "Wood", image: "/assets/texture_wood.png" },
    { name: "Solid", image: "/assets/texture_solid.png" },
    { name: "Grey Marble", image: "/assets/texture_grey_marble.png" }
  ];

  return (
    <div className={styles.materialsPage}>
       <div className={styles.pageHeader}>
        <div className={`container text-center`}>
          <motion.h1 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            Material <span className="text-highlight">Collections</span>
          </motion.h1>
          <motion.p 
             className={styles.pageSubtitle}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our vast selection of premium finishes and textures.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.materialGrid}>
            {materials.map((mat, index) => (
              <motion.div 
                className={styles.materialCard}
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={styles.texturePreview}>
                  <img src={mat.image} alt={`${mat.name} texture pattern`} className={styles.textureImage} />
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.materialName}>{mat.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
