# Fruit Services Web Application

This project consists of a front-end and back-end application for managing fruit-related services. The front-end is built with React, and the back-end uses Node.js and MongoDB for handling CRUD operations for FAQs related to fruits.

## Front-End

### Technologies Used
- **Framework**: React
- **Styling**: Standard CSS or CSS-in-JS
- **API Interaction**: Async/Await for API calls

### Features
- **Login Page**: 
  - UI only with UserId and Password.
  - Redirects to the homepage upon successful login.

- **Forgot Password**:
  - Provides a form to enter the registered email address.
  - Sends a password reset link or OTP to the email.
  - Allows the user to reset the password.

- **Home Page**:
  - Four services: Chat, Translator, FAQ, About
  - Each service redirects to a specific page upon clicking.

#### Services
- **Chat**:
  - Displays a list of fruits as cards.
  - Shows detailed information about each fruit on a full card.

- **Translator**:
  - Input box for typing text.
  - Shows translated results in a regional language (mock functionality).

- **FAQ**:
  - CRUD functionality for managing FAQs related to fruits.

- **About**:
  - Static page with general information.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Back-End

### Technologies Used
- **Framework**: Node.js
- **Database**: MongoDB
- **API Interaction**: RESTful endpoints

### Features
- **CRUD Operations for FAQs**:
  - Create: Add new FAQs related to fruits.
  - Read: Retrieve FAQs.
  - Update: Edit existing FAQs.
  - Delete: Remove FAQs.

- **Forgot Password**:
  - Provides an endpoint to request a password reset.
  - Sends a password reset link or OTP to the registered email address.
  - Allows the user to request a new password.

- **OTP Verification**:
  - Generates and sends an OTP for password reset or user verification.
  - Validates the OTP provided by the user.

- **Password Reset**:
  - Endpoint for resetting the password using the OTP or reset link.
  - Updates the user's password in the database.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Additional Notes
- Ensure MongoDB is running and properly configured.
- Update environment variables as needed for database connection and other configurations.
- Implement OTP service and email sending functionality (e.g., using Nodemailer for sending emails).
