import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { setUser } = useUserAuth();

  let navigate = useNavigate();

  function handleLogout() {
    setUser({});
    navigate("/");
  }
  return (
    <header className="header">
      <nav className="navbar-container">
        <ul>
          <li className="title-class">
            <Link to="/home">Pharmacy Management System</Link>
          </li>
          <li className="empty-li-class"></li>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/cart">MY CART</Link>
          </li>
          <li>
            <Link to="/orders">MY ORDERS</Link>
          </li>
          <li>
            <p onClick={handleLogout}>LOGOUT</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
