import React, { Component } from "react";

import { connect } from "react-redux";
import { getUser } from "../redux/actions/index";

import SiteLayout from './layout/SiteLayout';

export class App extends Component {

  componentDidMount() {
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

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { getUser }
)(App);
