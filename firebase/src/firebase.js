import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX-Zi1gJPMda7QsVEz5OciG4QH1k40OYU",
  authDomain: "fir-a0451.firebaseapp.com",
  projectId: "fir-a0451",
  storageBucket: "fir-a0451.appspot.com",
  messagingSenderId: "957632436604",
  appId: "1:957632436604:web:2c11db7a748a8db5c9acf9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
