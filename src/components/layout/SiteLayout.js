import React from 'react';

import SiteHeader from './SiteHeader'
import SiteRight from './SiteRight'
import SiteFooter from './SiteFooter'
import SiteContent from './Content'
import GenericModal from './GenericModal'


function SiteLayout() {
    return (
      <div>
        <div className="wrapper">

            <SiteHeader />

          <div className="floating-message text-center icon-loader" style={{ display: 'none' }}><i className="fas fa-spinner fa-spin"></i></div>

            <div className="content-wrapper">      
                <SiteContent />
            </div> 
            <div id="sidebar-overlay"></div>

            <SiteFooter />
            <SiteRight />    
        </div>
        
        <GenericModal />

    </div>
    );
}

export default SiteLayout;