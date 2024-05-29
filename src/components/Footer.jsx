import "../styles/Footer.scss";
import Logo from "../images/Logo.png";
import copy from "../images/copy.png";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-Left">
        <img src={Logo} alt="Logo" width="250px" />
        <span>
          161, Kandelia Bara Street, Off Sanusi <br /> Fafunwa, VI, Lagos.
        </span>
        <span className="Call">
          +2349012452602 <img src={copy} alt="copy" />
        </span>
      </div>
      <div className="Footer-Mid">
        <ol>
          <li>Company</li>
          <li>About</li>
          <li>Terms</li>
          <li>Policy</li>
        </ol>
      </div>
      <div className="Footer-Right">
        <ol>
          <li>Social</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Linkedn</li>
        </ol>
      </div>
    </footer>
  );
};

export default Footer;
