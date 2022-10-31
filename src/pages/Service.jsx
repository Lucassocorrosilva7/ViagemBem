import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images/services.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip"


const Service = () => {
  return (
    <>
     <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Serviços"
        btnClass="hide"
      />
      <Trip/>
    <Footer/>
    </>
  )
}

export default Service