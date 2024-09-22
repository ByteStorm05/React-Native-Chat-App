
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBeANLbr9QES0N9xksXxmRf5vg6CL3bdAs",
  authDomain: "giftedchatapp-6109d.firebaseapp.com",
  projectId: "giftedchatapp-6109d",
  storageBucket: "giftedchatapp-6109d.appspot.com",
  messagingSenderId: "1056928791780",
  appId: "1:1056928791780:web:8ac27476a54ee1ffe840f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication =  getAuth(app);

export { authentication };