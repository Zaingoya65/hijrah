import React from 'react';
import styles from './ITTeam.module.css'; // Import the CSS module

const teamMembers = [
  {
    name: "Zain Ul Abideen",
    role: "Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
  {
    name: "Saeed Ahmed",
    role: "Graphics Designer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
  {
    name: "Taimoor Shah",
    role: "Data Operator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
  {
    name: "M. Ismail",
    role: "Editor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
  {
    name: "M. Humayoun",
    role: "UI/UX Designer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
  {
    name: "Ahmed Yar",
    role: "Jr. Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
  {
    name: "ShahZain Khan",
    role: "DBA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
  {
    name: "Zaryoun Abbas",
    role: "Content Writer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
  {
    name: "M. Khan",
    role: "Media Handler",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
  },
];

const ITTeam = () => {
  return (
    <div className="container">
    <div className={styles.teamContainer}>
      <h2 className={styles.teamHeading}>Meet Our IT Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img src={member.image} alt={member.name} className={styles.teamImage} />
            <h3 className={styles.teamName}>{member.name}</h3>
            <p className={styles.teamRole}>{member.role}</p>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default ITTeam;
