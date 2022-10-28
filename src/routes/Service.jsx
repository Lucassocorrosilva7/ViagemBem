import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images/night.jpg"

const Service = () => {
  return (
    <>
     <Navbar />
      <Hero
        cName="hero-services"
        heroImg={AboutImg}
        title="Sobre nós"
        btnClass="hide"
      />
    </>
  )
}

export default Service