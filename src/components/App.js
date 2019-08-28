import React, { Component } from "react";

import { connect } from "react-redux";
import { getUser } from "../redux/actions/index";

import SiteLayout from './layout/SiteLayout';

export class App extends Component {

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <SiteLayout />
      </div>
    );
  }
}

export default connect(null, { getUser })(App);
