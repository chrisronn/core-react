import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateContentRightOpen } from "../../redux/actions/index";

function SiteRight() {

  const contentRightType = useSelector(state => state.contentRightType);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  let profileDisplay = contentRightType === "profile" ? { display: 'block' } : { display: 'none' }; 
  let searchDisplay = contentRightType === "search" ? { display: 'block' } : { display: 'none' }; 
  let cardDisplay = contentRightType === "card" ? { display: 'block' } : { display: 'none' }; 

  const closeContentRight = (e) => {
    e.preventDefault();
    dispatch(updateContentRightOpen(false));
  }

    return (
      <aside className="control-sidebar">

      <div className="sidebar-content profile" style={profileDisplay}>
          
        <div className="sidebar-content-header clearfix">
          <h5 className="float-left">Profil</h5>
          <a className="sidebar-close float-right" href="/" title="Stäng" onClick={closeContentRight}><i className="fas fa-times"></i></a>
        </div>
            
        <div className="mt-1 text-center profile-avatar-icon"><i className="fas fa-user-circle"></i></div>
          <div className="mt-1 text-center"><strong>{user.fullname}</strong></div>
        <div className="mt-1 text-center"> {user.email}</div>

        <button className="btn btn-default btn-block mt-3" data-toggle="modal" data-target="#genericModal"><i className="fa fa-cog mr-2"></i>Inställningar</button>

        <button className="btn btn-default btn-block mt-3" data-toggle="modal" data-target="#genericModal"><i className="fa fa-sign-out-alt mr-2"></i>Logga ut</button>

      </div>

      <div className="sidebar-content search" style={searchDisplay}>
          
        <div className="sidebar-content-header">
          <h5 className="float-left">Sök</h5>
          <a className="sidebar-close float-right" href="/" title="Stäng" onClick={closeContentRight}><i className="fas fa-times"></i></a>
        </div>
              
        <div className="input-group mb-2">
        <input type="text" className="form-control search-nav" id="searchFT" name="searchFT" />
        <div className="input-group-prepend">
        <button name="search" id="global-search-btn" className="btn btn-default" data-toggle="modal" data-target="#genericModal"><i className="fa fa-search"></i></button>
        </div>
        </div>

      </div>

      <div className="sidebar-content cardcontent" style={cardDisplay}>
          
        <div className="sidebar-content-header">
          <h5 className="float-left">Empty</h5>
          <a className="sidebar-close float-right" href="/" title="Stäng" onClick={closeContentRight}><i className="fas fa-times"></i></a>
        </div>
          
      </div>

    </aside>
    );
}

export default SiteRight;