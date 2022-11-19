import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=>{
  return(
    //nós aqui em baixo colocamos uma condição de se o array for maior que zero, retornar o código ao lado. Poderiamos também tem colocado um operador ternario dessa forma- primaira conição ? acontecimento : segundo possivel acontecimento. assim poderiamos ter uma div com uma mensagem caso nao tivessemos cada escrito
    props.colaboradores.length > 0 &&
    <section className='time' style={{ backgroundColor: props.corSecundaria}}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <div className='colaboradores' >
        {props.colaboradores.map(colaborador => 
        <Colaborador 
          corDeFundo={props.corPrimaria}
          key={colaborador.nome} 
          nome={colaborador.nome} 
          cargo={colaborador.cargo} 
          imagem= {colaborador.imagem}
          />)} 
        
      </div>
    </section>
  )
}
export default Time