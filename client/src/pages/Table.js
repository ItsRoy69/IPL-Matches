import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import "../styles/Table.css";
import axios from "axios";

const Table = () => {

  
  return (
    <div className="table" id='match'>
      <Navbar />
      <div className="matches">
        
      </div>
    </div>
  )
}

export default Table
