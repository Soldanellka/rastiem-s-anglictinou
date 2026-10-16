// firebase.js — konfigurácia pre projekt Finančná liga

'use strict';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtX3TCp1Y__1VgyvKRiG1rncxoOdiioCw",
  authDomain: "rastiem-s-anglictinou.firebaseapp.com",
  databaseURL: "https://rastiem-s-anglictinou-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rastiem-s-anglictinou",
  storageBucket: "rastiem-s-anglictinou.firebasestorage.app",
  messagingSenderId: "225314034220",
  appId: "1:225314034220:web:92b35dc8dfd226a827b789",
  measurementId: "G-2T9D9VHGMQ"
};
// Inicializácia Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.db = db;

console.log("🔥 Firebase Rastiem s angličtinou inicializovaná, DB pripravená.");
