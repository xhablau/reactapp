import LogoVermelha from '../../../img/logoVermelha.png'
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { usuarios } from './LoginUser';

function RegisterUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailInput = document.querySelector("#form2Example11") as HTMLInputElement;
    const emailTxt = document.querySelector("#txtEmail") as HTMLInputElement;

    const passwordInput = document.querySelector("#form2Example22") as HTMLInputElement;
    const passwordTxt = document.querySelector("#txtPassword") as HTMLInputElement;


    function Cadastrar() {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
               
            window.location.href = '/HomePage'

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === "auth/invalid-email") {

                    emailInput.style.border = "1px solid red";
                    emailTxt.innerText = "E-mail inválido";
                    emailTxt.style.color = " red"


                } else if (errorCode === "auth/weak-password") {

                    passwordInput.style.border = "1px solid red";
                    passwordTxt.innerText = "Senha inválida! Usar 6 caracteres!";
                    passwordTxt.style.color = " red"
                } else {

                    console.log(errorCode)
                }


            });
    }





    return (



        <div className="col-xl-10" style={{ margin: "9%" }}>
            <div className="card rounded-3 text-black" >


                <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                        <img src={LogoVermelha}
                            style={{ width: `185px`, }}
                        >
                        </img>
                        <h4 className="mt-1 mb-5 pb-1">Nos somos BlaBlaBla</h4>
                    </div>

                    <form>

                        <div className="form-outline mb-4" >
                            <input type="email" id="form2Example11" className="form-control"
                                placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                            <div className="form-label" id='txtEmail' >E-mail</div>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example22" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                            <label className="form-label" id='txtPassword'>Senha</label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                            <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={Cadastrar}>Cadastrar</button>
                        </div>


                        <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Já tem uma conta?</p>
                            <button type="button" className="btn btn-outline-danger" ><a href="/login">Acesse sua conta aqui</a></button>
                        </div>



                    </form>

                </div>




            </div>
        </div>





    )
}

export default RegisterUser