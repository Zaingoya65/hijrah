import React from "react";
import styles from "./Articles.module.css";

const articlesData = [
  {
    title: "The Importance of Science in Everyday Life",
    author: "Ahmed Khan",
    class: "Grade 10",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
    date: "September 10, 2024",
    excerpt: "Science is an integral part of our daily lives. From the food we eat to the technology we use, science plays a crucial role.",
    content: "In this article, we explore the significance of science and how it impacts us on a daily basis...",
  },
  {
    title: "Why Math is My Favorite Subject",
    author: "Sara Ali",
    class: "Grade 9",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
    date: "September 12, 2024",
    excerpt: "Math is more than just numbers and equations. It’s a way of thinking, a language that helps us understand the world.",
    content: "This article discusses why math is so fascinating and why it’s my favorite subject...",
  },
  {
    title: "The Importance of Science in Everyday Life",
    author: "Ahmed Khan",
    class: "Grade 10",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
    date: "September 10, 2024",
    excerpt: "Science is an integral part of our daily lives. From the food we eat to the technology we use, science plays a crucial role.",
    content: "In this article, we explore the significance of science and how it impacts us on a daily basis...",
  },
  {
    title: "Why Math is My Favorite Subject",
    author: "Sara Ali",
    class: "Grade 9",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
    date: "September 12, 2024",
    excerpt: "Math is more than just numbers and equations. It’s a way of thinking, a language that helps us understand the world.",
    content: "This article discusses why math is so fascinating and why it’s my favorite subject...",
  },
  {
    title: "The Importance of Science in Everyday Life",
    author: "Ahmed Khan",
    class: "Grade 10",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
    date: "September 10, 2024",
    excerpt: "Science is an integral part of our daily lives. From the food we eat to the technology we use, science plays a crucial role.",
    content: "In this article, we explore the significance of science and how it impacts us on a daily basis...",
  },
  {
    title: "Why Math is My Favorite Subject",
    author: "Sara Ali",
    class: "Grade 9",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
    date: "September 12, 2024",
    excerpt: "Math is more than just numbers and equations. It’s a way of thinking, a language that helps us understand the world.",
    content: "This article discusses why math is so fascinating and why it’s my favorite subject...",
  },
  {
    title: "Why Math is My Favorite Subject",
    author: "Sara Ali",
    class: "Grade 9",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
    date: "September 12, 2024",
    excerpt: "Math is more than just numbers and equations. It’s a way of thinking, a language that helps us understand the world.",
    content: "This article discusses why math is so fascinating and why it’s my favorite subject...",
  },
  {
    title: "The Importance of Science in Everyday Life",
    author: "Ahmed Khan",
    class: "Grade 10",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s",
    date: "September 10, 2024",
    excerpt: "Science is an integral part of our daily lives. From the food we eat to the technology we use, science plays a crucial role.",
    content: "In this article, we explore the significance of science and how it impacts us on a daily basis...",
  },
  // Add more articles as needed
];

const Articles = () => {
  return (
    <div className="container">
      <div className={styles.articlesSection}>
        <h2 className={styles.title}>Student Articles</h2>
        <div className={styles.articlesGrid}>
          {articlesData.map((article, index) => (
            <div key={index} className={styles.articleCard}>
              <h4 className={styles.articleTitle}>{article.title}</h4>
              <div className={styles.authorInfo}>
                <img src={article.authorImage} alt={article.author} className={styles.authorImage} />
                <div>
                  <p className={styles.articleAuthor}>{article.author}</p>
                   <p className={styles.articleDate}>   {article.date}</p>
                  <p className={styles.articleClass}>{article.class}</p>
                </div>
              </div>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              <details className={styles.articleContent}>
                <summary>Read More</summary>
                <p>{article.content}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
