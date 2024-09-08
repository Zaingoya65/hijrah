import React from 'react';
import styles from './CollaborationHighlights.module.css';

const CollaborationHighlights = ({ highlights }) => {
  return (
    <div className="container">
    <div className={styles.highlights}>
      <h3 className={styles.title}>Collaboration Highlights</h3>
      <div className={styles.grid}>
        {highlights.map((highlight, index) => (
          <div key={index} className={styles.highlightCard}>
            <p>{highlight}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CollaborationHighlights;
