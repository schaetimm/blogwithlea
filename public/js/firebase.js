import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAjpjwajwwykwhni9kvBsz3HSdpXrfTass",
   authDomain: "lo-blogs.firebaseapp.com",
   projectId: "lo-blogs",
   storageBucket: "lo-blogs.appspot.com",
   messagingSenderId: "351906388126",
   appId: "1:351906388126:web:d13941416cd82c4d1ec38f"
 };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
