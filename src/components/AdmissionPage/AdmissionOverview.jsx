import React from 'react';
import styles from './AdmissionOverview.module.css';

const AdmissionOverview = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Admission Overview</h2>
      <p className={styles.paragraph}>
        Welcome to our admissions page! We are delighted that you are considering joining our vibrant academic community. This page is designed to provide you with all the information you need to successfully apply to our programs.
      </p>
      <p className={styles.paragraph}>
        At our institution, we are committed to fostering an environment of academic excellence and personal growth. Whether you are a prospective student or a parent, our admissions team is here to guide you through every step of the application process.
      </p>
      <p className={styles.paragraph}>
        Our programs are designed to challenge and inspire you, preparing you for a successful future. We encourage you to explore the various resources available on this page, including admission requirements, important dates, and step-by-step application instructions.
      </p>
      <p className={styles.paragraph}>
        Should you have any questions or need further assistance, please don't hesitate to reach out to our admissions office. We look forward to welcoming you to our campus and supporting you on your educational journey.
      </p>
    </div>
  );
};


export default AdmissionOverview;
