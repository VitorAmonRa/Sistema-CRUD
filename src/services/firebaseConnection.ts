
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAa9ImEf24rdl-hg2z3dW8WsBv3M32TFoI",
  authDomain: "comandas--online.firebaseapp.com",
  projectId: "comandas--online",
  storageBucket: "comandas--online.appspot.com",
  messagingSenderId: "975489771173",
  appId: "1:975489771173:web:f5c78a0a1763e5ca9e8f4c",
  measurementId: "G-QDJQ63FX9W"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth};

