import React, { useState, useEffect } from 'react';
import styles from './GalleryPage.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./Gallery/1.jpg",
    "./Gallery/2.jpg",
    "./Gallery/3.jpg",
    "./Gallery/4.jpg",
    "./Gallery/5.jpg",
    "./Gallery/6.jpg",
    "./Gallery/7.jpg",
    "./Gallery/8.jpg",
    "./Gallery/9.jpg",
    "./Gallery/10.jpg",
    "./Gallery/11.jpg",
    "./Gallery/12.jpg",
    "./Gallery/1.jpg",
    "./Gallery/2.jpg",
    "./Gallery/3.jpg",
    "./Gallery/4.jpg",
    "./Gallery/5.jpg",
    "./Gallery/6.jpg",
    "./Gallery/7.jpg",
    "./Gallery/8.jpg",
    "./Gallery/9.jpg",
    "./Gallery/10.jpg",
    "./Gallery/11.jpg",
    "./Gallery/12.jpg",
    "./Gallery/1.jpg",
    "./Gallery/2.jpg",
    "./Gallery/3.jpg",
    "./Gallery/4.jpg",
    "./Gallery/5.jpg",
    "./Gallery/6.jpg",
    "./Gallery/7.jpg",
    "./Gallery/8.jpg",
    "./Gallery/9.jpg",
    "./Gallery/10.jpg",
    "./Gallery/11.jpg",
    "./Gallery/12.jpg",
  ];

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const goToNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const goToPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowRight') {
      goToNextImage();
    } else if (e.key === 'ArrowLeft') {
      goToPreviousImage();
    }
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="container">
      <div className={styles.gallery}>
        {images.map((url, index) => (
          <div className={styles.imageContainer} key={index} onClick={() => handleImageClick(index)}>
            <img src={url} alt={`Gallery Image ${index + 1}`} className={styles.image} />
          </div>
        ))}

        {selectedImage && (
          <div className={styles.modal} onClick={() => setSelectedImage(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.close} onClick={() => setSelectedImage(null)}>&times;</span>
              <img src={selectedImage} alt="Full View" className={styles.fullImage} />
              <span className={styles.prev} onClick={goToPreviousImage}>&#10094;</span>
              <span className={styles.next} onClick={goToNextImage}>&#10095;</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
