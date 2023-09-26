import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/5.jpg'
import Mountain4 from '../assets/8.jpg'

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tour gives you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
      className="first-desc"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is a large caldera in Batangas that was formed by
      prehistoric eruptions. In the wake of the eruptions, it was
      eventually filled by Taal Lake. Throughout history it has erupted
      about 38 times, making it the second most active volcano in the
      Philippines. While it is usually known to only have one crater, the
      volcano is actually a complex volcano system that consists of 47
      volcanic craters. Its most popular crater is the Binintiang Malaki
      cone on the volcano's northwestern tip. This now dormant crater is
      also what you can see from nearby Tagaytay City and nearby towns.
      Meanwhile, its Main Crater Lake is the biggest crater in the system.
      This lake used to contain a small island called Vulcan Point."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
      className= "first-desc-reverse"
        heading="Mt. Daguldol, Batangas"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas. 
        It offers a scenic view of nearby Batangas mountains and beaches. Additionally, 
        Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in 
        Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan 
        and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.
        The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. According to locals, 
        the mountain was named as such because it describes the magnificence of the mountain range and the 
        blunt rolling of its slopes. Mt. Daguldol has a total trail length of nine kilometers."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
