// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SmashBoys from "./components/Smashboys";
import Home from "./components/Home";
import  NavBar from "./components/Navbar"

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
        </Routes>

  );
}

export default App;
