import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from 'react';
import HeaderHomePage from "../HeaderHomePage/HeaderHomePage";
import { getBodyFromFirestore } from "../../FirestoreApi/FirestoreApi";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function MyBody() {
    const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
    const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
    const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
    const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

    const [biceps, setBiceps] = useState(0);
    const [antebraco, setAntebraco] = useState(0);
    const [peito, setPeito] = useState(0);
    const [cintura, setCintura] = useState(0);
    const [coxa, setCoxa] = useState(0);
    const [panturilha, setPanturilha] = useState(0);

    const postMyBody = async () => {
        try {
            const response = await getFirestore();
            const infoMyBody = collection(response, "MyBody");
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                // Se não houver nenhum usuário autenticado, redireciona para a página de login
                return;
            }

            await setDoc(doc(infoMyBody, user.uid), {
                biceps,
                antebraco,
                peito,
                cintura,
                coxa,
                panturilha,
            });
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    const [bodyInfo, setBodyInfo] = useState({
        biceps: 0,
        antebraco: 0,
        peito: 0,
        cintura: 0,
        coxa: 0,
        panturilha: 0,
    });
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getAllDays();
            } else {
                window.location.href = "/login";
            }
        });

        const getAllDays = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser; // Obtém o usuário autenticado atualmente
                if (!user) {
                    // Se não houver nenhum usuário autenticado, sai do método
                    return;
                }
                const response = await getBodyFromFirestore();
                setBodyInfo(response);
                if (response === undefined) {
                    console.log("Erro")
                } else {
                    setIsOpen(true)
                    setIsOpenForm(false)
                }

            } catch (error) {
                console.error(error);
            }
        };

        return () => unsubscribe();
    }, []);
    

    function resetInfoBody() {
        setIsOpen(false)
        setIsOpenForm(true)
    }

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenForm, setIsOpenForm] = useState(true);



    return (
        <div >
            <HeaderHomePage
                photoUser={photoUser}
                emailUser={emailUser}
                uidUser={uidUser}
                displayName={displayName} />
            {isOpenForm && (<div style={{ display: "flex", flexDirection: "column", paddingTop: "3%", paddingLeft: "3%", paddingRight: "3%" }}>
                <a> Digite o diametro do seu Biceps</a>
                <input className="form-control" placeholder="Biceps"
                    onChange={(event) => setBiceps(Number(event.target.value))} type='number'></input>
                <br></br>

                <a> Digite o diametro do seu Antebraço</a>
                <input className="form-control" placeholder="Antebraço"
                    onChange={(event) => setAntebraco(Number(event.target.value))} type='number'></input>
                <br></br>

                <a>Digite o diametro do seu Peito</a>
                <input className="form-control" placeholder="Peito"
                    onChange={(event) => setPeito(Number(event.target.value))} type='number'></input>
                <br></br>

                <a>Digite o diametro da sua Cintura</a>
                <input className="form-control" placeholder="Cintura"
                    onChange={(event) => setCintura(Number(event.target.value))} type='number'></input>
                <br></br>

                <a>Digite o diametro da sua Coxa</a>
                <input className="form-control" placeholder="Coxa"
                    onChange={(event) => setCoxa(Number(event.target.value))} type='number'></input>
                <br></br>

                <a>Digite o diametro da sua Panturilha</a>
                <input className="form-control" placeholder="Panturilha"
                    onChange={(event) => setPanturilha(Number(event.target.value))} type='number'></input>
                <br></br>

                <button onClick={postMyBody} className="btn btn-danger" style={{ backgroundColor: "#cf0000" }}>Enviar</button>
            </div>)}

            {isOpen && (
                <div style={{ display: "flex", flexDirection: "column", paddingTop: "3%", paddingLeft: "3%", paddingRight: "3%", paddingBottom: "3%" }}>
                    <a>O diametro do seu Biceps: </a>
                    <a>{bodyInfo.biceps} cm</a>
                    <br></br>

                    <a>o diametro do seu Antebraço: </a>
                    <a>{bodyInfo.antebraco} cm</a>
                    <br></br>

                    <a>O diametro do seu Peito: </a>
                    <a>{bodyInfo.peito} cm</a>
                    <br></br>

                    <a>O diametro da sua Cintura: </a>
                    <a>{bodyInfo.cintura} cm</a>
                    <br></br>

                    <a>O diametro da sua Coxa </a>
                    <a>{bodyInfo.coxa} cm</a>
                    <br></br>

                    <a>O diametro da sua Panturilha </a>
                    <a>{bodyInfo.panturilha} cm</a>
                    <br></br>

                    <button onClick={resetInfoBody} className="btn btn-danger" style={{ backgroundColor: "#cf0000", marginTop:'10%' }}>Mudar minhas medidas!</button>
                </div>
            )}

        </div>
    );
}

export default MyBody
