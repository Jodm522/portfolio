// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SmashBoys from "./components/Smashboys";
import Home from "./components/Home";
// import  NavBar from "./components/Navbar"
import About from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume"
import Why from "./components/Why";
import Games from "./components/Games";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  return (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/smashboys" element={<SmashBoys />}></Route>
          <Route path= "/about" element={<About />}></Route>
          <Route path= "/contact" element={<Contact />}></Route>
          <Route path= "/resume" element={<Resume />}></Route>
          <Route path= "/why" element={<Why />}></Route>
          <Route path = "/games"  element = {<Games />}></Route>

        </Routes>

  );
}

export default App;
