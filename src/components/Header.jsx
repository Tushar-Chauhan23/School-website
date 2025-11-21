// import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Heading.css"
import logo from  "../assets/images.png"
function Heading()
{
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"10px 100px"}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Bright Home Public School" height="40" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/academics">
                    Academics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admissions">
                    Admissions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/faculty">
                    Faculty
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/students">
                    Students
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
export default Heading