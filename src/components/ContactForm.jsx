import "./ContactFormStyles.css"

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Envie uma mensagem para nós!</h1>
        <form>
            <input type="text" placeholder='Nome' />
            <input type="text" placeholder='Sobrenome' />
            <input type="text" placeholder='Email' />
            <textarea type="text" placeholder='Mensagem' rows="4"></textarea>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default ContactForm