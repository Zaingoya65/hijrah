import React from 'react';
import styles from './Announcements.module.css';

// Sample data for announcements
const announcements = [
  {
    title: 'New Admission Policy',
    date: 'September 5, 2024',
    description: 'We have updated our admission policies to make the process more streamlined. Please check the details on our admissions page.',
  
  },
  {
    title: 'Annual Science Fair',
    date: 'September 15, 2024',
    description: 'Join us for the annual science fair showcasing innovative projects from our students. All are welcome to attend.',
  
  },
  {
    title: 'Guest Lecture on AI',
    date: 'October 1, 2024',
    description: 'A renowned expert in Artificial Intelligence will be giving a guest lecture. Don’t miss out on this opportunity to learn from the best.',
   
  },
  {
    title: 'Winter Semester Begins',
    date: 'November 1, 2024',
    description: 'The winter semester will commence on November 1st. Ensure that you have completed all necessary preparations.',
   
  },
  {
    title: 'New Admission Policy',
    date: 'September 5, 2024',
    description: 'We have updated our admission policies to make the process more streamlined. Please check the details on our admissions page.',
  
  },
  {
    title: 'Annual Science Fair',
    date: 'September 15, 2024',
    description: 'Join us for the annual science fair showcasing innovative projects from our students. All are welcome to attend.',
  
  },
  {
    title: 'Guest Lecture on AI',
    date: 'October 1, 2024',
    description: 'A renowned expert in Artificial Intelligence will be giving a guest lecture. Don’t miss out on this opportunity to learn from the best.',
   
  },
  {
    title: 'Winter Semester Begins',
    date: 'November 1, 2024',
    description: 'The winter semester will commence on November 1st. Ensure that you have completed all necessary preparations.',
   
  },
  // Add more announcements as needed
];

const Announcements = () => {
  return (
    <div className="container">
    <div className={styles.announcementsSection}>
      <h2 className={styles.title}>Latest Announcements</h2>
      <div className={styles.announcementsContainer}>
        {announcements.map((announcement, index) => (
          <div key={index} className={styles.announcementCard}>

            <div className={styles.announcementContent}>
              <h3 className={styles.announcementTitle}>{announcement.title}</h3>
              <p className={styles.announcementDate}>{announcement.date}</p>
              <p className={styles.announcementDescription}>{announcement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Announcements;
