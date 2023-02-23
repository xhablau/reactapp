import '../HeaderHomePage/HeaderHomePage.css'
import React, { useEffect, useState } from 'react';
import { isPremium } from '../BodyHomePage/BodyHomePage';
// import { isPremium } from '../BodyHomePage/BodyHomePage';



function HeaderHomePage(props: { photoUser: any; emailUser: any; uidUser: any; displayName: any; }) {
    const { photoUser, emailUser, uidUser, displayName } = props;

    const [isOpen, setIsOpen] = useState(false);
    let plano 
    if(isPremium[0] === true){
        plano = "/planos"
    } else{
        plano = "/planos"
    }

    return (

        <div id="headerHomePagePrincipal">
            <div id="tableHeaderHomePage">
                <a className="tableHCQP">{displayName}</a>
                <img src={photoUser} id="photoUser" />
            </div>

            <div className="pos-f-t">
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" onClick={() => setIsOpen(true)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>

            {isOpen && (
                <aside style={{backgroundColor:'rgb(34, 33, 33)'}}>
                    <h2>Menu Lateral</h2>
                    <div>
                        <img src={photoUser} id="photoUser" />
                        <a className="tableHCQP">{displayName}</a>
                    </div>


                    <nav>
                        <ul>
                            <li><a href={plano}>Contratar Plano</a></li>
                            <li><a href="#">Opção 2</a></li>
                            <li><a href="#">Opção 3</a></li>
                        </ul>
                    </nav>
                    <button onClick={() => setIsOpen(false)}>X</button>
                </aside>
            )}

        </div>

    )
}

export default HeaderHomePage