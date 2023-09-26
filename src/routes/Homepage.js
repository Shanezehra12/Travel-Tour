import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import HomeImage from '../assets/12.jpg'

function Homepage() {
  return (
    <>
    <Navbar/>
    <Hero
    cName = "hero"
    HeroImg = {HomeImage}
    title = "Your Journey Your Story"
    text = "Choose Your Favourite Destination."
    buttonText = "Travel Plan"
    url = "/"
    btnClass = "show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  );
}

export default Homepage;