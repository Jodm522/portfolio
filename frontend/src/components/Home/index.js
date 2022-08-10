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
      <div className="aboutMe1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div className="aboutMe2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
   </div>
  </>
 )
}
export default Home;
