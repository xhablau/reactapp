import '../HeaderHomePage/HeaderHomePage.css'



function HeaderHomePage(props: { photoUser: any; emailUser: any; uidUser: any; displayName: any; }) {
    const { photoUser, emailUser, uidUser, displayName } = props;

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