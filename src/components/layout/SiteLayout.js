import React from 'react';
import { useSelector } from "react-redux";

import SiteHeader from './SiteHeader'
import SiteRight from './SiteRight'
import SiteFooter from './SiteFooter'
import SiteContent from './Content'
import GenericModal from './GenericModal'

const SiteLayout = () => {

  const contentHeight = useSelector(state => state.contentHeight);
  const sidebarClass = useSelector(state => state.sidebarClass);
  const contentRightOpen = useSelector(state => state.contentRightOpen);
  
  let contentStyle = {
    minHeight: contentHeight + "px"
  };

  let contentRightClass = contentRightOpen ? 'control-sidebar-slide-open' : '';
  
  return (
    <div className={sidebarClass + " " +contentRightClass}>
      <div className="wrapper">

        <SiteHeader />

      <div className="floating-message text-center icon-loader" style={{ display: 'none' }}><i className="fas fa-spinner fa-spin"></i></div>

      <div className="content-wrapper whatever" style={contentStyle}>      
            <SiteContent />
        </div> 
        <div id="sidebar-overlay"></div>

        <SiteFooter />
        <SiteRight />    
      </div>
      
      <GenericModal />

    </div>
  );
      
};

export default SiteLayout;