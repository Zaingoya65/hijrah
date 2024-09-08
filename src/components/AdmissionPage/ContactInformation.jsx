import React from 'react';
import styles from './ContactInformation.module.css';

const ContactInformation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Information</h2>
      <p className={styles.paragraph}>
        If you have any questions or need assistance with your application, please feel free to reach out to our admissions office. Our team is here to help you with any inquiries and provide the support you need during the admissions process.
      </p>
      <div className={styles.contactDetails}>
        <p className={styles.contactItem}>Email: <a href="mailto:admissions@schoolname.edu">admissions@schoolname.edu</a></p>
        <p className={styles.contactItem}>Phone: (123) 456-7890</p>
        <p className={styles.contactItem}>Website: <a href="#">www.alhijrah.pk/contact</a></p>
      </div>
      <div className={styles.officeHours}>
        <h3>Office Hours:</h3>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Saturday: 10:00 AM - 2:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
      <p className={styles.paragraph}>
        You can also visit our admissions office in person during office hours. We recommend making an appointment in advance to ensure that one of our admissions counselors is available to assist you.
      </p>
      <p className={styles.paragraph}>
        Our office is located at 1234 School Street, Building A, Room 101, City, State, ZIP Code. We look forward to helping you take the next step in your educational journey.
      </p>
    </div>
  );
};

export default ContactInformation;
