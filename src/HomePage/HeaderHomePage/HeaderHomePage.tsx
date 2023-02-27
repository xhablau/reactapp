import '../HeaderHomePage/HeaderHomePage.css'
import React, { useEffect, useState } from 'react';
import { isMensal } from '../BodyHomePage/BodyHomePage';
import { isTrimestral } from '../BodyHomePage/BodyHomePage';
import { isSemestral } from '../BodyHomePage/BodyHomePage';




function HeaderHomePage(props: { photoUser: any; emailUser: any; uidUser: any; displayName: any; }) {
    const { photoUser, emailUser, uidUser, displayName } = props;

    const [isOpen, setIsOpen] = useState(false);
    let plano
    if (isMensal[0] === true || isTrimestral[0] === true || isSemestral[0] === true) {
        plano = "/planos"
    } else {
        plano = "/planos"
    }

    return (

        <div id="headerHomePagePrincipal">
            <div id="tableHeaderHomePage">
                <a className="tableHCQP">{displayName}</a>
                <img src={photoUser} id="photoUser" />
            </div>

            <div className="pos-f-t">
                <nav className="navbar navbar-red bg-red" >
                    <button className="navbar-toggler" id='navbarHeader' type="button" onClick={() => setIsOpen(true)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>

            {isOpen && (
                <aside style={{ backgroundColor: 'rgb(34, 33, 33)', display:'flex', flexDirection:'column' }}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <img src={photoUser} id="photoUser" />
                        <a className="tableHCQP">{displayName}</a>
                    </div>


                    <nav>
                        <ul>
                            <li><a href={plano} >Contratar Plano</a></li>
                            <li><a href="#">Opção 2</a></li>
                            <li><a href="#">Opção 3</a></li>
                        </ul>
                    </nav>
                    <button type="button" style={{marginTop:'100%'}} className="btn btn-secondary btn-sm" onClick={() => setIsOpen(false)}>X</button>
                </aside>
            )}

        </div>

    )
}

export default HeaderHomePage