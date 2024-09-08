import React, { useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import styles from './Testimonial.module.css';

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const testimonials = [
    {
      name: 'Br. Abdul Karim Saqib',
      position: 'Chairman',
      image: './Images/Br.Saqib.jpg', 
      text: 'At Al-Hijrah, we are committed to providing a holistic education that integrates Islamic values with modern knowledge. Our vision is to uplift communities and foster moral leadership.',
    },
    {
      name: 'Br. Abdul Rehman Usmani',
      position: 'CEO',
      image: './Images/Br.Usmani.jpg', // Replace with the actual image path
      text: 'Our goal is to nurture future leaders by providing an education that not only focuses on academic excellence but also on character building. We believe in the power of education to transform lives.',
    },
    {
      name: 'Prof. Shabbir',
      position: 'Principal',
      image: './Images/Principal.jpg', // Replace with the actual image path
      text: 'Education at Al-Hijrah is designed to challenge and inspire. We are dedicated to fostering an environment where every student can achieve their full potential and become leaders in their fields.',
    },
  ];

  return (
    <Container className={styles.container}>
      <h2 className={styles.heading}> Our Honorable Leadership</h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        className={styles.carousel}
      >
        {testimonials.map((testimonial, idx) => (
          <Carousel.Item key={idx}>
            <div className={styles.testimonial}>
              <div className={styles.clientInfo}>
                <Image src={testimonial.image} roundedCircle className={styles.clientImage} />
                <div className={styles.clientDetails}>
                  <h5 className={styles.clientName}>{testimonial.name}</h5>
                  <p className={styles.clientPosition}>{testimonial.position}</p>
                </div>
              </div>
              <div className={styles.quote}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.text}>{testimonial.text}</p>
                <FaQuoteRight className={styles.quoteIcon} />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.customIndicators}>
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.indicator} ${index === idx ? styles.active : ''}`}
            onClick={() => handleSelect(idx)}
          ></span>
        ))}
      </div>
    </Container>
  );
};

export default Testimonial;
