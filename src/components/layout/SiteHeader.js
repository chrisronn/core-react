import React, { Component } from "react";
import { connect } from "react-redux";

export class SiteHeader extends Component {

  render() {
    return (
      <header id="siteHeader" className="main-header fixed-top">

      <a href="/" className="brand-link">
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
        <a href="/" className="nav-link">Kunder</a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">Ny kund</a>
      </li>
      </ul>
      </div>   

      <ul className="navbar-nav ml-auto navbar-tools">
      <li className="nav-item">
      </li>
      <li className="nav-item">
      <a className="nav-link" id="navsearch" href="/">
      <i className="fas fa-search"></i>
      </a>
      </li>
      <li className="nav-item">
      <a className="nav-link" id="navprofile" href="/">
      <i className="fas fa-user-circle"></i><span className="nav-link-text ml-2">{this.props.user.firstname} {this.props.user.lastname}</span>
      </a>
      </li>
      </ul>

      </nav>
            
      </header>
    );
  }    
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SiteHeader);
