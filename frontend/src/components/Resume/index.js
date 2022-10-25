import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./resume.css";
import AAletter from "./SWE Online February 2021-0017.jpg"
import shrek from "./shrek.jpg"
import ResuModal from "./resumodal";
import cSharpCert from "./CSharpCert.jpg"
function Home() {
//   const dispatch = useDispatch();
//   useEffect(() => {}, [dispatch]);
const [showmodal, setShowModal]= useState(false);
const closeModal = ()=>{
    setShowModal(false)
}
   const [certToShow,setCertToShow] =useState(shrek)
  return (
   
  <>
  {showmodal && <ResuModal certToShow={certToShow} closeModal={closeModal}></ResuModal>}
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
    
    <div className="resumeLeftBlock">
     {/*Project Links */}
    <div className="resumeLeftBlockHead">Languages</div>

    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(AAletter); setShowModal(true)}}>
     Javascript
    </div>
    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(AAletter); setShowModal(true)}}>
     React & Redux
    </div>
    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(AAletter); setShowModal(true)}}>
     HTML & CSS
    </div>
    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(AAletter); setShowModal(true)}}>
     Git/Github
    </div>
    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(AAletter); setShowModal(true)}}>
    Python
    </div>
    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(AAletter); setShowModal(true)}}>
     Flask
    </div>
    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(AAletter); setShowModal(true)}}>
    SQL
    </div>
    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(cSharpCert); setShowModal(true)}}>
    C#
    </div>
    <div className="resumeLeftButtonLink" onClick={()=>{setCertToShow(AAletter); setShowModal(true)}}>
    jQuery
    </div>
        </div>
    </div>
    </div>



    <div className="resumeRightBlock">
        <div className="resumeRightHead">Detail-oriented, driven, and observant employee.  Experienced in fast paced and high-stress environments
and tight deadlines. Enthusiastic team player ready to contribute to company success. Constantly trying to
learn more and willing to step up to do what is needed.</div>
<div className="resumeRightDivider">Projects</div>
<div className="resumeRightProjectBlock">
<a class="resumeLeftButtonLink" href="https://darkoverflow.herokuapp.com/" target="_blank">Dark Overflow</a>
    <div className="projectSubTitle">JavaScript, HTML5, CSS3, Pug, Express</div>
    <div className="projectDescription">StackOverflow Clone</div>
    <div className="projectDescList">
        <li className="projectDescItem">Implemented voting, comment and forum features using basic CRUD functionality.</li>
        <li className="projectDescItem">Applied customized design and functionality to the react-quill library for smooth user
experience in rich text editing.</li>
        <li className="projectDescItem">Harnessed the unidirectional state management of Redux to simplify React
components and directly manage data for form inputs and form submissions.
</li>
    </div>
    
</div>
<div className="resumeRightProjectBlock">
<a class="resumeLeftButtonLink" href="https://etsywishlist.herokuapp.com/" target="_blank">Regetsy</a>
    <div className="projectSubTitle">JavaScript, React, Redux, CSS3, PostgreSQL, Express</div>
    <div className="projectDescription">Scheduling App</div>
    <div className="projectDescList">
        <li className="projectDescItem">Applied customized design and functionality to the react-quill library for smooth user
experience in rich text editing.
</li>
        <li className="projectDescItem">Harnessed the unidirectional state management of Redux to simplify React
components and directly manage data for form inputs and form submissions.</li>
        <li className="projectDescItem">Created custom SQL queries and reduced server load through the utilization of Active
Record associations to extract data from multiple tables in a single query.
</li>
    </div>
</div>

<div className="resumeRightProjectBlock">
<a class="resumeLeftButtonLink" href="http://progenitor-wyrm.herokuapp.com/" target="_blank">Progenitor Wyrm</a>
    <div className="projectSubTitle">JavaScript, React, Redux, CSS3, PostgreSQL, Express</div>
    <div className="projectDescription">Dungeons and Dragons character creator and manager</div>
    <div className="projectDescList">
        <li className="projectDescItem">Implemented character creation and saving.
</li>
        <li className="projectDescItem">Created complicated functions to calculate stats and return appropriate values.
</li>
        <li className="projectDescItem">Used React to move appropriate data easily and efficiently.

</li>
    </div>
</div>
<div className="resumeRightDivider">Work History</div>
<div className="workHistoryBlock">
    <div className="workDates">05/2020-Present</div>
    <div className="workInfoBlock">
        <div className="workTitle">Advanced EMT/Shift Captain</div>
        <div className="workLocation">Murray-Calloway County EMS, Murray,ky
</div>
        <div className="workDetails">
            <li className="workDetailItem">Maintained levelheadedness and efficiency in high-pressure situations, effectively
prioritizing tasks to save lives and provide medical care.
</li>
            <li className="workDetailItem">Administered treatments in stressful situations with accuracy, safety and speed.</li>
            <li className="workDetailItem">Coordinated and managed shift and crews to efficiently provide county needs.
</li>
        </div>
    </div>
</div>
<div className="workHistoryBlock">
    <div className="workDates">04/2021- present</div>
    <div className="workInfoBlock">
        <div className="workTitle">Training Officer</div>
        <div className="workLocation">Murray-Calloway County EMS, Murray,ky
</div>
        <div className="workDetails">
            <li className="workDetailItem">Evaluated success of training programs and recommended improvements to upper
management to enhance effectiveness.
</li>
            <li className="workDetailItem">Identified training needs and planned classes accordingly.
</li>
            <li className="workDetailItem">Trained EMTs in basic life support skills, oxygen therapy and wound care.

</li>
        </div>
    </div>
</div>
<div className="workHistoryBlock">
    <div className="workDates">04/2021-Present</div>
    <div className="workInfoBlock">
        <div className="workTitle">Inventory and Asset Manager
</div>
        <div className="workLocation">Murray-Calloway County EMS, Murray,ky
</div>
        <div className="workDetails">
            <li className="workDetailItem">Labeled, organized and located inventory items in staging areas or on shelves
according to quantity, size or type of material.</li>
            <li className="workDetailItem">Trained new staff on job duties, company policies and safety procedures for rapid
onboarding.
</li>
            <li className="workDetailItem">Organized records of vehicles, schedules and training needs.
</li>
        </div>
    </div>
</div>
<div className="resumeRightDivider">Education</div>
<div className="workHistoryBlock">
    <div className="workDates">02/2021-07/2021</div>
    <div className="schoolInfoBlock">
        <div className="workTitle">Full Stack Web Development
</div>
        <div className="workLocation">App Academy, New York, New York

</div>
        
    </div>
</div>
<div className="workHistoryBlock">
    <div className="workDates">08/2015-05/2019</div>
    <div className="schoolInfoBlock">
        <div className="workTitle">Biology, Bachelor of Science

</div>
        <div className="workLocation">Murray State University, Murray, Ky

</div>
        
    </div>
</div>
</div>

   </div>
  </>
 )
}
export default Home;
