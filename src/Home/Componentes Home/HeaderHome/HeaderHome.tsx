import '../HeaderHome/HeaderHome.css'
import LogoVermelha from '../../../img/logoVermelha.png'
import LogoBranca from '../../../img/logoBranca.png'
import LogoPreta from '../../../img/logoPreta.jpeg'
import { useState } from 'react';
import { Link } from 'react-router-dom';




function HeaderHome() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="navbar navbar-expand-lg navbar-red bg-red fixed-top" style={{ paddingTop: '0' }}>
            <div id="headerPrincipal">

                <button id='buttonHeaderLogin' >   <a href="/login" id='btnLoginAluno'>Área do Aluno</a> </button>

                <div className="container">
                    <div style={{width:'58%'}}>
                        <img src={LogoBranca} id='logo'></img>
                    </div>
                    <button className="navbar-toggler" onClick={() => setIsOpen(true)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">

                        </span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">

                        <ul className="navbar-nav ">
                            <li className="nav-item ">                                
                                <a className='tableHCQP' href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className='tableHCQP' href="/ContactUs">Contato</a>
                            </li>
                            <li className="nav-item">
                                <a className='tableHCQP' href="/AboutUs">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className='tableHCQP' href="/planosHome">Planos</a>
                            </li>
                        </ul>


                    </div>

                </div>
                {isOpen && (
                    <aside style={{ backgroundColor: '#222121' }}>
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <a className='tableHCQP' href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className='tableHCQP' href="/ContactUs">Contato</a>
                            </li>
                            <li className="nav-item">
                                <a className='tableHCQP' href="/AboutUs">Quem somos</a>
                            </li>
                            <li className="nav-item">
                                <a className='tableHCQP' href="/planosHome">Planos</a>
                            </li>
                        </ul>
                        <button onClick={() => setIsOpen(false)}>X</button>
                    </aside>

                )}


            </div >
        </nav>
    )
}

export default HeaderHome