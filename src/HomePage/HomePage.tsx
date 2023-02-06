import HeaderHomePage from "./HeaderHomePage/HeaderHomePage";



function HomePage() {
   
    const photoUser = sessionStorage.getItem('photoUser');
    const emailUser = sessionStorage.getItem('emailUser');
    const uidUser = sessionStorage.getItem('uidUser');
    const displayName = sessionStorage.getItem('displayName');
    
    console.log("uidUser",uidUser)
    console.log("emailUser",emailUser)
    console.log("photoUser",photoUser)
    console.log("displayName",displayName)

    return (


        <div>
            <HeaderHomePage/>
        </div>






    )
}

export default HomePage