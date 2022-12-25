import { Link } from "react-router-dom";
import "./DefaultNavbar.css";

const DefaultNavbar = (props) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Pharmacy Management System</Link>
          </li>
          <li>
            <Link to="/register">Login / Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DefaultNavbar;
