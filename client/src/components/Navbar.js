import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";

import { HiArrowNarrowLeft } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-containerhead">
            <div className="navbar-logostart">
                <HiArrowNarrowLeft /> 
                <p>IPL</p>
            </div>
            <div className="navbar-search">
                <input type="text" className="navbar-searchbox" placeholder="Enter team(s)" />
            </div>    
            <div className="navbar-logoend">
                <ImCross />
            </div>
        </div>  
        <div className="navbar-containerfoot">
            <div className="tabs">
                <Link to={"/"} className="tabs-container">
                    <h4>MATCHES</h4>
                </Link>
                <Link to={"/table"} className="tabs-container">
                    <h4>TABLE</h4>
                </Link>
            </div>
        </div>              
    </div>
  )
}

export default Navbar
