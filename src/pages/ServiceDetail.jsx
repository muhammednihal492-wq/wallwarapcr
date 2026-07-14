import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChefHat, Bath, Grid, DoorOpen, Building, Briefcase, 
  Shield, CheckCircle, ChevronDown, ChevronUp, ArrowLeft, ArrowRight, Sun,
  X, ChevronLeft, ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import styles from './ServiceDetail.module.css';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const serviceData = {
    "kitchen-wrapping": {
      title: "Kitchen Wrapping Dubai | Premium Vinyl Cabinet Makeover | Veespo",
      description: "Upgrade your kitchen cabinets with premium kitchen wrapping in Dubai. Get a luxury kitchen makeover without the high cost and mess of demolition.",
      keywords: "Kitchen Wrapping Dubai, Kitchen Cabinet Wrapping Dubai, Best Kitchen Wrapping Company in Dubai, Kitchen Renovation Alternative Dubai, Affordable Kitchen Wrapping Dubai, Cabinet Wrapping Dubai",
      h1: "Premium Kitchen Wrapping in Dubai, UAE",
      h2: "The Smart, Cost-Effective Kitchen Renovation Alternative",
      icon: <ChefHat size={48} />,
      intro: "Transform your outdated kitchen into a sleek, modern masterpiece. Our luxury kitchen cabinet wrapping services in Dubai provide a flawless, durable finish without the dust, mess, and high cost of traditional demolition.",
      featuresTitle: "Why Choose Kitchen Cabinet Wrapping?",
      features: [
        { title: "Zero Demolition Required", desc: "No cabinet removal, dust, or noise. We wrap your existing doors and frames on-site." },
        { title: "Heat & Moisture Resistant", desc: "Our premium architectural films are specifically engineered for high-temperature kitchen environments." },
        { title: "Fraction of Renovation Costs", desc: "Achieve a luxury look for up to 70% less than buying new kitchen cabinets." },
        { title: "Quick Professional Installation", desc: "Most kitchen cabinet wrap projects in Dubai are completed in just 1 to 2 days." }
      ],
      processTitle: "Our Precision Transformation Process",
      processSteps: [
        { num: "01", title: "Surface Prep & Cleaning", desc: "We deep clean, degrease, and repair any minor surface imperfections to ensure perfect adhesion." },
        { num: "02", title: "Hardware Removal", desc: "Handles and hinges are carefully disassembled to wrap edges seamlessly without wrinkles." },
        { num: "03", title: "Precision Wrap Application", desc: "Our master installers apply architectural film using specialized heat tools for a bubble-free finish." },
        { num: "04", title: "Quality Audit", desc: "We inspect every corner and reinstall your hardware for a premium, clean finish." }
      ],
      copyBlock: "At WallWrap Creations (Veespo), we focus on precision workmanship and attention to detail. Whether you want a matte black luxury finish, a rich wood grain texture, or a sleek gray marble aesthetic, our premium materials deliver. Ask our experienced team for a free digital rendering of your kitchen to preview the amazing transformation before we start.",
      faqs: [
        { q: "How long does kitchen wrapping take?", a: "Typically, a standard kitchen wrapping project in Dubai takes between 1 to 2 days, depending on the size and configuration of your cabinets." },
        { q: "Is kitchen wrapping durable and resistant to heat?", a: "Yes. We use premium architectural films that are water-resistant, heat-resistant, and scratch-resistant. They are designed to withstand high kitchen temperatures and last 7 to 10+ years." },
        { q: "Do you provide free rendering?", a: "Absolutely! We offer a free digital rendering service so you can visualize the finishes and textures in your kitchen before making a decision." },
        { q: "How much does kitchen wrapping cost in Dubai?", a: "Kitchen wrapping is highly cost-effective, saving you up to 70% compared to a traditional renovation. Prices vary based on cabinet size and chosen materials." }
      ],
      schemaType: "KitchenWrapping",
      nextSlug: "wardrobe-wrapping"
    },
    "wardrobe-wrapping": {
      title: "Wardrobe Wrapping Dubai | Modern Wardrobe Upgrades | Veespo",
      description: "Transform your old wardrobes instantly with premium wardrobe wrapping in Dubai. High-quality architectural films, scratch-resistant surface textures.",
      keywords: "Wardrobe Wrapping Dubai, Modern Wardrobe Wrapping Dubai, Best Vinyl Wrapping Company UAE, Luxury Surface Transformation Dubai, Wardrobe Cabinet Wrap",
      h1: "Luxury Wardrobe Wrapping in Dubai",
      h2: "Transform Old Wardrobes Instantly Without Replacement",
      icon: <Grid size={48} />,
      intro: "Breathe new life into your bedroom with bespoke wardrobe wrapping. We update your closet doors and side panels with premium textures like real wood, leather, or ultra-matte finishes that make your bedroom look like a high-end luxury suite.",
      featuresTitle: "The Benefits of Closet & Wardrobe Wrapping",
      features: [
        { title: "Zero Demolition Mess", desc: "We transform your bedroom wardrobes directly on-site in a clean, quiet environment." },
        { title: "Scratch-Resistant Surface", desc: "Architectural vinyl films offer high durability and protection against daily wear." },
        { title: "Vast Texture Collections", desc: "Select from realistic wood grains, soft leather, textured metal, or solid luxury matte colors." },
        { title: "Value Addition", desc: "Significantly increase the aesthetic appeal and rental value of your property in Dubai." }
      ],
      processTitle: "Our Wardrobe Refacing Workflow",
      processSteps: [
        { num: "01", title: "Alignment check", desc: "We check alignment of closet doors and make necessary adjustments before wrapping." },
        { num: "02", title: "Sanding & Priming", desc: "Smooth out scratches or wood expansion to guarantee a seamless flat surface wrap." },
        { num: "03", title: "Detailed Wrapping", desc: "Special attention is given to borders, back edges, and interior frames for absolute precision." },
        { num: "04", title: "Hardware Fitment", desc: "Reinstalling handles or integrating custom hardware to complement the new look." }
      ],
      copyBlock: "Our expert craftsmen ensure that every wrapped wardrobe looks identical to new furniture. Using high-end German and Japanese architectural films, we specialize in luxury cabinet wrapping. Request your free rendering today to choose the perfect texture configuration for your space.",
      faqs: [
        { q: "Can wardrobe wraps be removed?", a: "Yes, our vinyl wraps are fully removable. They protect the original surface underneath, making them ideal for both landlords and tenants in Dubai." },
        { q: "How long does wardrobe wrapping last?", a: "With professional installation and proper care, wardrobe wrapping lasts up to 10 years without peeling or fading." },
        { q: "Is it possible to wrap built-in wardrobes?", a: "Yes! We specialize in wrapping all types of built-in, sliding, and walk-in wardrobes." }
      ],
      schemaType: "WardrobeWrapping",
      nextSlug: "bathroom-wrapping"
    },
    "bathroom-wrapping": {
      title: "Bathroom Wrapping Dubai | Waterproof Wrap Solutions | Veespo",
      description: "Premium waterproof bathroom wrapping in Dubai. Modernize your vanities, wall tiles, and cabinets with zero demolition. 5.0 Google-verified reviews.",
      keywords: "Bathroom Wrapping Dubai, Waterproof Bathroom Wrap UAE, Best Interior Wrapping Company Dubai, Vinyl Wrapping Dubai, Luxury Bathroom Refits",
      h1: "Waterproof Bathroom Wrapping in Dubai",
      h2: "Modernize Vanities, Cabinets & Tiles Safely",
      icon: <Bath size={48} />,
      intro: "Avoid costly plumbing alterations and tiling work. Our specialized waterproof bathroom wrapping solutions in Dubai transform vanities, wall surfaces, and storage cabinets safely and cleanly with absolute moisture resistance.",
      featuresTitle: "Designed for Wet Environments",
      features: [
        { title: "100% Waterproof", desc: "Advanced architectural films are resistant to moisture, steam, and direct water splashes." },
        { title: "Mold & Mildew Resistant", desc: "Non-porous surfaces prevent bacteria accumulation, making cleaning easy." },
        { title: "Fast Transformation", desc: "Upgrading your bathroom takes less than 24 hours, compared to weeks of renovation." },
        { title: "Tile wrapping", desc: "We wrap existing tile backsplashes and bathroom cabinets to achieve a smooth, clean finish." }
      ],
      processTitle: "Our Moisture-Proof Process",
      processSteps: [
        { num: "01", title: "Anti-Fungal Cleanse", desc: "Deep cleaning with specialized agents to completely sanitize the application surface." },
        { num: "02", title: "Moisture Extraction", desc: "Ensuring the cabinet and tiles are completely dry before laying the architectural film." },
        { num: "03", title: "Edge Sealing", desc: "Using silicone-edge lock technology to prevent moisture from entering underneath." },
        { num: "04", title: "Final Inspection", desc: "Verify seal integrity to guarantee long-lasting performance in hot and humid settings." }
      ],
      copyBlock: "Veespo provides top-tier bathroom wrapping in Dubai. We wrap vanity counters and storage cabinets with elegant marble and textured wood finishes. Experience the ultimate bathroom makeover without a single tile being broken. Ask our team for details about a free consultation.",
      faqs: [
        { q: "Will the film peel off due to steam?", a: "No. The high-performance adhesive on our architectural films is specifically designed to handle high humidity and steam in bathrooms without losing adhesion." },
        { q: "How do I clean wrapped bathroom surfaces?", a: "Simply wipe down with a soft damp cloth and mild soap. Avoid abrasive cleaning chemicals." },
        { q: "Is tiles wrapping possible?", a: "Yes, flat and non-textured tiles can be wrapped to create a modern, joint-free accent wall." }
      ],
      schemaType: "BathroomWrapping",
      nextSlug: "door-wrapping"
    },
    "door-wrapping": {
      title: "Door Wrapping Dubai | Premium Interior Door Wraps | Veespo",
      description: "Upgrade your doors with premium door wrapping in Dubai. Upgrade bedroom, entrance, and frame wraps with modern luxury finishes. Quick installation.",
      keywords: "Door Wrapping Dubai, Door Cabinet Wrapping, Best Vinyl Wrapping Company UAE, Luxury Interior Wrapping Dubai, Door Wrap Alternative",
      h1: "Premium Interior Door Wrapping in Dubai",
      h2: "Upgrade Your Doors Without Messy Demolition",
      icon: <DoorOpen size={48} />,
      intro: "Why replace expensive solid wood doors when you can wrap them? Our premium door wrapping services in Dubai update bedroom doors, entrance doors, and frames with exquisite finishes, completely transforming your corridors and rooms.",
      featuresTitle: "The Door Wrapping Advantage",
      features: [
        { title: "Perfect Edge Finishing", desc: "We wrap completely around the door edges to ensure the original color is invisible." },
        { title: "Durable & Slam-Resistant", desc: "Architectural films absorb impacts, resisting scratches and slamming damage." },
        { title: "Frame & Architrave Wrap", desc: "We wrap door frames and architraves to guarantee a perfectly matching color palette." },
        { title: "Cost-Effective Remodeling", desc: "Save up to 60% compared to purchasing, hanging, and painting new doors." }
      ],
      processTitle: "Bespoke Door Wrap Workflow",
      processSteps: [
        { num: "01", title: "Door Dismounting", desc: "We remove the door from hinges and lay it flat for standard horizontal application." },
        { num: "02", title: "Hardware Stripping", desc: "Locks, handles, and hinges are removed to wrap under handles cleanly." },
        { num: "03", title: "Surface Sanding", desc: "Sanding down any wood grain bubbles or paint chips to ensure a glass-like finish." },
        { num: "04", title: "Laying Film & Trimming", desc: "Applying the premium vinyl wrap and using exact surgical-blade cuts for clean edges." }
      ],
      copyBlock: "Whether it is wood, high-gloss, or textured metal, our door wrapping solutions in Dubai provide a cost-effective interior renovation alternative. We serve clients across Dubai, Abu Dhabi, and Sharjah with precision craftsmanship. Contact us for a free quote.",
      faqs: [
        { q: "How long does wrapping a door take?", a: "It takes about 2 to 3 hours per door. An entire apartment's doors can usually be wrapped in a single day." },
        { q: "Can you wrap the door frames as well?", a: "Yes, we wrap the frames and architraves along with the door for a uniform aesthetic." },
        { q: "Is the wrap resistant to slamming?", a: "Our premium architectural films are highly impact-resistant and will not peel or tear from normal slamming." }
      ],
      schemaType: "DoorWrapping",
      nextSlug: "office-wrapping"
    },
    "office-wrapping": {
      title: "Office Wrapping Dubai | Corporate Office Refacing | Veespo",
      description: "Premium office wrapping in Dubai. Transform reception desks, conference tables, and partitions over the weekend to avoid business disruptions.",
      keywords: "Office Wrapping Dubai, Commercial Wrapping Dubai, Office Interior Transformation Dubai, Surface Protection Dubai, Corporate Renovation Alternative",
      h1: "Corporate Office Wrapping in Dubai",
      h2: "Transform Workplace Surfaces with Zero Business Downtime",
      icon: <Briefcase size={48} />,
      intro: "Create a modern, inspiring workspace that impresses clients and boosts employee morale. Our office wrapping services in Dubai transform reception desks, workspaces, conference tables, cabinets, and doors over the weekend, avoiding any business disruption.",
      featuresTitle: "Engineered for Corporate Workplaces",
      features: [
        { title: "Zero Office Disruption", desc: "Our teams wrap overnight or over weekends so your business operates as usual." },
        { title: "Anti-Bacterial Finishes", desc: "A clean, non-porous finish that is easy to sanitize, ideal for high-traffic office desks." },
        { title: "Premium Brand Look", desc: "Match your company's corporate identity with modern matte, wood, or metallic finishes." },
        { title: "Surface Protection", desc: "Vinyl wrapping protects expensive underlying office furniture from laptop scratches and ink stains." }
      ],
      processTitle: "Our Commercial Office Refacing Steps",
      processSteps: [
        { num: "01", title: "Space Mapping", desc: "We detail workspace layouts and schedule wrapping phases to optimize timing." },
        { num: "02", title: "Surface Repair", desc: "Patching grommet holes or cable management cutouts for a pristine flat surface." },
        { num: "03", title: "High-Speed Wrapping", desc: "Deploying multiple teams of expert installers to cover large surface areas rapidly." },
        { num: "04", title: "Workspace Handover", desc: "Inspecting all wrapped workspaces, leaving your office immaculate and dust-free." }
      ],
      copyBlock: "From small start-ups in JLT to large multinational offices in DIFC, we provide premium commercial office transformation options. Veespo is highly recommended for professional installation, quality materials, and commercial reliability across the UAE. Request a free consultation.",
      faqs: [
        { q: "Can wrapping be done outside business hours?", a: "Yes! We specialize in evening and weekend installations so your business suffers zero downtime." },
        { q: "Is the wrapped surface easy to maintain?", a: "Highly easy. It resists marker stains, coffee rings, and dust, requiring only simple cleaning." },
        { q: "Can you wrap glass partitions for privacy?", a: "Yes, we wrap solid partitions and also install frosted or decorative window films on glass walls." }
      ],
      schemaType: "OfficeWrapping",
      nextSlug: "commercial-wrapping"
    },
    "commercial-wrapping": {
      title: "Commercial Wrapping Dubai | Restaurants & Hotels | Veespo",
      description: "Luxury commercial interior wrapping in Dubai for retail, restaurants, and hotels. Upgrade shop fronts and furniture with premium finishes.",
      keywords: "Commercial Wrapping Dubai, Restaurant Interior Wrapping Dubai, Hotel Interior Wrapping Dubai, Best Vinyl Wrapping Company UAE, Commercial Renovation Alternative",
      h1: "Luxury Commercial Wrapping in Dubai, UAE",
      h2: "Transform Retail, Restaurant & Hotel Spaces Swiftly",
      icon: <Building size={48} />,
      intro: "Keep your commercial spaces looking modern and fresh. Our commercial wrapping services in Dubai allow restaurants, hotels, boutiques, and salons to update their retail interiors, wall panels, columns, and shopfronts to match branding with zero demolition noise.",
      featuresTitle: "The Commercial Interior Advantage",
      features: [
        { title: "Fast-Track Renovations", desc: "Wrap retail and restaurant interiors in days instead of closing for weeks." },
        { title: "Fire-Rated Materials", desc: "We use premium architectural films that comply with strict commercial safety codes." },
        { title: "Unlimited Custom Design", desc: "Select matte, concrete, marble, leather, or metallic looks to suit your design theme." },
        { title: "Extreme Surface Durability", desc: "High-performance wrap protects high-traffic counters and cashier zones." }
      ],
      processTitle: "High-Efficiency Commercial Workflow",
      processSteps: [
        { num: "01", title: "Bespoke Design Alignment", desc: "Aligning with your architect or brand coordinator to choose textures and finishes." },
        { num: "02", title: "Site Preparation", desc: "Carefully masking surroundings and cleaning heavy-use surfaces for adhesion." },
        { num: "03", title: "Master Installation", desc: "Applying architectural film to retail columns, cash wraps, tables, and display counters." },
        { num: "04", title: "Final Brand Check", desc: "Conducting a comprehensive safety and aesthetic review before reopening to customers." }
      ],
      copyBlock: "WallWrap Creations (Veespo) has successfully completed commercial wrap projects for high-end restaurants, boutiques, and hotels in Dubai, Abu Dhabi, and across the UAE. Our attention to detail ensures a premium finish that stands up to heavy customer usage. Ask our team for a free rendering.",
      faqs: [
        { q: "Are the wrapping materials fire-rated?", a: "Yes. Our premium architectural films are certified fire-resistant, satisfying Dubai Municipality commercial safety regulations." },
        { q: "Can restaurant tables and bar counters be wrapped?", a: "Absolutely. We wrap restaurant bar fronts, tables, and host stands with ultra-durable, waterproof, and scratch-resistant films." },
        { q: "How long does a commercial project take?", a: "Most projects are completed in 1 to 3 nights, minimized to avoid business closure." }
      ],
      schemaType: "CommercialWrapping",
      nextSlug: "architectural-film"
    },
    "architectural-film": {
      title: "Architectural Film Dubai | Premium Surface Finishes | Veespo",
      description: "Premium architectural film installation in Dubai. High-end wood, marble, metal, and concrete textures for walls, panels, and furniture refacing.",
      keywords: "Architectural Film Dubai, Premium Architectural Film Installation Dubai, Luxury Surface Transformation Dubai, Vinyl Interior Solutions Dubai, Architectural Surface Films",
      h1: "Premium Architectural Film Installation in Dubai",
      h2: "Luxury Surface Transformations with Advanced Textured Materials",
      icon: <Shield size={48} />,
      intro: "Upgrade your interior architecture with advanced film technology. Our premium architectural films in Dubai mimic real wood, luxury marble, stone, concrete, and brushed metal with tactile textures that look and feel authentic.",
      featuresTitle: "High-Tech Materials, Premium Finishes",
      features: [
        { title: "Tactile Realism", desc: "Not just colors, but deep-embossed textures that replicate wood grain and natural stone." },
        { title: "UVR & Heat Resistance", desc: "Resists fading and bubbling under the UAE's high sunlight levels." },
        { title: "Sustainable Refacing", desc: "Eco-friendly renovation alternative that updates old surfaces rather than sending wood to landfills." },
        { title: "Stain & Chemical Resistant", desc: "Easy maintenance; resistant to water, alcohol, food stains, and standard household cleaners." }
      ],
      processTitle: "Tactile Application Workflow",
      processSteps: [
        { num: "01", title: "Surface Engineering", desc: "Inspecting the substrate for adhesion compatibility and preparing porous wood." },
        { num: "02", title: "Substrate Priming", desc: "Applying special architectural primers to corners and edges for permanent bond." },
        { num: "03", title: "Thermo-Forming", desc: "Heating the film dynamically to conform to curved architectural details." },
        { num: "04", title: "Edge Lock Inspection", desc: "Surgical trimming and bonding edges to achieve a seamless, clean transition." }
      ],
      copyBlock: "Architectural films represent the absolute pinnacle of modern interior renovation. At Veespo, we carry a vast selection of premium finishes from globally trusted brands like 3M Di-Noc, LG Hausys, and Sangetsu. Our team has over 15 years of combined experience in luxury interior refacing in the UAE.",
      faqs: [
        { q: "What is the difference between architectural film and standard vinyl?", a: "Architectural films are thicker, premium thermo-formable materials with textured patterns (like wood grain and stone) and commercial fire ratings. Standard vinyl is thin, flat, and lacks textured finishes." },
        { q: "Can these films be applied to curves and columns?", a: "Yes. They are thermo-formable, meaning they stretch and conform to columns, curved reception desks, and detailed molding with heat." },
        { q: "Do you provide a warranty?", a: "Yes, we provide an extensive warranty covering peeling, bubbling, or discoloration." }
      ],
      schemaType: "ArchitecturalFilm",
      nextSlug: "window-films"
    },
    "window-films": {
      title: "Window Film Dubai | Heat Control & Decorative Tint | Veespo",
      description: "Best window film company in Dubai. Heat control window films, decorative tints, and privacy films reducing heat and UV rays for homes and offices.",
      keywords: "Window Film Dubai, Architectural Window Film Dubai, Best Window Film Company Dubai, Decorative Window Film Dubai, Heat Control Window Film Dubai, Window Tinting Dubai",
      h1: "Bespoke Window Film Installation in Dubai",
      h2: "Reduce Solar Heat, Protect Privacy, and Lower Energy Costs",
      icon: <Sun size={48} />,
      intro: "Protect your home or office from the intense UAE sun. Our premium heat control window films block up to 99% of harmful UV rays and reject up to 85% of solar heat, lowering cooling costs and enhancing interior comfort.",
      featuresTitle: "Advanced Solar Control Features",
      features: [
        { title: "Significant Heat Reduction", desc: "Rejects infrared heat, cooling down rooms and reducing air conditioning bills in Dubai." },
        { title: "99% UV Protection", desc: "Prevents sun fading on your premium wood floors, leather sofas, and wrapped furniture." },
        { title: "Enhanced Privacy", desc: "One-way mirror effect provides daylight privacy for residential villas and offices." },
        { title: "Glare Reduction", desc: "Improves screen readability in home offices and corporate boardrooms." }
      ],
      processTitle: "Dust-Free Installation Steps",
      processSteps: [
        { num: "01", title: "Glass Purification", desc: "Scraping and cleaning the window glass to completely eliminate dust particles." },
        { num: "02", title: "Exact Film Sizing", desc: "Pre-cutting the high-quality heat control film to match window frame dimensions." },
        { num: "03", title: "Wet Application", desc: "Squeegeeing out moisture and bubbles between the glass and window film." },
        { num: "04", title: "Border Sealing", desc: "Tucking edges and sealing to ensure no light leaks or lifting." }
      ],
      copyBlock: "Our window film range includes premium heat control window films, decorative frosted window films, and safety films. Veespo is recognized as the best window film company in Dubai, delivering flawless glass tinting for offices, residential villas, and commercial spaces. Request a free quote.",
      faqs: [
        { q: "How much heat does window film reject?", a: "Our high-performance architectural window films reject up to 85% of solar heat, resulting in a temperature drop of up to 5-8°C inside." },
        { q: "Will the film bubble or peel in the sun?", a: "No. We use premium, professional-grade solar control films with UV-stable adhesives that do not crack or bubble, backed by a full warranty." },
        { q: "Is window film suitable for double-glazed windows?", a: "Yes, we evaluate glass types and use thermal-stress-safe films to prevent double-glazed glass cracking." }
      ],
      schemaType: "WindowFilms",
      nextSlug: "kitchen-wrapping"
    }
  };

  const currentService = serviceData[serviceSlug];

  const serviceImages = {
    "kitchen-wrapping": [
      "/assets/after_kitchen_wrapped.png",
      "/assets/kichen/WhatsApp Image 2026-07-13 at 12.02.49 AM.jpeg",
    ],
    "wardrobe-wrapping": [
      "/assets/before_wardrobe.png",
      "/assets/after_wardrobe.png",
      "/assets/service_wardrobe.png",
    ],
    "bathroom-wrapping": [
      "/assets/service_bathroom.png",
      "/assets/residential_bathroom.png",
    ],
    "door-wrapping": [
      "/assets/service_door.png",
    ],
    "office-wrapping": [
      "/assets/service_flooring.png",
    ],
    "commercial-wrapping": [
      "/assets/uptown_before.png",
      "/assets/uptown_after.png",
      "/assets/yacht_after.png",
    ],
    "architectural-film": [],
    "window-films": [
      "/assets/service_outdoor_tinting.png",
    ]
  };

  const images = serviceImages[serviceSlug] || [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, activeImageIndex, images]);

  if (!currentService) {
    return (
      <div className={styles.notFoundPage}>
        <div className="container text-center">
          <h2>Service Not Found</h2>
          <p>We apologize, but the requested service page does not exist.</p>
          <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
        </div>
      </div>
    );
  }

  // Generate Service & Breadcrumb Schemas JSON-LD
  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": currentService.h1,
      "description": currentService.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "WallWrap Creations (Veespo)",
        "image": "https://veespo.ae/assets/about_wrap.png",
        "telephone": "+971589944602",
        "url": "https://veespo.ae",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Dubai" },
        { "@type": "AdministrativeArea", "name": "Abu Dhabi" },
        { "@type": "AdministrativeArea", "name": "Sharjah" },
        { "@type": "AdministrativeArea", "name": "Ajman" },
        { "@type": "AdministrativeArea", "name": "United Arab Emirates" }
      ],
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
          "name": "Services",
          "item": "https://veespo.ae/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": currentService.h1.split(" in ")[0],
          "item": `https://veespo.ae/services/${serviceSlug}`
        }
      ]
    }
  ];

  return (
    <div className={styles.detailContainer}>
      <SEO 
        title={currentService.title} 
        description={currentService.description} 
        keywords={currentService.keywords}
        schema={serviceSchema}
      />

      {/* Hero Header Section */}
      <section className={styles.heroHeader}>
        <div className={`container ${styles.headerGrid}`}>
          <motion.div 
            className={styles.headerText}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.serviceIconBox}>
              {currentService.icon}
            </div>
            <h1 className={styles.mainTitle}>{currentService.h1}</h1>
            <h2 className={styles.subTitle}>{currentService.h2}</h2>
            <p className={styles.introText}>{currentService.intro}</p>
            <div className={styles.headerButtons}>
              <Link to="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                Request Free Rendering
              </Link>
              <a href="https://wa.me/971589944602" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.waBtn}`}>
                WhatsApp Consultation
              </a>
            </div>
          </motion.div>

          <motion.div 
            className={styles.headerGraphics}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.graphicsBorder}>
              <div className={styles.glowDot}></div>
              <div className={styles.graphicOverlayText}>
                <h3>5.0 ★ Rating</h3>
                <p>Verified Dubai Customer Feedback</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Copy Section */}
      <section className="section bg-dark-soft">
        <div className="container">
          <div className={styles.featuresLayout}>
            <div className={styles.featuresContent}>
              <h3 className={styles.sectionTitle}>{currentService.featuresTitle}</h3>
              <div className={styles.featuresGrid}>
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <CheckCircle className="text-highlight" size={20} />
                    <div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.copyBox}>
              <h3 className={styles.sectionTitle}>Premium Workmanship & Materials</h3>
              <p className={styles.copyPara}>{currentService.copyBlock}</p>
              
              {/* Internal Linking Anchors */}
              <div className={styles.internalLinks}>
                <span className={styles.linkTitle}>Related Links:</span>
                <div className={styles.linksRow}>
                  <Link to="/materials">Material Finishes</Link>
                  <span className={styles.separator}>•</span>
                  <Link to="/projects">Bespoke Projects</Link>
                  <span className={styles.separator}>•</span>
                  <Link to={`/services/${currentService.nextSlug}`}>Next Service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Process Section */}
      <section className="section">
        <div className="container">
          <h3 className={`text-center ${styles.sectionTitle}`}>{currentService.processTitle}</h3>
          <p className={`text-center ${styles.sectionSubtitle}`}>How our experienced team transforms your surfaces in 4 precise steps.</p>
          
          <div className={styles.processGrid}>
            {currentService.processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className={styles.processCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Gallery Section */}
      {images.length > 0 && (
        <section className="section bg-dark-soft">
          <div className="container">
            <h3 className={`text-center ${styles.sectionTitle}`}>Bespoke Transformation Gallery</h3>
            <p className={`text-center ${styles.sectionSubtitle}`}>Real visual results and texture showcases from our recent projects.</p>
            
            <div className={styles.galleryGrid}>
              {images.map((image, index) => (
                <motion.div 
                  key={index} 
                  className={styles.galleryCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                  onClick={() => openLightbox(index)}
                >
                  <img src={image} alt={`${currentService.h1} detail ${index + 1}`} className={styles.galleryImage} />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.zoomText}>View Project Detail</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className={styles.modalOverlay} onClick={closeLightbox}>
            <motion.div 
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{currentService.title.split(" | ")[0]} - Showcase</h3>
                <button className={styles.closeButton} onClick={closeLightbox}>
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
                      src={images[activeImageIndex]} 
                      alt={`Gallery view ${activeImageIndex + 1}`} 
                      className={styles.modalImage} 
                    />
                  </div>

                  <button className={styles.navButton} onClick={handleNextImage} title="Next Image">
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className={styles.imageCounter}>
                  Image {activeImageIndex + 1} of {images.length}
                </div>

                <div className={styles.thumbnailsRow}>
                  {images.map((image, index) => (
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

      {/* Ultimate long-form SEO Guide Section (Ensures 1000+ words) */}
      <section className="section bg-dark">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className={styles.ultimateGuideWrapper}>
            <span className={styles.guideEyebrow}>Ultimate Technical Guide</span>
            <h2 className={styles.guideTitle}>Comprehensive Guide to {currentService.h1}</h2>
            <div className="gold-divider mb-5"></div>
            
            <div className={styles.guideContent}>
              <h3 className={styles.guideSubheading}>1. Introduction to Luxury Surface Transformations in the UAE</h3>
              <p className={styles.guidePara}>
                In the highly competitive property markets of Dubai, Abu Dhabi, and across the United Arab Emirates, maintaining a premium, modern, and visually striking interior aesthetic is essential for both residential comfort and commercial success. However, traditional renovations—whether they involve replacing kitchen cabinets, bedroom wardrobes, bathroom vanities, or office partitions—are notoriously expensive, noisy, and disruptive. They generate immense amounts of dust, require municipality permits, and can put your space out of commission for weeks.
              </p>
              <p className={styles.guidePara}>
                Professional interior wrapping services by WallWrap Creations (Veespo) represent the ultimate modern renovation alternative. By utilizing advanced, commercial-grade architectural films, we allow you to completely reface your existing structures directly on-site. This dust-free, non-invasive process achieves a high-end luxury finish that looks completely indistinguishable from brand new carpentry, solid wood, natural marble, or concrete panels.
              </p>

              <h3 className={styles.guideSubheading}>2. Key Benefits of {currentService.h1}</h3>
              <p className={styles.guidePara}>
                Opting for a high-end vinyl wrap transformation over replacement provides a multitude of practical and financial advantages:
              </p>
              <ul className={styles.guideList}>
                <li><strong>Maximum Cost-Effectiveness:</strong> Save up to 70% compared to traditional remodeling. Since we reface your existing cabinet boxes, doors, and frames, there is no need to pay for new materials, demolition crews, or waste disposal.</li>
                <li><strong>Zero Demolition Mess:</strong> Our process is completely silent, clean, and dust-free. We do not break tiles or tear down structures, which means your home or office remains fully habitable and operational during installation.</li>
                <li><strong>Highly Durable & Resilient:</strong> The architectural films we apply are commercial-grade and engineered to resist moisture, steam, direct water splashes, scratch wear, and heat. They are highly suitable for the hot and humid climate of the UAE.</li>
                <li><strong>Endless Visual Choices:</strong> We offer hundreds of unique texture swatches. Whether you are aiming for a minimalist matte finish, a warm wood grain look, a luxury marble aesthetic, or industrial concrete, we have the perfect material match.</li>
              </ul>

              <h3 className={styles.guideSubheading}>3. Why Choose WallWrap Creations (Veespo)</h3>
              <p className={styles.guidePara}>
                Veespo is recognized as the best interior wrapping company in Dubai. Our reputation is built on precision workmanship, an experienced team of master installers, and complete transparency. We never cut corners or use cheap promotional vinyl. Instead, we work exclusively with certified, fire-rated architectural wraps from top German, Japanese, and Korean brands like LG Hausys, Bodaq, and Avery Dennison. 
              </p>
              <p className={styles.guidePara}>
                Every project we undertake undergoes a strict quality control inspection. From clean surgical corner folds to bubble-free surfaces and seamless edge alignment, our installers handle every detail with absolute care. Our 5.0 Google-verified rating is a testament to the trust homeowners and commercial developers across Dubai, Abu Dhabi, and Sharjah place in us.
              </p>

              <h3 className={styles.guideSubheading}>4. Our Precision Transformation Process</h3>
              <p className={styles.guidePara}>
                Achieving a glass-like, flawless paint-look wrap requires a highly systematic installation workflow. Our experienced team follows a strict 4-step precision process:
              </p>
              <ol className={styles.guideOrderedList}>
                <li><strong>Surface Deep Cleaning:</strong> We thoroughly scrub and degrease all application surfaces using specialized, non-abrasive anti-fungal cleaning agents to ensure optimal adhesive grip.</li>
                <li><strong>Hardware Disassembly:</strong> All handles, hinges, door pulls, and accessories are carefully removed so that the vinyl wrap can be applied completely around the door edges, concealing the original color.</li>
                <li><strong>Specialized Heat-Aided Application:</strong> Our installers lay the architectural film, utilizing precise squeegeeing and professional heat guns to ensure the wrap contours perfectly to moldings, architraves, and corners.</li>
                <li><strong>Hardware Reassembly & Final Quality Audit:</strong> We carefully reassemble your hinges and handles, adjust door alignment, clean up the workspace, and conduct a final detail audit to guarantee perfection.</li>
              </ol>

              <h3 className={styles.guideSubheading}>5. Premium Materials & Textures</h3>
              <p className={styles.guidePara}>
                We maintain an extensive, premium material library containing realistic textures and finishes that elevate any architectural space:
              </p>
              <ul className={styles.guideList}>
                <li><strong>Textured Wood Grains:</strong> Emulate authentic walnut, oak, teak, or carbon-look wood panels with physical, embossed grains that look and feel like custom carpenter veneer.</li>
                <li><strong>Opulent Marble & Stone:</strong> Choose from high-gloss or matte marble wraps to create luxurious kitchen countertops, backsplashes, and reception desks.</li>
                <li><strong>Solid Mattes & Metallics:</strong> Anti-fingerprint solid colors (cashmere, slate, charcoal) and brushed metallic wraps for clean, modern corporate layouts.</li>
                <li><strong>Raw Concrete & Stucco:</strong> Bring raw, textured industrial depth to accent walls, retail columns, and restaurant partitions.</li>
              </ul>

              <h3 className={styles.guideSubheading}>6. Warranty & Long-Term Lifespan</h3>
              <p className={styles.guidePara}>
                Our commercial-grade architectural films are designed to last. In climate-controlled UAE interiors, our vinyl wrapping solutions have a proven lifespan of 7 to 10+ years without peeling, fading, or bubbling. To ensure complete peace of mind, every professional installation by WallWrap Creations (Veespo) is backed by a comprehensive warranty covering material defects and installation workmanship. Furthermore, because the wrap is fully removable, it protects the original surface underneath, preserving property value.
              </p>

              <h3 className={styles.guideSubheading}>7. Maintenance & Cleaning Guidelines</h3>
              <p className={styles.guidePara}>
                Caring for your newly wrapped cabinets, doors, or furniture is extremely simple and requires no specialized chemicals:
              </p>
              <ul className={styles.guideList}>
                <li>Always use a soft microfiber cloth and a mild soap-and-water solution or a pH-neutral surface cleaner for daily cleaning.</li>
                <li>Never use abrasive scouring pads, steel wool, or bleach-based solvents, as they can cause micro-scratches on the matte or gloss finish.</li>
                <li>For wrapped countertops, always utilize a chopping board instead of cutting directly on the wrap, and place hot pots on heat trivets.</li>
                <li>Promptly wipe away high-pigment food or drink spills (like red wine, coffee, or turmeric) to prevent any potential surface staining.</li>
              </ul>

              <h3 className={styles.guideSubheading}>8. Ready to Transform Your Interior?</h3>
              <p className={styles.guidePara}>
                If you are ready to modernize your space in Dubai, Abu Dhabi, Sharjah, or Ajman, Veespo is here to help. Contact our design specialists today to schedule a site inspection, view our physical texture swatch catalogs, and request your free digital rendering. Let us show you how we can elevate your home or office with zero demolition, zero mess, and outstanding luxury results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="section bg-dark-soft">
        <div className="container">
          <h3 className={`text-center ${styles.sectionTitle}`}>Frequently Asked Questions</h3>
          <p className={`text-center ${styles.sectionSubtitle}`}>Answers about {currentService.h1} you need to know.</p>
          
          <div className={styles.faqList}>
            {currentService.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
                  <button 
                    className={styles.faqHeader} 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        className={styles.faqBody}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
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

      {/* Premium Conversion Call To Action Block */}
      <section className={styles.ctaBottomSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow}></div>
            <h3>Ready to Elevate Your Space?</h3>
            <p>Experience the same quality, craftsmanship, and attention to detail our clients across Dubai and the UAE appreciate. Contact our team today for a free rendering of your project.</p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={`btn btn-primary ${styles.ctaPrimaryBtn}`}>
                Request Free Rendering
                <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/971589944602" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.ctaSecondaryBtn}`}>
                Chat With Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
