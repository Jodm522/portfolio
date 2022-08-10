import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./why.css";

function Why() {
//   const dispatch = useDispatch();
//   useEffect(() => {}, [dispatch]);

  return (
  <>
   <div className="aboutMeDiv">
   
    <div className="nameDiv">Why</div>
      <div className="aboutMe1">Why did you click that?</div>
      <div className="aboutMe2">You were already here. Did you think it would take you to another portfolio site? Why would I make 2? One is enough. Making 2 would take time away from making other things. Instead of making that I made this. Are you just clicking buttons? Did you think they wouldn't work? Of course they do, you had to click at least 1 to get to the resume page. I really thought about it for a while. Whether or not I should even add a portfolio link button to my "interactive resume", but I decided to. I decided to because It seemed like the "interactive resume" should match my actual resume as much as possible. I honestly regret promising an interactive resume. I made it up. I don't actually think an "interactive resume" is a thing. But here we are, an "interactive resume". You interacted and have been reprimanded for it appropriately. I'll add a button below to return you to the page you came from. Thanks for interacting I guess.  If you end up contacting me please mention the "why" page on the portfolio site. Likely by then I'll have forgotten making this page at all and will be very confused, but will rediscover this page and probably have a giggle. At any rate, have a good day. I know they're more and more often far and few between.</div>
      <div className="aboutMe2">It's a bit funny how résumé in its "englishified" form is also the word for continuing where you left off, and here you are. About to continue from where you left off.</div>
      <a class="resumeLeftButtonLink" href="/resume">Resume</a>
   </div>
  </>
 )
}
export default Why;
