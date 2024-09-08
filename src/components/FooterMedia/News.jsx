import React from 'react';
import styles from './News.module.css';

const newsArticles = [
  {
    title: 'New Campus Expansion Announced',
    date: 'September 15, 2024',
    description: 'We are excited to announce the expansion of our campus with state-of-the-art facilities aimed at providing an enhanced learning experience.',
   
  },
  {
    title: 'Annual Alumni Meet Scheduled',
    date: 'September 10, 2024',
    description: 'Our annual alumni meet will take place on October 5th. Join us to reconnect with former classmates and network with industry professionals.',
   
  },
  {
    title: 'New Scholarship Program Launched',
    date: 'September 5, 2024',
    description: 'We have launched a new scholarship program to support deserving students. Applications are now open for the 2025 academic year.',
  
  },
  {
    title: 'Research Conference Highlights',
    date: 'August 30, 2024',
    description: 'Our recent research conference was a great success, showcasing cutting-edge research and innovative solutions in various fields.',
    
  },
  {
    title: 'New Campus Expansion Announced',
    date: 'September 15, 2024',
    description: 'We are excited to announce the expansion of our campus with state-of-the-art facilities aimed at providing an enhanced learning experience.',
   
  },
  {
    title: 'Annual Alumni Meet Scheduled',
    date: 'September 10, 2024',
    description: 'Our annual alumni meet will take place on October 5th. Join us to reconnect with former classmates and network with industry professionals.',
   
  },
  {
    title: 'New Scholarship Program Launched',
    date: 'September 5, 2024',
    description: 'We have launched a new scholarship program to support deserving students. Applications are now open for the 2025 academic year.',
  
  },
  {
    title: 'Research Conference Highlights',
    date: 'August 30, 2024',
    description: 'Our recent research conference was a great success, showcasing cutting-edge research and innovative solutions in various fields.',
    
  },
];

const News = () => {
  return (
    <div className="container">
    <div className={styles.newsSection}>
      <h2 className={styles.title}>Latest News</h2>
      <div className={styles.newsContainer}>
        {newsArticles.map((article, index) => (
          <div key={index} className={styles.newsCard}>
       
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{article.title}</h3>
              <p className={styles.newsDate}>{article.date}</p>
              <p className={styles.newsDescription}>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default News;
