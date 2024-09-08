import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import { FaUser, FaPhone, FaEnvelope, FaClipboard, FaCommentDots } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    allowContact: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.title}>Contact Us</h2>
      <form
        action="https://formspree.io/f/mqazjepl" // replace {your-form-id} with your Formspree ID
        method="POST"
        className={styles.contactForm}
      >
        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <FaPhone className={styles.icon} />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <FaEnvelope className={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <FaClipboard className={styles.icon} />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <div className={styles.textareaGroup}>
         
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textArea}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            name="allowContact"
            checked={formData.allowContact}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <label className={styles.checkboxLabel}>
            AlHjrah is allowed to contact me back by the given data.
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          <FiSend className={styles.submitIcon} /> Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
