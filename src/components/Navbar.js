import React from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
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
          <a className="nav-item nav-link active" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/">
            Features
          </a>
          <a className="nav-item nav-link" href="/">
            Pricing
          </a>
          <a
            className="nav-item nav-link"
            href="/"
            tabIndex="-1"
            aria-disabled="true"
          >
            {props.aboutText}
          </a>
        </div>
      </div>
      <div class={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'} mx-5`}>
        <input class="form-check-input" type="checkbox" role="switch" id="ModeEnabler" onClick={props.toggleMode} />
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
