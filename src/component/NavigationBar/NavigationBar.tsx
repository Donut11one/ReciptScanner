import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faReddit
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TopBar: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div>
          <Logo />
        </div>

        <div className="d-flex gap-3">
          <Link to="/" className="btn btn-dark fw-bold px-4">
            Home
          </Link>
          <Link to="/translate" className="btn btn-dark fw-bold px-4">
            Translate
          </Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          <FontAwesomeIcon icon={faInstagram} className="text-white" />
          <FontAwesomeIcon icon={faFacebook} className="text-white" />
          <FontAwesomeIcon icon={faTwitter} className="text-white" />
          <FontAwesomeIcon icon={faReddit} className="text-white" />
          <FontAwesomeIcon icon={faEnvelope} className="text-white" />

          <button className="btn btn-light fw-bold px-4 ms-3">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
