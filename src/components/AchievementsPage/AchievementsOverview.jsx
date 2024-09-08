import React from 'react';
import styles from './AchievementsOverview.module.css';

const AchievementsOverview = () => {
  return (
    <div className={styles.overview}>
      <h2 className={styles.title}>Our Achievements</h2>
      <p className={styles.description}>
        Discover the milestones and successes that make us proud. From awards and accolades to significant accomplishments, 
        our achievements reflect our commitment to excellence in education.
      </p>
      <div className={styles.details}>
        <h4 className={styles.subtitle}>Key Highlights:</h4>
        <ol className={styles.highlights}>
          <li>Recognized as a top educational institution in the region for consecutive years.</li>
          
          <li>Launched several community outreach programs with significant impact.</li>
          <li>Achieved a record high in student graduation rates and academic excellence.</li>
        </ol>
        <p className={styles.extraInfo}>
          Our dedication to providing quality education is evident through our numerous accolades and the positive impact we've made on our students and the community. We are committed to continuing our journey of excellence and achieving new milestones.
        </p>
      </div>
    </div>
  );
};

export default AchievementsOverview;
