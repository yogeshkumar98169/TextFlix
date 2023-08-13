import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">

        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link
            className="nav-item nav-link"
            to="/about"
          >
            {props.aboutText}
          </Link>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
          <input className="form-check-input " type="checkbox" role="switch" id="ModeEnabler" onClick={props.toggleMode} />
        </div>
      </div>

    </nav >
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Todos-list",
  aboutText: "About Todos-list",
};
