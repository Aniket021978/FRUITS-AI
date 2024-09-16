
import React from "react";
import styles from "./SocialLogin.module.css";

function SocialLogin() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/92846d3a1fbaf802f4c2b94391e2412e44f8e9beb930035a752dd9c2405bb878?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab", alt: "Facebook" ,link:"https://www.facebook.com/" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fd37a203b71ba97ccace5ccf36d3b6c536b1e24b89d14de33bcce5d7ddd897?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab", alt: "insta" ,link:"https://www.instagram.com/aniket.0.1/" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2057aaa3c456c4c6d4baad6cc111dd3d5a61563caa5252dbed37a20ea029223?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab", alt: "pinterest" ,link:"https://in.pinterest.com/" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/290a4399789281a5a65fa1e71ed13a798f0da244da7dab7ae97f75df9760df08?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab", alt: "linkedin" ,link:"https://www.linkedin.com/in/aniket-bansal-9b1909227/" }
  ];

  return (
    <section className={styles.socialLoginSection}>
      <p className={styles.socialLoginText}>or connect with</p>
      <div className={styles.socialIconsContainer}>
        {socialIcons.map((icon, index) => (
           <a
           key={index}
           href={icon.link}
           className={styles.socialButton}
           aria-label={`Login with ${icon.alt}`}
           target="_blank"
           rel="noopener noreferrer"
         >
           <img src={icon.src} alt={icon.alt} className={styles.socialIcon} />
         </a>
        ))}
      </div>
    </section>
  );
}

export default SocialLogin;
