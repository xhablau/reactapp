import 'firebase/firestore';
import { Config } from 'firebase/auth';
import { configApi } from '../config/config';


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc,getDoc } from "firebase/firestore"; 



// const firebaseConfig = {
//     apiKey: "AIzaSyC15vUVPKP1k_kaqqrXBnMy2AYhHg1ibcw",
//     authDomain: "mypersonal-40ff3.firebaseapp.com",
//     projectId: "mypersonal-40ff3",
//     storageBucket: "mypersonal-40ff3.appspot.com",
//     messagingSenderId: "683640940413",
//     appId: "1:683640940413:web:aca2d27b54d983624e4e14",
//     measurementId: "G-MND5Q5JHT2"
// }


const app = initializeApp(configApi);

// Obtém a referência do banco de dados
const db = getFirestore(app);



const docRef = doc(db, "User", "snxAiY3ymQt3mwHncQP6");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


function FirestoreAPI() {
 

    return (


        <div>
            oieaaaaa
        </div>






    )
}

export default FirestoreAPI