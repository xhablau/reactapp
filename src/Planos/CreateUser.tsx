import { useEffect, useState } from 'react';
import { getFirestore, Timestamp } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function CreateUser() {

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user && user.uid === "WRbgvpVhLwX2gc4MNHgejoGn1UE3") {
            
    
          } else {
            window.location.href = "/login";
          }
        });
    
        return () => unsubscribe();
      }, []);
     
      const [uidUser, setUidUser] = useState(0);

      const createUserUid = async () => {
        try {
          const response = await getFirestore();
          const citiesRef = collection(response, "User");
    
          await setDoc(doc(citiesRef, uidUser.toString()),  {
            diet: [{ Breakfast: [] },
            { BreakLunch: [] },
            { Lunch: [] },
            { AfternoonSnack: [] },
            { Dinner: [] },
            { Supper: [] }
            ],
            friday: [],
            monday: [],
            saturday: [],
            sunday: [],
            thursday: [],
            tuesday: [],
            wednesday: [],
          });

          console.log("Usuario Criado")
          
        } catch (error) {
          console.error(error);
        }
      }
   


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input className="form-control" placeholder="UidUser"
                onChange={(event) => setUidUser(Number(event.target.value))} type='number'></input>
                <button onClick={createUserUid} className="btn btn-danger" style={{ backgroundColor: "#cf0000" }}>Criar User</button>
        </div>



    );
}

export default CreateUser;
