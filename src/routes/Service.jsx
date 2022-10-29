import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images/night.jpg"
import Footer from "../components/Footer";

const Service = () => {
  return (
    <>
     <Navbar />
      <Hero
        cName="hero-services"
        heroImg={AboutImg}
        title="Serviços"
        btnClass="hide"
      />
    <Footer/>
    </>
  )
}

export default Service