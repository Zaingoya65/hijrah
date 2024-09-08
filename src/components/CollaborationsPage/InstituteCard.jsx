import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import styles from './InstituteCard.module.css';

const InstituteCard = ({ name, description, logo }) => {
  return (
    <div className={styles.card}>
       <img src={logo} alt={`${name} logo`} className={styles.logo} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default InstituteCard;
