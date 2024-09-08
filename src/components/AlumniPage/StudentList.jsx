
import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './StudentList.module.css';

const StudentList = ({ students = [] }) => {
  if (!Array.isArray(students)) {
    console.error('Expected students to be an array');
    return null;
  }

  return (
    <div className={`{styles.studentList} container`}>
      <ul className={styles.list}>
        {students.map((student, index) => (
          <li key={index} className={styles.studentItem}>
            <img src={student.photo} alt={`${student.name} photo`} className={styles.photo} />
            <div className={styles.details}>
              <h3 className={styles.name}> {student.name}</h3>
              <p className={styles.qualification}>Qualification: {student.qualification}</p>
              <p className={styles.currentRole}>Role: {student.currentRole}</p>
              <p className={styles.destination}>Destination: {student.destination}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      currentRole: PropTypes.string,
      destination: PropTypes.string,
      qualification: PropTypes.string,
    })
  ),
};

export default StudentList;
