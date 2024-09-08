import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './CampusLife.module.css';

const blogPosts = [
    {
        title: 'Academic Excellence',
        description: `
          <p>At our campus, academic excellence is at the forefront of our mission. We offer a range of seminars, workshops, and study groups designed to foster a learning environment that ensures student success. Our experienced faculty and modern facilities provide the perfect setting for intellectual growth.</p>
          <p>In addition to a rigorous academic curriculum, we emphasize critical thinking and problem-solving skills that prepare our students for real-world challenges. Our collaborative projects and research opportunities allow students to engage with cutting-edge ideas and contribute to meaningful advancements in their fields of study.</p>
          <p>We also believe in a holistic approach to education, where personal development goes hand-in-hand with academic achievement. Our mentoring programs connect students with industry professionals and alumni who offer guidance, insight, and networking opportunities, helping students navigate their academic journeys and future careers with confidence.</p>
          <p>Moreover, our campus is equipped with state-of-the-art laboratories, libraries, and digital resources, ensuring that students have access to the tools they need to excel. From interactive learning platforms to advanced research equipment, we are committed to providing an environment where innovation and learning thrive.</p>
          <p>Our commitment to academic excellence is also reflected in our support services, which include tutoring, academic advising, and wellness programs. We understand that each student has unique needs, and we are dedicated to offering personalized support to help them achieve their academic and personal goals.</p>
          <p>Through our dedication to fostering a culture of excellence, we strive to cultivate not just knowledgeable graduates, but leaders and innovators who will make a positive impact on the world.</p>
        `,
        images: [
          'https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg',
          'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
          'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg',
        ],
      },
  {
    title: 'Interactive Classes',
    description: 
        `<p>Our interactive classes are designed to make learning more engaging and effective. With hands-on activities, dynamic lectures, and the latest educational technology, students are encouraged to participate actively and enhance their understanding of the subjects.</p>
        <p>We believe that learning should be an immersive experience, where students are not just passive recipients of information but active participants in their education. Our classrooms are equipped with smartboards, virtual labs, and simulation tools that bring complex concepts to life, allowing students to explore and experiment in a safe and controlled environment.</p>
      
        <p>In addition to traditional lectures, our curriculum includes group projects, peer teaching sessions, and interactive quizzes that foster collaboration and critical thinking. These activities are designed to help students build essential skills such as teamwork, communication, and problem-solving, which are crucial for success in any field.</p>
      
        <p>Our faculty members are trained in the latest pedagogical methods, ensuring that each class is tailored to meet the diverse learning styles of our students. Whether its through real-time polling, flipped classrooms, or blended learning models, we strive to create a dynamic and inclusive learning environment that caters to every students needs.</p>
      
        <p>Furthermore, our interactive classes are supported by online learning platforms that allow students to access course materials, participate in discussion forums, and complete assignments at their own pace. This flexibility ensures that all students, regardless of their learning preferences, can engage with the content in a way that best suits them.</p>
      
        <p>By combining traditional teaching methods with innovative technologies and interactive techniques, we aim to provide an educational experience that is not only informative but also inspiring, preparing our students to excel in their academic pursuits and beyond.</p>`
      ,
    images: [
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg',
      'https://images.pexels.com/photos/3156383/pexels-photo-3156383.jpeg',
    ],
  },
  {
    title: 'Social Spaces',
    description: `
  <p>Campus life extends beyond the classroom. Our social spaces are designed to help students unwind and connect with peers. From cozy lounges to vibrant cafes, there are plenty of places to relax, study, or engage in meaningful conversations.</p>
  
  <p>These spaces are thoughtfully designed to foster a sense of community and collaboration. Whether you're looking for a quiet corner to read a book or a lively spot to brainstorm with friends, our campus offers a variety of environments to suit your needs.</p>
  
  <p>In addition to being great places to socialize, our social spaces also host a range of events and activities. From open mic nights to game tournaments, there's always something happening that brings students together in a fun and engaging way.</p>
  
  <p>Our outdoor areas are equally inviting, with beautifully landscaped gardens and comfortable seating. These spots are perfect for enjoying a sunny day, having a picnic with friends, or simply taking a break between classes.</p>
  
  <p>We believe that a well-rounded campus experience includes opportunities for relaxation and social interaction, and our social spaces are designed to enhance your time here. Whether you're making new friends or deepening existing relationships, these spaces play a vital role in your campus life.</p>
`,
    images: [
      'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg',
      'https://images.pexels.com/photos/3204995/pexels-photo-3204995.jpeg',
      'https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg',
    ],
  }
];

const CampusLife = () => {
  return (
    <Container className={styles.campusLifeSection}>
      <h2 className={styles.heading}>Campus Life Highlights</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className={styles.blogPost}>
        <h3 className={styles.blogTitle}>{post.title}</h3>
        <div className={styles.blogDescription} dangerouslySetInnerHTML={{ __html: post.description }} />
        <div className={styles.imageGallery}>
          {post.images.map((image, i) => (
            <img key={i} src={image} alt={`${post.title} image ${i + 1}`} className={styles.galleryImage} />
          ))}
        </div>
      </div>
      
      ))}
    </Container>
  );
};

export default CampusLife;
