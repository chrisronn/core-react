import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateContentRightOpen, updateContentRightType } from "../../redux/actions/index";
import urls from "../../urls";

const SiteHeader = () => {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const openSearch = (e) => {
    e.preventDefault();
    dispatch(updateContentRightOpen(true));
    dispatch(updateContentRightType("search"));
  }

  const openProfile = (e) => {
    e.preventDefault();
    dispatch(updateContentRightOpen(true));
    dispatch(updateContentRightType("profile"));
  }

  return (

    <header id="siteHeader" className="main-header fixed-top">
      
      <a href={urls.URL_HOME} className="brand-link">
      <span>&nbsp;</span>
      </a>
            
      <nav className="navbar navbar-expand-sm">
              
        <button className="navbar-dark navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
            
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
            <span className="nav-header">CRM</span>
            </li>
            <li className="nav-item">
              <Link to="/customer/list" className="nav-link">Kunder</Link>
            </li>
            <li className="nav-item">
              <Link to="/customer/create" className="nav-link">Ny kund</Link>
            </li>
          </ul>
        </div>   

        <ul className="navbar-nav ml-auto navbar-tools">
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <a className="nav-link" id="navsearch" href="/" onClick={openSearch}>
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="navprofile" href="/" onClick={openProfile}>
              <i className="fas fa-user-circle"></i><span className="nav-link-text ml-2">{user.firstname} {user.lastname}</span>
            </a>
          </li>
        </ul>

      </nav>
          
    </header>
  );
      
};

export default SiteHeader;
