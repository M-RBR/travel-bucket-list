import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log("[Firebase Config] Env Vars:", import.meta.env);
console.log(
  "[Firebase Config] API Key:",
  import.meta.env.VITE_FB_API_KEY || "UNDEFINED"
);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "travel-bucket-list-d99b4.firebaseapp.com",
  projectId: "travel-bucket-list-d99b4",
  storageBucket: "travel-bucket-list-d99b4.firebasestorage.app",
  messagingSenderId: "365854036878",
  appId: "1:365854036878:web:dcaf52c1cbb359c59f8adf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
