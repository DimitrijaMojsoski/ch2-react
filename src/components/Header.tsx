import "./header.css";
import logo from "../images/logo.png"; 

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#" className="active">
              HOME
            </a>
          </li>
          <li>
            <a href="#">BIKES</a>
          </li>
          <li>
            <a href="#">PARTS</a>
          </li>
          <li>
            <a href="#">TIRES</a>
          </li>
          <li>
            <a href="#">SERVICE-INFO</a>
          </li>
          <li>
            <a href="#">CATALOGUES</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-icons">
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-bag"></i>
      </div>
    </nav>
  );
};
