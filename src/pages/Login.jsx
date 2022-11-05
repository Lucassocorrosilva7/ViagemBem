import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images/2.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Login = () => {
  return (
    <div className="login">
       <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Login"
        btnClass="hide"
      />
      <ContactForm
        heading="Olá! Para continuar, digite o seu telefone, e-mail ou usuário"
        btn="Entrar"
        class="hide"  
        email="Telefone, e-mail ou usuário"
      />
      <Footer/>
    </div>
  )
}


export default Login