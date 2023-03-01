import '../HeaderHomePage/HeaderHomePage.css'
import React, { useEffect, useState } from 'react';
import { startNanoseconds, startSeconds, finalNanoseconds, finalSeconds } from '../BodyHomePage/BodyHomePage';






function HeaderHomePage(props: { photoUser: any; emailUser: any; uidUser: any; displayName: any; }) {
    const { photoUser, emailUser, uidUser, displayName } = props;
    

    const isMensal = JSON.parse(sessionStorage.getItem('isMensal') || '{}');
    const isTrimestral = JSON.parse(sessionStorage.getItem('isTrimestral') || '{}');  
    const isSemestral = JSON.parse(sessionStorage.getItem('isSemestral') || '{}');



    const [isOpen, setIsOpen] = useState(false);
    let plano
    let meuPlano
    if (isMensal === true || isTrimestral === true || isSemestral === true) {
        plano = "/isPremium"
        meuPlano = "Meu"
    } else {
        meuPlano = "Contratar"
        plano = "/planos"
    }

    const timestampStart = {
        seconds: startSeconds as any,
        nanoseconds: startNanoseconds as any,
    };

    const millisecondsStart = (timestampStart.seconds[0] * 1000) + (timestampStart.nanoseconds[0] / 1000000);
    const dateStart = new Date(millisecondsStart);

    const timestampFinal = {
        seconds: finalSeconds as any,
        nanoseconds: finalNanoseconds as any
    };

    const millisecondsFinal = (+timestampFinal.seconds[0] * 1000) + Math.round(+timestampFinal.nanoseconds[0] / 1000000);
    const dateFinal = new Date(millisecondsFinal);

    const diffInMilliseconds = dateFinal.getTime() - dateStart.getTime();
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
    const diffInDaysRounded = Math.round(diffInDays);
console.log("aqui", diffInDaysRounded)
    sessionStorage.setItem('diffDays', JSON.stringify(diffInDaysRounded));


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
                            <li><a href={plano} >{meuPlano} Plano</a></li>
                            <li><a href="/HomePage">Meus Treino</a></li>
                            <li><a href="/Mybody">Meu Corpo</a></li>
                        </ul>
                    </nav>
                    <button type="button" style={{marginTop:'100%'}} className="btn btn-secondary btn-sm" onClick={() => setIsOpen(false)}>X</button>
                </aside>
            )}

        </div>

    )
}

export default HeaderHomePage