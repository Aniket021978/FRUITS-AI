# Fruit Services Web Application

This project consists of a front-end and back-end application for managing fruit-related services. The front-end is built with React, and the back-end uses FastAPI for handling CRUD operations for FAQs related to fruits.

## Front-End

### Technologies Used
- **Framework**: React
- **Styling**: Standard CSS or CSS-in-JS
- **API Interaction**: Async/Await for API calls

### Features
- **Login Page**: 
  - UI only with UserId and Password.
  - Redirects to the homepage upon successful login.
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
