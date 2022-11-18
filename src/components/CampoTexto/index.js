import './CampoText.css'
const CampoTexto = (props)=>{
let valor = '';
  const aoDigitar=(evento)=>{
    valor= evento.target.value //armazenando o valor do input numa variável
  }
  return (
    <div className="campo-texto">
      <label>
        {props.label}
        </label>
      <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto