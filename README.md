# Finance Dashboard Application

This project is a simple Finance Dashboard application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to track their income and expenses, **and also includes an EMI (Equated Monthly Installment) calculator.**

## Project Structure

- `/server`: Contains the Node.js/Express backend application.
  - `/server/config`: MongoDB connection configuration.
  - `/server/models`: Mongoose schemas (e.g., Transaction).
  - `/server/routes`: API route definitions (e.g., transaction routes).
  - `/server/tests`: Backend test files.
  - `server.js`: The main backend server file.
  - `package.json`: Backend dependencies and scripts.
- `/client`: Contains the React frontend application.
  - `/client/public`: Public assets and `index.html`.
  - `/client/src`: React components, App.js, index.js, CSS files.
    - `/client/src/components`: Reusable React components and their test files.
        - `Header.js`, `Header.test.js`
        - `Balance.js`, `Balance.test.js`
        - `TransactionList.js`
        - `TransactionItem.js`
        - `AddTransactionForm.js`, `AddTransactionForm.test.js`
        - `EMICalculator.js`, `EMICalculator.test.js`
    - `/client/src/utils`: Utility functions and their tests.
        - `emiCalculations.js`, `emiCalculations.test.js`
  - `package.json`: Frontend dependencies and scripts.
- `README.md`: This file.

## Features

- Transaction tracking (Create, Read, Delete operations).
- Balance calculation.
- **EMI Calculator:**
  - Allows users to calculate Equated Monthly Installments for a loan based on principal amount, annual interest rate, and loan tenure in years.
  - Provides instant calculation on the frontend.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm)
- [MongoDB](https://www.mongodb.com/try/download/community) (ensure it's running)

## Setup and Installation

**Important Note:** The initial setup of this project via the automated script has created the file structure and code. However, due to limitations in the execution environment, `npm install` was NOT run for the server or client. You will need to do this manually.

1.  **Backend Setup:**
    ```bash
    cd server
    npm install
    ```

2.  **Frontend Setup:**
    ```bash
    cd client
    npm install
    ```

## Running the Application

1.  **Start the Backend Server:**
    - Navigate to the `server` directory: `cd server`
    - You might need to configure your MongoDB connection string in `server/config/db.js` if it's not running on the default `mongodb://localhost:27017/finance_dashboard`.
    - Start the server (defaults to port 3001):
      ```bash
      npm start
      ```
    The server should connect to MongoDB and be ready to accept API requests.

2.  **Start the Frontend React Application:**
    - Navigate to the `client` directory: `cd client`
    - Start the React development server (defaults to port 3000):
      ```bash
      npm start
      ```
    This should open the application in your default web browser. The React app is configured to proxy API requests to the backend server on port 3001.
    The EMI Calculator will be visible on the main page below the transaction history.

## Running Tests (Conceptual)

Test files have been created as stubs. To run them, you'll first need to ensure testing libraries are installed:

1.  **Backend Tests:**
    - Navigate to `server`: `cd server`
    - Install Jest and Supertest (if not already in `package.json`'s devDependencies):
      ```bash
      npm install --save-dev jest supertest
      ```
    - Add a test script to `server/package.json`, e.g., `"test": "jest"`
    - Run tests:
      ```bash
      npm test
      ```

2.  **Frontend Tests:**
    - Navigate to `client`: `cd client`
    - React Scripts usually includes Jest and React Testing Library. If not, install them:
      ```bash
      npm install --save-dev @testing-library/react @testing-library/jest-dom
      ```
    - Run tests:
      ```bash
      npm test
      ```
    This will run tests from files like `Header.test.js`, `Balance.test.js`, `EMICalculator.test.js`, and `utils/emiCalculations.test.js`.

**Note:** The test stubs provided will likely need further refinement and a running backend/database for full integration testing.
