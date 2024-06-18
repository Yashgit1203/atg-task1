import React from 'react';
import Logo from '../assets/Logo.png';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <div className="cont d-flex justify-content-between align-items-center">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <form className="d-flex align-items-center search_bar">
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            name="q"
            id="q"
            placeholder="Search for your favorite groups in ATG"
          />
        </form>
      </div>

      <div className="d-flex justify-content-around r_most">
        <a
          href="#"
          data-bs-toggle="modal" data-bs-target="#exampleModal"
          style={{ textDecoration: "none", fontWeight: "600" }}
        >
          <span style={{ color: "#2E2E2E" }}>Create account.</span>
          <span style={{ color: "#2F6CE5" }}> It's free!</span>
        </a>
        <div>
          <i className="fa-solid fa-caret-down" style={{ color: "#2E2E2E" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
