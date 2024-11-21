  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAWvLVI64C1LVC1gkbM38fMgrWQUZJr3b4",
    authDomain: "login-948d9.firebaseapp.com",
    projectId: "login-948d9",
    storageBucket: "login-948d9.firebasestorage.app",
    messagingSenderId: "1017210831314",
    appId: "1:1017210831314:web:a317cd78bb0320d008080b",
    measurementId: "G-4TNH10J8DX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
