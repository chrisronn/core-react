import React from "react";

//import { connect} from "react-redux";

//import { getUser } from "../redux/actions/index";
//import { updateLayoutContentStyle } from "../redux/actions/index";

import SiteLayout from './layout/SiteLayout';

/*
var layoutHeights = () => {

  const windowHeight = window.innerHeight;
  const siteHeaderHeight = document.querySelector('#siteHeader').clientHeight;
  const siteFooterHeight = document.querySelector('#siteFooter').clientHeight;
  const contentLeftHeight =  document.querySelector('#contentLeft') ? document.querySelector('#contentLeft').clientHeight : 0;

  const max = contentLeftHeight > windowHeight ? contentLeftHeight : windowHeight;
  const offset = 1;
  const contentHeight = max - siteHeaderHeight - siteFooterHeight - offset;
  const sidebarHeight = max - siteHeaderHeight - offset;

  console.log("contentHeight: " + contentHeight);
  console.log("sidebarHeight: " + sidebarHeight);

  return contentHeight;

};
*/
const App = () => {  


/*
  UNSAFE_componentWillMount() {
    this.props.getUser();
  }

  componentDidMount() {    
    this.props.updateLayoutContentStyle({'minHeight': layoutHeights() + 'px' })
    //window.addEventListener('resize', this.props.updateLayoutContentStyle({'minHeight': layoutHeights() + 'px' })); 
  }
*/
  
  return (
    <div>
      <SiteLayout />
    </div>
  );
  
}

export default App;
