import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import "./about.css";
import Shrek from "./shrek.jpg"
import Me from './me.jpg' 
function About() {
//   const dispatch = useDispatch();
//   useEffect(() => {}, [dispatch]);

  return (
  <>
        <div className="aboutMeContainer">


        <div className="aboutMeTitle">About Me</div>
<div className="aboutMePageDiv">
    <div className="aboutMeText">
    Hey, I'm James. I love creating and building interesting and unique things. My experience at App Academy taught me not only how to build and design programs, but also how to work with others to find unique and impressive solutions to complicated problems. My time as an AEMT taught me team dynamics, leadership, and how to remain effective and efficient under pressure. In my current field I've grown from a team member to a team leader, mentor, teacher, and key part of important and effective change. Now I'm ready to use the skills I've learned and mastered to enter a new field, learn it, master it, and with time become as much as an asset as I am in my current field to a new one.
    </div>
    <div className="aboutMeImage">
        <img className="aboutMeImg"src={Me} alt="ME"></img>
    </div>

   </div>
   <div className="aboutMeText2">The entirety of my experiences have taught me how to both work in a team and how to learn my role quickly. My experiences as a captain have taught me how to be an effective leader, as well as how to me an effective member of a team. My time as a training officer helped me realize what I need to learn and adapt to situations quickly. I hope to use my skills and abilities to join a new team and integrate quickly, so I can rapidly become an effective and integral part.</div>

        </div>
   

  </>
 )
}
export default About;
