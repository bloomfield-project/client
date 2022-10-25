import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxa52mDt6-cKdQ8nh2Vj7n0wCb9iwoaGQ",
  authDomain: "bloomfield-84518.firebaseapp.com",
  projectId: "bloomfield-84518",
  storageBucket: "bloomfield-84518.appspot.com",
  messagingSenderId: "477498370019",
  appId: "1:477498370019:web:e03bea8b70e06b7fbee2d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);