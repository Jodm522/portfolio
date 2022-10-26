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
      <div className="aboutMe1">I'm a software engineer.</div>
      <div className="aboutMe2">I'm ready to start building great things and join a team in need. I specialize in unique solutions, out-of-the-box thinking, and pushing my tools and abilities to their limits. I'm hoping to break in, learn my place, and grow my skills.</div>
      <div className="smashBoysHolder">
        <div className="SmashBoysText">I've made a game using HTML canvas and react, try it out here:</div>
        <a className="smashBoysAnchor"href = "/smashboys">
          <img className="smashBoysBanner"src={"./smashBoys/SmashBoysLogo.png"} alt="Smashboys Banner"></img>
        </a>
         
      </div>
        

   </div>
  </>
 )
}
export default Home;
