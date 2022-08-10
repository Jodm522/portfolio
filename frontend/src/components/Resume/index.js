import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./resume.css";

function Home() {
//   const dispatch = useDispatch();
//   useEffect(() => {}, [dispatch]);

  return (
  <>
   <div className="resumeDiv">
    <div className="resumeHeader"><div className="resumeName">James Mayfield</div><div className="resumeSubTitle">Software Developer</div></div>
   </div>
   <div className="resumeBody">

    <div className="resumeLeft">

    <div className="resumeLeftBlock">
     {/*Project Links */}
    <div className="resumeLeftBlockHead">Contact</div>

    <div className="resumeLeftItemBlock">
        <a class="resumeLeftButtonLink" href="mailto:jomayfield522@gmail.com" rel="noopener noreferrer" target="_blank">Email</a>

    </div>
    <div className="resumeLeftItemBlock">
    <a class="resumeLeftButtonLink" href="https://www.linkedin.com/in/james-mayfield-809702217/" target="_blank">LinkedIn</a>
        
    </div>
    <div className="resumeLeftItemBlock">
    <a class="resumeLeftButtonLink" href="https://angel.co/u/james-mayfield-4" target="_blank">AngelList</a>
    </div>

    </div>

   {/*Project Links */}
    <div className="resumeLeftBlock">
    <div className="resumeLeftBlockHead">Projects</div>
    <div className="resumeLeftItemBlock">
    <a class="resumeLeftButtonLink" href="/why">Portfolio</a>
    <div className="resumeLeftItemBody"> My portfolio site. Made using React and JS.</div>
    </div>
    <div className="resumeLeftItemBlock">
    <a class="resumeLeftButtonLink" href="http://progenitor-wyrm.herokuapp.com/" target="_blank">Progenitor Wyrm</a>
    <div className="resumeLeftItemBody">A D&D character creator. Made using JS, React, Redux, AWS, Python, Flask. (Solo) </div>
    </div>
    <div className="resumeLeftItemBlock">
    <a class="resumeLeftButtonLink" href="https://etsywishlist.herokuapp.com/" target="_blank">Regetsy</a>
    <div className="resumeLeftItemBody">An Etsy Wishlist app. Made using JS, (Team) </div>
    </div>
    <div className="resumeLeftItemBlock">
    <a class="resumeLeftButtonLink" href="https://darkoverflow.herokuapp.com/" target="_blank">Dark Overflow</a>
    <div className="resumeLeftItemBody">An Etsy Wishlist app. Made using JS, (Team) </div>
    </div>

    </div>
    </div>



    <div className="resumeRight">uuu</div>
   </div>
  </>
 )
}
export default Home;
