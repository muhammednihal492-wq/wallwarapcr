import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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
                  <p className={styles.infoText}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Mail size={24} /></div>
                <div>
                  <h4 className={styles.infoTitle}>Email</h4>
                  <p className={styles.infoText}>hello@wallwrap.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <div>
                  <h4 className={styles.infoTitle}>Office Address</h4>
                  <p className={styles.infoText}>123 Design Avenue, Modern City, NY 10001</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <div className={styles.companyLogo}>WW</div>
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Company Details</h4>
                  <p className={styles.infoText}>WallWrap Premium Interiors LLC</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.contactFormWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Your Name" required className={styles.input} />
              </div>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <input type="email" placeholder="Email Address" required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <input type="tel" placeholder="Phone Number" required className={styles.input} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <textarea placeholder="Tell us about your project..." rows="5" required className={styles.textarea}></textarea>
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Send Request</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe 
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3022.1839488344583!2d-73.9877318!3d40.758895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTUuOCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
