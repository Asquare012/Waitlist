import "../styles/Benefit.scss";
import first from "../images/i.png";
import second from "../images/ii.png";
import third from "../images/iii.png";
import fourth from "../images/iv.png";

const Benefit = () => {
  return (
    <div className="Benefit">
      <div className="Benefit-Top">Some benefits</div>
      <div className="Benefit-Bottom">
        <ul>
          <li>
            <div className="Item-Top">
              <span>Book Easily</span>
              <img src={first} height="70%" width="80%" alt="first" />
            </div>
            <div className="Item-Bottom">
              <span>Make bookings quickly</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              adipiscing velit libero erat.
            </div>
          </li>
          <li>
            <div className="Item-Top">
              <span>Compare</span>
              <img src={second} height="70%" width="80%" alt="second" />
            </div>
            <div className="Item-Bottom">
              <span>Hot Deals</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              adipiscing velit libero erat.
            </div>
          </li>
          <li>
            <div className="Item-Top">
              <span>Got Deals</span>
              <img src={third} height="70%" width="80%" alt="third" />
            </div>
            <div className="Item-Bottom">
              <span>Get amazing deals</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              adipiscing velit libero erat.
            </div>
          </li>
          <li>
            <div className="Item-Top">
              <span>Dashbaord</span>
              <img src={fourth} height="70%" width="80%" alt="fourth" />
            </div>
            <div className="Item-Bottom">
              <span>Manage your custom dashboardy</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              adipiscing velit libero erat.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Benefit;
