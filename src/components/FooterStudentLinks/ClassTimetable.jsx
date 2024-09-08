import React from 'react';
import styles from './ClassTimetable.module.css';

const timetableData = [
  {
    day: 'Monday',
    classes: [
      { time: '08:00 - 09:00', subject: 'Math' },
      { time: '09:00 - 10:00', subject: 'Science' },
      { time: '10:00 - 11:00', subject: 'English' },
      { time: '11:00 - 12:00', subject: 'History' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '08:00 - 09:00', subject: 'Geography' },
      { time: '09:00 - 10:00', subject: 'Math' },
      { time: '10:00 - 11:00', subject: 'Biology' },
      { time: '11:00 - 12:00', subject: 'Art' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '08:00 - 09:00', subject: 'Math' },
      { time: '09:00 - 10:00', subject: 'Science' },
      { time: '10:00 - 11:00', subject: 'English' },
      { time: '11:00 - 12:00', subject: 'History' },
    ],
  },
  {
    day: 'Tursday',
    classes: [
      { time: '08:00 - 09:00', subject: ' Geography' },
      { time: '09:00 - 10:00', subject: 'Math' },
      { time: '10:00 - 11:00', subject: 'Biology' },
      { time: '11:00 - 12:00', subject: 'Art' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '08:00 - 09:00', subject: 'Math' },
      { time: '09:00 - 10:00', subject: 'Science' },
      { time: '10:00 - 11:00', subject: 'English' },
      { time: '11:00 - 12:00', subject: 'History' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '08:00 - 09:00', subject: ' Geography' },
      { time: '09:00 - 10:00', subject: 'Math' },
      { time: '10:00 - 11:00', subject: 'Biology' },
      { time: '11:00 - 12:00', subject: 'Art' },
    ],
  },
  // Add data for other days
];

const ClassTimetable = () => {
  return (
    <section className={styles.con}>
    <div className="container">
    <div className={styles.timetableContainer}>
      <h2 className={styles.title}>Weekly Class Timetable</h2>
      <div className={styles.timetable}>
        {timetableData.map((day, index) => (
          <div key={index} className={styles.dayColumn}>
            <h3 className={styles.dayTitle}>{day.day}</h3>
            <div className={styles.classes}>
              {day.classes.map((classItem, idx) => (
                <div key={idx} className={styles.classItem}>
                  <span className={styles.time}>{classItem.time}</span>
                  <span className={styles.subject}>{classItem.subject}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div></div></section>
  );
};

export default ClassTimetable;
