import { useState } from "react"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import PrimaryButton from "../PrimaryButton"
import './Formulario.css'

const Formulario = (props) =>{
  

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')


  const aoSalvar = (e)=>{
    e.preventDefault()
    props.aoColaboradorCadastrado({
      nome, 
      cargo, 
      imagem, 
      time
    })
    setNome('')
    setImagem('')
  }
  return(
    <section className="formulario">
      <form onSubmit={aoSalvar} >
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <CampoTexto 
      obrigatorio={true} 
      label="Nome" 
      placeholder="Digite seu nome"
      valor = {nome}
      aoAlterado={valor => setNome(valor)} />

      <CampoTexto 
      obrigatorio={true} 
      label="Cargo" 
      placeholder="Qual seu cargo?"
      valor={cargo}
      aoAlterado={valor => setCargo(valor)} />

      <CampoTexto 
      label="Imagem" 
      placeholder="Informe o endereço da sua imagem" 
      valor = {imagem}
      aoAlterado={valor => setImagem(valor)}/>

      <ListaSuspensa 
      obrigatorio={true} 
      itens={props.times} 
      label="Time" 
      valor={time}
      aoAlterado={valor => setTime(valor)}
      />
      
      <PrimaryButton> Criar Card</PrimaryButton>
      </form>
    </section>
  )
}
export default Formulario