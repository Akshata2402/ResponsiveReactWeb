import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import PageNotFound from "./Component/PageNotFound";
import Courses from "./Component/Courses"

import React from 'react'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/About" Component={About}/>
            <Route path="/courses" Component={Courses}/>
            <Route path="/Contact" Component={Contact}/>
            <Route path="*" Component={PageNotFound}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App
