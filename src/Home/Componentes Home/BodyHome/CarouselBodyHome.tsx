import LogoVermelha from '../../../img/logoVermelha.png'
import LogoBranca from '../../../img/logoBranca.png'
import LogoPreta from '../../../img/logoPreta.jpeg'
import imgMedidas from '../../../img/imgMedidas.jpeg'
import imgPrincipal from '../../../img/imgPrincipal.jpeg'
import imgTreino from '../../../img/imgTreino.jpeg'
import '../BodyHome/BodyHome.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';



function CarouselBodyHome() {
  

    return (
        <div>
            <Carousel style={{marginTop:'6.91%'}}>
                <Carousel.Item >
                    <img src={imgMedidas} id="img" style={{marginTop:'6.91%', width:'90%', marginLeft:'5%'}} ></img>
                </Carousel.Item>
                <Carousel.Item style={{paddingLeft:'8%'}}>
                    <img src={imgPrincipal} id="img"  style={{marginTop:'6.91%', width:'90%'}}></img>
                </Carousel.Item>
                <Carousel.Item style={{paddingLeft:'8%'}}>
                    <img src={imgTreino} id="img"  style={{marginTop:'6.91%', width:'90%'}}></img>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselBodyHome