import React from 'react';
import styles from './ImportantDates.module.css';

const ImportantDates = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Important Dates</h2>
      <ul className={styles.datesList}>
        <li className={styles.dateItem}>Application Deadline: January 15, 2024</li>
        <li className={styles.dateItem}>Interview Period: February 1 - February 28, 2024</li>
        <li className={styles.dateItem}>Admission Decision: March 15, 2024</li>
        <li className={styles.dateItem}>Enrollment Deadline: April 30, 2024</li>
        <li className={styles.dateItem}>Orientation Day: June 1, 2024</li>
        <li className={styles.dateItem}>Classes Begin: June 15, 2024</li>
      </ul>

      <h3 className={styles.subHeading}>Additional Information</h3>
      <p className={styles.paragraph}>
        Please note that all deadlines are strictly enforced. Ensure that you submit your application and all required documents before the deadlines.
      </p>
      <p className={styles.paragraph}>
        Interviews will be scheduled based on the availability of our admissions committee. We recommend booking your interview slot as early as possible.
      </p>
      <p className={styles.paragraph}>
        Admissions decisions will be communicated via email. Make sure to check your inbox regularly and confirm your enrollment by the specified deadline.
      </p>
      <p className={styles.paragraph}>
        Orientation Day is an important event where you will get to know the campus, meet faculty members, and connect with fellow students. Attendance is mandatory.
      </p>
    </div>
  );
};

export default ImportantDates;
