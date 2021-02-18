import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import { links } from "../NavBar/NavBarItem";
import ColorChange from "../Button/ColorChange";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #00000;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ul {
    padding-right: 100px;
    display: flex;
    list-style: none;
    display: flex;
    cursor: pointer;
    z-index: 1;
    flex-flow: row nowrap;
  }
  li {
    padding: 30px;
    color: #000000;
    font-weight: 600;
    font-size: 15px;
    opacity: 1;
  }
  .logo {
    position: relative;
    padding: 20px 0;
    padding-left: 120px;
  }
  @media only screen and (max-width: 800px) {
    ul {
      display: none;
    }
    .logo {
      position: relative;
      padding: 20px 30px;
    }
  }
`;

const TopNav = () => {
  return (
    <div className="TopNav">
      <Nav>
        <div className="logo">
          <Logo />
        </div>
        <ul>
          {links.map((link) => (
            <NavLink
              to={link.to}
              activeClassName={link.activeClassName}
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "2px solid black",
              }}
            >
              <li>{link.name}</li>
            </NavLink>
          ))}
        </ul>
      </Nav>
    </div>
  );
};
export default TopNav;
