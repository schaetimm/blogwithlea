const firebase = require("firebase/app");
const getFirestore = require("firebase/firestore");
const getStorage = require("firebase/storage");
const getAuth = require("firebase/auth");


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALxF102ugt9PVrtWhCrrJL3zhSm-4rePE",
  authDomain: "blogwithlea-3826a.firebaseapp.com",
  projectId: "blogwithlea-3826a",
  storageBucket: "blogwithlea-3826a.appspot.com",
  messagingSenderId: "1041116755446",
  appId: "1:1041116755446:web:f69f508f5a89b0a724c3d7"
};



module.exports = {
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signOut
};







const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// const auth = getAuth();
module.exports = { auth: auth, db: db, storage: storage };
