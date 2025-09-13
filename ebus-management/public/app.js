
import { auth, db } from '../firebaseConfig.js';

// ----------------------------
// Register User
// ----------------------------
function register() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registered successfully");
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    })
    .catch(error => {
      console.error("Registration Error:", error);
      alert(error.message);
    });
}

// ----------------------------
// Login User
// ----------------------------
function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('auth-section').classList.add('hidden');
      document.getElementById('user-section').classList.remove('hidden');
      document.getElementById('logoutBtn').classList.remove('hidden');
    })
    .catch(error => {
      console.error("Login Error:", error);
      alert(error.message);
    });
}

// ----------------------------
// Logout User
// ----------------------------
document.getElementById('logoutBtn').addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      document.getElementById('auth-section').classList.remove('hidden');
      document.getElementById('user-section').classList.add('hidden');
      document.getElementById('logoutBtn').classList.add('hidden');
    })
    .catch(error => console.error("Logout Error:", error));
});

// ----------------------------
// Search Bus
// ----------------------------
function searchBus() {
  const source = document.getElementById('source').value.trim();
  const destination = document.getElementById('destination').value.trim();

  const resultsDiv = document.getElementById('bus-results');
  resultsDiv.innerHTML = '';

  db.collection('buses')
    .where('source', '==', source)
    .where('destination', '==', destination)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        resultsDiv.innerHTML = '<p class="text-gray-600">No buses found</p>';
      } else {
        snapshot.forEach(doc => {
          const bus = doc.data();
          const card = document.createElement('div');
          card.className = "bg-white shadow-md rounded-lg p-4 flex justify-between items-center";
          card.innerHTML = `
            <div>
              <h3 class="text-lg font-bold">${bus.busNumber}</h3>
              <p class="text-sm text-gray-600">Type: ${bus.type}</p>
              <p class="text-sm text-gray-600">ETA: ${bus.eta || 'N/A'} mins</p>
            </div>
            <button class="bg-green-500 text-white px-3 py-1 rounded" onclick="trackBus('${bus.location}')">Track</button>
          `;
          resultsDiv.appendChild(card);
        });
      }
    })
    .catch(error => console.error("Error fetching buses:", error));
}

// ----------------------------
// Track Bus (Google Maps)
// ----------------------------
function trackBus(location) {
  window.open(`https://www.google.com/maps/search/?api=1&query=${location}`, '_blank');
}

// ----------------------------
// Make functions available to HTML
// ----------------------------
window.register = register;
window.login = login;
window.searchBus = searchBus;
window.trackBus = trackBus;

