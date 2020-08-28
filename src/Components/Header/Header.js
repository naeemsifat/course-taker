import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
           <img src=" https://i.ibb.co/zrVCgnR/download.png" alt=""/>
          
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/#"><img style={{height:'50px'}} src="https://i.ibb.co/GHzWXMt/download.png" alt=""/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/review">Order Review</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/manage">Manage Inventory here</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="/#" tabIndex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </nav>
        
        </div>
    );
};

export default Header;