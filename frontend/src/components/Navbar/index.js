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
const aboutMeNav=()=>{
  navigate("/about")
}
const contactNav=()=>{
  navigate("/contact")
}
const resumeNav=()=>{
  navigate("/resume")
}
  return (
  
   <div className="navbarContainer">
    <div className="homeIcon" onClick={()=>goHome()}><FontAwesomeIcon icon="chess-rook" /></div>
    <div className="navbarRight">
    <div className="navbarDiv" onClick={()=>aboutMeNav()}> <div className="divNumber">1. </div> About me</div>
    <div className="navbarDiv" onClick={()=>contactNav()}><div className="divNumber">2. </div> Contact me</div>
    <div className="navbarDiv"onClick={()=>resumeNav()}><div className="divNumber"  >3. </div>Interactive résumé</div>
    <div className="navbarDiv"><div className="divNumber">4. </div> My projects</div>
    <div className="navbarDiv"><div className="divNumber">5. </div> My games</div>

    </div>
    </div>
  
 )
}
export default Navbar;
