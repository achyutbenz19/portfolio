import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXhrQi3RMwofG61BCYHXn-nTe9nKsZvaA",
  authDomain: "portfolio-c8788.firebaseapp.com",
  projectId: "portfolio-c8788",
  storageBucket: "portfolio-c8788.appspot.com",
  messagingSenderId: "72704247951",
  appId: "1:72704247951:web:e865670a78414dc327c8fa",
  measurementId: "G-EQWD631BVR"
};

const app = initializeApp(firebaseConfig);
export default getFirestore();