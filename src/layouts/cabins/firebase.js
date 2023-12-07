// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhMGh2AcaW_UgMFABYB8wiYpFmaf7OqEM",
  authDomain: "cabinture.firebaseapp.com",
  projectId: "cabinture",
  storageBucket: "cabinture.appspot.com",
  messagingSenderId: "249574100141",
  appId: "1:249574100141:web:c43fd99303ec1488050a24",
  measurementId: "G-VNWGTEY98R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)