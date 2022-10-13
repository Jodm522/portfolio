import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./resumodal.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
library.add(faX)
function ResuModal({certToShow, closeModal}) {
  return (
  <>
   <div className="resumodalDiv">
   
 <img className="aboutMeImg" src={certToShow} alt="ME">
    </img>
    <div className="closeButton" onClick={()=>closeModal()}>
        {"X"}</div>
   </div>
  </>
 )
}
export default ResuModal;
