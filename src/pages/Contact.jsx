import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { Phone, Mail, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Request from wallwrapcreations.com:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested: ${formData.service}\n\nProject Details:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/971589944602?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.pageHeader}>
        <div className={`container text-center`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="text-highlight">Touch</span>
          </motion.h1>
          <motion.p 
            className={styles.pageSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready for a transformation? We would love to hear from you.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className={`container ${styles.contactGrid}`}>
          <motion.div 
            className={styles.contactInfoWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <div className="gold-divider"></div>
            <p className="mb-4 text-gray">Reach out to us directly or fill out the form, and our experts will get back to you shortly.</p>
            
            <div className={styles.infoBlocks}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Phone size={24} /></div>
                <div>
                  <h4 className={styles.infoTitle}>Phone</h4>
                  <a href="tel:+971589944602" className={styles.infoText} style={{ display: 'block' }}>+971589944602</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Mail size={24} /></div>
                <div>
                  <h4 className={styles.infoTitle}>Email</h4>
                  <a href="mailto:contact@wallwrapcreations.com" className={styles.infoText} style={{ display: 'block' }}>contact@wallwrapcreations.com</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><FaWhatsapp size={24} /></div>
                <div>
                  <h4 className={styles.infoTitle}>WhatsApp</h4>
                  <a href="https://wa.me/971589944602" target="_blank" rel="noopener noreferrer" className={styles.infoText} style={{ display: 'block' }}>+971 58 994 4602</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Instagram</h4>
                  <a href="https://www.instagram.com/wallwrapcreations?igsh=MTMydDUydzMyNGxlbg==" target="_blank" rel="noopener noreferrer" className={styles.infoText} style={{ display: 'block' }}>@wallwrapcreations</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.contactFormWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <div className={styles.inputGroup}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className={styles.input} />
              </div>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className={styles.input} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <select name="service" value={formData.service} onChange={handleChange} required className={styles.input}>
                  <option value="" disabled>Select Service Interested</option>
                  <option value="Kitchen Wrapping" style={{ backgroundColor: '#050807', color: '#EAEAEA' }}>Kitchen Wrapping</option>
                  <option value="Bathroom Wrapping" style={{ backgroundColor: '#050807', color: '#EAEAEA' }}>Bathroom Wrapping</option>
                  <option value="Wardrobe Wrapping" style={{ backgroundColor: '#050807', color: '#EAEAEA' }}>Wardrobe Wrapping</option>
                  <option value="Door Wrapping" style={{ backgroundColor: '#050807', color: '#EAEAEA' }}>Door Wrapping</option>
                  <option value="Flooring" style={{ backgroundColor: '#050807', color: '#EAEAEA' }}>Flooring</option>
                  <option value="Window Tinting" style={{ backgroundColor: '#050807', color: '#EAEAEA' }}>Window Tinting</option>
                  <option value="Architectural Film" style={{ backgroundColor: '#050807', color: '#EAEAEA' }}>Architectural Film</option>
                  <option value="Other Services" style={{ backgroundColor: '#050807', color: '#EAEAEA' }}>Other Services</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows="5" required className={styles.textarea}></textarea>
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Send Request</button>
            </form>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
