import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from './Developer.module.css';

const Developer = () => {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQHE4-zmAaE2CA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724951341761?e=1730937600&v=beta&t=4gqHom6DTpiq1zOaE2Hr5inxNbE_sr1pFOpA6XRUWf8"
        alt="Developer"
        className={styles.developerImage}
      />
      <div className={styles.textContainer}>
        <h2 className={styles.developerName}>Zain Ul Abideen</h2>
        <p className={styles.developerIntro}>
          Hi, I’m Zain Ul Abideen, a dedicated Frontend Developer with a strong focus on building 
          responsive and visually appealing websites. With experience in <strong>HTML, CSS, JavaScript, Bootstrap, and React.js</strong>, 
          I specialize in creating user-friendly interfaces and seamless web experiences.
        </p>
        <p className={styles.developerDetails}>
          Over the past few years, I have worked on a range of projects, including:
          <ul className={styles.projectList}>
          <li><strong>Weather App:</strong> <button type="button" href="https://zaingoya65.github.io/Weather_app/" class="btn btn-link">Visit: https://zaingoya65.github.io/Weather_app/</button></li>
            <li><strong>Ezitech Clone:</strong> Recreated a responsive tech website, focusing on modern design principles.</li>
            <li><strong>Blogs Website (goyazain.com):</strong> Developed a personal blog site using WordPress, customizing themes, and integrating SEO optimization tools.</li>
          </ul>
        </p>
        <p className={styles.developerDetails}>
          I have also recently completed an internship at the National Assembly of Pakistan, where I gained hands-on experience in working with real-world web development scenarios.
        </p>
        <p className={styles.developerDetails}>
          In addition to my technical skills, I bring strong problem-solving abilities and a passion for learning new technologies. I am constantly looking for ways to improve my skills and stay updated with the latest industry trends. Currently, I am expanding my knowledge in <strong>UI/UX Design</strong> and exploring the potential of <strong>Next.js</strong> for faster and more efficient web applications.
        </p>
        <p className={styles.developerEmail}>
          <FaEnvelope className={styles.icon} /> goyazain65@outlook.com
        </p>
      </div>

      <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/zaingoya/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://github.com/zaingoya65" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icon} />
        </a>
      </div>

      <div className={styles.personalInterests}>
        <h3 className={styles.sectionTitle}>Hobbies & Interests</h3>
        <p className={styles.interestsContent}>
          When I’m not coding, I enjoy staying active through hiking and exploring nature. I also have a keen interest in
          reading books on technology and psychology, and I love sharing my knowledge with the community through online forums.
        </p>
      </div>
    </div>
  );
};

export default Developer;
