import "./ContactFormStyles.css"

const ContactForm = (props) => {
  return (
    <div className='form-container'>
        <h1>{props.heading}</h1>
        <form>
            <input className="hide" type="text" placeholder={props.name} />
            <input className="hide" type="text" placeholder={props.lastName} />
            <input  type="text" placeholder={props.email} />
            <textarea type="text" placeholder='Mensagem' className={props.class} rows="4"></textarea>
            <button>{props.btn}</button>
        </form>
    </div>
  )
}

export default ContactForm