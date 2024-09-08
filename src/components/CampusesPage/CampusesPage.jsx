import React from "react";
import { Link } from "react-router-dom";
import styles from "./CampusesPage.module.css"; 


function CampusesPage() {
  return (
    <div className={styles.campusesPage}>
      <h1 className={styles.pageTitle}>Our Campuses</h1>
      <div className={styles.campusContainer}>
        {/* Ziarat Campus */}
        <div >
         
          <div className={styles.campusContent}>
            <h2 className={styles.campusTitle}>Ziarat Campus</h2>
            <p className={styles.campusDescription}>
              Located in the serene and historical town of Ziarat, our campus
              provides a peaceful learning environment surrounded by natural
              beauty. With state-of-the-art facilities and highly qualified
              faculty, the Ziarat Campus is dedicated to academic excellence and
              holistic development. Students here experience an enriching blend
              of academics and extracurricular activities.
            </p>
            <h3 className={styles.campusSubtitle}>Key Features:</h3>
            <ul className={styles.campusFeatures}>
              <li>Modern classrooms equipped with the latest technology</li>
              <li>Spacious library with a wide range of academic resources</li>
              <li>Fully equipped science and computer labs</li>
              <li>Outdoor sports facilities</li>
              <li>Hostel accommodations for students</li>
              <li>24/7 security and medical facilities</li>
              <li>Cultural and recreational activities for holistic development</li>
            </ul>
            <Link to="/ziarat-campus" className={styles.readMoreButton}>
              Read More
            </Link>
          </div>
        </div>

        {/* Dera Ghazi Khan Campus */}
        <div >
          
          <div className={styles.campusContent}>
            <h2 className={styles.campusTitle}>Dera Ghazi Khan Campus</h2>
            <p className={styles.campusDescription}>
              The Dera Ghazi Khan Campus is a beacon of educational excellence
              in the region. It boasts modern infrastructure, well-equipped
              labs, libraries, and sports facilities. Our focus is on nurturing
              talent and fostering a culture of innovation and leadership among
              students. The campus is an epitome of advanced learning in a
              vibrant and inclusive environment.
            </p>
            <h3 className={styles.campusSubtitle}>Key Features:</h3>
            <ul className={styles.campusFeatures}>
              <li>Advanced science and technology labs</li>
              <li>Extensive library with digital and print resources</li>
              <li>Modern sports complex with various facilities</li>
              <li>Cultural and extracurricular activities</li>
              <li>On-campus counseling and career services</li>
              <li>Student societies for leadership and creativity</li>
              <li>Collaborative projects with industry partners</li>
            </ul>
            
            <Link as={Link} to="/dera-ghazi-khan-campus" className={styles.readMoreButton}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusesPage;
