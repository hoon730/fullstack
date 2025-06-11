// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqhiSppq_3_hOZC9UpSiXFrT-KFL2781A",
  authDomain: "north-test-fd6f1.firebaseapp.com",
  projectId: "north-test-fd6f1",
  storageBucket: "north-test-fd6f1.firebasestorage.app",
  messagingSenderId: "716403152223",
  appId: "1:716403152223:web:96e35188e55ce8048412ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
