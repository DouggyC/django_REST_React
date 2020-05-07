import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addLead } from '../../actions/leads'

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault()

    const lead = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    
    this.props.addLead(lead)
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addLead: PropTypes.func.isRequired
}

export default connect(null, { addLead })(Form);
