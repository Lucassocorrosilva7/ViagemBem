import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images/2.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
       <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contato"
        btnClass="hide"
        
      />
      <ContactForm 
        heading="Envie uma mensagem para nós!"
        name="Nome"
        lastName="Sobrenome"
        email="E-mail"
        btn="Enviar"
      />
      <Footer/>
    </>
  )
}

export default Contact