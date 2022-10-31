import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/images/5.jpg";
import Trip2 from "../assets/images/8.jpg";
import Trip3 from "../assets/images/6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Viagens recentes</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        perspiciatis corrupti.
      </p>
      <div className="tripcard">
        <TripData 
        image={Trip1} 
        heading="Viagem na Indonésia" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, soluta
        dicta eos temporibus accusamus incidunt maiores quas repellendus quidem
        sit nostrum, vel exercitationem veritatis voluptates eaque praesentium
        laudantium rerum vitae." />
        <TripData 
        image={Trip2} 
        heading="Viagem na Malásia" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, soluta
        dicta eos temporibus accusamus incidunt maiores quas repellendus quidem
        sit nostrum, vel exercitationem veritatis voluptates eaque praesentium
        laudantium rerum vitae." />
        <TripData 
        image={Trip3} 
        heading="Viagem na França" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, soluta
        dicta eos temporibus accusamus incidunt maiores quas repellendus quidem
        sit nostrum, vel exercitationem veritatis voluptates eaque praesentium
        laudantium rerum vitae." />
      </div>
    </div>
  );
};

export default Trip;
