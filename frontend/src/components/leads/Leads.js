import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

export class Leads extends Component {
  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Message</td>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className="btn btn-danger btn-sm">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

// const mapDispatchToProps = () => ({
//     doGetLeads: getLeads()
// })

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads })(Leads);
