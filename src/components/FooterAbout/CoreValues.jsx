import React from "react";
import styles from "./CoreValues.module.css";

const CoreValues = () => {
  return (
    <div className="container">
    <div className={styles.coreValuesContainer}>
      <img 
        src="https://alhijrah.pk/wp-content/uploads/2023/03/Al-Hijrah-core-values-011-768x544.jpg" 
        alt="Core Values"
        className={styles.image} 
      />
      <div className={styles.content}>
        <h2 className={styles.title}>Our Core Values</h2>
        <p className={styles.description}>
          At our institution, we believe in the following core values:
          <ul>
            <li><strong>Integrity:</strong> Upholding the highest standards of honesty and ethical behavior.</li>
            <li><strong>Excellence:</strong> Striving for outstanding performance and continuous improvement.</li>
            <li><strong>Respect:</strong> Valuing each individual's worth and treating everyone with dignity.</li>
            <li><strong>Innovation:</strong> Encouraging creativity and embracing new ideas to solve problems.</li>
          </ul>
        </p>
      </div>
    </div></div>
  );
};

export default CoreValues;
