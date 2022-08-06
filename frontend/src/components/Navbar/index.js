import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import "./navbar.css";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import {faChessRook} from '@fortawesome/free-solid-svg-icons'
library.add(faChessRook)


function Navbar() {
//   const dispatch = useDispatch();

//   useEffect(() => {}, [dispatch]);
let navigate = useNavigate(); 

const goHome = ()=>{
  navigate("/")
}
  return (
  
   <div className="navbarContainer">
    <div className="homeIcon" onClick={()=>goHome()}><FontAwesomeIcon icon="chess-rook" /></div>
   
   
    <div className="navbarRight">a;sldfja;sdlkfjas</div>
    </div>
  
 )
}
export default Navbar;
