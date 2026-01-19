import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC5e5thW5VIcxTNFqDD2gsOxepz3X-8lqA",
  authDomain: "authetication-react.firebaseapp.com",
  projectId: "authetication-react",
  storageBucket: "authetication-react.firebasestorage.app",
  messagingSenderId: "644407228380",
  appId: "1:644407228380:web:9b185e605298d6b2d10119",
  databaseURL:"https://authetication-react-default-rtdb.firebaseio.com"
};
export const app = initializeApp(firebaseConfig);