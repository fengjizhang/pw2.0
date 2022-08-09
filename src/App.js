import './App.css';
import NavBar from './components/NavBar.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Hobbies from './components/Hobbies.jsx';
import Projects from './components/Projects.jsx';
import Statistics from './components/Statistics.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { IconContext } from "react-icons";
import { AiOutlineArrowDown } from "react-icons/ai";

const App = () => {

  return (
    <div className='container'>
      <div className='landingpage'>
        <NavBar />
        <Landing />
        <IconContext.Provider value={{ size: '60px', className: "arrowD"}}>
                <AiOutlineArrowDown />
        </IconContext.Provider>
      </div>
      <About />
      <Resume />
      <Projects />
      {/* <Hobbies />
      <Statistics /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;