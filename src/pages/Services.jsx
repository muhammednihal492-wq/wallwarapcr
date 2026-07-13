import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';
import { ChefHat, Bath, Grid, DoorOpen, Briefcase, Building, Columns, SunMedium } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Kitchen Wrapping",
      slug: "kitchen-wrapping",
      icon: <ChefHat size={40} className={styles.icon} />,
      image: "/assets/service_kitchen.png",
      altText: "Luxury kitchen cabinet wrapping in Dubai, UAE - modern finish alternative to renovation",
      advantages: ["Cost-effective kitchen renovation", "Heat resistant materials", "Modern stylish finishes"]
    },
    {
      title: "Wardrobe Wrapping",
      slug: "wardrobe-wrapping",
      icon: <Grid size={40} className={styles.icon} />,
      image: "/assets/service_wardrobe.png",
      altText: "Premium wardrobe wrapping transformation in Dubai apartment closet refacing",
      advantages: ["Transform old wardrobes instantly", "Scratch resistant surface", "Stylish wood & matte textures"]
    },
    {
      title: "Bathroom Wrapping",
      slug: "bathroom-wrapping",
      icon: <Bath size={40} className={styles.icon} />,
      image: "/assets/service_bathroom.png",
      altText: "Waterproof bathroom cabinet vanity and wall tile wrapping in Dubai",
      advantages: ["Waterproof protection", "Easy maintenance & cleaning", "Elegant modern appearance"]
    },
    {
      title: "Door Wrapping",
      slug: "door-wrapping",
      icon: <DoorOpen size={40} className={styles.icon} />,
      image: "/assets/service_door.png",
      altText: "Modern interior bedroom and frame door wrapping application with architectural film",
      advantages: ["Instant door makeover", "Durable slam-resistant finishes", "Cost-effective architrave upgrade"]
    },
    {
      title: "Office Wrapping",
      slug: "office-wrapping",
      icon: <Briefcase size={40} className={styles.icon} />,
      image: "/assets/service_flooring.png",
      altText: "Corporate office reception desk and workspace wrapping with wood film texture",
      advantages: ["Overnight & weekend installs", "Anti-bacterial surface refacing", "Zero business downtime"]
    },
    {
      title: "Commercial Wrapping",
      slug: "commercial-wrapping",
      icon: <Building size={40} className={styles.icon} />,
      image: "/assets/hero_interior.png",
      altText: "High-end restaurant table, boutique column, and hotel interior wrapping in Dubai",
      advantages: ["Fire-rated safety materials", "Bespoke hotel refits", "Uptown retail shopfront wrap"]
    },
    {
      title: "Architectural Film",
      slug: "architectural-film",
      icon: <Columns size={40} className={styles.icon} />,
      image: "/assets/download.webp",
      altText: "Architectural film surface application for luxury wood and stone accent walls in Dubai",
      advantages: ["German & Japanese quality", "Embowned tactile finishes", "Eco-friendly refits"]
    },
    {
      title: "Window Films",
      slug: "window-films",
      icon: <SunMedium size={40} className={styles.icon} />,
      image: "/assets/service_window.png",
      altText: "Premium heat control window film installation for residential villas in Dubai",
      advantages: ["Blocks 99% UV rays", "Reduces indoor heat by 85%", "Saves AC cooling costs"]
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
            Premium <span className="text-highlight">Interior Wrapping</span> Services
          </motion.h1>
          <motion.p 
            className={styles.pageSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover why we are the best interior wrapping company in Dubai. Explore premium vinyl wrapping solutions for kitchens, wardrobes, offices, walls, and commercial spaces with zero demolition.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className={`container`}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/services/${service.slug}`} className={`hover-card ${styles.serviceCard}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className={styles.serviceImageWrapper}>
                    <img src={service.image} alt={service.altText} className={styles.serviceImage} />
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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

