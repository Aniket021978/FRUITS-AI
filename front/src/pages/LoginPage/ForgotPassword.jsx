import React, { useState } from "react";
import axios from "axios";
import styles from "./ForgotPassword.module.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/api/forgot-password", { email });
      setOtpSent(true);
      alert("OTP has been sent to your email address.");
    } catch (error) {
      alert("Your Email Is Not Registered Yet");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/verify-otp", { email, otp });
      if (response.data.message === 'OTP verified') {
        setOtpVerified(true);
        alert("OTP verified. You can now reset your password.");
      }
    } catch (error) {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      await axios.post("http://127.0.0.1:5000/api/update-password", { email, newPassword });
      alert("Password updated successfully. Please log in.");
      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      alert("Failed to update password. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      {!otpVerified ? (
        <form className={styles.forgotPasswordForm} onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
          {!otpSent && (
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Enter your email to receive an OTP
              </label>
              <input
                type="email"
                id="email"
                className={styles.inputField}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={otpSent} placeholder="Enter Your Registered Email"
              />
            </div>
          )}
          {otpSent && !otpVerified && (
            <div className={styles.inputGroup}>
              <label htmlFor="otp" className={styles.inputLabel}>
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                className={styles.inputField}
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}
          {!otpSent && (
            <button type="submit" className={styles.sendOtpButton}>
              Send OTP
            </button>
          )}
          {otpSent && !otpVerified && (
            <button type="submit" className={styles.sendOtpButton}>
              Verify OTP
            </button>
          )}
        </form>
      ) : (
        <form className={styles.updatePasswordForm} onSubmit={handleUpdatePassword}>
          <div className={styles.inputGroup}>
            <label htmlFor="newPassword" className={styles.inputLabel}>
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className={styles.inputField}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter Your Password"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.inputLabel}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={styles.inputField}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Your Confirm Password"
            />
          </div>
          <button type="submit" className={styles.updatePasswordButton}>
            Update Password
          </button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
