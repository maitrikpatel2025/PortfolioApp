import React, { Component }   from "react";
import { connect }            from "react-redux";
import { Link }               from "react-router-dom";

import Modal                  from "../../Modal/Modal";
import history                from "../../../history";
import { fetchCertification }        from "../../../Action/certification";
import { deleteCertification }       from "../../../Action/certification";

class CertificationsDelete extends Component {

  componentDidMount() {
    this.props.fetchCertification(this.props.match.params.id);
  }


  renderAction() {
      const {id}=this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={()=>this.props.deleteCertification(id)} className="ui button negative"> Delete</button>
        <Link to={`certification`} className="ui button">
          cancel
        </Link>
      </React.Fragment>
    );
  }


  renderContent() {
    if (!this.props.certification) {
      return "Are you sure you want to delete the certifications ?";
    }
    return `Are you sure you want to delete the certifications with title: ${this.props.certification.cert_name} ?`;
  }


  render() {
    return (
      <div>
        <Modal
          title="Delete certifications"
          content={this.renderContent()}
          actions={this.renderAction()}
          onDismiss={() => history.push("/admin/certification")}
        />
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    certification: state.certification[ownProps.match.params.id],
  };
};


export default connect(mapStateToProps, { fetchCertification, deleteCertification })(
  CertificationsDelete
);