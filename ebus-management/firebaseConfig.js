


const firebaseConfig = {
  apiKey: "AIzaSyBHTU0irdzClzNvaRey3StpZ9sZYnQZUaw",
  authDomain: "e-bus-management-dac6c.firebaseapp.com",
  projectId: "e-bus-management-dac6c",
  storageBucket: "e-bus-management-dac6c.firebasestorage.app",
  messagingSenderId: "1053043707359",
  appId: "1:1053043707359:web:973fe5d245422a3a12886a",
  measurementId: "G-HXBR4FSRLL"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
