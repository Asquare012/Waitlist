import "../styles/FaQ.scss";
import Accordion from "./Accordion";

const FaQ = () => {
  return (
    <div className="FaQ">
      <div className="FAQ-Title">
        <div className="Head">We have answered a few questions</div>
        <div className="Body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio bibendum
          tortor non nisl, neque. Non morbi aliquet dictum imperdiet nibh ac
          pulvinar a aenean. Augue justo, feugiat ornare risus nisi a in hac.
          Leo viverra facilisi massa velit ullamcorper sit. Faucibus rhoncus
          neque vitae iaculis facilisis pretium.
        </div>
      </div>
      <div className="FAQ-Content">
        <Accordion />
      </div>
    </div>
  );
};

export default FaQ;
