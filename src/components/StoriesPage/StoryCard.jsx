// src/components/StoryCard/StoryCard.jsx

import React from 'react';
import styles from './StoryCard.module.css';

const StoryCard = ({ story }) => {
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img src={story.photo} alt={`${story.name}`} className={styles.photo} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{story.name}</h3>
        <p className={styles.role}><strong>Role:</strong> {story.currentRole}</p>
        <p className={styles.destination}><strong>Department:</strong> {story.destination}</p>
        <p className={styles.qualification}><strong>Qualification:</strong> {story.qualification}</p>
        <p className={styles.story}>"{story.story}"</p>
      </div>
    </div>
  );
};

export default StoryCard;
