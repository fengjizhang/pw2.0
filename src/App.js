import './App.css';
import NavBar from './components/NavBar.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
// import Hobbies from './components/Hobbies.jsx';
import Projects from './components/Projects.jsx';
// import Statistics from './components/Statistics.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { IconContext } from "react-icons";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useRef } from 'react';

const App = () => {

  const refGoTop = useRef(null);
  const refGoAbout = useRef(null);
  const refGoResume = useRef(null);
  const refGoProjects = useRef(null);
  const refGoContact = useRef(null);

  const handleClick = () => {
    refGoTop.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleClickAbout = () => {
    refGoAbout.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleClickResume = () => {
    refGoResume.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleClickProjects = () => {
    refGoProjects.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleClickContact = () => {
    refGoContact.current?.scrollIntoView({behavior: 'smooth'});
  }


  return (
    <div className='container'>
      <div className='landingpage'>
      <div ref={refGoTop}></div>
        <NavBar clickAbout={handleClickAbout} clickResume={handleClickResume} clickProjects={handleClickProjects} clickContact={handleClickContact}/>
        <Landing />
        <IconContext.Provider value={{ size: '60px', className: "arrowD"}}>
                <AiOutlineArrowDown onClick={handleClickAbout}/>
        </IconContext.Provider>
      </div>
      <div ref={refGoAbout}></div>
      <About />
      <div ref={refGoResume}></div>
      <Resume />
      <div ref={refGoProjects}></div>
      <Projects />
      {/* <Hobbies />
      <Statistics /> */}
      <div ref={refGoContact}></div>
      <Contact click={handleClick} />
      <Footer />
      
    </div>
  );
}

export default App;