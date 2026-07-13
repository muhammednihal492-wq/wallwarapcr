import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle, ChevronDown, ChevronUp, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import styles from './LocationDetail.module.css';

const locationData = {
  "dubai": {
    cityName: "Dubai",
    h1: "Bespoke Interior Wrapping in Dubai",
    title: "Best Interior Wrapping Company Dubai | Kitchen & Wall Wrap | Veespo",
    description: "Veespo is the best interior wrapping company in Dubai. Transform kitchen cabinets, wardrobes, doors, and walls with premium vinyl wrapping and zero demolition.",
    keywords: "Best Interior Wrapping Company Dubai, Interior Wrapping Dubai, Kitchen Wrapping Dubai, Wall Wrap Dubai, Architectural Film Dubai, Cabinet wrapping UAE",
    intro: "As Dubai's leading surface wrapping specialists, WallWrap Creations (Veespo) transforms luxury apartments, villas, and commercial spaces. Our expert installers provide a dust-free, premium interior renovation alternative that brings high-end finishes like wood, marble, and concrete textures directly to your surfaces.",
    serviceAreaIntro: "Serving all premier residential and commercial communities across Dubai, UAE, with premium mobile installer units.",
    areas: ["Palm Jumeirah", "Dubai Marina", "Downtown Dubai", "Jumeirah", "Emirates Hills", "Business Bay", "Arabian Ranches", "Dubai Hills Estate"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115509.30656754388!2d55.195973749999994!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43403a565613%3A0x462211910ef395!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
    address: "SHAMS, Sharjah, UAE (Serving all Dubai Districts)",
    phone: "+971 58 994 4602",
    geo: { latitude: "25.2048", longitude: "55.2708" },
    faqs: [
      {
        q: "Do you offer kitchen wrapping in Dubai apartments?",
        a: "Yes! We wrap kitchen cabinets, countertops, and splashbacks in all major Dubai residential areas. It is the perfect renovation alternative because it requires zero noise, zero demolition, and is completed in just 2-3 days."
      },
      {
        q: "What is the lifespan of wall wraps in Dubai's climate?",
        a: "Our architectural films are heat and moisture resistant. In air-conditioned Dubai interiors, they have a lifespan of over 10 years and are backed by a comprehensive warranty."
      }
    ]
  },
  "abu-dhabi": {
    cityName: "Abu Dhabi",
    h1: "Premium Interior Wrapping in Abu Dhabi",
    title: "Interior Wrapping Abu Dhabi | Kitchen & Wardrobe Wrap | Veespo",
    description: "Veespo offers premium interior wrapping services in Abu Dhabi. Transform your kitchen cabinets, wardrobes, and walls with high-end vinyl wrapping with zero mess.",
    keywords: "Interior Wrapping Abu Dhabi, Kitchen Wrapping Abu Dhabi, Wall Wrap Abu Dhabi, Architectural Film Abu Dhabi, Cabinet wrapping UAE",
    intro: "WallWrap Creations (Veespo) delivers high-end vinyl wrapping solutions to the UAE capital. Our team helps villas and commercial offices in Abu Dhabi refresh their layouts with durable architectural films that look identical to premium veneer, stone, and leather finishes.",
    serviceAreaIntro: "Serving all districts across the Emirate of Abu Dhabi with direct service teams.",
    areas: ["Yas Island", "Saadiyat Island", "Al Reem Island", "Al Khalidiyah", "Khalifa City", "Al Raha", "Corniche Road", "Mohammed Bin Zayed City"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116124.9754949575!2d54.34114755!3d24.47986515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
    address: "SHAMS, Sharjah, UAE (Serving all Abu Dhabi Districts)",
    phone: "+971 58 994 4602",
    geo: { latitude: "24.4539", longitude: "54.3773" },
    faqs: [
      {
        q: "Can I request a free rendering for kitchen wrapping in Abu Dhabi?",
        a: "Absolutely! Simply send us photos of your kitchen cabinets via WhatsApp or our Contact form, and our design team will generate a free digital rendering showing your selected architectural finishes."
      },
      {
        q: "Do you serve Al Raha and Yas Island villas?",
        a: "Yes, we have specialized residential installation units regularly servicing villas and townhouses in Yas Island, Saadiyat, Al Raha, and Khalifa City."
      }
    ]
  },
  "sharjah": {
    cityName: "Sharjah",
    h1: "Expert Interior Wrapping in Sharjah",
    title: "Interior Wrapping Sharjah | Vinyl Cabinet & Wall Wrap | Veespo",
    description: "Looking for kitchen or wardrobe wrapping in Sharjah? Veespo offers professional, dust-free architectural film wrapping solutions with full warranty.",
    keywords: "Interior Wrapping Sharjah, Kitchen Wrapping Sharjah, Wall Wrap Sharjah, Architectural Film Sharjah, Cabinet wrapping UAE",
    intro: "Based out of Sharjah Media City (SHAMS), WallWrap Creations (Veespo) provides local residents and business owners with premium interior refacing options. We wrap kitchens, doors, bathroom cabinets, and office workspaces with fire-rated, moisture-resistant architectural wraps.",
    serviceAreaIntro: "Serving all residential and commercial zones across Sharjah with prompt installation slots.",
    areas: ["Al Majaz", "Al Nahda", "Muwaileh", "Aljada", "Sharjah Waterfront City", "Al Khan", "Al Qasimia", "Al Rahmaniya"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115421.32832599292!2d55.353349949999996!3d25.3571168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4b50c6efeb%3A0xc3c5cb14ff7978e8!2sSharjah!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
    address: "SHAMS, Sharjah, UAE",
    phone: "+971 58 994 4602",
    geo: { latitude: "25.3571", longitude: "55.4033" },
    faqs: [
      {
        q: "Where is Veespo's main UAE business registration?",
        a: "Our commercial registration is located in Sharjah Media City (SHAMS). We serve homeowners and corporate offices directly across all of Sharjah, Dubai, and the Northern Emirates."
      },
      {
        q: "How long does door wrapping take for a Sharjah apartment?",
        a: "Most interior doors can be wrapped in 1-2 hours per door, which means we can easily transform all the doors of your Sharjah home in a single day."
      }
    ]
  },
  "ajman": {
    cityName: "Ajman",
    h1: "Premium Interior Wrapping in Ajman",
    title: "Interior Wrapping Ajman | Kitchen & Wardrobe Wrap | Veespo",
    description: "Veespo offers high-end interior wrapping services in Ajman. Revamp kitchen cupboards, wardrobes, and walls with no demolition and at a fraction of renovation costs.",
    keywords: "Interior Wrapping Ajman, Kitchen Wrapping Ajman, Wall Wrap Ajman, Architectural Film Ajman, Cabinet wrapping UAE",
    intro: "WallWrap Creations (Veespo) offers Ajman households and businesses a premium, cost-effective alternative to costly renovations. Our architectural films allow you to completely reface kitchen cupboards, bedroom wardrobes, and doors over a weekend.",
    serviceAreaIntro: "Providing prompt, professional wrapping services across all of Ajman.",
    areas: ["Ajman Downtown", "Al Rawda", "Al Mowaihat", "Al Jurf", "Al Rashidiya", "Ajman Corniche", "Al Yasmeen", "Al Zahra"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57688.16333909783!2d55.44186595!3d25.4013628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f576307399589%3A0xc314dfa40562e6b!2sAjman!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
    address: "SHAMS, Sharjah, UAE (Serving Ajman)",
    phone: "+971 58 994 4602",
    geo: { latitude: "25.4111", longitude: "55.4350" },
    faqs: [
      {
        q: "What surfaces can be wrapped in my Ajman home?",
        a: "We wrap almost any smooth, non-porous surface! This includes wooden or MDF kitchen cabinets, wardrobes, tables, interior wooden doors, bathroom vanities, and smooth painted gypsum walls."
      },
      {
        q: "Is interior wrapping resistant to Ajman's high humidity levels?",
        a: "Yes, our high-grade architectural films are completely waterproof and steam-resistant, making them perfect for kitchens and bathrooms."
      }
    ]
  },
  "al-ain": {
    cityName: "Al Ain",
    h1: "Premium Interior Wrapping in Al Ain",
    title: "Interior Wrapping Al Ain | Kitchen & Wall Wrap | Veespo",
    description: "Upgrade your Al Ain home with luxury interior wrapping. Reface wardrobes, kitchen units, doors, and walls with fire-rated, premium vinyl films.",
    keywords: "Interior Wrapping Al Ain, Kitchen Wrapping Al Ain, Wall Wrap Al Ain, Architectural Film Al Ain, Cabinet wrapping UAE",
    intro: "WallWrap Creations (Veespo) extends its luxury interior wrapping services to Al Ain. We specialize in transforming villa interiors, majlis spaces, and commercial layouts using premium, heat-resistant vinyl films that look and feel identical to real wood, stone, and premium paint.",
    serviceAreaIntro: "Serving all residential neighborhoods and commercial areas across Al Ain.",
    areas: ["Zakher", "Al Jimi", "Al Khabisi", "Al Muwaiji", "Al Maqam", "Jebel Hafeet area", "Al Towayya", "Falaj Hazzaa"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116345.54128522301!2d55.67055745!3d24.1301619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40e23ad81e69%3A0xc3c5cb14ff7978e8!2sAl%20Ain!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
    address: "SHAMS, Sharjah, UAE (Serving Al Ain)",
    phone: "+971 58 994 4602",
    geo: { latitude: "24.1302", longitude: "55.8023" },
    faqs: [
      {
        q: "How does wardrobe wrapping work for Al Ain villas?",
        a: "Our installers travel to Al Ain with all materials. We remove doors and handles, wrap them with precision corner cuts, and reassemble them. The process is completely mess-free."
      },
      {
        q: "Are the wrapping materials fire-rated?",
        a: "Yes. All our architectural wraps are commercial-grade and fire-rated, ensuring the safety of your home, family, or business."
      }
    ]
  }
};

export default function LocationDetail() {
  const { citySlug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  const currentCity = locationData[citySlug];

  if (!currentCity) {
    return (
      <div className={styles.notFoundContainer}>
        <div className="container text-center">
          <h2>Location Not Found</h2>
          <p>We wrap interiors across all of the UAE. Please select one of our primary service areas below.</p>
          <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
        </div>
      </div>
    );
  }

  // LocalBusiness schema for the target city
  const localBusinessSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `WallWrap Creations (Veespo) - ${currentCity.cityName}`,
      "image": "https://veespo.ae/assets/about_wrap.png",
      "description": currentCity.description,
      "telephone": currentCity.phone,
      "url": `https://veespo.ae/locations/${citySlug}`,
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": currentCity.cityName,
        "addressCountry": "AE",
        "streetAddress": currentCity.address
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": currentCity.geo.latitude,
        "longitude": currentCity.geo.longitude
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "ratingCount": "128"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://veespo.ae"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://veespo.ae/#locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": currentCity.cityName,
          "item": `https://veespo.ae/locations/${citySlug}`
        }
      ]
    }
  ];

  return (
    <div className={styles.locationContainer}>
      <SEO 
        title={currentCity.title}
        description={currentCity.description}
        keywords={currentCity.keywords}
        schema={localBusinessSchema}
      />

      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className={`container ${styles.headerGrid}`}>
          <motion.div 
            className={styles.headerText}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.eyebrow}>Serving all Emirates of UAE</div>
            <h1 className={styles.mainTitle}>{currentCity.h1}</h1>
            <p className={styles.subtitle}>{currentCity.intro}</p>
            <div className={styles.btnGroup}>
              <Link to="/contact" className="btn btn-primary">
                Book Location Consultation <ArrowRight className={styles.btnIcon} size={18} />
              </Link>
              <a href="#map" className="btn btn-outline">View Local Map</a>
            </div>
          </motion.div>

          <motion.div 
            className={styles.graphicBlock}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.graphicCard}>
              <ShieldCheck className={styles.graphicIcon} size={48} />
              <h3>Premium Materials</h3>
              <p>Fire & water-rated architectural films with up to 10 years warranty.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="section bg-dark-soft">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Local Service Area</span>
            <h2 className={styles.sectionTitle}>Neighborhoods We Serve in {currentCity.cityName}</h2>
            <p className={styles.sectionSub}>{currentCity.serviceAreaIntro}</p>
          </div>

          <div className={styles.areaGrid}>
            {currentCity.areas.map((area, idx) => (
              <div key={idx} className={styles.areaItem}>
                <MapPin className="text-highlight" size={18} />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className={styles.emiratesDeclaration}>
            <p><strong>* Serving all Emirates of UAE:</strong> Our mobile installation units cover Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.</p>
          </div>
        </div>
      </section>

      {/* NAP & Google Maps Section */}
      <section className="section" id="map">
        <div className="container">
          <div className={styles.mapGrid}>
            <div className={styles.napDetails}>
              <span className={styles.sectionEyebrow}>NAP details</span>
              <h2 className={styles.sectionTitle}>Get in Touch with our {currentCity.cityName} Team</h2>
              <p className="mb-4">Contact our surface wrapping team directly to request a site inspection, material catalog preview, or a free rendering quotation.</p>

              <div className={styles.contactItem}>
                <MapPin className="text-highlight" size={24} />
                <div>
                  <h4>Official Registration Address</h4>
                  <p>{currentCity.address}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Phone className="text-highlight" size={24} />
                <div>
                  <h4>Local Contact Number</h4>
                  <p>{currentCity.phone}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Mail className="text-highlight" size={24} />
                <div>
                  <h4>Email Address</h4>
                  <p>contact@wallwrapcreations.com</p>
                </div>
              </div>
            </div>

            <div className={styles.mapEmbedWrapper}>
              <iframe 
                src={currentCity.mapUrl} 
                className={styles.mapIframe}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`Veespo Location Map - ${currentCity.cityName}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Specific FAQs */}
      <section className="section bg-dark-soft">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>FAQs</span>
            <h2 className={styles.sectionTitle}>{currentCity.cityName} Wrapping FAQs</h2>
            <p className={styles.sectionSub}>Frequently asked questions about local wrapping projects in {currentCity.cityName}.</p>
          </div>

          <div className={styles.faqList}>
            {currentCity.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`${styles.faqCard} ${isOpen ? styles.faqOpen : ''}`}>
                  <button 
                    className={styles.faqHeader} 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.faqBody}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Ready to Transform Your {currentCity.cityName} Home?</h2>
            <p>Get a completely custom kitchen makeover or wardrobe transformation at a fraction of traditional renovation costs.</p>
            <Link to="/contact" className="btn btn-primary">
              Book a Free rendering inspection in {currentCity.cityName}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
