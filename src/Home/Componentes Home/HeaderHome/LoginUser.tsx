import '../HeaderHome/LoginUser.css'
import LogoVermelha from '../../../img/logoVermelha.png'
import LogoBranca from '../../../img/logoBranca.png'
import LogoPreta from '../../../img/logoPreta.jpeg'
import facebookimg from '../../../img/facebook.png'
import twitterimg from '../../../img/twitter.png'
import googleimg from '../../../img/gmail.png'

import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, FacebookAuthProvider, TwitterAuthProvider, sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router'
import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { redirect } from "react-router-dom";









function LoginUser() {


    window.onbeforeunload = function () {
        navigate("/login");
    }


    const auth = getAuth()
    const navigate = useNavigate()
    const [authing, setAuthing] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailInput = document.querySelector("#form2Example11") as HTMLInputElement;
    const emailTxt = document.querySelector("#txtEmail") as HTMLInputElement;

    const passwordInput = document.querySelector("#form2Example22") as HTMLInputElement;
    const passwordTxt = document.querySelector("#txtPassword") as HTMLInputElement;


    function handlePasswordReset() {

        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(response => {



            sessionStorage.setItem('photoUser', JSON.stringify(response.user.photoURL));
            sessionStorage.setItem('emailUser', JSON.stringify(response.user.email));
            sessionStorage.setItem('uidUser', JSON.stringify(response.user.uid));
            sessionStorage.setItem('displayName', JSON.stringify(response.user.displayName));

            // window.location.href = '/HomePage';
            redirect('/HomePage')
            redirect("/HomePage")

        })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    emailInput.style.border = "1px solid red";
                    emailTxt.innerText = "E-mail inválido";
                    emailTxt.style.color = " red"
                } else if (error.code === "auth/wrong-password") {

                    passwordInput.style.border = "1px solid red";
                    passwordTxt.innerText = "Senha inválida!";
                    passwordTxt.style.color = " red"
                } else {

                    console.log(error.code)
                }

                console.log(error.code)
            });


    };
    const singInWhitGoogle = async () => {

        setAuthing(true);
        // let navigate = useNavigate()
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {

                sessionStorage.setItem('photoUser', JSON.stringify(response.user.photoURL));
                sessionStorage.setItem('emailUser', JSON.stringify(response.user.email));
                sessionStorage.setItem('uidUser', JSON.stringify(response.user.uid));
                sessionStorage.setItem('displayName', JSON.stringify(response.user.displayName));


                navigate("/homepage");
            })
            .catch(error => {
                console.log("error", error)
                setAuthing(false)
            })
    }
    const singInWhitFacebook = async () => {
        setAuthing(true);

        signInWithPopup(auth, new FacebookAuthProvider())
            .then(response => {
                
                sessionStorage.setItem('photoUser', JSON.stringify(response.user.photoURL));
                sessionStorage.setItem('emailUser', JSON.stringify(response.user.email));
                sessionStorage.setItem('uidUser', JSON.stringify(response.user.uid));
                sessionStorage.setItem('displayName', JSON.stringify(response.user.displayName));

                window.location.href = '/HomePage'
            })
            .catch(error => {
                console.log(error)
                setAuthing(false)
            })
    }
    const singInWhitTwitter = async () => {
        setAuthing(true);

        signInWithPopup(auth, new TwitterAuthProvider())
            .then(response => {

                sessionStorage.setItem('photoUser', JSON.stringify(response.user.photoURL));
                sessionStorage.setItem('emailUser', JSON.stringify(response.user.email));
                sessionStorage.setItem('uidUser', JSON.stringify(response.user.uid));
                sessionStorage.setItem('displayName', JSON.stringify(response.user.displayName));

                window.location.href = '/HomePage'
            })
            .catch(error => {
                console.log(error)
                setAuthing(false)
            })
    }
    // para deslogar

    // const auth = getAuth();
    //  <button onClick={() => signOut(a)}>Sign out of Firebase</button>

    return (

        <section className="h-100 gradient-form" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <img src={LogoVermelha}
                                                style={{ width: `185px`, }}
                                            >
                                            </img>
                                            <h4 className="mt-1 mb-5 pb-1">Nos somos o MeuPersonal</h4>
                                        </div>

                                        <form onSubmit={handleSignIn}>

                                            <div className="text-center mb-3">
                                                <p>Entre com:</p>
                                                <div style={{ display: 'flex' }}>
                                                    <button type="button" className="btn btn-link btn-floating mx-1" onClick={() => singInWhitFacebook()} disabled={authing}>
                                                        {/* <i className="fab fa-facebook-f" src={}> facebook </i> */}
                                                        <img src={facebookimg} style={{ width: '60%' }}></img>
                                                    </button>

                                                    <button type="button" className="btn btn-link btn-floating mx-1" onClick={() => singInWhitGoogle()} disabled={authing}>
                                                        {/* <i className="fab fa-google"> google </i> */}
                                                        <img src={googleimg} style={{ width: '60%' }}></img>
                                                    </button>

                                                    {/* <button type="button" className="btn btn-link btn-floating mx-1" onClick={() => singInWhitTwitter()} disabled={authing}> */}
                                                        {/* <i className="fab fa-twitter">twitter</i> */}
                                                        {/* <img src={twitterimg} style={{ width: '60%' }}></img> */}
                                                    {/* </button> */}
                                                </div>
                                            </div>

                                            <p className="text-center">ou:</p>



                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example11" className="form-control"
                                                    placeholder="E-mail" onChange={(event) => setEmail(event.target.value)} />
                                                <div className="form-label" id='txtEmail'>E-mail</div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example22" className="form-control" onChange={(event) => setPassword(event.target.value)} />
                                                <div className="form-label" id='txtPassword'>Senha</div >
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" >Log in</button>
                                                <button className="btn btn-red " onClick={handlePasswordReset}>Esqueceu a senha?</button>

                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Não tem uma conta?</p>
                                                <button type="button" className="btn btn-outline-danger" ><a href="/register" id='newAccount'>Criar nova conta</a></button>
                                            </div>

                                        </form>

                                    </div>
                                </div>

                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2" id="loginSegundo" >
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4" >
                                        <h4 className="mb-4">Moldando o seu corpo e mente com a ajuda da tecnologia</h4>
                                        <p className="small mb-0">Com a nossa plataforma inovadora de treinamento, você pode desenvolver habilidades físicas e
                                         mentais em um ambiente inteligente e personalizado. Nossa tecnologia de ponta combina inteligência artificial e 
                                         dados de treinamento para fornecer um plano de treino exclusivo e eficaz, que se adapta às suas necessidades e objetivos
                                         . Não importa se você é um atleta de elite ou um iniciante, 
                                         nossa plataforma é projetada para ajudá-lo a atingir o próximo nível. Junte-se a nós hoje e
                                          comece a moldar o seu corpo e mente para o futuro.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LoginUser