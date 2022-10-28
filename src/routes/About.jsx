import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images/night.jpg"

const About = () => {
  return (
    <>
     <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Sobre nós"
        btnClass="hide"
      />
    </>
  )
}

export default About