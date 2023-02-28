import BodyHomePage from "./BodyHomePage/BodyHomePage";
import HeaderHomePage from "./HeaderHomePage/HeaderHomePage";


function HomePage() {
     const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
     const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
     const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
     const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

     console.log("ain", displayName)
    
    return (

        <div>
            <HeaderHomePage 
              photoUser={photoUser}
              emailUser={emailUser}
              uidUser={uidUser}
              displayName={displayName}
            />
            <BodyHomePage/>
        </div>

    )
}

export default HomePage
