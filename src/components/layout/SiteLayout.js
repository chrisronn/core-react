import React from 'react';
import { connect, useSelector } from "react-redux";

import SiteHeader from './SiteHeader'
import SiteRight from './SiteRight'
import SiteFooter from './SiteFooter'
import SiteContent from './Content'
import GenericModal from './GenericModal'


const SiteLayout = () => {

    const layoutContentStyle = useSelector(state => state.layoutContentStyle);
  
    return (
      <div>
        <div className="wrapper">

            <SiteHeader />

          <div className="floating-message text-center icon-loader" style={{ display: 'none' }}><i className="fas fa-spinner fa-spin"></i></div>

            <div className="content-wrapper" style={layoutContentStyle}>      
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

export default connect(
  null
)(SiteLayout);