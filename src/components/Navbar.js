import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css";
import Select from 'react-select';

import { HiArrowNarrowLeft } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
     // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [
    { value: "Chennai Super Kings", label: "Chennai Super Kings" },
    { value: "Kolkata Knight Riders", label: "Kolkata Knight Riders" },
    { value: "Delhi Capitals", label: "Delhi Capitals" },
    { value: "Mumbai Indians", label: "Mumbai Indians" },
    { value: "Punjab Kings", label: "Punjab Kings" },
    { value: "Rajasthan Royals", label: "Rajasthan Royals" },
    { value: "Royal Challengers Bangalore", label: "Royal Challengers Bangalore" },
    { value: "Sunrisers Hyderabad", label: "Sunrisers Hyderabad" },
    { value: "Lucknow Super Giants", label: "Lucknow Super Giants" },
    { value: "Gujarat Titans", label: "Gujarat Titans" },
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
    return (
        <div className="navbar">
            <div className="navbar-containerhead">
                <div className="navbar-logostart">
                    <HiArrowNarrowLeft /> 
                    <p>IPL</p>
                </div>
                <div className="navbar-search">
                    <Select options={optionList} onChange={handleSelect} value={selectedOptions} type="text" className="navbar-searchbox" placeholder="Enter team(s)" isMulti/>
                </div>    
                <div className="navbar-logoend">
                    <ImCross />
                </div>
            </div>  
            <div className="navbar-containerfoot">
                <div className="tabs">
                    <NavLink to={"/"} className="tabs-container">
                        <h4>MATCHES</h4>
                    </NavLink>
                    <NavLink to={"/table"} className="tabs-container">
                        <h4>TABLE</h4>
                    </NavLink>
                </div>
            </div>              
        </div>
    )
}

export default Navbar
