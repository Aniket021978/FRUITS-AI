
import React from "react";
import styles from "./SocialLogin.module.css";

function SocialLogin() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/92846d3a1fbaf802f4c2b94391e2412e44f8e9beb930035a752dd9c2405bb878?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fd37a203b71ba97ccace5ccf36d3b6c536b1e24b89d14de33bcce5d7ddd897?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab", alt: "Google" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2057aaa3c456c4c6d4baad6cc111dd3d5a61563caa5252dbed37a20ea029223?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab", alt: "Apple" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/290a4399789281a5a65fa1e71ed13a798f0da244da7dab7ae97f75df9760df08?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab", alt: "Twitter" }
  ];

  return (
    <section className={styles.socialLoginSection}>
      <p className={styles.socialLoginText}>or connect with</p>
      <div className={styles.socialIconsContainer}>
        {socialIcons.map((icon, index) => (
          <button
            key={index}
            className={styles.socialButton}
            aria-label={`Login with ${icon.alt}`}
          >
            <img src={icon.src} alt={icon.alt} className={styles.socialIcon} />
          </button>
        ))}
      </div>
    </section>
  );
}

export default SocialLogin;
