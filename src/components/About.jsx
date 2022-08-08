import '../css files/about.css';

const About = (props) => {

    return (
        <div className="about">
            <div className='one'>About</div>
            <p className='two'>Let me introduce myself.</p>
            <div className='three'>I am a full-stack engineer majoring in Electrical and Computer Engineering at Ohio State University. I am graduating May 2024.
                 My primary interests have been software engineering, operating systems and interface design, and the list is still growing. I am an 
                 independent teamworker, strong in picking up things quickly and learning as we go. </div><br></br>
            <div className='pands'>
                <div className='section2'>
                    <h3>Profile</h3>
                    <div className='profileS'>I am looking for software engineering opportunities, if you think I'm a good fit don't hesitate to 
                        contact me.</div><br></br>
                    <div className='category'>Email:</div>
                    <div className='info'>fengji.zhang0@gmail.com</div>
                    <div className='category'>Phone:</div>
                    <div>(917) 251 - 3612</div>
                </div>
                <div >
                    <h3>Skills</h3>
                    <div className='skillsSection'>
                        <div className='category'>Front-End: <span className='skills5'>JavaScript (ES5 and ES6), TypeScript, NextJS, React, HTML5, CSS3, Redux, Authentication.</span></div>
                        <div className='category'>Back-End: <span className='skills5'>Node.js, Express, PostgreSQL, MongoDB, MySQL, RESTful API Development</span></div>
                        <div className='category'>Testing/Deployment: <span className='skills5'>Jest, Mocha, Chai, AWS: EC2 / RDS / S3, artillery, Jmeter</span></div>
                        <div className='category'>Development: <span className='skills5'>Vim, Git, npm, Webpack, Babel, Agile Methodology, Scrum</span></div>
                        <div className='category'>Engineering: <span className='skills5'>C++, Java, Matlab, Solidworks</span></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;