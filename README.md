# 🚀 QuickHire - Modern Job Board Application

QuickHire is a sleek, responsive mini job board application built to streamline the hiring process. Users can discover opportunities, filter by category/location, and apply directly, while administrators can manage job listings through a dedicated dashboard.

---

## 📸 Demo & Links

- **Live Demo:** [Insert Your Vercel/Render Link Here]
- **Walkthrough Video:** [Insert Loom/YouTube Link here]
- **Admin Credentials:**
  - **Email:** admin@quickhire.com (Default)
  - **Password:** admin123 (Default)

---

## ✨ Features

### 🔍 For Job Seekers

- **Modern Job Listings:** Browse all available jobs with high-quality visual cards.
- **Smart Filtering:** Filter jobs by **Category** (Text Search) and **Location**.
- **Real-time Search:** Instantly find roles by job title or keywords.
- **Premium Job Details:** Dedicated pages for each listing with full descriptions and requirements.
- **Seamless Application:** Integrated form to submit names, emails, resume links, and cover notes.

### 🛠 For Administrators (Protected)

- **Interactive Dashboard:** Overview of total jobs and received applications.
- **Skeleton Loaders:** Premium UX with content-aware loading states.
- **Job Management:** Add new listings with image uploads and remove outdated ones instantly.
- **Live Updates:** Stats and tables refresh automatically after any listing changes.

---

## 🛠 Tech Stack

**Frontend:**

- **React.js + Vite** (High-Performance Development)
- **Tailwind CSS** (Premium Styling)
- **Lucide React** (Modern Iconography)
- **React Query** (Optimized Data Fetching & State Management)
- **Framer Motion** (Smooth Animations)

**Backend:**

- **Node.js + Express.js** (Scalable API)
- **MongoDB + Mongoose** (Robust Data Management)
- **JWT (JSON Web Tokens)** (Secure Admin Authentication)
- **Multer** (Efficient Image Processing)

---

## ⚙️ Local Setup Instructions

### 1. Prerequisites

- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### 2. Clone the Repository

```bash
git clone <your-repo-link>
cd QuickHire
```

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Run the backend:

```bash
npm run dev
```

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
VITE_IMG_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

---

## 🌐 Deployment Guide (Recommended)

### **Backend (Render / Railway)**

1. Host your `backend` folder on **Render.com**.
2. Set the Environment Variables (`MONGO_URI`, `JWT_SECRET`) in the Render dashboard.
3. Note your Render URL (e.g., `https://quickhire-api.onrender.com`).

### **Frontend (Vercel)**

1. Push your code to GitHub.
2. Connect your repository to **Vercel**.
3. Set the Root Directory to `frontend`.
4. Add Environment Variables:
   - `VITE_API_URL` = `https://your-render-url.com/api`
   - `VITE_IMG_URL` = `https://your-render-url.com`
5. Deploy!

---

## 📂 Project Structure

```text
QuickHire/
├── backend/            # Express.js API
│   ├── controllers/    # API Logic
│   ├── models/         # Database Schemas (Job, Application)
│   ├── routes/         # Endpoint Definitions
│   └── uploads/        # Local Image Storage
└── frontend/           # React + Vite Frontend
    ├── src/
    │   ├── components/ # Reusable UI Components
    │   ├── hooks/      # API Interacting Custom Hooks
    │   └── pages/      # Route Pages
```

---

## 📜 License

Independent Developer Task - 2026.
