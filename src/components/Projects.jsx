import '../css files/projects.css';
import bark from '../images/bark.jpeg';
import api from '../images/api.png';
import fend from '../images/fend.png';
import websitepic from '../images/website.png';
import navi from '../images/navi.png';

const Projects = (props) => {

    const projectContent1 = [bark, api, fend, websitepic];
    const projectContent3 = [[bark, 'https://github.com/fengjizhang/Bark'], [api, 'https://github.com/rfp-sdc-blaze'], [fend, 'https://github.com/Blue-Mountain-Lightning/bml-fec'], [websitepic, 'https://github.com/fengjizhang/pw2.0']];

    const listItems = projectContent3.map((obj) => {
        return (
            <div className='object1' key={obj}>
                    <a href={obj[1]} target="_blank" rel="noreferrer"><img src={obj[0]} alt="bark" width='300px' height='250px' /></a>
            </div>
        )
    });
    //edit here as progress gets complete and new projects are started.
    const projectContent2 = [[navi,'https://github.com/fengjizhang/PV9']];

    const listItems2 = projectContent2.map((obj) => {
        return (
            <div className='object1' key={obj}>
                    <a href={obj[1]} target="_blank" rel="noreferrer"><img src={obj[0]} alt="bark" width='300px' height='250px' /></a>
            </div>
        )
    });

    return (
        <div className="projects">
            <div className="projects1">Projects</div>
            <div className="projects2">Checkout my creations!</div>
            {/* cards that opens a modal and the modal should contain picture, link to github, brief description. */}
            <div className='projectsContainer'>
                {listItems}
            </div>


            <div className='projectsContainer'>
                {listItems2}
            </div>


        </div>
    )
}

export default Projects;