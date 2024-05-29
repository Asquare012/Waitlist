import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import Logo from "../images/Logo.png";
import Arrow from "../images/Arrow-Right.png";
import hamburger from "../images/hambugger.png";
import closeHam from "../images/closeHam.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuButton = () => {
    setMenu(!menu);
  };
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
        <li>
          <img
            src={menu ? closeHam : hamburger}
            alt="hamburger"
            height="25px"
            onClick={handleMenuButton}
          />
        </li>
      </ol>

      {menu && (
        <div className="Menu">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/faq"}>FAQs</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
