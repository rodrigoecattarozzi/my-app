import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage"

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
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
