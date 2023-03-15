import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLCiBhiUMimAdp01MJA40_NEy96oyIsiE",
  authDomain: "ctse-lab4-fed81.firebaseapp.com",
  projectId: "ctse-lab4-fed81",
  storageBucket: "ctse-lab4-fed81.appspot.com",
  messagingSenderId: "800632938568",
  appId: "1:800632938568:web:bbff5b265560995280b87d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export { firebase };
