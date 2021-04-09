import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { links } from "./NavBarItem";
import * as actions from "../../Action/navigation";
import CloseIcons from "../Icons/CloseIcons";
import { NavLink } from "react-router-dom";
import MenuIcons from "../Icons/MenuIcons";
import TopNav from "../TopNav/TopNav";

const Ul = styled.ul`
  display: none;
  padding-left: 80px;
  padding-top: 80px;
  @media (max-width: 700px) {
    display: inline-block;
    flex-flow: column nowrap;
    background-color: #ffffff;
    opacity: 0.9;
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 1;
    width: 100%;
    padding-left: 80px;
    padding-top: 80px;
    transition: transform 0.3s ease-in-out;
    li {
      padding: 18px 10px;
      display: flex;
      color: #000000;
      padding: 20px;
      font-weight: 600;
      font-size: 15px;
      opacity: 1;
    }
  }
`;

class NavBar extends Component {
  render() {
    const { isMenuOpen, toggleMenu } = this.props;

    return (
      <div className="navigation-menu">
        <div className="show-topnav">
          <TopNav/>
        </div>
        {isMenuOpen ? (
          <CloseIcons onClick={toggleMenu} />
        ) : (
          <MenuIcons onClick={toggleMenu} />
        )}
        <Ul isMenuOpen>
          {isMenuOpen
            ? links.map((link) => (
                <NavLink
                  to={link.to}
                  activeClassName={link.activeClassName}
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid #000000",
                  }}
                >
                  <li onClick={toggleMenu}>{link.name}</li>
                </NavLink>
              ))
            : ""}
        </Ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
  };
};

export default connect(mapStateToProps, actions)(NavBar);
