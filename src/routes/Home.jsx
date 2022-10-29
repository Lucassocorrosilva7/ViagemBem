import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/images/hero.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Lorem, ipsum."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quo."
        btnText="Lorem ipsum"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
    </>
  );
};

export default Home;
