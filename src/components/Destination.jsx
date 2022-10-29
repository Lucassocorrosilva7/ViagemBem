import DestinationData from "./DestinationData";
import Montain1 from "../assets/images/1.jpg";
import Montain2 from "../assets/images/2.jpg";
import Montain3 from "../assets/images/5.jpg";
import Montain4 from "../assets/images/4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
      className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, est. Earum repudiandae recusandae fuga exercitationem
            cupiditate doloremque obcaecati, nihil a vero iusto. Dolorum beatae
            sapiente explicabo eaque blanditiis dicta, hic itaque aliquam."
            img1={Montain1}
            img2={Montain2}
      />
      <DestinationData
      className="first-des-reverse"
        heading="Mt.Daguldul, Batangas"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, est. Earum repudiandae recusandae fuga exercitationem
            cupiditate doloremque obcaecati, nihil a vero iusto. Dolorum beatae
            sapiente explicabo eaque blanditiis dicta, hic itaque aliquam."
            img1={Montain3}
            img2={Montain4}
      />
    </div>
  );
};

export default Destination;
