# 📚 Scholarship-Management

> A React-based Scholarship-Management System
>
> #### Live Site URL: [Scholarship-Management ](https://edu-track-bc1d5.web.app)

## 📖 Introduction

EduTrack Client is a front-end web application designed for Scholarshibg tracking, leveraging modern web technologies such as React, Vite, TailwindCSS, and Firebase. It provides a seamless user experience with features like authentication, real-time updates, and responsive UI components.

---


## 📌 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Development](#development)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🛠 Installation

### Prerequisites

- **Node.js** (>= 16.x recommended)
- **npm** (>= 8.x recommended)


## ✨ Features

| Feature                      | Description                                |
| --------------------------   |------------------------------------------ |
| ✅ **Fast Development**      | Built with Vite          |
| 🎨 **Styled UI**             | Powered by TailwindCSS and DaisyUI.      |
| 🔥 **Firebase Integration**  | Authentication and backend services.           |
| ⚡ **Optimized State Management**    | Uses React Query |
| 📝  **Form Handling**      | Managed with React Hook Form |
| 💳 **Stripe Integration**     | Secure payment processing `framer-motion`.|
| 📅 **Date Formatting **         | Uses date-fns                  |
| 🚀 **Smooth Animations**         | Enabled by Framer Motion `react-toastify`. |

---
### 🛠 Steps to Install

```sh
# Clone the repository
git clone https://github.com/your-username/edutrack-client.git
cd edutrack-client

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Usage

- Access the app at **[http://localhost:5173](http://localhost:5173)** after running:

```sh
   npm run dev
```

- Sign up or log in using Firebase authentication.
- Browse and manage books through the intuitive UI.

## ⚙️ Configuration

### **Setting up Firebase**

1. Go to the **[Firebase Console](https://console.firebase.google.com/)**.
2. Create a new Firebase project and add a web app.
3. Retrieve your **Firebase configuration** credentials.
4. Create a `.env` file in the root directory and add the following:

## 📦 Dependencies

### **Production Dependencies:**

- **React & React DOM** – UI framework
- **React Router DOM** – Client-side routing
- **React Query** – Data fetching & caching
- **Firebase** – Authentication & backend services
- **Framer Motion** – Smooth animations
- **Axios** – HTTP requests
- **Tailwind CSS & DaisyUI** – UI styling
- **SweetAlert2 & React Toastify** – Alerts & notifications

### **Development Dependencies:**

- **Vite** – Fast build tool
- **ESLint** – Code quality & linting
- **PostCSS & Autoprefixer** – CSS processing

## 👨‍💻 Development

### Run development server

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

### Run ESLint

```sh
npm run lint
```
