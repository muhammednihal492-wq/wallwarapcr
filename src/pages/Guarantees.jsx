import { motion } from 'framer-motion';
import styles from './Guarantees.module.css';
import { Droplets, Flame, Shield, Leaf } from 'lucide-react';

export default function Guarantees() {
  const guarantees = [
    {
      title: "Waterproof",
      description: "Our materials resist water damage and moisture, making them perfect for wet areas.",
      icon: <Droplets size={50} className={styles.icon} />
    },
    {
      title: "Heat Proof",
      description: "Perfect for kitchens and high-temperature areas. Designed to withstand daily heat exposure.",
      icon: <Flame size={50} className={styles.icon} />
    },
    {
      title: "Scratch Proof",
      description: "Durable surfaces designed for daily use, keeping your interiors looking new for years.",
      icon: <Shield size={50} className={styles.icon} />
    },
    {
      title: "Eco Friendly",
      description: "Safe and sustainable materials for homes and offices. No toxic fumes during application.",
      icon: <Leaf size={50} className={styles.icon} />
    }
  ];

  return (
    <div className={styles.guaranteesPage}>
      <div className={styles.pageHeader}>
        <div className={`container text-center`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-highlight">Guarantees</span>
          </motion.h1>
          <motion.p 
            className={styles.pageSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium materials engineered for longevity and performance.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.guaranteesGrid}>
            {guarantees.map((item, index) => (
              <motion.div 
                className={styles.guaranteeCard}
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={styles.iconOuter}
                  animate={{ 
                    boxShadow: ["0px 0px 0px 0px rgba(79, 99, 61, 0)", "0px 0px 20px 5px rgba(79, 99, 61, 0.4)", "0px 0px 0px 0px rgba(79, 99, 61, 0)"] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
