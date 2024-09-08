import React from 'react';
import styles from './FacultyMembers.module.css';

const facultyData = [
  {
    name: 'Abdul Rehman Usmani',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'CEO',
    bio: 'Mr. Shabir is from the Batch-1 student. He had done Management Science from the University....',
    email: 'usmani@example.com',
  },
  {
    name: 'Prof. Shabir',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Principal',
    bio: 'Mr. Shabir is from the Batch-1 student. He had done Management Science from the University....',
    email: 'shabir@example.com',
  },
  {
    name: 'Lect. Abdullah Qaisrani',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Vice Principal',
    bio: 'Mr. Abdullah Qaisrani is offering his services from last 15 years. He had done double Masters.',
    email: 'abdullah.qaisrani@example.com',
  },
  {
    name: 'Lect. Ghulam Ali',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Lecturer of Mathematics',
    bio: 'Ghulam Ali focuses on applied mathematics and leads several innovative research projects.',
    email: 'ghulam.ali@example.com',
  },
  {
    name: 'Lect. Abdullah Qaisarani',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Lecturer in Physics',
    bio: 'Mr. Qureshi is passionate about teaching and has a keen interest in quantum physics.',
    email: 'abdullah.qaisarani@example.com',
  },
  {
    name: 'Lect. Ghulam Mustafa',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Lecturuer of Computer Science',
    bio: 'Ghulam Mustafa has been with the institute for over 4 years, specializing in AI and machine learning.',
    email: 'ghulam.mustafa@example.com',
  },
  {
    name: 'Lect. Nabi Baksh',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Lecturuer of Chemistry',
    bio: 'Nabi Baksh is an expert in organic chemistry and has published numerous research papers.',
    email: 'nabi.baksh@example.com',
  },
  {
    name: 'Abdul Rehman Usmani',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'CEO',
    bio: 'Mr. Shabir is from the Batch-1 student. He had done Management Science from the University....',
    email: 'usmani@example.com',
  },
  {
    name: 'Prof. Shabir',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Principal',
    bio: 'Mr. Shabir is from the Batch-1 student. He had done Management Science from the University....',
    email: 'shabir@example.com',
  },
  {
    name: 'Lect. Abdullah Qaisrani',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Vice Principal',
    bio: 'Mr. Abdullah Qaisrani is offering his services from last 15 years. He had done double Masters.',
    email: 'abdullah.qaisrani@example.com',
  },
  {
    name: 'Lect. Ghulam Ali',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Lecturer of Mathematics',
    bio: 'Ghulam Ali focuses on applied mathematics and leads several innovative research projects.',
    email: 'ghulam.ali@example.com',
  },
  {
    name: 'Lect. Abdullah Qaisarani',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Lecturer in Physics',
    bio: 'Mr. Qureshi is passionate about teaching and has a keen interest in quantum physics.',
    email: 'abdullah.qaisarani@example.com',
  },
  {
    name: 'Lect. Ghulam Mustafa',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Lecturuer of Computer Science',
    bio: 'Ghulam Mustafa has been with the institute for over 4 years, specializing in AI and machine learning.',
    email: 'ghulam.mustafa@example.com',
  },
  {
    name: 'Lect. Nabi Baksh',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Lecturuer of Chemistry',
    bio: 'Nabi Baksh is an expert in organic chemistry and has published numerous research papers.',
    email: 'nabi.baksh@example.com',
  },
  // Add more faculty members as needed
];

const FacultyMembers = () => {
  return (
    <div className="container">
      <div className={styles.facultySection}>
        <h2 className={styles.title}>Meet Our Faculty</h2>
        <div className={styles.members}>
          {facultyData.map((faculty, index) => (
            <div key={index} className={styles.member}>
              <img src={faculty.photo} alt={faculty.name} className={styles.photo} />
              <div className={styles.details}>
                <h3 className={styles.name}>{faculty.name}</h3>
                <p className={styles.position}>{faculty.position}</p>
                <p className={styles.bio}>{faculty.bio}</p>
                <p className={styles.email}>Email: <a href={`mailto:${faculty.email}`}>{faculty.email}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyMembers;
