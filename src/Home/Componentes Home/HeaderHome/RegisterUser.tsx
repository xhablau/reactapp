import LogoVermelha from '../../../img/logoVermelha.png'
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegisterUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function Cadastrar() {
      
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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

                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example11" className="form-control"
                                placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                            <label className="form-label" >E-mail</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example22" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                            <label className="form-label" >Senha</label>
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