import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import img from "../../asset/images.jpg"
import "./navbarComponent.css"
// import UserDropdown from "./Dropdown";
// import Navbaro from "./Navbar";
import { BsThreeDots } from "react-icons/bs";
import MenuAlignEndExample from "./Dropdown";

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
        height: 50,
        backgroundColor: bgColor ? bgColor : "#2862ff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
      <nav className="navbar navbar-expand-md navbar-dark bg-lightblue-100">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Starter</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <BsThreeDots style= {{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                    <MenuAlignEndExample/>
                </li>
            </ul>
        </div>
    </div>
</nav>
    {/* <Navbaro /> */}
    </div>
  );
}

export default NavbarComponent;
