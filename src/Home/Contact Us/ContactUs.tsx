
import FooterHome from '../Componentes Home/FooterHome/FooterHome'
import HeaderHome from '../Componentes Home/HeaderHome/HeaderHome'
import React from "react"
import '../Contact Us/ContactUs.css'


function ContactUs() {
    

    return (
        <div>
            <HeaderHome />

            <div id="PrincipalContactUs">

                <input type="text" name="telefone" id="telefone" placeholder="Digite um número de telefone" maxLength={15} />
                <form>
                    <div className="form-group">
                        <label >Endereço de email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" autoComplete='on' ></input>
                        <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>

                    </div>
                    <div className="form-group">
                        <label >Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"></input>

                    </div>
                    <div className="form-group">
                        <label >Nome</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nome Completo"></input>

                    </div>
                    <div className="form-group">
                        <label >Telefone</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="(99) 99999-9999" maxLength={15} ></input>

                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
            <FooterHome />
        </div>


    )
}

export default ContactUs
