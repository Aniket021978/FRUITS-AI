import React from "react";
import styles from './About.module.css';

function About() {
  return (
    <main className={styles.container}>
      <div className={styles.imageWrapper}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f055b693b2aab492acef07c66c3ac29514246c54826e2230521dd91b48c51be?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab" 
          className={styles.fruitImage} 
          alt="Fruit illustration 1"
        />
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d5de03be41486a2ac4154eab9b0c02c6d1745fe9837c77a9d92403491f0b90b?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab" 
          className={styles.fruitImage2} 
          alt="Fruit illustration 2"
        />
      </div>
      <section className={styles.contentBox}>
        <h1 className={styles.title}>Fruit.Ai</h1>
        <p className={styles.description}>
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
        </p>
        <button className={styles.ctaButton}>
          <span className={styles.buttonText}>ABOUT</span>
        </button>
      </section>
    </main>
  );
}

export default About;