// import { PricingCard } from 'react-native-elements';




function PricingTableBodyHome() {
  function goLogin() {
    window.location.assign("/login");
  }

  return (
    <div className="card-deck mb-3 text-center" style={{ marginTop: '16%' }}>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Mensal</h4>
        </div>
        <div className="card-body" id='planoMensal'>
          <h1 className="card-title pricing-card-title">R$21,90 <small className="text-muted">/ mês</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>Treino exclusivo</li>
            <li>Dieta exclusivo</li>
            <li>Suporte por Whatsapp</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={goLogin}>Cadastre-se gratuitamente</button>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Trimestral</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">R$18,64<small className="text-muted">/ mês</small> </h1>
          <div><h4>15% </h4> <h6> de desconto </h6> </div>
          <a> R$55,90 no trimestre</a>
          <ul className="list-unstyled mt-3 mb-4">

            <li>Treino exclusivo</li>
            <li>Dieta exclusivo</li>
            <li>Suporte por Whatsapp</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary" onClick={goLogin}>Cadastre-se gratuitamente</button>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Semestral</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">R$16,65 <small className="text-muted">/ mês</small></h1>
          <div><h4>25% </h4> <h6> de desconto </h6> </div>
          <a> R$99,90 no semestre!</a>
          <ul className="list-unstyled mt-3 mb-4">
            <li>Treino exclusivo</li>
            <li>Dieta exclusivo</li>
            <li>Suporte por Whatsapp</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary" onClick={goLogin}>Cadastre-se gratuitamente</button>
        </div>
      </div>
    </div>
  )
}

export default PricingTableBodyHome