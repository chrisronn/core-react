import React from 'react';

function ContentLeft() {
    return (
      <aside id="contentLeft" className="main-sidebar">
      <div className="sidebar">
          <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" role="menu" data-accordion="false">
                  
                <li className="nav-item">
                <a href="/" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>Kundkort</p>
                </a>
                </li>
                    
                <li className="nav-item">
                <a href="/" className="nav-link">
                <i className="nav-icon fas fa-info-circle"></i>
                <p>Information</p>
                </a>
                </li>

                <li className="nav-item">
                <a href="/" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>Kontakter</p>
                </a>
                </li>
                  
              </ul>
          </nav>
      </div>
  </aside>
    );
}

export default ContentLeft;