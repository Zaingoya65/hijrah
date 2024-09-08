// src/components/StoriesPage/StoriesPage.jsx

import React from "react";
import StoryList from "./StoryList";
import styles from "./StoriesPage.module.css";
import stories from "./StoriesData";

const StoriesPage = () => {
  return (
    <>
      <div className={`{styles.page} container`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Our Stories</h1>
          <p className={styles.subtitle}>
            Our alumni have gone on to achieve great things, making a difference
            in fields like technology, healthcare, education, and more. These
            stories showcase their hard work, resilience, and success after
            graduating from our institution. We're proud to have been part of
            their journey and hope their stories inspire you to pursue your own
            goals.
          </p>
        </header>
        <StoryList stories={stories} />
      </div>
    </>
  );
};

export default StoriesPage;
