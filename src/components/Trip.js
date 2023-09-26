import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="trip-card">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="With its incredible diversity, India is a feast for the senses for people around the world, with its colour, character, philosophy and organised chaos. All my life I have revelled in this and considered myself very fortunate to be a part of it. For such diversity and vibrancy elsewhere much harder."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is one of the largest countries in the world of tourism. The country is located on the north coast of the island of Borneo. To the north is the South China Sea. These tourists are attracted to Malaysia because it is beautiful with natural and modern touches, and its tourist spots are quite far away."
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="It was a great feeling to arrive in Paris and see the city of light. I will never forget when I first went through, passing the canals and seeing the monuments. It was like a huge open-air museum. It was love at first sight."
        />
      </div>
    </div>
  );
}

export default Trip;
