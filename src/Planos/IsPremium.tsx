import HeaderHomePage from "../HomePage/HeaderHomePage/HeaderHomePage"




function IsPremium() {
    const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
    const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
    const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
    const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');
    const diffDays = JSON.parse(sessionStorage.getItem('diffDays') || '{}');

    const isMensal = JSON.parse(sessionStorage.getItem('isMensal') || '{}');
    const isTrimestral = JSON.parse(sessionStorage.getItem('isTrimestral') || '{}');  
    const isSemestral = JSON.parse(sessionStorage.getItem('isSemestral') || '{}');
     let mensalidade

    if (isMensal === true ){
      mensalidade = " no plano Mensal"
    } else if (isTrimestral === true) {
      mensalidade = " no plano Trimestral"
    } else if (isSemestral === true) {
      mensalidade = " no plano Semestral"
    } else{
      mensalidade =""
    }


    return (

        <div >
          <HeaderHomePage
          photoUser={photoUser}
          emailUser={emailUser}
          uidUser={uidUser}
          displayName={displayName}/>
          <div>
            {displayName} você é usuário Premium{mensalidade}! Falta {diffDays} dias para terminar o seu premium. 
          </div>

        </div>

    )
}

export default IsPremium