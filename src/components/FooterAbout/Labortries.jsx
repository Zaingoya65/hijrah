import React, { useState } from 'react';
import styles from './Laboratories.module.css';

const labsData = [
  {
    name: 'Computer Science Lab',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZyxlp07DakR_HVMyWXdiisMgWd-ccieKEQ&s',
    facilities: 'High-speed computers, AI & Machine Learning Tools, Internet Access',
    description: 'Our Computer Science Lab is equipped with the latest technology...',
    modalContent: 'This lab has 50 high-performance computers with the latest software for AI, machine learning, and data science. It also features a 3D printer and a dedicated area for virtual reality projects.'
  },
  {
    name: 'Physics Lab',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPwWm4D2Wz7Wd4guYk5eOehcoCvxHrljmbg&s',
    facilities: 'Oscilloscopes, Wave generators, LabVIEW',
    description: 'The Physics Lab is designed for practical learning in the field of physics...',
    modalContent: 'This lab includes cutting-edge equipment like oscilloscopes, wave generators, and other advanced tools. Students can conduct experiments in mechanics, electromagnetism, and optics.'
  },
  {
    name: 'Chemistry Lab',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUCctaCOnp2t_Uqb_7IBEFcQxpqyt437ewg&s',
    facilities: 'Fume hoods, Chemical Storage, Analytical Tools',
    description: 'Our Chemistry Lab offers a safe and well-ventilated space for students...',
    modalContent: 'Equipped with fume hoods, extensive chemical storage, and modern analytical tools, this lab supports a wide range of experiments, from organic synthesis to analytical chemistry.'
  },
  {
    name: 'Biology Lab',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUCctaCOnp2t_Uqb_7IBEFcQxpqyt437ewg&s',
    facilities: 'Fume hoods, Chemical Storage, Analytical Tools',
    description: 'Our Chemistry Lab offers a safe and well-ventilated space for students...',
    modalContent: 'Equipped with fume hoods, extensive chemical storage, and modern analytical tools, this lab supports a wide range of experiments, from organic synthesis to analytical chemistry.'
  }
];

const Laboratories = () => {
  const [activeLab, setActiveLab] = useState(null);

  const openModal = (lab) => {
    setActiveLab(lab);
  };

  const closeModal = () => {
    setActiveLab(null);
  };

  return (
    <section className={styles.con}>
    <div className="container">
      <h2 className={styles.title}>Our Laboratories</h2>
      <div className={styles.labs}>
        {labsData.map((lab, index) => (
          <div key={index} className={styles.lab} onClick={() => openModal(lab)}>
            <img src={lab.image} alt={lab.name} className={styles.image} />
            <h3 className={styles.labName}>{lab.name}</h3>
            <p className={styles.facilities}>{lab.facilities}</p>
            <p className={styles.description}>{lab.description}</p>
          </div>
        ))}
      </div>

      {activeLab && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>{activeLab.name}</h2>
            <img src={activeLab.image} alt={activeLab.name} className={styles.modalImage} />
            <p className={styles.modalText}>{activeLab.modalContent}</p>
            <button className={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div></section>
  );
};

export default Laboratories;
