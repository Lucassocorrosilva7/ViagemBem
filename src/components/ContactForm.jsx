import "./ContactFormStyles.css"

const ContactForm = (props) => {
  return (
    <div className='form-container'>
        <h1>{props.heading}</h1>
        <form>
            <input type="text" placeholder={props.name} />
            <input type="text" placeholder={props.lastName} />
            <input type="text" placeholder={props.email} />
            <textarea type="text" placeholder='Mensagem' rows="4"></textarea>
            <button>{props.btn}</button>
        </form>
    </div>
  )
}

export default ContactForm