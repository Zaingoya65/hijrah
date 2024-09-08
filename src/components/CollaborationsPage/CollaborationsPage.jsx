import React from 'react';
import InstituteCard from './InstituteCard';
import CollaborationHighlights from './CollaborationHighlights';

import styles from './CollaborationsPage.module.css'; 

const institutes = [
  {
    name: 'Akhuwat Trust',
    description: 'A leading institute in technology research and development.',
    logo: 'https://seeklogo.com/images/A/akhuwat-university-logo-FF9260F8D0-seeklogo.com.png', 
  },
  {
    name: 'Garrision University Lahore',
    description: 'A prestigious university with a strong focus on scientific research.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUm3mzEuSK3yFBQ2UgKRs2KQZpwx-NWVpY7Q&s',
  },
  {
    name: 'Akhuwat Trust',
    description: 'A leading institute in technology research and development.',
    logo: 'https://seeklogo.com/images/A/akhuwat-university-logo-FF9260F8D0-seeklogo.com.png', 
  },
  {
    name: 'Garrision University Lahore',
    description: 'A prestigious university with a strong focus on scientific research.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUm3mzEuSK3yFBQ2UgKRs2KQZpwx-NWVpY7Q&s',
  },
 
];

const highlights = [
  'Partnerships in cutting-edge research',
  'Joint academic programs',
  'Collaborative funding initiatives',
  'Learning and Teaching Activites'
];


const CollaborationPage = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.header}>Our Collaborating Institutes</h2>
      <div className={styles.grid}>
        {institutes.map((institute, index) => (
          <InstituteCard key={index} {...institute} />
        ))}
      </div>
      <CollaborationHighlights highlights={highlights} />

    </div>
  );
};

export default CollaborationPage;
