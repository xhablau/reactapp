import BodyHomePage from "./BodyHomePage/BodyHomePage";
import HeaderHomePage from "./HeaderHomePage/HeaderHomePage";


export const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
export const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
export const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
export const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

function HomePage() {

    return (

        <div>
            <HeaderHomePage/>
            <BodyHomePage/>
        </div>

    )
}

export default HomePage