import React, { useEffect, useRef, useState } from "react";
import styles from "./HeroSec.module.css";

const HeroSec = () => {
  const images = ["./Images/Hero1.jpg", "./Images/Hero2.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dynamicTextRef = useRef(null);

  // Image rotation effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000); // Change image every 30 seconds

    return () => clearInterval(imageInterval);
  }, [images.length]);

  // Typing effect for dynamic text
  useEffect(() => {
    if (!dynamicTextRef.current) return;

    const dynamicTextContainer = dynamicTextRef.current;
    const slogan =
      "Empowering communities and eradicating poverty through quality education and lifelong learning opportunities, while building a harmonious and just society based on Islamic rules and ethical values. We uphold the principles of humanity, Islamism, and Pakistanism to foster national unity and global peace, fostering innovation, integrity, and social responsibility for a brighter future.";

    const displayWord = (word) => {
      dynamicTextContainer.innerHTML = ""; // Clear existing content
      word.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.className = styles.typingChar;
        span.style.setProperty("--delay", `${index * 0.05}s`); // Adjust the typing speed
        span.textContent = char;
        dynamicTextContainer.appendChild(span);
      });
    };

    displayWord(slogan); // Display the entire slogan once

  }, []);

  return (
    <div className={styles.heroSection}>
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        role="img"
        aria-label={`Background image ${currentImageIndex + 1}`}
      >
        <div className={styles.overlayHero}></div>
      </div>
      <div className="container">
      <div className={styles.heroContent}>
        <p
          style={{
          
            fontSize: "14px",
            fontWeight: "bolder",
          }}
        >
          Let's Build Nations with us!
        </p>
        <div className={styles.dynamicText} ref={dynamicTextRef}>
          {/* Dynamic text will be inserted here */}
        </div>
      </div></div>
    </div>
  );
};

export default HeroSec;
