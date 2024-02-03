import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../asset/images.jpg"
import "./navbarComponent.css"
// import Navbaro from "./Navbar";

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
        height: 50,
        backgroundColor: bgColor ? bgColor : "#2862ff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
    <nav className="navbar w-100 navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Starter</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none " href="#">MDMenu</a>
        </li>
      </ul>
      <span className="navbar-text  d-flex justify-items-center justify-content-end">
        <img src={img} alt="" className=" img img-fluid rounded-circle" />
      </span>
    </div>
  </div>
</nav>
    </div>
  );
}

export default NavbarComponent;
