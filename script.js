// --- MENÚ RESPONSIVO ---
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// --- CONFIGURACIÓN FIREBASE ---
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "bello-com.firebaseapp.com",
  projectId: "bello-com",
  storageBucket: "bello-com.appspot.com",
  messagingSenderId: "447257636083",
  appId: "1:447257636083:web:84288041662639a31ddb86"
};

// Cargar SDK Firebase v8 (sin instalación)
document.write(`
  <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"><\/script>
  <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"><\/script>
`);

window.addEventListener("load", () => {
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  console.log("🔥 Firebase conectado correctamente");

  // Ejemplo: crear colección 'visitas'
  db.collection("visitas").add({
    fecha: new Date().toLocaleString(),
  }).then(() => console.log("Registro guardado en Firestore ✅"));
});
