import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import React Icons
import styles from './Navigator.module.css'; // Import your CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false); // Close menu on link click

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Link to="/" className={location.pathname === '/admission' ? styles.active : ''} onClick={handleLinkClick}>
        <img src="https://alhijrah.pk/wp-content/uploads/2023/02/white-logo.png" alt="Al-Hijrah Logo" />
      </Link>
      </div>
      <div className={styles.menuToggle} onClick={handleToggle}>
        {isOpen ? <FaTimes className={styles.menuIcon} /> : <FaBars className={styles.menuIcon} />}
      </div>
      <ul className={`${styles.navMenu} ${isOpen ? styles.show : ''}`}>
        <li>
          <Link to="/admission" className={location.pathname === '/admission' ? styles.active : ''} onClick={handleLinkClick}>
            Admission
          </Link>
        </li>
        <li>
          <Link to="/campus-life" className={location.pathname === '/campus-life' ? styles.active : ''} onClick={handleLinkClick}>
            Campus Life
          </Link>
        </li>
        <li>
          <Link to="/campuses" className={location.pathname === '/campuses' ? styles.active : ''} onClick={handleLinkClick}>
            Campuses
          </Link>
        </li>
        <li>
          <Link to="/achievements" className={location.pathname === '/achievements' ? styles.active : ''} onClick={handleLinkClick}>
            Achievements
          </Link>
        </li>
        <li>
          <Link to="/collaboration" className={location.pathname === '/collaboration' ? styles.active : ''} onClick={handleLinkClick}>
            Collaboration
          </Link>
        </li>
        <li>
          <Link to="/alumni" className={location.pathname === '/alumni' ? styles.active : ''} onClick={handleLinkClick}>
            Alumni
          </Link>
        </li>
        <li>
          <Link to="/story" className={location.pathname === '/story' ? styles.active : ''} onClick={handleLinkClick}>
            Stories
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={location.pathname === '/gallery' ? styles.active : ''} onClick={handleLinkClick}>
            Gallery
          </Link>
        </li>
        <li>
          <a href="https://admissions.alhijrah.pk" target="_blank" rel="noopener noreferrer" className={styles.applyOnlineButton} onClick={handleLinkClick}>
            Apply Online
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
