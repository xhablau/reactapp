import HeaderHomePage from "../HomePage/HeaderHomePage/HeaderHomePage"




function IsPremium() {
    const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
    const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
    const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
    const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

    return (

        <div >
          <HeaderHomePage
          photoUser={photoUser}
          emailUser={emailUser}
          uidUser={uidUser}
          displayName={displayName}/>
          <div>
            {displayName} você é usuário Premium! Falta 60 dias para terminar o seu premium.
          </div>

        </div>

    )
}

export default IsPremium