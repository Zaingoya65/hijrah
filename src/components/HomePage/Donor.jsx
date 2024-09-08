import React, { useState } from 'react';
import { Card, Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import { FaShoppingCart, FaChalkboardTeacher, FaStethoscope, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import styles from './Donor.module.css';

const donors = [
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Name 1',
    position: 'E-commerce',
    intro: 'Name has been a tremendous support to the Al-Hijrah Trust, contributing generously to our mission of providing quality education to students from all backgrounds.',
    icon: <FaShoppingCart className={styles.positionIcon} />
  },
  {
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Name 2',
    position: 'Teacher',
    intro: 'Name  has provided significant support to our educational programs, helping us expand our reach and impact.',
    icon: <FaChalkboardTeacher className={styles.positionIcon} />
  },
  {
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    name: 'Name 3',
    position: 'Doctor',
    intro: 'Name  has been instrumental in our fundraising efforts, ensuring that we can continue our important work in education.',
    icon: <FaStethoscope className={styles.positionIcon} />
  },
  {
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
    name: 'Name  4',
    position: 'Businessman',
    intro: 'Name generous donations have allowed us to enhance our facilities and provide better resources for our students.',
    icon: <FaBriefcase className={styles.positionIcon} />
  },
  {
    image: 'https://randomuser.me/api/portraits/women/52.jpg',
    name: 'Name 5',
    position: 'Chemical Engineer',
    intro: 'Name support has been crucial in helping us achieve our mission of offering quality education to deserving students.',
    icon: <FaLaptopCode className={styles.positionIcon} />
  }
  ,
  {
    image: 'https://randomuser.me/api/portraits/women/52.jpg',
    name: 'Emily Clark',
    position: 'Software Engineer',
    intro: 'Emily Clark’s support has been crucial in helping us achieve our mission of offering quality education to deserving students.',
    icon: <FaLaptopCode className={styles.positionIcon} />
  }
];

const Donor = () => {
  const [showModal, setShowModal] = useState(null);

  const handleShow = (index) => setShowModal(index);
  const handleClose = () => setShowModal(null);

  return (
    <Container className={styles.donorSection}>
      <h2 className={styles.heading}>Our Generous Donors</h2>
      <Row className="d-flex justify-content-center">
        {donors.map((donor, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4 d-flex justify-content-center">
            <Card className={styles.donorCard} onClick={() => handleShow(index)}>
              <Card.Body className={styles.cardBody}>
                <div className={styles.imageWrapper}>
                  <Image src={donor.image} roundedCircle className={styles.donorImage} />
                </div>
                <Card.Title className={styles.donorName}>
                  {donor.name}
                </Card.Title>
                <Card.Text className={styles.donorPosition}>
                  {donor.icon} <span className={styles.positionText}>{donor.position}</span>
                </Card.Text>
                <Card.Text className={styles.donorIntro}>
                  {donor.intro}
                </Card.Text>
              </Card.Body>
            </Card>
            <Modal show={showModal === index} onHide={handleClose} centered className={styles.modal}>
              <Modal.Header closeButton>
                <Modal.Title>{donors[index].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image src={donors[index].image} roundedCircle className={styles.modalImage} />
                <p><strong>Position:</strong> {donors[index].position}</p>
                <p>{donors[index].intro}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Donor;
