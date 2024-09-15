import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/register", { email, password });
      console.log(response.data);
      navigate("/LoginPage");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.error);
      } else {
        console.error("Registration error:", error.response?.data || error.message);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="register-email" className={styles.inputLabel}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e08e335da3d584b43b7a62d89a0ef82f513077720d93dea96bee76645eec635?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab" alt="" className={styles.inputIcon} />
          Email Address
        </label>
        <input
          type="email"
          id="register-email"
          className={styles.inputField}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="register-password" className={styles.inputLabel}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2795b3852dcb8dd50f92e94b62a4f53f4a3a399b3710fb06440fdb8a6d4127?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab" alt="" className={styles.inputIcon} />
          Password
        </label>
        <input
          type="password"
          id="register-password"
          className={styles.inputField}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="confirm-password" className={styles.inputLabel}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2795b3852dcb8dd50f92e94b62a4f53f4a3a399b3710fb06440fdb8a6d4127?placeholderIfAbsent=true&apiKey=d10a1e3300734a909fa5b2add8fd45ab" alt="" className={styles.inputIcon} />
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          className={styles.inputField}
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.registerButton}>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
