import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate("/home");
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert(error.response.data.error);
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e08e335da3d584b43b7a62d89a0ef82f513077720d93dea96bee76645eec635?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab" alt="" className={styles.inputIcon} />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={styles.inputField}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2795b3852dcb8dd50f92e94b62a4f53f4a3a399b3710fb06440fdb8a6d4127?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab" alt="" className={styles.inputIcon} />
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.inputField}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.rememberPassword}>
          <input
            type="checkbox"
            id="remember"
            className={styles.checkbox}
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.checked)}
          />
          <label htmlFor="remember" className={styles.checkboxLabel}>
            Remember password
          </label>
        </div>
        <a href="#forgot-password" className={styles.forgotPassword}>
          Forget password
        </a>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
  );
}

export default LoginForm;
