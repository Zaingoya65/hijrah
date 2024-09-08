// BatchList.js
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import StudentList from './StudentList'; // Ensure the correct path
import styles from './BatchList.module.css';

const BatchList = ({ batches = [] }) => {
  const [expandedBatch, setExpandedBatch] = useState(null);

  const handleToggleBatch = (batchNumber) => {
    setExpandedBatch(expandedBatch === batchNumber ? null : batchNumber);
  };

  return (
    <section className={styles.batchList}>
    <div  className={styles.container}>
      <h2 className={styles.title}>Alumni Batches</h2>
      {batches.map((batch) => (
        <div key={batch.batchNumber} className={styles.batchContainer}>
          <div 
            className={styles.batchHeader}
            onClick={() => handleToggleBatch(batch.batchNumber)}
          >
            Batch {batch.batchNumber}
          </div>
          {expandedBatch === batch.batchNumber && (
            <div className={styles.batchDetails}>
              <StudentList students={batch.students} />
            </div>
          )}
        </div>
      ))}
    </div></section>
  );
};

BatchList.propTypes = {
  batches: PropTypes.arrayOf(
    PropTypes.shape({
      batchNumber: PropTypes.number.isRequired,
      students: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          photo: PropTypes.string.isRequired,
          currentRole: PropTypes.string,
          destination: PropTypes.string,
          qualification: PropTypes.string,
        })
      ).isRequired,
    })
  ),
};

export default BatchList;
