import React from 'react';
import styles from './AwardCard.module.css'; // CSS Module for styling

const AwardCard = () => {
  const cardData = [
    {
      image: 'https://alhijrah.pk/wp-content/uploads/2023/02/bal-gov.jpg',
      title: 'Balocistan Excellence Award',
      description: 'Awarded for excellence of Education and Academia of innovation by Balochistan Government in 2016.',
    },
    {
      image: 'https://alhijrah.pk/wp-content/uploads/2023/03/logos.jpg',
      title: ' MoU with Economic Affairs Division (EAD)',
      description: 'Al-Hijrah Signed an MoU with EAD, EAD is Government entity mandated for Coordination of Foreign Funding.',
    },
    {
      image: 'https://alhijrah.pk/wp-content/uploads/2023/03/logo1.jpg',
      title: 'Certification from Pakistan Center for Philanthropy (PCP) ',
      description: 'Al-Hijrah is Certified from PCP – a not for profit organization mandated by government of Pakistan for accreditation of NGOs in Pakistan.',
    },
    // Add more cards as needed
  ];

  return ( 
    <> <h3 style={{marginLeft: "25px"}}>Certifictions</h3>
    <div className={styles.cardContainer}>
    
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.image}>
            <img src={card.image} alt={card.title} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.description}>{card.description}</p>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default AwardCard;
