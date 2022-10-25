import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Linking } from 'react'
import { Navigate } from "react-router-dom";
import "./contact.css";

function Contact() {
//   const dispatch = useDispatch();
//   useEffect(() => {}, [dispatch]);

  return (
  <>
   <div className="contactDiv">

    <div className="singleContactPointDiv">
        <div className="contactLinkTitle">Email</div>
        <div className="contactLinkText">Questions? Comments? Job oppoutrunities? Send me an email below. I check this address daily, and I'll get back to you asap.</div>
    <a class="buttonLink" href="mailto:jomayfield522@gmail.com" rel="noopener noreferrer" target="_blank">Email</a>
    </div>
  

    <div className="singleContactPointDiv">
        <div className="contactLinkTitle">LinkedIn</div>
        <div className="contactLinkText">Find me on LinkedIn to contact me or for more info</div>
    <a class="buttonLink" href="https://www.linkedin.com/in/james-mayfield-809702217/" target="_blank">LinkedIn</a>
    </div>
    <div className="singleContactPointDiv">
        <div className="contactLinkTitle">GitHub</div>
        <div className="contactLinkText">Check my GitHub for repos and project info</div>
    <a class="buttonLink" href="https://github.com/Jodm522" target="_blank">GitHub</a>
    </div>
    <div className="singleContactPointDiv">
        <div className="contactLinkTitle">
            AngelList
        </div>
        <div className="contactLinkText">Check My AngelList</div>
    <a class="buttonLink" href="https://angel.co/u/james-mayfield-4" target="_blank">AngelList</a>
    </div>
   </div>
  </>
 )
}
export default Contact;
