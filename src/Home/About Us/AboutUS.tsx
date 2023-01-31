
import HeaderHome from '../Componentes Home/HeaderHome/HeaderHome'
import BodyHome from '../Componentes Home/BodyHome/BodyHome'
import FooterHome from '../Componentes Home/FooterHome/FooterHome'
import academia from '../../img/academia.jpg'
import '../About Us/AboutUs.css'







function AboutUs() {


    return (
        <div>
            
            <HeaderHome />
            <div style={{ backgroundImage: `url(${academia})`, backgroundSize: 'cover' }} id='imgAboutUs'>
                <div id='txtAboutUsPrincipal'>
                    <h1 style={{ color: 'white' }}>
                        Sobre Nós
                    </h1>
                    <div id='txtAboutUs'>
                        O nosso site foi criado com o objetivo de ajudar as pessoas a alcançar seus objetivos de fitness de forma eficiente e personalizada.
                        Nós acreditamos que todos merecem ter acesso a um programa de treinamento e dieta de alta qualidade,
                        e é por isso que usamos a tecnologia da inteligência artificial para criar planos personalizados para cada um de nossos usuários.
                        Não importa qual seja o seu objetivo - seja perder peso, ganhar músculos ou apenas ficar mais saudável -,
                        nós estamos aqui para ajudá-lo a chegar lá. Não perca mais tempo e junte-se a nós agora mesmo. Juntos, vamos transformar sua vida!
                    </div>
                </div>

            </div>
            <FooterHome />
        </div>


    )
}

export default AboutUs