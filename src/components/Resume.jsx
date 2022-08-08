import '../css files/resume.css';

const Resume = (props) => {

    return (
        <div className="resumePage">
            <h4 className='resumeone'>Resume</h4>
            <div className='resumetwo'>More of my credentials.</div>
            <div className='resumethree'>Here are my experiences and education.</div><br></br>
            <p className='resumefour'>Software Engineering Projects</p>
            <div className='containerExp'>
                <p className='resume5'>Bark<br></br>
                <span className='resume6'>Fullstack social media website</span><br></br>
                <span className='resume7'>Collaborated with a team of six engineers to build a responsive app utilizing Next.js, Google Maps API, that allowed pet owners to connect with other pet owners in close proximity.
                Created, managed, and stored tables of user data using PostgreSQL database. 
                Developed app integration with REST and other APIs for login authentication, Google Maps, chat functions and other services.
                Used Git and Github for source control and repo management. 
                Participated in daily standups, codereviews, and debugged as part of AGILE development team to ensure all code was within standards and specifications of the team. </span>
                </p>
            </div>
            <div className='containerExp'>
                <p className='resume5'>Blaze<br></br>
                <span className='resume6'>Back-End API</span><br></br>
                <span className='resume7'>Reduced latency of database query from 400ms to 30ms by identifying database bottleneck with database tool and refactoring cost heavy queries.
                Managed session based redirection utilizing express routing, and RESTful conventions, ensuring secure routes and authenticated browsing.
                Responsible for building API endpoints and tested with Postman REST clients. 
                Deployed five EC2 instances on AWS behind Elastic Load Balancer to sustain 600 RPS.
                </span>
                </p>
            </div>

            <div className='containerExp'>
                <p className='resume5'>BlueMountain Interactive UI<br></br>
                <span className='resume6'>Front-End web app</span><br></br>
                <span className='resume7'>Designed and styled web app with quality aesthetics utilizing React higher order functions that presents an effective and responsive website.
                    Utilized axios client to interact with RESTful API in a controlled session.
                </span>
                </p>
            </div>

            <p className='resumefour'>Education</p>
            <div className='containerEdu'>
                <p className='resume8'>Ohio State University <br></br><span className='resume11'>Bachelor's Degree 2020-2024</span><br></br>
                <span className='resume9'>Major in Electrical and Computer Engineering, specializing in computer engineering.</span><br></br>
                </p>
            </div>

            <div className='containerEdu'>
                <p className='resume8'>University of Pittsburgh <br></br><span className='resume11'>Bachelor's Degree 2017-2019</span><br></br>
                <span className='resume9'>Majored in Economics</span><br></br>
                </p>
            </div>
        </div>
    )
}

export default Resume;