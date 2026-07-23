// Firebase v11

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFBDXX4JOEOiye9LO2lqI_kwGW-7v7KKQ",
  authDomain: "barcavibesofficial.firebaseapp.com",
  projectId: "barcavibesofficial",
  storageBucket: "barcavibesofficial.firebasestorage.app",
  messagingSenderId: "739455946346",
  appId: "1:739455946346:web:eec65e26d93f681020c413",
  measurementId: "G-F3JQ0J7SFN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

try {
    getAnalytics(app);
} catch (e) {
    console.log("Analytics unavailable.");
}
