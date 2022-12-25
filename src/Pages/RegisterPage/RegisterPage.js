import DefaultNavbar from "../../Components/DefaultNavbar/DefaultNavbar";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import useRegisterForm from "../../Hooks/useRegisterForm";
import ValidateRegisterValues from "../../Utils/ValidateRegisterValues";

const RegisterPage = () => {
  const { handleChange, handleSubmit, userValues, errors, loader } =
    useRegisterForm(ValidateRegisterValues);
  return (
    <div>
      <DefaultNavbar />
      <div className="register-page-section">
        <div className="register-page-container">
          <form>
            <label className="title-login">Registration Page</label>

            <div className="credentials-section">
              <label>Name</label>
              <input
                placeholder="Enter your Name"
                type="text"
                name="name"
                value={userValues.name}
                onChange={handleChange}
              />
              <p className="err-message">
                {errors.name && <span>{errors.name}</span>}
              </p>
            </div>
            <div className="credentials-section">
              <label>Email</label>
              <input
                placeholder="Enter your Email ID"
                type="email"
                name="email"
                value={userValues.email}
                onChange={handleChange}
              />
              <p className="err-message">
                {errors.email && <span>*{errors.email}</span>}
              </p>
            </div>
            <div className="credentials-section">
              <label>Confirm Email</label>
              <input
                placeholder="Confirm your Email ID"
                type="email"
                name="confirm_email"
                value={userValues.confirm_email}
                onChange={handleChange}
              />
              <p className="err-message">
                {errors.confirm_email && <span>*{errors.confirm_email}</span>}
              </p>
            </div>
            <div className="credentials-section">
              <label>Password</label>
              <input
                placeholder="Enter your Password"
                type="password"
                name="password"
                value={userValues.password}
                onChange={handleChange}
              />
              <p className="err-message">
                {errors.password && <span>*{errors.password}</span>}
              </p>
            </div>
            <div className="credentials-section">
              <label>Confirm Password</label>
              <input
                placeholder="Confirm Password"
                type="password"
                name="confirm_password"
                value={userValues.confirm_password}
                onChange={handleChange}
              />
              <p className="err-message">
                {errors.confirm_password && (
                  <span>*{errors.confirm_password}</span>
                )}
              </p>
            </div>
            <p className="no-ac">
              have an Account ? <Link to="/">Login Now</Link>
            </p>
            <button className="register-button" onClick={handleSubmit}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
