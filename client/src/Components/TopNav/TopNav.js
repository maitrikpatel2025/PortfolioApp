import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import { links } from "../NavBar/NavBarItem";
import * as actions from "../../Action/toggleWork";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #00000;
  -webkit-box-pack: justify;
  justify-content: space-between;
  ul {
    margin-right: 200px;
    display: flex;
    list-style: none;
    display: flex;
    cursor: pointer;
    z-index: 1;
    flex-flow: row nowrap;
  }
  li {
    padding: 30px;
	  font-size:14px;
    color: #656B8E;
    font-weight: 600;
    font-size: 15px;
    opacity: 1;
  }
  .logo {
    position: relative;
    padding: 20px 0;
    padding-left: 120px;
  }
  @media only screen and (max-width: 700px) {
    ul {
      display: none;
    }
    .logo {
      position: relative;
      padding: 20px 30px;
    }
  }
`;

class TopNav extends Component {
  state = {}
  render() {
    const { toggleProject } = this.props
    return (<div className="TopNav">
      <Nav>
        <div className="logo">
          <Logo />
        </div>
        <ul>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              activeClassName={link.activeClassName}
              activeStyle={{
                borderBottom: "2px solid #656B8E",
              }}
            >
              <li onClick={toggleProject}>{link.name}</li>
            </NavLink>
          ))}
        </ul>
      </Nav>
    </div>);
  }
}

export default connect(null, actions)(TopNav);
