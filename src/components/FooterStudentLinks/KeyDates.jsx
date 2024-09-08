import React from 'react';
import styles from './KeyDates.module.css';

// Sample data for key dates
const keyDates = [
  {
    date: '2024 March,01',
    event: 'First Day of 2024',
    description: 'The new semester begins. Welcome to all new and returning students.',
    icon: 'https://img.icons8.com/ios/50/000000/school.png'
  },
  {
    date: '2024-12-15',
    event: 'Mid-Term Exams',
    description: 'Mid-term exams commence. Ensure you are well-prepared.',
    icon: 'https://img.icons8.com/ios/50/000000/test-tube.png'
  },
  {
    date: '2025-02-28',
    event: 'Parent teacher metting',
    description: ' concludes with final exams and evaluations.',
    icon: 'https://img.icons8.com/ios/50/000000/graduation-cap.png'
  },
  {
    date: '2024 March,01',
    event: 'First Day of 2024',
    description: 'The new semester begins. Welcome to all new and returning students.',
    icon: 'https://img.icons8.com/ios/50/000000/school.png'
  },
  {
    date: '2024-12-15',
    event: 'Mid-Term Exams',
    description: 'Mid-term exams commence. Ensure you are well-prepared.',
    icon: 'https://img.icons8.com/ios/50/000000/test-tube.png'
  },
  {
    date: '2025-02-28',
    event: 'Parent teacher metting',
    description: ' concludes with final exams and evaluations.',
    icon: 'https://img.icons8.com/ios/50/000000/graduation-cap.png'
  },
  // Add more key dates as needed
];

const KeyDates = () => {
  return (
<div className={styles.con}>
    <div className="container">
      <h2 className={styles.title}>Key Dates</h2>
      <div className={styles.timeline}>
        {keyDates.map((date, index) => (
          <div key={index} className={styles.dateItem}>
            <img src={date.icon} alt={date.event} className={styles.icon} />
            <div className={styles.dateInfo}>
              <h3 className={styles.date}>{date.date}</h3>
              <h4 className={styles.event}>{date.event}</h4>
              <p className={styles.description}>{date.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default KeyDates;
