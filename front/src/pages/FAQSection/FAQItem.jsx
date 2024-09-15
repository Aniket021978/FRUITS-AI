
import React from "react";
import styles from "./FAQSection.module.css";

const FAQItem = ({ imageSrc, fruitName, question, answer }) => {
  return (
    <article className={styles.questionContainer}>
      <div className={styles.imageWrapper}>
        <img
          loading="lazy"
          src={imageSrc}
          alt={fruitName}
          className={styles.fruitImage}
        />
        <div className={styles.fruitName}>{fruitName}</div>
      </div>
      <div className={styles.questionContent}>
        <h3 className={styles.question}>{question}</h3>
        <p className={styles.answer}>{answer}</p>
      </div>
    </article>
  );
};

export default FAQItem;
