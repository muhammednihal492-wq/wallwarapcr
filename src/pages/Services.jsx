import { motion } from 'framer-motion';
import styles from './Services.module.css';
import { ChefHat, Bath, Grid, DoorOpen, LayoutDashboard, SunMedium, GripHorizontal, PaintBucket, Columns, Maximize2, Home, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Kitchen Wrapping",
      icon: <ChefHat size={40} className={styles.icon} />,
      image: "/assets/service_kitchen.png",
      advantages: ["Cost-effective kitchen renovation", "Heat resistant materials", "Modern stylish finishes"]
    },
    {
      title: "Bathroom Wrapping",
      icon: <Bath size={40} className={styles.icon} />,
      image: "/assets/service_bathroom.png",
      advantages: ["Waterproof protection", "Easy maintenance", "Elegant modern look"]
    },
    {
      title: "Wardrobe Wrapping",
      icon: <Grid size={40} className={styles.icon} />,
      image: "/assets/service_wardrobe.png",
      advantages: ["Transform old wardrobes instantly", "Scratch resistant surface", "Stylish textures"]
    },
    {
      title: "Door Wrapping",
      icon: <DoorOpen size={40} className={styles.icon} />,
      image: "/assets/service_door.png",
      advantages: ["Instant door makeover", "Durable and modern finishes", "Cost-effective upgrade"]
    },
    {
      title: "Flooring",
      icon: <LayoutDashboard size={40} className={styles.icon} />,
      image: "/assets/service_flooring.png",
      advantages: ["Waterproof flooring", "Long-lasting durability", "Premium aesthetic appearance"]
    },
    {
      title: "Window Tinting",
      icon: <SunMedium size={40} className={styles.icon} />,
      image: "/assets/service_window.png",
      advantages: ["Reduces heat and glare", "Improves privacy", "Energy efficient"]
    },
    {
      title: "Architectural Film",
      icon: <Columns size={40} className={styles.icon} />,
      image: "/assets/service_architectural.png",
      advantages: ["Endless design possibilities", "Durable scratch-resistance", "Cost-effective remodeling"]
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <div className={styles.pageHeader}>
        <div className={`container text-center`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Premium Wrap <span className="text-highlight">Services</span>
          </motion.h1>
          <motion.p 
            className={styles.pageSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our comprehensive range of interior transformation services.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className={`container`}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div 
                className={`hover-card ${styles.serviceCard}`}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.serviceImageWrapper}>
                  <img src={service.image} alt={service.title} className={styles.serviceImage} />
                </div>
                <div className={styles.iconOverlay}>
                  {service.icon}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <ul className={styles.advantageList}>
                    {service.advantages.map((adv, i) => (
                      <li key={i}>{adv}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cardHoverEffect}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
