import React from 'react';
import styles from './AlumniCabinet.module.css';

// Sample data for the alumni cabinet with email addresses
const cabinetMembers = [
  {
    name: 'Irfan Ali',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'President',
    bio: 'Irfan Ali is a leading advocate for alumni networking and development.',
    email: 'irfan.ali@example.com'
  },
  {
    name: 'Ali Raza',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Treasurer',
    bio: 'Ali Raza manages the financial operations and funding for alumni events.',
    email: 'ali.raza@example.com'
  },
  {
    name: 'Fahim Khan',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Secretary',
    bio: 'Fahim Khan coordinates meetings and communications within the alumni network.',
    email: 'fahim.khan@example.com'
  },
  {
    name: 'Imran Malik',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Event Coordinator',
    bio: 'Imran Malik organizes alumni gatherings and special events.',
    email: 'imran.malik@example.com'
  },
  {
    name: 'Irfan Ali',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'President',
    bio: 'Irfan Ali is a leading advocate for alumni networking and development.',
    email: 'irfan.ali@example.com'
  },
  {
    name: 'Ali Raza',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Treasurer',
    bio: 'Ali Raza manages the financial operations and funding for alumni events.',
    email: 'ali.raza@example.com'
  },
  {
    name: 'Fahim Khan',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Secretary',
    bio: 'Fahim Khan coordinates meetings and communications within the alumni network.',
    email: 'fahim.khan@example.com'
  },
  {
    name: 'Imran Malik',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Event Coordinator',
    bio: 'Imran Malik organizes alumni gatherings and special events.',
    email: 'imran.malik@example.com'
  },
  {
    name: 'Irfan Ali',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'President',
    bio: 'Irfan Ali is a leading advocate for alumni networking and development.',
    email: 'irfan.ali@example.com'
  },
  {
    name: 'Ali Raza',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Treasurer',
    bio: 'Ali Raza manages the financial operations and funding for alumni events.',
    email: 'ali.raza@example.com'
  },
  {
    name: 'Fahim Khan',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Secretary',
    bio: 'Fahim Khan coordinates meetings and communications within the alumni network.',
    email: 'fahim.khan@example.com'
  },
  {
    name: 'Imran Malik',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
    position: 'Event Coordinator',
    bio: 'Imran Malik organizes alumni gatherings and special events.',
    email: 'imran.malik@example.com'
  },
  // Add more members as needed
];

const AlumniCabinet = () => {
  return (
    <div className="container">
      <div className={styles.cabinetSection}>
        <h2 className={styles.title}>Meet the Alumni Cabinet</h2>
        <div className={styles.cabinetContainer}>
          {cabinetMembers.map((member, index) => (
            <div key={index} className={styles.cabinetMember}>
              <div className={styles.photoContainer}>
                <img src={member.photo} alt={member.name} className={styles.photo} />
              </div>
              <div className={styles.details}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.position}>{member.position}</p>
                <p className={styles.bio}>{member.bio}</p>
                <a href={`mailto:${member.email}`} className={styles.email}>{member.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniCabinet;
