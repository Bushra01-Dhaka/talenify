import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBJxYAx3XLEZZfkEyBT_etefh530XkqwoM",
  authDomain: "talenify.firebaseapp.com",
  projectId: "talenify",
  storageBucket: "talenify.appspot.com",
  messagingSenderId: "360345197783",
  appId: "1:360345197783:web:ba90da3f0cde9af0266492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;