import React from "react";
import styles from "./FruitAi.module.css";

const FruitImage = ({ src, alt, onClick }) => (
  <img
    src={src}
    alt={alt}
    className={styles.fruitImage}
    onClick={onClick} 
    style={{ cursor: "pointer" }} 
  />
);

export default FruitImage;
