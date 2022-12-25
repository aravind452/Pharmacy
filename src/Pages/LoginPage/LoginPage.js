import DefaultNavbar from "../../Components/DefaultNavbar/DefaultNavbar";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";

const LoginPage = () => {
  const { setUser } = useUserAuth();

  let navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setUserCredentials((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userCredentials.email === "admin@gmail.com") {
      if (userCredentials.password === "aravind") {
        setUser(userCredentials);
        navigate("/home");
      } else {
        setError("Invalid Password");
      }
    } else {
      setError("Incorrect Credentials");
    }
  }

  return (
    <div className="login-page-section">
      <DefaultNavbar />
      <div className="login-page-container">
        <form>
          <label className="title-login">Login your Account</label>

          <div className="credentials-section">
            <label>Email Address</label>
            <input
              placeholder="Enter your Email Address"
              type="email"
              name="email"
              value={userCredentials.email}
              onChange={handleChange}
            />
          </div>

          <div className="credentials-section">
            <label>Password</label>
            <input
              placeholder="Enter your Password"
              type="password"
              name="password"
              value={userCredentials.password}
              onChange={handleChange}
            />
          </div>

          <p className="err-message">{error && error}</p>

          <p className="no-ac">
            No Account yet ? <Link to="/register">Register Now</Link>
          </p>

          <button className="login-button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
