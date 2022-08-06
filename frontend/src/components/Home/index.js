import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./home.css";

function Home() {
//   const dispatch = useDispatch();
//   useEffect(() => {}, [dispatch]);

  return (
  <>
   <div className="aboutMeDiv">
    <div className="greetingDiv">Hey, I'm </div>
    <div className="nameDiv">James Mayfield.</div>
      <div className="aboutMe1">Fresh programmer looking for my chance to break into the industry and prove myself.</div>
      <div className="aboutMe2">I'm a software engineer specializing in teamwork and AAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
   </div>
  </>
 )
}
export default Home;
