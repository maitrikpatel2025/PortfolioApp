

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from 'moment'
import { fetchContacts } from "../../../Action/contacts";


class contactList extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    renderAdmin(contact) {
        return (
            <div className="ui two buttons">
                <Link to={`contact/edit/${contact._id}`} className="ui button primary">
                    EDIT
          </Link>
                <Link
                    to={`contact/delete/${contact._id}`}
                    className="ui button negative"
                >
                    DELETE
          </Link>
            </div>
        );
    }

    renderList() {
        return this.props.contacts.map((contact) => {
            return (
                <div className="card">
                    <div className="content" key={contact._id}>

                        <div className="header">

                            {contact.cont_name}

                        </div>
                        <p className="description">{contact.cont_email}</p>
                        <p className="description">{contact.cont_message}</p>
                        <p className="description">{moment(`${contact.cont_date}`).format('MMMM Do YYYY')}</p>
                        {this.renderAdmin(contact)}

                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="contact List">
                <h1 style={{ textAlign: "center" }} >List of all contact</h1>
                <div className="ui cards">{this.renderList()}</div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        contacts: Object.values(state.contact),
    };
};


export default connect(mapStateToProps, { fetchContacts })(contactList);
