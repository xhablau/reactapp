import LogoVermelha from '../../../img/logoVermelha.png'
import LogoBranca from '../../../img/logoBranca.png'
import LogoPreta from '../../../img/logoPreta.jpeg'
import '../BodyHome/BodyHome.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';



function CarouselBodyHome() {
  

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={LogoBranca} id="img" className="teste" ></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={LogoVermelha} id="img" className="teste" ></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={LogoPreta} id="img" className="teste" ></img>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselBodyHome