import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import Logo from "../images/Logo.png";
import Arrow from "../images/Arrow-Right.png";

const Header = () => {
  return (
    <nav className="Header">
      <ol>
        <li>
          <img src={Logo} alt="Logo" />
        </li>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/faq"}>FAQs</NavLink>
        </li>
        <li>
          <button>
            Join Waitlist <img src={Arrow} alt="Arrow" height="20px"></img>
          </button>
        </li>
      </ol>
    </nav>
  );
};

export default Header;
