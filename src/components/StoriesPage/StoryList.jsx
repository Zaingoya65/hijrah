// src/components/StoryList/StoryList.jsx

import React from 'react';
import StoryCard from './StoryCard';
import styles from './StoryList.module.css';

const StoryList = ({ stories }) => {
  return (
    <div className={styles.list}>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
