
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

const leaderboardRef = collection(db, "leaderboard");

onSnapshot(leaderboardRef, (snapshot) => {
let players = [];
snapshot.forEach(doc => {
players.push(doc.data());
});

// Sort by points descending
players.sort((a,b) => b.points - a.points);

const tbody = document.querySelector("#leaderboard tbody");
tbody.innerHTML = "";

players.forEach((player, index) => {
let row = `<tr>
<td>${index + 1}</td>
<td>${player.playerName}</td>
<td>${player.kills}</td>
<td>${player.points}</td>
</tr>`;
tbody.innerHTML += row;
});
});
