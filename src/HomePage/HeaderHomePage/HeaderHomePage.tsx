import '../HeaderHomePage/HeaderHomePage.css'
import React, { useEffect, useState } from 'react';



function HeaderHomePage(props: { photoUser: any; emailUser: any; uidUser: any; displayName: any; }) {
    const { photoUser, emailUser, uidUser, displayName } = props;

    
        const [isOpen, setIsOpen] = useState(false)

    return (

        <div id="headerHomePagePrincipal">



            {/* <div id='tableHeaderHomePage'>
                <a className='tableHCQP'>{displayName}</a>
                <img src={photoUser} id='photoUser'></img>
            </div> */}

            <button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</button>
            {isOpen && (
                <aside>
                    <h2>Menu Lateral</h2>
                    <nav>
                        <ul>
                            <li><a href="#">Opção 1</a></li>
                            <li><a href="#">Opção 2</a></li>
                            <li><a href="#">Opção 3</a></li>
                        </ul>
                    </nav>
                </aside>
            )}
        
        </div >

    )
}

export default HeaderHomePage