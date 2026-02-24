
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("welcome").innerText = "Welcome " + user.email;
  } else {
    window.location.href = "login.html";
  }
});

window.logout = function(){
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}
