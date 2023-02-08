import '../HeaderHomePage/HeaderHomePage.css'
import { displayName, photoUser } from '../HomePage'



function HeaderHomePage() {
    displayName;
    photoUser;

    return (

        <div id="headerHomePagePrincipal">
            <div id='tableHeaderHomePage'>
                <a className='tableHCQP'>{displayName}</a>
                <img src={photoUser} id='photoUser'></img>
            </div>

        </div>

    )
}

export default HeaderHomePage