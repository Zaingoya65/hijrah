import React from 'react';
import styles from './AdmissionRequirements.module.css';

const AdmissionRequirements = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Admission Requirements</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>Completed application form</li>
        <li className={styles.listItem}>Official high school transcripts</li>
        <li className={styles.listItem}>Personal statement or essay</li>
        <li className={styles.listItem}>Letters of recommendation</li>
        <li className={styles.listItem}>Standardized test scores (if applicable)</li>
      </ul>

   
      <p className={styles.paragraph}>
        Admission to Grade 7 is an important milestone in a student’s academic journey. We are committed to ensuring that each applicant is evaluated comprehensively. Below are the specific requirements for Grade 7 admissions:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>Completed Grade 6 or equivalent with a strong academic record.</li>
        <li className={styles.listItem}>Submission of final Grade 6 report card, showing consistent performance in core subjects.</li>
        <li className={styles.listItem}>A personal statement from the student explaining their interest in joining our school.</li>
        <li className={styles.listItem}>Two letters of recommendation from current teachers, highlighting the student’s strengths and potential.</li>
        <li className={styles.listItem}>Participation in a placement test, which assesses the student's readiness for Grade 7.</li>
      </ul>
      <p className={styles.paragraph}>
        In addition to these academic requirements, we also encourage students to demonstrate involvement in extracurricular activities, community service, or other areas of personal growth. Our holistic approach ensures that we consider the whole student, not just their academic achievements.
      </p>
    </div>
  );
};

export default AdmissionRequirements;
