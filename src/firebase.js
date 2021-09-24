import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLJmaGargrZkF4A3qOXl3VVhYQQoXco4M",
  authDomain: "alberr-mosque.firebaseapp.com",
  projectId: "alberr-mosque",
  storageBucket: "alberr-mosque.appspot.com",
  messagingSenderId: "464479500854",
  appId: "1:464479500854:web:1b31f04f81892da42e3697",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
