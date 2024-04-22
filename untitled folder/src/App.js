import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import ChatPage from "./Components/ChatPage";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* <Route path="/:text" element={<ChatPage/>}/> */}
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
