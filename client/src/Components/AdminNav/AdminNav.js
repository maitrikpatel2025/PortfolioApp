import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { links } from "../AdminNav/AdminNavItem"

class AdminNav extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <div className="container">
                    <div className="col px-3 bg-light border">
                        <nav style={{ color: "black" }} className="nav  m-2 justify-content-center " >
                            {links.map((link) => (

                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    activeClassName={link.activeClassName}
                                    activeStyle={{
                                        backgroundColor: "#6f42c1",
                                        color: "white",
                                        borderRadius: "5px"
                                    }}
                                >
                                    <li className="nav-link">{link.name}</li>
                                </NavLink>

                            ))}
                            <NavLink to="/logout" > <li className="nav-link justify-content-end">Log Out</li></NavLink>
                        </nav>
                    </div>
                </div>
            );
        } else {
            return (
                <div>

                </div>
            );
        }
    }
    render() {
        return (
            <div className="AdminNav">
                {this.renderLinks()}
            </div >
        );
    };
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, null)(AdminNav);