import '../HeaderHomePage/HeaderHomePage.css'



function HeaderHomePage() {

    const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
    const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
    const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
    const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

    // photoUser.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    // let myVariable: string | undefined;
    // const value: string | null = ...;
    // myVariable = value || undefined;

    console.log("uidUser", uidUser)
    console.log("emailUser", emailUser)
    console.log("photoUser", photoUser)
    console.log("displayName", displayName)



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