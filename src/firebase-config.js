import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAns0tp_SsnzIGmd1wPKRmTVhiWlIJKieA",
    authDomain: "crud-testing-e6d44.firebaseapp.com",
    projectId: "crud-testing-e6d44",
    storageBucket: "crud-testing-e6d44.appspot.com",
    messagingSenderId: "225736134812",
    appId: "1:225736134812:web:0e589f68ea3c1b95eedd59",
    measurementId: "G-NHCQ7J8LGT"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);