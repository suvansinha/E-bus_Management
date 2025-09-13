
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyBHTU0irdzClzNvaRey3StpZ9sZYnQZUaw",
  authDomain: "e-bus-management-dac6c.firebaseapp.com",
  projectId: "e-bus-management-dac6c",
  storageBucket: "e-bus-management-dac6c.firebasestorage.app",
  messagingSenderId: "1053043707359",
  appId: "1:1053043707359:web:d3bd7f2eef51d23812886a",
  measurementId: "G-H3M96SJ4TE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);