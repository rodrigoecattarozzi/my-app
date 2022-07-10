import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyS_vXx0TmX2ginbEU-FWk_VMDSLe400Q",
  authDomain: "ooss-list-system.firebaseapp.com",
  projectId: "ooss-list-system",
  storageBucket: "ooss-list-system.appspot.com",
  messagingSenderId: "987912082179",
  appId: "1:987912082179:web:ac40c46c1a719cc5224f36",
  measurementId: "G-XXSFFMHZS5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
