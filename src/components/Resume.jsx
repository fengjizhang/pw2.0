import '../css files/resume.css';

const Resume = (props) => {

    return (
        <div className="resumePage">
            <h4 className='resumeone'>Resume</h4>
            <div className='resumetwo'>More of my credentials.</div>
            <div className='resumethree'>Here are my experiences and education.</div><br></br>
            <p className='resumefour'>Software Engineering Projects</p>
            <p>,.............</p>
            <p>,.............</p>

            <p className='resumefour'>Background Education</p>
            <div><span>Bachelor's Degree</span><span>Ohio State University, Electrical and Computer Engineering</span></div>
            <div><span>Bachelor's</span><span>University of Pittsburgh, Economics</span></div>
            <div><span>High School Degree</span><span>Jericho Senior High School</span></div>
        </div>
    )
}

export default Resume;