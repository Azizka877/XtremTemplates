import React, { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
// import { FaAlignRight } from "react-icons/fa";
import { FaAlignLeft, FaAlignRight } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowsDimention";
import styled from "styled-components";
import logo from "../asset/xtremelogo.svg"
// import "index.scss"
// import { BiMenu } from "react-icons/bi";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const NavbarPaner = styled.div`
  flex: 1;
  position: fixed;
  transition: padding 0.3s;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 2;
  padding: ${({ openedMenu, minViewPort }) =>
  openedMenu ?
    "0px 0px 0 0px" :
    minViewPort ?
      "0px 0px 0 0px" :
      "0px 0px 0 250px"};
`;
const BodyContainer = styled.div`
  display: flex;
`;
const SidebarPaner = styled.div`
  width: ${({ openedMenu }) => (!openedMenu ? "250px" : "0px")};
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0%;
  background-color: #fff;
  transition: width 0.3s;
  z-index: 4;
  overflow-x: hidden
`;
const SideMenuController = styled.div`
position: absolute;
top: 15px;
// right: -30px;
left: 200px;
width: 25px;
height: 25px;
background-color: #fff;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
// border: 2px solid #008fa0;
cursor: pointer;
z-index: 3;
`;
const MenuController = styled.div`
  position: absolute;
  top: 13px;
  // right: -30px;
  width: 25px;
  height: 25px;
  // background-color: #0284c7;
  // border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 2px solid #008fa0;
  cursor: pointer;
  z-index: 3;
`;
const ContaintOutlet = styled.div`
  width: 100%;
  height: 100vh;
  // background-color: red;
  background-color: rgb(241,245,249);//j ai modifier
  transition: padding 0.3s;
  overflow-x: hidden;
  z-index: 1;
  padding: ${({ openedMenu, minViewPort }) =>
  openedMenu ?
    "70px 10px 0 0px" :
    minViewPort ?
      "70px 10px 0 0px" :
      "70px 10px 0 270px"};
`;

const SpliTemplateScreen = ({ children }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [minViewPort, setMinViewPort] = useState(false);

  const [navbar, sidebar, outlet] = children;

  const sidebarRef = useRef(null);

  const { width } = useWindowDimensions();
  const handleResize = () => {
    setOpenedMenu((v) => !v);
  };

  useMemo(() => {
    if (width <= 900) {
      setMinViewPort(true);
      setOpenedMenu(true);
    } else {
      setMinViewPort(false);
      setOpenedMenu(false);
    }
  }, [width]);

  return (
    <Container>
      <NavbarPaner MenuController={MenuController} handleResize={handleResize} openedMenu={openedMenu} minViewPort={minViewPort}>
       { openedMenu ? (<MenuController onClick={handleResize}>
            {openedMenu ? (
              <FaAlignLeft style={{ width: "80px", height: "80px" }} className="menu-controller-icon" />
            ) : (
              <FaAlignRight className="menu-controller-icon" />
            )}
         </MenuController>): ("")}
        {navbar}</NavbarPaner>
      <BodyContainer>
        <SidebarPaner openedMenu={openedMenu} ref={sidebarRef}>
         <div className="d-flex mt-3">
         <img src={logo} alt="" />
        <SideMenuController onClick={handleResize}>
            {openedMenu ? (
              <FaAlignLeft className="menu-controller-icon" />
            ) : (
              <FaAlignRight className="menu-controller-icon" />
            )}
         </SideMenuController>
         </div>
          {sidebar}
        </SidebarPaner>
        <ContaintOutlet openedMenu={openedMenu} minViewPort={minViewPort}>
          {outlet}
        </ContaintOutlet>
      </BodyContainer>
    </Container>
  );
};

export default SpliTemplateScreen;
