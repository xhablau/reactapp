import HeaderHomePage from "../HomePage/HeaderHomePage/HeaderHomePage"
import premiumimg from '../img/premium.jpeg'




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
  let dias

  if (isMensal === true) {
    mensalidade = " no plano Mensal"
  } else if (isTrimestral === true) {
    mensalidade = " no plano Trimestral"
  } else if (isSemestral === true) {
    mensalidade = " no plano Semestral"
  } else {
    mensalidade = ""
  }

  if (diffDays === null) {
    dias = ""
  } else {
    dias = "Falta " + diffDays + " dias para terminar o seu premium."
  }


  return (

    <div >
      <HeaderHomePage
        photoUser={photoUser}
        emailUser={emailUser}
        uidUser={uidUser}
        displayName={displayName} />
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <img src={premiumimg}></img>
        <h3>{displayName} você é usuário Premium{mensalidade}!  {dias}  </h3>
      </div>

    </div>

  )
}

export default IsPremium