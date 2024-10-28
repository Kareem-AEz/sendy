![Sendy](web-assets/sendy-og.jpg)

# Sendy

Sendy is a dynamic, interactive web application for managing personal accounts and transactions. It allows users to send and request money, track balances, view transaction history, and manage account settings with ease. The app features an intuitive UI, robust error handling, and flexible filtering options for a streamlined user experience.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Code Overview](#code-overview)

---

## Features

- **User Authentication**: Login functionality with personalized welcome messages.
- **Transaction Management**:
  - **Send and Request Money**: Allows users to send funds or request them from other users.
  - **Transaction Filtering**: Sort and view transactions based on type (e.g., all, incoming, outgoing, requests).
- **Balance Tracking**: Displays current balance, income, and outgoing expenses in various supported currencies and locales.
- **Error Handling and User Feedback**:
  - Input validation and error messages for smooth user experience.
  - Informative feedback messages on successful or failed transactions.
- **Account Closure**: Option to close account, with handling for positive and negative balances.
- **Responsive Modals and UI**:
  - Modal pop-ups for account actions and information.
  - Hover and click animations for an engaging experience.

## Demo

A live demo of Sendy can be accessed [here](#).

---

## Technologies Used

- **JavaScript (ES6+)**: Core functionality and UI interactivity.
- **HTML5 & CSS3**: Structure and styling for a responsive and accessible user interface.
- **Rive Animations**: Integrated animations for an enhanced UX.
- **Intl API**: Internationalization API for currency and date formatting.

---

## Usage

- **Login:** Use a sample account to log in. Available usernames are listed in the accounts data.
- **Send Money:** Enter a recipient username and amount to send funds.
- **Request Money:** Switch to “Request” mode to request funds from other users.
- **View Transactions:** Use the filter navigation to sort transactions based on type.
- **Close Account:** Option to close the current account with handling for remaining balance.

---

## Code Overview

- **movementsFactory**:
  -Generates randomized transaction data for accounts.

- **filterMovements**
  -Filters transactions based on user-selected criteria, providing options like incoming, outgoing, and request filters.

- **updateUIBalance**
  -Displays the latest balance and transaction details in the user interface.

- **actionExcuter**
  -Handles core actions, such as sending, requesting, and responding to transactions, with validation.

