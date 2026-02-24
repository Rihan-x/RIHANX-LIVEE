
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXUkqrC0P_MHxkQvBin0N3EG_A73i5cCE",
  authDomain: "rihan-x-livee.firebaseapp.com",
  projectId: "rihan-x-livee",
  storageBucket: "rihan-x-livee.firebasestorage.app",
  messagingSenderId: "38370280795",
  appId: "1:38370280795:web:050750cbe43e076b1a467e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Live status listener
const statusRef = collection(db, "tournamentStatus");

onSnapshot(statusRef, (snapshot) => {
snapshot.forEach(doc => {
document.getElementById("liveStatus").innerText = doc.data().status;
});
});

// Register Squad
window.registerSquad = async function(){
const squad = document.getElementById("squad").value;
const uid = document.getElementById("uid").value;

try {
await addDoc(collection(db, "registrations"), {
squadName: squad,
leaderUID: uid,
created: new Date()
});
document.getElementById("msg").innerText = "Registration Submitted!";
} catch (error) {
document.getElementById("msg").innerText = "Error!";
}
}
