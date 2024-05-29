import "../styles/Hero.scss";
import Arrow from "../images/Arrow-Right.png";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Top">
        Do you travel by bus? We’re <br />
        currently cooking for you.
      </div>
      <div className="Hero-Mid">
        We are launching the best bus transport deals and booking application to
        help you travel faster and safer.
        <br /> Our team is dedicated to providing easier ways for you to
        schedule your travels, book the exact space <br />
        you want and make payments smoothly.
      </div>
      <div className="Hero-Bottom">
        <div className="Input-Container">
          <input type="email" placeholder="Type email address here" required />
          <button type="submit">
            Join Waitlist <img src={Arrow} alt="Arrow" height="20px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
