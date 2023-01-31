import '../BodyHome/BodyHome.css'
import CarouselBodyHome from './CarouselBodyHome';

import PricingTableBodyHome from './PricingTableBodyHome';
import AboutUs from '../../About Us/AboutUS';
import WhyHire from './WhyHire';



function BodyHome() {


    return (

        <div id='BodyHomePrincipal'>

            <CarouselBodyHome />
            <WhyHire />
            <PricingTableBodyHome />



        </div>
    )
}

export default BodyHome