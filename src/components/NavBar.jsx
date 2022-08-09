import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import '../css files/navbar.css';

const NavBar = (props) => {


  return (
    <Router>
      <div className="navBar">
        <div className="links">
          <Link className="options" to="/home">Home</Link>
          <Link className="options" to="/about" onClick={props.clickAbout}>About</Link>
          <Link className="options" to="/resume" onClick={props.clickResume}>Resume</Link>
          <Link className="options" to="/projects" onClick={props.clickProjects}>Projects</Link>
          <Link className="options" to="/activities">Activities</Link>
          <Link className="options" to="/statistics">Statistics</Link>
          <Link className="options" to="/contact" onClick={props.clickContact}>Contact</Link>
        </div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/home">Home
          </Route>
          <Route path="/users">About
          </Route>
          <Route path="/resume">Resume
          </Route>
          <Route path="/projects">Projects
          </Route>
          <Route path="/activities">Activities
          </Route>
          <Route path="/statistics">Statistics
          </Route>
          <Route path="/contact">Contact
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;