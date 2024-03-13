import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark py-3 navbar-fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img
            className="img-logo"
            src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
          />
        </Link>
        <div className="d-flex">
          <Link to="/planetas" className="nav-link">
            <h5>Planetas</h5>
          </Link>
          <Link to="/people" className="nav-link">
            <h5>Personajes</h5>
          </Link>
          <Link to="/vehiculos" className="nav-link">
            <h5>Vehiculos</h5>
          </Link>
          <Link to="/naves" className="nav-link">
            <h5>Naves</h5>
          </Link>
          <Link to="/pelis" className="nav-link">
            <h5>Pelis</h5>
          </Link>
          {/* <Link to="/demo" className="nav-link">
            <button className="btn btn-warning">Favorites</button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};