import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FruitAi.module.css";
import FruitImage from "./FruitImage";


const FruitAi = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const fruitImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/99aa07b0ac3e4374863c2a31771b850e8c7630a6e5f43af55beb2ffc78285e81?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab",
      alt: "Fruit image 1",
      path: "/chat", 
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fadcf7956cec2d3ad8c62a04db16a310c5e1bf9ef66e0d2d24e4e883fc54b2d?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab",
      alt: "Fruit image 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c14014cc16bf3d10a5dd02e43eec409be240e5601089ef40306ee37f611dc08e?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab",
      alt: "Fruit image 3",
      path: "/translator", 
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/382b56f0a855b70ec5068fa96a017b8cc2e37fe7153b713ff842ed04d4a95b83?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab",
      alt: "Fruit image 4",
      path: "/about", 
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fadcf7956cec2d3ad8c62a04db16a310c5e1bf9ef66e0d2d24e4e883fc54b2d?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab",
      alt: "Fruit image 2",
    },
  ];

  return (
    <main className={styles.container}>
      <section className={styles.frame}>
        <h1 className={styles.title}>Fruit.Ai</h1>
        <p className={styles.subtitle}>"Be Healthy!"</p>
        <div className={styles.imageGrid}>
          {fruitImages.map((image, index) => (
            <FruitImage
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleNavigation(image.path)} 
            />
          ))}
          <div className={styles.faqSection} onClick={() => handleNavigation("/faq")} style={{ cursor: "pointer" }} >
          <p className={styles.faqRectangle}>FAQ</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FruitAi;
