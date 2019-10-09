import React, { Component } from "react";
import { connect} from "react-redux";

import { getUser } from "../redux/actions/index";

import SiteLayout from './layout/SiteLayout';

/*
setLayoutHeights () {

  var windowHeight = window.innerHeight;
  var siteHeaderHeight = document.getElementById('siteHeader').clientHeight;
  var siteFooterHeight = document.getElementById('siteFooter').clientHeight;
  var contentLeftHeight =  document.getElementById('contentLeft') ? document.getElementById('contentLeft').clientHeight : 0;

  var max = windowHeight;
  if(contentLeftHeight > windowHeight) {
    max = contentLeftHeight;
  }
  var offset = 1;
  var contentHeight = max - siteHeaderHeight - siteFooterHeight - offset;
  var sidebarHeight = max - siteHeaderHeight - offset;

  this.$store.dispatch('setLayoutHeights', {contentHeight, sidebarHeight});
}
*/

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

export default connect(null, { getUser })(App);
