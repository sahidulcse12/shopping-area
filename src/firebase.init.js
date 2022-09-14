import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrI4zAyjXG3Ms5Sxn8au3vP1Ul3LEFh0E",
    authDomain: "ema-john-simple-50215.firebaseapp.com",
    projectId: "ema-john-simple-50215",
    storageBucket: "ema-john-simple-50215.appspot.com",
    messagingSenderId: "947919395711",
    appId: "1:947919395711:web:b0954a25ac206e2bfc184a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;