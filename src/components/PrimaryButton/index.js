import'./PrimaryButton.css'
const PrimaryButton =(props)=>{
return(
  <button className='botao'>
    {props.children}
  </button>
)
}
export default PrimaryButton;