import React, { useState } from 'react';
import styles from './FindEvent.module.css';

const eventsData = [
  {
    title: 'Science Fair 2024',
    date: 'March 15, 2024',
    category: 'Science',
    description: 'Showcase your scientific talents and compete for prizes.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bCx7lyqgE4oTU8qqKpjRtZcJPP1-9fAvCQ&s',
  },
  {
    title: 'Art Exhibition',
    date: 'April 10, 2024',
    category: 'Arts',
    description: 'A display of the finest student artwork.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9JeCYAmqwEPniSoXYjgZ92hj3EuCWY8rCQ&s',
  },
  {
    title: 'Mathematics Olympiad',
    date: 'May 5, 2024',
    category: 'Mathematics',
    description: 'Test your mathematical skills in this challenging competition.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDafWyJ42Jvq0tJACCtja6GYDtm6IjXkHZg&s',
  },
  {
    title: 'Sports Day 2024',
    date: 'June 20, 2024',
    category: 'Sports',
    description: 'Join us for a day filled with exciting sports events.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWNXwZ4QmozIpOmN_I9wd1O02ikJEePxAgw&s',
  },
  {
    title: 'Literary Festival',
    date: 'August 14, 2024',
    category: 'Arts',
    description: 'Celebrate the world of literature with readings, panels, and more.',
    image: 'https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2023/02/19/3686371-1019939448.jpg?itok=yGrWmTTf',
  },
  {
    title: 'Robotics Workshop',
    date: 'October 10, 2024',
    category: 'Science',
    description: 'A hands-on workshop for robotics enthusiasts.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XfFKBTv7AAVQgizNtKXgf9eIqmAkhQycFw&s',
  },
  {
    title: 'Science Fair 2024',
    date: 'March 15, 2024',
    category: 'Science',
    description: 'Showcase your scientific talents and compete for prizes.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bCx7lyqgE4oTU8qqKpjRtZcJPP1-9fAvCQ&s',
  },
  {
    title: 'Art Exhibition',
    date: 'April 10, 2024',
    category: 'Arts',
    description: 'A display of the finest student artwork.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9JeCYAmqwEPniSoXYjgZ92hj3EuCWY8rCQ&s',
  },
  {
    title: 'Mathematics Olympiad',
    date: 'May 5, 2024',
    category: 'Mathematics',
    description: 'Test your mathematical skills in this challenging competition.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDafWyJ42Jvq0tJACCtja6GYDtm6IjXkHZg&s',
  },
  {
    title: 'Sports Day 2024',
    date: 'June 20, 2024',
    category: 'Sports',
    description: 'Join us for a day filled with exciting sports events.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWNXwZ4QmozIpOmN_I9wd1O02ikJEePxAgw&s',
  },
  {
    title: 'Literary Festival',
    date: 'August 14, 2024',
    category: 'Arts',
    description: 'Celebrate the world of literature with readings, panels, and more.',
    image: 'https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2023/02/19/3686371-1019939448.jpg?itok=yGrWmTTf',
  },
  {
    title: 'Robotics Workshop',
    date: 'October 10, 2024',
    category: 'Science',
    description: 'A hands-on workshop for robotics enthusiasts.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XfFKBTv7AAVQgizNtKXgf9eIqmAkhQycFw&s',
  },
];

const FindEvent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = eventsData.filter(event =>
    (selectedCategory === 'All' || event.category === selectedCategory) &&
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
    <div className={styles.findEventContainer}>
      <h2 className={styles.title}>Find an Event</h2>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="All">All Categories</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className={styles.eventsGrid}>
        {filteredEvents.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <img src={event.image} alt={event.title} className={styles.eventImage} />
            <div className={styles.eventDetails}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDate}>{event.date}</p>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default FindEvent;
