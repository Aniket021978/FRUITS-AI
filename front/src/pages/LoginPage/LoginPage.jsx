
import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SocialLogin from "./SocialLogin";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
    <main className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>{isLogin ? "Login" : "Register"}</h1>
      <p className={styles.termsText}>
        By signing in you are agreeing our{" "}
        <span className={styles.termsHighlight}>Term and privacy policy</span>
      </p>
      <nav className={styles.authNav}>
        <button
          onClick={() => setIsLogin(true)}
          className={isLogin ? styles.authNavActive : styles.authNavInactive}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={!isLogin ? styles.authNavActive : styles.authNavInactive}
        >
          Register
        </button>
      </nav>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <SocialLogin />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd381b8b4377425734d9684a8b1ce51cb1282bcc16d3fcdf4a5a397ee8e7543?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab" alt="" className={styles.decorativeImage} />
    </main>
    </div>
  );
}

export default LoginPage;
