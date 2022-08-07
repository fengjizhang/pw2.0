import './App.css';
import NavBar from './components/NavBar.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Hobbies from './components/Hobbies.jsx';
import Projects from './components/Projects.jsx';


function App() {
  return (
    <div className='container'>
      <NavBar />
      <Landing />
      <About />
      <Resume />
      <Projects />
      <Hobbies />
    </div>
  );
}

export default App;