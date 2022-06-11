//import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contextapi/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
   
// <!-- Navbar Start -->
<div className="container-fluid nav-bar bg-transparent">
  
    <nav className="navbar navbar-expand-lg navbar-dark py-0 px-4">
    <Link to="/" className="navbar-brand d-flex align-items-center text-center">
    {/* <div className="icon p-2 me-2">
    <FontAwesomeIcon icon={faCity} className="headerIcon" />
    </div> */}
            <h1 className="m-auto navbar-brand d-flex align-items-center fs-2">AREC</h1>
        </Link>
        
            
        
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <div className="nav-item dropdown">
                    <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                    <div className="dropdown-menu rounded-0 m-0">
                        <a href="/#" className="dropdown-item">Villas</a>
                        <a href="/#" className="dropdown-item">Appartement</a>
                        <a href="/#" className="dropdown-item">Luxury Container</a>
                        <a href="/#" className="dropdown-item">Lands</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            {/* {user ? user.username : (
          <div className="navItems">
            <button className="btn btn-primary px-3 d-none d-lg-flex">Register</button>
            <button className="btn btn-primary px-3 d-none d-lg-flex">Login</button>
          </div>
        )} */}
        </div>
    </nav>
</div>


  );
};
/* <!-- Navbar End --> */
export default Navbar;
