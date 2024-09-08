import React from 'react';
import styles from './MilestoneTimeline.module.css';

const MilestoneTimeline = () => {
  return (
    <div className={styles.timeline}>
      <h2 className={styles.title}>Milestone Timeline</h2>
      <div className={styles.events}>
        <div className={styles.event}>
          <div className={styles.date}>August 2023</div>
          <div className={styles.details}>
            <h3>Dera Ghazi Khan Campus Inauguration</h3>
            <p>We proudly opened our new campus in DG Khan, providing students with a state-of-the-art learning environment. The campus includes modern classrooms, advanced laboratories, and spacious recreational areas.</p>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.date}>January 2023</div>
          <div className={styles.details}>
            <h3>Top National Award</h3>
            <p>Our institution was honored with the Top National Award for Excellence in Education, recognizing our innovative teaching methods and commitment to student success.</p>
          </div>
        </div>
       
        <div className={styles.event}>
          <div className={styles.date}>March 2022</div>
          <div className={styles.details}>
            <h3>New Library Expansion</h3>
            <p>Our library was expanded to include a wider range of academic resources, study areas, and digital media, enhancing the learning experience for all students.</p>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.date}>November 2021</div>
          <div className={styles.details}>
            <h3>Community Outreach Program</h3>
            <p>We initiated a community outreach program aimed at providing educational support and resources to underprivileged areas, contributing to social development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneTimeline;
