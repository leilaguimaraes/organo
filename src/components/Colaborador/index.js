import './Colaborador.css'

const Colaborador=({nome, imagem, cargo, corDeFundo})=>{ //aqui no lugar de receber o props, ele desestruturou tudo que ele recebua pra só pegar o nome, imagem, e cargo. assim alí em baixo quando eu uso determinadainformação eu não preciso pegar props,alguma coisa, e só o nome do que eu quero pegar.
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{backgroundColor: corDeFundo}} >
        <img src={imagem} alt={nome}/>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <p>{cargo}</p>
      </div>
    </div>
  )
}
export default Colaborador