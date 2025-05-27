# 🥔 Potato Plant Disease Detection System

![Potato Plant Logo](./static/images/logo.png)

## 🌐 Hosted Live URL
**Frontend:** [https://potato-disease-v1-0-frontend.vercel.app/](https://potato-disease-v1-0-frontend.vercel.app/)  
**Backend:** [https://potato-disease-v1-0-backend.onrender.com/](https://potato-disease-v1-0-backend.onrender.com/)

---

## 📌 Project Overview

This project is a deep learning-based web application designed to help farmers detect **potato plant diseases** through image recognition. Using a Convolutional Neural Network (CNN), the system can identify two common diseases — **Early Blight** and **Late Blight**, or confirm if the plant is **healthy**.

The web app allows users to upload an image of a potato plant leaf, and the system will return:
- The disease (if any)
- A confidence score
- A brief description of the disease
- Helpful recommendations for treatment

The ultimate goal is to provide a **free, accessible, and user-friendly** tool to assist farmers in early diagnosis and better crop management.

---

## 🧠 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: FastAPI
- **Model**: TensorFlow/Keras `.h5` model
- **Hosting**:
  - Frontend: [Vercel](https://vercel.com/)
  - Backend: [Render](https://render.com/)
- **Version Control**: Git & GitHub

---

## ✨ Features

- 🌱 Upload potato plant leaf images
- 🤖 Real-time prediction using a trained CNN model
- 📝 Detailed disease information & confidence levels
- 💡 Recommendations for disease treatment
- 🧭 Navigation sections with dedicated pages:
  - **Home**: Project introduction and architecture diagram
  - **Advantages/Impact**: Real-world benefits for farmers
  - **Test Your Plant**: Upload and diagnose
  - **About**: Developer profile and contact information

---

## ✅ Detected Diseases

| Disease Name  | Description                                                                 | Recommendations |
|---------------|-----------------------------------------------------------------------------|-----------------|
| **Early Blight** | Caused by the fungus *Alternaria solani*. Shows dark spots on older leaves. | Use fungicides like mancozeb; rotate crops |
| **Late Blight**  | Caused by *Phytophthora infestans*. Causes large dark lesions and decay.   | Use certified seeds; apply protective fungicides |
| **Healthy**      | No disease detected.                                                        | No action needed |

---

