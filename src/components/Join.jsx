import "../styles/Join.scss";
import backdropImg from "../images/backdrop-Img.png";
import Arrow from "../images/Arrow-Right.png";

const Join = () => {
  return (
    <div className="Join">
      <div className="Join-Left">
        You can enjoy the above benefits and so much more in one platform. Click
        the button below to join waitlist
        <button>
          Join Waitlist <img src={Arrow} alt="Arrow" height="20px"></img>
        </button>
      </div>
      <div className="Join-Right">
        <img src={backdropImg} alt="backdrop" />
      </div>
    </div>
  );
};
export default Join;
