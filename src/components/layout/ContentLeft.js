import React from 'react';
import { useSelector} from "react-redux";
import { NavLink } from "react-router-dom";

const ContentLeft = () => {

  const customer = useSelector(state => state.customer);
  const sidebarHeight = useSelector(state => state.sidebarHeight);

  let sidebarStyle = {
    minHeight: sidebarHeight + "px"
  };

  return (

    <aside id="contentLeft" className="main-sidebar" style={sidebarStyle}>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" role="menu" data-accordion="false">
              
            <li className="nav-item">
              <NavLink to={'/customer/' + customer.id} activeClassName="active" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>Kundkort</p>
              </NavLink>
            </li>
                
            <li className="nav-item">
              <NavLink to={'/customer/' + customer.id + '/edit'} activeClassName="active" className="nav-link">
                  <i className="nav-icon fas fa-info-circle"></i>
                  <p>Information</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/customer/' + customer.id + '/contacts'} activeClassName="active" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>Kontakter</p>
              </NavLink>
            </li>
              
          </ul>
        </nav>
      </div>
    </aside>
  )
};

export default ContentLeft;