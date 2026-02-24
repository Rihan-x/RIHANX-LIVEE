
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXUkqrC0P_MHxkQvBin0N3EG_A73i5cCE",
  authDomain: "rihan-x-livee.firebaseapp.com",
  projectId: "rihan-x-livee",
  storageBucket: "rihan-x-livee.firebasestorage.app",
  messagingSenderId: "38370280795",
  appId: "1:38370280795:web:050750cbe43e076b1a467e",
  measurementId: "G-98ZQCZ374K"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
