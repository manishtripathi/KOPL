import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCpokQ1u3ftZH4zP1UXM-S78JuAXzIvqrA",
  authDomain: "organicnew-2c52e.firebaseapp.com",
  projectId: "organicnew-2c52e",
  storageBucket: "organicnew-2c52e.firebasestorage.app",
  messagingSenderId: "732220040637",
  appId: "1:732220040637:web:c7d39119ac7ec60afe9ed4",
  measurementId: "G-T02ZX2X7BG"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth";
// import {getStorage} from "firebase/storage";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyCpFZ3rQUYyIwNFf0ZlBYWh6nQgHkuU_Jg",
//   authDomain: "kopl-4f1eb.firebaseapp.com",
//   projectId: "kopl-4f1eb",
//   storageBucket: "kopl-4f1eb.firebasestorage.com",
//   messagingSenderId: "497401082891",
//   appId: "1:497401082891:web:c99ef0fc8bdaff2dbe030e",
//   measurementId: "G-79KDG99MJD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);
// export const db = getFirestore(app);