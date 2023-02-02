import '../HeaderHome/LoginUser.css'
import LogoVermelha from '../../../img/logoVermelha.png'
import LogoBranca from '../../../img/logoBranca.png'
import LogoPreta from '../../../img/logoPreta.jpeg'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { useState } from 'react'

function LoginUser() {
    const auth = getAuth()
    const navigate = useNavigate()
    const [authing, setAuthing] = useState(false)

    const singInWhitGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                setAuthing(false)
            })
    }
    const singInWhitFacebook = async () => {
        setAuthing(true);

        signInWithPopup(auth, new FacebookAuthProvider())
            .then(response => {
                console.log(response.user.uid)
                navigate('/')
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
                console.log(response.user.uid)
                navigate('/')
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
                                            <h4 className="mt-1 mb-5 pb-1">Nos somos BlaBlaBla</h4>
                                        </div>

                                        <form>
                                        <p>Por favor, entre com sua conta</p>
                                            <div className="text-center mb-3">
                                                <p>Entre com:</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1" onClick={() => singInWhitFacebook()} disabled={authing}>
                                                    <i className="fab fa-facebook-f"> facebook </i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1" onClick={() => singInWhitGoogle()} disabled={authing}>
                                                    <i className="fab fa-google"> google </i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1" onClick={() => singInWhitTwitter()} disabled={authing}>
                                                    <i className="fab fa-twitter">twitter</i>
                                                </button>


                                            </div>

                                            <p className="text-center">ou:</p>
                                            
                                            

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example11" className="form-control"
                                                    placeholder="E-mail" />
                                                <label className="form-label" >E-mail</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example22" className="form-control" />
                                                <label className="form-label" >Senha</label>
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" >Log in</button>

                                                <a className="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Não tem uma conta?</p>
                                                <button type="button" className="btn btn-outline-danger" ><a href="/register">Criar nova conta</a></button>
                                            </div>

                                        </form>

                                    </div>
                                </div>

                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2" id="loginSegundo" >
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4" >
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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