import 'firebase/firestore';
import { configApi } from '../config/config';


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";



export async function getDataFromFirestore(): Promise<any> {

  const app = initializeApp(configApi);

  const db = getFirestore(app);

  const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');

  const docRef = doc(db, "User", uidUser);
  const docSnap = await getDoc(docRef);



 
  return docSnap.data()
}

