import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBP_P2nilsiLkhMioDSWbYFNUwhWjUcbUU",
    authDomain: "clone-52c36.firebaseapp.com",
    projectId: "clone-52c36",
    storageBucket: "clone-52c36.appspot.com",
    messagingSenderId: "785447901987",
    appId: "1:785447901987:web:23ba1bdb5257d3236f4a96"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.auth()