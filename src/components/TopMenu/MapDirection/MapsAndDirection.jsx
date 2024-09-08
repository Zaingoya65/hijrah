// src/components/MapsAndDirection.jsx

import React from 'react';
import styles from './MapsAndDirection.module.css';

const officeData = [
  
    {
      name: 'Office 1 - Quetta',
      address: 'Flate No 1, Ramzan Plaza, near Ahsan Lab, Patel Bagh',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.1696260677169!2d67.00825465053748!3d30.189176463229757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2e1af488c460f%3A0xdb5ccd1907e64ea4!2sAl%20Hijrah%20Alumni%20Pakistan!5e0!3m2!1sen!2s!4v1725274306962!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
      contact: {
        phone: '+92-316-1833824',
        email: 'qta.office@example.com',
      },
    },
    {
      name: 'Office 2 - Lahore',
      address: '456 Second Avenue, Lahore, Pakistan',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.227506643195!2d74.3419153145082!3d31.5203703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b6a9d2d4ab%3A0x5a2c4b3c3d2d3c2a!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1631182133017!5m2!1sen!2s',
      contact: {
        phone: '+92 42 8765 4321',
        email: 'lahore.office@example.com',
      },
    },
    {
      name: 'Office 3 - Islamabad',
      address: '789 Third Boulevard, Islamabad, Pakistan',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.551235432987!2d73.04788531450968!3d33.6844203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd7f3b4e4e5d%3A0x4b2c3b4f2b3e3e4d!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1631182133017!5m2!1sen!2s',
      contact: {
        phone: '+92 51 2345 6789',
        email: 'islamabad.office@example.com',
      },
    },
    {
      name: 'Office 4 - Birmingham, UK',
      address: '321 Fourth Street, Birmingham, UK',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24211.799322163626!2d-1.8904017149439388!3d52.48624353814921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871b8f9f9f9f9f9%3A0x1234567890abcdef!2sBirmingham%2C%20UK!5e0!3m2!1sen!2s!4v1631182133017!5m2!1sen!2s',
      contact: {
        phone: '+44 121 123 4567',
        email: 'birmingham.office@example.co.uk',
      },
    },
  ];


const MapsAndDirection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Offices</h2>
      <div className={styles.offices}>
        {officeData.map((office, index) => (
          <div key={index} className={styles.officeCard}>
            <h3 className={styles.officeName}>{office.name}</h3>
            <p className={styles.address}>{office.address}</p>
            <div className={styles.mapContainer}>
              <iframe
                src={office.mapEmbedUrl}
                title={`Map of ${office.name}`}
                className={styles.map}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.contact}>
              <p><strong>Phone:</strong> <a href={`tel:${office.contact.phone}`} className={styles.contactLink}>{office.contact.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${office.contact.email}`} className={styles.contactLink}>{office.contact.email}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapsAndDirection;
