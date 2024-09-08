import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the application deadline?',
      answer: 'The application deadline is January 15, 2024.',
    },
    {
      question: 'Do I need to submit standardized test scores?',
      answer: 'Standardized test scores are optional for the current admission cycle.',
    },
    {
      question: 'What documents are required for the application?',
      answer: 'You will need to submit a completed application form, official high school transcripts, a personal statement, letters of recommendation, and optionally, standardized test scores.',
    },
    {
      question: 'Is financial aid available?',
      answer: 'Yes, we offer a range of financial aid options, including scholarships, grants, and loans. Be sure to fill out the financial aid application to be considered for these opportunities.',
    },
    {
      question: 'Can I visit the campus before applying?',
      answer: 'Yes, we encourage prospective students to visit our campus. We offer guided tours and information sessions to help you learn more about our programs and facilities.',
    },
  ];

  return (
    <div className={styles.faqSection}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.accordion}>
          <div className={styles.question} onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
