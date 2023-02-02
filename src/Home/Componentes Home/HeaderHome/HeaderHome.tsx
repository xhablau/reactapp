import '../HeaderHome/HeaderHome.css'
import LogoVermelha from '../../../img/logoVermelha.png'
import LogoBranca from '../../../img/logoBranca.png'
import LogoPreta from '../../../img/logoPreta.jpeg'




function HeaderHome() {
    

    return (
        
        <div id="headerPrincipal">
            
            <button id='buttonHeaderLogin' >   <a href="/login" id='btnLoginAluno'>Área do Aluno</a> </button>
            
            <div id='tableLogo'>
                <img src={LogoBranca} id='logo'></img>
                <div id='tableHeaderHome'>
                    <a className='tableHCQP' href="/">Home</a>
                    <a className='tableHCQP' href="/ContactUs">Contato</a>
                    <a className='tableHCQP' href="/AboutUs">Quem somos</a>
                    <a className='tableHCQP' href="/login">Planos</a>
                </div>

            </div>



        </div>

    )
}

export default HeaderHome