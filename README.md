# 📈 Zerodha Clone
A visually appealing **Zerodha Clone** — India's largest stock trading platform — built using the **MERN stack**. This is a frontend-focused replica that mirrors the layout and design of Zerodha’s dashboard and core UI screens, intended purely for educational and portfolio purposes.

>  **Note:** This is a static UI clone for learning purposes only. It does **not** include live trading features or actual market data.

---

## 🚀 Live Demo

🔗 **Zerodha Clone:**  
👉 [https://zerodha-clone-amber.vercel.app/](https://zerodha-clone-amber.vercel.app/)

---

## 🛠️ Tech Stack

| 💻 Technology     | 🔧 Description                                      |
|------------------|-----------------------------------------------------|
| **React.js**     | Frontend UI built with functional components and hooks |
| **Node.js**      | Backend runtime environment                         |
| **Express.js**   | REST API framework                                  |
| **MongoDB Atlas**| NoSQL cloud database                                |
| **Vercel**       | Frontend hosting platform                           |
| **Render**       | Backend deployment platform                         |

---

## 📂 Features Implemented

✅ **Visual Clone of Zerodha’s Interface:**
- 📊 Dashboard layout  
- 📁 Sidebar navigation  
- 📈 Holdings section with table and graph

---

## 🖼️ Screenshots

![Screenshot (2556)](https://github.com/user-attachments/assets/df6d2ae7-b2b4-4e2d-9e81-878db7920584)

---

## 📌 Limitations

❌ No real-time data or stock API integration  
❌ No actual trading or user portfolio management  

🧪 **Purpose:** UI & design skills demonstration only

---

## 🙌 Acknowledgements

- 🎯 Inspired by the UI/UX of **Zerodha**
- 🌐 Frontend hosted on **Vercel**
- ⚙️ Backend deployed on **Render**

---

### 👤 Author
**Tejas**  
📧 [ftejas52@gmail.com](mailto:ftejas52@gmail.com)  

💬 *For suggestions, collaboration, or just to connect — feel free to reach out via email.*  

[![Email Me](https://img.shields.io/badge/Send%20Email-%F0%9F%93%A7%20ftejas52@gmail.com-ff512f?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ftejas52@gmail.com)

=======
A full-stack replica of the popular trading platform Zerodha, built using the **MERN** stack (MongoDB, Express, React, Node.js). It provides a sleek, responsive, and robust interface for tracking portfolios, placing mock orders, and analyzing market trends.

![Zerodha Banner](https://zerodha.com/static/images/landing.png) *(Illustration purpose only)*

## 🚀 Features

- **Real-time Dashboard:** Track your Holdings, Positions, Funds, and Orders in a comprehensive and intuitive dashboard.
- **Interactive Charts:** Visualize your portfolio's performance with beautiful charts powered by `Chart.js` and `react-chartjs-2`.
- **Responsive Design:** 📱 Fully optimized for mobile, tablet, and desktop viewing. The layout gracefully adapts to any screen size without compromising on usability.
- **RESTful API Backend:** A robust backend built on Express and Node.js that interfaces with MongoDB to persist your trading data securely.
- **Order Placement System:** A custom modal interface to seamlessly place mock `BUY` or `SELL` orders.
- **Modular Frontend:** A separate frontend landing page built with React and Bootstrap 5, providing information on pricing, products, and support.

## 🛠️ Tech Stack

### Frontend & Dashboard
- **React 18:** Modern UI components and state management.
- **React Router v7:** Seamless client-side routing.
- **Material UI (MUI):** Premium icons and UI components.
- **Chart.js:** Dynamic and responsive data visualization.
- **Bootstrap 5:** Utility classes and responsive grid system (for the landing site).
- **Axios:** For handling API requests to the backend.
- **Vanilla CSS:** Custom flexbox layouts, media queries, and animations.

### Backend
- **Node.js & Express:** Lightweight, fast, and scalable server.
- **MongoDB & Mongoose:** NoSQL database with strict schemas for Holdings, Positions, and Orders.
- **Passport.js:** Middleware for authentication strategies.
- **Dotenv:** Environment variable management.
- **Cors & Body-Parser:** Middleware for routing and request parsing.

## 📂 Project Structure

The repository is neatly organized into three distinct applications:

- `/frontend` - The public-facing landing pages (Home, About, Pricing, Support).
- `/dashboard` - The private, authenticated user dashboard for trading and portfolio tracking.
- `/backend` - The REST API serving data to both the frontend and dashboard.

## 🏃‍♂️ Getting Started

Follow these steps to run the project locally.

### 1. Backend Setup
```bash
cd backend
npm install
# Ensure you have a .env file with your MONGO_URL and PORT
npm start
```
The server will start on `http://localhost:3002`.

### 2. Dashboard Setup
```bash
cd dashboard
npm install
npm start
```
The dashboard will run on `http://localhost:3000`.

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
The frontend will run on a separate port (e.g., `http://localhost:3001`).

---
*Disclaimer: This is a clone project built for educational purposes and is not affiliated with or endorsed by Zerodha.*

