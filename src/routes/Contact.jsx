import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images/2.jpg"
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
       <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Contato"
        btnClass="hide"
      />
      <Footer/>
    </>
  )
}

export default Contact