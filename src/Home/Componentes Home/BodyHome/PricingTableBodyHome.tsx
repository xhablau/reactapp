// import { PricingCard } from 'react-native-elements';




function PricingTableBodyHome() {


  return (
    <div id='testea'>
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Grátis</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mês</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 usuários</li>
              <li>2 GB de armazenamento</li>
              <li>Suporte por email</li>
              <li>Acesso ao centro de ajuda</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Cadastre-se de graça</button>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mês</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 usuários</li>
              <li>10 GB de armazenamento</li>
              <li>Suporte por email prioritário</li>
              <li>Acesso ao centro de ajuda</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">Conhecer</button>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Premium</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mês</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 usuários</li>
              <li>15 GB de armazenamento</li>
              <li>Suporte por email e telefone</li>
              <li>Acesso ao centro de ajuda</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">Contate-nos</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PricingTableBodyHome