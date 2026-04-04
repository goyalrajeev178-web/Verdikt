<div align="center">

# ⚖️ Verdikt

### Classroom Coding Evaluation Platform



![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

*Built for HACKSAGON — a National Level Hackathon*

</div>

---

## 📌 About

**Verdikt** is a web-based classroom coding evaluation platform that allows teachers to manage assignments and students to submit code — all from the browser. No installations required.

Built with plain HTML, CSS, and JavaScript. Firebase handles authentication and data storage.

---

## 📁 Project Structure

```
verdikt/
├── login/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── student-dashboard/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── teacher-dashboard/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

---

## ✨ Features

- 🔐 **Firebase Authentication** — Secure login for students and teachers
- 👨‍🏫 **Teacher Dashboard** — Create and manage coding assignments
- 👨‍💻 **Student Dashboard** — View assignments and submit solutions
- 🌐 **No framework needed** — Pure HTML, CSS, JS

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
(https://github.com/goyalrajeev178-web/Verdikt.git)
cd Verdikt
```

### 2. Setup Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** (Email/Password)
4. Add Users
5. Copy your Firebase config and paste it in the `script.js` of each folder:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  ...
};
```

### 3. Run Locally

Just open `login/index.html` in your browser — no build step needed.

Or use Live Server in VS Code for the best experience.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Authentication | Firebase Auth |
| Database | Firebase Firestore |
| Hosting | Firebase Hosting *(optional)* |

---

## 🏆 Built At

**HACKSAGON '26** — a National Level Hackathon

---

## 👨‍💻 Author

**Yash Gupta** — B.Tech CS, 1st Year

![GitHub](https://img.shields.io/badge/GitHub-Yash--Gupta1710-181717?style=flat-square&logo=github)<br>
https://github.com/Yash-Gupta1710


**Rajeev Goyal** - B.Tech CS, 1st Year

![GitHub](https://img.shields.io/badge/GitHub-goyalrajeev178--web-181717?style=flat-square&logo=github)<br>
https://github.com/goyalrajeev178-web


**Vinay Garg** - B.Tech CS, 1st Year

![GitHub](https://img.shields.io/badge/GitHub-gitvinay24-181717?style=flat-square&logo=github)<br>
https://github.com/gitvinay24


---

<div align="center">
  <sub>Made with ☕ and a deadline 🚀</sub>
</div>
