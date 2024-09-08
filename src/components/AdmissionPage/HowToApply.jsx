import React from 'react';
import styles from './HowToApply.module.css';

const HowToApply = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How to Apply</h2>
      <ol className={styles.stepsList}>
        <li className={styles.listItem}>Fill out the online application form with accurate detail at &nbsp; 
           <a href="/admissions.alhijrah.pk">admissions.alhijrah.pk</a></li>
        <li className={styles.listItem}>Submit the required documents, including transcripts, recommendation letters, and any other supporting materials.</li>
        <li className={styles.listItem}>Pay the non-refundable application fee through our secure payment portal.</li>
        <li className={styles.listItem}>Attend an interview, either in person or virtually, if required for your program of interest.</li>
        <li className={styles.listItem}>Wait for the admission decision, which will be communicated via email within a few weeks.</li>
      </ol>

      <h3 className={styles.subHeading}>Important Tips for Applicants</h3>
      <p className={styles.paragraph}>
        Ensure that all your documents are up to date and submitted by the deadline. Late submissions may not be considered.
      </p>
      <p className={styles.paragraph}>
        Take the time to craft a thoughtful and well-written personal statement or essay, as it plays a crucial role in the admissions decision.
      </p>
      <p className={styles.paragraph}>
        If you are required to attend an interview, prepare thoroughly by researching common interview questions and practicing your responses.
      </p>
      <p className={styles.paragraph}>
        Keep track of all important dates, including application deadlines, interview schedules, and decision release dates.
      </p>
    </div>
  );
};

export default HowToApply;
