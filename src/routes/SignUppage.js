import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import SignForm from "../components/SignForm";

const SignUppage = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="Registration Form"
        btnClass="hide"
      />
      <SignForm />
      <Footer />
    </>
  );
};

export default SignUppage;
