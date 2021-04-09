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
                    <div className="col px-2 bg-light border">
                        <nav class="nav justify-content-center m-2">
                            {links.map((link) => (

                                <NavLink
                                    to={link.to}
                                    activeClassName={link.activeClassName}
                                    activeStyle={{
                                        backgroundColor: "#0d6efd",
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

export default connect(mapStateToProps)(AdminNav);