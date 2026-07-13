import { motion } from 'framer-motion';
import styles from './Guarantees.module.css';
import { Droplets, Flame, Shield, Leaf } from 'lucide-react';
import SEO from '../components/SEO';

export default function Guarantees() {
  const guarantees = [
    {
      title: "100% Waterproof Barrier",
      description: "Our moisture-resistant architectural wraps are completely waterproof and prevent liquid ingress, making them highly suitable for bathroom vanities and high-humidity kitchen setups in Dubai.",
      icon: <Droplets size={50} className={styles.icon} />
    },
    {
      title: "Fire & Thermal Resistant",
      description: "Tested and certified flame-retardant materials. Engineered to withstand high temperatures up to 110°C, making them completely safe for kitchen splashbacks and areas close to cooktops.",
      icon: <Flame size={50} className={styles.icon} />
    },
    {
      title: "Impact & Scratch Proof",
      description: "Durable multi-layer architectural films designed to handle daily wear, impacts, and abrasions, keeping wardrobe doors, tabletops, and office surfaces looking brand new.",
      icon: <Shield size={50} className={styles.icon} />
    },
    {
      title: "Non-Toxic & Eco Friendly",
      description: "Eco-friendly, VOC-free materials safe for homes and corporate workplaces. Our dust-free refacing process emits zero chemical vapors or smells during installation.",
      icon: <Leaf size={50} className={styles.icon} />
    }
  ];

  return (
    <div className={styles.guaranteesPage}>
      <SEO 
        title="Our Guarantees | Warranty & Material Certifications | Veespo"
        description="Explore our fire-rated, waterproof, scratch-resistant, and eco-friendly architectural wrapping guarantees in Dubai, Abu Dhabi, and Sharjah."
        keywords="wrapping guarantees Dubai, waterproof vinyl cabinet wrap, fire rated architectural film, scratch resistant wardrobe wrap"
      />
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
            Premium certified materials engineered for longevity and back by a comprehensive warranty.
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
