import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './AlumniTestimonial.module.css';

const AlumniTestimonial = () => {
  const alumni = [
    {
      name: 'Wali Khan',
      position: 'Healthcare Professional',
      image: 'https://randomuser.me/api/portraits/women/71.jpg',
      text: 'Al-Hijrah provided me with the foundation to pursue my dreams in healthcare. The education and values instilled here have guided me throughout my career, allowing me to make a significant impact in my field.',
    },
    {
      name: 'Ali Ahmad',
      position: 'Tech Entrepreneur',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      text: 'The entrepreneurial spirit fostered at Al-Hijrah was pivotal in my journey to becoming a tech entrepreneur. The support and mentorship I received were crucial in helping me build a successful startup.',
    },
    {
      name: 'Mustafa Javed',
      position: 'Educator',
      image: 'https://randomuser.me/api/portraits/women/55.jpg',
      text: 'As an educator now, I see the profound impact that Al-Hijrah’s emphasis on holistic education and moral values had on my development. I strive to impart the same values to my students.',
    },
    {
      name: 'Omar Rashid',
      position: 'Community Leader',
      image: 'https://randomuser.me/api/portraits/men/36.jpg',
      text: 'Al-Hijrah shaped my perspective on community service and leadership. The principles learned here have driven me to work towards community development and social justice.',
    },
    {
      name: 'Wali Khan',
      position: 'Healthcare Professional',
      image: 'https://randomuser.me/api/portraits/women/71.jpg',
      text: 'Al-Hijrah provided me with the foundation to pursue my dreams in healthcare. The education and values instilled here have guided me throughout my career, allowing me to make a significant impact in my field.',
    },
    {
      name: 'Ali Ahmad',
      position: 'Tech Entrepreneur',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      text: 'The entrepreneurial spirit fostered at Al-Hijrah was pivotal in my journey to becoming a tech entrepreneur. The support and mentorship I received were crucial in helping me build a successful startup.',
    },
  ];

  return (
    <Container className={styles.impactContainer}>
      <h2 className={styles.heading}>Impact of Al-Hijrah on the Community</h2>
      <Row>
        {alumni.map((alumnus, idx) => (
          <Col xs={12} md={6} lg={4} key={idx} className="mb-4">
            <div className={styles.alumnusCard}>
              <Image src={alumnus.image} roundedCircle className={styles.alumnusImage} />
              <div className={styles.alumnusContent}>
                <h5 className={styles.alumnusName}>{alumnus.name}</h5>
                <p className={styles.alumnusPosition}>{alumnus.position}</p>
                <p className={styles.alumnusText}>{alumnus.text}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlumniTestimonial;
