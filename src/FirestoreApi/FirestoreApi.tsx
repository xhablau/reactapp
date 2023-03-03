import 'firebase/firestore';
import { configApi } from '../config/config';


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';



export async function getDataFromFirestore(): Promise<any> {
  // Obtenha a instância do app Firebase e do Firestore
  const app = initializeApp(configApi);
  const db = getFirestore(app);

  // Verifique se o usuário está autenticado
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  // Obtenha o UID do usuário autenticado
  const uidUser = user.uid;

  // Busque as informações do usuário no Firestore
  const docRef = doc(db, "User", uidUser);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}






export async function getBodyFromFirestore(): Promise<any> {
   // Obtenha a instância do app Firebase e do Firestore
   const app = initializeApp(configApi);
   const db = getFirestore(app);
 
   // Verifique se o usuário está autenticado
   const auth = getAuth();
   const user = auth.currentUser;
   if (!user) {
     throw new Error("Usuário não autenticado");
   }
 
   // Obtenha o UID do usuário autenticado
   const uidUser = user.uid;
 
   // Busque as informações do usuário no Firestore
   const docRef = doc(db, "MyBody", uidUser);
   const docSnap = await getDoc(docRef);
   return docSnap.data();
}

