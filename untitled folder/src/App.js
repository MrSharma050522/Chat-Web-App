import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import ChatPage from "./Components/ChatPage";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import { useSelector } from "react-redux";

function App() {
  const userDetails = useSelector(state => state.userDetails);
  return (
    <Router>
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route exact path="/" >
          {userDetails ? <Navigate to="/contact" /> : <Home />}
          </Route> */}
        <Route path="/" element={userDetails ? <Navigate to="/groupChat" /> : <Home />} />
        <Route path="/groupChat" element={<Sidebar />} />
        {/* <Route  path="/home" element={Home}/>
        <Route  path="/about" element={About}/>
        <Route  path="/contact" element={Contact}/> */}
      </Routes>
      <div>
      </div>
    </Router>
  );
}

export default App;
