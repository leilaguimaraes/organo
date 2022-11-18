import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import PrimaryButton from "../PrimaryButton"
import './Formulario.css'

const Formulario = () =>{
  const times= [
    'Programação',
    'Fron-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (e)=>{
    e.preventDefault()
    console.log("Form foi submetido")
  }
  return(
    <section className="formulario">
      <form onSubmit={aoSalvar} >
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
      <CampoTexto obrigatorio={true} label="Cargo" placeholder="Qual seu cargo?" />
      <CampoTexto label="Imagem" placeholder="Informe o endereço da sua imagem" />
      <ListaSuspensa obrigatorio={true} itens={times} label="Time" />
      <PrimaryButton> Criar Card</PrimaryButton>
      </form>
    </section>
  )
}
export default Formulario