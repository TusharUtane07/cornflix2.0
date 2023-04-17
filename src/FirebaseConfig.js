import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgYALwncG_994FmSRKgk07hRm4z0GNtd8",
  authDomain: "cornflix-9e6cc.firebaseapp.com",
  projectId: "cornflix-9e6cc",
  storageBucket: "cornflix-9e6cc.appspot.com",
  messagingSenderId: "133776057288",
  appId: "1:133776057288:web:7f92dc75888613011016fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
