import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserGraduate, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';
import styles from './Students.module.css';

const Students = () => {
  return (
    <Container className={styles.container}>
      <Row className="text-center mb-4">
        <Col>
          <h2 className={styles.heading}>Al-Hijrah's Community</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className={styles.card}>
            <Card.Body className={styles.cardBody}>
              <FaChalkboardTeacher className={styles.icon} />
              <Card.Title className={styles.title}>Students Enrolled</Card.Title>
              <Card.Text className={styles.text}>
                Over 1,200 students are currently enrolled, receiving quality education and support.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className={styles.card}>
            <Card.Body className={styles.cardBody}>
              <FaUserGraduate className={styles.icon} />
              <Card.Title className={styles.title}>Graduated Students</Card.Title>
              <Card.Text className={styles.text}>
                More than 800 students have graduated, achieving success in various fields.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className={styles.card}>
            <Card.Body className={styles.cardBody}>
              <FaBriefcase className={styles.icon} />
              <Card.Title className={styles.title}>Practical Life</Card.Title>
              <Card.Text className={styles.text}>
                Our students are equipped for practical life with skills and knowledge for real-world success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Students;
