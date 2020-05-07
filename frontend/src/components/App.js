import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import { Provider } from 'react-redux'
import store from '../store'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
    };
  }

  // componentDidMount() {
  //   fetch("api/lead")
  //     .then((res) => {
  //       if (res.status > 400) {
  //         this.setState({
  //           placeholder: "Something went wrong!",
  //         });
  //       }
  //       return res.json();
  //     })
  //     .then((data) => this.setState({ data, loaded: true }));
  // }

  render() {
    return (
      // <ul>
      //   {this.state.data.map((contact) => (
      //     <li key={contact.id}>
      //       {contact.name} - {contact.email}
      //     </li>
      //   ))}
      // </ul>
      <Provider store={store}>
        <>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app"));
