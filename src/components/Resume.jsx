import '../css files/resume.css';

const Resume = (props) => {

    return (
        <div className="resumePage">
            <h4 className='resumeone'>Resume</h4><br></br>
            <div className='resumetwo'>More of my credentials.</div>
            <div className='resumethree'>Here are my experiences and education.</div><br></br>
            <p className='resumefour'>Software Engineering Applications</p>

            <div className='containerExp'>
                <p className='resume5'>CTrack 1.0<br></br>
                <span className='resume6'>Fullstack app that tracks and visualizes location of celestial objects. </span><br></br>
                <span className='resume7'>Visualized location data of celestial objects relative to the planet in a presentable fashion utilizing leaflet map library. 
                    Implemented REST integration with data APIs for user option customization, utilizing NodeJS, and MongoDB for database access and storage. 
                    Designed a rich and responsive user experience interface utilizing ReactJS, which provides users with options for a customized display on map.
                </span>
                </p><br></br>
            </div>


            <div className='containerExp'>
                <p className='resume5'>Bark<br></br>
                <span className='resume6'>Fullstack social media website</span><br></br>
                <span className='resume7'>Collaborated with a team of six engineers to build a responsive app utilizing Next.js, Google Maps API, that allowed pet owners to connect with other pet owners in close proximity.
                Created, managed, and stored tables of user data using PostgreSQL database. 
                Developed app integration with REST and other APIs for login authentication, Google Maps, chat functions and other services.
                Used Git and Github for source control and repo management. 
                Participated in daily standups, codereviews, and debugged as part of AGILE development team to ensure all code was within standards and specifications of the team. </span>
                </p><br></br>
            </div>
            <div className='containerExp'>
                <p className='resume5'>Blaze<br></br>
                <span className='resume6'>Back-End API</span><br></br>
                <span className='resume7'>Reduced latency of database query from 400ms to 30ms by identifying database bottleneck with database tool and refactoring cost heavy queries.
                Managed session based redirection utilizing express routing, and RESTful conventions, ensuring secure routes and authenticated browsing.
                Responsible for building API endpoints and tested with Postman REST clients. 
                Deployed five EC2 instances on AWS behind Elastic Load Balancer to sustain 600 RPS.
                </span>
                </p><br></br>
            </div>

            <div className='containerExp'>
                <p className='resume5'>BlueMountain Interactive UI<br></br>
                <span className='resume6'>Front-End web app</span><br></br>
                <span className='resume7'>Designed and styled web app with quality aesthetics utilizing React higher order functions that presents an effective and responsive website.
                    Utilized axios client to interact with RESTful API in a controlled session.
                </span>
                </p><br></br>
            </div>

                {/* <p className='resumefour'>Education</p>
                <div className='containerEdu'>
                    <p className='resume8'>Ohio State University - Electrical and Computer Engineering <br></br><span className='resume11'>BS.ECE, Expected Graduation: Spring 2024</span><br></br>
                    <span className='resume9'>Relevant Courseworks: Software in Java I &#38; II, Programming in C, Programming in C++, Data Structure &#38; Algorithms, Solidworks, Matlab</span><br></br>
                    </p><br></br>
                </div> */}

            <p className='resumefour'>Education</p>
            <div className='educationContainer'>
                <span className='left1'>
                    <span className='resume10'>B.S. ECE</span>
                    <span className='resume13'>2024</span> 
                </span>
                <span className='right1'>

                    <span className='resume11'>Ohio State University - Electrical and Computer Engineering</span><br></br>
                    <span className='resume12'>Relevant Courseworks: Software in Java I &#38; II, Advanced C Programming, C++, Data Structure &#38; Algorithms, Solidworks, Matlab</span><br></br>
                </span>
            </div>

            {/* <div className='containerEdu'>
                <p className='resume8'>University of Pittsburgh <br></br><span className='resume11'>Bachelor's Degree 2017-2019</span><br></br>
                <span className='resume9'>Majored in Economics</span><br></br>
                </p><br></br>
            </div> */}
        </div>
    )
}

export default Resume;